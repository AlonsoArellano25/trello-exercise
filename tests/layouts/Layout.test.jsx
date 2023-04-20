import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Layout } from "../../components/layouts";

describe("Tests in  <Layout />", () => {
  it("should match with snapshot", () => {
    const { container } = render(<Layout />);
    expect(container).toMatchSnapshot();
  });
  it("should render properly contain mainBox", () => {
    const { getByTestId } = render(<Layout />);
    expect(getByTestId("main-box")).toBeTruthy();
  });
  it("should render properly contain box", () => {
    const { getByTestId } = render(<Layout />);
    expect(getByTestId("box")).toBeTruthy();
  });
});
