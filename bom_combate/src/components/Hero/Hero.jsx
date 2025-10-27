import Style from './Hero.module.css'

export default function Hero() {
    return (
        <main className={Style.hero}>
            <div className={Style.heroContent}>
                <h1>Por ele vivo, Nele creio!</h1>
                <p>Tocando almas com instrumentos, vamos a luta!</p>
            </div>
        </main>
    )
}