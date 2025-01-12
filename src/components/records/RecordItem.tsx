import React from "react";
import { Record } from "../../types/record";

interface Props {
  record: Record;
}

function RecordItem({ record }: Props) {
  console.log(record.vin);
  return (
    <tr className="text-stone-700 text-left">
      <th>{record.vin}</th>
      <th>{record.make}</th>
      <th>{record.model}</th>
      <th>{record.year}</th>
      <th>{record.owner}</th>
      <th>{record.license}</th>
      <th>{record.mileage}</th>
      <th>{record.service}</th>
      <th>{record.charge}</th>
      <th>{new Date(record.date).toDateString()}</th>
    </tr>
  );
}

export default RecordItem;
