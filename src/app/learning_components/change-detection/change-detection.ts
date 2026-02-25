import { ChangeDetectorRef, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-change-detection',
  imports: [FormsModule],
  templateUrl: './change-detection.html',
  styleUrl: './change-detection.scss',
})
export class ChangeDetection {
  productName = 'Dell Laptop';
  productPrice = signal(78000);
  constructor() {
    setTimeout(()=>{
      // debugger;
      this.productName = 'Apple Mac';
      // this.cdRef.detectChanges();
    }, 2000);
    setTimeout(()=>{
      this.productPrice.set(100000);
    }, 20000)
  }

  changeProduct(){
    this.productName = 'HP Laptop';
  }
}
