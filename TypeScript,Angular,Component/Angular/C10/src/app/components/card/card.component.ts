import { Component, OnInit } from '@angular/core';
import { pokemonData } from 'src/app/models/pokemonData';
import { PomemonService } from 'src/app/services/pomemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  pokemon: pokemonData

  constructor(
    private service:PomemonService
  ){ 
    this.pokemon = {
      id: 0,
      name:'',
      sprites:{
        front_default: ''
      },
      types:[]
    }
  }


  ngOnInit(): void {
   this.getPokemon('pikachu')
  }

  getPokemon(searchName: string){
    this.service.getPokemon(searchName.toLowerCase()).subscribe({
      next: (res) => {

        this.pokemon = {
          id: res.id,
          name: res.name,
          sprites: res.sprites,
          types: res.types
        }

        console.log(res)
        console.log(res.types)
        console.log(this.pokemon)
      },
      error: (err) => console.log(err)
    })
  }
}
