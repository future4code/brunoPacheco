import { Dish } from "./dish";

export class SaltyDish extends Dish {
  constructor(
    price: number,
    cost: number,
    ingredients: string[],
    timeToCook: number
  ) {
    super(price, cost, ingredients, timeToCook);
  }

  public cook(): void {
    console.log("Starting Salty Dish")
  }
}

export const feijoada = new SaltyDish(100, 20, ["feijão","linguiça","bacon"], 100);
// console.log(feijoada.getProfit());

export const arroz = new SaltyDish(15,5,["arroz","óleo","cebola","alho","água"],1);
// console.log(arroz.getProfit());