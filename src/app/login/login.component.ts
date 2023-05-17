import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { SignupComponent } from '../signup/signup.component';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm:any=FormGroup
  response: any
    constructor(private formBulider:FormBuilder,
      private router:Router,
      private userService:UserService,
      public dialogRef:MatDialogRef<LoginComponent>,
      private dialog:MatDialog,
      private ngxService:NgxUiLoaderService
    ) { }
  
  
    ngOnInit(): void {
      this.loginForm=this.formBulider.group({
        email:[null,[ Validators.required,Validators.email]],
        password:[null,[ Validators.required]]
      })
    }
  handleSubmit(){
  var formData=this.loginForm.value;
  var data={
    email:formData.email,
    password:formData.password
  }
  this.ngxService.start()
  this.router.navigate(['/dashboard'])
  this.userService.login(data).subscribe({
    
  next:(res:any)=>{
    this.dialogRef.close()
    this.ngxService.stop()
    localStorage.setItem("token",res.token)
    
  
  }
  
  
   
  })
  }
  singup(){
    const dialogconfig=new MatDialogConfig();
    dialogconfig.width="550px";
    this.dialog.open(SignupComponent,dialogconfig )
  }
}
