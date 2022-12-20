import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoFirstService {

  constructor() { }

       // implement in Service componentOne & componentTwo
  display(){
    alert('Subscribed Successful');
  }
       // implement in Service componentOne & componentTwo

  products=[
    {id:1, name:'Mobile',price:20000},
    {id:2,name:'Laptop',price:80000},
    {id:3,name:'TV',price:30000},
    {id:4,name:'Cooler',price:10000},
    {id:5,name:'AC',price:50000}
  ]
}
