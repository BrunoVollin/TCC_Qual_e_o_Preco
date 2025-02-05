import React from "react";
import { Routes, Route } from "react-router-dom";

import Search from '../page/search_produto/search'
import Dia from '../page/busca_do_dia/dia'
import Semana from '../page/busca_da_semana/semana'
import TelaLogin from '../page/tela_login/telaLogin'
import TelaMain from '../page/tela_main/telaMain'
import CadastroUsers from '../page/cadastro_users/cadastroUsers'
import CadastroProdutos from '../page/cadastro_produto/cadastroProduto'

export default function Routers() {
    return (
        <Routes>
            <Route exact path="/" element={<TelaLogin />} />
            <Route exact path="/CadastroUsers" element={<CadastroUsers />} />
            <Route exact path="/CadastroProdutos" element={<CadastroProdutos />} />
            <Route exact path="/Main" element={<TelaMain />} />
            <Route exact path="/Dia" element={<Dia />} />
            <Route exact path="/Semana" element={<Semana />} />
            <Route exact path="/Search" element={<Search />} />
        </Routes>
    )
}