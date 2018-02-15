import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
  public titulo: string;
  constructor() { }

  ngOnInit() {
    this.titulo = 'componente painel';
  }

}
