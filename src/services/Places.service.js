import { placesData } from '../data/filtered_es';

export class PlacesService {
  static getPlacesData() {
    return Promise.resolve(placesData);
  }
}