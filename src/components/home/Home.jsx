import './Home.css'
import pikachu from'../images/Spinkachu.webp'
const Home = () => {
	return (
		<div id='home-screen'>
			{/* <img id="spinner"src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Digimon_Logo.svg" alt="" /> */}
			<img id='splash'src="https://i.imgur.com/POlgWMd.png" alt="" />
			<div id="platform"/>
			<img id="pikachu" src={pikachu} alt="" />
		</div>
	);
}

export default Home;