import { Component, EventEmitter, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  onAddUser=new EventEmitter();
  onEditUser=new EventEmitter();
 userForm:any=FormGroup;
  dialogAction:any="اضافه";
  action:any="اضافه";
  flag:boolean=true
  constructor(@Inject(MAT_DIALOG_DATA) public dialogData:any,
  private formBuilder:FormBuilder,
  private UesrService:UserService,
public dialogRaf:MatDialogRef<UserComponent>) { }

  ngOnInit(): void {
    this.userForm=this.formBuilder.group({
      name:[null,[Validators.required]],
      email:[null,[Validators.required]],
      password:[null,[Validators.required]],
      role:[null,[Validators.required]],
     })
     if(this.dialogData.action==="تعديل"){
      this.dialogAction="تعديل";
      this.action="تحديث";
      this.flag=false
      this.userForm.patchValue(this.dialogData.data)
     }
  }
  handleSubmit(){
    if(this.dialogAction === "تعديل"){
      this.edit()
    
    }else{
      this.add()
    }
    }
    edit(){
      var formData=this.userForm.value;
      var data={
        id:this.dialogData.data.id,
        name:formData.name,
        email:formData.email,
       
        role:formData.role
      }
      this.UesrService.updateuser(data,data.id).subscribe((res)=>{
        this.dialogRaf.close()
        this.onEditUser.emit()
      })
    }
    add(){
      var formData=this.userForm.value;
      var data={
        ame:formData.name,
        email:formData.email,
        password:formData.password,
        role:formData.role
      }
      this.UesrService.adduser(data).subscribe((res)=>{
        this.dialogRaf.close()
        this.onAddUser.emit()
      })
    }

}
