export default function Project(props) {
    return (
        <div className="project-container">
            <h3>{props.title}</h3>
            <p><a href={props.link}> <img src={props.img}></img></a></p>
        </div>
    )
}