import { Outlet } from "react-router-dom"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faBell } from "@fortawesome/free-regular-svg-icons"
import jamesLogo from "../../../public/jamesLogo.png"

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
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


export default function Root() {
  return (
    <MainContainer>
      {/* all the other elements */}
      <Header>
        <FontAwesomeIcon className="icon" icon={faBars} />
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
    </MainContainer>
  );
}