import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  isShowDiv=true;
  isnotshow=true;
  isshow=true;
  isnotshowing=true;

  data=[
    {

      'subject':'Search Engine Optimization (SEO)',
    },
    {

      'subject':'Content Marketing Services',
    },
    {

      'subject':'Social Media Promotion',
    },
    {
      'subject':"Search Engine Marketing (SEM)"

    }
  ]

  toogleDisplayDiv(){
    this.isShowDiv =!this.isShowDiv
  }

  toogleout(){
    this.isnotshow =!this.isnotshow
  }
  tooglein(){
    this.isshow=!this.isshow
  }

  toogle(){
    this.isnotshowing =!this.isnotshowing
  }


  constructor(public fb:FormBuilder) { }

  ngOnInit(): void {
  }
  uname=""
  phone=""
  email=""
  service=""
  message=""
  registerform:any=this.fb.group({
    'uname':this.fb.control('',Validators.required),
    'email':this.fb.control('',Validators.required),
    'phone':this.fb.control('',Validators.required),
    'service':this.fb.control('',Validators.required),
    'message':this.fb.control('',Validators.required)
  })
}
