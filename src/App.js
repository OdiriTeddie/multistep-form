import './App.scss';
import Addons from './components/add-ons/add-ons.component';
import PersonalInfo from './components/form-directory/personal-info.component';
import SelectPlan from './components/plan/select-plan.component';
import Sidebar from './components/sidebar/sidebar.component';

function App() {
  return (
    <div className="App">

      <div className="wrapper">
        <Sidebar />
        <div className="wrapper-inner">
          {/* <PersonalInfo /> */}
          {/* <SelectPlan /> */}
          <Addons />
        </div>
      </div>
    </div>
  );
}

export default App;
