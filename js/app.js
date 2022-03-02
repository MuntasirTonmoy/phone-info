// get the value from input field and fetch API
const loadPhone = () => {
    const searchText = document.getElementById('search-field').value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(phone => displayPhone(phone.data))

    document.getElementById('search-field').value = '';


}


const displayPhone = phones => {
    // 20 phone items show 
    const phonesList20 = phones.slice(0, 20);
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';
    for (const phone of phonesList20) {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
        <img src="${phone.image}" class="card-img-top w-50 mx-auto mt-3"  alt="...">
        <div class="card-body">
        <h5 class="card-title">${phone.brand} ${phone.phone_name}</h5>
        <button onclick="loadDetails('${phone.slug}')" class="btn btn-primary bg-gradient mt-1 rounded">Details</button>
        </div>
        </div>`
        phoneContainer.appendChild(div);

    }

}

const loadDetails = id => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(phoneDetails => diplayDetails(phoneDetails.data));

}

const diplayDetails = details => {
    console.log(details);
    const phoneDetails = document.getElementById('phone-details');

    // clear previous details
    phoneDetails.textContent = '';

    const detailsDiv = document.createElement('div');
    detailsDiv.classList.add('card');
    detailsDiv.innerHTML = `
    <div class="row g-0">
    <div class="bg-light border title-text fw-bold p-2">Phone Details</div>
    <div class="col-lg-4 col-sm-12 ps-5 py-4">
        <img src="${details.image}" class="w-75 rounded-start" alt="...">
    </div>
    <div class="col-lg-8 col-sm-12 py-4 pe-5">
        <div class="card-body">
            <h5 class="card-title">${details.brand} ${details.name}</h5>
            <p class="card-text"><small class="text-muted">${details.releaseDate == "" ? 'Release date: Not available' : details.releaseDate}</small></p >
    <p class="card-text">This is a wider card with supporting text below as a natural
        lead-in to
        additional content. This content is a little bit longer.</p>
        </div >
    </div >
    </div >
    `
    phoneDetails.appendChild(detailsDiv);

}

