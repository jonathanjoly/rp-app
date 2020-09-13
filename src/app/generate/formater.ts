import {
  Generator,
  GeneratorResult,
  Table,
  TableResult,
} from "../generator.type";
import { launchDice } from "../dice";

export function generate(generator: Generator): GeneratorResult {
  return {
    id: generator.id,
    name: generator.name,
    tables: generateTables(generator.tables),
  };
}

function generateTables(tables: Table[]): TableResult[] {
  return tables.map((table) => generateTable(table));
}

function findItem(table: Table, dice: number) {
  return table.entries.find((entry) => {
    return entry.range.start <= dice && dice <= entry.range.end;
  });
}

export function generateTable(table: Table): TableResult {
  const dice = launchDice(table.entries[table.entries.length - 1].range.end);
  return {
    ...table,
    resultat: findItem(table, dice).value,
    dice,
  };
}
