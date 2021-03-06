import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GetlaunchesService } from '../../../../services/get-launches-service/getlaunches.service';
import { GetLandpadsService } from '../../../../services/get-landpads-service/getLandpads.service';
import { NavigateCenterService } from '../../../../services/navigate-center-service/navigate-center.service';

import { LandPad } from '../../../../models/landPad';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.css']
})
export class LaunchComponent implements OnInit {
  id: any;
  launch: any = {};
  landPad: LandPad = {};

  constructor(
    private navCenter: NavigateCenterService,
    private routeAct: ActivatedRoute,
    private getLaunch: GetlaunchesService,
    private getPayload: GetLandpadsService
  ) { }

  ngOnInit(): void {
    this.routeAct.params.pipe(
      switchMap((param: any) => {
        this.getLaunch.getCurrentLaunch(param.id).subscribe((launch: any) => this.launch = launch);
        this.getPayload.getLandPads().subscribe((pad: LandPad) => this.landPad = pad);
        return this.id = param.id;
      })).subscribe(res => res);
  }

  centeredNav(num: number): void {
    this.navCenter.navigateBetweenLaunch(num, this.id);
  }

}
