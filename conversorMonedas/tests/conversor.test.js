import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Converter from '../components/Conversor';

test('performs currency conversion from USD to EUR', () => {
  const { getByTestId } = render(<Converter />);

  fireEvent.changeText(getByTestId('amountInput'), '10');
  fireEvent.changeText(getByTestId('fromInput'), 'USD');
  fireEvent.changeText(getByTestId('toInput'), 'EUR');
  fireEvent.press(getByTestId('convertButton'));

  expect(getByTestId('resultText').props.children).toContain('9.00');
});
