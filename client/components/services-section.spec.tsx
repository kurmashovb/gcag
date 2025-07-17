import { render, screen } from '@testing-library/react';
import { ServicesSection } from './services-section';
import { LanguageProvider } from '../lib/language-provider';

describe('ServicesSection', () => {
  it('shows section title and services', () => {
    render(
      <LanguageProvider defaultLanguage="en">
        <ServicesSection />
      </LanguageProvider>
    );

    expect(screen.getByText('Official Ship Registration Services')).toBeInTheDocument();
    expect(screen.getByText('Kenya Flag Registration')).toBeInTheDocument();
    expect(screen.getByText('DRC Flag Registration')).toBeInTheDocument();
    expect(screen.getByText('Legal Support')).toBeInTheDocument();
  });
});
