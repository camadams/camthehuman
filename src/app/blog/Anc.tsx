export default function Anch({ text, link, addSpaceAtEnd = true }: { text: string; link: string; addSpaceAtEnd?: boolean }) {
  return (
    <>
      {" "}
      <a className="underline text-blue-600" href={link} target="_blank">
        {text}
      </a>
      {addSpaceAtEnd ? " " : ""}
    </>
  );
}
