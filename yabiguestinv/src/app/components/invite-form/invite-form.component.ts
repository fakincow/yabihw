import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ModalService} from "../../services/modal.service";
import { InviteService } from 'src/app/services/invite.service';

@Component({
  selector: 'app-invite-form',
  templateUrl: './invite-form.component.html',
  styleUrls: ['./invite-form.component.css']
})
export class InviteFormComponent implements OnInit {
  closeInvPanel(){
    console.log('closeInvPanel');
  }
  form = new FormGroup({
    name: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6)
    ]),
    phone: new FormControl<string>('0548390923', [
      Validators.required,
      Validators.minLength(6)
    ]),
    email: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6)
    ])
  })

  constructor(private inviteService: InviteService,
  ) {
  }

  get name() {
    return this.form.controls.name as FormControl
  }
  get phone() {
    return this.form.controls.phone as FormControl
  }
  get email() {
    return this.form.controls.email as FormControl
  }

  ngOnInit(): void {
  }

  create() {
    this.inviteService.invite({
      name: this.form.value.name as string,
      phone:this.form.value.phone as string,
      email: this.form.value.email as string,
    }).subscribe(() => {
      console.log('this form');
      }
    )
  }

}
