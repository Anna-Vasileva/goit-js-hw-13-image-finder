// const KEY = '23417274 - c745cca46d265f1806e9566e8';
// q - что искать
// page=номер_страницы

// export default async function getImages({ q, key, page }) {
//   try {
//     const response = await fetch(
//       `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${q}&page=${page}&per_page=12&key=${key}`,
//     );
//     // console.log(response);
//     const images = response.json;
//     // console.log(images);
//   } catch (error) {
//     console.log('ошибочка!');
//   }
// }
export default class newsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchImages() {
    const KEY = '23417274-c745cca46d265f1806e9566e8';

    try {
      const response = await fetch(
        `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${KEY}`,
      );

      console.log(response);

      const images = response.json();
      this.incrementPage();

      console.log(images);

      return images;
    } catch (error) {
      console.log('ошибочка!');
    }
  }

  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
  resetPage() {
    this.page = 1;
  }
  incrementPage() {
    this.page += 1;
  }
}
