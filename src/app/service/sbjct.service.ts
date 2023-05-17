import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SbjctService {

  url='https://fakestoreapi.com/products/categories'
  constructor(private http:HttpClient) { }
  addcategory(data:any){
    return this.http.post(this.url+'',data)
  }
  getallcategory(){
    return this.http.get(this.url+"")
  }
  updatecategoryById(data:any ,id:any){
    return this.http.patch(this.url+"",data,id)
  }
  deletecategory(id:any){
    return this.http.delete(this.url+"/"+id)
  }
}
