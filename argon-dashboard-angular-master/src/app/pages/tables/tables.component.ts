import { Component, OnInit } from '@angular/core';

import { UsuariosService } from '../../services/usuarios.service';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  users: any = [];

  constructor( private usuariosService:UsuariosService ) { }

  ngOnInit() {
    
      this.getUser();
  }

  getUser(){
    this.usuariosService.getUsers().subscribe(
      res => {
        this.users = res;
      },
      err => console.error(err)
    )
  }
  
  deleteUser(id: string){
    this.usuariosService.deleteUser(id).subscribe(
      res =>{
        Swal.fire({
          title: 'Success',
          text: "User eliminated!",
          icon: 'success',
          confirmButtonText: 'Ok'
        })
        this.getUser();
      },
      err => 
      Swal.fire({
        title: 'Error!',
        text: err,
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    )
  }

}
