import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';
import { StatesService } from '../states.service';
import { SignUpForm } from './sign-up-model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit{
  myForm!:FormGroup;
  signUpFormObj:SignUpForm= new SignUpForm();
  constructor(private _fb:FormBuilder,private _StatesService:StatesService){

  }
  ngOnInit(): void {
    this.myForm = this._fb.group({
      nameF: ['',Validators.required],
      nameL: ['',Validators.required],
      email: ['',Validators.required],
      password: ['',Validators.required],
     passwordL: ['',Validators.required]
    });
  }
  onSumbit(form:FormGroup){
    console.log(this.myForm.value);
    this.signUpFormObj.nameF=this.myForm.value.nameF;
    this.signUpFormObj.nameL=this.myForm.value.nameL;
    this.signUpFormObj.email=this.myForm.value.email;
    this.signUpFormObj.password=this.myForm.value.password;
    this.signUpFormObj.passwordL=this.myForm.value.passwordL;

    this._StatesService.signUpFormDataPost(this.signUpFormObj).subscribe((res) => {
      console.log("Data Updated",res);
      alert("Data added Successfully");
    },
    (error)=>{
      alert("Data not added");
    });
   }
  }
