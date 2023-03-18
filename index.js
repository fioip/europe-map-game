const countries = [
  {
    name: "Albania",
    id: "ALB",
  },
  {
    name: "Austria",
    id: "AUS",
  },
  {
    name: "Belgium",
    id: "BEL",
  },
  {
    name: "Bulgaria",
    id: "BUL",
  },
  {
    name: "Bosnia and Herzegovina",
    id: "BOS",
  },
  {
    name: "Belarus",
    id: "BELA",
  },
  {
    name: "Switzerland",
    id: "SWI",
  },
  {
    name: "Czech Republic",
    id: "CZE",
  },
  {
    name: "Germany",
    id: "GER",
  },
  {
    name: "Denmark",
    id: "DEN",
  },
  {
    name: "Estonia",
    id: "EST",
  },
  {
    name: "Finland",
    id: "FIN",
  },
  {
    name: "United Kingdom",
    id: "UK",
  },
  {
    name: "Greece",
    id: "GRE",
  },
  {
    name: "Croatia",
    id: "CRO",
  },
  {
    name: "Hungary",
    id: "HUN",
  },
  {
    name: "Ireland",
    id: "IRE",
  },
  {
    name: "Iceland",
    id: "ICE",
  },
  {
    name: "Italy",
    id: "ITA",
  },
  {
    name: "Lithuania",
    id: "LIT",
  },
  {
    name: "Liechtenstein",
    id: "LIE",
  },
  {
    name: "Luxembourg",
    id: "LUX",
  },
  {
    name: "Latvia",
    id: "LAT",
  },
  {
    name: "Moldova",
    id: "MOL",
  },
  {
    name: "North Makedonia",
    id: "NMK",
  },
  {
    name: "Montenegro",
    id: "MON",
  },
  {
    name: "Netherlands",
    id: "NET",
  },
  {
    name: "Norway",
    id: "NOR",
  },
  {
    name: "Poland",
    id: "POL",
  },
  {
    name: "Portugal",
    id: "POR",
  },
  {
    name: "Romania",
    id: "ROM",
  },
  {
    name: "Serbia",
    id: "SER",
  },
  {
    name: "Slovakia",
    id: "SLK",
  },
  {
    name: "Slovenia",
    id: "SLN",
  },
  {
    name: "Sweden",
    id: "SWE",
  },
  {
    name: "Ukraine",
    id: "UKR",
  },
  {
    name: "France",
    id: "FRA",
  },
  {
    name: "Spain",
    id: "SPA",
  },
  {
    name: "Cyprus",
    id: "CYP",
  },
  {
    name: "Kosovo",
    id: "KOS",
  },
  {
    name: "Turkey",
    id: "TUR",
  },
  {
    name: "Andorra",
    id: "AND",
  },
];

function random() {
  let randomsize = Math.floor(Math.random() * countries.length);
  let randomCoutriesName = JSON.stringify(countries[randomsize].name);
  let randomCoutriesId = countries[randomsize].id;
  console.log("TARI RANDOM: ", randomCoutriesName, randomCoutriesId);
  document.getElementById("inputCountries").value = randomCoutriesName;

  document.querySelector("body").addEventListener("click", (e) => {
    if (e.target.matches("path")) {
      const id = e.target.id;
      console.warn("TARA: ", id);
      if (randomCoutriesId === id) {
        console.warn("DA");
        document.getElementById(id).style.fill = "#1FAB89";
        //    window.location.reload();
      } else {
        console.warn("NU");
        document.getElementById(id).style.fill = "#E23E57";
      }
    }
  });
}
random();

// window.location.reload();

// function verifyCoutry() {

// }

// verifyCoutry();
