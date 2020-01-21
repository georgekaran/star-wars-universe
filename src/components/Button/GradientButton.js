import React from 'react';
import Button from './Button';

const GradientButton = ({ colorRight, colorLeft, ...props }) => {
    return (
        <Button {...props} />
    )
}

export default GradientButton;