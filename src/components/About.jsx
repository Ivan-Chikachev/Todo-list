import React, {useEffect, useState} from 'react';

const About = (props) => {
    const [type, setType] = useState('Name')

    return (
        <div className="jumbotron">
            <div className="container">
                <h1 className="display-4">Приложение "Список дел"</h1>
                <p className="lead">С помощью данного приложения вы можете составлять свой список дел. Заметку можно так же удалить после ее выполнения.</p>
            </div>
        </div>
    )
}
export default About;