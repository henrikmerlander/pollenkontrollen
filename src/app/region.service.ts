import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Region } from './models/region';

@Injectable()
export class RegionService {

  constructor(private db: AngularFireDatabase) { }

  getRegions(): Observable<Region[]> {
    return this.db.list<Region>('regions').valueChanges();
  }

  getRegion(id: string): Observable<Region> {
    return this.db.object<Region>('regions/' + id).valueChanges();
  }
}
