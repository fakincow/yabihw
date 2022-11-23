import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-invite-panel',
  templateUrl: './invite-panel.component.html',
  styleUrls: ['./invite-panel.component.css'],
})
export class InvitePanelComponent implements OnInit {
  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor() {}

  get title() {
    return this.form.controls.title as FormControl;
  }

  ngOnInit(): void {}

  submit() {}
}
