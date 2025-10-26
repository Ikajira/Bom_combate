import Style from './Sobre.module.css'

export default function Sobre(){
    return(
        <main className={Style.sobre}>
            <br />
            <br />
            <br />
            <br />

            <div className={Style.img_sobre}></div>

            <p className={Style.texto_sobre}>
                Nossa missão é levar fé, energia 
                e propósito através da música. Misturamos 
                rock, pop e adoração pra falar de vida, 
                coragem e transformação. Acreditamos que a fé é ação
                , e que cada canção pode inspirar alguém a lutar o 
                bom combate todos os dias.
            </p>
        </main>
    )
}