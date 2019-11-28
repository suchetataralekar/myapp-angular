import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  emps={"No":"","Name":"","Age":""};
  constructor(private service:ServiceService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    var obr=this.route.paramMap.subscribe((res)=>
    {
      let No=res.get("No");
      let obrs=this.service.SelectByNo(No);
      obrs.subscribe((data)=>
      {
        this.emps=data[0];
      })
    })

  }

  Update()
  {
    let obrs=this.service.Update(this.emps);
    obrs.subscribe((data)=>
    {
      this.router.navigate(['/home']);
    })

  }

}
