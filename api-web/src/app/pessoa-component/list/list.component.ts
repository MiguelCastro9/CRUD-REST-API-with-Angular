import { PessoasService } from './../../service/pessoas.service';
import { Pessoa } from './../../model/pessoa';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  pessoa: Pessoa[] = [];

  constructor(private pessoaService: PessoasService, private router: Router) { }

  ngOnInit(): void {

    this.pessoaService.listaPessoa()
    .subscribe(dados => this.pessoa = dados);
  }

}
