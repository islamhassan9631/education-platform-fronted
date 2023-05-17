import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { MaterialRoutes } from './material.routing';
import { MaterialModule } from '../shared/material-module';

import { ConfirationComponent } from './dialog/confiration/confiration.component';
import { ChangePasswordComponent } from './dialog/change-password/change-password.component';

import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MangeUserComponent } from './mange-user/mange-user.component';
import { MangeBillComponent } from './mange-bill/mange-bill.component';
import { MangeCoursesComponent } from './mange-courses/mange-courses.component';
import { MangeExamComponent } from './mange-exam/mange-exam.component';
import { MangeSchoolWorkComponent } from './mange-school-work/mange-school-work.component';
import { UserComponent } from './dialog/user/user.component';
import { BillComponent } from './dialog/bill/bill.component';
import { ExamComponent } from './dialog/exam/exam.component';
import { HomeWorkComponent } from './dialog/home-work/home-work.component';
import { ViewBillCourseComponent } from './dialog/view-bill-course/view-bill-course.component';
import { SbjctComponent } from './dialog/sbjct/sbjct.component';
import { MangeSbjectComponent } from './mange-sbject/mange-sbject.component';
import { CourseComponent } from './dialog/course/course.component';
import { MangeMyCourseComponent } from './mange-my-course/mange-my-course.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MaterialRoutes),
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule
  ],
  providers: [],
  declarations: [
   
    ConfirationComponent,
    ChangePasswordComponent,
    MangeUserComponent,
    MangeBillComponent,
    MangeCoursesComponent,
    MangeExamComponent,
    MangeSchoolWorkComponent,
    UserComponent,
    BillComponent,
    ExamComponent,
    HomeWorkComponent,
    ViewBillCourseComponent,
    SbjctComponent,
    MangeSbjectComponent,
    CourseComponent,
    MangeMyCourseComponent,
    
  ]
})
export class MaterialComponentsModule {}