import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { GeneratorResult, Generator } from "../generator.type";
import { generate } from "./formater";
import {GeneratorsService} from "../generators.service";

@Component({
  selector: "app-generate",
  templateUrl: "./generate.component.html",
  styleUrls: ["./generate.component.scss", "../page.scss"],
})
export class GenerateComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private api: GeneratorsService
  ) {}

  rawData: Generator;
  generator: GeneratorResult;
  displayedColumns: string[] = ["table", "value", "dice"];

  async ngOnInit(): Promise<void> {
    const id = this.route.snapshot.paramMap.get("id");
    
    this.api.getGenerator(id).subscribe((generator)=> {
      this.rawData = generator;
      this.generate();
    });
    
  }

  generate(): void {
    this.generator = generate(this.rawData);
  }
}
