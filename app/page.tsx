'use client'

import Participant from '../components/Participant';
import HomeNavigation from '../components/HomeNavigation';
import './home.sass';

export default function Home() {
  return (
    <div className="main-container font-Montserrat">
      <div className="home__meeting">
        <HomeNavigation />
        <div className="home__meeting-content">
          <div className="home__meeting-participants">
            <Participant active={true} />
          </div>
          <div className="home__meeting-participants">
            <Participant active={false} />
          </div>
          <div className="home__meeting-participants">
            <Participant active={false} />
          </div>
          <div className="home__meeting-participants">
            <Participant active={false} />
          </div>
        </div>
      </div>
    </div>
  )
}
