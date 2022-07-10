import { Pessoa } from './../../model/pessoa';
import { Router } from '@angular/router';
import { PessoasService } from './../../service/pessoas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  pessoa = new Pessoa();

  constructor(private pessoaService: PessoasService, private router: Router) { }

  ngOnInit(): void {

    this.getId();
  }

  getId(){

    let id = localStorage.getItem('id');
    this.pessoaService.buscaPessoa(id)
    .subscribe(dados => {
      this.pessoa = dados;
    });
  }

  alterar(pessoa: Pessoa){

    this.pessoaService.alteraPessoa(pessoa)
    .subscribe(dados => {
      this.pessoa = dados;
      this.router.navigate(['list']);
    });
  }

  listar(){

    this.router.navigate(['list']);
  }

}
