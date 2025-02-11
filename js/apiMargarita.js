const apiMargarita = async () => {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'
    const response = await fetch(url)
    const data = await response.json()
    return data.drinks;
}

export default apiMargarita;