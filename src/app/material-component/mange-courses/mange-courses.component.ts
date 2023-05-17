import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/service/course.service';
import { CourseComponent } from '../dialog/course/course.component';
import { ConfirationComponent } from '../dialog/confiration/confiration.component';

@Component({
  selector: 'app-mange-courses',
  templateUrl: './mange-courses.component.html',
  styleUrls: ['./mange-courses.component.scss']
})
export class MangeCoursesComponent {
  displayColumns: string[] =["title", "price", "category","description","edit"]
  dataSource:any=[{"name":"gfg","price":"200","categoryName":"yugh","description":"hhhh"}]
  
    constructor(private productService:CourseService,
     private dialog:MatDialog,
     private router:Router ) { }
  
    ngOnInit(): void {
      this.tablaData()
    }
  tablaData(){
    this.productService.getallProduct().subscribe((res:any)=>{
      console.log(res);
      
       this.dataSource=new MatTableDataSource(res)
    })
  }
  applyFilter(event:Event){
    const filterValue=(event.target as HTMLInputElement).value;
    
    this.dataSource.filter=filterValue.trim()
    console.log(filterValue);
    
    }
    handleAddAction(){
      const dialogConfig=new MatDialogConfig();
      dialogConfig.data={
        action:"Add"
      }
      dialogConfig.width="850px"
      const dialogRef=this.dialog.open(CourseComponent,dialogConfig)
      this.router.events.subscribe(()=>{
        dialogRef.close()
      })
      const sub=dialogRef.componentInstance.onAddProduct.subscribe((res)=>{
        this.tablaData()
      })
    }
    handleEditAction(value:any){
      const dialogConfig=new MatDialogConfig();
      dialogConfig.data={
        action:"Edit",
        data:value
      }
      dialogConfig.width="850px"
      const dialogRef=this.dialog.open(CourseComponent,dialogConfig)
      this.router.events.subscribe(()=>{
        dialogRef.close()
      })
      const sub=dialogRef.componentInstance.onEditProduct.subscribe((res)=>{
        this.tablaData()
      })
    }
    handleDeletAction(value:any){
      console.log(value);
      
      const dialogConfig=new MatDialogConfig();
      dialogConfig.data={
        message:'delete *'+value.title+'* product ' +' ?'
      };
      const dialogRef=this.dialog.open(ConfirationComponent,dialogConfig);
      const sub=dialogRef.componentInstance.onEmitStatusChange.subscribe((res)=>{
  this.deleteProduct(value.id)
  dialogRef.close()
      })
    }
    deleteProduct(id:any){
      this.productService.deleteproduct(id).subscribe((res:any)=>{
  this.tablaData()
      })
    }
    onChange(status:any,id:any){
      var data={
          status:status.toString(),
          id:id
      }
      this.productService.updatProductStuatus(data,data.id).subscribe((res:any)=>{
        
      })
    }
}
