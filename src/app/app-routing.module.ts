import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccueilComponent} from "./accueil/accueil.component";
import {ListeComponent} from "./liste/liste.component";
import {GestionComponent} from "./gestion/gestion.component";
import {ContactComponent} from "./contact/contact.component";

const routes: Routes = [
  { path: 'Accueil', component: AccueilComponent },
  { path: 'Liste', component: ListeComponent },
  { path: 'Gestion', component: GestionComponent },
  { path: 'Contact', component: ContactComponent },
  { path: '', redirectTo: 'Accueil', pathMatch: 'full' },
  { path: '**', redirectTo: 'Accueil', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
