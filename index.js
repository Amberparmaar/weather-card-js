//////Weather Card //////

let weather = prompt(`What is the weather today?
    1- Sunny
    2- Rainy
    3- Snowy
    4- Windy
    5- Foggy
    6- Cloudy
    7- Stormy
    8- Hail
`).toLowerCase();

if (weather === "sunny" || weather === "1") {
  document.writeln(`<div class="container-xxl d-flex justify-content-center align-items-center card-wrap bg-sunny">
        <div class="card rounded-4"
            style="width: 16rem; height: 22rem; background: linear-gradient(135deg, #1B1E2D 0%, #141728 50%, #0F1220 100%);">
            <div class="card-body  text-center">
                <i class="fa-regular fa-sun icon-size icon-sun"></i>
                <h5 class="card-title text-linear border-bottom border-2 border-info-subtle py-3 text-start mt-5">
                    Karachi, Pakistan</h5>
                <p class="card-text fs-1 text-secondary">22<sup>0</sup></p>
                <p class="card-text text-secondary">July 21 <sup>st</sup></p>
            </div>
        </div>
    </div>`);
} else if (weather === "rainy" || weather === "2") {
  document.writeln(`<div class="container-xxl d-flex justify-content-center align-items-center card-wrap bg-rainy">
        <div class="card rounded-4"
            style="width: 16rem; height: 22rem; background: linear-gradient(135deg, #1B1E2D 0%, #141728 50%, #0F1220 100%);">
            <div class="card-body  text-center">
                <i class="fa-solid fa-cloud-showers-heavy icon-size icon-cloud animate__animated  animate__lightSpeedInRight  animate__delay-1s animate__slower"></i>
                <h5 class="card-title text-linear border-bottom border-2 border-info-subtle py-3 text-start mt-5">
                    Queeta, Pakistan</h5>
                <p class="card-text fs-1 text-secondary">-2<sup>0</sup></p>
                <p class="card-text text-secondary">July 21 <sup>st</sup></p>
            </div>
        </div>
    </div>`);
} else if (weather === "snowy" || weather === "3") {
  document.writeln(`<div class="container-xxl d-flex justify-content-center align-items-center card-wrap bg-snowy">
        <div class="card rounded-4"
            style="width: 16rem; height: 24rem; background: linear-gradient(135deg, #1B1E2D 0%, #141728 50%, #0F1220 100%);">
            <div class="card-body  text-center">
                <i class="fa-solid fa-snowman icon-size icon-snowy animate__animated  animate__bounceInLeft  animate__delay-1s animate__slower"></i>              
                <h5 class="card-title text-linear border-bottom border-2 border-info-subtle py-3 text-start mt-5">
                    Muree, Pakistan</h5>
                <p class="card-text fs-1 text-secondary">30<sup>0</sup></p>
                <p class="card-text text-secondary">July 21 <sup>st</sup></p>
            </div>
        </div>
    </div>`);
} else if (weather === "windy" || weather === "4") {
  document.writeln(`<div class="container-xxl d-flex justify-content-center align-items-center card-wrap bg-windy">
        <div class="card rounded-4"
            style="width: 16rem; height: 22rem; background: linear-gradient(135deg, #1B1E2D 0%, #141728 50%, #0F1220 100%);">
            <div class="card-body  text-center">
                <i class="fa-solid fa-wind icon-size icon-windy"></i>
                <h5 class="card-title text-linear border-bottom border-2 border-info-subtle py-3 text-start mt-5">
                    Peshawar, Pakistan</h5>
                <p class="card-text fs-1 text-secondary">61<sup>0</sup></p>
                <p class="card-text text-secondary">July 21 <sup>st</sup></p>
            </div>
        </div>
    </div>`);
} else if (weather === "foggy" || weather === "5") {
  document.writeln(`<div class="container-xxl d-flex justify-content-center align-items-center card-wrap bg-foggy">
        <div class="card rounded-4"
            style="width: 16rem; height: 22rem; background: linear-gradient(135deg, #1B1E2D 0%, #141728 50%, #0F1220 100%);">
            <div class="card-body  text-center">
                <i class="fa-solid fa-smog icon-size icon-foggy animate__animated animate__bounceIn animate__delay-1s animate__slower"></i>
                <h5 class="card-title text-linear border-bottom border-2 border-info-subtle py-3 text-start mt-5">
                    Lahore, Pakistan</h5>
                <p class="card-text fs-1 text-secondary">-2<sup>0</sup></p>
                <p class="card-text text-secondary">July 21 <sup>st</sup></p>
            </div>
        </div>
    </div>`);
} else if (weather === "cloudy" || weather === "6") {
  document.writeln(`<div class="container-xxl d-flex justify-content-center align-items-center card-wrap bg-cloudy">
        <div class="card rounded-4"
            style="width: 16rem; height: 22rem; background: linear-gradient(135deg, #1B1E2D 0%, #141728 50%, #0F1220 100%);">
            <div class="card-body  text-center">
                <i class="fa-solid fa-cloud-meatball icon-size icon-cloudy animate__animated animate__swing animate__delay-1s animate__slower"></i>
                <h5 class="card-title text-linear border-bottom border-2 border-info-subtle py-3 text-start mt-5">
                    Karachi, Pakistan</h5>
                <p class="card-text fs-1 text-secondary">-2<sup>0</sup></p>
                <p class="card-text text-secondary">July 21 <sup>st</sup></p>
            </div>
        </div>
    </div>`);
} else if (weather === "stormy" || weather === "7") {
  document.writeln(`<div class="container-xxl d-flex justify-content-center align-items-center card-wrap bg-stormy">
        <div class="card rounded-4"
            style="width: 16rem; height: 22rem; background: linear-gradient(135deg, #1B1E2D 0%, #141728 50%, #0F1220 100%);">
            <div class="card-body  text-center">
                <i class="fa-solid fa-cloud-bolt icon-size icon-stormy animate__animated animate__swing animate__delay-1s animate__slower"></i>
                <h5 class="card-title text-linear border-bottom border-2 border-info-subtle py-3 text-start mt-5">
                    Faisalabad, Pakistan</h5>
                <p class="card-text fs-1 text-secondary">-2<sup>0</sup></p>
                <p class="card-text text-secondary">July 21 <sup>st</sup></p>
            </div>
        </div>
    </div>`);
} else if (weather === "hail" || weather === "8") {
  document.writeln(`<div class="container-xxl d-flex justify-content-center align-items-center card-wrap bg-hail">
        <div class="card rounded-4 "
            style="width: 16rem; height: 22rem; background: linear-gradient(135deg, #1B1E2D 0%, #141728 50%, #0F1220 100%);">
            <div class="card-body  text-center">
                <i class="fa-brands fa-cloudversify icon-size icon-hail animate__animated animate__swing animate__delay-1s animate__slower"></i>
                <h5 class="card-title text-linear border-bottom border-2 border-info-subtle py-3 text-start mt-5">
                    KPK, Pakistan</h5>
                <p class="card-text fs-1 text-secondary">-2<sup>0</sup></p>
                <p class="card-text text-secondary">July 21 <sup>st</sup></p>
            </div>
        </div>
    </div>`);
} else {
  alert("please enter valid weather option..");
}
