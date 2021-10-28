import Header from './stationCalculator/Header';
import { Card } from 'react-bootstrap'
import ModulesCard from './stationCalculator/ModulesCard';
import ResourcesCard from './stationCalculator/ResourcesCard';
import SummaryCard from './stationCalculator/SummaryCard';

import '../css/stationCalculator.css'

const StationCalculator: React.FC = () => {
    return (
        <div className='container-fluid'>
            <Header />
            <Card><Card.Body>
                <div className='row'>
                    <div className='col-12 col-lg-4'><ModulesCard></ModulesCard></div>
                    <div className='col-12 col-lg-4'><ResourcesCard></ResourcesCard></div>
                    <div className='col-12 col-lg-4'><SummaryCard></SummaryCard></div>
                </div>
            </Card.Body></Card>
        </div>
    )
}

export default StationCalculator