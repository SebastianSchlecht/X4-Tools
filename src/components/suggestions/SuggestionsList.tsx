//import { InputGroup, FormControl } from 'react-bootstrap'
import { useMemo } from "react";

type SuggestionsProp = {
  suggestionsGroups: SuggestionGroup[];
  currentFilter?: string;
};

//ToDo Replace SuggestionGroup with a exported Station type. Get them with a station provider that is DI
export type SuggestionGroup = {
  title: string;
  suggestions: string[];
};

function filterGroup(
  group: SuggestionGroup,
  filterLowerCase: string
): SuggestionGroup | [] {
  const newGroup: SuggestionGroup = {
    title: group.title,
    suggestions: group.suggestions.filter((item) =>
      item.toLowerCase().includes(filterLowerCase)
    ),
  };

  if (newGroup.suggestions.length === 0) {
    return [];
  } else {
    return newGroup;
  }
}

const SuggestionsList: React.FC<SuggestionsProp> = ({
  suggestionsGroups,
  currentFilter,
}) => {
  const filterdSuggestionGroups = useMemo(() => {
    if (currentFilter) {
      const filterLowerCase = currentFilter.toLowerCase();
      return suggestionsGroups.flatMap((group) =>
        filterGroup(group, filterLowerCase)
      );
    } else {
      return suggestionsGroups;
    }
  }, [suggestionsGroups, currentFilter]);

  return (
    <ul className="suggestions">
      {filterdSuggestionGroups.map((group) => (
        <div key={group.title}>
          <li className="suggestionTitle">{group.title}</li>
          {group.suggestions.map((suggestion) => (
            <li className="suggestionItem" key={suggestion} tabIndex={0}>
              {suggestion}
            </li>
          ))}
        </div>
      ))}
    </ul>
  );
};

export default SuggestionsList;
