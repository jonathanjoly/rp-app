import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { GeneratorsService } from '../generators.service';

@Component({
  selector: "app-generators",
  templateUrl: "./generators.component.html",
  styleUrls: ["./generators.component.scss", "../page.scss"],
})
export class GeneratorsComponent implements OnInit {
  constructor(private router: Router,
    private api: GeneratorsService) {}

  generators = [];


  async ngOnInit(): Promise<void> { 
    this.api.getGenerators().subscribe((generator)=> {
      this.generators = generator;
    });
  }

  onSelected(item) {
    this.router.navigate(
      [`/generator/${item.id}`],
    );
  }
}
