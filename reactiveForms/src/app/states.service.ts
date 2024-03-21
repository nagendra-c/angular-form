import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StatesService {
  constructor(private http:HttpClient) { 

  }
  signUpFormDataPost(data:any){
    return this.http.post<any>('http://localhost:3000/comments',data).pipe(map((res:any) => {
      return res;
    }));
  }
}
