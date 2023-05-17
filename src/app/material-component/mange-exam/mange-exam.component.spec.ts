import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangeExamComponent } from './mange-exam.component';

describe('MangeExamComponent', () => {
  let component: MangeExamComponent;
  let fixture: ComponentFixture<MangeExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangeExamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MangeExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
