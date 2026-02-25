import { Component, computed, effect, inject, linkedSignal, signal, untracked } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { User } from '../../services/user';

interface UserList {
  userName: string;
  userId: number
}

@Component({
  selector: 'app-signal-learning',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './signal-learning.html',
  styleUrl: './signal-learning.scss',
  providers: [User]
})
export class SignalLearning {
  fName = signal<string>("Sowmiya");
  lName = signal<string>("");
  mName = signal<string>("");
  userList = signal<UserList[]>([]);
  fullName = computed(()=> (this.fName())+ this.mName() + this.lName());
  noOfProd = signal(9);
  productPrice = signal(0);
  discount = signal(0);
  newPrice = signal(0);
  userService = inject(User);
  totalPrice = linkedSignal(()=>this.noOfProd() * 28);
  cityList = signal<string[]>(["Chennai", "Covai", " Trichy", "Madurai", "Vellore"]);
  userForm = new FormGroup({
    userName: new FormControl(),
    userId: new FormControl()
  });
  
  constructor() {
    setTimeout(()=>{
      this.totalPrice.set(2300)
      this.fName.set("Shivarsh");
    }, 5000);
    console.log(this.totalPrice);
    effect(()=>{
      const newPrice = this.productPrice() - this.productPrice() * (this.discount()/100);
      this.newPrice.set(newPrice);
      // alert('New Price Changed');
    })
    console.log(this.userService.userName)
  }


  changeValue() {
    this.fName.set("Shivanidha");
  }
  
  reset() {
    this.fName.set("Varshidha");
  }
  changeDiscount(value: number) {
    this.productPrice.set(2398);
    this.discount.set(value);
  }
  addCity(value: string) {
    this.cityList.update(oldCityList=> [...oldCityList,value])
  }
  removeCity() {
    this.cityList.update(list => list.slice(0,-1));
  }

  onSubmit(){
    const userFormValue = this.userForm.value as UserList;
    this.userList.update((u)=> { u.push(userFormValue); return u});
    this.userForm.setValue({
      userName: '',
      userId: ''
    });
  }

  onDelete(id: any) {
    const list = this.userList();
    this.userList.update((u)=> {return u.filter((us:any)=> us.userId !== id)});
  }
}
