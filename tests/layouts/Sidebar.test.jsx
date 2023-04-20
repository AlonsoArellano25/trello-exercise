import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Sidebar } from "../../components/layouts";

describe("Tests in  <Sidebar />", () => {
  // it("should render properly as h4", () => {
  //   const { container } = render(<Sidebar />);
  //   const h4 = container.querySelector("h4");
  //   expect(h4.innerHTML).toBe("Menú");
  // });

  // it("should render properly contain mainBox", () => {
  //     const { getByTestId } = render(<Sidebar />);
  //     expect(getByTestId("list-menu")).toBeTruthy();
  //   });

  it("should match with snapshot", () => {
    const { container } = render(<Sidebar />);
    expect(container).toMatchSnapshot();
  });
});
