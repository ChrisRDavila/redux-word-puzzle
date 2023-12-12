import Word from './Word'
import Letters from './Letters'

function CurrentRound(props) {
  return (
    <>
      <Word 
      word='fiddle' 
      description='synonym for play'
      />
      <Letters />
    </>
  )
}

export default CurrentRound;