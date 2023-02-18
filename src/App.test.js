import { render, screen, fireEvent } from '@testing-library/react';
import { App } from './App';

//1. Verifica que el contador de caracteres inicialmente muestre el valor 0/250:
test('initial character count is 0/250', () => {
  render(<App />);
  const characterCount = screen.getByText(0 / 250, { exact: false });
  expect(characterCount).toBeInTheDocument();
});

//2. Verifica que al ingresar texto en el textarea, el contador de caracteres se actualice:
test('character count updates when entering text', () => {
  render(<App />);
  const input = screen.getByRole('textbox');
  const characterCount = screen.getByText(/\/250/, { exact: false });

  fireEvent.change(input, { target: { value: 'This is a test' } });

  expect(characterCount).toHaveTextContent('14/250');
});

//3. Este test verifica que se renderice el texto "Desafío: Colorea cuando exceda el límite":
test('renders "Desafío: Colorea cuando exceda el límite" text', () => {
  render(<App />);
  const matchingText = screen.getByText('Desafío: Colorea cuando exceda el límite');
  expect(matchingText).toBeInTheDocument();
});
