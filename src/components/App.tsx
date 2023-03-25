import React from 'react';
//import css
import './App.css';

const App: React.FC = () => {
    return (
        <div className="main_content">
            <h1>This is 404.</h1>
            <p>Something went wrong.</p>
            <br />
            <p>
                We dare not redirect the server so that we can check for server
                anomalies.
            </p>
            <a href="https://buntin.tech">Here</a> is a link to the home page.
            <img
                id="macchan"
                src="https://cdn.discordapp.com/attachments/1068315061099175966/1075153191609581589/image.png"
                alt="404"
            />
        </div>
    );
};

export default App;
