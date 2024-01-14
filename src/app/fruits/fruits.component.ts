import { Component, OnInit } from '@angular/core';
import { Fruits } from '../models/fruits';
import { FruitsService } from '../services/fruits.service';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css'],
})
export class FruitsComponent implements OnInit {
  allFruits: Fruits[] = [];
  public errMsg: any;
  constructor(private fruitService: FruitsService) {}
  ngOnInit(): void {
    this.get();
  }
  get() {
    this.fruitService.get().subscribe(
      (data) => {
        this.allFruits = data;
      },
      (error) => (this.errMsg = error)
    );
  }
}
