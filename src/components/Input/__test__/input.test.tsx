import { Input } from "@components/Input";
import { render, screen } from "@testing-library/react-native";
describe("Component: Input", () => {
  it("should be render input without loading", () => {
    render(<Input />);

    const activityIndicator = screen.queryByTestId("activity-indicator");
    expect(activityIndicator).toBeNull();
  });
  it("should be render input with loading", () => {
    render(<Input isLoading />);

    const activityIndicator = screen.getByTestId("activity-indicator");
    expect(activityIndicator).toBeDefined();
  });
});
