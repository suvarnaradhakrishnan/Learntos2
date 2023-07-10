import { Component } from '@angular/core';
import { UserServiceService } from 'src/services/user-service.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})


export class TestimonialsComponent {
  
  constructor(private userservice:UserServiceService) {
  }
username="";
password="";
onSubmit(){
  this.userservice.login(this.username,this.password).subscribe(
    (response: any) => {
      console.log(response)
    },
    
    (error: any) => {
      console.log(error)
    }
  )
}
}


