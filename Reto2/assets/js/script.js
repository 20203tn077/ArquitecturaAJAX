// http://ipwho.is/187.214.41.60
const container = document.getElementById('container');
(url => new Promise((resolve, reject) => {
    fetch(url)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err))
}))('http://127.0.0.1:5500/Reto2/assets/json/mock.json').then(data => {
    const {ip, type, continent, country, region, city, borders, flag: {img: flag}, timezone: {id: timezone}} = data
    container.innerHTML = `
    <div class="card mx-auto shadow" style="width: 24rem;">
        <div class="card-body">
            <div class="row">
                <div class="col-auto">
                    <h4 title="IP address">${ip}</h4>
                </div>
                <div class="col-auto ms-auto">
                    <span title="Type" class="badge text-bg-warning">${type}</span>
                </div>
            </div>
            <div class="row">
                <div class="col-auto">
                    <span class="fw-semibold">Continent: </span>
                    <span>${continent}</span>
                </div>
            </div>
            <div class="row">
                <div class="col-auto h-100">
                    <span class="align-middle">
                        <span class="fw-semibold">Country: </span> ${country}</span>
                    </span>
                    <img src="${flag}" class="ms-1 align-middle" alt="Flag" style="height: 14px;">
                </div>
                <div class="col-auto h-100">
                    <small class="text-muted fst-italic align-middle">Border with ${borders}</small>
                </div>
            </div>
            <div class="row">
                <div class="col-auto">
                    <span class="fw-semibold">Location:</span> ${city}, ${region}
                </div>
            </div>
            <div class="row">
                <div class="col-auto">
                    <span class="fw-semibold">Timezone: </span>
                    <span>${timezone}</span>
                </div>
            </div>
        </div>
    </div>`
}).catch(err => console.log(err))