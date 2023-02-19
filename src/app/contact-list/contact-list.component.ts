import { Component } from '@angular/core';

import { Contact } from './contact.module';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.sass'],
})
export class ContactListComponent {
  contacts: Contact[] = [
    new Contact('This is a test contact', 'This is a test description'),
    new Contact('This is a test contact 2', 'This is a test description 2'),
    new Contact('This is a test contact 3', 'This is a test description 3'),
  ];
}
