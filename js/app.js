// get the value from input field and fetch API
const loadPhone = () => {
    const searchText = document.getElementById('search-field').value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(phone => displayPhone(phone.data))
}

loadPhone();

const displayPhone = phones => {
    const phoneContainer = document.getElementById('phone-container');
    for (const phone of phones) {
        const div = document.createElement('div');
        div.classList.add('col');
        console.log(phone);
        div.innerHTML = `
        <div class="card h-100">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>`
        phoneContainer.append(div);
    }

}

