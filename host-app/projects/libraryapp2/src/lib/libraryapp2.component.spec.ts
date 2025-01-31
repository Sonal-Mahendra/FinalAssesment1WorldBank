import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Libraryapp2Component } from './libraryapp2.component';

describe('Libraryapp2Component', () => {
  let component: Libraryapp2Component;
  let fixture: ComponentFixture<Libraryapp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Libraryapp2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Libraryapp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
