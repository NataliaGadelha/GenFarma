/* eslint-disable @typescript-eslint/no-explicit-any */
import { type ChangeEvent, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import type Categoria from "../../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { ArrowsCounterClockwise } from "@phosphor-icons/react";
import ToastAlerta from "../../../utils/ToastAlerta";

function FormCategorias() {
    const navigate = useNavigate();

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria);
        } catch (error: any) {
            console.error(error);
            ToastAlerta("Erro ao buscar categoria:","erro")
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id);
        }
    }, [id]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        });
    }

    function retornar() {
        navigate("/categorias");
    }

    async function enviarCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        if (id !== undefined) {
            try {
                await atualizar(`/categorias`, categoria, setCategoria);
                ToastAlerta('A categoria foi atualizada com sucesso!', "sucesso");
            } catch (error: any) {
                console.log(error)
                ToastAlerta('Erro ao atualizar a categoria.', "erro");
            }
        } else {
            try {
                await cadastrar(`/categorias`, categoria, setCategoria);
                ToastAlerta('A categoria foi cadastrada com sucesso!', "sucesso");
            } catch (error: any) {
                console.log(error)
                ToastAlerta('Erro ao cadastrar a categoria.', "erro");
            }
        }

        setIsLoading(false);
        retornar();
    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8 text-vermelho">
                {id === undefined ? 'Cadastrar Categoria' : 'Editar Categoria'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={enviarCategoria}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao" className="text-cyan-400 font-semibold">Nome da Categoria: </label>
                    <input
                        type="text"
                        placeholder="Descreva aqui sua categoria"
                        name="nome"
                        className="border-3 border-cyan-300 rounded p-2 focus:outline-none focus:border-cyan-200 focus:ring-2 focus:ring-cyan-200"
                        value={categoria.nome}
                        onChange={atualizarEstado}
                    />
                    <label htmlFor="descricao" className="text-cyan-400 font-semibold">Descrição da Categoria: </label>
                    <input
                        type="text"
                        placeholder="Descreva aqui sua categoria"
                        name="descricao"
                        className="border-3 border-cyan-300 rounded p-2 focus:outline-none focus:border-cyan-200 focus:ring-2 focus:ring-cyan-200"
                        value={categoria.descricao}
                        onChange={atualizarEstado}
                    />
                </div>
                <button
                    className="w-1/3 flex items-center justify-between py-1.5 px-5 rounded-lg font-medium text-white bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-400 shadow-sm mx-auto"
                    type="submit"
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
                        <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
                    )}
                    <ArrowsCounterClockwise size={32} />
                </button>
            </form>
        </div>
    );
}

export default FormCategorias;
