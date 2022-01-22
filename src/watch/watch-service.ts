import { Injectable } from '@nestjs/common';
import { Watch } from 'src/model/Watch';

@Injectable()
export default class WatchService {
  watches = [
    { name: 'tissot white', value: 749.99 },
    { name: 'tissot black', value: 899.99 },
  ] as Watch[];

  getWatches(): Watch[] {
    return this.watches;
  }
}
