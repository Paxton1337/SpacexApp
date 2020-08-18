import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProgressBarService } from './progress-bar.service';
import { of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetlaunchesService {

  constructor(private http: HttpClient, private progress: ProgressBarService) { }

  getAllLaunches(): any {
    this.progress.start();
    return of(this.http.get('https://api.spacexdata.com/v3/launches')).pipe(
      switchMap(res => res),
      tap(() => this.progress.complete())
    );
  }

  getCurrentLaunch(idLaunch: number): any {
    this.progress.start();
    return of(this.http.get(`https://api.spacexdata.com/v3/launches/${idLaunch}`)).pipe(
      switchMap(res => res),
      tap(() => this.progress.complete())
    );
  }
}
