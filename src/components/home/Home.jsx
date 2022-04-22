import './Home.css'
import pikachu from'../images/Spinkachu.webp'
const Home = () => {
	return (
		<div id='home-screen'>
			<img id='splash'src="https://i.imgur.com/POlgWMd.png" alt="logo" />
			<div id="platform"/>
			<img id="pikachu" src={pikachu} alt="" />
		</div>
	);
}

export default Home;