import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { TrespasserService } from '../services/trespasser.service';
import { TrespasserWarning } from '../models/trespasser-warning.model';
import { Constants } from '../services/constants.service';

import { MenuItem, SortEvent, ConfirmationService } from 'primeng/api';
import { TabManagerService } from '../services/tab-manager.service';

@Component({
    selector: 'app-ct-list',
    templateUrl: 'ct-list.component.html',
    styleUrls: ['ct-list.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CtListComponent implements OnInit {
  selectedWarning: TrespasserWarning;

  cols: any[];

  selectedColumns: any[];

  contextMenuList: MenuItem[];

  constructor(public trespasserService: TrespasserService, public constants: Constants, private router: Router,
    public tabManagerService: TabManagerService, private confirmationService: ConfirmationService) {
  }

  ngOnInit() {
    this.cols = [
        { parent: 'trespasser', field: 'firstName', header: 'First Name', },
        { parent: 'trespasser', field: 'lastName', header: 'Last Name' },
        { parent: 'trespasser', field: 'middleName', header: 'Middle Name' },
        { field: 'issueDate', header: 'Issue Date' },
        { field: 'expirationDate', header: 'Expiration Date' },
        { parent: 'premisis' , field: 'name', header: 'Premisis' },
        { parent: 'reportingOfficer', fields: ['firstName', 'lastName'], header: 'Reporting Officer' }
    ];

    this.selectedColumns = this.cols;
  }

  deleteTrespasser(warning: TrespasserWarning) {
    this.trespasserService.deleteTrespasser(warning);
  }

  saveTrespasser() {
    this.trespasserService.updateTrespasser(this.selectedWarning);
  }

  newTrespasser() {
    this.tabManagerService.openTab();
    // window.open('/ct-popuptype=ct-details', '_blank');
  }

  getCellData(data, column): string {
    let returnVal = '';
    if (column.parent && column.field) {
      returnVal = data[column.parent][column.field];
    } else if (column.parent && column.fields) {
      returnVal = data[column.parent][column.fields[0]] + ' ' + data[column.parent][column.fields[1]];
    } else {
      returnVal = data[column.field];
    }
    return returnVal;
  }

  getSortField (column): string {
    let returnVal = '';
    if (column.parent && column.field) {
      returnVal = column.parent + '.' + column.field;
    } else if (column.parent && column.fields) {
      returnVal = column.parent + '.' + column.fields[0];
    } else {
      returnVal = column.field;
    }
    return returnVal;
  }

  customSort(event: SortEvent) {
    event.data.sort((data1, data2) => {
        const value1 = data1[event.field];
        const value2 = data2[event.field];
        let result = null;

        if (value1 == null && value2 != null) {
            result = -1;
        } else if (value1 != null && value2 == null) {
            result = 1;
        } else if (value1 == null && value2 == null) {
            result = 0;
        } else if (typeof value1 === 'string' && typeof value2 === 'string') {
            result = value1.localeCompare(value2);
        } else {
            result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;
        }

        return (event.order * result);
    });
  }
  confirm() {
    this.confirmationService.confirm({
        message: 'Are you sure that you want to delete this record??',
        accept: () => {
          this.deleteTrespasser(this.selectedWarning);
        }
    });
  }

  onRowSelect(e) {
    this.tabManagerService.openTab(this.selectedWarning);
  }
}
