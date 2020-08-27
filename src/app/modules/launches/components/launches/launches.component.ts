import { Component, OnInit } from '@angular/core';

import { GetlaunchesService } from '../../../../services/get-launches-service/getlaunches.service';
import { NavigateCenterService } from '../../../../services/navigate-center-service/navigate-center.service';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.css']
})
export class LaunchesComponent implements OnInit {
  launches: any = [];
  p = 1;

  constructor(private getLaunch: GetlaunchesService, private navCenter: NavigateCenterService ) { }

  ngOnInit(): void {
    this.getLaunch.getAllLaunches().subscribe(launches => {
      console.log(launches);
      launches.pop();
      this.launches = launches;
    });
  }

  randomLaunch(): any {
    this.navCenter.navigateRandomLaunch(this.launches);
  }
}
