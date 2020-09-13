import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import axios from "axios";

@Component({
  selector: "app-tables",
  templateUrl: "./tables.component.html",
  styleUrls: ["./tables.component.scss", "../page.scss"],
})
export class TablesComponent implements OnInit {
  constructor(private router: Router) {}

  tables = [];

  async ngOnInit(): Promise<void> {
    const res = await axios.get("http://localhost:4000/tables");
    this.tables = res.data;
  }

  onSelected(item) {
    this.router.navigate(
      [`/table/${item.id}`],
    );
  }
}
