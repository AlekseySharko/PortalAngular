import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../../core/classes/authentication/user";
import {AuthenticationProviderService} from "../../../../core/services/authentication/authentication-provider.service";
import {AreYouSureDialogComponent} from "../../../../core/dialogs/are-you-sure-dialog/are-you-sure-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {
  @Input() user: User|null = null;
  constructor(private auth: AuthenticationProviderService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onLogoutClick(){
    const dialogRef = this.dialog.open(AreYouSureDialogComponent, {
      maxWidth: '24rem',
      data: {
        question: `Are you sure you want to log out?`,
        okButton: "Log out",
        cancelButton: "Cancel"
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (!result) return;
      this.auth.logOut();
    });
  }
}
