import { Link } from "react-router-dom"

function Navbar() {
  return (
    <>
    <div className="w-full flex justify-center py-4
    bg-vermelho-claro text-white">
        <div className="container flex justify-between text-lg">
            <Link to='/home' className="flex gap-1 items-center text-4xl font-bold font-cookie">
                                <img
                                    src="https://img.icons8.com/?size=100&id=V17Aey338PDh&format=png&color=FFFFFF"
                                    alt="ícone"
                                    className="h-8 w-8 ml-auto"
                                />
            GenFarma
            
            </Link>

            <div className="flex gap-8 text-lg">
              <div className="group relative inline-block">
                <Link to='/categorias' className='hover:text-red-200 transition-colors duration-300 font-zain text-3xl'>
                  Listar Categorias
                </Link>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </div>

              <div className="group relative inline-block">
                <Link to='/cadastrarcategorias' className='hover:text-red-200 transition-colors duration-300 font-zain text-3xl'>
                  Cadastrar Categoria
                </Link>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar
