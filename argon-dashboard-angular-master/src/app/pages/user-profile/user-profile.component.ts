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
    birth: new Date(1995,11,17),
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

    let actualDate = new Date().toISOString().slice(0, 10);
    let initialDate = new Date(1995,11,17);
    
    if (this.user.birth.toString() > actualDate ) {
      Swal.fire({
        title: 'Warning',
        text: "Date doesn't exist",
        icon: 'warning',
        confirmButtonText: 'Ok'
      })
    } else if (this.user.fullname === "") {
      Swal.fire({
        title: 'Warning',
        text: "Field fullname can't be void",
        icon: 'warning',
        confirmButtonText: 'Ok'
      })
    }else if (this.user.birth === initialDate){
      Swal.fire({
        title: 'Warning',
        text: "Field birth can't be void",
        icon: 'warning',
        confirmButtonText: 'Ok'
      })
    }else {
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
          text: err.error.text,
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      );
    }    
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
