import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DxDashboardControlModule } from 'devexpress-dashboard-angular';
import { DxPopupModule } from 'devextreme-angular/ui/popup';
import { DemoPopupComponent } from './demo-popup/demo-popup.component'

@NgModule({
  declarations: [
    AppComponent,
    DemoPopupComponent,
  ],
  imports: [
    BrowserModule,
    DxDashboardControlModule,
    DxPopupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }