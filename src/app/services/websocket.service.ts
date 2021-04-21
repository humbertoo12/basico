import { Injectable } from '@angular/core';
 
import { Socket }  from 'ngx-Socket-io';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  public socketStatus = false;
  constructor(
    private socket: Socket

  ){
    this.checkStatus();
  }
  checkStatus(){
    this.socket.on( 'connect', ()=>{
      console.log('conectando al servidor');
      this.socketStatus = true;
    });

    this.socket.on( 'connect', ()=>{
      console.log('conectando al servidor');
      this.socketStatus = false;
    });


  }
}