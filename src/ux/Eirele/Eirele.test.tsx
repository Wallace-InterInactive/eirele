import { describe, expect, it } from "vitest";
import { Eirele } from "./Eirele.tsx";
import { render, screen } from "@testing-library/react";

describe("test the game title", () => {
  it("renders the Eirele component", () => {
    render(<Eirele />);
    expect(screen.getByTestId("eirele")).toBeTypeOf("object");
  });
});
