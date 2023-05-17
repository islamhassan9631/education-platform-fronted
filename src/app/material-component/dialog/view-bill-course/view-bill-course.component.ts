import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-view-bill-course',
  templateUrl: './view-bill-course.component.html',
  styleUrls: ['./view-bill-course.component.scss']
})
export class ViewBillCourseComponent {
  displayColumns: string[] =["name", "price", "category", "quantity","total"];
  dataSource:any;
  data:any
    constructor(@Inject (MAT_DIALOG_DATA) public dialogData:any,
    public dialogRef:MatDialogRef<ViewBillCourseComponent>) { }
  
    ngOnInit() {
      this.data=this.dialogData.data;
      this.dataSource=JSON.parse(this.dialogData.data.productDetails);
    }
    log(){
      console.log("ht");
      window.print()
    }
}
