import Style from './Integrantes.module.css'
import BandaI from '../../assets/img/bom_combate_cinza.jpeg'

export default function Integrantes() {
    return (
        <main id='integrantes' className={Style.integrantes}>
            <div className={Style.imagemI}>
                <img src={BandaI} alt="Banda Bom Combate em Cores Cinza e Branco" />
            </div>
        </main>
    )
}