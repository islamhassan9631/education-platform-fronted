import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangeCoursesComponent } from './mange-courses.component';

describe('MangeCoursesComponent', () => {
  let component: MangeCoursesComponent;
  let fixture: ComponentFixture<MangeCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangeCoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MangeCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
