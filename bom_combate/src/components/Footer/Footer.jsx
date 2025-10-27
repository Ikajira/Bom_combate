import Style from './Footer.module.css'
import Logo from '../../assets/img/logo.jpeg'

export default function Footer(){
    return(
        <footer className={Style.footer}>
           <div className={Style.copyright}><p>&copy; 2025 Bom Combate. Todos os direitos reservados.</p></div>
           <div className={Style.logofooter}><a href="#hero"><img src={Logo} alt="Logo da Banda Bom Combate" /></a></div>
        </footer>
    )
}