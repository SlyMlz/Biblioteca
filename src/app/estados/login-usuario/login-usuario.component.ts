import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Logusu } from 'src/app/interfaces/logusu';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.css']
})
export class LoginUsuarioComponent implements OnInit {

  login: FormGroup;

  constructor(private fb: FormBuilder) {
    this.login = this.fb.group({
      namelog :['',Validators.required],
      pass :['',Validators.required]
    })
   }


  ngOnInit(): void {
  }

  agregar(){
    console.log(this.login);
    const logusu:Logusu={
      namelog: this.login.get('namelog')?.value,
      pass: this.login.get('pass')?.value,
    }
    console.log(logusu);
  }

}
