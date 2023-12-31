import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Cadastro from "./pages/cadastro/Cadastro";
import Sobre from "./pages/sobre/Sobre";
import Login from "./pages/Login/Login";
import Contato from "./pages/contato/Contato";
import PageProduto from "./pages/produto/ProdutoDinamico";
import FormularioCategoria from "./components/categoria/formularioCategoria/FormularioCategoria";
import ListaCategorias from "./components/categoria/listaCategoria/ListaCategoria";
import Produtos from "./pages/produto/Produtos";
import { ToastContainer } from "react-toastify";
import LoadCategoria from "./components/categoria/LoadCategoria";
import LoadContato from "./pages/contato/LoadContato";
import EditarProduto from "./pages/produto/crudProduto/EditarProduto";
import LoadProduto from "./pages/produto/LoadProduto";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <AuthProvider>
        <ToastContainer/>
          <BrowserRouter>
            <Navbar />
            <div className="flex flex-grow items-center justify-center mt-7">
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/produto/:id" element={<PageProduto />} />
                <Route path="/produtos" element={<Produtos />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/cadastroProduto" element={<EditarProduto/>} />
                <Route path="/categoria" element={<ListaCategorias />} />
                <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
                <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
                <Route path="/loadProduto" element={< LoadProduto/>} />
                <Route path="/loadCategoria" element={<LoadCategoria />} />
                <Route path="/loadContato" element={<LoadContato />} />
              </Routes>
            </div>
            <Footer />
          </BrowserRouter>
        </AuthProvider>
      </div>
    </>
  );
}

export default App;