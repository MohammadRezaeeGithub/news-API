//class
const ui = new UI();
const newsAPI = new News();




//listener
listener()
function listener()
{
    document.querySelector('#submitBtn').addEventListener('click',searchBtn)
}



//functions
function searchBtn(e){
    e.preventDefault();

    const newsName = document.querySelector("#news-name").value
    const country = document.querySelector("#country").value
    const category = document.querySelector("#category").value


    if (newsName !== '' || country !== '' || category !== '') {
        newsAPI.queryAPI(newsName,country,category)
        .then( news =>{
           const newsArray =  news.news.articles
           if (newsArray.length > 0) {
            ui.showNews(newsArray)
           }else{
            ui.printMessage('Nothing was found according to your request!','alert alert-danger mt-4 text-center')
           }
        })
    } else {
        ui.printMessage('Please enter at least one value','alert alert-danger mt-4 text-center')
    }
}