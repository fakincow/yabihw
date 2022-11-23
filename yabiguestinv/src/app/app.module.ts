import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { GlobalErrorComponent } from './components/global-error/global-error.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ModalComponent } from './components/modal/modal.component';
import { FocusDirective } from './directives/focus.directive';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { InvitePanelComponent } from './components/invite-panel/invite-panel.component';
import { GuestCardComponent } from './components/guest-card/guest-card.component';
import { DashboardComponent } from './pages/dashboard-page/dashboard-page.component';
import { InviteFormComponent } from './components/invite-form/invite-form.component';

@NgModule({
  declarations: [
    AppComponent,
    GlobalErrorComponent,
    ModalComponent,
    FocusDirective,
    AboutPageComponent,
    NavigationComponent,
    InvitePanelComponent,
    InviteFormComponent,
    DashboardComponent,
    GuestCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
