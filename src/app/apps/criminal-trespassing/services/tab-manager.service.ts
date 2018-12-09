import { Injectable } from '@angular/core';
import { TrespasserWarning } from '../models/trespasser-warning.model';

@Injectable()
export class TabManagerService {
  tabs: any[] = [];

  public index = 0;

  // called when the context menu is opened and view is selected
  openTab(warning?: TrespasserWarning) {
    if (warning) {
      this.tabs.push({ label: warning.trespasser.lastName + ', ' + warning.trespasser.firstName, value: warning.id });
    } else {
      this.tabs.push({ label: 'New Trespasser Warning', value: '' });
    }
  }

  // after tab is rendered, the detailsComponent sends
  // a callback to this method to select it
  public activateTab(event: string) {
    if (event === 'opened') {
      const timer = setTimeout(function(t) {
        t.index = t.tabs.length;
      }, 1000,  this);
    }
    if (event === 'closed') {
      console.log('closing tab index ' + this.index);
      this.tabs.splice(this.index - 1, 1);
    }
  }

  public closeTab(event) {
    console.log('closing tab index final ' + event);
  }

  popOutTab(warning: TrespasserWarning) {
    if (warning.id) {
      window.open('/ct-popup?popup=true&type=ct-details&id=' + warning.id, '_blank');
    } else {
      window.open('/ct-popup?popup=true&type=ct-details', '_blank');
    }
  }
}
