import { renderHook } from "@testing-library/react-hooks";
import { SuggestionGroup, useSuggestion } from "./useSuggestion";

const testGroup: SuggestionGroup[] = [
  {
    title: "Animals",
    suggestions: ["Dog", "Doge", "Cat", "Zebra"],
  },
  {
    title: "Food",
    suggestions: ["Bratwurst", "Hambuger"],
  },
];

describe("suggestion filter", () => {
  test("undefined filter return complete group", () => {
    const { result } = renderHook(() => useSuggestion(undefined, testGroup));
    expect(result.current).toBe(testGroup);
  });

  test("empty filter returns complete group", () => {
    const { result } = renderHook(() => useSuggestion("", testGroup));
    expect(result.current).toBe(testGroup);
  });

  test("Dog filter contains dog and doge", () => {
    const { result } = renderHook(() => useSuggestion("dog", testGroup));
    const expectation: SuggestionGroup = { suggestions: ["Dog", "Doge"], title: "Animals" };
    expect(result.current).toContainEqual(expectation);
  });

  test("filter contains multiple categories", () => {
    const { result } = renderHook(() => useSuggestion("bra", testGroup));
    expect(result.current).toContainEqual({ suggestions: ["Zebra"], title: "Animals" });
    expect(result.current).toContainEqual({ suggestions: ["Bratwurst"], title: "Food" });
  });
});
