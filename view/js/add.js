let bikeForm = document.getElementById("bikeForm");
let titleEl = document.getElementById("title");
let colorEl = document.getElementById("color");
let modelEl = document.getElementById("model");
let companyEl = document.getElementById("company");
let priceEl = document.getElementById("price");

bikeForm.addEventListener("submit", async function(e) {
    e.preventDefault();
    let data = {
        title: titleEl.value,
        color: colorEl.value,
        model: modelEl.value,
        company: companyEl.value,
        price: priceEl.value
    };
    console.log(`data =`, data)

    await fetch(`/api/bike/add`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
    .then(res => {
        alert(res.msg)
        window.location.href = "/"
    })
    .catch(err => alert(err.msg))
});