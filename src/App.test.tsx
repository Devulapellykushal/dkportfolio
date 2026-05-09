import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { describe, expect, it } from "vitest";
import App from "@/App";

describe("App routing", () => {
  it("renders projects route content", async () => {
    render(
      <HelmetProvider>
        <MemoryRouter initialEntries={["/projects"]}>
          <App />
        </MemoryRouter>
      </HelmetProvider>,
    );

    expect(await screen.findByText("Enterprise-ready AI products and platforms")).toBeInTheDocument();
  });
});
