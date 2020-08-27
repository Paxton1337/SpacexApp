import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigateCenterService {

  constructor(private router: Router) { }

  navigate(selectedLaunch: number, id: number): any {
    switch (selectedLaunch) {
      case 1:
        return this.nextLaunch(id);
      case 2:
        return this.prevLaunch(id);
      default:
        return console.log('-');
    }
  }

  nextLaunch(id: number): any {
    this.router.navigate(['/launch/', ++id]);
  }

  prevLaunch(id: number): any {
    this.router.navigate(['/launch/', --id]);
  }

}
