import { Router } from '@angular/router';
import { PessoasService } from './../../service/pessoas.service';
import { Pessoa } from './../../model/pessoa';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  pessoa = new Pessoa();

  constructor(private pessoaService: PessoasService, private router: Router) { }

  salvar(pessoa: Pessoa){

    this.pessoaService.salvaPessoa(pessoa)
    .subscribe(dados => {
      this.router.navigate(['list']);
    });
  }

  ngOnInit(): void {
  }

}
