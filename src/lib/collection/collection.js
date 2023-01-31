import Type from "../type.js";
import Text from "../text.js";
import Rest from "../provider/rest.js";

export default class Collection
{
	#map = new Map();
	serviceName = '';

	getModels()
	{
		return this.#map.values();
	}

	getModelClass()
	{
		new Error('ModelClass is not implemented')
	}

	create(fields)
	{
		const cmd = this.serviceName + 'list';

		(new Rest({
			cmd,
			fields
		}))
		.then(() => this.refreshByFilter())
	}
	init(map)
	{
		this.clear();

		const modelClass = this.getModelClass();

		map.forEach((item, index) =>
		{
			if (item['id'] > 0)
			{
				let model = new modelClass({
					fields : {
						id : Text.toNumber(item.id),
						code: item.code.toString(),
						type: item.type.toString(),
						active: item.active.toString(),
					},
				});

				this.#map.set(
					Text.toNumber(index),
					model
				)
			}
		});
	}

	refreshByFilter(filter = {})
	{
		return new Promise((resolve, reject) =>
		{
			const cmd = this.getRestCmdList();

			(new Rest({
				cmd,
				filter
			}))
			.then((result) =>
			{
				let items = result.data.result.reports ?? null;

				if (Type.isArrayFilled(items))
				{
					this.init(items);
				}

				resolve()
			})
			.catch(reject)
		});
	}

	getById(id)
	{
		for (let model of this.#map.values())
		{
			if (model.getId() === Text.toNumber(id))
			{
				return model
			}
		}
	}

	getFieldsById(id)
	{
		return this.getById(id)?.getFields() || 0;
	}

	getByIndex(index)
	{
		return this.#map.get(Text.toNumber(index))
	}

	getFieldsByIndex(index)
	{
		return this.getByIndex(index)?.getFields() || 0;
	}

	count()
	{
		return this.#map.size;
	}

	clear()
	{
		this.#map.clear();

		return this;
	}
}