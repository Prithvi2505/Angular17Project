import { Component, Input } from '@angular/core';
import { Movie } from '../../type/movie';
import { imageBaseUrl } from '../../type/image_size';

@Component({
  selector: 'app-show-item',
  standalone: false,
  templateUrl: './show-item.component.html',
  styleUrl: './show-item.component.css'
})
export class ShowItemComponent {
  @Input() showItem : Movie | null = null ; 
  baseUrl = imageBaseUrl;
}
