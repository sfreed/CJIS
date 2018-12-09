import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ShellModule } from '../app/shell/shell.module';

import { AppsModule } from '../app/apps/apps.module';
import { ShellComponent } from './shell/shell.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { routing } from './app.routing';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent, ShellComponent
  ],
  imports: [
    routing, ShellModule, AppsModule,

    RouterModule.forChild([{path: '', component: AppComponent}]),

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    RouterModule,
  ]
})
export class AppModule { }
