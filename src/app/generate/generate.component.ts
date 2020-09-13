import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import axios from "axios";
import { GeneratorResult, Generator } from "../generator.type";
import { generate } from "./formater";

@Component({
  selector: "app-generate",
  templateUrl: "./generate.component.html",
  styleUrls: ["./generate.component.scss", "../page.scss"],
})
export class GenerateComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
  ) {}

  rawData: Generator;
  generator: GeneratorResult;
  displayedColumns: string[] = ["table", "value", "dice"];

  async ngOnInit(): Promise<void> {
    const id = this.route.snapshot.paramMap.get("id");
    const result = await axios.get("http://localhost:4000/generators/" + id);
    this.rawData = result.data;
    this.generate();
  }

  generate(): void {
    this.generator = generate(this.rawData);
  }

  /*refreshTable(element): void {
    const index = getIndexFromGenerator(this.rawData ,element);
    this.generator.tables[index] = generateTable(this.rawData.tables[index]);    
  }*/
}
