import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConversionService {

  constructor() {
  }

  convertBookNameToPath(name: string) {
    return name.toLowerCase().replaceAll(" ", "-");
  }
}
