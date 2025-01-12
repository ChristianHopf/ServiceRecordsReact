import React from "react";
import RecordItem from "./RecordItem";
import { Record } from "../../types/record";

interface Props {
  records: Record[];
}

function RecordList({ records }: Props) {
  //   console.log(records);
  return (
    <table className="bg-gray-200 table-fixed border-separate px-2">
      <thead>
        <tr className="text-xl text-black text-left">
          <th scope="col">VIN</th>
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
        {records.map((record: Record) => (
          <RecordItem key={record.id} record={record} />
        ))}
      </tbody>
    </table>
  );
}

export default RecordList;
