import React from 'react'
import Activity from '../../section/Activity/Activity';
import Check from '../../section/Check/Check';
import FocusArea from './../../section/FocusArea/FocusArea';
import About from './../../section/About/About';
import NewsLetter from './../../component/NewsletterComponent/Newsletter';
import Hero from './../../section/Hero/Hero';
import UpcomingEvent from '../../section/UpcomingEvent/UpcomingEvent';
import Testimonial from '../../section/Testimonial/Testimonial';
import EventApplication from '../../component/EventApplication/Event';
import InnovationIdea from '../../component/InnovationIdea/Idea';

const Home = () => {
  return (
    <div>

      <Hero />
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <InnovationIdea />
      </div>
      {/* <EventApplication id='application'/> */}
      <UpcomingEvent id="upcoming"/>
      <About id="about"/>
      <Activity id="activity" />
      <Testimonial />
      <NewsLetter id="contact"/>
      {/* <Check /> */}
    </div>
  )
}

export default Home
