import { useState } from 'react'
import './styles/App.css'
import { validateInput } from './helpers/validations'
import useWaterBucket from './hooks/useWaterBucket'

import ResultError from './components/ResultError'
import ResultTable from './components/ResultTable'

function App() {
  const [capacityBucketX, setCapacityBucketX] = useState(null)
  const [capacityBucketY, setCapacityBucketY] = useState(null)
  const [targetZ, setTargetZ] = useState(null)
  const [bestSolution, setBestSolution] = useState([])
  const [worstSolution, setWorstSolution] = useState([])
  const [equalSolution, setEqualSolution] = useState(false)

  const [error, setError] = useState('')
  const [hasResult, setHasResult] = useState(false)

  const { checkSolution, calculate } = useWaterBucket()

  const handledSubmit = (event) => {
    event.preventDefault()
    setHasResult('')
    setError(false)

    const { elements } = event.currentTarget

    const inputX = validateInput(elements, 'bucket-x')
    const inputY = validateInput(elements, 'bucket-y')
    const inputZ = validateInput(elements, 'target-z')
    if (!inputX || !inputY || !inputZ) {
      setError('Error getting values of X, Y, Z')
      return
    }

    const x = parseInt(inputX.value)
    const y = parseInt(inputY.value)
    const z = parseInt(inputZ.value)
    console.log('x', x)
    console.log('y', y)
    console.log('z', z)

    const { hasSolution, error: errorSolution } = checkSolution(x, y, z)
    console.log('hasSolution', hasSolution)
    console.log('errorSolution', errorSolution)

    if (hasSolution) {
      console.log('hasSolution', hasSolution)
      setCapacityBucketX(x)
      setCapacityBucketY(y)
      setTargetZ(z)

      let resultXtoY = calculate(x, y, z, 0, 0, 'X', 'Y', 0, [])
      console.log('resultXtoY', resultXtoY)

      let resultYtoX = calculate(y, x, z, 0, 0, 'Y', 'X', 0, [])
      console.log('resultYtoX', resultYtoX)

      if (resultXtoY.index < resultYtoX.index) {
        setBestSolution(resultXtoY.steps)
        setWorstSolution(resultYtoX.steps)
      }

      if (resultXtoY.index > resultYtoX.index) {
        setBestSolution(resultYtoX.steps)
        setWorstSolution(resultXtoY.steps)
      }

      if (resultXtoY.index === resultYtoX.index) {
        setBestSolution(resultXtoY.steps)
        setWorstSolution(resultYtoX.steps)
        setEqualSolution(true)
      }

      setHasResult(resultXtoY.index && resultYtoX.index)
    } else {
      setError(errorSolution)
      setHasResult(false)
    }

    inputX.value = ''
    inputY.value = ''
    inputZ.value = ''
  }

  const handledClear = () => {
    setHasResult('')
    setError(false)

    setBestSolution([])
    setWorstSolution([])
    setEqualSolution(false)

    setCapacityBucketX(null)
    setCapacityBucketY(null)
    setTargetZ(null)
  }

  return (
    <main>
      <aside>
        <h1 className='mb-10'>Water Bucket Challenge</h1>
        <h2>A classic programming problem</h2>
        <form
          onSubmit={handledSubmit}
          name='form'
          aria-label='Add X and Y buckket capacity, and target Z'
        >
          <label>
            X Bucket Capacity:
            <input
              name='bucket-x'
              aria-label='bucket-x'
              role='bucket-x'
              required
              type='number'
              placeholder='X Bucket Capacity'
            />
          </label>

          <label>
            Y Bucket Capacity:
            <input
              name='bucket-y'
              aria-label='bucket-y'
              role='bucket-y'
              required
              type='number'
              placeholder='Y Bucket Capacity'
            />
          </label>

          <label>
            Z Target:
            <input
              name='target-z'
              aria-label='target-z'
              role='target-z'
              required
              type='number'
              placeholder='Z Target'
            />
          </label>

          <button aria-label='Run solution'>Run</button>
          {(!!error || !!hasResult) && (
            <button className='mt-10' onClick={handledClear}>
              Clear
            </button>
          )}
        </form>
      </aside>

      <section>
        <h2 className='mb-10'>Problem Result</h2>

        {!!error && <ResultError error={error} />}
        {!!hasResult && (
          <>
            {!!equalSolution && (
              <h2 className='mb-10'>
                The best and worst solution are equally optimal.
              </h2>
            )}

            <p className='mb-50'>
              <span className='mr-15'>Bucket X: {capacityBucketX}</span>
              <span className='mr-15'>Bucket Y: {capacityBucketY}</span>
              <span>Target Z: {targetZ}</span>
            </p>

            {bestSolution.length && (
              <ResultTable
                title='Best Solution'
                steps={bestSolution}
                bestSolution={true}
              />
            )}

            {worstSolution.length && (
              <ResultTable
                title='Worst Solution'
                steps={worstSolution}
                bestSolution={false}
              />
            )}
          </>
        )}

        {!error && !hasResult && (
          <p>Enter bucket capacity X, bucket capacity and target Z.</p>
        )}
      </section>
    </main>
  )
}

export default App
