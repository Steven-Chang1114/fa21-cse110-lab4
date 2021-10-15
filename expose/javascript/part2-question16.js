let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
}

for (const el in statistics) {
    if (el[0] == 'r' || statistics[el] % 2 == 1) {
        console.log(statistics[el])
    }
}