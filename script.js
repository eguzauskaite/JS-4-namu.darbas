// Pasirinkite 5 pasaulio šalis. Suraskite (Google, Wikipedia) jų valstybės plotą (km²) ir gyventojų skaičių.

// Sukurkite naują masyvą su penkių pasaulio šalių objektais, kuriuose būtų nurodyta: šalies pavadinimas, valstybės plotas ir gyventojų skaičius.

// Suskaičiuokite ir suapvalinkite su toFixed(2) koks plotas tenka vienam gyventojui (m²) kiekvienoje šalyje. P.s. reikės padauginti nurodytą skaičių km2 iš 1000000, kad gautumėte m2.


// Atspausdinkite tokią informaciją apie šalis per console.log naudodamiesi for loop arba for/of loop pagal tokį šabloną:



// Šalis: Portugalija, joje gyvena 10.26 mln. gyventojų.
// Valstybės plotas: 92212 km², plotas tenkantis vienam gyventojui: 8987.52 m².


// Papildomai

// Sudėkite sukoduotą skaičiavimą ir spausdinimą į funkcijos ciklą ir jį paleiskite per for loop arba for/of loop nurodydami informaciją iš masyvo.

// Šalis: Albanija, joje gyvena 2.87 mln. gyventojų.
//  Valstybės plotas: 28748 km², plotas tenkantis vienam gyventojui: 1001.51 m².

// Šalis: Brazilija, joje gyvena 213.99 mln. gyventojų.
// Valstybės plotas: 8515767 km², plotas tenkantis vienam gyventojui: 39.70 m².

// Šalis: Meksika, joje gyvena 130.26 mln. gyventojų.
// Valstybės plotas: 1964375 km², plotas tenkantis vienam gyventojui: 15.05 m².

// Šalis: Prancūzija, joje gyvena 65.27 mln. gyventojų.
// Valstybės plotas: 551695 km², plotas tenkantis vienam gyventojui: 8.45 m².

//  Šalis: Švedija, joje gyvena 10.45 mln. gyventojų.
// Valstybės plotas: 450295 km², plotas tenkantis vienam gyventojui: 42.99 m².

var countries = [
    { name: 'Albanija', area: 28748, population: 2.87 },
  { name: 'Brazilija', area: 8515767, population: 213.99 },
  { name: 'Meksika', area: 1964375, population: 130.26 },
  { name: 'Prancūzija', area: 551695, population: 65.27 },
  { name: 'Švedija', area: 450295, population: 10.45 },
]
function calculateAndPrintInfo(country) {
    var areaInSquareMeters = country.area * 1000000;
    var areaPerPerson = (areaInSquareMeters / country.population).toFixed(2);

    // return `Šalis: ${country.name}, joje gyvena ${country.population} mln. gyventojų.\nValstybės plotas: ${country.area} km², plotas tenkantis vienam gyventojui: ${areaPerPerson} m².\n`;
  
     console.log(`Šalis: ${country.name}, joje gyvena ${country.population} mln. gyventojų.`);
     console.log(`Valstybės plotas: ${country.area} km², plotas tenkantis vienam gyventojui: ${areaPerPerson} m².\n`);
  }
  
  for (var country of countries) {
    calculateAndPrintInfo(country);
  }