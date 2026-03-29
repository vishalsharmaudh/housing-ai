function predict() {
    let data = {
        longitude: parseFloat(document.getElementById("longitude").value),
        latitude: parseFloat(document.getElementById("latitude").value),
        housing_median_age: parseFloat(document.getElementById("housing_median_age").value),
        total_rooms: parseFloat(document.getElementById("total_rooms").value),
        total_bedrooms: parseFloat(document.getElementById("total_bedrooms").value),
        population: parseFloat(document.getElementById("population").value),
        households: parseFloat(document.getElementById("households").value),
        median_income: parseFloat(document.getElementById("median_income").value),
        ocean_proximity: document.getElementById("ocean_proximity").value
    };

    fetch("/predict", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => {
        document.getElementById("price").innerText = "$" + result.price;
        document.getElementById("modal").style.display = "block";
    });
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function resetForm() {
    document.getElementById("longitude").value = "";
    document.getElementById("latitude").value = "";
    document.getElementById("housing_median_age").value = "";
    document.getElementById("total_rooms").value = "";
    document.getElementById("total_bedrooms").value = "";
    document.getElementById("population").value = "";
    document.getElementById("households").value = "";
    document.getElementById("median_income").value = "";

    document.getElementById("ocean_proximity").selectedIndex = 0;

    // modal bhi band ho jaye agar open ho
    document.getElementById("modal").style.display = "none";
}