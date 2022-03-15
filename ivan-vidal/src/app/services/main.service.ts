import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private isMobile: Subject<boolean> = new ReplaySubject<boolean>(1)

  constructor() { }

  public get isMobile$(): Observable<boolean> {
    return this.isMobile.asObservable()
  }

  public setIsMobile(v: boolean): void {
    this.isMobile.next(v)
  }
}
