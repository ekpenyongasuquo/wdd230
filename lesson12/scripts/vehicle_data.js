const vehicleDataURL = "https://cprincec.github.io/wdd230/week7/scoots/data/vehicle.json";

async function getVehiclesData(url) {
    let response = await fetch(url);
    if (response.ok)    {
        let data = await response.json();
        showVehicleData(data);
    }
}

function showVehicleData(data)  {
    data.forEach(scooter => {
        let table = document.querySelector("table");
        let vehicle = document.createElement("tr");

        let vehicle_name = document.createElement("td");
        let vehicle_max = document.createElement("td");
        let vehicle_res_half = document.createElement("td");
        let vehicle_res_full = document.createElement("td");
        let vehicle_walk_half = document.createElement("td");
        let vehicle_walk_full = document.createElement("td");

        vehicle_name.textContent = scooter.name;
        vehicle_max.textContent = scooter.max_persons;
        vehicle_res_half.textContent = scooter.reservation.half_day;
        vehicle_res_full.textContent = scooter.reservation.full_day;
        vehicle_walk_half.textContent = scooter.walk_in.half_day;
        vehicle_walk_full.textContent = scooter.walk_in.full_day;

        vehicle.append(vehicle_name);
        vehicle.append(vehicle_max);
        vehicle.append(vehicle_res_half);
        vehicle.append(vehicle_res_full);
        vehicle.append(vehicle_walk_half);
        vehicle.append(vehicle_walk_full);
        
        vehicle_name.setAttribute("class", "table-veh-name")
        table.append(vehicle);


        


    });


}

getVehiclesData(vehicleDataURL);