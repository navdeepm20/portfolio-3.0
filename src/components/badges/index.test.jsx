import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Badge from ".";

describe("Badge Component", () => {
  test("Check Badge Renders Successfully without Props", () => {
    render(<Badge />);
    const textEl = screen.getByText(/OK/);
    expect(textEl).toBeInTheDocument();
  });
  //   test("Check Badge Renders Successfully with Props", () => {
  //     render(<Badge icon="💓" text="Code" />);
  //     const textEl = screen.getByText("Code");
  //     const IconEl = screen.getByText("💓");
  //     expect(textEl).toBeInTheDocument();
  //     expect(IconEl).toBeInTheDocument();
  //   });
});
