import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  [x: string]: any;
  quotes:Quote[] =[
    new Quote(1, 'Life hacks, try coding!', 'Developer Anipher Chelsea','Brenda Maive', new Date(2019,6,28) ),
    new Quote(2, 'Make it work. Make it right and fast!' , 'Kent Beck','Derick Euphilus', new Date (1978,12,1)),
    new Quote(3, 'Before software can be reusable it first has to be usable.', 'Ralph Johnson','Macreen Joy', new Date(1994,5,14)),
    new Quote(4, 'Talk is cheap. Show me the code!' , 'Austin Freeman','Beverly Kind', new Date (1985,9,27)),
    new Quote(5, 'You can turn coffee into code!', 'Martin Fawler','Mercy Victoria', new Date (2001,4,19)),
    


  ]
}