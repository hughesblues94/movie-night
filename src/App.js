import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,

} from 'react-router-dom'

import './App.css';
import QuestionSet from './Components/QuestionSet'
import SignUp from './Components/SignUp';
import RootLayout from './layouts/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<QuestionSet />} />
      <Route path="SignUp" element={<SignUp />} />
    </Route>
  )
)

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
