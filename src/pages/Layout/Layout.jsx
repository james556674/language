import { useState } from "react"
import { Outlet, Link } from "react-router-dom"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faBook, faFont, faGear, faGraduationCap, faHouse, faXmark } from "@fortawesome/free-solid-svg-icons"
import { faBell, faCopyright } from "@fortawesome/free-regular-svg-icons"
import jamesLogo from "../../../public/jamesLogo.png"

const MainContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: fixed;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .6rem 1rem;
  color: #fff;
  background: #FFD0D0;
  border-radius: 0 0 .7rem .7rem;
  

  .icon {
    font-size: 1.5rem;
    cursor: pointer;
    color: #626262;
  }
`

const LogoContainer = styled.div`

  .image-container {
    width: 50px;
    height: 50px;
  }
`

const LinksContainer = styled.div`
  position: absolute;
  width: 100%;
  height: fit-content;
  bottom: ${({ show }) => show ? "0" : "-100%"};
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, .1);

  ${'' /* make diplay animation from bottom to top */}
  transition: bottom .3s;


  .header {
    display: flex;
    justify-content: flex-start;
    padding: .8rem 1rem;
    background: #FFD0D0;
    box-shadow: 0 2px 5px rgba(0, 0, 0, .1);
    border-radius: .7rem .7rem 0 0;

    .icon {
      color: #626262;
      font-size: 1.5rem;
      cursor: pointer;
    }
  }

  .links-content-container {
    display: flex;
    flex-direction: column;
    text-align: right;

    .link {
      padding: 1rem 1rem 1rem 34%;
      width: 100%;
      color: #CA8787;
      font-size: 1.5rem;
      border-bottom: 2px double #CA8787;

      display: flex;
      align-items: center;


      .icon {
        margin-right: 1rem;
      }
    }
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #CA8787;
    padding: 2rem 0;



    .icon {
      margin-right: .5rem;
    }

    p {
      font-size: .9rem;
    }
  
  }
`

const links = [
  {
    to: "/",
    label: "Home",
    icon: faHouse,
    isDisable: false,
  },
  {
    to: "/letters",
    label: "Basic Sounds",
    icon: faFont,
    isDisable: false,
  },
  {
    to: "/test",
    label: "Start Review",
    icon: faGraduationCap,
    isDisable: true,
  },
  {
    to: "/manager",
    label: "Notes",
    icon: faBook,
    isDisable: true,
  },
  {
    to: "/settings",
    label: "Settings",
    icon: faGear,
    isDisable: true,
  },
]

const Layout = () => {
  const [openSidebar, setOpenSidebar] = useState(false)
  return (
    <MainContainer>
      <Header
        isSidebarOpen={openSidebar}
      >
        <FontAwesomeIcon
          className="icon"
          icon={faBars}
          onClick={(e) => {
            // prevent bubble
            e.stopPropagation()
            setOpenSidebar(!openSidebar)

          }}
        />
        <LogoContainer>
          <div className="image-container">
            <img src={jamesLogo} alt="James Logo" />
          </div>
        </LogoContainer>
        <FontAwesomeIcon className="icon" icon={faBell} />
      </Header>

      <div id="detail">
        <Outlet />
      </div>
      <LinksContainer
        show={openSidebar}
      >
        <div className="header">
          <FontAwesomeIcon
            className="icon" 
            icon={faXmark} 
            onClick={() => setOpenSidebar(false)}
          />
        </div>
        <div className="links-content-container">
          {links.map(({ to, label, icon, isDisable }) => (
            <>
              <Link
                key={to}
                to={to}
                className="link"
                style={{
                  opacity: isDisable ? .5 : 1,
                  pointerEvents: isDisable ? "none" : "auto",
                }}
                disabled={isDisable}
              >
                <FontAwesomeIcon icon={icon} className="icon" />
                {label}
              </Link>
            </>
          ))}
        </div>
        <div className="footer">
          {/* copy right james */}
          <FontAwesomeIcon className="icon" icon={faCopyright} />
          <p>2024 James v1.0.1</p>
        </div>
      </LinksContainer>
    </MainContainer>
  )
}

export default Layout