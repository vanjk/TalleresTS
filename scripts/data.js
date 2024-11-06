import { Serie } from "./serie.js";
export var series = [
    new Serie(1, "Breaking Bad", "AMC", 5, "Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer", "https://www.amc.com/shows/breaking-bad", "https://i.ibb.co/0hDm048/GGje0vc.jpg"),
    new Serie(2, "Orange Is the New Black", "Netflix", 6, "The series begins revolving around Piper Chapman, a woman in her thirties living in New York City who is sentenced to 15 months in Litchfield Penitentiary", "https://www.netflix.com/co/title/70242311", "https://i.ibb.co/gvC7yx5/Ev-Ke48-G-d.webp"),
    new Serie(3, "Game of Thrones", "HBO", 7, "American fantasy drama", "https://www.hbo.com/game-of-thrones", "https://i.ibb.co/n6rzmFr/TDCEV1-S-d.webp"),
    new Serie(4, "The Big Bang Theory", "CBS", 12, "Leonard and Sheldon are brilliant physicists—geniuses in the laboratory but socially challenged everywhere else. Enter beautiful, street-smart neighbor Penny, who aims to teach them a thing or two about life. Despite their on-again, off-again relationship in the past, Leonard and Penny have finally gotten married. Even Sheldon has found a female companion, entering into a relationship agreement with neurobiologist Amy Farrah Fowler, and he recently took their relationship to the next level by marrying her after a long courtship. In their free time, Leonard and Sheldon enjoy fantasy role-playing games with their ever-expanding universe of friends, including fellow scientists Koothrappali, Wolowitz, and Wolowitz’s adorable microbiologist wife, Bernadette, who is adjusting to life with their two children.", "https://www.cbs.com/shows/big_bang_theory/about/", "https://i.ibb.co/2nH76R0/u-AEp-VWk-d.webp"),
    new Serie(5, "Sherlock", "BBC", 4, "Sherlock depicts consulting detective Sherlock Holmes (Benedict Cumberbatch) solving various mysteries in modern-day London. Holmes is assisted by his flatmate and friend, Dr John Watson (Martin Freeman), who has returned from military service in Afghanistan with the Royal Army Medical Corps", "https://www.bbc.co.uk/programmes/b018ttws", "https://i.ibb.co/xDNGQ1J/02-B7qhj-d.webp"),
    new Serie(6, "A Very English Scandal", "BBC", 2, "A Very English Scandal is a fact-based three-part British television comedy-drama miniseries based on John Preston's book of the same name.", "https://www.bbc.co.uk/programmes/p065smy4", "https://i.ibb.co/Czm7Mny/D4y3-Dr-Q-d.webp"),
];
var seriesTable = document.getElementById("series-table");
mostrarSeriesEnTabla(series);
var promedio = document.getElementById("promedio");
mostrarPromedio(series);
var card = document.getElementById("card");
function mostrarSeriesEnTabla(series) {
    var _loop_1 = function (i) {
        var serie = document.createElement("tr");
        serie.onclick = function () { return mostrarSeriesEnCard(i.id); };
        ;
        serie.innerHTML = "<td>".concat(i.id, "</td>\n                            <td><a href=\"#\">").concat(i.nombre, "</a></td>\n                            <td>").concat(i.canalTV, "</td>\n                            <td>").concat(i.temporadas, "</td>");
        seriesTable.appendChild(serie);
    };
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var i = series_1[_i];
        _loop_1(i);
    }
}
function mostrarSeriesEnCard(id) {
    var serie = series[id - 1];
    card.innerHTML = "<div class=\"card\">\n                        <img class=\"card-img-top\" src=\"".concat(serie.imgURL, "\" alt=\"Imagen de ").concat(serie.nombre, "\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">").concat(serie.nombre, "</h5>\n                            <p class=\"card-text\">").concat(serie.descripcion, "</p>\n                            <a href=\"").concat(serie.direcciónURL, "\" class=\"card-link\">").concat(serie.direcciónURL, "</a>\n                        </div>\n                    </div>");
}
function mostrarPromedio(series) {
    var numero = 0;
    for (var _i = 0, series_2 = series; _i < series_2.length; _i++) {
        var i = series_2[_i];
        numero += i.temporadas;
    }
    numero = numero / series.length;
    promedio.innerHTML = "Seasons averange: ".concat(numero);
}
