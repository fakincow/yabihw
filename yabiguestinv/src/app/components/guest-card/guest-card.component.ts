import {Component,Input, OnInit } from '@angular/core';
import { IGuest } from '../../models/guest';
import { InviteService } from 'src/app/services/invite.service';
@Component({
  selector: 'app-guest-card',
  templateUrl: './guest-card.component.html',
  styleUrls: ['./guest-card.component.css']
})

export class GuestCardComponent implements OnInit {
  @Input() guest:IGuest

  constructor(private inviteService: InviteService) {
  }
  
  onDelete(){
    this.inviteService.delete(this.guest.id).subscribe(() => {
      console.log('delete id', this.guest.id);
      }
    )
  }
  onEdit(){
    console.log('on edit');
  }
  ngOnInit(): void {
  }


}
