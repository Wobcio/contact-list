import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroComponent } from './hero/hero.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { ContactListComponent } from './contact-list/contact-list.component';

@NgModule({
  declarations: [AppComponent, HeroComponent, ContactListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
