import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] =[
    new Quote(1, 'Life hacks, try coding!', 'Author: Developer Anipher Chelsea'),
    new Quote(2, 'Make it work.make it right and fast!' , 'Author: Kent Beck'),
    new Quote(3, 'Before software can be reusable it first has to be usable.', 'Author: Ralph Johnson'),
    new Quote(4, 'Talk is cheap. Show me the code!' , 'Author: Austin Freeman'),
    new Quote(5, 'You can turn coffee into code!', 'Author: Martin Fawler'),
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


  constructor() { }

  ngOnInit(): void {
  }

}
