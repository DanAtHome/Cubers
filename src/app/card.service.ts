import { Injectable } from '@angular/core';
import { card } from './model/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }

  getCards() : card[] {

    var card1 = new card("Living Death", "https://img.scryfall.com/cards/normal/en/cm2/68.jpg?1534111243");
    var card2 = new card("Allied Reinforcements", "https://img.scryfall.com/cards/normal/en/ogw/15.jpg?1517813031");
    var card3 = new card("Ghalta, Primal Hunger", "https://img.scryfall.com/cards/normal/en/rix/130.jpg?1524751787");

    return [card1,card2,card3];
  }
}
