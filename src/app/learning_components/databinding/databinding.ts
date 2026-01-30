import { Component,input,output,signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface SubmitPayload {
      isSuccess: boolean,
      value: any
    }
@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.html',
  styleUrl: './databinding.scss',
})

export class Databinding {
  isDisabled = false;
  firstVal = signal(0);
  secondVal = signal(0);
  sumValue = signal(0);
  userNameValue = input('', {transform: convertUpperCase})
  submitted = output<SubmitPayload>();

  OnInput() {
    this.isDisabled = this.firstVal() <=0 || this.secondVal()<=0;
    console.log(this.firstVal())
    console.log(this.secondVal())
    console.log(this.isDisabled)
  }

  onSubmit() {
    this.sumValue.set(this.firstVal() + this.secondVal());
    this.submitted.emit({
      isSuccess: true,
      value: this.sumValue()
    })
  }
}
function convertUpperCase(value: string) {
  return value.toUpperCase();
}
