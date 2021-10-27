import Header from './stationCalculator/Header';
import { Card } from 'react-bootstrap'
import StationModules from './stationCalculator/StationModules';
import StationResources from './stationCalculator/StationResources';
import StationSummary from './stationCalculator/StationSummary';

import '../css/stationCalculator.css'

const StationCalculator: React.FC = () => {
    return (
        <div className='container-fluid'>
            <Header />
            <Card><Card.Body>
                <div className='row'>
                    <div className='col-12 col-lg-4'><StationModules></StationModules></div>
                    <div className='col-12 col-lg-4'><StationResources></StationResources></div>
                    <div className='col-12 col-lg-4'><StationSummary></StationSummary></div>
                </div>
            </Card.Body></Card>
        </div>
    )
}

export default StationCalculator