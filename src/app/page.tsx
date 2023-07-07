export default function Home() {
  return (
    <main className="flex items-center justify-center w-full h-full">
      <div className="w-full my-auto max-w-7xl px-2 flex items-center justify-between">
        <div className="w-[380px]">
          <h1 className="text-[40px] text-gray-01 font-bold leading-[120%]">
            Ops, esta página não foi encontrada
          </h1>
          <p className="text-gray-01 text-[20px] mt-6 leading-[140%]">
            Parece que você se perdeu... Tente voltar para a página anterior ou acessar a home.
          </p>

          <div className="flex gap-5 mt-12">
            <button className="bg-blue rounded-full text-[14px] text-gray-02 py-3 px-6 uppercase hover:bg-blue-light ease-in-out duration-75">Voltar</button>
            <button className="bg-blue rounded-full text-[14px] text-gray-02 px-6 uppercase hover:bg-blue-light ease-in-out duration-75">Ir para a home</button>
          </div>

        </div>
        <div className="flex items-center">
          <h1 className="text-gray-02 text-9xl text-purple font-semibold relative left-16">4</h1>
          <iframe src="https://lottie.host/?file=ab7a5c4d-d0de-4877-be5e-8cffedab2bf1/f7kJBYBWYz.json"></iframe>
          <h1 className="text-gray-02 text-9xl text-purple font-semibold relative right-16">4</h1>
        </div>
      </div>
    </main>
  )
}