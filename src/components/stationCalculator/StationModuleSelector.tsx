import { InputGroup, FormControl } from 'react-bootstrap'
import SuggestionsList, { SuggestionGroup } from '../suggestions/SuggestionsList'
import { useState } from 'react'

import "../../css/stationModuleSelector.css"

const dummyPlaceholder: SuggestionGroup[] = [
    {
        title: 'Animals',
        suggestions: ["Dog", "Cow", "Cat"]
    },
    {
        title: 'Food Stuff',
        suggestions: ["Pizza", "Hambuger"]
    }
]

const StationModuleSelector: React.FC = () => {
    const [ input, setInput] = useState('');

    return (
        <div className="form-group">
            <InputGroup size='sm'>
                <FormControl placeholder='(Select)' defaultValue={input} onChange={ (e) => setInput(e.target.value)}></FormControl>
            </InputGroup>
            <SuggestionsList suggestionsGroups={ dummyPlaceholder } currentFilter={input} />
        </div>
    )
}

export default StationModuleSelector