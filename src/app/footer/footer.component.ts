import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(public router : Router) {
  }

  public goTo(nom: string, samePage: boolean = false) {
    scroll(0,0);
    this.router.navigate(['/' + nom]);
  }

}
