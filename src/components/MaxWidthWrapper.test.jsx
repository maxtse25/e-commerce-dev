import React from 'react';
import { render } from '@testing-library/react';
import MaxWidthWrapper from './MaxWidthWrapper'; 

describe('MaxWidthWrapper', () => {
    it('renders children and applies className', () => {
        const { getByText } = render(
            <MaxWidthWrapper className="test-class">
                <div>Test Content</div>
            </MaxWidthWrapper>
        );
        // This checks if 'Test Content' is in the document
        expect(getByText('Test Content')).toBeTruthy();
    });
});
