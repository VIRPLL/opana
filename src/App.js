import './App.css';
import {UsersForm} from "./components/UsersForm/UsersForm";
import {Comments, CommentsForm, Users} from "./components";
import {useEffect, useState} from "react";
import {commentsService, userService} from "./services";

function App() {

    // const [users, setUsers] = useState([]);
    //
    // useEffect(()=>{
    //     userService.getAll().then(({data})=>setUsers([...data]))
    // }, [])


    const [comments, setComments] = useState([])

    useEffect(()=> {
        commentsService.getAll().then(({data})=>setComments([...data]))
    }, [])

  return (
    <div className="App">
        <CommentsForm setComments={setComments}/>
        <hr/>
        <Comments comments={comments}/>
      {/*<UsersForm setUsers={setUsers}/>*/}
      {/*<hr/>*/}
      {/*<Users users={users}/>*/}
    </div>
  );
}

export default App;
