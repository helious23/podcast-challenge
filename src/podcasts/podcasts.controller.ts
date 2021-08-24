import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PodcastsService } from './podcasts.service';
import { Podcast } from './entities/podcast.entity';
import { CreatePodcastDto } from './dtos/create-podcast.dto';
import { CreateEpisodeDto } from './dtos/create-episode.dto';
import { UpdatePodcastDto } from './dtos/update-podcast.dto';
import { Episode } from './entities/episode.entity';
import { UpdateEpisodeDto } from './dtos/update-episode.dto';

@Controller('podcasts')
export class PodcastsController {
  constructor(private readonly podcastService: PodcastsService) {}

  @Get()
  getAll(): Podcast[] {
    return this.podcastService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') podcastId: number): Podcast {
    return this.podcastService.getOne(podcastId);
  }

  @Post()
  createOne(@Body() podcastData: CreatePodcastDto) {
    return this.podcastService.createOne(podcastData);
  }

  @Delete(':id')
  deleteOne(@Param('id') podcastId: number) {
    return this.podcastService.deleteOne(podcastId);
  }

  @Patch(':id')
  updatePodcast(
    @Param('id') podcastId: number,
    @Body() updatePodcastData: UpdatePodcastDto,
  ) {
    return this.podcastService.updatePodcast(podcastId, updatePodcastData);
  }

  @Get(':id/episodes')
  getEpisodeAll(): Episode[] {
    return this.podcastService.getEpisodeAll();
  }

  @Get(':id/episodes/:episodeId')
  getEpisodeOne(@Param('episodeId') episodeId: number): Episode {
    return this.podcastService.getEpisodeOne(episodeId);
  }

  @Post(':id/episodes')
  createEpisode(@Body() episodeData: CreateEpisodeDto) {
    return this.podcastService.createEpisode(episodeData);
  }

  @Patch(':id/episodes/:episodeId')
  updateEpisode(
    @Param('episodeId') episodeId: number,
    @Body() updateEpisodeData: UpdateEpisodeDto,
  ) {
    return this.podcastService.updateEpisode(episodeId, updateEpisodeData);
  }

  @Delete(':id/episodes/:episodeId')
  deleteEpisode(@Param('episodeId') episodeId: number) {
    return this.podcastService.deleteEpisode(episodeId);
  }
}
