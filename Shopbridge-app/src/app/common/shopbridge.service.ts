import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShopbridgeService {
  public headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }

  public getComponents(): Observable<any> {
    const path = 'http://localhost:59438//ShopBridge/GetComponents';
    var response = this.http
      .get(path)
      .pipe(map(res => <any>res));
    return response;
  }

  public save(data: any): Observable<any> {
    // clear UploadFileInfo as endpoint is not hitting with File object.
    //data.UploadFileInfo = null;
    const path = 'http://localhost:59438//ShopBridge/SaveItem';
    try {
      return this.http
        .post(path, JSON.stringify(data), { headers: this.headers, responseType: 'text' });
    }
    catch (error) {
      throw error;
    }
  }

  public remove(id: any): Observable<any> {
    const path = `http://localhost:59438//ShopBridge/RemoveItem?itemId=${id}`;
    try {
      return this.http.delete(path, { headers: this.headers , responseType: 'text' });
    }
    catch (error) {
      throw error;
    }
  }
}
