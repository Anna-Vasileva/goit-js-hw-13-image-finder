import './sass/main.scss';
import gallery from './template/gallery.hbs';
import newsApiService from './apiService';

const refs = {
  ulEl: document.querySelector('.gallery'),
  btnSearch: document.querySelector('.btn-search'),
  formEl: document.querySelector('.search-form'),
  btnLoadMore: document.querySelector('.btn-load'),
};
const galleryApiService = new newsApiService();

refs.formEl.addEventListener('submit', onSearch);
refs.btnLoadMore.addEventListener('click', loadMore);

function onSearch(e) {
  e.preventDefault();

  galleryApiService.searchQuery = e.currentTarget.elements.query.value;
  galleryApiService.resetPage();
  galleryApiService.fetchImages().then(images => {
    const cardImages = gallery(images.hits);
    refs.ulEl.innerHTML = cardImages;
  });

  //   data.q = e.currentTarget.elements.query.value;
  //   console.log('onSearch');

  //   getImages(data).then(images => {
  //     const cardImages = gallery(images);
  //     console.log(cardImages);

  //     refs.ulEl.innerHTML = cardImages;
  //   });
}
function loadMore(e) {
  e.preventDefault();

  galleryApiService.fetchImages().then(images => {
    const cardImages = gallery(images.hits);
    refs.ulEl.insertAdjacentHTML('beforeend', cardImages);

    refs.btnLoadMore.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
  });

  //   console.log('loadMore');

  //   getImages(data).then(images => {
  //     const cardImages = gallery(images);
  //     console.log(cardImages);

  //     refs.ulEl.innerHTML = cardImages;
  //   });
}

// const element = document.getElementById('.my-element-selector');
