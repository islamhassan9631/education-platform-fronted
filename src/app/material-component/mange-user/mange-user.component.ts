import { Component, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { UserComponent } from '../dialog/user/user.component';
import { ConfirationComponent } from '../dialog/confiration/confiration.component';

@Component({
  selector: 'app-mange-user',
  templateUrl: './mange-user.component.html',
  styleUrls: ['./mange-user.component.scss']
})
export class MangeUserComponent {
  @ViewChild(MatPaginator)
  paginator!: MatPaginator; 
displayedCoulumns:string[]=["username","email",'phone','status']
dataSource:any;

  constructor(private userService:UserService,
    private dialog:MatDialog,
    private router:Router) { }

  ngOnInit(): void {
this.tableData()
  }
tableData(){
this.userService.getUsers().subscribe((res:any)=>{
  console.log(res);
  
  this.dataSource=new MatTableDataSource(res);
  this.dataSource.pagintor= this.paginator
})
}
applyFilter(event:Event){
  const filterValue=(event.target as HTMLInputElement).value;
  
  this.dataSource.filter=filterValue.trim()
  console.log(filterValue);
  
  }
  handleChangeAction(status:any,id:any){
    var data={
      status:status.toString(),

id:id
    }
    this.userService.updateuser(data,data.id).subscribe((res:any)=>{

    })
  }
  handleAddAction(){
    
    const dialogConfig=new MatDialogConfig();
    dialogConfig.data={
      action:"اضافه"
    }
    dialogConfig.width="850px"
    const dialogRef=this.dialog.open(UserComponent,dialogConfig)
    this.router.events.subscribe(()=>{
      dialogRef.close()
    })
    const sub=dialogRef.componentInstance.onAddUser.subscribe((res)=>{
      this.tableData()
    })
  }
  handleEditAction(value:any){
    const dialogConfig=new MatDialogConfig();
    dialogConfig.data={
      action:"تعديل",
      data:value
    }
    dialogConfig.width="850px"
    const dialogRef=this.dialog.open(UserComponent,dialogConfig)
    this.router.events.subscribe(()=>{
      dialogRef.close()
    })
    const sub=dialogRef.componentInstance.onEditUser.subscribe((res)=>{
      this.tableData()
    })
  }
  handleDeletAction(value:any){
    const dialogConfig=new MatDialogConfig();
    dialogConfig.data={
      message:'مسح '+value.name+' user ' +' ?'
    };
    const dialogRef=this.dialog.open(ConfirationComponent,dialogConfig);
    const sub=dialogRef.componentInstance.onEmitStatusChange.subscribe((res)=>{
this.deleteUser(value.id)
dialogRef.close()
    })
  }
  deleteUser(id:any){
    this.userService.getUserById(id).subscribe((res:any)=>{
this.tableData()
    })
  }
}
