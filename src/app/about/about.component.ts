import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(public fb:FormBuilder) { }

  uname=""
  email=""
  message=""
  registerform:any=this.fb.group({

      'uname':this.fb.control('',Validators.required),
      'email':this.fb.control('',Validators.required),
      'message':this.fb.control('',Validators.required),
  })
}
