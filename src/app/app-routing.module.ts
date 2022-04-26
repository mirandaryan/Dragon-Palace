import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
//import {Menu-ItemComponent}
//import {RegisterComponent}
//import {LoginComponent}
//import {CartComponent}
//import {UserComponent}

// import component and add path below

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {path: 'menu', component: MenuComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
