import { Injectable } from '@nestjs/common';
import { Podcast } from './entities/podcast.entity';
import { CreatePodcastDto } from './dtos/create-podcast.dto';
import { Episode } from './entities/episode.entity';
import { UpdatePodcastDto } from './dtos/update-podcast.dto';
import { CreateEpisodeDto } from './dtos/create-episode.dto';
import { UpdateEpisodeDto } from './dtos/update-episode.dto';

@Injectable()
export class PodcastsService {
  private podcasts: Podcast[] = [];
  private episodes: Episode[] = [];

  getAll(): Podcast[] {
    return this.podcasts;
  }

  getOne(podcastId: number): Podcast {
    return this.podcasts.find((podcast) => podcast.id === podcastId);
  }

  createOne(podcastData: CreatePodcastDto) {
    this.podcasts.push({
      id: this.podcasts.length + 1,
      ...podcastData,
    });
  }

  deleteOne(podcastId: number) {
    this.getOne(podcastId);
    this.podcasts = this.podcasts.filter((podcast) => podcast.id !== podcastId);
  }

  updatePodcast(podcastId: number, podcastData: UpdatePodcastDto) {
    const podcast = this.getOne(podcastId);
    this.deleteOne(podcastId);
    this.podcasts.push({ ...podcast, ...podcastData });
  }

  getEpisodeAll(): Episode[] {
    return this.episodes;
  }

  getEpisodeOne(episodeId: number): Episode {
    return this.episodes.find((episode) => episode.id === episodeId);
  }

  createEpisode(episodeData: CreateEpisodeDto) {
    this.episodes.push({
      id: this.episodes.length + 1,
      ...episodeData,
    });
  }

  deleteEpisode(episodeId: number) {
    this.getEpisodeOne(episodeId);
    this.episodes = this.episodes.filter((episode) => episode.id !== episodeId);
  }

  updateEpisode(episodeId: number, updateEpisodeData: UpdateEpisodeDto) {
    const episode = this.getEpisodeOne(episodeId);
    this.deleteEpisode(episodeId);
    this.episodes.push({ ...episode, ...updateEpisodeData });
  }
}
