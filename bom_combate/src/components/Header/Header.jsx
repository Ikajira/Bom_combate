import Style from './Header.module.css'
import Logo from '../../assets/img/logo.jpeg'
import { useState } from 'react'

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className={Style.header}>
            <div className={Style.logo}>
                <img src={Logo} alt="Logo Bom Combate" />
                <p>BomCombate</p>
            </div>

            <div 
                className={`${Style.menuHamburguer} ${menuOpen ? Style.active : ''}`}
                onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className={`${Style.links} ${menuOpen ? Style.active : ''}`}>
                <a href="#shows" onClick={() => setMenuOpen(false)}>Shows</a>
                <a href="#integrantes" onClick={() => setMenuOpen(false)}>Integrantes</a>
                <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a>
            </div>

            {menuOpen && <div className={Style.overlay} onClick={() => setMenuOpen(false)}></div>}
        </header>
    )
}