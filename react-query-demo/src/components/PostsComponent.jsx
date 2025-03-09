import React from 'react'
import { useQuery } from '@tanstack/react-query';


const PostsComponent = () => {

    const { isLoading, data:fetchPosts, isError, error, refetch } = useQuery({
        queryKey: ["repoData"],
        queryFn: () =>
            fetch("https://jsonplaceholder.typicode.com/posts")
                .then(res => { return res.json()}),
        staleTime:500,
        cacheTime: 400,
        refetchOnWindowFocus: false,
        keepPreviousData: true,

    })
    if (isLoading) return "Loading..."
    if (isError) return "an error has occurred : " + error.message
    return (
        <div>

            <h1>Posts</h1>
            <button onClick={refetch}>refresh</button>
            <div>
                <ul>
                    {fetchPosts.map((fetchPost) => (
                        <li key={fetchPost.id}>
                            <h3>{fetchPost.title}</h3>
                            <p>{fetchPost.body}</p>
                        </li>
                    ))}
                </ul>

            </div>
                    
        </div>
    )
}

export default PostsComponent
