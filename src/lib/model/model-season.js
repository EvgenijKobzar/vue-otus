import Model from "./model.js";
import Type from "../type.js";

export default class ModelSeason extends Model
{
	static getState()
	{
		return {
			id: null,
			title: null,
			serialId: null,
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

		if (Type.isNumber(fields.serialId) || Type.isString(fields.serialId))
		{
			result.serialId = parseInt(fields.serialId);
		}

		if (Type.isNumber(fields.sort) || Type.isString(fields.sort))
		{
			result.sort = parseInt(fields.sort);
		}

		return result;
	}
}