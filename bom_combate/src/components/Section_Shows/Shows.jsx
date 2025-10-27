// Shows.jsx
import Style from './Shows.module.css'
import Spotfy from '../../assets/img/Spotify.png'
import Insta from '../../assets/img/instagram.png'
import Linktr from '../../assets/img/cadeia.png'

export default function Shows() {
    return (
        <>
            <main id='shows' className={Style.shows}>
                <h1 className={Style.h1clipes}>Clipes</h1>
                <section className={Style.youtube}>

                    <div className={Style.videos}>
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/XHK5VhQfyVU"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </div>

                    <div className={Style.videos}>
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/OIdezwjA-8g"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </div>
                </section>

                <h1 className={Style.h1shows}>Shows</h1>
                <section className={Style.youtube2}>

                    <div className={Style.videos2}>
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/eMzjL0yBqAk"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </div>

                    <div className={Style.videos2}>
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/1NlHcPBg5io"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </div>
                </section>

                <h1 className={Style.h1redes}>Gostou? nos acompanhe em nossas redes sociais:</h1>
                <section className={Style.redes}>
                    <div className={Style.logo_redes}><a href="https://linktr.ee/bomcombate"><img src={Linktr} alt="Linktree"/></a></div>
                    <div className={Style.logo_redes}><a href="https://www.instagram.com/bom_combate_oficial/"><img src={Insta} alt="Instagram"/></a></div>
                    <div className={Style.logo_redes}><a href="https://open.spotify.com/intl-pt/artist/7hh4j7gOD5x6WKkbx6ADsN?si=CtH9Z-pPT4WHx0HkZUar8Q&utm_source=whatsapp&nd=1&dlsi=42c150b02f224d13"><img src={Spotfy} alt="Spotify"/></a></div>
                </section>
            </main>
        </>
    )
}