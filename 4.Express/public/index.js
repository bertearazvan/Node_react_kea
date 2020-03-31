// Use Ajax to get all the cars and console log them

deleteCar = (carId) => {
    $.ajax({
        url: 'cars/' + carId,
        type: 'DELETE'

    }).done(({
        response
    }) => {
        console.log(response)

        $("#car-wrapper").html("");
        fetchUsers();
    });
}
//contentEditable
fetchUsers = () => {
    $.ajax({
        url: '/cars',
        type: 'GET',
        success: ({
            response
        }) => {
            response.map((car) => {
                const carCard =
                    `<div class="car-card">
            <button onClick=deleteCar(${car.id})>X</button>
            <p>${car.brand ? car.brand : "No brand"}</p>
            <p>${car.type ? car.type : "No type"}</p>
            
        </div>`;

                $("#car-wrapper").append(carCard);
            })
        }
    });
}

fetchUsers();



// app.post("/cars/", (req, res) => {
//     const newCar = req.body;
//     newCar.id = ++currentId;
//     cars.push(newCar);
//     return res.send({
//         response: newCar
//     });
// });