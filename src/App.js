import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider}  from 'react-router-dom'
import './App.scss';
import Addons from './components/add-ons/add-ons.component';
import PersonalInfo from './components/form-directory/personal-info.component';
import Summary from './components/summary/summary.component';
import ThankYou from './components/thank-you/thank-you.component';
import Root from './routes/root.component';
import SelectPlan from './components/plan/select-plan.component';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
            {
      path: '/',
      element: <PersonalInfo />
    },
    {
      path: '/select-plan',
      element: <SelectPlan />
    },
    {
      path: '/add-ons',
      element: <Addons />
    },
    {
      path: '/summary',
      element: <Summary />
    },
      ]
    },

  ])

  return (
    <div className="App">
       <RouterProvider router = {router}  />
    </div>
  );
}



export default App;
