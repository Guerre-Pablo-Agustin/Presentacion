const About = () => {
  return (
    <section className="mt-4 ">
      <h2 className="text-3xl text-center mb-3">Sobre mi</h2>
      <div className="flex w-full flex-col md:flex-row gap-3 px-8  mb-5">
      <div className="px-8">
        <img  src='../../../public/images/about.png' alt="" />
       </div>
      <div className="px-8">
      <p className="text-center mt-3">
        Me llamo Pablo Agustin Guerreño. Soy Técnico Superior en Programación y
        Análisis de Sistemas. Me interesa seguir creciendo en el desarrollo web,
        estoy buscando oportunidades como Desarrollador full stack o front end.
        Me gusta resolver problemas y aportar soluciones para mejorar la
        experiencia del usuario,trabajar en equipo para aportar mis
        conocimientos y aprender de mis compañeros. </p>
        <br />
        <p className="text-center mt-3">
          Tengo conocimientos en Next.js, React, Tailwind Css, Redux/toolkit,
          PostgreSQL, Express, Node.js y me gusta aprender nuevas tecnologías.
        </p>

        <p className="text-center mt-2">
        Este es mi portfolio: <a target="_blank" href="https://guerrepablo-portfolio.netlify.app">https://guerrepablo-portfolio.netlify.app</a> 
        </p>
      </div>
  
      </div>
    
    </section>
  );
};

export default About;
