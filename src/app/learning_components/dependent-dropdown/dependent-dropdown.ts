import { CommonModule } from '@angular/common';
import { Component, computed, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../services/user';

@Component({
  selector: 'app-dependent-dropdown',
  imports: [FormsModule, CommonModule],
  templateUrl: './dependent-dropdown.html',
  styleUrl: './dependent-dropdown.scss',
  providers:[User]
})
export class DependentDropdown {
  countries = ['USA', 'India', 'Canada', 'Australia', 'Germany'];

  cities: { [key: string]: string[] } = {
    USA: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Miami'],
    India: ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata'],
    Canada: ['Toronto', 'Vancouver', 'Montreal', 'Calgary', 'Ottawa'],
    Australia: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide'],
    Germany: ['Berlin', 'Munich', 'Frankfurt', 'Hamburg', 'Cologne']
  };
  userService = inject(User);
  selectedCountry = signal("");
  selectedCity = signal("");
  isCityDisabled = false;
  cityList = computed(()=>{
    return this.selectedCountry() && (this.selectedCountry() in this.cities) ? 
      this.cities[this.selectedCountry()] : []
  })

  constructor() {
    effect(()=>{
      this.isCityDisabled = this.cityList().length === 0 ? true : false;
    });
    this.userService.userName = 'Shivarsh';
    console.log(this.userService.userName);
  }

  onCountryChange(event: any) {
    console.log("Event.   :",event);
  }
}
