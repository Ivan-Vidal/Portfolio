import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  // modal = false
  // err= false
  // send = false;
  // windowScrolled = false
  // active = false
 
  
 
   constructor(
    //  private http: HttpClient
    ) { }
 
   ngOnInit(): void {

   }


//   OnSubmit(contactForm: NgForm){
//     if (contactForm.valid) {
//       let email = contactForm.value;
//       const headers = new HttpHeaders({ 'Content-type':  'application/json'})
//       this.http.post('https://formspree.io/f/xeqpwrgv', {
//                     name: email.name,
//                     replyto: email.email,
//                     subject: email.subject,
//                     message: email.message
//                    },
//                { 'headers': headers }).subscribe(
//         response => {       
//           console.log(response);
//         });
//         contactForm.reset()
//       this.send = true
//       setTimeout(()=>{ this.send = false }, 5000)


//   } else if (!contactForm.valid){
//     this.err = true
    
//     setTimeout(()=>{ this.err = false }, 5000)
   
//   }
// }

}
