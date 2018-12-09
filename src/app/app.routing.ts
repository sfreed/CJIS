import { Routes, RouterModule } from '@angular/router';

import { CtListComponent } from './apps/criminal-trespassing/ct-list/ct-list.component';
import { CtDetailsComponent } from './apps/criminal-trespassing/ct-details/ct-details.component';
import { CtAddComponent } from './apps/criminal-trespassing/ct-add/ct-add.component';

import { BoloComponent } from './apps/bolo/bolo.component';
import { CtPopupComponent } from './apps/criminal-trespassing/ct-popup/ct-popup.component';
import { ShellComponent } from './shell/shell.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/shell', pathMatch: 'full' },
  { path: 'shell', component: ShellComponent, children: [
    { path: 'ct-list', component: CtListComponent, children : [
      { path: 'ct-details', component: CtDetailsComponent },
      { path: 'ct-popup', component: CtPopupComponent }
    ]}
  ]},
  { path: 'ct-popup', component: CtPopupComponent, children: [
    { path: 'ct-add', component: CtAddComponent, outlet: 'ct-popup' },
    { path: 'ct-details', component: CtDetailsComponent, outlet: 'ct-popup' }
  ]},
  { path: 'bolo', component: BoloComponent },
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes); // , { enableTracing: true });
