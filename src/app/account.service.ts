import { LoggingService } from "./logging.service";
import { Injectable } from "@angular/core";
//you don't add injecable to a service that you want to inject but to the service that is getting inject by another service
@Injectable()
export class AccountsService{
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
    ];

    constructor(private loggingService:LoggingService){}
    
    addAccount(name: string, status:string){
        this.accounts.push({name: name, status: status});
        this.loggingService.logStatusChange(status);
    }

    updateStatus(id:number, status: string){
        this.accounts[id].status = status;
        this.loggingService.logStatusChange(status);
    }
}