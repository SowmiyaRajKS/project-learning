import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
// import { Databinding } from './learning_components/databinding/databinding';
// import { Contentprojection } from './learning_components/contentprojection/contentprojection';
// import { SignalLearning } from './learning_components/signal-learning/signal-learning';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, RouterModule],
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
