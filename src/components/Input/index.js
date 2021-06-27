
import { Container, Line }  from './styles.js';

const Input = ({ 
  placeholder, 
  type, 
  icon, 
  isFocused,
  name, 
  onFocus, 
  value, 
  onChange,
  isCorrect,
  iconCorrect,
  iconMail,
  isCorrectMail,
  ...rest
}) => {
  return (
    <>
    <Container>
      { isFocused ? (<label>{placeholder}</label> ): ('')}
      <input 
        type={type} 
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder} 
        onFocus={onFocus}
        {...rest} />
      {icon}
      {isCorrect ? iconCorrect : ('')}
      {isCorrectMail ? iconMail : ('')}
      <Line />
    </Container>
    </>
  )
}


export default Input;