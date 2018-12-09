
import { Component, AfterContentInit } from '@angular/core';
import { TrespasserWarning } from '../models/trespasser-warning.model';
import { Constants } from '../services/constants.service';
import { TrespasserService } from '../services/trespasser.service';

@Component({
    selector: 'app-ct-add',
    templateUrl: 'ct-add.component.html',
    styleUrls: ['ct-add.component.scss']
})
export class CtAddComponent {
  warning: TrespasserWarning = new TrespasserWarning();


  constructor(public constants: Constants, private trespasserService: TrespasserService) {}

   save(e) {
    this.trespasserService.createTrespasser(this.warning);
  }
}
