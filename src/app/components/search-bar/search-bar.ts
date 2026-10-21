import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Auto } from '../../intefaces/auto';

@Component({
  selector: 'app-search-bar',
  imports: [FontAwesomeModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css'
})
export class SearchBar {
  faMagnifyingGlass = faMagnifyingGlass;

  @Input() autos: Auto[] = [];
  @Output() filtered = new EventEmitter<Auto[]>();

  selectAutos(selectedBrand: string) {
    const search = selectedBrand.trim().toLowerCase();
    const result = search
      ? this.autos.filter(x => x.brand.toLowerCase().startsWith(search))
      : this.autos;
    this.filtered.emit(result);
  }
}