import { useEffect } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Row, Col } from 'react-grid-system';

import { Botao } from '../../componentes/Botao/Botao';
import GrupoRadio from '../../componentes/Radio/GrupoRadio';
import CabecalhoCadastro from '../../componentes/CabecalhoCadastro/CabecalhoCadastro';
import { useCadastroUsuarioContexto } from '../../contexto/CadastroUsuario';

const opcoes = [
    {
        valor: 1,
        label: 'TI e Programação',
    },
    {
        valor: 2,
        label: 'Design e Multimídia',
    },
    {
        valor: 3,
        label: 'Revisão',
    },
    {
        valor: 4,
        label: 'Tradução',
    },
    {
        valor: 5,
        label: 'Transcrição',
    },
    {
        valor: 6,
        label: 'Marketing',
    },
];

const Interesses = () => {
    const {
        usuario,
        setInteresse,
        possoSelecionarInteresse
    } = useCadastroUsuarioContexto();

    const navegar = useNavigate();

    useEffect(() => {
        if (!possoSelecionarInteresse()) {
            navegar('/cadastro');
        }
    }, [navegar, possoSelecionarInteresse]);

    return (
        <>
            <CabecalhoCadastro
                titulo="Crie seu cadastro"
                subtitulo="Qual a área de interesse?"
            />
            <GrupoRadio
                opcoes={opcoes}
                valor={usuario.interesse}
                onChange={setInteresse}
            />
            <Row>
                <Col>
                    <RouterLink to="/cadastro">
                        <Botao variante="secundaria">Anterior</Botao>
                    </RouterLink>
                </Col>
                <Col>
                <div style={{ textAlign: 'right' }}>
                    <RouterLink to="/cadastro/dados-pessoais">
                        <Botao variante="primaria">Próxima</Botao>
                    </RouterLink>
                </div>
                </Col>
            </Row>
            
        </>
    )
}

export default Interesses;