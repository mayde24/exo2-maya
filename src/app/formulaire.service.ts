import { Injectable } from '@angular/core';
import {Person} from "./person";

@Injectable({
  providedIn: 'root'
})
export class FormulaireService {
  private personneAEnvoyer = new Person;

  sendPersonne(Personne: Person) {
    this.personneAEnvoyer = Personne;
  }

  getPersonne() {
    return this.personneAEnvoyer;
  }

}
