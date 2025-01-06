import { Injectable } from '@angular/core';
import Swal, {SweetAlertIcon} from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  public success(message: string, title: string): void {
    this.modalAlert(message,title,'success')
  }

  public error(message: string, title: string): void {
    this.modalAlert(message,title,'error')
  }

  public warning(message: string, title: string): void {
    this.modalAlert(message,title,'warning')

  }





  public modalAlert(
    title: string,
    text: string,
    icon: SweetAlertIcon
  ) {
    Swal.fire(title,text,icon)
  }

  public downloadCv(title: string) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "success",
      title: title
    });
  }
}