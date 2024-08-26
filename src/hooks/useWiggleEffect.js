 import { useState } from "react"


   const useWiggleEffect = (ref) => {
    const [pos, setPos] = useState({x: 0, y: 0})

    const mouseMove = (e) => {
        const {clientX, clientY} = e
        const { width, height, top, left } = ref.current.getBoundingClientRect()
        const x = clientX - (left + width / 2 )
        const y = clientY - (top + height / 2 )
        setPos({x,y})
      }

    const mouseLeave = () => {
        setPos({x: 0, y: 0})
      }

      const { x, y } = pos

     return {mouseMove, mouseLeave, x, y}
}

export default useWiggleEffect
