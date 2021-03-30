import "./App.css";
import NavBar from "./components/navbar/NavBar";
import PostCreate from "./components/post/PostCreate";
import PostList from "./components/post/PostList";
import PostEdit from "./components/post/PostEdit";
function App() {
	return (
		<div className="App">
			{/* <User /> */}
			<NavBar />
			<PostCreate />
			<PostList />
			<PostEdit />
		</div>
	);
}

export default App;
