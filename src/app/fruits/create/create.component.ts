import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fruits } from 'src/app/models/fruits';
import { FruitsService } from 'src/app/services/fruits.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  fruitForm: Fruits = {
    id: 0,
    name: '',
    price: 0,
    quantity: 0,
  };
  public errMsg: any;
  constructor(private fruitService: FruitsService, private router: Router) {}

  ngOnInit(): void {}

  create() {
    this.fruitService.create(this.fruitForm).subscribe({
      next: (data) => {
        this.router.navigate(['/fruits']);
      },
      error: (error) => {
        this.errMsg = error;
      },
    });
  }
}
