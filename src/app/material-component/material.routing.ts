
import { Routes } from '@angular/router';
import { MangeBillComponent } from './mange-bill/mange-bill.component';
import { MangeUserComponent } from './mange-user/mange-user.component';
import { MangeExamComponent } from './mange-exam/mange-exam.component';
import { MangeSchoolWorkComponent } from './mange-school-work/mange-school-work.component';
import { MangeCoursesComponent } from './mange-courses/mange-courses.component';
import { MangeMyCourseComponent } from './mange-my-course/mange-my-course.component';




export const MaterialRoutes: Routes = [
    {path: 'course', component: MangeCoursesComponent},
    {path: 'homework', component:MangeSchoolWorkComponent},
    {path: 'exam', component:MangeExamComponent},
    {path: 'bill', component:MangeBillComponent},
    {path: 'student', component:MangeUserComponent},
    {path:'mycourse', component:MangeMyCourseComponent},
];