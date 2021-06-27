

import { Container, Content } from './styles';
import informacao from '../../assets/informacao.png';
import { useEffect, useState } from 'react';

const Modal = ({ email, setShowModal }) => {
  const [newMail, setNewMail] = useState('');
  console.log(email)
  useEffect(() => {
    const arrayMail = email.split('@');
    const slice = arrayMail[0].length > 8 ? arrayMail[0].substr(8) : '';
    setNewMail(`****${slice}@${arrayMail[1]}`)
    
  }, [email])
  return (
    <Container>
      <Content>
        <img src={informacao} alt="" />
        <h3>Cadastro Realizado com Sucesso!</h3><br />
        <p>O link de confirmacao foi enviado para o</p>
        <p>email {newMail}</p><br />
        <button onClick={() => setShowModal(false)}>FECHAR</button>
      </Content>
    </Container>
  )
}


export default Modal;