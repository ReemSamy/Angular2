import { Component } from '@angular/core';
import { Student } from '../_models/student';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  std:Student=new Student();
name:string='aly';
id=3
imgsrc="assets/images/tie_logo.gif"
n=2;
flag=true;
changename(input:any)
{
  this.name=input
  console.log(input.value)
}
save(d:string)
{
  //this.name = d 
  this.std.name=d
}
myfun()
{
  alert('kkk')
  this.id++;
  this.flag=!this.flag;
  console.log('btn clicked')
}count():number{
  return 10;
}
}
