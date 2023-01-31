import Collection from "./collection.js";
import EpisodeModel from "../model/season-model.js";

export default class EpisodeCollection extends Collection
{
	serviceName = 'otus.episode.';
	resultItem = 'episode';
	resultList = 'episodes';

	createModel(fields)
	{
		return EpisodeModel.create(fields);
	}
}