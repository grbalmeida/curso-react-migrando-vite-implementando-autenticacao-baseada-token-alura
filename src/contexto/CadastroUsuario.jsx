import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const usuarioInicial = {
    perfil: '',
    interesse: '',
    nomeCompleto: '',
    uf: '',
    cidade: '',
    email: '',
    senha: '',
    senhaConfirmada: '',
};

export const CadastroUsuarioContext = createContext({
    usuario: usuarioInicial,
    erros: {},
    setPerfil: () => null,
    setInteresse: () => null,
    setNomeCompleto: () => null,
    setUf: () => null,
    setEmail: () => null,
    setSenha: () => null,
    setSenhaConfirmada: () => null,
    submeterUsuario: () => null,
    possoSelecionarInteresse: () => null
});

export const useCadastroUsuarioContexto = () => {
    return useContext(CadastroUsuarioContext);
};

export const CadastroUsuarioProvider = ({ children }) => {

    const navegar = useNavigate();
    
    const [usuario, setUsuario] = useState(usuarioInicial);

    const setPerfil = (perfil) => {
        setUsuario(estadoAnterior => ({
            ...estadoAnterior,
            perfil
        }));
    };

    const setInteresse = (interesse) => {
        setUsuario(estadoAnterior => ({
            ...estadoAnterior,
            interesse
        }));
    };

    const setNomeCompleto = (nomeCompleto) => {
        setUsuario(estadoAnterior => ({
            ...estadoAnterior,
            nomeCompleto
        }));
    };

    const setUf = (uf) => {
        setUsuario(estadoAnterior => ({
            ...estadoAnterior,
            uf
        }));
    };

    const setCidade = (cidade) => {
        setUsuario(estadoAnterior => ({
            ...estadoAnterior,
            cidade
        }));
    }

    const setEmail = (email) => {
        setUsuario(estadoAnterior => ({
            ...estadoAnterior,
            email
        }));
    };

    const setSenha = (senha) => {
        setUsuario(estadoAnterior => ({
            ...estadoAnterior,
            senha
        }));
    };

    const setSenhaConfirmada = (senhaConfirmada) => {
        setUsuario(estadoAnterior => ({
            ...estadoAnterior,
            senhaConfirmada
        }));
    };

    const submeterUsuario = () => {
        navegar('/cadastro/concluido');
    }

    const possoSelecionarInteresse = () => {
        return !!usuario.perfil;
    }

    const contexto = {
        usuario,
        setPerfil,
        setInteresse,
        setNomeCompleto,
        setUf,
        setCidade,
        setEmail,
        setSenha,
        setSenhaConfirmada,
        submeterUsuario,
        possoSelecionarInteresse
    };
    
    return <CadastroUsuarioContext.Provider value={contexto}>
        {children}
    </CadastroUsuarioContext.Provider>
}