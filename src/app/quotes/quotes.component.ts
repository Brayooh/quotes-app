import { Component, OnInit } from '@angular/core';
import { Quoties } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes = [
     new Quoties(1,"The greatest glory in living lies not in never falling, but in rising every time we fall."," -Nelson Mandela"," Brian",0,0,new Date(2019,0,22)), 
     new Quoties(2,"Great minds discuss ideas; average minds discuss events; small minds discuss people."," -Eleanor Roosevelt"," Publisher",0,0,new Date(2019,7,22)),
     new Quoties(3,"Your time is limited, so don't waste it living someone else's life or with the results of other people's thinking."," -Steve Jobs"," Publisher",0,0,new Date(2019,8,29)),
     new Quoties(4,"Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.","Mark Twain"," Brayooh",0,0,new Date(2016,10,22)),
     new Quoties(5,"I’m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can’t handle me at my worst, then you sure as hell don’t deserve me at my best."," -Marilyn Monroe"," Publisher",0,0,new Date(2019,1,22)),
     new Quoties(6,"The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself."," -Mark Caine"," Publisher",0,0,new Date(2019,6,24)),

    
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
