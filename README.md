# -wt-js-01-galler
## Завдання 1 - галерея зображень
Створити галерею з можливістю кліку по її елементах і перегляду повнорозмірного зображення у модальному вікні. Додати закриття модального вікна після натискання клавіші Escape
[](https://2968370803-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fum9Uext4aKNHZfAw1WzJ%2Fuploads%2F7yoGN9jye9l3n827tXC7%2F%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202023-12-04%20%D0%B2%2023.47.25.png?alt=media&token=e52dfd33-1bba-4eeb-a495-b8979b3da63c)
```html
<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div>
```
## Завдання 2 - бібліотека SimpleLightbox
Зробити таку саму галерею як в першому завданні, але використовуючи бібліотеку SimpleLightbox, яка візьме на себе обробку кліків по зображеннях, відкриття і закриття модального вікна, а також гортання зображень за допомогою клавіатури.
[](https://2968370803-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fum9Uext4aKNHZfAw1WzJ%2Fuploads%2FhoYC2cox0VTKsXr4Joyo%2F%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202023-12-05%20%D0%B2%2001.23.20.png?alt=media&token=0fc19828-24dd-4e13-8a23-f8638e6411d4)
[SimpleLightbox](https://simplelightbox.com/)
```html
<a class="gallery__item" href="large-image.jpg">
  <img class="gallery__image" src="small-image.jpg" alt="Image description" />
</a>
```
