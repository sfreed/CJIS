import { Injectable } from '@angular/core';
import { TrespasserWarning } from '../models/trespasser-warning.model';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
@Injectable()
export class TrespasserService {

  storedTrespassers = {};

  trespassers: Observable<TrespasserWarning[]>;

  constructor(private http: Http) {
    this.trespassers = this.http.get('assets/data/trespassers.json').pipe(
      map(res => <TrespasserWarning[]> res.json())
    );
  }

  createTrespasser(trespasser: TrespasserWarning): void {
    this.trespassers
      .subscribe(data => data.push(trespasser));
  }

  updateTrespasser(trespasser: TrespasserWarning): void {
    console.log('updating trespasser', trespasser);
    this.trespassers
      .subscribe(data => data.fill(trespasser, data.indexOf(trespasser), data.indexOf(trespasser) + 1));
  }

  deleteTrespasser(trespasser: TrespasserWarning): void {
    this.trespassers
      .subscribe(data => data.slice(data.indexOf(trespasser, 1)));
  }

  getTrespassers(): Observable<TrespasserWarning[]> {
    return this.trespassers;
  }

  searchForTrespasser(id: string, isStored: boolean): Promise<TrespasserWarning> {
    console.log('stored?',  this.storedTrespassers);
    if (isStored) {

      return this.trespassers
      .toPromise()
        .then(data => {
          return data.filter(trespasser => trespasser.id === id)[0];
        });

      // const warning = this.storedTrespassers[id];
      // console.log('returning stored', warning);

      // return new Promise(warning)
      //   .then(data => {
      //     return <TrespasserWarning> data;
      //   });
    } else {
      return this.trespassers
        .toPromise()
          .then(data => {
            return data.filter(trespasser => trespasser.id === id)[0];
          });
    }
  }

  storeTrespasser(warning: TrespasserWarning) {
    this.storedTrespassers[warning.id] = warning;

    console.log('stored', this.storedTrespassers);
  }
}
