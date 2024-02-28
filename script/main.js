const loadPhone = async (searchText, isShowAll) => {

    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones, isShowAll);
}

const displayPhones = (phones, isShowAll) => {
    const section = document.getElementById('section');
    section.innerHTML = '';
 

    const showAllCont = document.getElementById("show-All-Container")
    if (phones.length > 12) {
        showAllCont.classList.remove("none")
    } else {
        showAllCont.classList.add("none")
    }
console.log(isShowAll)
    if (!isShowAll) {
        phones = phones.slice(0, 12)

    }else{
        showAllCont.classList.add("none")
    }

    phones.forEach(phone => {

        const div = document.createElement("div");
        div.innerHTML = `
            <div class="product-card container bg-white rounded-lg shadow-xl">
                <figure class="product-image-container">
                    <img src=${phone.image} alt="Phone" class="product-image rounded-xl" />
                </figure>
                <div class="product-info-container flex flex-col justify-center items-center">
                    <h2 class="product-title text-xl font-bold">${phone.phone_name}</h2>
                    <p class="product-description text-gray-700">${phone.slug}</p>
                    <div class="product-actions mt-4">
                        <button class="btn btn-Add">Show Details</button>
                    </div>
                </div>
            </div>`;
        section.appendChild(div);
    });
    loaderSpinner(false)
}

const handelSearch = (isShowAll) => {
    loaderSpinner(true)
    const searchFild = document.getElementById("searchBox")
    const searchText = searchFild.value
    console.log(searchText);
    loadPhone(searchText, isShowAll)


}

const loaderSpinner = (isLoading) => {
    const loadingSpin = document.getElementById("loadingSpinner")
    if (isLoading === true) {
        loadingSpin.classList.remove("d-none")
    } else {
        loadingSpin.classList.add("d-none")
    }
}
const handelShowAll = () => {
    handelSearch(true);
}







