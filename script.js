let countryData = [];
fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    data.map((item) => {
      document.getElementById("container").innerHTML += `
      <div class= 'col-lg-3 col-md-6 col-sm-12 mb-3 text-center' >    
        <div class="card" style="width: 18rem;">
            <h5 class="card-title w-100 text-center bg-dark text-white p-2 mb-2 border-start-0 rounded-top rounded-">${item.name.common}</h5>
            <div class='card-header p-0 m-0'>
                <div class='ratio ratio-16x9'>
                    <img src="${item.flags.svg}" class="w-100 border" alt="...">
                </div>
            </div>
            <div class="card-body lh-1">
              <p class="card-text"><b>Capital :</b> ${item.capital}</p>
              <p class="card-text"><b>Region :</b> ${item.region}</p>
              <p class="card-text"><b>Country Code :</b> ${item.cca3}</p> 
              <a href="# "id='${item.capital}' onclick='handleClick(this.id)' class="btn btn-transparent border border-dark">Check Weather</a>
            </div>
        </div>
      </div>
        `;
    });
  });

function handleClick(capital) {
  fetch(`https://restcountries.com/v3.1/capital/${capital}`)
    .then((res) => res.json())
    .then((data) => {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${data[0].latlng[0]}&lon=${data[0].latlng[1]}&appid=9c543c796d50f05f34fd9aa7f32d4b9c`
      )
        .then((res) => res.json())
        .then(
          (data) =>
            (document.querySelector(".result").innerHTML = data.main.temp)
        );
    });
}
