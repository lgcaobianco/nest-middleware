import { Controller, Get } from '@nestjs/common';
import { Watch } from 'src/model/Watch';
import WatchService from './watch-service';

@Controller('watches')
export default class WatchController {
  constructor(private readonly watchService: WatchService) {}

  @Get()
  getWatches(): Watch[] {
    return this.watchService.getWatches();
  }
}
