export interface Range {
  start: number;
  end: number;
}

export interface Entry {
  range: Range;
  value: string;
}

export interface Table {
  id?: string;
  name: string;
  entries: Entry[];
}
export interface Generator {
  id?: string;
  name: string;
  tables: Table[];
}

export interface GeneratorResult {
  id: string;
  name: string;
  tables: TableResult[];
}

export interface TableResult {
  id?: string;
  dice: number;
  name: string;
  resultat: string;
  entries: Entry[];
}
