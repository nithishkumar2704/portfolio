export default function SectionHeading({
  index,
  title,
  id,
}: {
  index: string;
  title: string;
  id: string;
}) {
  return (
    <div className="mb-10 flex items-baseline gap-4 border-b border-line pb-4">
      <span className="font-mono text-sm text-accent">{index}</span>
      <h2 id={id} className="text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}
