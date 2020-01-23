const state = {
    dentists: [
        {
            id: 0,
            name: "Tineke van Doorn",
            phoneNumber: "(609) 386 6946",
            email: "tineke-van-94@example.com",
            birthYear: "1994",
            sick: false
          },
          {
            id: 0,
            name: "Femke van der Linden",
            phoneNumber: "(522) 827 3641",
            email: "femke-van-der-88@example.com",
            birthYear: "1988",
            sick: false
          },
          {
            id: 0,
            name: "Dirk van Beek",
            phoneNumber: "(424) 440 7664",
            email: "dirk-van-91@example.com",
            birthYear: "1991",
            sick: false
          },
          {
            id: 0,
            name: "Henk Groen",
            phoneNumber: "(629) 950 9179",
            email: "henk_groen@example.com",
            birthYear: "1986",
            sick: false
          },
    ],

    assistants:[{
        id: 0,
        name: "Rob Dekker",
        phoneNumber: " (518) 652 7169",
        email: "Rob@example.com",
        birthYear: "1995",
        sick: false
      },

    {
      id: 1,
      name: "Paulien De Leeuw",
      phoneNumber: "(680) 472 8473",
      email: "Paulien85@example.com",
      birthYear: "1985",
      sick: false
    },
   ],

  patients: [
    {
        id: 0,
        name: "Ineke Hofman",
        phoneNumber: "(731) 395 6968",
        email: "ineke.hofman@example.com",
        birthYear: "1995",
        sick: false
      },

    {
      id: 1,
      name: "Sara Koning",
      phoneNumber: "(226) 364 1669",
      email: "sara_koning@example.com",
      birthYear: "1991",
      sick: false
    },
    {
      id: 2,
      name: "Mathijs Post",
      phoneNumber:  "(864) 509 4478",
      email: "mathijs.post@example.com",
      birthYear: "1989",
      sick: false
    },
    {
      id: 3,
      name: "Carlijn Kok",
      phoneNumber: "(600) 283 6450",
      email: "carlijn.kok@example.com",
      birthYear: "1998",
      sick: false
    },
    {
      id: 4,
      name: "Lisa Schipper",
      phoneNumber: "(489) 242 7063",
      email: "lisa87@example.com",
      birthYear: "1987",
      sick: false
    },
    {
      id: 5,
      name: "Nelleke de Graaf",
      phoneNumber: "(474) 900 7551",
      email: "nelleke-de-89@example.com",
      birthYear: "1989",
      sick: false
    }
  ],
  appointments: [
    {
        patient: 3,
        dentist: 4,
        assistent: null,
        date: 3,
        time: 9
      }

  ]

} ​;
console.log(state);

//   const getDentistName = (state, id) => {
//     const dentists = state["dentists"].filter(dentist => dentist["id"] === id);
//     const dentist = dentists[0];
//     return dentist["name"];
//   };
//   ​
//   const updateDentistName = (state, id, newName) => {
//     // copy the old state
//     const newState = { ...state };
//     newState["dentists"] = [...state["dentists"]];
//     const index = state["dentists"].findIndex(dentist => dentist["id"] === id);
//     const newDentist = { ...state["dentists"][index] };
//   ​
//     // update the new state
//     newDentist["name"] = newName;
//     newState["dentists"][index] = newDentist;
//   ​
//     // return the new state
//     return newState;
//   };
//   ​
//   // console.log(getDentistName(state, 1));
//   const newState = updateDentistName(state, 55, "Dafstra");
//   ​
//   console.log("old state:");
//   console.log(state);
//   ​
//   console.log("new state:");
//   console.log(newState);
