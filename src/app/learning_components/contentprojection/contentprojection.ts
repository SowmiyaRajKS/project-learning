import { Component, inject } from '@angular/core';
import { User } from '../../services/user';

@Component({
  selector: 'app-contentprojection',
  imports: [],
  templateUrl: './contentprojection.html',
  styleUrl: './contentprojection.scss',
})
export class Contentprojection {
  userService = inject(User);

  constructor(){
    console.log(this.userService.userName);
  }
}
