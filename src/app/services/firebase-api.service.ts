import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Firestore,addDoc,collection,collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IUser } from './interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class FirebaseApiService {
  constructor(private firestore: Firestore) {}

  getUser():Observable<IUser[]>{
    const userRef = collection(this.firestore,'users')
    return collectionData(userRef,{idField:'id'}) as Observable<IUser[]>
  }
}
