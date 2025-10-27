import Style from './Sobre.module.css'

export default function Sobre(){
    return(
        <section id='sobre' className={Style.sobre}>
            <div className={Style.container}>
                <div className={Style.img_container}>
                    <div className={Style.img_sobre}></div>
                    <div className={Style.img_overlay}></div>
                </div>
                <div className={Style.texto_container}>
                    <h2 className={Style.titulo}>Nossa Missão</h2>
                    <p className={Style.texto_sobre}>
                        Nossa missão é levar fé, energia 
                        e propósito através da música. Misturamos 
                        rock, pop e adoração pra falar de vida, 
                        coragem e transformação. Acreditamos que a fé é ação
                        , e que cada canção pode inspirar alguém a lutar o 
                        bom combate todos os dias.
                    </p>
                    <div className={Style.destaque}>
                        <span>Fé • Música • Transformação</span>
                    </div>
                </div>
            </div>
        </section>
    )
}