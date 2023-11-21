import './App.css';
import Feature from './Feature';
import HeaderSection from './HeaderSection';
import Access from './Access';
import EventPlanningAssistant from './EventPlanningAssistant';

function Home() {
  return (
    <div className="App">
        <HeaderSection />
        {/* <EventPlanningAssistant /> */ }
        <Feature />
        <Access />
    </div>
  );
}

export default Home;
