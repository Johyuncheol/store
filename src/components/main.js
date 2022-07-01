import contents_1 from "../data/contents_1";
import contents_2 from "../data/contents_2";
import contents_3 from "../data/contents_3";


export function ContentCard(props){
    return(
        <div className="contents_{n}">
            <a href={props.cnt.link}><img src={props.cnt.picture}/></a>
            <p>{props.cnt.title}</p>
            <p>{props.cnt.content}</p>
        </div>
    );
}