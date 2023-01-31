import Collection from "./collection.js";
import SeasonModel from "../model/season-model.js";

export default class SeasonCollection extends Collection
{
	serviceName = 'otus.season.';
	resultItem = 'season';
	resultList = 'seasons';

	createModel(fields)
	{
		return SeasonModel.create(fields);
	}
}