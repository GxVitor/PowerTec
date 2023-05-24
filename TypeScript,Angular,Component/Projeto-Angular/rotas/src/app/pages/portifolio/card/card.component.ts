import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  // Pegando o Id no parametro
  constructor(
    private rota: ActivatedRoute,
    private navegador: Router
    ){
    this.rota.params.subscribe(
      res => console.log(res)
    )

    this.rota.firstChild?.params.subscribe(
      res => console.log(res)
    )

    // Puxando o QueryParams
    this.rota.queryParams.subscribe(
      res => console.log(res)
    )
  }
  ngOnInit(): void {
    // setInterval(() => {
    //   this.navegador.navigate(['/'])
    // }, 5000)
  }

}
