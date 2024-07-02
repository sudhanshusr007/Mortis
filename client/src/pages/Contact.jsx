import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Query from '../components/Query';

import FAQs from '../components/FAQs';
import Ask from '../components/Ask';
const Contact = () => {
  return (
    <>
    <Navbar />
     <Ask />
     <br />
    <FAQs />
    <Query />
<Footer />
    </>
  )
}

export default Contact