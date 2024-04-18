import logo from './logo.svg';
import './App.css';
import Root from './root/Root';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Quiz from './root/Quiz';
import Blog from './root/Blog';
import Main from './root/Main';
import Error from './root/Error';




  const router =  createBrowserRouter ( [


    {path : "/", element : <Root></Root>, children : [
      {path : "/", element : <Main></Main>},
      {path : "home", element : <Main></Main>},
      {path : "quiz", element : <Quiz></Quiz>},
      {path : "blog", element : <Blog></Blog>}
    ]},
    {path : '*', element : <Error></Error>}



  ] )







function App() {
  return (
    <div className=" md:px-24 mx-auto">
      
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
