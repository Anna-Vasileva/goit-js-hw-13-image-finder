import './sass/main.scss';
import gallery from './template/gallery.hbs';
import newsApiService from './apiService';
import loadMoreBtn from './btn-load-more';

const galleryApiService = new newsApiService();
const btnLoadMore = new loadMoreBtn();

const refs = {
  ulEl: document.querySelector('.gallery'),
  btnSearch: document.querySelector('.btn-search'),
  formEl: document.querySelector('.search-form'),
  btnLoadMore: btnLoadMore.button,
};

refs.formEl.addEventListener('submit', onSearch);
refs.btnLoadMore.addEventListener('click', loadMore);

function onSearch(e) {
  e.preventDefault();

  galleryApiService.searchQuery = e.currentTarget.elements.query.value;

  galleryApiService.resetPage();
  galleryApiService.fetchImages().then(images => {
    //когда массив пустой возвращается
    if (images.hits.length === 0) {
      refs.ulEl.innerHTML = '';
      //   galleryApiService.resetPage();
      btnLoadMore.hide();
      return;
    }
    //
    const cardImages = gallery(images.hits);
    refs.ulEl.innerHTML = cardImages;
    btnLoadMore.show();
  });
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
}
