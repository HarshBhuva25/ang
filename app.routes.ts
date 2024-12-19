import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';



export const routes: Routes = [
    {path:"Freecsstemplete", component:HomeComponent, title:"Home Page"},
    {path:"about", component:AboutComponent, title:"About Page"},
    
    
];
