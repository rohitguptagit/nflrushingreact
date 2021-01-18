import { render, screen } from '@testing-library/react';
import Header from './Header';

it('renders the Navbar correctly', () => {
    const headerComponent = render(<Header />);
    expect(screen.getByText('NFL Rushing Yards App')).toBeInTheDocument();
    expect(headerComponent.getByTestId('footballIcon-test')).toBeInTheDocument();
});