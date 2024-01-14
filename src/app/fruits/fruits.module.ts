import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FruitsRoutingModule } from './fruits-routing.module';
import { FruitsComponent } from './fruits.component';
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FruitsComponent, CreateComponent],
  imports: [CommonModule, FruitsRoutingModule, FormsModule],
  exports: [CreateComponent],
})
export class FruitsModule {}
