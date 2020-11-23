import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Table } from './generator.type';

@Injectable({
  providedIn: 'root'
})
export class TablesService {
  private URL: string= "http://localhost:4000/tables";
  private selectedTable: Table;
  private tables: Table[];
  private tableObservable: Observable<Table>;
  private tablesObservable: Observable<Table[]>;
  

  constructor(private http: HttpClient) { }

  getTables(): Observable<Table[]> {
    if(this.tablesObservable) {
      return this.tablesObservable;
    }

    if(this.tables) {
      return of(this.tables);
    }

    return this.loadTables();
  }

  getTable(tableId: string): Observable<Table>  {

    if(this.tableObservable) {
      return this.tableObservable;
    }

    if(this.selectedTable?.id === tableId) {
      return of(this.selectedTable);
    }

    return this.loadTable(tableId);
  }

  loadTables(): Observable<Table[]> {
    this.tablesObservable=  this.http.get<Table[]>(this.URL);

    this.tablesObservable.subscribe(tables => {
      this.tables = tables;
      this.tablesObservable = null;
    });
    
    return this.tablesObservable;

  }

  loadTable(tableId: string): Observable<Table> {
    this.tableObservable=  this.http.get<Table>(`${this.URL}/${tableId}`);

    this.tableObservable.subscribe(table => {
      this.selectedTable = table;
      this.tableObservable = null;
    });
    return this.tableObservable;

  }
}
 