import { Component, OnInit } from '@angular/core';
import quizz_questions from "../../../assets/data/quizz_questions.json"
@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})

export class QuizzComponent implements OnInit{

  title: string = "";

  questions: any
  questionSelect: any

  answers: string[] = []
  answersSelected: string = ""

  questionIndex: number = 0;
  questionMaxIndex: number = 0;

  finaished: boolean = false

  constructor(){}

  ngOnInit(): void {
    if(quizz_questions){
      this.finaished = false
      this.title = quizz_questions.title

      this.questions = quizz_questions.questions
      this.questionSelect = this.questions[this.questionIndex]

      this.questionIndex = 0
      this.questionMaxIndex = this.questions.length
    }

  }

  playerChoose(value:string){
    this.answers.push(value)
    this.nextStep()
  }

  async nextStep(){
    this.questionIndex += 1

    if(this.questionMaxIndex > this.questionIndex){
        this.questionSelect = this.questions[this.questionIndex]
    }else{
      const finakAnswer: string = await this.checkResult(this.answers)
      this.finaished = true
      // verificar as respostas
      this.answersSelected = quizz_questions.results[finakAnswer as keyof typeof quizz_questions.results]
    }
  }

  async checkResult(answers:string[]){
    const result = answers.reduce((previos, current,i, arr) => {
      if(
        arr.filter(item => item === previos).length > 
        arr.filter(item => item === current).length
      ){
        return previos
      }else{
        return current
      }
    })
    return result
  }

}
