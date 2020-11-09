import { Component, OnInit } from '@angular/core';
import { Quiz } from 'model.quiz';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quiz:Quiz[] = [];
  qNo:number=0;
  flag:number=1;
  answers:string[]= [];
  score:number;
  constructor(private quizSer:QuizService) { }

  ngOnInit(): void {
    this.loadQuiz();
  }

  startQuiz():void{
    this.flag = 2;
  }

  loadQuiz():void{
    this.quizSer.loadQuizDetails().subscribe(data=>this.quiz=data, error=>console.log(error));
    this.answers.length=this.quiz.length;
  }

  loadQuestion(idx):void{
    this.flag=2;
    this.qNo=idx;
  }
  loadNext():void{
    this.loadQuestion(this.qNo+1)
  }
  loadPrev():void{
    this.loadQuestion(this.qNo-1)
  }

  selectAns(ans:string):void{
    console.log("You have submitted an answer");
    this.answers[this.qNo] = ans;
  }

  reviewQuiz():void{
    this.flag=3;
    for(let x of this.answers){
      console.log(x);
    }
  }

  scoreQuiz():void{
    let correct:number = 0;
    for(let idx in this.quiz){
      if(this.quiz[idx].ans==this.answers[idx]){
        correct++;
      };
    }
    this.score=correct/this.quiz.length;
    this.flag=4;
  }
}
