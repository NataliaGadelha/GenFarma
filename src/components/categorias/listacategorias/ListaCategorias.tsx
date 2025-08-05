/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";
import type Categoria from "../../../models/Categoria";
import { buscar } from "../../../services/Service";
import CardCategorias from "../cardcategorias/CardCategorias";
import ToastAlerta from "../../../utils/ToastAlerta";

function ListaCategorias() {

    const [categorias, setCategorias] = useState<Categoria[]>([])

    async function buscarCategorias() {
        try {
            await buscar('/categorias', setCategorias)
        } catch (error: any) {
            console.error("Erro ao buscar categorias:", error);
            ToastAlerta("Ocorreu um erro ao carregar as categorias. Tente novamente mais tarde.", "erro");
        }
    }

    useEffect(() => {
        buscarCategorias()    
    }, [categorias.length])
    
    return (
        <>
        {categorias.length === 0 && (
            <div className="flex items-center justify-center h-screen">
            <DNA
            visible={true}
            height="200"
            width="200"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper mx-auto"
        />
            </div>
        )}
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                       {categorias.map((categoria) => (
                            <CardCategorias key={categoria.id} categoria={categoria} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListaCategorias;