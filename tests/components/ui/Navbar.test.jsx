import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Navbar } from "../../../components/ui";

describe("Tests in  <Navbar />", () => {
  it("should render properly", () => {
    render(<Navbar />);
    const hElement = screen.getByTestId("title");
    expect(hElement).toHaveTextContent("Trello");
  });

  it("should render properly as h6", () => {
    const { container } = render(<Navbar />);
    const h6 = container.querySelector("h6");
    expect(h6.innerHTML).toBe("Trello");
  });

  it("should render properly contain toolbar", () => {
    const { getByTestId } = render(<Navbar />);
    expect(getByTestId("toolbar")).toBeTruthy();
  });

  it("should match with snapshot", () => {
    const { container } = render(<Navbar />);
    expect(container).toMatchSnapshot();
  });
});
