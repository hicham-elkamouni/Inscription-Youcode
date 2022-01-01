// fetch('http://localhost:5001/users',{
    //     method : 'GET',
    //     body : JSON.stringify(obj),
    //     headers : {'Content-Type': 'application/json'}
    //     });
    // });

    // const renderPosts = async (term) => {
    //     let uri = '/users?email=username.value'
      
    //     if(term){
    //       uri += `&q=${term}`
    //     }
    //     const res = await fetch(uri);
    //     const posts = await res.json();
      
    //     console.log(posts);
      
    //     let template = '';
    //     posts.forEach((post) => {
    //       template += `
    //       <div class="post">
    //         <h2>${post.title}</h2>
    //         <p><small>${post.likes} likes </small></p>
    //         <p>${post.body.slice(0, 200)}</p>
    //         <a href="/details.html?id=${post.id}">read more...</a>
    //       </div> 
    //       `
    //     })
      
    //     container.innerHTML = template;
      
    //   }