import { Injectable } from '@angular/core';
import { Insumo } from '../model/insumo';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InsumosService {

  private readonly API = 'api/insumos'


  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<Insumo[]>(this.API)
    .pipe(
      first(),
      delay(2000),
      tap(insumos => console.log(insumos))
    );
    ;
  }
}
