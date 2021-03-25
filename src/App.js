import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'


function App() {
  const [markdown, setMarkdown] = useState("")

  useEffect(()=>{
    setMarkdown(
    `
# Hello 
#### Danilo was here 
*OMG* __!!__

\`\`\`
console.log("Hello World!")
\`\`\`

This is a markdown application with react and third party libraries.
> React is cool
>> Still learning markdown

[Click me to go to React Page](http:reactjs.org)

![giraffe](https://images.unsplash.com/photo-1560316763-7cc5e555957d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)


### Steps to Make a react app
1. crete-react-app
2. code
3. save and code more
4. repeat
5. publish
6. fix... 



    `)
  },[])
  return <main>
    <section className="markdown">
      <textarea className="input" value={markdown} 
      onChange={(e)=> setMarkdown(e.target.value)}
      ></textarea>
      <article className="result">
        <ReactMarkdown>
          {markdown}
        </ReactMarkdown>
        </article>
    </section>
  </main>
}

export default App
