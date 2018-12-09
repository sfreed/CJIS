import { Component, Input, AfterContentInit, EventEmitter, Output} from '@angular/core';
import { TrespasserService } from '../services/trespasser.service';

import { Constants } from '../services/constants.service';
import { TrespasserWarning } from '../models/trespasser-warning.model';
import { TabManagerService } from '../services/tab-manager.service';
import { ActivatedRoute } from '@angular/router';
import { HistoryService } from 'src/app/common/services/history.service';

@Component({
    selector: 'app-ct-details',
    templateUrl: 'ct-details.component.html',
    styleUrls: ['ct-details.component.scss']
})
export class CtDetailsComponent implements AfterContentInit {
  @Input() trespasserId: any;

  @Output() activateTabEvent = new EventEmitter<string>();

  warning: TrespasserWarning = new TrespasserWarning();

  private sub: any;

  isPopup = false;

  constructor(public constants: Constants, private trespasserService: TrespasserService,
        public tabManagerService: TabManagerService, private route: ActivatedRoute, private historyService: HistoryService) {
    this.sub = this.route.queryParams.subscribe(params => {
      if (params['popup']) {
        this.isPopup = true;

        this.trespasserId = params['id'];
      } else {
        this.isPopup = false;
      }
    });
  }

  ngAfterContentInit() {
    if (this.trespasserId) {
      this.trespasserService.searchForTrespasser(this.trespasserId, this.isPopup)
        .then( res => this.warning = res);
    } else {
       this.warning = new TrespasserWarning();
    }

    this.activateTabEvent.emit('opened');
  }

  save(e) {
    if (this.trespasserId) {
      this.trespasserService.updateTrespasser(this.warning);
    } else {
      this.trespasserService.createTrespasser(this.warning);
    }

    if (this.isPopup) {
      this.isPopup = false;
      window.close();
    } else {
      this.activateTabEvent.emit('closed');
    }
  }

  popout(e) {
    this.trespasserService.storeTrespasser(this.warning);

    this.tabManagerService.popOutTab(this.warning);
    this.activateTabEvent.emit('closed');
  }

  saveToHistory(e) {
    this.historyService.history.push({
      'name': this.warning.trespasser.firstName + ' ' + this.warning.trespasser.lastName,
      'id': this.warning.id,
      'application': 'Criminal Trespassing',
      'time': new Date()
    });
  }
}
