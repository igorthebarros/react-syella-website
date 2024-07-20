import React from 'react'
import '../css/WhoAmI.css'

const WhoAmI = () => {
    return (
        <div className="whoami-container">
            <div className="text-section">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nullam ac erat ante. Nam dapibus, justo ut ultrices pretium, neque quam condimentum elit, vel scelerisque justo mauris a mauris. Phasellus ut enim et dui gravida luctus. In hac habitasse platea dictumst. Mauris pulvinar magna sit amet risus lacinia, sed pretium urna euismod.</p>
            </div>
            <div className="mosaic-section">
                <div className="mosaic">
                    <div className='mosaic-column large'>
                        <img src={`${process.env.PUBLIC_URL}/whoami/whoami_1.png`} alt="Mosaic 1" className="mosaic-img" />
                    </div>
                    <div className='mosaic-column small'>
                        <img src={`${process.env.PUBLIC_URL}/whoami/whoami_2.png`} alt="Mosaic 2" className="mosaic-img" />
                        <img src={`${process.env.PUBLIC_URL}/whoami/whoami_3.png`} alt="Mosaic 3" className="mosaic-img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhoAmI