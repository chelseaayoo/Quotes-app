import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] =[
    new Quote(1, 'Life hacks, try coding!', 'Author: Developer Anipher Chelsea', new Date(2019,6,28)),
    new Quote(2, 'Make it work.make it right and fast!' , 'Author: Kent Beck', new Date (1978,12,1)),
    new Quote(3, 'Before software can be reusable it first has to be usable.', 'Author: Ralph Johnson', new Date(1994,5,14)),
    new Quote(4, 'Talk is cheap. Show me the code!' , 'Author: Austin Freeman', new Date (1985,9,27)),
    new Quote(5, 'You can turn coffee into code!', 'Author: Martin Fawler', new Date (2001,4,19)),
  ];
  toggleDetails(index: any){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }
  completeQuote(isComplete: any, index: number,){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }
  deleteQuote(isComplete: any, index: number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  addNewQuote(quote:any){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.inventionDate = new Date(quote.inventionDate)
    this.quotes.push(quote)
  }


  constructor() { }

  ngOnInit(): void {
  }

}
