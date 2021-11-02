//import { InputGroup, FormControl } from 'react-bootstrap'
import { SuggestionGroup, useSuggestion } from "./useSuggestion";

type SuggestionsProp = {
  suggestionsGroups: SuggestionGroup[];
  currentFilter?: string;
};

const SuggestionsList: React.FC<SuggestionsProp> = ({ suggestionsGroups, currentFilter }) => {
  const filterdSuggestionGroups = useSuggestion(currentFilter, suggestionsGroups);

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
