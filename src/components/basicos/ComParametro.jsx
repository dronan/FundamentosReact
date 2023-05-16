export default function CompParametro(props) {
  const status = props.nota >= 7 ? "Aprovado" : "em Recuperação";
  return (
    <div>
      <h2>{props.titulo}</h2>
      <p>
        O aluno <b>{props.aluno}</b> tem nota <b>{props.nota}</b> e está{" "}
        <b>{status}</b>!
      </p>
    </div>
  );
}
