import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      title: 'Sugar plum',
      imageUrl: 'assets/SugarPlumCookies.png',
      username: 'byron',
      content: 'Cupcake ipsum dolor sit amet ',
    },
    {
      title: 'Gingerbread',
      imageUrl: 'assets/cake.jpg',
      username: 'jolyker',
      content: 'Sesame snaps biscuit icing chocolate cheesecake.',
    },
    {
      title: 'Cake pie danish',
      imageUrl: 'assets/peach.jpg',
      username: 'crusty',
      content: 'Halvah jelly beans marzipan gummi',
    },
  ];
}
