import {
  Entry,
  Generator,
  GeneratorResult,
  Table,
  TableResult,
} from "./generator.type";

export function getTableFromGenerator(
  generator: Generator | GeneratorResult,
  tableName: string,
): Table | TableResult {
  return generator.tables.find((table) => {
    return table.name === tableName;
  });
}

export function getIndexFromGenerator(
  generator: Generator | GeneratorResult,
  tableName: string,
): number {
  return generator.tables.findIndex((table) => {
    return table.name === tableName;
  });
}

export function createNewGenerator(): Generator {
  return {
    name: "",
    tables: [],
  };
}

export function createNewTable(): Table {
  return {
    name: "",
    entries: [],
  };
}

export function createNewEntry(): Entry {
  return {
    value: "",
    range: { start: 0, end: 0 },
  };
}

export function tablesToIdArray(tables) {
  return tables.map((table) => table.id);
}

export function createId(tableName) {
  return tableName.toUpperCase().replace(" ", "-");
}
