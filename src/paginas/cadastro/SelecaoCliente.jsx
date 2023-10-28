import { Link as RouterLink } from 'react-router-dom';
import { Row, Col } from 'react-grid-system';

import cliente from './assets/cliente.png';
import freela from './assets/freela.png';
import { Link } from 'componentes/Link/Link';
import { Tipografia } from 'componentes/Tipografia/Tipografia';
import CabecalhoCadastro from 'componentes/CabecalhoCadastro/CabecalhoCadastro';
import { useCadastroUsuarioContexto } from 'contexto/CadastroUsuario';

const SelecaoCliente = () => {
    const { setPerfil } = useCadastroUsuarioContexto();

    return (
        <div style={{ textAlign: 'center' }}>
            <CabecalhoCadastro
                titulo="Crie seu cadastro"
                subtitulo="Como podemos te ajudar?"
            />
            <Row>
                <Col md={6} sm={12}>
                    <RouterLink to="interesses" onClick={() => setPerfil('cliente')}>
                        <img src={cliente} alt="" />
                        <Tipografia variante="body" componente="body">
                            Sou cliente e preciso de um freela!
                        </Tipografia>
                    </RouterLink>
                </Col>
                <Col md={6} sm={12}>
                    <img src={freela} alt="" />
                    <Tipografia variante="body" componente="body">
                        Sou um freela e preciso de clientes!
                    </Tipografia>
                </Col>
            </Row>
            <div>
                <Tipografia variante="body2" componente="body2">
                    Já tem conta?
                </Tipografia>
                <p>
                    <Link variante="secundaria">
                        <RouterLink to="/login">
                            Faça login!
                        </RouterLink>
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default SelecaoCliente;