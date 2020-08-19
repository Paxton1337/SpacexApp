import { Component, OnInit } from '@angular/core';
import { GetlaunchesService } from '../../../../services/getlaunches.service';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.css']
})
export class LaunchesComponent implements OnInit {
  launches: any;
  p = 1;

  constructor(private getLaunch: GetlaunchesService) { }

  ngOnInit(): void {
    this.getLaunch.getAllLaunches().subscribe(launches => {
      console.log(launches);
      return this.launches = launches;
    });
  }
}
