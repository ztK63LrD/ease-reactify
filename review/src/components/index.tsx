import Button from './button'
import './index.css'

const Container = () => {
  return (
    <div className='container'>
        <Application>
            <Button />
        </Application>
    </div>
  )
}

export default Container

const Application = ({ children }: any) => {
    return (
        <div>
            {children}
        </div>
    )
}