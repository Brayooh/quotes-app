import { Component, OnInit } from '@angular/core';
import { Quoties } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes = [
    new Quoties(1,"The greatest glory in living lies not in never falling, but in rising every time we fall.","Dr. Suess","Brian",0,0,new Date(2019,0,22)), 
    new Quoties(2,"Great minds discuss ideas; average minds discuss events; small minds discuss people.","Eleanor Roosevelt","Publisher",0,0,new Date(2019,1,22)),
    
  ]

  quoteSubmission(quote){
    quote.id +=1;
    quote.actualDate = new Date(quote.actualDate);
    this.quotes.push(quote);
  }

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  deleteQuote(quoteDelete,index){
    if(quoteDelete){
      let deletion = confirm(`Are you sure you want to delete this Quote`)
      if(deletion){
        this.quotes.splice(index,1);
      }
      
    }
  }
  upVote(upVoting,index){
    if(upVoting){
      this.quotes[index].upVotes +=1;
    }
  }
  downVote(downVoting,index){
    if(downVoting){
      this.quotes[index].downVote +=1;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
