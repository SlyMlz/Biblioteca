import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Crud } from 'src/app/interfaces/crud';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  agregaUsu: FormGroup;

  constructor(private fb: FormBuilder) {
    this.agregaUsu = this.fb.group({
      nom :['',Validators.required],
      ced :['',Validators.required],
      corre :['',Validators.required],
      tel :['',Validators.required],
      dir :['',Validators.required],
      fech: ['',Validators.required]
    })
   }

  ngOnInit(): void {
  }
  agregar(){
    console.log(this.agregaUsu);
    const crud:Crud={
      nom: this.agregaUsu.get('nom')?.value,
      ced: this.agregaUsu.get('ced')?.value,
      corre: this.agregaUsu.get('corre')?.value,
      tel: this.agregaUsu.get('tel')?.value,
      dir: this.agregaUsu.get('dir')?.value,
      fech: this.agregaUsu.get('fech')?.value,
    }
    console.log(crud);
  }
}
