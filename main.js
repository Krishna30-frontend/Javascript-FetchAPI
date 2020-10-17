// Render Data From API
const render = document.querySelector('.render');


// Adding EventListener to the Document
document.addEventListener('DOMContentLoaded', () => {

  // Fetch API for jsonplaceholder
  fetch('https://jsonplaceholder.typicode.com/posts')
  
    // converting to json()
    .then(res => res.json())
    
    // rendering data
    .then(data => {
      let output = ``;
      
      // looping through the data
      data.forEach(user => {
        
        // outputting it to the render
        output += `
        <div class="post">
        
        <h1>${user.id}. ${user.title}</h1>
          <p>${user.body}</p>
          </div>`;
        // result
        render.innerHTML = output;
      })
    })
})