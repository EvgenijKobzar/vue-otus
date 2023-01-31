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
		new Error('validate is not implemented')
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

		return new self({fields: item});
	}
}