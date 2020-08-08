import React from "react";
import { render } from "@testing-library/react";
import Button from "./index";

test("Should npt allowed click button if isDisabled is present", () => {
  const { container } = render(<Button isDisabled></Button>);

  expect(container.querySelector("span.disabled")).toBeInTheDocument();
});
