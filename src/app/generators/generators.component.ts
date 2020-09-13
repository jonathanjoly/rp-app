import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import axios from "axios";

@Component({
  selector: "app-generators",
  templateUrl: "./generators.component.html",
  styleUrls: ["./generators.component.scss", "../page.scss"],
})
export class GeneratorsComponent implements OnInit {
  constructor(private router: Router) {}

  generators = [];

  async ngOnInit(): Promise<void> {
    const res = await axios.get("http://localhost:4000/generators");
    this.generators = res.data;
  }

  onSelected(item) {
    this.router.navigate(
      [`/generator/${item.id}`],
    );
  }
}
