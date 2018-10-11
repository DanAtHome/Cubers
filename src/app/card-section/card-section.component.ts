import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';
import { card } from '../model/card';

@Component({
  selector: 'app-card-section',
  templateUrl: './card-section.component.html',
  styleUrls: ['./card-section.component.scss']
})
export class CardSectionComponent implements OnInit {

  cards : card[];
  displayEdit: boolean = false;
  selectedCard: card = {name:"", normalImgUrl:""};

  constructor(public _cardService:CardService) { }

  ngOnInit() {
    this.cards = this._cardService.getCards();
  }

  editcard(card){
    this.selectedCard = card;
    this.displayEdit = true;
  }
}
