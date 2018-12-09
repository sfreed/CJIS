import { Injectable } from '@angular/core';
import { TrespasserWarning } from '../models/trespasser-warning.model';
import { Http } from '@angular/http';

@Injectable()
export class TrespasserService {

  trespassers: Promise<TrespasserWarning[]>;

  constructor(private http: Http) {
    this.trespassers = this.http.get('assets/data/trespassers.json')
      .toPromise()
      .then(res => <TrespasserWarning[]> res.json());
  }

  createTrespasser(trespasser: TrespasserWarning): void {
    this.trespassers
      .then(data => data.push(trespasser));
  }

  updateTrespasser(trespasser: TrespasserWarning): void {
    console.log('updating trespasser', trespasser);
    this.trespassers
      .then(data => data.fill(trespasser, data.indexOf(trespasser), data.indexOf(trespasser) + 1));
  }

  deleteTrespasser(trespasser: TrespasserWarning): void {
    this.trespassers
      .then(data => data.slice(data.indexOf(trespasser, 1)));
  }

  getTrespassers(): Promise<TrespasserWarning[]> {
    return this.trespassers;
  }

  searchForTrespasser(id: string): Promise<TrespasserWarning> {
    return this.trespassers
      .then(data => {
         return data.filter(trespasser => trespasser.id === id)[0];
      });
  }
}
