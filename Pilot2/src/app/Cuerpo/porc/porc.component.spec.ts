import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorcComponent } from './porc.component';

describe('PorcComponent', () => {
  let component: PorcComponent;
  let fixture: ComponentFixture<PorcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PorcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
