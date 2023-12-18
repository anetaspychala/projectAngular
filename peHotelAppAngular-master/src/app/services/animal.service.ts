import {Injectable, } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {Animal} from "../animals";
import {User} from "../users";

@Injectable({
  providedIn: 'root'
})

export class AnimalService {
  private baseURL = "http://localhost:8080/animals"
  private postURL = "http://localhost:8080/addAnimal"
  constructor(private httpClient: HttpClient) { }

  getAnimalsList(): Observable<Animal[]>{
    console.log('Calling getAnimalsList');
    return this.httpClient.get<Animal[]>(this.baseURL)
  }
  postAnimal(animal: Animal): Observable<Animal[]> {
    console.log('Calling postAnimal');
    return this.httpClient.post<Animal[]>(this.postURL, animal);
  }
}
