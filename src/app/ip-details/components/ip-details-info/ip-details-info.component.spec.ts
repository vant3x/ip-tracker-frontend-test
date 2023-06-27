import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpDetailsInfoComponent } from './ip-details-info.component';

describe('IpDetailsInfoComponent', () => {
  let component: IpDetailsInfoComponent;
  let fixture: ComponentFixture<IpDetailsInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IpDetailsInfoComponent]
    });
    fixture = TestBed.createComponent(IpDetailsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
