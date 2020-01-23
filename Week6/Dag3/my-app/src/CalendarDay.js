import React from "react";

function CalendarDay(props) {
  const patients = props.state.patients;
  const dentists = props.state.dentists;
  const assistents = props.state.assistents;

  const getName = function(appointment, items) {
    const patient = items.filter(patient => {
      return patient === patient.id;
    });
    return patient[0].firstName;
  };

  //   const getName = function(appointment, items) {
  //     console.log(items);
  //     const item = items.filter(item => {
  //       return appointment.item === item.id;
  //     });
  //     console.log(item);
  //     return item[0].firstName;
  //   };

  return (
    <table>
      {props.state.appointments.map(appointment => (
        <tr key={appointment.id}>
          <th>{getName(appointment.patient, patients)}</th>
          <th>{appointment.dentist}</th>
          <th>{appointment.assistent}</th>
          <th>{appointment.date}</th>
          <th>{appointment.time}</th>
        </tr>
      ))}
    </table>
  );
}

export default CalendarDay;

// {
//     id: 1,
//     patient: 2,
//     dentist: 3,
//     assistent: 1,
//     date: 2,
//     time: 9
//   },
