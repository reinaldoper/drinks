const Cocktail_glass = async () => {
    try {
        const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass");
        const data = await response.json();
        console.log(data);
        return data.drinks;
    } catch (error) {
        console.log(error);
    }
}


export default Cocktail_glass;