class News{

    constructor(){
        this.APIkey = '8c8a35f43da94415bdac1260d6c437d2'
    }
    async queryAPI(newsName,country,category){

        //building url
        let url = 'https://newsapi.org/v2/'

        if (country === '' && category === '') {
            url += 'everything?'
        }else{
            url += 'top-headlines?'
        }

        //if newsName exist
        if (newsName !== '') {
            url += `q=${newsName}&`
        }

        //if country exist
        if (country !== '') {
            url += `country=${country}&`
        }

        //if category exist
        if (category !== '') {
            url += `category=${category}&`
        }

        url += `apiKey=${this.APIkey}`

        const newsResponse = await fetch(url)
        const news = await newsResponse.json()
        return {
            news
        }
    }
}