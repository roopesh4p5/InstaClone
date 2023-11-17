import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:1113/api/auth';
  private tokenKey = 'access_token'; 
  constructor(private http: HttpClient) {}

  register(email: string, password: string, fullname: string, username: string): Observable<any> {
    const body = { email, password, fullname, username };
    return this.http.post(`${this.apiUrl}/register`, body);
  }

  login(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post(`${this.apiUrl}/login`, body);
  }
  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  // Method to retrieve the JWT token from localStorage
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // Method to remove the JWT token from localStorage (on logout, for example)
  removeToken(): void {
    localStorage.removeItem(this.tokenKey);
  }
}
