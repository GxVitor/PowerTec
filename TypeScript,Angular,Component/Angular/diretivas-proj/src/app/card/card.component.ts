import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  produtos: string[] = []
  novoItem: string = ""
  menuType: string = "superusersdsd"

  constructor(){
    this.produtos = [
      "mause",
      "teclado",
      "cabo",
      "font",
    ]
  }

  adicionar(){
    this.produtos.push(this.novoItem)
  }

  remover(index: number){
    if(window.confirm(`Quer Remover o Item ${index}`)){
      this.produtos.splice(index,1)
    }else{
      alert("Nada foi Alterado")
    }
  }

  ngOnInit(): void {
  }

}
