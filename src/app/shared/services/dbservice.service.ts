import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbserviceService {
    baseURL:string="http://localhost:8888";

  constructor(public httpObj:HttpClient) { }
  
  //Fetch all the records
  getRecord(tableName:any){
    return this.httpObj.get(`${this.baseURL}/${tableName}`);
  }
  // delete single record
  deleteRecord(tableName:any,id:any){
    return this.httpObj.delete(`${this.baseURL}/${tableName}/${id}`);
  }
  // add single record
  addRecord(tableName:any,bodydata:any){
    return this.httpObj.post(`${this.baseURL}/${tableName}`,bodydata);
  }
   // get single record
  getSingleRecord(tableName:any,id:any){
    return this.httpObj.get(`${this.baseURL}/${tableName}/${id}`);
  }
  // update single record
  updateRecord(tableName:any,id:any,body:any){
    return this.httpObj.put(`${this.baseURL}/${tableName}/${id}`,body);
  }
}
