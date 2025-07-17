import { render, screen } from '@testing-library/react';
import { HeroSection } from './hero-section';
import { LanguageProvider } from '../lib/language-provider';

describe('HeroSection', () => {
  it('renders translated slogan', () => {
    render(
      <LanguageProvider defaultLanguage="en">
        <HeroSection />
      </LanguageProvider>
    );

    expect(
      screen.getByText('Fast and Secure Ship Registration under Kenya & DRC Flags')
    ).toBeInTheDocument();
  });
});
