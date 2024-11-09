import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListSocioComponent } from './list-socio.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SocioService } from '../../../services/socio/socio.service';

describe('ListSocioComponent', () => {
  let component: ListSocioComponent;
  let fixture: ComponentFixture<ListSocioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListSocioComponent],
      imports: [HttpClientTestingModule],
      providers: [SocioService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
