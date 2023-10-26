import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='d-flex justify-content-center align-items-center flex-column mt-2 shadow w-100 bg-info'>
            <div className='footer-content justify-content-evenly w-100 mt-5' style={{ display: 'flex' }}>
                <div className='website d-flex flex-column' style={{paddingLeft:'50px'}}>
                    <div style={{ fontWeight: 'bold' }}>{' '}Project-Fair</div>
                    <div className='content'>
                        Designed and built with all the love in the world by the Media team with the help of our contributors.</div>
                    <div>Code licensed Media, docs CC BY 3.0.</div>
                    <div>Currently v1.0.0.</div>
                </div>
                <div className='links d-flex flex-column '  style={{paddingLeft:'50px'}}>
                    <div style={{ fontWeight: 'bold' }}>Links</div>
                    <div className='d-flex flex-column'>
                        <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}>Home</Link>
                        <Link to={'/dashboard'} style={{ textDecoration: 'none', color: 'black' }}>Dashboard</Link>
                        <Link to={'/projects'} style={{ textDecoration: 'none', color: 'black' }}>Projects</Link>
                    </div>
                </div>
                <div className='guides d-flex flex-column'  style={{paddingLeft:'50px'}}>
                    <div style={{ fontWeight: 'bold' }}>Guides</div>
                    <div className='d-flex flex-column'>
                        <Link to={'https://react.dev/'} style={{ textDecoration: 'none', color: 'black' }}>React</Link>
                        <Link to={'https://react-bootstrap.github.io/'} style={{ textDecoration: 'none', color: 'black' }}>React Bootstrap</Link>
                        <Link to={'https://reactrouter.com/en/main'} style={{ textDecoration: 'none', color: 'black' }}>Routing</Link>

                    </div>

                </div>
                <div className='contact d-flex flex-column ' style={{paddingLeft:'50px' ,paddingRight:'50px'}}>
                    <div style={{ fontWeight: 'bold' }}>Contact Us</div>
                    <div className='d-flex'>
                        <input type="text" className='rounded'/>
                        <button type="button" class="btn btn-primary rounded ms-2">Search</button>
                    </div>
                    <div>
                        <Link to={'/'} className='mx-2' style={{ textDecoration: 'none', color:'black' }}><i class="fa-brands fa-linkedin" style={{ color: 'black' }}></i></Link>
                        <Link to={'/'} className='mx-3' style={{ textDecoration: 'none', color: 'black' }}><i class="fa-brands fa-twitter" style={{ textDecoration: 'none', color: 'black' }}></i></Link>
                        <Link to={'/'} className='mx-3' style={{ textDecoration: 'none', color: 'black' }}><i class="fa-brands fa-facebook-f" style={{ textDecoration: 'none', color: 'black' }}></i></Link>
                        <Link to={'/'} className='mx-2' style={{ textDecoration: 'none', color: 'black' }}><i class="fa-regular fa-envelope" style={{ textDecoration: 'none', color: 'black' }}></i></Link>

                    </div>
                </div>

            </div>
            <p className='mt-5'>Copyright © 2023 Media Player. Built with React.</p>
        </div>
  )
}

export default Footer
