const Body = (props) => {
    return(
        <div>
            <div>
                <h3>{props.item.title}</h3>
                <p><span>Author: </span>{props.item.author}</p>
                <a href = {props.item.url} target="_blank" rel="noreferrer">{props.item.url}</a>
            </div>
        </div>
    )
}

export default Body