import Collection from "./collection.js";
import ModelSerial from "../model/model-serial.js";

export default class CollectionSerial extends Collection
{
	serviceName = 'otus.serial.';
	resultItem = 'serial';
	resultList = 'serials';

	createModel(fields)
	{
		return ModelSerial.create(fields);
	}
}