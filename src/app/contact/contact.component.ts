import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {FormulaireService} from "../formulaire.service";
import {Person} from "../person";
import {Router} from "@angular/router";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  formulaire: FormGroup;
  service!: FormulaireService;
  submitted!: boolean;

  constructor(private fb: FormBuilder,
              private formulaireService: FormulaireService,
              public router : Router) {

    this.submitted = false;
    this.formulaire = new FormGroup({
      prenom: new FormControl('', [Validators.required, Validators.minLength(2)]),
      nom: new FormControl('', [Validators.required, Validators.minLength(2)]),
      age: new FormControl('', [Validators.min(0), Validators.max(120)]), // n'est pas obligatoire d'après énoncé
      emailBool: new FormControl(false),
      email: new FormControl('', [Validators.required, Validators.email]),
      commentaire: new FormControl('', [Validators.required, Validators.minLength(2)])
    });
    this.formulaire.get('emailBool')?.valueChanges!.subscribe(emailBool => {
      if (emailBool) this.formulaire.get('email')!.disable();
      else this.formulaire.get('email')!.enable();
    });
  }

  onSubmit() {
    let personne = new Person();

    // Si formulaire invalid, ne pas submit + avertir l'utilisateur
    if (this.formulaire.invalid) {
      this.submitted = false;
      alert('Complétion du formulaire incorrect. Vérifiez l\'exactitude de vos données');
      return;
    }

    personne.prenom = this.formulaire.get('prenom')!.value;
    personne.nom = this.formulaire.get('nom')!.value;
    personne.age = this.formulaire.get('age')!.value;
    personne.emailBool = this.formulaire.get('emailBool')?.value;
    if (this.formulaire.get('emailBool')?.value == false) personne.email = this.formulaire.get('email')!.value;
    personne.commentaire = this.formulaire.get('commentaire')!.value
    this.formulaireService.sendPersonne(personne);
    this.submitted = true;
    this.formulaire.reset();

    alert('Vos informations ont bien été transmises !');
    this.goTo('Accueil'); // redirection vers Accueil
  }

  public goTo(nom: string, samePage: boolean = false) {
    scroll(0,0);
    this.router.navigate(['/' + nom]);
  }
}
