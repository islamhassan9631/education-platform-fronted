import { Injectable } from '@angular/core';
export interface Menu{
    state:string,
    name:string,
    icon:string,
    role:string
}
const MENUITEMS=[
    {state:"dashboard",name:"لوحه التحكم",icon:"dashboard",role:""},
    {state:"sbjct",name:" المواد",icon:'category',role:''},
    {state:"course",name:"الكورسات",icon:'inventory_2',role:''},
 {state:"mycourse",name:"كورساتي",icon:'inventory_2',role:''},
    // {state:"product",name:"فواتيري",icon:'inventory_2',role:''},
    // {state:"product",name:"نتائج الامتحان",icon:'inventory_2',role:''},

    // {state:"product",name:"نتائج الواجب",icon:'inventory_2',role:''},
     {state:"exam",name:" الامتحانات",icon:'list_alt',role:''},
    {state:"bill",name:"الواجبات",icon:'import_contacts',role:''},
    {state:"bill",name:" عرض الفواتير",icon:'import_contacts',role:''},
    {state:"student",name:" عرض الطلاب",icon:'people',role:''},
]
@Injectable()
export class MenuItems{
    getMenuItems():Menu[]{
        return MENUITEMS
    }
}