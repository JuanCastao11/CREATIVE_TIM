import { NavLink } from "react-router-dom"

const icons = () => {
  return (
    <>
    <header className="head">
        <h1>CT CREATIVE TIM</h1>
        <nav>
            <ul className="">

                <li className="">
                    <NavLink to="/" className=""></NavLink>
                    ICONS
                </li>
                <li className="">
                    <NavLink to="/maps"></NavLink>
                    MAPS
                </li>
                <li>NOTIFICATIONS</li>
                <li>USER PROFILE</li>
                <li>TABLE LIST</li>
                <li>TYPOGRAPHY</li>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default icons