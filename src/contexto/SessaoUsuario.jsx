import createContext, { useContext } from 'react';
import axios from 'axios';

const SessaoUsuarioContext = createContext({
    usuarioEstaLogado: false,
    login: () => null,
    logout: () => null,
    perfil: {}
});

export const useSessaoUsuarioContext = () => {
    return useContext(SessaoUsuarioContext);
}

export const SessaoUsuarioProvider = ({ children }) => {

    const login = (email, senha) => {
        axios
            .post('http://localhost:8080/auth/login', {
                email,
                senha
            })
            .then(resposta => console.log(resposta))
            .catch(erro => console.error(erro));
    };
    
    const value = {
        login
    };
    
    return (
        <SessaoUsuarioContext.Provider value={value}>
            {children}
        </SessaoUsuarioContext.Provider>
    )
}