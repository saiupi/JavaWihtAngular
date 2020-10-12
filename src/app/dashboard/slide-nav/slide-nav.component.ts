import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-nav',
  templateUrl: './slide-nav.component.html',
  styleUrls: ['./slide-nav.component.css']
})
export class SlideNavComponent implements OnInit {
  slideOpen: any = false;
  slideDown: any = false;

  constructor() { }

  ngOnInit() {
  }
  changeSlide(): void {

    this.slideOpen = !this.slideOpen;
  }
  changedown(): void {
    this.slideDown = !this.slideDown;

  }
}
