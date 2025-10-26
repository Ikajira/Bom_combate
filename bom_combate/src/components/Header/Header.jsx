import Style from './Header.module.css'
import Logo from '../../assets/img/logo.jpeg'

export default function Header() {
    return (
        <header>
            <div className={Style.logo}>
                <img src={Logo} alt="Logo Bom Combate" />
                <p>BomCombate</p>
            </div>

            <div className={Style.links}>
                <a href="#">Shows</a>
                <a href="#">Integrantes</a>
                <a href="#">Sobre</a>
            </div>
        </header>
    )
}