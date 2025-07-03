import { Observable } from 'rxjs';
import { MainService } from './../../services/main.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';
import { AlertService } from 'src/app/services/alert.service';

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
  isLoading: boolean = false
   modal = false

  constructor(
    private MainService: MainService,
    private fb: FormBuilder,
    private emailService: EmailService,
    private alertService : AlertService
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
    }
  }

  sendEmail() {
    this.isLoading = true
    if (this.contactForm.valid) {
      this.emailService.sendEmail(this.contactForm.value).subscribe({
        next: (response) => {
          this.isLoading = false
          this.alertService.success( 'Enviado!','Email enviado com sucesso! Obrigado por entrar em contato.');
          this.contactForm.reset(); // Reseta o formulário
        },
        error: (error) => {
          this.isLoading = false
          this.alertService.error('OPS!','Erro ao enviar email. Por favor, tente novamente.');
        }
      });
    } else {
      this.isLoading = false
      this.alertService.warning( 'OPS!', 'Por favor, preencha todos os campos corretamente.');
    }
  }

    activeModal() {
      let close = document.querySelector('.fa-bars');
      if (close) {
        close.classList.add('fa-times');
      }
    }

      removeModal() {
      const close = document.querySelector('.fa-times');
      if (close) {
        close.classList.remove('fa-times');
      }
      }

  onClick(){

  if (!this.modal) {
    this.modal = true
    this.activeModal()
    console.log('ativei')
  } else if (this.modal) {
    this.modal = false
    this.removeModal()
    console.log('desativei')
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
