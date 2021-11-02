//import { InputGroup, FormControl } from 'react-bootstrap'
import { SuggestionGroup, useSuggestion } from "./useSuggestion";

type SuggestionsProp = {
  suggestionsGroups: SuggestionGroup[];
  currentFilter?: string;
  onSelection: (selectedItem: string) => void;
};

const SuggestionsList: React.FC<SuggestionsProp> = ({ suggestionsGroups, currentFilter, onSelection }) => {
  const filterdSuggestionGroups = useSuggestion(currentFilter, suggestionsGroups);

  const onItemSelection = (e: React.MouseEvent<HTMLLIElement>) => onSelection(e.currentTarget.innerText);

  const onItemKeyDown = (e: React.KeyboardEvent<HTMLLIElement>) => {
    if (e.code === "Enter") {
      onSelection(e.currentTarget.innerText);
    }
  };

  return (
    <ul className="suggestions">
      {filterdSuggestionGroups.map((group) => (
        <div key={group.title}>
          <li className="suggestionTitle">{group.title}</li>
          {group.suggestions.map((suggestion) => (
            <li
              className="suggestionItem"
              key={suggestion}
              tabIndex={0}
              onClick={onItemSelection}
              onKeyDown={onItemKeyDown}
            >
              {suggestion}
            </li>
          ))}
        </div>
      ))}
    </ul>
  );
};

export default SuggestionsList;
