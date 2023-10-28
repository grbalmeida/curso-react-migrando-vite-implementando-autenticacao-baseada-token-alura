import { createBrowserRouter } from 'react-router-dom';

import SelecaoCliente from 'paginas/cadastro/SelecaoCliente';
import Interesses from 'paginas/cadastro/Interesses';
import LayoutBaseCadastro from 'paginas/cadastro/LayoutBaseCadastro';
import LayoutBase from 'paginas/LayoutBase';
import DadosPessoais from 'paginas/cadastro/DadosPessoais';
import Concluido from 'paginas/cadastro/Concluido';
import PaginaInicial from 'paginas/PaginaInicial';
import Pagina404 from 'paginas/erros/Pagina404';
import Login from 'paginas/Login/Login';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutBase />,
        ErrorBoundary: Pagina404,
        children: [
            {
                path: '',
                element: <PaginaInicial />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'cadastro',
                element: <LayoutBaseCadastro />,
                children: [
                    {
                        path: '',
                        element: <SelecaoCliente />
                    },
                    {
                        path: 'interesses',
                        element: <Interesses />
                    },
                    {
                        path: 'dados-pessoais',
                        element: <DadosPessoais />
                    },
                    {
                        path: 'concluido',
                        element: <Concluido />
                    }
                ]
            }
        ],
    }
]);