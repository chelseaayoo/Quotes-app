import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  [x: string]: any;
  @Input()
  quote!: Quote;
  @Output() isComplete = new EventEmitter<boolean>();
  quoteComplete(complete:boolean){
    this.isComplete.emit(complete);
  }
  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  likes : number = 0;
  dislikes: number = 0;
  likeBtnClick() {
    this.likes++;
  }
  dislikeBtnClick(){
    this.dislikes++;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
