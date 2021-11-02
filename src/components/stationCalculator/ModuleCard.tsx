import { InputGroup, FormControl } from "react-bootstrap";
import SuggestionsList from "../suggestions/SuggestionsList";
import { FaEllipsisV, FaTrash } from "react-icons/fa";
import { FocusEvent, useState } from "react";

import "../../css/stationModuleSelector.css";
import { SuggestionGroup } from "../suggestions/useSuggestion";

const dummyPlaceholder: SuggestionGroup[] = [
  {
    title: "Animals",
    suggestions: ["Dog", "Cow", "Cat"],
  },
  {
    title: "Food Stuff",
    suggestions: ["Pizza", "Hambuger"],
  },
];

const ModuleCard: React.FC = () => {
  const [count, setCount] = useState(1);
  const [input, setInput] = useState("");
  const [suggestionVisible, setSuggestionVisible] = useState(false);

  const onBlur = (e: FocusEvent<HTMLTableRowElement, Element>) => {
    const isInside = e.currentTarget.contains(e.relatedTarget);

    if (!isInside) {
      setSuggestionVisible(false);
    }
  };

  return (
    <tr className="test" onBlur={onBlur}>
      <td>
        <div className="form-group">
          <InputGroup size="sm" onFocus={() => setSuggestionVisible(true)}>
            <FormControl
              placeholder="(Select)"
              defaultValue={input}
              onChange={(e) => setInput(e.target.value)}
            ></FormControl>
          </InputGroup>
          {suggestionVisible && <SuggestionsList suggestionsGroups={dummyPlaceholder} currentFilter={input} />}
        </div>
      </td>
      <td>
        <InputGroup size="sm">
          <FormControl
            placeholder="(Select)"
            type="number"
            min="0"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          ></FormControl>
        </InputGroup>
      </td>
      <td>
        <FaEllipsisV className="move" />
      </td>
      <td>
        <FaTrash className="clickable" />
      </td>
    </tr>
  );
};

export default ModuleCard;
