import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MenuService {

  private leftMenuSource = new Subject<string>();
  private rightMenuSource = new Subject<string>();

  leftMenu$ = this.leftMenuSource.asObservable();
  rightMenu$ = this.rightMenuSource.asObservable();

  toggleLeftMenu() {
    console.log('Toggling Left Menu');
    this.leftMenuSource.next('toggle');
  }

  toggleRightMenu() {
    console.log('Toggling Right Menu');
    this.rightMenuSource.next('toggle');
  }
}
