import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventFilterBarComponent } from './core/components/event-filter-bar/event-filter-bar.component';
import { UserComponent } from './core/components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    EventFilterBarComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
