import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  noticia: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() { }

  noticiaDeportes(){
    this.noticia.next('DEPORTES')
  }

  noticiaEconomia(){
    this.noticia.next('ECONOMIA')
  }
}
