import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetlaunchesService } from '../../../../services/getlaunches.service';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.css']
})
export class LaunchComponent implements OnInit {
  id: number = this.activateRouter.snapshot.params.id;
  launch: any;

  constructor(private activateRouter: ActivatedRoute, private getLaunch: GetlaunchesService) { }

  ngOnInit(): void {
    this.getLaunch.getCurrentLaunch(this.id).subscribe(launch => {
      console.log(launch);
      return this.launch = launch;
    });
  }

}
