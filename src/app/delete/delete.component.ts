import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  emps={"No":"","Name":"","Age":""};
  constructor(private service:ServiceService,private route:ActivatedRoute,private router:Router) { }


  ngOnInit() {
  this.route.paramMap.subscribe((res)=>{
    let No=res.get("No");
    let obr=this.service.Delete(No);
    obr.subscribe((data)=>
    {
      this.router.navigate(['/home']);
    })
  }
  )
  }

}
