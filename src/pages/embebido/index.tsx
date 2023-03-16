import React from 'react'

function Embebido() {
    return (
        <div style={{ display: 'flex', width: '1000px', height: '1000px' }}>
            <iframe id="inlineFrameExample"
                title="Inline Frame Example"
                width="1000"
                height="1000"
                src="https://dev.loquenecesito.co/clients?code=w11mX9EDGGmC">
            </iframe>


        </div>
    )
}

export default Embebido