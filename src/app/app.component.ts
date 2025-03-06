import { Component } from '@angular/core'
import { ButtonComponentLib } from 'lib-turbo-components-scd'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonComponentLib],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app-biome'
}
