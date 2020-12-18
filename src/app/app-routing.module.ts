import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './application/contact/contact.component';
import { ReadComponent } from './application/crud/read/read.component';
import { UpdateComponent } from './application/crud/update/update.component';
import { AfficherComponent } from './application/crud/afficher/afficher.component';
import { HomeComponent } from './application/home/home.component';
import { TutorielsComponent } from './application/tutoriels/tutoriels.component';
import { ReactiveComponent } from './application/reactive/reactive.component';
import { ErrorComponent } from './application/error/error.component';


const routes: Routes = [
  {path: 'tutoriel',
  children: [
    {path: ':id', component: TutorielsComponent}
  ]},
  {path: 'update/:id', component: UpdateComponent},
  {path: 'afficher/:id', component: AfficherComponent},
  {path: 'formulaire', component: ReactiveComponent},
  {path: 'crud', component: ReadComponent},
  {path: 'contact', component: ContactComponent},
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: '**', component: ErrorComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 