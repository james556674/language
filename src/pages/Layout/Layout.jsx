import { useState } from "react"
import { Outlet, Link } from "react-router-dom"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"
import { faBell } from "@fortawesome/free-regular-svg-icons"
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
  background: #FFEFEF;
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
  height: 100%;
  top: ${({ show }) => show ? "50px" : "100%"};
  background: #fff;
  border-radius: 0 0 .7rem .7rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, .1);

  ${'' /* make diplay animation from bottom to top */}
  transition: top .5s;


  .header {
    display: flex;
    justify-content: flex-start;
    padding: .8rem 1rem;
    border-bottom: 1px solid #e8e7e8;

    .icon {
      color: #707070;
      font-size: 1.5rem;
    }
  }
`

const Layout = () => {
  const [openSidebar, setOpenSidebar] = useState(true)
  return (
    <MainContainer>
      <Header>
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
      </LinksContainer>
    </MainContainer>
  )
}

export default Layout