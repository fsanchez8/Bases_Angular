import {Component} from '@angular/core'

@Component({
  selector : 'app-contador',
  template : `
    <h1>{{ title }}</h1>

    <button (click)= "acomular( base )"> + {{ base }}</button>
    <span>{{ numero }}</span>
    <button (click)= "acomular( -base )"> - {{ base }}</button>

  `
})

export class ContadorComponent{
  public title :string = 'Contador App';
  public numero:number = 10
  public base  :number = 5;

  acomular(valor: number ){
    this.numero += valor;
  }
}
