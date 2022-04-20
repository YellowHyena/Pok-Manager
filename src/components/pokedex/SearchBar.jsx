import './pokedexStyling/SearchBar.css'
const SearchBar = ({setKeyword}) => {
	return (
		<div>
			<label id='search-label' >SEARCH</label>
			<input id='search-input' type="text" onChange={(e)=> setKeyword(e.target.value.toLowerCase())}/>
		</div>
	);
}

export default SearchBar;