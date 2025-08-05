import { Link } from "react-router-dom";
import type Categoria from "../../../models/Categoria";
import { PencilLine, Trash } from "@phosphor-icons/react";

interface CardCategoriasProps {
  categoria: Categoria;
}

function CardCategorias({ categoria }: CardCategoriasProps) {
  return (
    <div className="flex flex-col justify-between rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white">
      <header className="flex items-center justify-between py-3 px-6 font-zain text-floresta text-3xl">
        Categoria
                    <img
                        src="https://img.icons8.com/?size=100&id=11934&format=png&color=000000"
                        alt="ícone"
                        className="h-8 w-8 ml-auto "
                    />
      </header>
        <hr className="border-slate-300 mx-4" />
      <div className="p-5 flex-1">
        <h4 className='text-2xl font-semibold text-vermelho font-zain'>{categoria.nome}</h4>
        <p className="text-2xl text-gray-500 font-zain">{categoria.descricao || "Sem descrição"}</p>
      </div>

      <div className="flex gap-3 px-4 pb-4 pt-2">
        <Link to={`/editarcategoria/${categoria.id}`} className="flex-grow">
          <button
            type="button"
            className="w-full flex items-center justify-between py-1.5 px-5 rounded-lg font-zain text-2xl  font-medium text-white bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-400 transition-all shadow-sm"
          >
            Editar
            <PencilLine size={20} weight="light" />
          </button>
        </Link>

        <Link to={`/deletarcategorias/${categoria.id}`} className="flex-grow">
          <button
            type="button"
            className="w-full flex items-center justify-between py-1.5 px-5 rounded-lg font-zain text-2xl font-medium text-white bg-gradient-to-r from-rose-500 to-red-600 hover:brightness-90 transition-all shadow-sm"
          >
            Deletar
            <Trash size={20} weight="regular" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CardCategorias;