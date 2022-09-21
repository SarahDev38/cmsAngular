import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {CategoryModel} from "../../../shared/models/category.model";
import {CategoryService} from "../../../shared/services/category.service";
import {ActivatedRoute} from "@angular/router";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  constructor() {
   }

  ngOnInit(): void {
  }

}
