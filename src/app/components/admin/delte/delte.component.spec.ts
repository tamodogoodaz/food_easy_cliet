import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelteComponent } from './delte.component';

describe('DelteComponent', () => {
  let component: DelteComponent;
  let fixture: ComponentFixture<DelteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
