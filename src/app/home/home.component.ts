import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
constructor(private dialog:MatDialog){}

  loginAction(){
    const dialogconfig=new MatDialogConfig();
    dialogconfig.width="550px";
    this.dialog.open(LoginComponent,dialogconfig )
  }
  signup(){
    const dialogconfig=new MatDialogConfig();
    dialogconfig.width="550px";
    this.dialog.open(SignupComponent,dialogconfig )
  }
}
