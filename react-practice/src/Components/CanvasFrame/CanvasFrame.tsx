import * as React from 'react';
import Canvas from '../Canvas/Canvas';
import Palette from '../Palette/Palette';

function CanvasFrame () {
    return (
        <div>
            <h2>This is the canvas frame</h2>
            <Canvas />
            <Palette />
        </div>
    )
}

export default CanvasFrame;