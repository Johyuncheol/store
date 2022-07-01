import React,{useState} from 'react' 

export function Header()
{

    let [header1,h1Change]=useState(['Login','Bag','MyPage']);
    let [header2,h2Change]=useState(['MAN','WOMAN','HOME','TECH','HOBBY']);
    let [header3,h3Change]=useState(['BEST','EVENT','LOOKBOOK','HISTORY']);

    return(

    <section id="header">

      <h1 className="Name"><a href="/">dd</a></h1>

        <nav >
          <ul className="header_content1">
          {
            header1.map((a)=>{
              return <li><a href="index.html">{a}</a></li>
            })
          }
          </ul>
        </nav>
  
        <nav className="header_content2">
          <ul>
          {
            header2.map((a)=>{
              return <li><a href="/man">{a}</a></li>
            })
          }
          </ul>
        </nav>

        <nav className="header_content3">
          <ul>
          {
            header3.map((a)=>{
              return <li><a href="index.html">{a}</a></li>
            })
          }
          </ul>
        </nav>
        
    </section>
    )
}