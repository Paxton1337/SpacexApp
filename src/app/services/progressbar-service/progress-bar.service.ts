import { Injectable } from '@angular/core';
import { NgProgress } from 'ngx-progressbar';

@Injectable({
  providedIn: 'root'
})
export class ProgressBarService {
  private progressRef = this.progress.ref('myProgress');

  constructor(private progress: NgProgress) { }

  start(): void {
    this.progressRef.start();
  }

  complete(): void {
    this.progressRef.complete();
  }
}
