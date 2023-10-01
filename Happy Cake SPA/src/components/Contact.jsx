import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import { useState } from 'react'
import Alert from './Alert'

const Contact = () => {
  const [formData, setFormData] = useState({ email: '' })
  const [alert, setAlert] = useState({
    error: '',
    message: '',
    color: '',
  })

  const validateInput = (e) => {
    e.preventDefault()

    const { email } = formData

    email == ''
      ? setAlert({
          error: true,
          message: '¡Por favor ingrese un correo electrónico!',
          color: 'text-danger',
        })
      : setAlert({
          error: false,
          message: '¡Solicitud enviada! Nos pondremos en contacto contigo 📨',
          color: 'text-success',
        }),
      setFormData({
        email: '',
      })

    setTimeout(() => {
      setAlert({
        error: '',
        message: '',
        color: '',
      })
    }, 8000)
  }

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <Container className='home'>
      <h1>Cuentanos, ¿En qué te podemos ayudar?</h1>
      <Form
        className='input-size'
        onSubmit={validateInput}
      >
        <Form.Group
          className='mb-3'
          controlId='exampleForm.ControlInput1'
        >
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control
            type='email'
            placeholder='name@example.com'
            name='email'
            value={formData.email}
            onChange={handleInput}
          />
        </Form.Group>
        <Form.Group
          className='mb-3'
          controlId='exampleForm.ControlTextarea1'
        >
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            as='textarea'
            placeholder='Alguna indicación (opcional)'
          />
        </Form.Group>
        <Button
          variant='danger'
          type='submit'
        >
          Enviar
        </Button>
        {alert.message && (
          <Alert
            color={alert.color}
            message={alert.message}
          />
        )}
      </Form>
    </Container>
  )
}

export default Contact
