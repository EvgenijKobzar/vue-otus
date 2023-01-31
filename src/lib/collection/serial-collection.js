import Collection from "./collection.js";
import SerialModel from "../model/serial-model.js";

export default class SerialCollection extends Collection
{
	serviceName = 'otus.serial.';
	resultItem = 'serial';
	resultList = 'serials';

	createModel(fields)
	{
		return SerialModel.create(fields);
	}
}