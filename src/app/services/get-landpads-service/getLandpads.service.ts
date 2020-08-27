import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { LandPads } from '../../models/landPadsArray';
import { LandPad } from '../../models/landPad';

@Injectable({
  providedIn: 'root'
})
export class GetLandpadsService {

  constructor() { }

  getLandPads(): Observable<LandPad> {
    const randomNumber = Math.round(Math.random() * 3);
    return of(LandPads).pipe(switchMap(pads => pads.filter(pad => randomNumber === pad.id)));
  }
}
