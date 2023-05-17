import { Component, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirationComponent } from '../dialog/confiration/confiration.component';
import { ViewBillCourseComponent } from '../dialog/view-bill-course/view-bill-course.component';
import { MatPaginator } from '@angular/material/paginator';
import { BillService } from 'src/app/service/bill.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-mange-bill',
  templateUrl: './mange-bill.component.html',
  styleUrls: ['./mange-bill.component.scss']
})
export class MangeBillComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined
  displayColumns: string[] =['name','email','contactNumber','paymentMethod',"total",'view'];
  dataSource:any=[{'name':"ttt",'email':"gfghfh",'contactNumber':"23666",'paymentMethod':"cash","total":'4565'},{'name':"ttt",'email':"gfghfh",'contactNumber':"23666",'paymentMethod':"cash","total":'4565'}]
    constructor(private billService:BillService,
      private dialog:MatDialog,
      private router:Router) { }
  
    ngOnInit(): void {
      this.tableData()
    }
  tableData(){
    this.billService.getbill().subscribe((res:any)=>{
       this.dataSource =new MatTableDataSource(res)
      this.dataSource.pagiantor=this.paginator
    })
  }
  applyFilter(event:Event){
    const filterValue=(event.target as HTMLInputElement).value;
    
    // this.dataSource.filter=filterValue.trim()
    console.log(filterValue);
    
    }
    handleViewAction(value:any){
      const dialogConfig=new MatDialogConfig();
      dialogConfig.data={
        data:value
      }
      dialogConfig.width="100%"
      const dialogRef=this.dialog.open(ViewBillCourseComponent,dialogConfig)
      this.router.events.subscribe(()=>{
        dialogRef.close()
      })
    }
    dowmnloadReportAction(value:any){
      var data={
        name:value.name,
        email:value.email,
        id:value.id,
        contactNumber:value.contactNumber,
        paymentMethod:value.paymentMethod,
        total:value.total,
        productDetails:value.productDetails
      }
      this.billService.getPDF(data).subscribe((res:any)=>{
        ///saveAs(res,value.id+'.pdf')
      })
    }
    handleDeleteAction(value:any){
      const dialogConfig=new MatDialogConfig();
      dialogConfig.data = {message:' delete '+value.name+ ' bill  ?' };
      const dialogRef=this.dialog.open(ConfirationComponent,dialogConfig)
        const sub = dialogRef.componentInstance.onEmitStatusChange.subscribe((res:any)=>{
  this.deleteProduct(value.id)
  dialogRef.close()
        })
      
  
    
  }
  deleteProduct(id:any){
    this.billService.delete(id).subscribe((res:any)=>{
      this.tableData()
    })
  }
}
