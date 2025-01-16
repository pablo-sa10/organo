import './banner.css'
import React from 'react'

interface BannerProps {
    enderecoImagem: string
    textoAlternaltivo?: string
}

const Banner = ({enderecoImagem, textoAlternaltivo}:BannerProps) => {
    //JSX
    return (
        <header className="banner">
            {/* <img src="/images/imagens/banner.png" alt="O banner principal da página do Organo"/> */}
            <img src={enderecoImagem} alt={textoAlternaltivo}/>
        </header>
    )
}

export default Banner
