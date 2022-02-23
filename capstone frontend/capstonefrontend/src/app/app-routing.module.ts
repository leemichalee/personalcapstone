import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationComponent } from './location/location.component';
import { LocationsComponent } from './locations/locations.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: "locations", component: LocationsComponent},
  {path: "locations/:id", component: LocationComponent},
  {path: "", component: MainComponent, pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
