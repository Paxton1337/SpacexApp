import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GetlaunchesService } from '../../../../services/getlaunches.service';
import { GetLandpadsService } from '../../../../services/getLandpads.service';

import { LandPad } from '../../../../models/landPad';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.css']
})
export class LaunchComponent implements OnInit {
  id: number = this.activateRouter.snapshot.params.id;
  launch: any = {};
  landPad: LandPad = {};

  constructor(private activateRouter: ActivatedRoute, private getLaunch: GetlaunchesService, private getPayload: GetLandpadsService) { }

  ngOnInit(): void {
    this.getLaunch.getCurrentLaunch(this.id).subscribe((launch: any) => this.launch = launch);
    this.getPayload.getLandPads().subscribe((pad: LandPad) => this.landPad = pad);
  }
}
