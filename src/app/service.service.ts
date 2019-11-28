import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
 
  Select()
  {
    return this.http.get("http://localhost:9898/emps");
  }

  SelectByNo(No)
  {
    return this.http.get("http://localhost:9898/emps/"+No);
  }
  Delete(No)
  {
    return  this.http.delete("http://localhost:9898/emps/"+No);
  }
  Update(empobj)
  {
    return  this.http.put("http://localhost:9898/emps/"+empobj.No,empobj);
  }

  Insert(empobj)
  {
     return this.http.post("http://localhost:9898/emps",empobj);
  }
}
