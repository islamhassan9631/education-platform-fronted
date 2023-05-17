import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signup:any=FormGroup
constructor(private formBuider:FormBuilder,
  private router:Router,private userService:UserService,  public dialogRef:MatDialogRef<SignupComponent> ,
  private ngxService:NgxUiLoaderService){}

  ngOnInit(){
    this.signup=this.formBuider.group({
      name:[null,[Validators.required]],
      email:[null,[Validators.required]], 
      phone:[null,[Validators.required]],
      password:[null,[Validators.required]]
    })
  }
  handelSubmit(){
    this.ngxService.start()
    var formdata=this.signup.value;
    var data={
      name:formdata.name,
      email:formdata.email,
      phone:formdata.phone,
      paswword:formdata.password,
    }
    this.userService.signup(data).subscribe((res:any)=>{
      this.ngxService.stop()
      this.dialogRef.close()
      this.router.navigate(['/'])
    },(error)=>{
      this.ngxService.stop()
    })
  }
}
