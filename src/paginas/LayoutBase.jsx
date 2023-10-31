import { Outlet, Link as RouterLink } from 'react-router-dom';
import { Col, Container, Row } from 'react-grid-system';

import { ArmazenadorToken } from 'utils/ArmazenadorToken';
import { Cabecalho } from 'componentes/Cabecalho/Cabecalho';
import { FreelandoLogo } from 'componentes/Icones/FreelandoLogo';
import { Link } from 'componentes/Link/Link';
import { Tipografia } from 'componentes/Tipografia/Tipografia';
import { Rodape } from 'componentes/Rodape/Rodape';
import { ListaInline } from 'componentes/Lista/ListaInline';
import { ItemListaInline } from 'componentes/Lista/ItemListaInline';
import { IconeWhatsApp } from 'componentes/Icones/IconeWhatsApp';
import { IconeTwitch } from 'componentes/Icones/IconeTwitch';
import { IconeInstagram } from 'componentes/Icones/IconeInstagram';
import { IconeTwitter } from 'componentes/Icones/IconeTwitter';
import { useSessaoUsuarioContext } from 'contexto/SessaoUsuario';

const LayoutBase = ({ children }) => {

    const { usuarioEstaLogado, logout } = useSessaoUsuarioContext();

    return (
        <>
            <Cabecalho>
                <Container>
                    <Row align="center">
                    <Col>
                        <FreelandoLogo />
                    </Col>
                    <Col style={{ textAlign: 'right' }}>
                      {
                        usuarioEstaLogado ?
                          <Link onClick={logout}>
                            Logout
                          </Link>
                          :
                          <RouterLink to="/login">
                            <Link>Login</Link>
                          </RouterLink>
                      }
                    </Col>
                    </Row>
                </Container>
            </Cabecalho>

            <Outlet />
            {children}

            <Rodape>
            <Container>
              <Row align="center">
                <Col>
                  <FreelandoLogo height={40} width={176} />
                  <Tipografia variante="legenda" componente="legenda">Desenvolvido por Alura. Projeto fictício sem fins comerciais.</Tipografia>
                </Col>
                <Col style={{ textAlign: 'right' }}>
                  <Tipografia variante="legenda" componente="legenda">Acesse nossas redes:</Tipografia>
                  <ListaInline>
                    <ItemListaInline>
                      <a href="/" aria-label="Link para o WhatsApp">
                        <IconeWhatsApp />
                      </a>
                    </ItemListaInline>
                    <ItemListaInline>
                      <a href="/" aria-label="Link para a Twitch">
                        <IconeTwitch />
                      </a>
                    </ItemListaInline>
                    <ItemListaInline>
                      <a href="/" aria-label="Link para o Instagram">
                        <IconeInstagram />
                      </a>
                    </ItemListaInline>
                    <ItemListaInline>
                      <a href="/" aria-label="Link para o Twitter">
                        <IconeTwitter />
                      </a>
                    </ItemListaInline>
                  </ListaInline>
                </Col>
              </Row>
            </Container>
          </Rodape>
        </>
    )
}

export default LayoutBase;