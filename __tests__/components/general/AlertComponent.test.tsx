import AlertComponent from "@/components/general/AlertComponent";
import "@testing-library/jest-dom";
import { act, queryByText, render, screen, waitFor } from "@testing-library/react";
import styles from "@/styles/MyAlert.module.css";

describe("Page", () => {
  it("should render alert with correct message and type", () => {
    const { getByText, container } = render(
      <AlertComponent message="Test Message" type="success" />
    );
    expect(getByText("Test Message")).toBeInTheDocument();
    expect(container.firstChild).toHaveClass(styles.success);
  });

  it("should not be in doc if empty message", () => {
    const { queryByRole } = render(<AlertComponent message="" type="info" />);
    expect(queryByRole("alert")).toBeNull();
  });

  it('should hide alert after specified duration', async() => {
    jest.useFakeTimers();
    const alert = render(<AlertComponent message="Test Message" type="success" automaticHide animationMs={2000} />);
    expect(alert.getByText("Test Message")).toBeInTheDocument();
    act(()=>{
      jest.advanceTimersByTime(2000);
    })
    await waitFor(() => {
      expect(alert.queryByText("Test Message")).not.toBeInTheDocument();
    });
  });
});
