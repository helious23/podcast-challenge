import { IsArray, IsNumber, IsString } from 'class-validator';
import { Episode } from '../entities/episode.entity';

export class CreatePodcastDto {
  @IsString()
  readonly title: string;

  @IsString()
  readonly category: string;

  @IsNumber()
  readonly rating: number;

  @IsArray()
  readonly episodes: Episode[];
}
