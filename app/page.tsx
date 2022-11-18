import './home.sass';

export default function Home() {
  return (
    <div className="main-container font-Montserrat">
      <div className="home-wrapper">
        <div className="home__meeting">
          <div className="home__wrap-title">
            <h1 className="home-title">Meeting room</h1>
            <div className="home__title-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_304_4)">
                  <path d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V18C1 18.55 1.45 19 2 19H14C14.55 19 15 18.55 15 18V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C15.05 13.06 15.06 13.08 15.07 13.09C16.21 13.92 17 15.03 17 16.5V18C17 18.35 16.93 18.69 16.82 19H22C22.55 19 23 18.55 23 18V16.5C23 14.17 18.33 13 16 13Z" fill="black" />
                </g>
                <defs>
                  <clipPath id="clip0_304_4">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Group
            </div>
          </div>
          <div className="home__details">
            <div className="flex">
              <div className="home__details-leave">
                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" x="0" y="0" version="1.1" viewBox="0 0 29 29" xmlSpace="preserve">
                  <path fill="white" d="m20.914 17.743-2.091 1.178a1.319 1.319 0 0 1-1.58-.217l-6.979-6.979a1.32 1.32 0 0 1-.217-1.58l1.178-2.091a1.978 1.978 0 0 0-.325-2.37L7.766 2.55a1.978 1.978 0 0 0-2.798 0L3.545 3.972a5.276 5.276 0 0 0-.793 6.446l.714 1.19a41.36 41.36 0 0 0 14.946 14.631l.141.081c2.102 1.201 4.699.851 6.382-.831l1.486-1.486a1.978 1.978 0 0 0 0-2.798l-3.136-3.136a1.978 1.978 0 0 0-2.371-.326z" />
                </svg>
                Leave the room
              </div>
              <div className="home__details-invite"><span>+</span> Invite a participant</div>
            </div>
            <div className="home__details-time">
              <svg className="animate-pulse" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="25" cy="25" r="25" fill="#e36a6d" />
              </svg>
              12:34
            </div>
          </div>
          <div className="home__meeting-content">
            <div className="home__content-participant home__content-active"></div>
            <div className="home__content-participant"></div>
            <div className="home__content-participant"></div>
            <div className="home__content-participant"></div>
          </div>
        </div>
        <div className="home-chat"></div>
      </div>
    </div>
  )
}
