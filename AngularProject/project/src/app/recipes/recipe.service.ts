import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Bacon Burger',
      'A burger with bacon on it',
      'https://i3.wp.com/lmld.org/wp-content/uploads/2015/01/Western-Bacon-Cheeseburger-10.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Bacon', 4),
        new Ingredient('Patty', 1),
      ]
    ),
    new Recipe(
      'Regular Burger',
      'This is a regular burger, no bacon on it',
      'https://www.simplyrecipes.com/thmb/5NbY2LUh2dvE3WzON6SZSLfjVG8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Burger-On-Stovetop-LEAD-05-3c6cfb02ce7f492bb3f0bf847fc36460.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Patty', 1),
        new Ingredient('Ketchup', 5),
      ]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
