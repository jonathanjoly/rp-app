import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of } from 'rxjs';
import {Generator, Table } from "./generator.type";
import { isGeneratedFile } from '@angular/compiler/src/aot/util';

@Injectable({
  providedIn: 'root'
})
export class GeneratorsService {

  private URL: string= "http://localhost:4000/generators";
  private selectedGenerator: Generator;
  private generators: Generator[];
  private generatorObservable: Observable<Generator>;
  private generatorsObservable: Observable<Generator[]>;
  

  constructor(private http: HttpClient) { }

  getGenerators(): Observable<Generator[]> {
    if(this.generatorsObservable) {
      return this.generatorsObservable;
    }

    if(this.generators) {
      return of(this.generators);
    }

    return this.loadGenerators();
  }

  getGenerator(generatorId: string): Observable<Generator>  {

    if(this.generatorObservable) {
      return this.generatorObservable;
    }

    if(this.selectedGenerator?.id === generatorId) {
      return of(this.selectedGenerator);
    }

    return this.loadGenerator(generatorId);
  }

  loadGenerators(): Observable<Generator[]> {
    this.generatorsObservable=  this.http.get<Generator[]>(this.URL);

    this.generatorsObservable.subscribe(generator => {
      this.generators = generator;
      this.generatorsObservable = null;
    });
    
    return this.generatorsObservable;

  }

  loadGenerator(generatorId: string): Observable<Generator> {
    this.generatorObservable=  this.http.get<Generator>(`${this.URL}/${generatorId}`);

    this.generatorObservable.subscribe(generator => {
      this.selectedGenerator = generator;
      this.generatorObservable = null;
    });
    
    return this.generatorObservable;

  }

  postGenerator(generator: Generator): Observable<Generator> {
    return this.http.post<Generator>(this.URL, generator);
  }

  putGenerator(generator: Generator): Observable<Generator> {
    return this.http.put<Generator>(this.URL, generator);
  }





}
