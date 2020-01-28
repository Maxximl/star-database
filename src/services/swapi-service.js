export default class SwapiService {

  _apiBase = 'https://swapi.co/api';
  _baseImgUrl = 'https://starwars-visualguide.com/assets/img/';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json();
  }

 getImagePeople = (id) => {
   return `${this._baseImgUrl}characters/${id}.jpg`;
 }

 getImageStarship = (id) => {
  return `${this._baseImgUrl}starships/${id}.jpg`;
}

getImagePlanet = (id) => {
  return `${this._baseImgUrl}planets/${id}.jpg`;
}

  getAllPeople = async () => {
    const res = await this.getResource(`/people/`);
    return res.results.map(this._transformPerson);
  }

  getPerson = async (id) => {
    const person = await this.getResource(`/people/${id}/`);
    return this._transformPerson(person);
  }

  extractId(item) {
    const idRegexp = /\/([0-9]*)\/$/;
    return item.url.match(idRegexp)[1];
  }

  _transformPlanet = (planet) => {

    return {
          id: this.extractId(planet),
          name: planet.name,
          population: planet.population,
          rotationPeriod: planet.rotation_period,
          diameter: planet.diameter
        }
  }

  _transformPerson = (person) => {

    return {
          id: this.extractId(person),
          name: person.name,
          gender: person.gender,
          birthYear: person.birth_year,
          eyeColor: person.eye_color
        }
  }

  _transformStarShip = (starship) => {

   return {
          id: this.extractId(starship),
          name: starship.name,
          model: starship.model,
          manufacturer: starship.manufacturer,
          costInCredits: starship.costInCredits,
          length: starship.length,
          crew: starship.crew,
          passengers: starship.passengers,
          cargoCapacity: starship.cargoCapacity
        }
  }

  getAllPlanets = async () => {
    const res = await this.getResource(`/planets/`);
    return res.results.map(this._transformPlanet);
  }

  getPlanet = async (id) => {
    const planet = await this.getResource(`/planets/${id}/`);
    return this._transformPlanet(planet);
  }

  getAllStarships = async () => {
    const res = await this.getResource(`/starships/`);
    return res.results.map(this._transformStarShip)
  }

  getStarship = async (id) => {
    const starhip = await this.getResource(`/starships/${id}/`);
    return this._transformStarShip(starhip);
  }
}
