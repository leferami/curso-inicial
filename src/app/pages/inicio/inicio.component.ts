import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
nombre = 'Leonel';
apellido = 'Ramírez';
loadingVisible = false;


visualizarLoading(){
  //codigo de loading
  this.loadingVisible = true;
  setTimeout(() => {
    this.loadingVisible = false;
  }, 2000);
}

}
