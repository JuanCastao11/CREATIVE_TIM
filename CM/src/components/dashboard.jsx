import React from 'react'
import "../components/utils.css"
import {PiNut} from "react-icons/pi"
import {AiOutlineReload} from "react-icons/ai"
import {BiStopwatch} from "react-icons/bi"


const dashboard = () => {
  return (
    <section className="bg-white w-full"> 
    <div className="w-full  bg-[#001d3d] h-[30%] border-l-2">
      <img src="../src/assets/img/img4.png" alt="" className=' w-full h-full' />
    </div>
    <div className="w-full flex justify-center ">
    <section className='c2 h-[60vh] flex text-white absolute w-[80%] top-[25%]'>
        <div className="container-1 w-[45.33%] flex justify-center">
          <div className="global w-[80%] h-[35vh] bg-white rounded-[10px] shadow-2xl">
            <p className='global-sales text-[20px] ml-4 mt-4 text-black'><PiNut  className='float-right mr-8 border w-10 h-8 rounded-full border-black text-[10px]'/>Global Sales</p>
            <h1 className="title2 text-[26px] ml-4 text-black">Shipped Products</h1>
            <img src="../src/assets/img/img1.png" alt="" className=' h-[60%] w-full' />
            <div className="icons flex">
              <button className='flex '> <AiOutlineReload className='text-black ml-4'/><p className='text-black ml-2'>Just Updated</p> </button>
            </div>   
          </div>
        </div>
        <div className="container-2 w-[45.33%] h[35vh] flex justify-center">
        <div className="All  w-[80%] h-[35vh] bg-white rounded-[10px] shadow-2xl">
        <p className='global-sales text-[20px] ml-4 mt-4 text-black'><PiNut className='float-right mr-8 border w-10 h-8 rounded-full border-black text-[10px]'/>2023 Sales</p>
            <h1 className='title2 text-[26px] ml-4 text-black'>All Products</h1>
            <img src="../src/assets/img/img2.png" alt=""  className=' h-[60%] w-full'/> 
            <div className="icons flex">
              <button className='flex'> <AiOutlineReload className='text-black ml-4'/><p className='text-black ml-2'>Just Updated</p> </button>
            </div>   
        </div>
        </div>
        <div className="container-3 w-[45.33%] flex justify-center">
        <div className="24_hours  w-[80%] h-[35vh] bg-white rounded-[10px] shadow-2xl">
        <p className='global-sales text-[20px] ml-4 mt-4 text-black'><PiNut className='float-right mr-8 border w-10 h-8 rounded-full border-black text-[10px]'/>Email Statiscs</p>
            <h1 className="title2 text-[26px] ml-4  text-black">24 Hours Performance</h1>
            <img src="../src/assets/img/img3.png" alt="" className='h-[60%] w-full' />
            <div className="icons flex">
             <button className='flex'><BiStopwatch className='text-black ml-4 '/> <p className='text-black ml-2'> Last 7 days</p></button>  
            </div>
        </div>
        </div>
      </section>
      <section className='w-full flex justify-center'>
      <div className="container-1 w-[50%] flex justify-center">
          <div className="global w-[80%] h-[35vh] bg-white rounded-[10px] shadow-2xl mt-[41%]">
            <p className='global-sales text-[20px] ml-4 mt-4 text-black'><PiNut  className='float-right mr-8 border w-10 h-8 rounded-full border-black text-[10px]'/>Backend Development</p>
            <h1 className="title2 text-[26px] ml-4 text-black">Task</h1>
            <p className='raya border-b-2 m-4'></p>
            <p className=' ml-4'>Insertar datos a una base de datos centrada en la venta de productos de contruccion</p>
            <p className='raya border-b-2 m-4'></p>
            <p className='raya border-b-2 m-4'></p>
            <p className=' ml-4'>Crear una base de datos donde el tema principal es la venta de productos de contruccion</p>
            <p className='raya border-b-2 m-4'></p>
            
          </div>
        </div>
        <div className="container-1 w-[50%] flex justify-center">
          <div className="global w-[80%] h-[35vh] bg-white rounded-[10px] shadow-2xl  mt-[41%]">
          <p className='global-sales text-[20px] ml-4 mt-4 text-black'><PiNut  className='float-right mr-8 border w-10 h-8 rounded-full border-black text-[10px]'/>All Persons List</p>
            <h1 className="title2 text-[26px] ml-4 text-black">Employees Stats</h1>
            <div className="stats flex ml-4 justify-center">
            <table border="" className='table m-4'>
    <tr className='tr'>
        <th className=''>Name</th>
        <th className=''>Country</th>
        <th className=''>City</th>
        <th className=''>Salary</th>
    </tr>
    <tr className='tr'>
        <td>John Doe</td>
        <td>USA</td>
        <td>New York</td>
        <td>$50,000</td>
    </tr>
    <tr className='tr'>
        <td>Maria García</td>
        <td>Spain</td>
        <td>Madrid</td>
        <td>€45,000</td>
    </tr>
  
</table>
            </div>
          </div>
        </div>
        


      </section>
    </div>
    </section>
  )

}

export default dashboard
