import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditEmpresaComponent } from './edit-empresa.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EmpresaService } from '../../../services/empresa/empresa.service';

describe('EditEmpresaComponent', () => {
  let component: EditEmpresaComponent;
  let fixture: ComponentFixture<EditEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditEmpresaComponent],
      imports: [HttpClientTestingModule],
      providers: [EmpresaService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
