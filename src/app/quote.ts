export class Quote {
    showAuthor: boolean;
  constructor(public id: number,public name: string,public author: string,public publisher: string, public inventionDate:Date,){
    this.showAuthor=false;
}
}
