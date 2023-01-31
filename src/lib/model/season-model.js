import Model from "./model.js";
import Type from "../type.js";

export default class SeasonModel extends Model
{
	static getState()
	{
		return {
			id: null,
			title: null,
			fileId: null,
			serialId: null,
			src: null,
			description: null,
			duration: null,
			sort: null,
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

		if (Type.isNumber(fields.serialId) || Type.isString(fields.serialId))
		{
			result.serialId = parseInt(fields.serialId);
		}

		if (Type.isString(fields.description))
		{
			result.description = fields.description.toString()
		}

		if (Type.isString(fields.src))
		{
			result.src = fields.src.toString();
		}

		if (Type.isString(fields.duration))
		{
			result.duration = fields.duration.toString();
		}

		if (Type.isNumber(fields.sort) || Type.isString(fields.sort))
		{
			result.sort = parseInt(fields.sort);
		}

		return result;
	}
}