import Style from './Footer.module.css'
import Logo from '../../assets/img/logo.jpeg'

export default function Footer(){
    return(
        <footer>
           <div className={Style.copyright}><p>&copy 2025 BomCombate. Todos os direitos reservados.</p></div>
           <div className={Style.logofooter}><img src={Logo} alt="Logo da Banda Bom Combate" /></div>
        </footer>
    )
}