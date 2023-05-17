import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangeSbjectComponent } from './mange-sbject.component';

describe('MangeSbjectComponent', () => {
  let component: MangeSbjectComponent;
  let fixture: ComponentFixture<MangeSbjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangeSbjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MangeSbjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
