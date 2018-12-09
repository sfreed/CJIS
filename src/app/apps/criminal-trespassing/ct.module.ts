import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { TabViewModule } from 'primeng/tabview';
import { AccordionModule } from 'primeng/accordion';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextModule } from 'primeng/inputtext';
import { ContextMenuModule } from 'primeng/contextmenu';
import { FieldsetModule } from 'primeng/fieldset';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ToolbarModule } from 'primeng/toolbar';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

import { CtListComponent } from './ct-list/ct-list.component';
import { CtSearchComponent } from './ct-search/ct-search.component';
import { CtDetailsComponent } from './ct-details/ct-details.component';
import { CtAddComponent } from './ct-add/ct-add.component';

import { TrespasserService } from './services/trespasser.service';
import { Constants } from './services/constants.service';
import { CtPopupComponent } from './ct-popup/ct-popup.component';
import { HttpModule } from '@angular/http';
import { TabManagerService } from './services/tab-manager.service';
@NgModule({
  declarations: [
    CtListComponent, CtSearchComponent, CtDetailsComponent, CtAddComponent, CtPopupComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, FormsModule, AngularFontAwesomeModule, HttpModule,

    TabViewModule, AccordionModule, TableModule, MultiSelectModule, InputTextModule,
    ContextMenuModule, FieldsetModule, CalendarModule, DropdownModule, ButtonModule,
    BreadcrumbModule, ToolbarModule, OverlayPanelModule, ConfirmDialogModule,
  ],
  providers: [TrespasserService, Constants, TabManagerService, ConfirmationService],
  exports: [
    CtListComponent, CtSearchComponent
  ]
})
export class CtModule { }
