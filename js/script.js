/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';
document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    movieDB.movies.sort();
    // console.log(movieDB.movies);

    let adv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector(".promo__bg"),
        genre = poster.querySelector('.promo__genre'),
        movieList = document.querySelector(".promo__interactive-list"),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = document.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, movieList);
        }

        event.target.reset();
        // if ()

    });

    //1_____________________________________________remove advartisment
    // advartisment[0, 1, 2].remove(); // it will not work because it it psevdomassive 

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    const movieChanges = () => {
        genre.textContent = 'ДРАММА';

        poster.style.backgroundImage = "url('../img/bg.jpg')"; // '"" - different

    };

    const sortArr = (arr) => {
        arr.sort();
    };


    function createMovieList(films, parent) {

        parent.innerHTML = '';

        films.forEach((film, i) => {
            parent.innerHTML += `<li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
            </li>`;
        });
    }
    deleteAdv(adv);
    createMovieList(movieDB.movies, movieList);
    movieChanges();
    sortArr(movieDB.movies);

    var textUser = document.createElement("INPUT");
    textUser.setAttribute("type", "text");
});