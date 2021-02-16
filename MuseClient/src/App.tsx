import React, { useEffect, useState } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {
    const [mod, setMod] = useState<any>(undefined);
    const [inst, setInst] = useState<any>(undefined);

    const wasm = async () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const { instance, module } = await WebAssembly.instantiateStreaming(fetch('main.wasm'), window.go.importObject);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        await window.go.run(instance);
        setInst(instance);
        setMod(module);
    };

    useEffect(() => {
        wasm();
    }, []);
    return (
        <div className="App">
            {/*<header className="App-header">*/}
            {/*  Cool*/}
            {/*</header>*/}
            {/*<Container maxWidth="sm">*/}
            {/*    <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />*/}
            {/*    COol*/}
            {/*</Container>*/}
            cool4
            <Button onClick={() => console.log('co123')} variant="contained" color="primary" component="span">
                Upload
            </Button>
        </div>
    );
}

export default App;
