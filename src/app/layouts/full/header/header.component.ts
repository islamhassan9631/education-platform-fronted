import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ChangePasswordComponent } from 'src/app/material-component/dialog/change-password/change-password.component';
import { ConfirationComponent } from 'src/app/material-component/dialog/confiration/confiration.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  role: any;

  constructor(private router: Router,
    private dialog: MatDialog) {

  }
logout(){
  const dialogConfig=new MatDialogConfig();
  dialogConfig.data={
    message:"Logout",
  }

  const dialogRef=this.dialog.open(ConfirationComponent,dialogConfig) 
 
  const sub =dialogRef.componentInstance.onEmitStatusChange.subscribe((user:any)=>{
    dialogRef.close();
    localStorage.clear();
    
  })
}
changepassword(){
  const dialogConfig=new MatDialogConfig();
  dialogConfig.width="550px"
  this.dialog.open(ChangePasswordComponent,dialogConfig)
}
}
