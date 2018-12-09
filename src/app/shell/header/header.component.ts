import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { DxDrawerComponent } from 'devextreme-angular';
import { MenuService } from 'src/app/common/services/menu.service';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
  constructor(private menuService: MenuService) {

  }

  toolbarContent = [{
      widget: 'dxButton',
      options: {
          icon: 'menu',
          onClick: () => {
            this.menuService.toggleLeftMenu();
          }
      },
      location: 'before'
    }, {
    location: 'center',
      template: () => {
          return '<div class="header-text">Courtware Judicial Information System</div>';
      }
    }, {
      widget: 'dxButton',
      options: {
        icon: 'menu',
        onClick: () => {
          this.menuService.toggleRightMenu();
        }
      },
      location: 'after'
  }];


}
