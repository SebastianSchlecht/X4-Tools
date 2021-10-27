import { Card, Button } from 'react-bootstrap'
import { FaChartBar, FaFile, FaSave, FaFolderOpen, FaFileExport } from 'react-icons/fa'

const fc: React.FC = () => {
    return (
        <Card className='mt-2' >
            <Card.Body>
                <Button variant='primary' size='sm'><FaChartBar className='btnMargin'/>Overview</Button>
                <Button variant='info' size='sm' className='white'><FaFile className='btnMargin'/>New</Button>
                <Button variant='primary' size='sm'><FaSave className='btnMargin'/>Save</Button>
                <Button variant='primary' size='sm'><FaSave className='btnMargin'/>Save As</Button>
                <Button variant='info' size='sm' className='white'><FaFolderOpen className='btnMargin'/>Load</Button>
                <Button variant='secondary' size='sm'><FaFileExport className='btnMargin'/>Export</Button>
            </Card.Body>
        </Card>
    )
}

export default fc