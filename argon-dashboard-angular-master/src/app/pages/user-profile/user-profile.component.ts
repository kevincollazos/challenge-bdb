import { Component, OnInit } from '@angular/core';

import { UsuariosService } from '../../services/usuarios.service'
import { User } from 'src/app/models/user'
import { Router, ActivatedRoute } from '@angular/router'

import Swal from 'sweetalert2'


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  user: User ={

    id: 0,
    fullname:"",
    birth: new Date(),

  }

  edit: boolean = false

  constructor(private userService: UsuariosService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() { 
    const params = this.activeRoute.snapshot.params;
    if(params.id){
      this.userService.getUser(params.id).subscribe(
        res =>{
          this.user = res;
          this.edit= true
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

  savedUser(){
    delete this.user.id

    this.userService.saveUser(this.user).subscribe(
      res => {
        Swal.fire({
          title: 'Success',
          text: "User created!",
          icon: 'success',
          confirmButtonText: 'Ok'
        })
        this.router.navigate(["/tables"])
      },

      err => 
      Swal.fire({
        title: 'Error!',
        text: err,
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    );
  }

  updateUser(){

    this.userService.updateUser(this.user.id, this.user).subscribe(
      res => {
        Swal.fire({
          title: 'Success',
          text: "User saved!",
          icon: 'success',
          confirmButtonText: 'Ok'
        })
        this.router.navigate(["/tables"])
      },
      err => 
      Swal.fire({
        title: 'Error!',
        text: err,
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    );
  }

}
