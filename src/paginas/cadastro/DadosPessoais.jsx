import { useEffect } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Row, Col } from 'react-grid-system';

import { Botao } from '../../componentes/Botao/Botao';
import { CampoTexto } from '../../componentes/CampoTexto/CampoTexto';
import { ListaSuspensa } from '../../componentes/ListaSuspensa/ListaSuspensa';
import CabecalhoCadastro from '../../componentes/CabecalhoCadastro/CabecalhoCadastro';
import { useCadastroUsuarioContexto } from '../../contexto/CadastroUsuario';

const estadosBrasileiros = [
    { "text": "Acre", "value": "AC" },
    { "text": "Alagoas", "value": "AL" },
    { "text": "Amapá", "value": "AP" },
    { "text": "Amazonas", "value": "AM" },
    { "text": "Bahia", "value": "BA" },
    { "text": "Ceará", "value": "CE" },
    { "text": "Distrito Federal", "value": "DF" },
    { "text": "Espírito Santo", "value": "ES" },
    { "text": "Goiás", "value": "GO" },
    { "text": "Maranhão", "value": "MA" },
    { "text": "Mato Grosso", "value": "MT" },
    { "text": "Mato Grosso do Sul", "value": "MS" },
    { "text": "Minas Gerais", "value": "MG" },
    { "text": "Pará", "value": "PA" },
    { "text": "Paraíba", "value": "PB" },
    { "text": "Paraná", "value": "PR" },
    { "text": "Pernambuco", "value": "PE" },
    { "text": "Piauí", "value": "PI" },
    { "text": "Rio de Janeiro", "value": "RJ" },
    { "text": "Rio Grande do Norte", "value": "RN" },
    { "text": "Rio Grande do Sul", "value": "RS" },
    { "text": "Rondônia", "value": "RO" },
    { "text": "Roraima", "value": "RR" },
    { "text": "Santa Catarina", "value": "SC" },
    { "text": "São Paulo", "value": "SP" },
    { "text": "Sergipe", "value": "SE" },
    { "text": "Tocantins", "value": "TO" }
];

const DadosPessoais = () => {

    const {
        usuario,
        setNomeCompleto,
        setCidade,
        setEmail,
        setSenha,
        setSenhaConfirmada,
        setUf,
        submeterUsuario,
        possoSelecionarInteresse
    } = useCadastroUsuarioContexto();

    const navegar = useNavigate();

    const finalizarCadastro = (evento) => {
        evento.preventDefault();
        submeterUsuario();
    }

    useEffect(() => {
        if (!possoSelecionarInteresse()) {
            navegar('/cadastro');
        }
    }, [navegar, possoSelecionarInteresse]);

    return (
        <form onSubmit={finalizarCadastro}>
            <CabecalhoCadastro
                titulo="Crie seu cadastro"
                descricao="Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers. Em seguida, você poderá dar mais detalhes sobre suas demandas e sobre sua forma de trabalho."
            />
            <Row>
                <Col>
                <CampoTexto
                    titulo="Nome Completo"
                    valor={usuario.nomeCompleto}
                    onChange={setNomeCompleto}
                />
                </Col>
            </Row>
            <Row>
                <Col lg={4} md={4} sm={4}>
                <ListaSuspensa
                    titulo="Estado"
                    opcoes={estadosBrasileiros}
                    valor={usuario.uf}
                    onChange={setUf}
                />
                </Col>
                <Col lg={8} md={8} sm={8}>
                <CampoTexto
                    titulo="Cidade"
                    valor={usuario.cidade}
                    onChange={setCidade}
                />
                </Col>
            </Row>
            <Row>
                <Col>
                <CampoTexto
                    titulo="E-mail"
                    valor={usuario.email}
                    onChange={setEmail}
                    tipo="email"
                />
                </Col>
            </Row>
            <Row>
                <Col>
                <CampoTexto
                    titulo="Senha"
                    valor={usuario.senha}
                    onChange={setSenha}
                    tipo="password"
                />
                </Col>
                <Col>
                <CampoTexto
                    titulo="Repita a senha"
                    valor={usuario.senhaConfirmada}
                    onChange={setSenhaConfirmada}
                    tipo="password"
                />
                </Col>
            </Row>
            <Row>
                <Col>
                    <RouterLink to="/cadastro/interesses">
                        <Botao variante="secundaria">Anterior</Botao>
                    </RouterLink>
                </Col>
                <Col>
                <div style={{ textAlign: 'right' }}>
                    <Botao variante="primaria">Próxima</Botao>
                </div>
                </Col>
            </Row>
            
        </form>
    )
}

export default DadosPessoais;