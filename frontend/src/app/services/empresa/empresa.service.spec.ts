import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { EmpresaService } from './empresa.service';
import { Empresa } from './empresa.interface';

describe('EmpresaService', () => {
  let service: EmpresaService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EmpresaService]
    });
    service = TestBed.inject(EmpresaService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve all empresas', () => {
    const dummyEmpresas: Empresa[] = [
      {
        id: 1, nome: 'Empresa A',
        cnpj: ''
      },
      {
        id: 2, nome: 'Empresa B',
        cnpj: ''
      }
    ];

    service.getEmpresas().subscribe(empresas => {
      expect(empresas.length).toBe(2);
      expect(empresas).toEqual(dummyEmpresas);
    });

    // const req = httpMock.expectOne(service.apiUrl);
    const req = httpMock.expectOne(service.getApiUrl());
    expect(req.request.method).toBe('GET');
    req.flush(dummyEmpresas);
  });
});
