import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FruitsComponent } from './fruits.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  { path: '', component: FruitsComponent },
  { path: 'create', component: CreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FruitsRoutingModule {}
