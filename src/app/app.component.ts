import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Perfil', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Configuração', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Casas De Ração', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Clínica Veterinários', url: '/folder/Archived', icon: 'archive' },
    { title: 'Armazenamento', url: '/folder/Trash', icon: 'trash' },
    { title: 'Relatório', url: '/folder/Spam', icon: 'warning' },
    { title: 'Câmera', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
