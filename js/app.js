// get the value from input field and fetch API
const loadPhone = () => {
    const searchText = document.getElementById('search-field').value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(phone => displayPhone(phone.data))

    document.getElementById('search-field').value = '';


}

loadPhone();

const displayPhone = phones => {
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';
    for (const phone of phones) {
        const div = document.createElement('div');
        div.classList.add('col');
        console.log(phone);
        div.innerHTML = `
        <div class="card h-100">
        <img src="${phone.image}" class="card-img-top w-50 mx-auto mt-3"  alt="...">
        <div class="card-body">
        <h5 class="card-title">${phone.brand} ${phone.phone_name}</h5>
        <a href="#" class="btn btn-primary bg-gradient">Details</a>
        </div>
        </div>`
        phoneContainer.append(div);
    }

}

