import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Categoria from "../../../models/Categoria";
import { buscar, deletar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";
import { CheckCircle, XCircle } from "@phosphor-icons/react";
import ToastAlerta from "../../../utils/ToastAlerta";

function DeletarCategoria() {
  const navigate = useNavigate();
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria);
    } catch (error) {
      console.error(error);
      ToastAlerta("Erro ao buscar categoria", "erro");
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  async function deletarCategoria() {
    setIsLoading(true);

    try {
      await deletar(`/categorias/${id}`);
      ToastAlerta("Categoria apagada com sucesso", "sucesso");
    } catch (error) {
      console.error(error);
      ToastAlerta("Erro ao deletar a categoria.", "erro");
    }

    setIsLoading(false);
    retornar();
  }

  function retornar() {
    navigate("/categorias");
  }

  return (
    <div className="container w-1/3 mx-auto">
      <h1 className="text-5xl text-center my-4 font-zain">Deletar categoria</h1>
      <p className="text-center text-2xl font-zain font-semibold mb-4">
        Você tem certeza de que deseja apagar a categoria a seguir?
      </p>
      <div className="flex flex-col justify-between rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white">
        <header className="flex items-center justify-between py-3 px-6  text-4xl font-zain text-floresta">
          Categoria
          <img
            src="https://img.icons8.com/?size=100&id=11934&format=png&color=000000"
            alt="ícone"
            className="h-8 w-8 ml-auto"
          />
        </header>
        <hr className="border-slate-300 mx-4" />
        <div className="p-5 flex-1">
          <h4 className='text-2xl font-semibold text-vermelho font-zain'>{categoria.nome}</h4>
          <p className="text-2xl text-gray-500 font-zain">{categoria.descricao || "Sem descrição"}</p>
        </div>
        <div className="flex gap-3 px-4 pb-4 pt-2">
          <button
            className="w-full font-zain text-2xl flex items-center justify-between py-1.5 px-5 rounded-lg font-medium text-white 
              bg-gradient-to-r from-rose-500 to-red-600 hover:brightness-90 transition-all shadow-sm"
            onClick={retornar}
          >
            Não
            <XCircle size={32} />
          </button>
          <button
            className="w-full font-zain text-2xl flex items-center justify-between py-1.5 px-5 rounded-lg font-medium text-white 
              bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-400 
              transition-all shadow-sm"
            onClick={deletarCategoria}
          >
            {isLoading ? (
              <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              />
            ) : (
              <span>Sim</span>
            )}
            <CheckCircle size={32} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarCategoria;
