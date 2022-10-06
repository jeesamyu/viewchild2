import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggerBoxComponent } from './logger-box.component';

describe('LoggerBoxComponent', () => {
  let component: LoggerBoxComponent;
  let fixture: ComponentFixture<LoggerBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggerBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoggerBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
