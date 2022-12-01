'use client'

import Participant from '../components/Participant';
import HomeNavigation from '../components/HomeNavigation';
import classNames from 'classnames';
import './home.sass';

export default function Home() {
  return (
    <div className="main-container font-Montserrat">
      <div className="home__meeting">
        <HomeNavigation />
        <div className="home__meeting-content">
          <div className="home__meeting-active">
            <Participant active={true} />
          </div>
          <div className="home__meeting-participants">
            <Participant active={false} />
          </div>
        </div>
        <div className="home__meeting-group">
          <Participant active={false} />
          <Participant active={false} />
          <Participant active={false} />
          <Participant active={false} />
        </div>
      </div>
    </div>
  )
}
