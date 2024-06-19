import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Phone from './Phone';

describe('Phone Component', () => {
  it('renders correctly with required props', () => {
    const { getByAltText, container } = render(
      <Phone imgSrc="path/to/sample-image.jpg" className="test-class" />
    );
    const overlayImage = getByAltText('overlaying phone image');

    // Check if the overlaying image is rendered with correct src
    expect(overlayImage.src).toContain('path/to/sample-image.jpg');

    const topContainer = container.firstChild;
    expect(topContainer).toHaveClass('test-class');
  });
});


