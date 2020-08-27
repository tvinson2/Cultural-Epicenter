import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { Kiosk1Component } from './kiosk1/kiosk1.component';
import { Kiosk2Component } from './kiosk2/kiosk2.component';

@NgModule({
  declarations: [
    AppComponent,
    Kiosk1Component,
    Kiosk2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

