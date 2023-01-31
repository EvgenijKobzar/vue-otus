import Type from "../type.js";
import FieldCollection from "../collection/field-collection.js";


export default class Model
{
	#fieldCollection = null;
	#errorCollection = null;

	constructor(options)
	{
		this.options = options || {};

		this.#fieldCollection = new FieldCollection(this);

		if (Type.isObject(options.fields))
		{
			this.initFields(options.fields, false);
		}
	}

	getErrorCollection()
	{
		return this.#errorCollection;
	}

	getFields()
	{
		return this.#fieldCollection.getFields();
	}

	getField(fieldName)
	{
		return this.#fieldCollection.getField(fieldName);
	}

	setField(fieldName, value)
	{
		this.#fieldCollection.setField(fieldName, value);

		return this;
	}

	setFields(fields)
	{
		Object.keys(fields).forEach((key) => {
			this.setField(key, fields[key]);
		});

		return this;
	}

	initFields(fields)
	{
		this.#fieldCollection.initFields(fields);

		return this;
	}

	removeField(fieldName)
	{
		this.#fieldCollection.removeField(fieldName);

		return this;
	}

	isChanged()
	{
		return this.#fieldCollection.isChanged();
	}

	getId()
	{
		return this.getField('id');
	}

	static validate(fields)
	{
		const result = {};

		if (Type.isNumber(fields.id) || Type.isString(fields.id))
		{
			result.id = parseInt(fields.id);
		}

		if (Type.isString(fields.title))
		{
			result.title = fields.title.toString()
		}

		if (Type.isNumber(fields.fileId) || Type.isString(fields.fileId))
		{
			result.fileId = parseInt(fields.fileId);
		}

		if (Type.isString(fields.description))
		{
			result.description = fields.description.toString()
		}

		if (Type.isString(fields.rating))
		{
			result.rating = fields.rating.toString();
		}

		if (Type.isString(fields.duration))
		{
			result.duration = fields.duration.toString();
		}

		if (Type.isString(fields.productionPeriod))
		{
			result.productionPeriod = fields.productionPeriod.toString();
		}

		if (Type.isString(fields.quality))
		{
			result.quality = fields.quality.toString();
		}

		return result;
	}

	static getState()
	{
		new Error('getState is not implemented')
	}

	static create(fields)
	{
		const self = this;
		const payload = self.validate(fields)
		let item = self.getState();

		item = Object.assign(item, payload);

		return new self(item);
	}
}