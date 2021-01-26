import React from 'react'
import SanFrancisco from '../PlaceImages/SanFrancisco.jpeg'
import DalyCity from '../PlaceImages/DalyCity.jpeg'
import HMB from '../PlaceImages/HalfMoonBay.jpeg'
import SanMateo from '../PlaceImages/SanMateo.jpeg'
import Oakland from '../PlaceImages/Oakland.jpeg'
import SanLeandro from '../PlaceImages/SanLeandro.jpeg'
import Tracy from '../PlaceImages/Tracy.jpeg'
import Livermore from '../PlaceImages/Livermore.jpeg'
import Berkeley from '../PlaceImages/Berkeley.jpeg'
import Dublin from '../PlaceImages/Dublin.jpeg'
import WalnutCreek from '../PlaceImages/WalnutCreek.jpeg'
import Richmond from '../PlaceImages/Richmond.jpeg'

const MeetPlaces = ({user}) => {
    //console.log(user)
    return (
        <div>
            <h1> 🏍 Meets 🏍 </h1> 
            <div className='meets-wrapper'>
                <div className='meets-grid'>
                    <a className='navlink' href='sf_meet'>
                        <img src={SanFrancisco} alt='San Francisco' />
                        <div className='text-over-image'>San Francisco Meet</div>
                    </a>
                </div>
                <br />
                <div className='meets-grid'>
                    <a className='navlink' href='daly_city_meet'>
                        <img src={DalyCity} alt='Daly City' />
                        <div className='text-over-image'>Daly City Meet</div>
                    </a>
                </div>
                <br />
                <div className='meets-grid'>
                    <a className='navlink' href='hmb_meet'>
                        <img src={HMB} alt='Half Moon Bay' />
                        <div className='text-over-image'>HalfMoon Bay Meet</div>
                    </a>
                </div>
                <br />
                <div className='meets-grid'>
                    <a className='navlink' href='san_mateo_meet'>
                        <img src={SanMateo} alt='San Mateo' />
                        <div className='text-over-image'>San Mateo Meet</div>
                    </a>
                </div>
                <br />
                <div className='meets-grid'>
                    <a className='navlink' href='oakland_meet'>
                        <img src={Oakland} alt='Oakland' />
                        <div className='text-over-image'>Oakland Meet</div>
                    </a>
                </div>
                <br />
                <div className='meets-grid'>
                    <a className='navlink' href='san_leandro_meet'>
                        <img src={SanLeandro} alt='San Leandro' />
                        <div className='text-over-image'>San Leandro Meet</div>
                    </a>
                </div>
                <br />
                <div className='meets-grid'>
                    <a className='navlink' href='tracy_meet'>
                        <img src={Tracy} alt='Tracy' />
                        <div className='text-over-image'>Tracy Meet</div>
                    </a>
                </div>
                <br />
                <div className='meets-grid'>
                    <a className='navlink' href='livermore_meet'>
                        <img src={Livermore} alt='Livermore' />
                        <div className='text-over-image'>Livermore Meet</div>
                    </a>
                </div>
                <br />
                <div className='meets-grid'>
                    <a className='navlink' href='berkeley_meet'>
                        <img src={Berkeley} alt='Berkeley' />
                        <div className='text-over-image'>Berkeley Meet</div>
                    </a>
                </div>
                <br />
                <div className='meets-grid'>
                    <a className='navlink' href='dublin_meet'>
                        <img src={Dublin} alt='Dublin' />
                        <div className='text-over-image'>Dublin Meet</div>
                    </a>
                </div>
                <br />
                <div className='meets-grid'>
                    <a className='navlink' href='walnut_creek_meet'>
                        <img src={WalnutCreek} alt='Walnut Creek' />
                        <div className='text-over-image'>Walnut Creek Meet</div>
                    </a>
                </div>
                <br />
                <div className='meets-grid'>
                    <a className='navlink' href='richmond_meet'>
                        <img src={Richmond} alt='Richmond' />
                        <div className='text-over-image'>Richmond Meet</div>
                    </a>
                </div>
            </div> 
        </div>
    )
} 

export default MeetPlaces