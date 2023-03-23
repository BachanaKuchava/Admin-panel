import React from 'react'
import './style.css';
import { Link } from 'react-router-dom';



function Sidebar() {
    return (
        <div className='bg-white sidebar p-2 '>
            <div className='my-2'>
                <i className='bi bi-bootstrap-fill me-3 fs-4'></i>
                <span className='brand-name fs-4'>Settings</span>
            </div>
            <hr className='text-darker' />
            <div className='list-group list-group-flush'>
                <Link className='list-group-item py-2'>
                    <i className='bi bi-speedometer2 fs-5 me-3'></i>
                    <span >Dashboard</span>
                </Link>

                <a className='list-group-item py-2' href='/'>
                    <i className='bi bi-house fs-5 me-3'></i>
                    <span >Home </span>
                </a>

                <a className='list-group-item py-2' href='/games' >
                    <i className='bi bi-table fs-5 me-3'></i>
                    <span >Games </span>
                </a>


                <Link className='list-group-item py-2'>
                    <i className='bi bi-clipboard-data fs-5 me-3'></i>
                    <span >Report </span>
                </Link>

                <Link className='list-group-item py-2'>
                    <i className='bi bi-people fs-5 me-3'></i>
                    <span >Customers </span>
                </Link>

                <Link className='list-group-item py-2'>
                    <i className='bi bi-power fs-5 me-3'></i>
                    <span >Logout </span>
                </Link>

            </div>

        </div>
    )
}

export default Sidebar
