import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from '././navbar/navbar.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { HoursComponent } from './hours/hours.component';
import { ContactComponent } from './contact/contact.component';
import { ProductPageComponent } from './product-page/product-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SlideshowComponent,
    HoursComponent,
    ContactComponent,
    ProductPageComponent,
  ],
  imports: [BrowserModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
