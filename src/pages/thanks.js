import React from 'react'
import Layout from '../components/layout'
import { GoHome } from "react-icons/go";
import { Link } from 'gatsby';

const thanks = () => {
    return (
        <Layout
            servicesPath = {'../#services'}
            aboutPath = {'../#about'}
            projectsPath = {'../#projects'}
            contactPath = {'../#contact'}
        >
            <div className="thanks">
                <div className="text">
                    <h1>Thank you!</h1>
                    <p>We promise we'll get back with you very soon!</p>
                </div>
                <Link to="/" className="back">
                    <GoHome className="back-ic"/>
                </Link>
            </div>
        </Layout>
    )
}

export default thanks
