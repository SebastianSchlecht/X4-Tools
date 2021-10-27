import { Table, InputGroup, FormControl } from 'react-bootstrap'
import StationModuleSelector from './StationModuleSelector'
import { FaEllipsisV, FaTrash } from 'react-icons/fa'
import { useState } from 'react'

const StationModules: React.FC = () => {
    const [count, setCount] = useState(1)

    return (
        <div>
            <Table className='table-hover table-sm small'>
                <thead>
                    <tr>
                        <th>Module</th>
                        <th style={{'width': '20%'}}>Count</th>
                        <th style={{'width': '5%'}}></th>
                        <th style={{'width': '5%'}}></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><StationModuleSelector></StationModuleSelector></td>
                        <td>
                            <InputGroup size='sm'>
                                <FormControl placeholder='(Select)' type='number' min='0' value={count} onChange={(e) => setCount(Number(e.target.value))}></FormControl>
                            </InputGroup>
                        </td>
                        <td><FaEllipsisV/></td>
                        <td><FaTrash/></td>
                    </tr>
                    <div>Some dummy text</div>
                </tbody>
            </Table>
        </div>
    )
}

export default StationModules