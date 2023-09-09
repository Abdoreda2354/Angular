import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:'' , redirectTo:'home',pathMatch:'full'},
  {path:'home' , component:HomeComponent , title:'home'},
  {path:'about' ,component:AboutComponent , title:'about'},
  {path:'potfolio' , component:PortfolioComponent , title:'potfolio'},
  {path : 'contact' , component:ContactComponent , title:'contact'},
  {path:'**', component:NotfoundComponent , title:'Not Found Page'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
