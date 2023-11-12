import { fireEvent, render, screen } from '@testing-library/react';
import Main from './components/Global/Main';
import BookingForm from './components/Pages/BookingForm';


test('test for initializeTimes initial expected value', () => {
  render(<BookingForm/>);
  const initialTime = screen.getByRole('select');
  fireEvent.change(initailTime, { target: { value: "16:00" }})


})