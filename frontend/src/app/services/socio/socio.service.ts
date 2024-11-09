import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Socio } from './socio.interface';

@Injectable({
  providedIn: 'root'
})
export class SocioService {
  private apiUrl = 'http://localhost:8000/socios';

  constructor(private http: HttpClient) { }

  getSocios(): Observable<Socio[]> {
    return this.http.get<Socio[]>(this.apiUrl);
  }

  addSocio(socio: Socio): Observable<Socio> {
    const url = `${this.apiUrl}/new`;
    return this.http.post<Socio>(url, socio);
  }

  getSocio(id: number): Observable<Socio> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Socio>(url);
  }

  updateSocio(socio: Socio): Observable<Socio> {
    const url = `${this.apiUrl}/${socio.id}`;
    return this.http.put<Socio>(url, socio);
  }

  deleteSocio(socioId: number): Observable<void> {
    const url = `${this.apiUrl}/${socioId}`;
    return this.http.delete<void>(url);
  }
}
