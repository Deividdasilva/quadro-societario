import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empresa } from './empresa.interface';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  getApiUrl(): string {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'http://localhost:8000/empresas';

  constructor(private http: HttpClient) { }

  getEmpresas(): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(this.apiUrl);
  }

  getEmpresa(id: number): Observable<Empresa> {
    return this.http.get<Empresa>(`${this.apiUrl}/${id}`);
  }

  addEmpresa(empresa: Empresa): Observable<Empresa> {
    const url = `${this.apiUrl}/new`;
    return this.http.post<Empresa>(url, empresa);
  }

  updateEmpresa(empresa: Empresa): Observable<Empresa> {
    return this.http.put<Empresa>(`${this.apiUrl}/${empresa.id}`, empresa);
  }

  deleteEmpresa(empresaId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${empresaId}`);
  }
}
