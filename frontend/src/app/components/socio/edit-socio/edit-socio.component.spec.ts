import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditSocioComponent } from './edit-socio.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SocioService } from '../../../services/socio/socio.service';
import { EmpresaService } from '../../../services/empresa/empresa.service';

describe('EditSocioComponent', () => {
  let component: EditSocioComponent;
  let fixture: ComponentFixture<EditSocioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditSocioComponent],
      imports: [HttpClientTestingModule],
      providers: [SocioService, EmpresaService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
