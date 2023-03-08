import { Observable } from 'rxjs';
import { MainService } from './../../services/main.service';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showFiller: boolean = false
  showSeeMore: boolean = true
  isMobile$: Observable<any> | undefined;
  isMobile: any;

  constructor(private MainService: MainService) { }
  windowScrolled = false
  ngOnInit(): void {
    this.onScroll()
    this.isMobile = this.MainService.isMobile$.subscribe(v => this.MainService.setIsMobile(v))
  }

  onScroll() {
    let backBlock = false
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
      backBlock = true
     console.log(backBlock)
    } else {
      console.log('errou')
    }
  }

  @HostListener ("window: scroll", []) 
onWindowScroll () { 
    if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 10 ){
        this.windowScrolled = true; 
    }    else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop <10) { 
        this.windowScrolled = false; 
    } 
} 


}
