import {Component, HostListener, OnInit} from '@angular/core';
import {Product} from "../model/Product";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @HostListener('document:keydown', ['$event'])
  keydownHandler(event: KeyboardEvent): void {
    if (event && event.ctrlKey && event.keyCode === 116) {
      window.sessionStorage.clear();
    }
  }
}
