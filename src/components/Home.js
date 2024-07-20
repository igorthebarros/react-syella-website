import React from 'react'
import ContactMe from './ContactMe'
import Banner from './Banner'

const Home = () => {
    return (
        <div>
            <section id='contactMe'>
                <Banner />
                
                <h2>Entre em contato!</h2>
                <ContactMe />
            </section>
        </div>
    )
}

export default Home