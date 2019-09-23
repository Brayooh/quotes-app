import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Quoties } from '../quotes';


@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {
  @Input() quotes: Quoties;

  @Output() vote = new EventEmitter<boolean>();
  @Output() downVotes = new EventEmitter<boolean>();
  @Output() quoteDelete = new EventEmitter<boolean>();

  
  deleteQuote(complete:boolean){
    this.quoteDelete.emit(complete);
  }

  upVote(countVote:boolean){
    this.vote.emit(countVote);
  }
  downVote(countDownVote:boolean){
    this.downVotes.emit(countDownVote);
  }

  constructor() { }

  ngOnInit() {
  }

}
