import React from 'react';
import { render } from '@testing-library/react';
import MaxWidthWrapper from './MaxWidthWrapper'; // Adjust the import path as needed

describe('MaxWidthWrapper', () => {
  it('renders children and applies className', () => {
    const { getByText } = render(
      <MaxWidthWrapper className="test-class">
        <div>Test Content</div>
      </MaxWidthWrapper>
    );

    // Check if the child content is rendered
    expect(getByText('Test Content')).toBeInTheDocument();

    // Check if the class name is applied
    const containerDiv = getByText('Test Content').parentNode;
    expect(containerDiv).toHaveClass('test-class');
    expect(containerDiv).toHaveClass('h-full');
    expect(containerDiv).toHaveClass('mx-auto');
    // Add checks for all other classes applied by default in MaxWidthWrapper
  });
});
