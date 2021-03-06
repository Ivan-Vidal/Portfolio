import { ErrorviewComponent } from './views/errorview/errorview.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { MyProjectComponent } from './views/my-project/my-project.component';
import { ContactComponent } from './views/contact/contact.component';
import { TechnologiesComponent } from './views/technologies/technologies.component';
import { FormationComponent } from './views/formation/formation.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  { path: 'about', component: AboutComponent},
  { path: 'project', component: MyProjectComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'tech', component: TechnologiesComponent},
  { path: 'formation', component: FormationComponent},
  { path: '**', component: ErrorviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
