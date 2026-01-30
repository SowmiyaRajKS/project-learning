import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Databinding } from './learning_components/databinding/databinding';
import { Contentprojection } from './learning_components/contentprojection/contentprojection';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, Databinding, Contentprojection],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
 userName = signal('');
  isSubmitted = signal(false);
  sumValue = signal(0);
 onSubmitted(event: any){
  console.log(event)
  this.isSubmitted.set(event.isSuccess);
  this.sumValue.set(event.value);
 }
}
