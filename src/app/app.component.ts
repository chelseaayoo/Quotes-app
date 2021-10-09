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
    {id:1, name:'Life hacks, try coding!'},
    {id:2, name:'Make it work.make it right and fast!'},
    {id:3, name:'Before software can be reusable it first has to be usable.'},
    {id:4, name:'Talk is cheap. Show me the code!'},
    {id:5, name:'You can turn coffee into code!'}


  ]
}