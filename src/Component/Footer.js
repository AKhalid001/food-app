import React from 'react'

export const Footer = ()=> {
    let footerStyle = {
        width: '100%',
        position: "static",
        minheight: "100vh"
        
    }
    return (
        <div style={footerStyle}>
            <footer className="bg-dark text-light py-2" >
                <p className="text-center"> 
                Copyright &copy; www.Food_Zone.com 
                </p>
            </footer>
        </div>
    )
}
