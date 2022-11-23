import {Component, OnInit } from '@angular/core';
import { InviteService } from 'src/app/services/invite.service';
import { IGuest } from '../../models/guest';
import { Observable, tap, of } from 'rxjs';
@Component({
  selector: 'dashboard-about-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})

export class DashboardComponent implements OnInit {

  public showInvitePanel: boolean = false;
  guests: IGuest[] = [];
  loading = false;
  constructor(public inviteService: InviteService) {
  }
  openInvPanel(){

    this.showInvitePanel = true;
  }
  closeInvPanel(){
    this.showInvitePanel = false;
  }

  ngOnInit(): void {
    console.log('make request on start');
    this.inviteService.getAll().subscribe(res => {
    this.guests = this.inviteService.guests;
   
    });
  }
}
