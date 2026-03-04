// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders WalletNova title', () => {
    render(<App />);
    const titleElement = screen.getByText(/WalletNova/i);
    expect(titleElement).toBeInTheDocument();
});
