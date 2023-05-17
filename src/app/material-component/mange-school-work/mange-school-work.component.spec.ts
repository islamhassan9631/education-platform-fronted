import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangeSchoolWorkComponent } from './mange-school-work.component';

describe('MangeSchoolWorkComponent', () => {
  let component: MangeSchoolWorkComponent;
  let fixture: ComponentFixture<MangeSchoolWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangeSchoolWorkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MangeSchoolWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
