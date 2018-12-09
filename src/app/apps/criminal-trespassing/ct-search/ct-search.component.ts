import { Component } from '@angular/core';
import { Constants } from '../services/constants.service';
import { TrespasserWarning } from '../models/trespasser-warning.model';
import { TrespasserService } from '../services/trespasser.service';

@Component({
    selector: 'app-ct-search',
    templateUrl: 'ct-search.component.html',
    styleUrls: ['ct-search.component.scss']
})
export class CtSearchComponent {
  warning: TrespasserWarning = new TrespasserWarning();


  constructor(public constants: Constants, private trespasserService: TrespasserService) {}

  search(e) {

    console.log('Search Values:', this.warning);
  }
}
