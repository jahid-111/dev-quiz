
import './App.css';
import Root from './root/Root';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Quiz from './root/Quiz';
import Blog from './root/Blog';
import Main from './root/Main';
import Error from './root/Error';





  const router =  createBrowserRouter ( [

    {path : "/", element : <Root></Root>, children : [
      {path : "/", 
        loader : async () => {
          return fetch ('https://openapi.programming-hero.com/api/quiz');
        }, element : <Main></Main>},
      {path : "home", 
        loader : async () => {
          return fetch ('https://openapi.programming-hero.com/api/quiz');
        }, element : <Main></Main>},

        {path : "blog", element : <Blog></Blog>},
   
      {path : "/home/quiz/quiz/:id", 
        loader : async ({params})=> {
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
        }, element : <Quiz></Quiz>},
    ]},


    {path : '*', element : <Error></Error>}


  ] )



function App() {
  return (
    <div className=" md:px-24 mx-auto">
      {/* USE CONTEX API */}
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
