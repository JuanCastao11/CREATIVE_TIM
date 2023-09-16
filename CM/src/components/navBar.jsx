import React from 'react'
import { NavLink } from 'react-router-dom'
import "../components/utils.css"
import {BiCube} from "react-icons/bi"
import {FaReact} from "react-icons/fa"
import {LiaMapSolid} from "react-icons/lia"
import {IoMdNotificationsOutline} from "react-icons/io"
import {BiUser} from "react-icons/bi"
import {CiBoxList} from"react-icons/ci"
import {LuType} from "react-icons/lu"


const navBar = () => {
  return (
    <>
     <header className= "bg-[#000814] w-[20%] h-[110vh] ">
    <NavLink to="/">
     <h1 className=" title text-center p-[40px] text-white text-[30px]"><span className= " float-left">CT</span>CREATIVE TIM</h1>
     </NavLink>
     <p className='barra border-b-2'></p>
      <nav className=" flex justify-center">
        <ul className='text inline-block text-white text-[14px] mt-7 '>
          <li className='hover:bg-[#001D3D] rounded-[30px]'>
            <NavLink to="/" className="flex">
              <BiCube className='logos text-[25px] mr-4'/>
            DASHBOARD
            </NavLink>
          </li>
          <li className='hover:bg-[#001D3D] rounded-[30px]'>
            <NavLink to="icons" className="flex">
              <FaReact className='logos text-[25px] mr-4'/>
            ICONS
            </NavLink>
          </li>
          <li className='hover:bg-[#001D3D] rounded-[30px]'>
            <NavLink to="/maps" className="flex" >
              <LiaMapSolid className='logos text-[25px] mr-4'/>
            MAPS
            </NavLink>
          </li>
          <li className='hover:bg-[#001D3D] rounded-[30px]'>
            <NavLink to="/notifications" className="flex">
              <IoMdNotificationsOutline className='logos text-[25px] mr-4'/>
            NOTIFICATIONS
            </NavLink>
          </li>
          <li className='hover:bg-[#001D3D] rounded-[30px]'>
            <NavLink to="user-profile" className="flex">
              <BiUser className='logos text-[25px] mr-4'/>
              USER PROFILE
            </NavLink>
          </li>
          <li className='hover:bg-[#001D3D] rounded-[30px]'> 
          <NavLink to="table-list" className="flex">
            <CiBoxList className='logos text-[25px] mr-4'/>
            TABLE LIST 
          </NavLink>
          </li>
          <li className='hover:bg-[#001D3D]  rounded-[30px]'>
            <NavLink to="type" className="flex">
              <LuType className='logos text-[25px] mr-4'/>
              TYPOGRAPHY
            </NavLink>

          </li>
        </ul>
      </nav>

     </header>
    </>
  )
}

export default navBar
