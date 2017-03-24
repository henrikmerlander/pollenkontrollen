import { Injectable } from '@angular/core';
import { Region } from './region';

@Injectable()
export class RegionService {

  constructor() { }

  getRegions(): Promise<Region[]> {
    return Promise.resolve(REGIONS);
  }

  getRegion(id: number): Promise<Region> {
    return this.getRegions()
      .then(region => region.find(region => region.id === id));
  }
}

const REGIONS: Region[] = [
  { id: 1, name: "Stockholm" },
  { id: 2, name: "Göteborg" },
  { id: 3, name: "Malmö" }
];
