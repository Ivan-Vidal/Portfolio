import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { HttpClientModule } from '@angular/common/http';
// import { FormsModule, NgModel } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {MatSidenavModule} from '@angular/material/sidenav';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { ErrorviewComponent } from './views/errorview/errorview.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { AboutComponent } from './views/about/about.component';
import { CardProjectComponent } from './components/card-project/card-project.component';
import { ContactComponent } from './views/contact/contact.component';
import { TechnologiesComponent } from './views/technologies/technologies.component';
import { FormationComponent } from './views/formation/formation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorviewComponent,
    HeaderComponent,
    ButtonComponent,
    AboutComponent,
    CardProjectComponent,
    ContactComponent,
    TechnologiesComponent,
    FormationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
