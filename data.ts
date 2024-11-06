import {Serie} from "./serie.js";

export const series = [
    new Serie (1,"Breaking Bad","AMC", 5,"Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer" ,
    "https://www.amc.com/shows/breaking-bad","https://i.ibb.co/0hDm048/GGje0vc.jpg") ,
    
    new Serie (2,"Orange Is the New Black", "Netflix", 6, "The series begins revolving around Piper Chapman, a woman in her thirties living in New York City who is sentenced to 15 months in Litchfield Penitentiary", 
    "https://www.netflix.com/co/title/70242311","https://i.ibb.co/gvC7yx5/Ev-Ke48-G-d.webp"),
    
    new Serie (3, "Game of Thrones","HBO", 7, "American fantasy drama", "https://www.hbo.com/game-of-thrones",
      "https://i.ibb.co/n6rzmFr/TDCEV1-S-d.webp"),
      
    new Serie (4, "The Big Bang Theory", "CBS", 12, "Leonard and Sheldon are brilliant physicists—geniuses in the laboratory but socially challenged everywhere else. Enter beautiful, street-smart neighbor Penny, who aims to teach them a thing or two about life. Despite their on-again, off-again relationship in the past, Leonard and Penny have finally gotten married. Even Sheldon has found a female companion, entering into a relationship agreement with neurobiologist Amy Farrah Fowler, and he recently took their relationship to the next level by marrying her after a long courtship. In their free time, Leonard and Sheldon enjoy fantasy role-playing games with their ever-expanding universe of friends, including fellow scientists Koothrappali, Wolowitz, and Wolowitz’s adorable microbiologist wife, Bernadette, who is adjusting to life with their two children.",
        "https://www.cbs.com/shows/big_bang_theory/about/", "https://i.ibb.co/2nH76R0/u-AEp-VWk-d.webp"),
    
    new Serie (5, "Sherlock", "BBC",  4, "Sherlock depicts consulting detective Sherlock Holmes (Benedict Cumberbatch) solving various mysteries in modern-day London. Holmes is assisted by his flatmate and friend, Dr John Watson (Martin Freeman), who has returned from military service in Afghanistan with the Royal Army Medical Corps",
        "https://www.bbc.co.uk/programmes/b018ttws", "https://i.ibb.co/xDNGQ1J/02-B7qhj-d.webp"),

    new Serie (6, "A Very English Scandal", "BBC", 2, "A Very English Scandal is a fact-based three-part British television comedy-drama miniseries based on John Preston's book of the same name.",
        "https://www.bbc.co.uk/programmes/p065smy4", "https://i.ibb.co/Czm7Mny/D4y3-Dr-Q-d.webp"),
  ];
   
let seriesTable: HTMLElement = document.getElementById("series-table")!;
mostrarSeriesEnTabla(series);

let promedio: HTMLElement = document.getElementById("promedio")!;
mostrarPromedio(series);

let card: HTMLElement = document.getElementById("card")!;

function mostrarSeriesEnTabla(series: Serie[]): void {

    for(let i of series) {
        let serie = document.createElement("tr");
        serie.onclick = () => mostrarSeriesEnCard(i.id); ;
        serie.innerHTML = `<td>${i.id}</td>
                            <td><a href="#">${i.nombre}</a></td>
                            <td>${i.canalTV}</td>
                            <td>${i.temporadas}</td>`;
        seriesTable.appendChild(serie);
    } }
    
function mostrarSeriesEnCard(id: number): void {
    let serie = series[id-1];
    card.innerHTML = `<div class="card">
                        <img class="card-img-top" src="${serie.imgURL}" alt="Imagen de ${serie.nombre}">
                        <div class="card-body">
                            <h5 class="card-title">${serie.nombre}</h5>
                            <p class="card-text">${serie.descripcion}</p>
                            <a href="${serie.direcciónURL}" class="card-link">${serie.direcciónURL}</a>
                        </div>
                    </div>`;
}
   
function mostrarPromedio(series: Serie[]): void {
    let numero = 0;
    for(let i of series) {
        numero += i.temporadas;
    }
    numero = numero / series.length;
    promedio.innerHTML = `Seasons averange: ${numero}`;
}