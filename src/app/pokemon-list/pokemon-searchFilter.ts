import { Pipe, PipeTransform } from '@angular/core';

// export class SearchPipe implements PipeTransform {
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) { return []; }
    if (!searchText) { return items; }
    searchText = searchText.toLowerCase();
    return items.filter( pokemon => {
      return pokemon.toLowerCase().includes(searchText);
    });
   }
}

// @Pipe({
//   name: 'LockFilter'
// })

// export class SearchPipe implements PipeTransform {
//   transform(value: any, args?: any): any {

//       if(!value) {return null; }
//       if(!args) {return value; }

//       args = args.toLowerCase();

//       return value.filter(
//         item =>{
//           return JSON.stringify(item.name).toLowerCase().includes(args);
//       });
//   }
// }
