import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const TopNav = () => {

    const menuData = [
        {
            path: '/' ,
            name: "Signup"
        },
        {
            path: '/' ,
            name: "About"
        },
        {
            path: '/' ,
            name: "Products"
        },
        {
            path: '/' ,
            name: "Pricing"
        },
        {
            path: '/' ,
            name: "Support"
        }
    ]

    return (
        <>
            <Navbar className="navbar" data-bs-theme="dark" fixed="top">
                <Container>
                    <Navbar.Brand href="#ZERODA" className ="brand">KARTHIK TRADER</Navbar.Brand>
                    <Nav className="ms-auto gap-3">
                        {
                            menuData.map((item)=>(
                                <Nav.Link to= {item.path} key={item.path}>
                                    <div className="list_item">{item.name}</div>
                                </Nav.Link>
                            ))
                        }
                    </Nav>
                </Container>
            </Navbar>

        </>
    );
}

export default TopNav;


