import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangeMyCourseComponent } from './mange-my-course.component';

describe('MangeMyCourseComponent', () => {
  let component: MangeMyCourseComponent;
  let fixture: ComponentFixture<MangeMyCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangeMyCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MangeMyCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
