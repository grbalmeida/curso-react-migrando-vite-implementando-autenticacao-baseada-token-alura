import { Link as RouterLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { Col, Container, Row } from 'react-grid-system';
import { Card } from 'componentes/Card/Card';
import { Tipografia } from 'componentes/Tipografia/Tipografia';
import { Botao } from 'componentes/Botao/Botao';
import LayoutBase from '../LayoutBase';
import erro404 from './assets/erro-404.png';

const ImagemEstilizada = styled.img`
    max-width: 100%;
`;

const Pagina404 = () => {
    return (
        <LayoutBase>
            <Container>
                <Row justify="center">
                    <Col xxx={6} xxl={6} xl={6} lg={6} md={8} sm={12} style={{ marginTop: '48px' }}>
                        <Card>
                            <Tipografia variante="h1" componente="h1">
                                Ops... Página não encontrada :(  
                            </Tipografia>
                            <figure>
                                <ImagemEstilizada src={erro404} />
                            </figure>
                            <Tipografia variante="body" componente="body">
                                Não encontramos a página que você está buscando, mas temos muitas outras para você navegar!
                            </Tipografia>
                            <div style={{ textAlign: 'center' }}>
                                <RouterLink to='/'>
                                    <Botao variante="secundaria">
                                        Voltar para a home
                                    </Botao>
                                </RouterLink>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </LayoutBase>
    )
}

export default Pagina404;