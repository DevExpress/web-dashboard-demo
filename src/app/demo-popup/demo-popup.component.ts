import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-popup',
  templateUrl: './demo-popup.component.html',
  styleUrls: ['./demo-popup.component.scss']
})
export class DemoPopupComponent implements OnInit {

  visible: boolean = true;
  constructor() { }

  ngOnInit() {
  }
  get nativeWindow() : Window {
    return window;
 }

  hideDemoPopup() {
    this.visible = false;
  }
  popupHeight() {
    return this.nativeWindow.innerHeight;
  }
}
