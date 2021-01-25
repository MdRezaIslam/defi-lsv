import { useContext } from 'react'
import { Context } from '../contexts/LfiProvider'

const useLfi = () => {
  const { lfi } = useContext(Context)
  return lfi
}

export default useLfi
