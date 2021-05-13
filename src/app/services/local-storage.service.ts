import { Injectable } from '@angular/core';
import { Item } from '../model/item';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  set(key: string, value: Item[]) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  
  get(key:string){
    return JSON.parse(localStorage.getItem(key)) || [];
  }

}
