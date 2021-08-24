import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PodcastsModule } from './podcasts/podcasts.module';

@Module({
  imports: [PodcastsModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
