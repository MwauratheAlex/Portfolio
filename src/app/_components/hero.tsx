const Hero = () => {
  return (
    <section  className=" py-12">
      <div className="flex justify-between">
        <div>
          <h1 className="text-7xl max-w-4xl font-semibold">{`Welcome to Mwaura's Porfolio.`}</h1>
          <h2 className="text-2xl font-medium py-4">Fullstack Developer</h2>
          <p className="text-2xl font-medium py-4">For all your developer and engineering needs.</p>
        </div>
        <div>
          Image
        </div>
      </div>
      <div className="mt-8">
        <button 
          className="bg-slate-950 text-zinc-300 px-6 py-3
          rounded-full border border-slate-400 text-2xl">
          Contact Me
        </button>
      </div>
    </section>
  );
}

export default Hero;