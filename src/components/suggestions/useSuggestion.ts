import { useMemo } from "react";

export type SuggestionGroup = {
  title: string;
  suggestions: string[];
};

export function useSuggestion(
  currentFilter: string | undefined,
  suggestionsGroups: SuggestionGroup[]
): SuggestionGroup[] {
  const filterdSuggestionGroups = useMemo(() => {
    if (currentFilter) {
      const filterLowerCase = currentFilter.toLowerCase();
      return suggestionsGroups.flatMap((group) => filterGroup(group, filterLowerCase));
    } else {
      return suggestionsGroups;
    }
  }, [suggestionsGroups, currentFilter]);

  return filterdSuggestionGroups;
}

function filterGroup(group: SuggestionGroup, filterLowerCase: string): SuggestionGroup | [] {
  const newGroup: SuggestionGroup = {
    title: group.title,
    suggestions: group.suggestions.filter((item) => item.toLowerCase().includes(filterLowerCase)),
  };

  if (newGroup.suggestions.length === 0) {
    return [];
  } else {
    return newGroup;
  }
}
