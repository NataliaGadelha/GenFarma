function Footer() {

    const data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-vermelho-claro text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                            GenFarma Natália Gadelha | Copyright: {data}
                        </p>
                    <p className='text-lg'>Acesse minhas redes sociais</p>
                    <div className='flex gap-2'>
                            <a href="https://www.linkedin.com/in/natalia-gadelha" target="_blank">
                                <img
                                    src="https://img.icons8.com/?size=100&id=447&format=png&color=FFFFFF"
                                    alt="ícone"
                                    className="h-12 w-12 ml-auto"
                                />
                            </a>
                            <a href="https://github.com/NataliaGadelha" target="_blank">
                            <img
                                    src="https://img.icons8.com/?size=100&id=12598&format=png&color=FFFFFF"
                                    alt="ícone"
                                    className="h-12 w-12 ml-auto"
                                />
                            </a>
                            <a href="https://discord.com/users/1049519666248298586" target="_blank">
                                <img
                                    src="https://img.icons8.com/?size=100&id=gxdxl0oMFoSA&format=png&color=FFFFFF"
                                    alt="ícone"
                                    className="h-12 w-12 ml-auto"
                                />
                            </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer