import { useEffect, useState } from "react"
import { getAllPost } from "../../../apis"
import { Card,Avatar } from "antd"

const Post = ({item}) => {
    return(
        <>
            <Card className="mt-3 h-32">
                <Avatar  size={50} src={item.avatar} className="absolute top-5"></Avatar>
                <div className="ml-16 mt-2">{item.nickname!==''?item.nickname:'匿名用户'}</div>
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-auto">
                    {item.content}
                </div>
            </Card>
        </>
    )
}

const AllComfession = () => {
    // const allPost = getAllPost()
    const [allPost,setAllPost] = useState([])
    console.log(allPost)

    useEffect(
        () => {
            const fetchPosts = async () => {
                const {response} = await getAllPost()
                // console.log(response.data.data.confession_list)
                setAllPost(response.data.data.confession_list)
                // console.log(allPost)
            }
            fetchPosts()
        },[]
    )

    return(
        <>
            {allPost.length === 0 ? (
                <div>loading</div>
            ) : (<div className="relative">
                {allPost.map((item,index) => {
                    return(<Post key={index} item={item}/>)
                })}
            </div>)
            }
        </>
    )
}

export default AllComfession