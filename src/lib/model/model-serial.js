import Model from "./model.js";
import Type from "../type.js";

export default class ModelSerial extends Model
{
	static getState()
	{
		return {
			id: null,
			title: null,
			fileId: null,
			description: null,
			rating: null,
			duration: null,
			productionPeriod: null,
			quality: null
		}
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
}