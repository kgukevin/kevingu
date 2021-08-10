import {AfterViewInit, Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {faFileAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  constructor() {
  }
  faGithub = faGithub;
  faFile = faFileAlt;

  title = 'kevingu';

  @ViewChild('home') homeElement: ElementRef;
  @ViewChild('about') aboutElement: ElementRef;
  @ViewChild('int') intElement: ElementRef;
  @ViewChild('eng') engElement: ElementRef;
  @ViewChild('port') portElement: ElementRef;
  @ViewChild('gall') gallElement: ElementRef;
  @ViewChild('skills') skillElement: ElementRef;

  public titleFade = 0;
  public aboutFade = 0;
  public portFade = 0;
  public engFade = 0;
  public scrnHeight: number = null;
  public scrnWidth: number = null;
  public currentActive = 0;
  public skillActive = false;
  public homeOffset: number = null;
  public aboutOffset: number = null;
  public skillOffset: number = null;
  public intOffset: number = null;
  public engOffset: number = null;
  public portOffset: number = null;
  public gallOffset: number = null;

  // ngOnInit(): void {
  //   this.scrnHeight = window.innerHeight;
  //   this.scrnWidth = window.innerWidth;
  // }

  ngAfterViewInit(): void {
    // this.scrollPoint = window.pageYOffset;
    this.homeOffset = this.homeElement.nativeElement.offsetTop - 100;
    this.aboutOffset = this.aboutElement.nativeElement.offsetTop;
    this.skillOffset = this.skillElement.nativeElement.offsetTop - 400;
    this.intOffset = this.intElement.nativeElement.offsetTop - 100;
    this.engOffset = this.engElement.nativeElement.offsetTop;
    this.portOffset = this.portElement.nativeElement.offsetTop;
    this.gallOffset = this.gallElement.nativeElement.offsetTop - 100;

  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?): void {
    this.scrnHeight = window.innerHeight;
    this.scrnWidth = window.innerWidth;

    this.homeOffset = this.homeElement.nativeElement.offsetTop - 100;
    this.aboutOffset = this.aboutElement.nativeElement.offsetTop;
    this.skillOffset = this.skillElement.nativeElement.offsetTop - 400;
    this.intOffset = this.intElement.nativeElement.offsetTop - 100;
    this.engOffset = this.engElement.nativeElement.offsetTop;
    this.portOffset = this.portElement.nativeElement.offsetTop;
    this.gallOffset = this.gallElement.nativeElement.offsetTop - 100;
  }

  @HostListener('contextmenu', ['$event'])
  onRightClick(event): void {
    event.preventDefault();
  }

  @HostListener('window:scroll', ['$event'])
  checkOffsetTop(): void {
    if (window.pageYOffset >= this.homeOffset && window.pageYOffset <= this.aboutOffset) {
      this.currentActive = 1;
    } else if (window.pageYOffset > this.aboutOffset && window.pageYOffset < this.portOffset) {
      this.currentActive = 2;
      if (window.pageYOffset >= this.skillOffset) {
        this.skillActive = true;
      }
    } else if (window.pageYOffset >= this.portOffset && window.pageYOffset < this.engOffset) {
      this.currentActive = 3;
    } else if (window.pageYOffset >= this.engOffset && window.pageYOffset < this.intOffset) {
      this.currentActive = 4;
    } else if (window.pageYOffset >= this.intOffset && window.pageYOffset < this.gallOffset) {
      this.currentActive = 5;
    } else if (window.pageYOffset >= this.gallOffset) {
      this.currentActive = 6;
    } else {
      this.currentActive = 0;
    }

    this.getScreenSize();
    if (window.pageYOffset <= this.aboutOffset){
      this.titleFade = 0;
    }
    if (window.pageYOffset >= this.aboutOffset) {
      this.titleFade = 1;
    }
    else {
      this.titleFade = window.pageYOffset / this.aboutOffset;
    }

    if (window.pageYOffset <= this.portOffset - (this.scrnHeight * .9)){
      this.aboutFade = 0;
    }
     else if (window.pageYOffset >= this.portOffset - (this.scrnHeight * .4)) {
      this.aboutFade = 1;
    }
    else {
      // this.getScreenSize();
      this.aboutFade = (window.pageYOffset - (this.portOffset - this.scrnHeight * .9)) / (this.scrnHeight * .9 - this.scrnHeight * .4);
    }

    if (window.pageYOffset <= this.engOffset - (this.scrnHeight * .9)){
      this.portFade = 0;
    }
    else if (window.pageYOffset >= this.engOffset - (this.scrnHeight * .4)) {
      this.portFade = 1;
    }
    else {
      this.portFade = (window.pageYOffset - (this.engOffset - this.scrnHeight * .9)) / (this.scrnHeight * .9 - this.scrnHeight * .4);
    }

    if (window.pageYOffset <= this.intOffset - (this.scrnHeight * .9)){
      this.engFade = 0;
    }
    else if (window.pageYOffset >= this.intOffset - (this.scrnHeight * .4)) {
      this.engFade = 1;
    }
    else {
      this.engFade = (window.pageYOffset - (this.intOffset - this.scrnHeight * .9)) / (this.scrnHeight * .9 - this.scrnHeight * .4);
    }

  }

  print(): void {
    console.log(window.pageYOffset);
  }

}
