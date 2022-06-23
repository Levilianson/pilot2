import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Inicio/home/home.component';
import { LogginComponent } from './Inicio/loggin/loggin.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'loggin', component: LogginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
