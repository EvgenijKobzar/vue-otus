import Collection from "./collection.js";
import ModelSeason from "../model/model-season.js";

export default class CollectionSeason extends Collection
{
	serviceName = 'otus.season.';
	resultItem = 'season';
	resultList = 'seasons';

	createModel(fields)
	{
		return ModelSeason.create(fields);
	}
}