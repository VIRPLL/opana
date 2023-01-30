import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {RoutesEndPoint} from "./RoutesEndPoint";
import {AlbumsPage, PostByIdPage, CommentsPage, HomePage, TodosPage} from "./pages";
import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={RoutesEndPoint.index} element={<MainLayout/>}>
            <Route path={RoutesEndPoint.index} index element={<HomePage/>}/>
            <Route path={RoutesEndPoint.todos} element={<TodosPage/>}/>
            <Route path={RoutesEndPoint.albums} element={<AlbumsPage/>}/>
            <Route path={RoutesEndPoint.comments} element={<CommentsPage/>}>
                <Route path={RoutesEndPoint.postById} element={<PostByIdPage/>}/>
            </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
