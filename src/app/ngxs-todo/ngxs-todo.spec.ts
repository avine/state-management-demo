import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxsTodo } from './ngxs-todo';

describe('NgxsTodo', () => {
  let component: NgxsTodo;
  let fixture: ComponentFixture<NgxsTodo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxsTodo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxsTodo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
