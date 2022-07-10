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
  searchText: string = '';

  constructor(private pessoaService: PessoasService, private router: Router) { }

  ngOnInit(): void {

    this.pessoaService.listaPessoa()
    .subscribe(dados => this.pessoa = dados);
  }

  inserir() {

    this.router.navigate(['add']);
  }

  alterar(pessoa: Pessoa): void {

    localStorage.setItem('id', pessoa.id.toString());
    this.router.navigate(['edit']);
  }

  deletar(pessoa: Pessoa){

    this.pessoaService.deletaPessoa(pessoa)
    .subscribe(dados => {
      this.pessoa = this.pessoa.filter(p => pessoa);
      window.location.reload();
    })
  }
}
