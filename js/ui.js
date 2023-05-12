class UI{

    constructor(){
        this.result = document.querySelector("#result");
    }

    printMessage(message,className){
        //creating new element to show message
        const div = document.createElement('div')
        div.appendChild(document.createTextNode(message))
        div.className = className
        //add element to the ui
        document.querySelector('#message').appendChild(div)
        //removing errore message
        setTimeout(() => {
            div.remove();
        }, 4000);
    }

    //showing news in the UI
    showNews(newsArray){
        
        this.result.innerHTML = '';
        newsArray.forEach(newsInfo => {
            this.result.innerHTML += `
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="${newsInfo.urlToImage}" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title text-center">${newsInfo.title.split('-',1)}</h5>
                            <p class="card-text lead textto-info">${newsInfo.description}</p>
                            <span class="badge badge-primary mb-3">Source: ${newsInfo.source.name}</span>
                            <span class="badge badge-primary mb-3">Date & time: ${newsInfo.publishedAt}</span>
                            <a href="${newsInfo.url}" target="_blank" class="btn btn-primary btn-block">Read more ... </a>
                        </div>
                    </div>
                </div>
            `
        });
        
    }
}