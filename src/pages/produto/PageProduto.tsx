import { useContext, useEffect, useState } from "react";
import ModalProduto from "../../components/produto/modal/modalProduto/ModalProduto";
import ModalDeletarProduto from "../../components/produto/modal/modalDeletarProduto/ModalDeletarProduto";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { buscar } from "../../services/Service";
import "../../models/Produto";
import Produto from "../../models/Produto";

function PageProduto() {
    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token
    const navigate = useNavigate()
    const [quantidade, setQuantidade] = useState<number>(1)
    const [produto, setProduto] = useState<Produto >({}as Produto)
    async function buscarPorId(id: string) {
        try {
            await buscar(`/produto/${id}`, setProduto, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                alert('O token expirou, favor logar novamente')
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado')
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    const [, setMensagem] = useState('');
    let handleClick = () => {
        setMensagem('Compra efetuada com sucesso!');
        alert('Compra efetuada com sucesso!');
    }
    let adicionar = () => {
        setQuantidade (quantidade + 1);
    }
    let subtrair = () => {
        if (quantidade > 1) {
            setQuantidade(quantidade - 1);
        } else {
            alert('Quantidade mínima atingida!');
        }
    }
    let precoFormatado = produto.precoProduto.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      });

    return (

        <>
            <div className="flex m-0 items-center justify-center font-fontProjeto">
                <img className="shadow-2xl max-w-sm rounded-lg object-cover object-center bg-white-500" src={produto.fotoProduto} alt="product" />
                <div className="flex flex-col flex-wrap pl-5">
                    <div className="my-5 flex ml-4 align-top">
                        <p className="align-top font-bold text-5xl text-justify text-[#d95613]">{produto?.nomeProduto}</p>
                    </div>
                    <div className="ml-4 mr-6">
                        <p className="text-justify max-w-md">{produto.descricaoProduto}</p>
                    </div>
                    <div className="my-5 flex ml-4">
                        <p className="font-bold text-5xl text-justify text-[#13dbb7]">{precoFormatado}</p>
                    </div>
                    <div className="flex justify-around pl-4">
                        <div className="flex justify-around items-center py-4 px-5 box-border border-[#bd5c46] border-4 rounded-full text-2xl font-semibold hover:scale-10 w-35">
                            <button onClick={subtrair} className="px-2 text-[#bd5c46]">-</button>
                            <span className="px-2">{quantidade}</span>
                            <button onClick={adicionar} className="px-2 text-[#13dbb7] ">+</button>
                        </div>
                        <div className="my-2 flex ml-4">
                            <button onClick={handleClick} className="rounded-full cursor-pointer bg-[#13dbb7] px-4 text-2xl font-semibold hover:scale-105 text-white">Adicionar ao carrinho</button>
                        </div>
                    </div>
                </div>
                <div className="flex h-96 justify-between flex-col">
                    <ModalProduto />
                    <ModalDeletarProduto />
                </div>
            </div>
        </>
    )
}

export default PageProduto