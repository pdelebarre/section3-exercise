import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('A Test recipe', 'This is simply a test', `https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg`),
    // tslint:disable-next-line:max-line-length
    new Recipe('A Test recipe', 'This is simply a test', `https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg`)
  ];

  constructor() { }

  ngOnInit() {
  }

}
