import ReactDOM from 'react-dom'
import {render, fireEvent} from '@testing-library/react';
import Modals from '../modals';

const Prueba = () => {

  return ReactDOM.createPortal(
    <Modals />
  )
}

test('modal shows the children', () => {
  // Act
  const {getByText} = render(
    <Modals />,
  )
  // Assert
  expect(getByText('Calendar')).toBeTruthy()
})

test('modal close with button', () => {
  // Arrange
  const handleClose = jest.fn()
  // Act
  fireEvent.click(getByText(/Cerrar/i))

  // Assert
  expect(handleClose).toHaveBeenCalledTimes(1)
})