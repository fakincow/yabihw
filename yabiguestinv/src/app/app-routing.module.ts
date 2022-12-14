import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutPageComponent} from "./pages/about-page/about-page.component";
import { DashboardComponent } from './pages/dashboard-page/dashboard-page.component';

const routes: Routes = [  
  {path: '', component: DashboardComponent},
  {path: 'about', component: AboutPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
