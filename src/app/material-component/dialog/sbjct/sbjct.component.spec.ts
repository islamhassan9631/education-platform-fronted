import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbjctComponent } from './sbjct.component';

describe('SbjctComponent', () => {
  let component: SbjctComponent;
  let fixture: ComponentFixture<SbjctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SbjctComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SbjctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
