import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MedicamentoService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getMedicamentos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/medicamentos`);
  }

  addMedicamento(medicamento: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/medicamentos`, medicamento);
  }

  deleteMedicamento(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/medicamentos/${id}`);
  }
}
