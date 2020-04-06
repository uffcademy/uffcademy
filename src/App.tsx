import React from 'react';

type AppProps = {
    colorScheme: string
}

const App = ({colorScheme}: AppProps) => {
    return (
        <div>
            <h1>Hello with .TS</h1>
        </div>
    )
}

export default App;