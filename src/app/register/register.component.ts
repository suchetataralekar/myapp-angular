import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  emps={"No":"","Name":"","Age":""};
  constructor(private service:ServiceService,private route:ActivatedRoute,private router:Router) { }


  ngOnInit() {
  }
  Insert()
  {
    let obrs=this.service.Insert(this.emps);
    obrs.subscribe((data)=>
    {
      this.router.navigate(['/home']);
    })

  }

}
