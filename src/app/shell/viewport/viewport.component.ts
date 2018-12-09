import { Component, ViewChild, OnDestroy } from '@angular/core';
import { List, Service } from './app.service';
import { Subscription } from 'rxjs';
import { DxDrawerComponent } from 'devextreme-angular';
import { MenuService } from 'src/app/common/services/menu.service';
import { NavigationService } from 'src/app/common/services/navigation.service';
import { HistoryService } from 'src/app/common/services/history.service';


@Component({
    selector: 'app-viewport',
    templateUrl: 'viewport.component.html',
    styleUrls: ['viewport.component.scss'],
    providers: [Service]
})
export class ViewportComponent implements OnDestroy {
  @ViewChild('leftDrawer') leftDrawer: DxDrawerComponent;
  @ViewChild('rightDrawer') rightDrawer: DxDrawerComponent;

    navigation: List[];
    showSubmenuModes: string[] = ['slide', 'expand'];
    positionModes: string[] = ['left', 'right'];
    showModes: string[] = ['push', 'shrink', 'overlap'];
    selectedOpenMode: string;
    selectedPosition: string;
    selectedRevealMode: string;
    elementAttr: any;

    leftMenuSubscription: Subscription;
    rightMenuSubscription: Subscription;

    constructor(public historyService: HistoryService, menuService: MenuService,
      public navigationService: NavigationService) {
        this.selectedOpenMode = this.showModes[1];
        this.selectedPosition = this.positionModes[0];
        this.selectedRevealMode = this.showSubmenuModes[0];

        this.leftMenuSubscription = menuService.leftMenu$.subscribe(
          val => {
            this.leftDrawer.instance.toggle();
        });

        this.rightMenuSubscription = menuService.rightMenu$.subscribe(
          val => {
            this.rightDrawer.instance.toggle();
        });
    }

    ngOnDestroy() {
      this.leftMenuSubscription.unsubscribe();
      this.rightMenuSubscription.unsubscribe();
    }
}

