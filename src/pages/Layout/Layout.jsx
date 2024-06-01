import { Outlet } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"


export default function Root() {
  return (
    <>
      {/* all the other elements */}
      <div className="header">
        <FontAwesomeIcon icon={faBars} />
      </div>
      
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}