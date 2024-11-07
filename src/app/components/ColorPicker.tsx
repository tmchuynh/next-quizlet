// components/ColorPicker.tsx
import React, { useEffect, useRef } from 'react';
import iro from '@jaames/iro';
import { createContributionGrid } from './ContributionsGrid';

interface ColorPickerProps {
    onColorChange: ( color: string ) => void;
    initialColor?: string;
}

const ColorPickerComponent: React.FC<ColorPickerProps> = ( { onColorChange, initialColor = '#6a40d4' } ) => {
    const pickerRef = useRef<HTMLDivElement>( null );

    useEffect( () => {
        const colorPicker = iro.ColorPicker( pickerRef.current!, {
            width: 200,
            color: initialColor,
            layout: [{ component: iro.ui.Slider, options: { sliderType: 'hue' } }],
        } );

        // Define the callback for color change
        const handleColorChange = ( color: any ) => {
            onColorChange( color.hexString );
            updateContributionGridColorTheme( color.hexString );
        };

        // Attach the event listener
        colorPicker.on( 'color:change', handleColorChange );

        // Detach the event listener on cleanup
        return () => colorPicker.off( 'color:change', handleColorChange );
    }, [onColorChange, initialColor] );

    return <div ref={pickerRef} className="color-picker mt-5"></div>;
};

function updateContributionGridColorTheme( baseColor: string ) {
    const gridContainer = document.getElementById( 'contributionGrid' );
    gridContainer?.remove();
    createContributionGrid( baseColor );
}

export default ColorPickerComponent;
