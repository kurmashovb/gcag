import { render, screen } from '@testing-library/react';
import { Header } from './header';
import { LanguageProvider } from '../lib/language-provider';

describe('Header', () => {
  it('displays company name and slogan', () => {
    render(
      <LanguageProvider defaultLanguage="en">
        <Header />
      </LanguageProvider>
    );

    expect(screen.getByText('African Flag Registration Services')).toBeInTheDocument();
    expect(screen.getByText('Fast and Secure Ship Registration under Kenya & DRC Flags')).toBeInTheDocument();
  });
});
