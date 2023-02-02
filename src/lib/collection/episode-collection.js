import Collection from "./collection";
import EpisodeModel from "../model/episode-model";

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