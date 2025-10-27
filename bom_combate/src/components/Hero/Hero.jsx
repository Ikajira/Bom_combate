import Style from './Hero.module.css'

export default function Hero() {
    return (
        <section id='hero' className={Style.hero}>
            <div className={Style.fundoHero}></div>
            
            <div className={Style.conteudoHero}>
                <div className={Style.textoPrincipal}>
                    <h1 className={Style.titulo}>Por ele vivemos, Nele cremos.</h1> 
                    <p className={Style.subtitulo}>Tocando almas com instrumentos, vamos a luta!</p>
                </div>
                
                <div className={Style.rolagemIndicador}>
                    <div className={Style.setinha}></div>
                </div>
            </div>
        </section>
    )
}