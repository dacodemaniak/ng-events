import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventFilterBarComponent } from './core/components/event-filter-bar/event-filter-bar.component';
import { UserComponent } from './core/components/user/user.component';
import { HomeComponent } from './pages/home/home.component';
import { AddEventComponent } from './pages/add-event/add-event.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TimeAgoPipe } from './core/pipes/time-ago.pipe';
import { MomentModule } from 'ngx-moment';
import { HelperDirective } from './core/directives/helper.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/ui/material/material.module';
import { fakeBackendProvider } from './core/helpers/fake-backend-interceptor';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EventFilterBarComponent,
    UserComponent,
    HomeComponent,
    AddEventComponent,
    TimeAgoPipe,
    HelperDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MomentModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
