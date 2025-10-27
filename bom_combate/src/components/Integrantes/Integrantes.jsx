import { useState } from 'react';
import Style from './Integrantes.module.css';
import FotoBanda from '../../assets/img/bom_combate_cinza.jpeg';

export default function Integrantes() {
    const [integranteAtivo, setIntegranteAtivo] = useState(null);

    const membros = [
        {
            id: 1,
            nome: "Jamaica",
            idade: "50 anos",
            instrumento: "Bateria",
            cor: "#FF6B6B",
            icone: ""
        },
        {
            id: 2,
            nome: "Danone", 
            idade: "50 anos",
            instrumento: "Baixo e Vocal",
            cor: "#4ECDC4",
            icone: ""
        },
        {
            id: 3,
            nome: "Michel",
            idade: "40 anos",
            instrumento: "Guitarra e Vocal",
            cor: "#45B7D1",
            icone: ""
        },
        {
            id: 4,
            nome: "Boca",
            idade: "50 anos", 
            instrumento: "Guitarra e Vocal",
            cor: "#96CEB4",
            icone: ""
        }
    ];

    return (
        <section id='integrantes' className={Style.integrantes}>
            <div className={Style.fundo}></div>
            
            <div className={Style.conteudo}>
                <div className={Style.cabecalho}>
                    <h1 className={Style.titulo}>
                        <span className={Style.tituloDestaque}>A Banda</span>
                    </h1>
                    <p className={Style.subtitulo}>Conheça os integrantes do Bom Combate</p>
                </div>

                <div className={Style.areaPrincipal}>
                    <div className={Style.areaImagem}>
                        <div className={Style.containerImagem}>
                            <img 
                                src={FotoBanda} 
                                alt="Banda Bom Combate - Jamaica, Danone, Michel e Boca" 
                                className={Style.imagemBanda}
                            />
                            <div className={Style.efeitoImagem}></div>
                        </div>
                    </div>

                    <div className={Style.areaInformacoes}>
                        <div className={Style.gradeIntegrantes}>
                            {membros.map((membro) => (
                                <div 
                                    key={membro.id}
                                    className={`${Style.cartaoIntegrante} ${
                                        integranteAtivo === membro.id ? Style.ativo : ''
                                    }`}
                                    onMouseEnter={() => setIntegranteAtivo(membro.id)}
                                    onMouseLeave={() => setIntegranteAtivo(null)}
                                    style={{ '--cor-destaque': membro.cor }}
                                >
                                    <div className={Style.cabecalhoCartao}>
                                        <div className={Style.iconeIntegrante}>
                                            {membro.icone}
                                        </div>
                                        <div>
                                            <h3 className={Style.nomeIntegrante}>{membro.nome}</h3>
                                            <div className={Style.infoIntegrante}>
                                                <span className={Style.idadeIntegrante}>{membro.idade}</span>
                                                <span className={Style.instrumentoIntegrante}>
                                                    {membro.instrumento}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={Style.efeitoHover}></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}