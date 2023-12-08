import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Compound, CompoundResponse } from '../types/compound';

@Injectable({
  providedIn: 'root',
})
export class CompoundService {
  private apiUrl = 'http://localhost:3000/compound';

  constructor(private http: HttpClient) {}

  getOneCompound(id: any): Observable<Compound> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Compound>(url);
  }

  getCompound(page: number, limit: number): Observable<CompoundResponse> {
    const url = `${this.apiUrl}?page=${page}&limit=${limit}`;
    return this.http.get<CompoundResponse>(url);
  }

  addCompound(obj: Compound): Observable<Compound> {
    return this.http.post<Compound>(this.apiUrl, obj);
  }

  editCompound(obj: any, id: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, obj);
  }

  deleteCompound(id: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
