import { useState, useCallback, useEffect } from 'react';
import { mask, unMask } from 'remask';
import { MdArrowBack, MdVisibilityOff, MdDone } from 'react-icons/md';
import * as Yup from 'yup';
import logo from '../../assets/logo.png';
import cadastro from '../../assets/cadastro.png';

import Input from '../../components/Input';
import Modal from '../../components/Modal';

import { 
  Container, 
  InternContainer, 
  Return, 
  Content, 
  Image, 
  Form, 
  Header, 
  Buttons,
} from './styles'

const schema = Yup.object().shape({
  cpf: Yup.string().required('CPF é obrigatório'),
  email: Yup.string().required('E-mail e obrigatório').email('Forneca um e-mail válido'),
  password: Yup.string().required('Senha é obrigatória'),
  confirmPassword: Yup.string().required('Confirmação de senha e obrigatória').oneOf(
    [Yup.ref('password'), null], 'Senhas não são iguais'
  )
});

const SignUp = () => {
  const [ showModal, setShowModal ] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isCorrectMail, setIsCorrectMail] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [className, setClassName] = useState('disable');
  const [mailToModel, setMailToModel] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const onMask = (e) => {
    setCpf(mask(unMask(e) , ['999.999.999-99']))
    if(cpf.trim().length === 11){
      return setIsCorrect(true)
    }
  }

  const validMail = (e) => {
    setEmail(e)
    if(e.includes('@') && e.includes('.com')){
      setMailToModel(e);
      setIsCorrectMail(true)
    }
  }

  useEffect(() => {

    if(confirmPassword){
      (() => {
        setClassName('able');
        setDisabled(false);
      })()
    }
    
  }, [confirmPassword])

  const sendForm = async (e) => {
    e.preventDefault()

    const data = {
      cpf,
      email,
      password,
      confirmPassword
    }

    try {
      schema.validateSync(data);
      setShowModal(true)
      setCpf('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setIsCorrect(false);
      setIsCorrectMail(false);
      setIsFocused(false);
      setDisabled(true);
      setClassName('disable');
    } catch (error) {
      alert(error.message)
    }
    
    return;
  }

  return (
    <>
    <Container>
      <InternContainer>
        <Return>
          <MdArrowBack size={25} color="#9B51E0" />
          <p>Retornar</p>
        </Return>
        <Content>
          <Image>
            <img src={cadastro} alt="Imagem cadastro" />
          </Image>
          <Form>
            <Header>
              <div className="infos">
                <h2>Cadastrar Canditado</h2>
                <p>Cadastre-se e encontre a oportunidade que deseja</p>
              </div>
              <div className="logo">
                <img src={logo} alt="Logo GRIA" />
              </div>
            </Header>
            
            <form onSubmit={sendForm}>
              <Input 
                type="text" 
                placeholder="CPF"
                value={cpf}
                onChange={onMask}
                isFocused={isFocused}
                onFocus={handleInputFocus}
                isCorrect={isCorrect}
                iconCorrect={
                  <MdDone size={18} color="hsla(145, 63%, 42%, 1)
                  " />
                }
              />
              <Input type="text" 
                placeholder="E-Mail"
                value={email}
                onChange={validMail}
                isFocused={isFocused} 
                onFocus={handleInputFocus}
                isCorrect={isCorrect}
                isCorrectMail={isCorrectMail}
                iconMail={
                  <MdDone size={18} color="hsla(145, 63%, 42%, 1)
                  " />
                }
              />
              <Input 
                type="password" 
                placeholder="Senha"
                value={password}
                onChange={setPassword}
                isFocused={isFocused} 
                onFocus={handleInputFocus} 
                icon={<MdVisibilityOff 
                  color="hsla(0, 0%, 85%, 1)" 
                />}
              />
              <Input type="password" 
                placeholder="Confirmar Senha"
                value={confirmPassword}
                onChange={setConfirmPassword}
                isFocused={isFocused}
                onFocus={handleInputFocus}
                icon={<MdVisibilityOff 
                  color="hsla(0, 0%, 85%, 1)" 
                />}
              />
              <Buttons>
                <button type="submit" className={`signup-${className}` } disabled={disabled} >CADASTRAR</button>
                <button className="login">JÁ POSSUI CASDASTRO? FAÇA O LOGIN AQUI</button>
              </Buttons>
            </form>
          </Form>
        </Content>
      </InternContainer>
    </Container>
    {showModal ? ( <Modal email={mailToModel} setShowModal={setShowModal} />) : ('')}
    </>
  )
}


export default SignUp;