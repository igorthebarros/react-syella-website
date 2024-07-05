import React, { useState } from 'react';
import '../WhatsApp.css'

const WhatsApp = () => {

    const [showPopUp, setShowPopUp] = useState(false)

    const handleButtonClick = () => {
        setShowPopUp(true)
    }

    const handleNoClick = () => {
        setShowPopUp(false)
    }

    const handleYesClick = () => {
        window.open('https://api.whatsapp.com/send/?phone=5541988258888&text=Oi%2C+Syella!&type=phone_number&app_absent=0')
        setShowPopUp(false)
    }

    return (
        <div className='whatsapp'>
            <button 
                className='whatsapp-button'
                onClick={handleButtonClick}>
                <img 
                    className='whatsApp-logo'
                    src={`${process.env.PUBLIC_URL}/WhatsAppIcon.png`}
                    alt='WhatsApp'>
                </img>
            </button>
            {showPopUp && (
                <div className='popUp'>
                    <p>Quer me chamar direto no WhatsApp?</p>
                    <button className='popUp-button' onClick={handleYesClick}>Sim</button>
                    <button className='popUp-button' onClick={handleNoClick}>Não</button>
                </div>
            )}
        </div>
    )
}

export default WhatsApp