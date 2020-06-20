import { renderHook } from "@testing-library/react-hooks";
import useOnlineStatus from "../useOnlineStatus";

describe("useOnlineStatus", () => {
  it("should return true by default", () => {
    const addSpy = jest
      .spyOn(window, "addEventListener")
      .mockImplementation(() => {});
    const removeSpy = jest
      .spyOn(window, "addEventListener")
      .mockImplementation(() => {});
    const { result } = renderHook(() => useOnlineStatus());
    expect(result.current).toBe(true);
    expect(addSpy).toBeTruthy();
    expect(removeSpy).toBeTruthy();
  });
});
