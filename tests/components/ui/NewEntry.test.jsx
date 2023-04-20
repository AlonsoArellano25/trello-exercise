import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { NewEntry } from "../../../components/ui";

describe("Tests in  <NewEntry />", () => {
  it("should render properly button cancel", () => {
    render(<NewEntry />);
    const bElement = screen.getByTestId("button-add-task");
    expect(bElement).toHaveTextContent("Add Task");
  });
  it("should match with snapshot", () => {
    const { container } = render(<NewEntry />);
    expect(container).toMatchSnapshot();
  });
  // it("should render properly text field", () => {
  //   render(<NewEntry />);
  //   const bElement = screen.getByTestId("textfield-new-entry");
  //   expect(bElement).toHaveValue("");
  // });
});
