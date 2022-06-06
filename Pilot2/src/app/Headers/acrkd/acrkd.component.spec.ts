import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcrkdComponent } from './acrkd.component';

describe('AcrkdComponent', () => {
  let component: AcrkdComponent;
  let fixture: ComponentFixture<AcrkdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcrkdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcrkdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
