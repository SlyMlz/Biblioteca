import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Registrar } from 'src/app/interfaces/registrarlibro';

@Component({
  selector: 'app-registro-libro',
  templateUrl: './registro-libro.component.html',
  styleUrls: ['./registro-libro.component.css']
})
export class RegistroLibroComponent implements OnInit {

  reglibro: FormGroup;

  constructor(private fb: FormBuilder) {
    this.reglibro = this.fb.group({
      isbn :['',Validators.required],
      tipo :['',Validators.required],
      tit :['',Validators.required],
      autor :['',Validators.required],
      num :['',Validators.required],
      fech: ['',Validators.required]
    })
   }

  ngOnInit(): void {
  }

  agregar(){
    console.log(this.reglibro);
    const registrarlibro:Registrar={
      isbn: this.reglibro.get('isbn')?.value,
      tipo: this.reglibro.get('tipo')?.value,
      tit: this.reglibro.get('tit')?.value,
      autor: this.reglibro.get('autor')?.value,
      num: this.reglibro.get('num')?.value,
      fech: this.reglibro.get('fech')?.value,
    }
    console.log(registrarlibro);
  }
}
