const App = () => {
  const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];

  const [cores, setCores] = React.useState(
    coresArray.reduce((acc, cores) => {
      return { ...acc, [cores.id]: '' }
    }, {})
  );


  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }

  function handleChecked(cor) {
    return cores.includes(cor);
  }


  return (
    <form>
      {coresArray.map(({ cor, index }) => (
        <label key={index}>
          <input type='checkbox' value={cor} checked={handleChecked(cor)} onChange={handleChange} />
          {cor}
        </label>
      ))}

      <ul>
        {cores.map((cor) => (
          <li key={cor}>{cor}</li>
        ))}
      </ul>
    </form>
  );
};
