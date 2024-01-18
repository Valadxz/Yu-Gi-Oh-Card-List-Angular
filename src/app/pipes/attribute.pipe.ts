import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'attributeImage'
})
export class AtributteImagePipe implements PipeTransform {

  attribute = [
    { id: 'DARK', name: '../../../assets/atributos/DARK.png'},
    { id: 'DIVINE', name: '../../../assets/atributos/DIVINE.png'},
    { id: 'EARTH', name: '../../../assets/atributos/EARTH.png'},
    { id: 'FIRE', name: '../../../assets/atributos/FIRE.png'},
    { id: 'LIGHT', name: '../../../assets/atributos/LIGHT.png'},
    { id: 'WATER', name: '../../../assets/atributos/WATER.png'},
    { id: 'WIND', name: '../../../assets/atributos/WIND.png'},
  ];

  transform(value: string): string {
    const attribute = this.attribute.find( m => m.id === value);
    return attribute?.name || '';
  }

}
