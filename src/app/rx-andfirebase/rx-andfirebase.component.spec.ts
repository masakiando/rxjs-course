import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxAndfirebaseComponent } from './rx-andfirebase.component';

describe('RxAndfirebaseComponent', () => {
  let component: RxAndfirebaseComponent;
  let fixture: ComponentFixture<RxAndfirebaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxAndfirebaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxAndfirebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
