import {AfterViewInit, Component, ElementRef, HostListener, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  constructor() {
  }

  title = 'kevingu';

  @ViewChild('home') homeElement: ElementRef;
  @ViewChild('about') aboutElement: ElementRef;
  @ViewChild('eng') engElement: ElementRef;
  @ViewChild('int') intElement: ElementRef;
  @ViewChild('port') portElement: ElementRef;
  @ViewChild('gall') gallElement: ElementRef;

  public titleFade = 0;
  public scrollPoint: number = null;
  public currentActive = 0;
  public homeOffset: number = null;
  public aboutOffset: number = null;
  public engOffset: number = null;
  public intOffset: number = null;
  public portOffset: number = null;
  public gallOffset: number = null;


  ngAfterViewInit(): void {
    this.scrollPoint = window.pageYOffset;
    this.homeOffset = this.homeElement.nativeElement.offsetTop - 100;
    this.aboutOffset = this.aboutElement.nativeElement.offsetTop - 100;
    this.engOffset = this.engElement.nativeElement.offsetTop - 100;
    this.intOffset = this.intElement.nativeElement.offsetTop - 100;
    this.portOffset = this.portElement.nativeElement.offsetTop - 100;
    this.gallOffset = this.gallElement.nativeElement.offsetTop - 100;

  }

  @HostListener('window:scroll', ['$event'])
  checkOffsetTop(): void {
    if (window.pageYOffset >= this.homeOffset && window.pageYOffset <= this.aboutOffset) {
      this.currentActive = 1;
    } else if (window.pageYOffset > this.aboutOffset && window.pageYOffset < this.engOffset) {
      this.currentActive = 2;
    } else if (window.pageYOffset >= this.engOffset && window.pageYOffset < this.intOffset) {
      this.currentActive = 3;
    } else if (window.pageYOffset >= this.intOffset && window.pageYOffset < this.portOffset) {
      this.currentActive = 4;
    } else if (window.pageYOffset >= this.portOffset && window.pageYOffset < this.gallOffset) {
      this.currentActive = 5;
    } else if (window.pageYOffset >= this.gallOffset) {
      this.currentActive = 6;
    } else {
      this.currentActive = 0;
    }

    if (window.pageYOffset <= this.aboutOffset){
      this.titleFade = 0;
    }
    if (window.pageYOffset >= this.aboutOffset) {
      this.titleFade = 1;
    }
    else {
      this.titleFade = window.pageYOffset / this.aboutOffset;
    }
  }

  print(): void {
    console.log(window.pageYOffset);
  }

}
