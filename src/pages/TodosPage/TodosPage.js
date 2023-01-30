import {Todos} from "../../components";
import './TodoPage.style.css'

export const TodosPage = () => {

    return (
        <div>
            <h1 style={{textAlign:"center"}}>Todos</h1>
            <div className={'todosPage'}>
                <Todos/>
            </div>
        </div>

    );
};

