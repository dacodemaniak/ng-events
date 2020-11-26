import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEventComponent } from './pages/add-event/add-event.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {
    path: '', // Default path for the routing
    redirectTo: 'home', // Redirect to another route
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'add-event',
    component: AddEventComponent
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
