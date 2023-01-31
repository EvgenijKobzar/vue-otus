import Collection from "./collection.js";
import SerialModel from "../model/serial-model.js";

export default class SerialCollection extends Collection
{
	serviceName = 'mft.report.';

	getModelClass()
	{
		return SerialModel;
	}

}