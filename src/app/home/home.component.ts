import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
emps:any;
  constructor(private service:ServiceService) { }

  ngOnInit()
   {
    var obr =this.service.Select();
    obr.subscribe((res)=>
    {
      this.emps=res;
    })

  }

}


