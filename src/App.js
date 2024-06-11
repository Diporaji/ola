import Ola from './homepage';
import Form from './form';
import About from './about';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Rootlay from './rootlay';



function App() {
  const tunji = createBrowserRouter([
    {
      path: '',
      element: <Rootlay/>,
      children:[
        {path:'/', element:<Ola/>},
        { path: '/about', element: <About/>},
        { path: '/class', element: <Form/>},
      ]
    }
  ])
  return(
    <div>
      <RouterProvider router={tunji}/>
    </div>
  )
  
}
// error

// function App(){
//   const tunji = createBrouserRouter([
//     {
//       path: '/',
//       element: <RootLayout/>,
//       Children:[
//         {path:'/', element:<Homepage/>},
//         { path: '/about', element: <About/>},
//       ]
//     }
//   ])
//   return(
//     <div>
//       <RouterProvider router={tunji}/>
//     </div>
//   )
// }



// conditionary operator
// function Greetings({ sola }) {
//   if (sola) {
//     return <h1>Welcome back</h1>
//   } else {
//     return <h1>Please login</h1>
//   }
// }
// rest
// function App(){
//   const array1=['rice','bena','grain']
//   const array2=['milk','milo','sugar']
//   const constumeArray=[...array1, ...array2]
//   array1.push('akara')
//   console.log(array1)
// }


export default App