import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pag404',
  templateUrl: './pag404.component.html',
  styleUrls: ['./pag404.component.css']
})
export class Pag404Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  listar(){

    return this.router.navigate(['list']);
  }

}
