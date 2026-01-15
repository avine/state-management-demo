import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxTodo } from './ngrx-todo';

describe('NgrxTodo', () => {
  let component: NgrxTodo;
  let fixture: ComponentFixture<NgrxTodo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgrxTodo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgrxTodo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
