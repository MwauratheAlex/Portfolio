const SectionHeading = (props: { title: string }) => (
  <div className="flex flex-col items-center gap-4">
    <h1 className="text-4xl font-bold text-orange-500 opacity-80">
      {props.title}
    </h1>
  </div>
);
export default SectionHeading;
