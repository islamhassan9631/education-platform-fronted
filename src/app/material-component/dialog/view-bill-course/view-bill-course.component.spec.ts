import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBillCourseComponent } from './view-bill-course.component';

describe('ViewBillCourseComponent', () => {
  let component: ViewBillCourseComponent;
  let fixture: ComponentFixture<ViewBillCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBillCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewBillCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
