import { Observable } from 'rxjs';
import { MainService } from './../../services/main.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showFiller: boolean = false

  isMobile$: Observable<any> | undefined;
  isMobile: any;

  constructor(private MainService: MainService) { }

  ngOnInit(): void {

    this.isMobile = this.MainService.isMobile$.subscribe(v => this.MainService.setIsMobile(v))
  }

}
