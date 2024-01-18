import { Button } from "./ui/button";
import Container from "./ui/container";

const Hero = () => {
  return (
    <section className=" py-12">
      <Container>
        <div className="flex justify-between">
          <div>
            <p>Mwaura Mbugua</p>
            <h1 className="max-w-4xl text-6xl font-semibold">
              Making beautiful stuff for the web
            </h1>
            <h2 className="py-4 text-2xl font-medium">UI/UX</h2>
            <h2 className="py-4 text-2xl font-medium">Front-End </h2>
            <h2 className="py-4 text-2xl font-medium">Back-End</h2>
          </div>
          <div>Image</div>
        </div>
        <div className="mt-8">
          <Button
            variant="outline"
            size="lg"
            className="rounded-lg border-orange-600 py-6 text-xl"
          >
            {`Let's Talk`}
          </Button>
          {/* <button
            className="rounded-full border border-slate-400 bg-slate-950
          px-6 py-3 text-2xl text-zinc-300"
          ></button> */}
        </div>
      </Container>
    </section>
  );
};

export default Hero;
