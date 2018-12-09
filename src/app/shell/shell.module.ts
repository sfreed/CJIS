import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { HeaderComponent } from '../shell/header/header.component';
import { ViewportComponent } from '../shell/viewport/viewport.component';
import { FooterComponent } from '../shell/footer/footer.component';

import { DxDrawerModule, DxListModule, DxTemplateModule, DxToolbarModule } from 'devextreme-angular';
import { RouterModule } from '@angular/router';
import { Service } from './viewport/app.service';
import { ShellComponent } from './shell.component';
import { routing } from '../common/app.routing';
import { MenuService } from '../common/services/menu.service';
import { NavigationService } from '../common/services/navigation.service';

import { PanelMenuModule } from 'primeng/panelmenu';
import { OrderListModule } from 'primeng/orderlist';
import { ButtonModule } from 'primeng/components/button/button';
import { AppsModule } from '../apps/apps.module';

@NgModule({
  declarations: [
    HeaderComponent, ViewportComponent, FooterComponent, ShellComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, FormsModule, AngularFontAwesomeModule,

    routing, RouterModule.forChild([{path: '', component: ShellComponent}]),

    DxDrawerModule, DxListModule, DxTemplateModule, DxToolbarModule,

    PanelMenuModule, OrderListModule, ButtonModule,

    AppsModule
  ],
  providers: [Service, MenuService, NavigationService],
  exports: [
    HeaderComponent, ViewportComponent, FooterComponent, ShellComponent
  ],
  bootstrap: [ShellComponent],
})
export class ShellModule { }
