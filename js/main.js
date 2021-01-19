let tabla = document.querySelector('#countries tbody')
async function getcountries() {
    let url = "https://restcountries.eu/rest/v2/all";
    let numberFormat = new Intl.NumberFormat('es-ES')
    return await fetch(url).then(res => res.json()).then(datos => {

    let $i = 0;

        datos.forEach(dato => {

            ++$i;

            if ($i <= 12){
            const row = document.createElement('tr');
            let population = numberFormat.format(dato.population);
            row.innerHTML += `
                        <td><a href="#" onclick="show('${dato.region}',this)" data-region="${dato.region}">${dato.name}</a></td>
                        <td>${dato.capital}</td>
                        <td>${population}</td>
                    `;
            tabla.appendChild(row);
           }

        });
    })
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

function show(region, e) {
    //holi
    modal.style.display = "block";
    document.getElementById("continente").innerHTML = region;
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }