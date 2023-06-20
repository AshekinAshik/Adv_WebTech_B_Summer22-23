import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TourGuideController } from './TourGuide/tg.controller';
import { TourGuideService } from './TourGuide/tg.service';


@Module({
  imports: [],
  controllers: [TourGuideController],
  providers: [TourGuideService],
})
export class AppModule {}
