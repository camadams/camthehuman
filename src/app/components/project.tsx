export default function Project({ title = "hi" }: { title?: string }) {
  return <div className="border-slate-200 border-2">{title}</div>;
}
