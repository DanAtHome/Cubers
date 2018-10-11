import { color } from "../enums/color";


export class card {
  name: string;
  // convertedCastingCost: number;
  // castingCost: string;
  // color: color[];
  normalImgUrl: string;

  constructor(name, normalImgUrl){
    this.name = name;
    this.normalImgUrl = normalImgUrl;
  }
}