import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LazyLoadImageModule} from 'ng-lazyload-image';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    LazyLoadImageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
