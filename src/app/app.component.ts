import { Component } from '@angular/core';
import { DashboardControlArgs, DashboardPanelExtension } from 'devexpress-dashboard/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web-dashboard-demo-preview';


  onBeforeRender(args: DashboardControlArgs) {
    args.component.registerExtension(new DashboardPanelExtension(args.component));
  }
}
