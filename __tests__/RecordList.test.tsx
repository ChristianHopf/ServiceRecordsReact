import React from "react";
import { render, screen } from "@testing-library/react";
import RecordList from "../src/components/records/RecordList";
import { Record } from "../src/types/record";

it("should display records", () => {
  const testRecords: Record[] = [
    {
      id: "1a869396-f637-4ac1-86e6-894a76554a93",
      owner: "Christian Hopf",
      date: "2025-01-07T20:15:07.251035Z",
      make: "Audi",
      model: "A4",
      year: 1999,
      vin: "ABCDEFGHIJKLMNOPQ",
      license: "DBZ171",
      mileage: 160000,
      service: "Alignment",
      charge: 85,
    },
  ];

  render(<RecordList records={testRecords} />);
  // Table headings
  expect(screen.getByText("VIN")).toBeInTheDocument();
  expect(screen.getByText("Make")).toBeInTheDocument();
  expect(screen.getByText("Model")).toBeInTheDocument();
  expect(screen.getByText("Year")).toBeInTheDocument();
  expect(screen.getByText("Owner")).toBeInTheDocument();
  expect(screen.getByText("License")).toBeInTheDocument();
  expect(screen.getByText("Mileage")).toBeInTheDocument();
  expect(screen.getByText("Service")).toBeInTheDocument();
  expect(screen.getByText("Charge")).toBeInTheDocument();
  expect(screen.getByText("Date")).toBeInTheDocument();

  // Display record info
  expect(screen.getByText("ABCDEFGHIJKLMNOPQ")).toBeInTheDocument();
  expect(screen.getByText("Audi")).toBeInTheDocument();
  expect(screen.getByText("A4")).toBeInTheDocument();
  expect(screen.getByText("1999")).toBeInTheDocument();
  expect(screen.getByText("Christian Hopf")).toBeInTheDocument();
  expect(screen.getByText("DBZ171")).toBeInTheDocument();
  expect(screen.getByText("160000")).toBeInTheDocument();
  expect(screen.getByText("Alignment")).toBeInTheDocument();
  expect(screen.getByText("85")).toBeInTheDocument();
  expect(screen.getByText("Tue Jan 07 2025")).toBeInTheDocument();
});
