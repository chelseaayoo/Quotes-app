import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] =[
    {id:1, name:'Life hacks, try coding!'},
    {id:2, name:'Make it work.make it right and fast!'},
    {id:3, name:'Before software can be reusable it first has to be usable.'},
    {id:4, name:'Talk is cheap. Show me the code!'},
    {id:5, name:'You can turn coffee into code!'}


  ]

  constructor() { }

  ngOnInit(): void {
  }

}
