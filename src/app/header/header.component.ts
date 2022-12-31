import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public router : Router) {
  }

  public goTo(nom: string, samePage: boolean = false) {
    scroll(0,0);
    this.router.navigate(['/' + nom]);
  }
}
