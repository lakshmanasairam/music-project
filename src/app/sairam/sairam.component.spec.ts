import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SairamComponent } from './sairam.component';

describe('SairamComponent', () => {
  let component: SairamComponent;
  let fixture: ComponentFixture<SairamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SairamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SairamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
