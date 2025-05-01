import { Component, Input } from '@angular/core';
import { Movie } from '../../type/movie';

@Component({
  selector: 'app-banner',
  standalone: false,
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent  {
  @Input() shows:Movie[] = [];
  @Input() title ='';
}
