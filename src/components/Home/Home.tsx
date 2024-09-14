
const Home = () => {
  return (
    <section className="w-full gap-3 flex flex-col md:flex-row px-8 mt-4">
        <div className="w-full md:w-[50%]  flex flex-col gap-4 items-center justify-center">
            <h1 className="text-center text-3xl font-bold">Guerreño Pablo Agustin</h1>
            <p className="text-center font-bold">Técnico superior programación y análisis de sistemas</p>
        </div>
        <div className="w-full mt-7 md:w-[50%] flex items-center justify-center">
            <img src='../../../public/images/Programmer.jpg' alt="image" className='w-full mt-4 mb-4 md:py-4 md:px-6  '/>
        </div>
    </section>
  )
}

export default Home