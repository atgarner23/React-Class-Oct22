function App() {

    const title = 'Blog Post'
    const body = 'This is my blog post'
    const comments = [
        { id: 1, text: 'Comment One' },
        { id: 2, text: 'Comment Two' },
        { id: 3, text: 'Comment Three' },
    ]

    const loading = false
    const showComments = false

    if (loading) return <h1>Loading...</h1>

    return (
        <div className="container">
            <h1>{title}</h1>
            <p>{body}</p>

            {showComments && (<div className="comments">
                <h3>Comments ({comments.length})</h3>
                <ul>
                    {comments.map((comment, index) => (
                        <li key={index}>{comment.text}</li>
                    ))}
                </ul>
            </div>)}


        </div>
        //return React.createElement('div', { className: 'container' }, React.createElement('h1', {}, 'My App' ))
    ) //jsx syntax must have 1 parent element. such as a container div or a section. can also use empty <> also called a fragment. class is a reserved word so you have to use className. can't use the for attribute either must use htmlFor
}

export default App