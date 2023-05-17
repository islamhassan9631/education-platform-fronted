import { Component, EventEmitter, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CourseService } from 'src/app/service/course.service';
import { SbjctService } from 'src/app/service/sbjct.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {
  onAddProduct=new EventEmitter();
  onEditProduct=new EventEmitter();
  productForm:any=FormGroup;
  dialogAction:any="Add";
  action:any="Add";
  category:any=[]
  qrcode:any=this.productForm.value
  
  
    constructor(@Inject(MAT_DIALOG_DATA) public dialogData:any,
    private formBuilder:FormBuilder,
    private productService:CourseService,
  public dialogRaf:MatDialogRef<CourseComponent>,
  private categoryService:SbjctService,) { }
  
    ngOnInit(): void {
     this.productForm=this.formBuilder.group({
      title:[null,[Validators.required]],
      categoryId:[null,[Validators.required]],
      price:[null,[Validators.required]],
      description:[null,[Validators.required]],
      
     })
    
    
     if(this.dialogData.action==="Edit"){
      this.dialogAction="Edit";
      this.action="Update";
      this.productForm.patchValue(this.dialogData.data)
      
      this.dialogData.data.toString();
      
      
      
     }
     this.getcategory()
     
     var x=this.dialogData.data.id
     console.log(x);
    console.log(typeof(x));
    
     
   
   
    
    }
    
  
  
    getcategory(){
      this.categoryService.getallcategory().subscribe((res:any)=>{
        this.category=res
      })
    }
  handleSubmit(){
  if(this.dialogAction === "Edit"){
    this.edit()
  
  }else{
    this.add()
  }
  }
  edit(){
    var formData=this.productForm.value;
    var data={
      id:this.dialogData.data.id,
      name:formData.title,
      categoryId:formData.categoryId,
      price:formData.price,
      description:formData.description
    }
    this.productService.updatProduct(data,data.id).subscribe((res)=>{
     
      this.dialogRaf.close()
      this.onEditProduct.emit()
    })
  }
  add(){
    var formData=this.productForm.value;
    var data={
      title:formData.title,
      categoryId:formData.categoryId,
      price:formData.price,
      description:formData.description
    }
    console.log(data);
    
    
    this.productService.addProduct(data).subscribe((res)=>{
      console.log(res);
      
      this.dialogRaf.close()
      this.onAddProduct.emit()
    })
  }
  genretQrCode(data:any){
    console.log(data);
    
    
    
  }
}
