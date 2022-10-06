import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderChildComponent } from './provider-child.component';

describe('ProviderChildComponent', () => {
  let component: ProviderChildComponent;
  let fixture: ComponentFixture<ProviderChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProviderChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
