import React from "react";
import RecordItem from "./RecordItem";

function RecordList({ records }) {
  //   console.log(records);
  return (
    <table className="bg-gray-200 table-fixed">
      <thead>
        <tr className="text-black">
          <th className="border-2" scope="col">
            VIN
          </th>
          <th scope="col">Make</th>
          <th scope="col">Model</th>
          <th scope="col">Year</th>
          <th scope="col">Owner</th>
          <th scope="col">License</th>
          <th scope="col">Mileage</th>
          <th scope="col">Service</th>
          <th scope="col">Charge</th>
          <th scope="col">Date</th>
        </tr>
      </thead>
      <tbody>
        {records.map((record) => (
          <RecordItem key={record.id} record={record} />
        ))}
      </tbody>
    </table>
  );
}

export default RecordList;
