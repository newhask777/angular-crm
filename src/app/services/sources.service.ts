import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ResponseHttp } from '../models/responseHttp';
import { Source } from '../models/source';

@Injectable({
  providedIn: 'root'
})
export class SourcesService {
  
  getSources() : Observable<Source[]> {
    return this.http.get<ResponseHttp>(environment.apiUrl + 'api/admin/sources').pipe(
      map((data) => {
        return data.data.items
      }),
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  constructor(private http: HttpClient) { }
}
