import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { ErrorviewComponent } from './views/errorview/errorview.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { AboutComponent } from './views/about/about.component';
import { MyProjectComponent } from './views/my-project/my-project.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorviewComponent,
    HeaderComponent,
    ButtonComponent,
    AboutComponent,
    MyProjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
