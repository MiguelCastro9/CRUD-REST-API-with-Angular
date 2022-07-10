import { EditComponent } from './pessoa-component/edit/edit.component';
import { AddComponent } from './pessoa-component/add/add.component';
import { ListComponent } from './pessoa-component/list/list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  {path: 'list',  component: ListComponent},
  {path: 'add', component: AddComponent},
  {path: 'edit', component: EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
