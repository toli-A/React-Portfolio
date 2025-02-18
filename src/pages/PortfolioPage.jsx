import Project from "../components/Project";

const data = [
    {
        title: 'Task Tracker',
        img: 'https://picsum.photos/200',
        link: 'https://github.com/toli-A/project1'
    },
    {
        title: 'Kanban Board',
        link: 'https://kanban-board-2qjc.onrender.com/',
        img: 'https://picsum.photos/200'

    },
    {
        title: 'Candidate Search',
        link: 'https://github.com/toli-A/Candidate-Search',
        img: "https://picsum.photos/200"
    },
    {
        title: 'README Generator',
        link: 'https://github.com/toli-A/README-Generator',
        img: 'https://picsum.photos/200'
    },
    {
        title: 'Social Network API',
        link: 'https://github.com/toli-A/Social-Network-API',
        img: 'https://picsum.photos/200'
    }
]

export default function Portfolio() {
    return (
        <div className="project-container">
            {data.map((item,index) => (
                <div className="project">
                <Project 
                key={index}
                title={item.title}
                link={item.link}
                img={item.img}
                />
                </div>
            ))}
        </div>
    )
}