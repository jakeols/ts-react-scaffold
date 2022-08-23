import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/slices/counterSlice'
import type { RootState } from './redux/store'
import styled from '@emotion/styled'

function App() {
  const dispatch = useDispatch()
  const counter = useSelector((state: RootState) => state.counter.value)

  return (
    <Container>
      <p>Counter {counter} </p>
      <ButtonContainer>
        <button onClick={() => dispatch(decrement())}>decrement</button>
        <button onClick={() => dispatch(increment())}>increment</button>
      </ButtonContainer>
    </Container>
  )
}

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
})

const ButtonContainer = styled.div({
  maxWidth: 200,
})

export default App
