import "./App.css";
import { useState } from "react";
import { marked } from "marked";

const defaultText=`
# this is a heading
## H2 heading
This is an inline code \`<div></div> \`

[Website link](https://freecodecamp.org)

Block of code 
\`\`\`
let x=10
let y=20
let z=x+y
\`\`\`

- listitem
- listitem2
- listitem3

**bold text**

> a blockquote

![Tux, the Linux mascot](https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png)
`

function App() {
  const [text,setText]=useState(defaultText)

  const onTextChange=(e) => {
    setText(e.target.value)
  }

  const toMarked = marked.parse(text,{breaks: true})
  
  return (
    <div className="flex items-center flex-col text-center ">
      <h1 className="text-[42px] m-10">Convert your markdown</h1>
      <div>
        <div>
      <h3 className="text-[28px] mt-5  bg-[#34ace0] rounded-t-lg border-[1px] border-black shadow-[rgba(0,_0,_0,_0.34)1px_1px_10px_2px] mb-0">Enter markdown:</h3>
      <textarea id="editor" className="h-[350px] w-[650px] overflow-y-scroll bg-[#82ccdd] rounded-b-lg border-[1px] border-black shadow-[rgba(0,_0,_0,_0.34)1px_1px_10px_2px] p-2" value={text} onChange={onTextChange}></textarea>
        </div>
      </div>
      <div>
      <h3 className="text-[28px] mt-5 bg-[#34ace0] rounded-t-lg border-[1px] border-black shadow-[rgba(0,_0,_0,_0.34)1px_1px_10px_2px] mb-0">Result:</h3>
      <div id="preview" className="w-[800px] bg-[#82ccdd] rounded-b-lg relative mb-20 border-[1px] border-black shadow-[rgba(0,_0,_0,_0.34)1px_1px_10px_2px] text-left p-2" dangerouslySetInnerHTML={{__html: toMarked}}></div>
      </div>
      </div>
  );
}

export default App;
