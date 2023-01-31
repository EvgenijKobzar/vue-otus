import Type from "../type.js";
import Model from "./model.js";

export default class SerialModel extends Model
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
}