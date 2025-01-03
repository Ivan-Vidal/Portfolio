import { Observable } from 'rxjs';
import { MainService } from './../../services/main.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  contactForm: FormGroup;
  showFiller: boolean = false
  showSeeMore: boolean = true
  isMobile$: Observable<any> | undefined;
  isMobile: any;

  constructor(
    private MainService: MainService,
    private fb: FormBuilder,
    private emailService: EmailService
  ) { 
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(3)]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }
  windowScrolled = false
  ngOnInit(): void {
    this.onScroll()
    this.isMobile = this.MainService.isMobile$.subscribe(v => this.MainService.setIsMobile(v))
  }

  scrollToElement(element: any): void {
    console.log(element);
    (document.getElementById(element) as HTMLElement).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
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

  sendEmail() {
    if (this.contactForm.valid) {
      this.emailService.sendEmail(this.contactForm.value).subscribe({
        next: (response) => {
          console.log('Email enviado com sucesso:', response);
          alert('Email enviado com sucesso!');
          this.contactForm.reset(); // Reseta o formulário
        },
        error: (error) => {
          console.error('Erro ao enviar email:', error);
          alert('Erro ao enviar email. Por favor, tente novamente.');
        }
      });
    } else {
      alert('Por favor, preencha todos os campos corretamente.');
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
