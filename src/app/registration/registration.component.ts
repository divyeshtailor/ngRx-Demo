import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FormControl } from '@angular/forms';
import { Router } from "@angular/router";
import { AppUserFacade } from "../+state/app.facade";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit, OnChanges {
  @Output() sendUserList = new EventEmitter();
  @Input()  updateRecord: any;


  regForm = this.fb.group({
    userName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    address: this.fb.array([])
  });


  constructor( private router: Router, private facade: AppUserFacade, private fb: FormBuilder) { }

  ngOnInit(): void {
    if(!this.updateRecord) this.addAddress()
  }

  ngOnChanges() {
    this.regForm.patchValue({
      userName: this.updateRecord?.element?.userName,
      email: this.updateRecord?.element?.email,
    });
    this.address.controls = [];
    this.updateRecord?.element?.address.map((d: any) => {
      this.address.push(this.fb.group({
        city : d.city,
        state  : d.state,
        pin : d.pin,
      }));
    });
  }

  onSubmit() {
    if (this.regForm.valid){
      this.facade.addData(this.regForm.value);
      this.sendUserList.emit(true)
    } else {
      window.alert('Required Email')
    }
  }

  get address() : FormArray {
    return this.regForm.get("address") as FormArray
  }

  private newAddress(): FormGroup {
    return this.fb.group({
      city: [""],
      state: [""],
      pin: [""],
    });
  }

  addAddress() {
    this.address.push(this.newAddress());
  }

  removeAddress(i:number) {
    this.address.removeAt(i);
  }

  update() {
    this.facade.updateRecord({index : this.updateRecord.i, updatedData : this.regForm.value});
    this.sendUserList.emit(true)
  }
}
