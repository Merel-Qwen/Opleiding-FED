import React from "react";

const State = {
  dentists: [
    {
      id: 1,
      firstName: "Lara",
      lastName: "Wauters",
      phoneNumber: "(799) 206 5785",
      email: "lara@tandartspraktijkbvt.nl",
      sick: false
    },
    {
      id: 2,
      firstName: "Emilie",
      lastName: "Bertrand",
      phoneNumber: "(569) 534 8549",
      email: "emilie@tandartspraktijkbvt.nl",
      sick: false
    },
    {
      id: 3,
      firstName: "Ellen",
      lastName: "Leroy",
      phoneNumber: "(370) 330 2387",
      email: "ellen@tandartspraktijkbvt.nl",
      sick: false
    },
    {
      id: 4,
      firstName: "Ward",
      lastName: "Christiaens",
      phoneNumber: "(265) 401 9234",
      email: "ward@tandartspraktijkbvt.nl",
      sick: false
    }
  ],
  assistents: [
    {
      id: 1,
      firstName: "Silke",
      lastName: "van Damme",
      phoneNumber: "(220) 960 1138",
      email: "silke@tandartspraktijkbvt.nl",
      sick: false
    },
    {
      id: 2,
      firstName: "Lisa",
      lastName: "Coppens",
      phoneNumber: "(962) 997 4982",
      email: "lisa@tandartspraktijkbvt.nl",
      sick: false
    }
  ],
  patients: [
    {
      id: 1,
      firstName: "Romain",
      lastName: "Beckers",
      phoneNumber: "(680) 472 8473",
      email: "romain-95@example.com",
      birthYear: "1995",
      sick: false
    },
    {
      id: 2,
      firstName: "Lara",
      lastName: "Evrard",
      phoneNumber: "(563) 638 6154",
      email: "laraevrard@example.com",
      birthYear: "1989",
      sick: false
    },
    {
      id: 3,
      firstName: "Femke",
      lastName: "Devos",
      phoneNumber: "(581) 137 2017",
      email: "femke_devos@example.com",
      birthYear: "1999",
      sick: false
    },
    {
      id: 4,
      firstName: "Pauline",
      lastName: "Dubois",
      phoneNumber: "(445) 647 1040",
      email: "pauline_91@example.com",
      birthYear: "1959",
      sick: false
    },
    {
      id: 5,
      firstName: "Axelle",
      lastName: "Segers",
      phoneNumber: "(474) 900 7551",
      email: "axelle-90@example.com",
      birthYear: "1984",
      sick: false
    }
  ],
  appointments: [
    {
      id: 1,
      patient: 2,
      dentist: 3,
      assistent: 1,
      date: 2,
      time: 9
    },
    {
      id: 2,
      patient: 3,
      dentist: 2,
      assistent: 2,
      date: 1,
      time: 10
    }
  ]
};

export default State;
