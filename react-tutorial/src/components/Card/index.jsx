import { useState } from "react"

const Card = () => {
  const [count, setCount] = useState(0)

  const handleCount = () => {
    setCount(count + 1)
  }

  const handleResetCount = () => {
    setCount(0)
  }

  return (
    <div className="card">
      <button onClick={handleCount}>
        O contador está em {count}
      </button>
      <button onClick={handleResetCount}>
        Resetar contador
      </button>
      <p>
        Divirta-se com os contadores
      </p>
    </div>
  )
}

export default Card;