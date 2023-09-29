import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user:any;
  users:any;
  posts:any;
  post:any={
    id:null,
    title:"",
    body:"",
    userId:null
  };
  
  compareWith:any;
  
  constructor() {}
  
  compareWithFn = (o1:any, o2:any) => {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  };
  
}
