import {Component, OnInit} from '@angular/core';
import { FormulaireService } from "../formulaire.service";
import { Person } from "../person";
@Component({
  selector: 'gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})

export class GestionComponent implements OnInit {
  personne!: Person
  constructor(private profileService: FormulaireService) { }

  ngOnInit() {
    this.personne = this.profileService.getPersonne();
    this.personne = this.personne;
  }
}
