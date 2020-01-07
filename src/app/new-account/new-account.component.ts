import { Component, EventEmitter, Output } from '@angular/core';
import{ LoggingService} from '../logging.service'
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
    //This works but is wrong on how to use a service in angular
    const service = new LoggingService();
    service.logStatusChange(accountStatus);
  }
}
