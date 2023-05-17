import { Component, EventEmitter, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confiration',
  templateUrl: './confiration.component.html',
  styleUrls: ['./confiration.component.scss']
})
export class ConfirationComponent {
  onEmitStatusChange=new EventEmitter()
  details:any={}
    constructor(@Inject(MAT_DIALOG_DATA) public dialogData:any) { }
  
    ngOnInit(): void {
      if(this.dialogData){
        this.details=this.dialogData
      }
    }
    handleChangeAction(){
      this.onEmitStatusChange.emit
    }
}
