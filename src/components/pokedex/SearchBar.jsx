import './pokedexStyling/SearchBar.css'
const SearchBar = ({setKeyword}) => {
	return (
		<div>
			<p>SEARCH</p>
			<input type="text" onChange={(e)=> setKeyword(e.target.value.toLowerCase())}/>
		</div>
	);
}

export default SearchBar;