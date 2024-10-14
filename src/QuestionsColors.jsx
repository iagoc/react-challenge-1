import React from 'react'

const QuestionsColors = () => {

  const [color, setColor] = React.useState()
  const [userAnswer, setUserAnswer] = React.useState()
  const [answer, setAnswer] = React.useState()
  const [alter, setAlter] = React.useState([])

  function getRandomColor() {
    const random = (Math.random() * 0xffffff >>> 32).toString(16)
    const color = new Array(6)
      .fill("")
      .map(() => random[Math.floor(Math.random() * random.length)])
      .join("")

    return `#${color}`
  }

  //console.log(colorCodes);

  const generateColors = () => {
    const actualColor = getRandomColor()
    setColor(actualColor)
    setAlter(
      [actualColor, getRandomColor(), getRandomColor()].sort(
        () => 0.5 - Math.random()
      )
    )
  }

  React.useEffect(() => { //alterar para useCallback?
    generateColors()
  }, [])

  function handleClick({ target }) {
    setUserAnswer()
    setUserAnswer(target.innerText)
  }

  function handleSubmit(event) {
    event.preventDefault()
    color === userAnswer ? setAnswer(true) : setAnswer(false)
    generateColors()
  }

  //const boxColor = color[Math.floor(Math.random() * color.length)]
  // get 3 codes
  // use one of them to be the bg box color (app)
  // create three bottons w them

  console.log(color)
  return (
    <section>
      {/* <BoxColor color={color[0]} /> */}
      <div style={{ margin: '.5rem', backgroundColor: `${color}` }} className="boxBg" />

      <form onSubmit={handleSubmit}>
        {alter.map((item, index) => <button style={{ margin: '.5rem' }} key={index} onClick={handleClick}>{item}</button>)}
      </form>

      {answer && userAnswer && <p>Correct!</p>}
      {!answer && userAnswer && <p>Incorrect!</p>}

    </section>
  )
}

export default QuestionsColors
