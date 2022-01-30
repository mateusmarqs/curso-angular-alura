import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  photos = [
    {
      url: 'https://fotos.jornaldocarro.estadao.com.br/uploads/2018/08/30062752/nacar-yamaha-yz-450f-1160x654.jpg',
      description: 'YZ 450'
    },
    {
      url: 'https://content2.kawasaki.com/ContentStorage/KMB/ProductTrimGroup/56/05c5d360-bf14-4387-bb65-04ef47cff1fd.jpg?w=750',
      description: 'KX 250'
    },
    {
      url: 'https://fotos.jornaldocarro.estadao.com.br/uploads/2018/08/30062752/nacar-yamaha-yz-450f-1160x654.jpg',
      description: 'YZ 450'
    }
  ]
}
