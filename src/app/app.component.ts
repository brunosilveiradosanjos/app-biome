import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { ButtonComponentLib } from 'lib-turbo-components-scd'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponentLib],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app-biome'
}
