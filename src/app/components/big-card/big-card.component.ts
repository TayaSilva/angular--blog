import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  photoCover:string="https://c4.wallpaperflare.com/wallpaper/56/368/958/anime-lufy-one-piece-wallpaper-preview.jpg"
  @Input()
  SubTitle:string="O homem está de volta, rapaziada!!!"
  @Input()
  cardTitle:string="CAPITÃO LUFFY - CHAPÉU DE PALHA"
  @Input()
  cardDescription:string="Com seu primeiro episódio exibido no Japão em 1999, One Piece segue lançando novos episódios até hoje. Ao todo, o anime já tem mais de 1000 capítulos. Não à toa, o aclamado programa que segue as perigosas aventuras dos Piratas Chapéus de Palha ganhou o apelido de 'anime infinito'."
  @Input()
  Id:string="0"

  constructor() { }

  ngOnInit(): void {
  }

}
