const url = 'https://jsonplaceholder.typicode.com/posts'

const get_comment = async()=>{
    const response = await fetch(url);
    const posts = await response.json() //data

    

    for (post of posts){
        const{id,title,body} = post;    //destructure
        //create div element
        const div = document.createElement('div')
        //create h1 element
        const h1 = document.createElement('h1')
        //create p element
        const p = document.createElement('p')

        div.id = id;
        h1.innerHTML = title;
        p.innerHTML = body;

        div.appendChild(h1)
        div.appendChild(p)

        document.getElementById('root').appendChild(div)
        break;
        
        // div.id = id;    //add id attr
        // div.innerHTML = title;  //add innerHtml
        // document.getElementById('root').appendChild(div)   //div#root child
        // break
    }
}
get_comment()


