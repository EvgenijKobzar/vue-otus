import Type from "../type.js";
import Text from "../text.js";
import Rest from "../provider/rest.js";

export default class Collection
{
	#map = new Map();
	serviceName = '';
	resultItem = '';
	resultList = '';

	toArray()
	{
		const list = [];

		for (let model of this.#map.values())
		{
			list.push(model.getFields())
		}

		return list;
	}

	getModelClass()
	{
		new Error('ModelClass is not implemented')
	}

	create(fields)
	{
		return new Promise((resolve, reject) =>
		{
			const cmd = this.serviceName + 'add';

			(new Rest({
				cmd,
				fields
			}))
			.then(() => {
				this.refreshByFilter();
				resolve()
			})
		})
	}

	init(map)
	{
		this.clear();

		map.forEach((fields, index) =>
		{
			if (fields['id'] > 0)
			{
				this.#map.set(
					Text.toNumber(index),
					this.createModel(fields)
				)
			}
		});
	}

	createModel(fields)
	{
		new Error('create is not implemented')
	}

	refreshByFilter(filter = {})
	{
		return new Promise((resolve, reject) =>
		{
			const cmd = this.serviceName + 'list';

			(new Rest({
				cmd,
				filter,
				order: {sort: 'asc'}
			}))
			.then((result) =>
			{
				let items = result.data.result[this.resultList] ?? null;

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