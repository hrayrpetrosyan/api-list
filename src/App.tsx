import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import './App.css';

function App() {
	return (
		<div className="layout">
			{/* Left sidebar with API list */}
			<LeftSidebar />
			{/* Right side will display the details of the selected API */}
			<RightSidebar />
		</div>
	);
}

export default App;
