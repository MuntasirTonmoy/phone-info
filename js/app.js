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

    if (phones.length !== 0) {
        //hide error message
        document.getElementById('error-text').style.display = 'none';

        // 20 phone items show 
        const phonesList20 = phones.slice(0, 20);
        const phoneContainer = document.getElementById('phone-container');

        //clean previous search
        phoneContainer.textContent = '';

        //clean detais box if open
        const phoneDetails = document.getElementById('phone-details');
        phoneDetails.textContent = '';

        for (const phone of phonesList20) {
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
            <div class="card h-100">
                <img src="${phone.image}" class="card-img-top w-50 mx-auto mt-3"  alt="...">
                <div class="card-body">
                    <h5 class="card-title">${phone.brand} ${phone.phone_name}</h5>
                    <button onclick="loadDetails('${phone.slug}')" class="btn btn-primary bg-gradient mt-1 rounded">Details</   button>
                </div>
            </div>`
            phoneContainer.appendChild(div);

        }
    }
    else {
        // show error message
        document.getElementById('error-text').style.display = 'block';
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
    const mainFeatures = details.mainFeatures;
    const sensors = details.mainFeatures.sensors;

    // clear previous details
    phoneDetails.textContent = '';

    const detailsDiv = document.createElement('div');
    detailsDiv.classList.add('card');
    detailsDiv.innerHTML = `
    <div class="row g-0">
    <div class="bg-light border title-text fw-bold p-2"><div class="d-flex justify-content-between"><span>Phone Details</span> <button type="button" onclick="closeDetails()" class="btn-close" aria-label="Close"></button></div></div>
    <div class="col-lg-4 col-sm-12 ps-5 py-4">
        <img src="${details.image}" class="w-75 rounded-start" alt="...">
    </div>
        <div class="col-lg-8 col-sm-12 py-4 pe-5">
            <div class="card-body">
                <h5 class="card-title fs-3 fw-bold">${details.brand} ${details.name}</h5>
                <p class="card-text">
                <small class="text-muted">${details.releaseDate == "" ? 'Release date: Not available' : details.releaseDate}
                </small>
                </p>
                <p class="card-text">Display: ${mainFeatures.displaySize}</p>
                <p class="card-text">Chipset: ${mainFeatures.chipSet}</p>
                <p class="card-text">Memory: ${mainFeatures.memory}</p>
                <p class="card-text">Storage: ${mainFeatures.storage}</p>
                <p class="card-text">Sensors: ${sensors.toString()}</p>
                
            </div >
        </div >
    </div >
    `
    phoneDetails.appendChild(detailsDiv);

}

const closeDetails = () => {
    const phoneDetails = document.getElementById('phone-details');
    phoneDetails.textContent = '';
}

