import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';

@Component({
  selector: 'app-conditional-statements',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './conditional-statements.html',
  styleUrl: './conditional-statements.scss',
})
export class ConditionalStatements {
  userList =  [
    {
      "id": 1,
      "name": "Gary Guy",
      "email": "gguy@email.com"
    },
    {
      "id": 2,
      "name": "Greta Girl",
      "email": "ggirl@email.com"
    },
    {
      "id": 3,
      "name": "John Doe",
      "email": "jdoe@email.com"
    },
    {
      "id": 4,
      "name": "Sowmiya",
      "email": "sowmiya@email.com"
    },
    {
      "id": 5,
      "name": "shivanidha",
      "email": "shivanidha@email.com"
    },
    {
      "id": 6,
      "name": "Varshidha",
      "email": "varshidha@email.com"
    },
    {
      "id": 7,
      "name": "shivarsh",
      "email": "shivarsh@email.com"
    },
  ]

  emptyList =[];
  cityArray$ = of([{id: 1, name: 'Tokyo'}, {id: 2, name: 'Delhi'}, {id: 3, name: 'Paris'}]);

  customers = [
    {id: 1, name: 'AB', isActive: true},
    {id: 2, name: 'EF', isActive: false},
    {id: 3, name: 'XY', isActive: true}
  ]; 

  customerForm = new FormGroup({
    infoSource: new FormControl(""),
    mediaName: new FormControl("")
  });

  onSubmitForm() {
    console.log(this.customerForm.get('mediaName')?.value);
  }
}
