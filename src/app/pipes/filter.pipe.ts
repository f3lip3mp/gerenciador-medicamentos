import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(medicamentos: any[], searchText: string): any[] {
    if (!medicamentos || !searchText) {
      return medicamentos;
    }
    return medicamentos.filter(m => m.nome.toLowerCase().includes(searchText.toLowerCase()));
  }
  

}
