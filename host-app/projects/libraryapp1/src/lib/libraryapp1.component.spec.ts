import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Libraryapp1Component } from './libraryapp1.component';

describe('Libraryapp1Component', () => {
  let component: Libraryapp1Component;
  let fixture: ComponentFixture<Libraryapp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Libraryapp1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Libraryapp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
