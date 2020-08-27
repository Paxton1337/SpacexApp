import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigateCenterService {

  constructor(private router: Router) { }

  navigateBetweenLaunch(selectedLaunch: number, id: number): any {
    return selectedLaunch === 1 ? this.router.navigate(['/launches/launch/', --id]) : this.router.navigate(['/launches/launch/', ++id]);
  }

  navigateRandomLaunch(launches: any): any {
    return this.router.navigate(['/launches/launch/', Math.round(Math.random() * launches.length)]);
  }
}
