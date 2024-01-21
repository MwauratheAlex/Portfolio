const SectionHeading = (props: { title: string }) => (
  <div className="flex flex-col items-center gap-4">
    <h1 className="text-4xl font-bold">{props.title}</h1>
    {/* <h1 className="mb-8 text-5xl text-orange-400">Projects</h1> */}
    <div className="h-1 w-20 bg-orange-400"></div>
  </div>
);
export default SectionHeading;
