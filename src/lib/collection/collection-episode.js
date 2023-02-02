import Collection from "./collection";
import ModelEpisode from "../model/model-episode.js";

export default class CollectionEpisode extends Collection
{
	serviceName = 'otus.episode.';
	resultItem = 'episode';
	resultList = 'episodes';

	createModel(fields)
	{
		return ModelEpisode.create(fields);
	}
}