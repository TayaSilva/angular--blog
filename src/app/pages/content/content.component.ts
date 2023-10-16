import { ActivatedRoute, Routes } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input()
  photoC="https://s.aficionados.com.br/imagens/saga-east-blue_cke.jpg"
  titleC="Novidade na area"
  descriptionC="No arco cânone seguinte, Luffy, Nami, Tony Tony Chopper, Brook, e os Pekoms seguem para a ilha Whole Cake."

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      console.log(value.get("id"))
    )
  }

}
