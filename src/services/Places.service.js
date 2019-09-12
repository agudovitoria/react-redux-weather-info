import { placesData } from '../data/filtered_es';

export class PlacesService {
  static getPlacesData() {
    const data = placesData;
    return Promise.resolve({ data });
  }
}