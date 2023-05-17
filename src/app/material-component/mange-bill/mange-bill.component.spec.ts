import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangeBillComponent } from './mange-bill.component';

describe('MangeBillComponent', () => {
  let component: MangeBillComponent;
  let fixture: ComponentFixture<MangeBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangeBillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MangeBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
