import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
// import { FormsModule, NgModel } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { ErrorviewComponent } from './views/errorview/errorview.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { AboutComponent } from './views/about/about.component';
import { MyProjectComponent } from './views/my-project/my-project.component';
import { CardProjectComponent } from './components/card-project/card-project.component';
import { ContactComponent } from './views/contact/contact.component';
import { TechnologiesComponent } from './views/technologies/technologies.component';
import { FormationComponent } from './views/formation/formation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorviewComponent,
    HeaderComponent,
    ButtonComponent,
    AboutComponent,
    MyProjectComponent,
    CardProjectComponent,
    ContactComponent,
    TechnologiesComponent,
    FormationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    // FormsModule,
    // NgModel,
    // HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
