const apiAlcoholic = async () => {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
    const data = await response.json()
    console.log(data);
    
    return data.drinks;
}

export default apiAlcoholic;