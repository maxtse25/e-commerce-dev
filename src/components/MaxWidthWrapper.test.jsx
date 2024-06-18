import React from 'react';
import { render } from '@testing-library/react';
import MaxWidthWrapper from './MaxWidthWrapper'; // Adjust the path as necessary

describe('MaxWidthWrapper', () => {
    it('renders children and applies className', () => {
        const { getByText } = render(
            <MaxWidthWrapper className="test-class">
                <div>Test Content</div>
            </MaxWidthWrapper>
        );
        expect(getByText('Test Content')).toBeInTheDocument();
    });
});
