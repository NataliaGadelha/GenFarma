import ListaCategorias from "../../components/categorias/listacategorias/ListaCategorias"

function Home() {
    return (
        <>
            <div className="bg-cyan-300 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-8xl font-bold font-cookie'>
                            GenFarma
                        </h2>
                        <p className='text-4xl justify-center font-cookie'>
                            Sua farmácia de confiança, sempre perto de você.
                        </p>

                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://encenasaudemental.com/wp-content/uploads/2021/03/Doctors-pana.png"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
            <ListaCategorias/>
        </>
    )
}

export default Home