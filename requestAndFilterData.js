var addItems = document.querySelector('.add-items'),
    itemsList = document.querySelector('.plates'),
    items = JSON.parse(localStorage.getItem('items')) || [],
    endpoint = "http://api.nytimes.com/svc/topstories/v2/food.json?api-key=5ff914015f8c49e1b093d6a69002c0ad",
    foodStories = [],
    foodHeaders = document.querySelector('.foodHeaders'),
    getNews = document.querySelector('.getNews');


fetch(endpoint)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        foodStories = data.results;
    });



function filterData(stories) {
    return stories.filter(function (foodItem) {
        if (foodItem.section === "Food") {
            return foodItem
        }

    });
}
