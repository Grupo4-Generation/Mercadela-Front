import  { useContext, useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import { AuthContext } from '../../../../contexts/AuthContext';
import Produto from '../../../../models/Produto';
import { buscar } from '../../../../services/Service';
import CardProduto from '../../cardProduto/CardProduto';



function Listaprodutos() {
  const [produtos, setprodutos] = useState<Produto[]>([]);

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarprodutos() {
    try {
      await buscar('/produto', setprodutos, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes('403')) {
        alert('O token expirou, favor logar novamente')
        handleLogout()
      }
    }
  }

  useEffect(() => {
    buscarprodutos();
  }, [produtos.length]);
  return (
    <>
      {produtos.length === 0 && (
        <Dna
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {produtos.map((produto) => (
          <CardProduto key={produto.id} fotoProduto={produto.fotoProduto} nomeProduto={produto.nomeProduto} precoProduto={produto.precoProduto}/>
        ))}
      </div>
    </>
  );
}

export default Listaprodutos;