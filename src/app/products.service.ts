import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getProducts(){
    return this.http.get("http://localhost:3000/products");
  }
  newProduct(item){
    return this.http.post("http://localhost:3000/insert",{"product":item})
    .subscribe(data =>{console.log(data)})
  }
  
  deleteProductData(id){
    return this.http.post("http://localhost:3000/delete",{"id":id})
    .subscribe(data=>{console.log(data)})
  }

  getEditProducts(item)
  {
    console.log(item);
   
    let params = new HttpParams();
    params = params.append('_id', item);
   
 return this.http.get('http://localhost:3000/products', {params: params});
  }
  updateProduct(id)
  {
    return this.http.post('http://localhost:3000/update',{"id":id})
    .subscribe(data=>{console.log(data)})
  }
}
