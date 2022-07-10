import { Pessoa } from './../model/pessoa';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  pessoa: Pessoa[] = [];
  url = 'http://localhost:8080/pessoas';

  constructor(private http: HttpClient) { }

  listaPessoa(){

    return this.http.get<Pessoa[]>(this.url + '/lista');
  }

  salvaPessoa(pessoa: Pessoa){

    return this.http.post<Pessoa>(this.url + '/insere', pessoa);
  }

  alteraPessoa(pessoa: Pessoa){

    return this.http.put<Pessoa>(this.url + '/altera/', pessoa.id);
  }

  buscaPessoa(id: any){

    return this.http.get<Pessoa>(this.url + '/busca/' + id);

  }

  deletaPessoa(pessoa: Pessoa){

    return this.http.delete<Pessoa>(this.url + '/deleta/' + pessoa.id);
  }
}
