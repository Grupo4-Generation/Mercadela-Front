import CardProduto from "../../components/produto/cardProduto/CardProduto";
import SlideHome from "../../components/slide/home/SlideHome";

function Home() {

  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-center">
          <SlideHome />
        </div>

        <h1 className="text-3xl text-[#DB5413] font-bold pb-7 text-center">Produtos</h1>

        <div className="flex space-x-3 items-center justify-between">
          <CardProduto nomeProduto="Mouse Logitech" precoProduto={199.90}fotoProduto="https://cdn.discordapp.com/attachments/1139577278892875784/1175053140085706792/Mouse_Logitech.png" />
          <CardProduto nomeProduto="Pente" precoProduto={12.98}fotoProduto="http://cdn.discordapp.com/attachments/1139577278892875784/1177225007064158290/Pente.png" />
          <CardProduto nomeProduto="Pente" precoProduto={12.98}fotoProduto="http://cdn.discordapp.com/attachments/1139577278892875784/1177225007064158290/Pente.png" />
          <CardProduto nomeProduto="Pente" precoProduto={12.98}fotoProduto="http://cdn.discordapp.com/attachments/1139577278892875784/1177225007064158290/Pente.png" />
        </div>
      </div>
    </>
  )
}

export default Home;
