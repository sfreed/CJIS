import { NgModule, Component, ViewChild, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { List, Service } from './app.service';
import { DxDrawerModule, DxDrawerComponent, DxRadioGroupModule, DxListModule, DxToolbarModule } from 'devextreme-angular';

if (!/localhost/.test(document.location.host)) {
    enableProdMode();
}

@Component({
    selector: 'demo-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    providers: [Service]
})
export class AppComponent {
    @ViewChild(DxDrawerComponent) drawer: DxDrawerComponent;
    navigation: List[];
    showSubmenuModes: string[] = ["slide", "expand"];
    positionModes: string[] = ["top", "bottom"];
    showModes: string[] = ["push", "shrink", "overlap"];
    text: string;
    selectedOpenMode: string;
    selectedPosition: string;
    selectedRevealMode: string;
    elementAttr: any;

    constructor(service: Service) {
        this.text = service.getContent();
        this.navigation = service.getNavigationList();
        this.selectedOpenMode = this.showModes[1];
        this.selectedPosition = this.positionModes[0];
        this.selectedRevealMode = this.showSubmenuModes[1];
    }

    toolbarContent = [{
        widget: 'dxButton',
        options: {
            icon: 'menu',
            onClick: () => {
                this.drawer.instance.toggle();
            }
        },
        location: 'before'
    }];
}

@NgModule({
    imports: [
        BrowserModule,
        DxDrawerModule,
        DxRadioGroupModule,
        DxListModule,
        DxToolbarModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule)