import { useState } from 'react';
import Style from './Shows.module.css';
import Spotfy from '../../assets/img/spotify_contorno_preto.png';
import Insta from '../../assets/img/insta_semfundo2.png';
import Linktr from '../../assets/img/cadeia.png';

export default function Shows() {
    const [activeVideo, setActiveVideo] = useState(null);

    const videos = {
        clipes: [
            {
                id: 1,
                title: "CLIPE - Vou Correr",
                url: "https://www.youtube.com/embed/XHK5VhQfyVU"
            },
            {
                id: 2,
                title: "CLIPE - O Valor Que Voce Tem", 
                url: "https://www.youtube.com/embed/OIdezwjA-8g"
            }
        ],
        shows: [
            {
                id: 3,
                title: "Avenida Paulista - 20/06/24",
                url: "https://www.youtube.com/embed/eMzjL0yBqAk"
            },
            {
                id: 4,
                title: "Fabrica de Cultura de SBC - 13/04/25",
                url: "https://www.youtube.com/embed/vdfAuVq2C2E"
            }
        ]
    };

    const redesSociais = [
        {
            nome: "Linktree",
            icon: Linktr,
            url: "https://linktr.ee/bomcombate",
            cor: "#39e09b"
        },
        {
            nome: "Instagram", 
            icon: Insta,
            url: "https://www.instagram.com/bom_combate_oficial/",
            cor: "#E4405F"
        },
        {
            nome: "Spotify",
            icon: Spotfy, 
            url: "https://open.spotify.com/intl-pt/artist/7hh4j7gOD5x6WKkbx6ADsN",
            cor: "#1DB954"
        }
    ];

    const handleVideoClick = (videoId) => {
        if (activeVideo === videoId) {
            setActiveVideo(null);
        } else {
            setActiveVideo(videoId);
        }
    };

    const handleCloseVideo = (e) => {
        e.stopPropagation();
        setActiveVideo(null);
    };

    return (
        <main id='shows' className={Style.shows}>
            <div className={Style.overlay}></div>
            
            <div className={Style.container}>
                <section className={Style.section}>
                    <div className={Style.header}>
                        <h1 className={Style.sectionTitle}>
                            <span className={Style.titleAccent}>Clipes</span>
                        </h1>
                        <p className={Style.sectionSubtitle}>Nossos clipes oficiais</p>
                    </div>
                    
                    <div className={Style.videosGrid}>
                        {videos.clipes.map((video) => (
                            <div 
                                key={video.id} 
                                className={`${Style.videoContainer} ${activeVideo === video.id ? Style.active : ''}`}
                            >
                                {activeVideo === video.id ? (
                                    <div className={Style.videoWrapper}>
                                        <div className={Style.videoHeader}>
                                            <h3 className={Style.videoPlayingTitle}>{video.title}</h3>
                                            <button 
                                                className={Style.closeButton}
                                                onClick={handleCloseVideo}
                                                aria-label="Fechar vídeo"
                                            >
                                                ×
                                            </button>
                                        </div>
                                        <iframe
                                            src={video.url}
                                            title={`YouTube video player ${video.title}`}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className={Style.videoIframe}
                                        />
                                    </div>
                                ) : (
                                    <div 
                                        className={Style.videoPlaceholder}
                                        onClick={() => handleVideoClick(video.id)}
                                    >
                                        <div className={Style.videoThumbnail}>
                                            <div className={Style.playButton}>
                                                <div className={Style.playIcon}></div>
                                            </div>
                                        </div>
                                        <div className={Style.videoInfo}>
                                            <span className={Style.videoTitle}>{video.title}</span>
                                            <span className={Style.playText}>Clique para assistir</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                <section className={Style.section}>
                    <div className={Style.header}>
                        <h1 className={Style.sectionTitle}>
                            <span className={Style.titleAccent}>Shows</span>
                        </h1>
                        <p className={Style.sectionSubtitle}>Gravacoes ao vivo e apresentacoes</p>
                    </div>
                    
                    <div className={Style.videosGrid}>
                        {videos.shows.map((video) => (
                            <div 
                                key={video.id} 
                                className={`${Style.videoContainer} ${activeVideo === video.id ? Style.active : ''}`}
                            >
                                {activeVideo === video.id ? (
                                    <div className={Style.videoWrapper}>
                                        <div className={Style.videoHeader}>
                                            <h3 className={Style.videoPlayingTitle}>{video.title}</h3>
                                            <button 
                                                className={Style.closeButton}
                                                onClick={handleCloseVideo}
                                                aria-label="Fechar vídeo"
                                            >
                                                ×
                                            </button>
                                        </div>
                                        <iframe
                                            src={video.url}
                                            title={`YouTube video player ${video.title}`}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className={Style.videoIframe}
                                        />
                                    </div>
                                ) : (
                                    <div 
                                        className={Style.videoPlaceholder}
                                        onClick={() => handleVideoClick(video.id)}
                                    >
                                        <div className={Style.videoThumbnail}>
                                            <div className={Style.playButton}>
                                                <div className={Style.playIcon}></div>
                                            </div>
                                        </div>
                                        <div className={Style.videoInfo}>
                                            <span className={Style.videoTitle}>{video.title}</span>
                                            <span className={Style.playText}>Clique para assistir</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                <section className={Style.section}>
                    <div className={Style.header}>
                        <h1 className={Style.sectionTitle}>
                            <span className={Style.titleAccent}>Conecte-se</span>
                        </h1>
                        <p className={Style.sectionSubtitle}>Acompanhe nas redes sociais</p>
                    </div>
                    
                    <div className={Style.redesGrid}>
                        {redesSociais.map((rede) => (
                            <a 
                                key={rede.nome}
                                href={rede.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={Style.redeLink}
                                style={{ '--hover-color': rede.cor }}
                            >
                                <div className={Style.redeCard}>
                                    <div className={Style.redeIcon}>
                                        <img src={rede.icon} alt={rede.nome} />
                                    </div>
                                    <span className={Style.redeName}>{rede.nome}</span>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    )
}