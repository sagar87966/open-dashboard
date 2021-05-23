import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-tool-bar-content',
  templateUrl: './tool-bar-content.component.html',
  styleUrls: ['./tool-bar-content.component.scss'],
})
export class ToolBarContentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let element = document.querySelector('.tool-bar') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('tool-bar-inverse');
    } else {
      element.classList.remove('tool-bar-inverse');
    }
  }
}
