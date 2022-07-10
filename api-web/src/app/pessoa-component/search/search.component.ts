import { PessoasService } from './../../service/pessoas.service';
import { Pessoa } from './../../model/pessoa';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  pessoa!: Pessoa;

  constructor(private pessoaService: PessoasService) { }

  ngOnInit(): void {

    //this.buscar();

  }

  buscar(){

    //localStorage.setItem('id', pessoa.id.toString());
    //let id = localStorage.getItem('id');
    this.pessoaService.buscaPessoa(22)
    .subscribe(dados => {
      this.pessoa = dados;
      //console.log(dados)
    });
  }

}
