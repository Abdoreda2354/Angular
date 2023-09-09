import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  nameEmpty:boolean = true
  ageEmpty:boolean = true
  emailEmpty:boolean = true
  passwordEmpty:boolean = true

nameF(e:any){
 let value =e.target.value;
 if (value.length>0) {
  this.nameEmpty=false;
 }else{
  this.nameEmpty=true;
 }
}
ageF(e:any){
 let value =e.target.value;
 if (value.length>0) {
  this.ageEmpty=false;
 }else{
  this.ageEmpty=true;
 }
}
emailF(e:any){
 let value =e.target.value;
 if (value.length>0) {
  this.emailEmpty=false;
 }else{
  this.emailEmpty=true;
 }
}
passwordF(e:any){
 let value =e.target.value;
 if (value.length>0) {
  this.passwordEmpty=false;
 }else{
  this.passwordEmpty=true;
 }
}
}


