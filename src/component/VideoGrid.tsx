 import { VideoCard } from "./VideoCard"
 const video= [{
  title: "How I CODE For HOURS With NO Breaks",
  image: "/harkirat.jpg",
  author: "Harkirat Singh",
  views: "1.2M views",
  uploadDate: "1 year ago",
  photo: "/photo.jpg"
},
{
    title: "How I CODE For HOURS With NO Breaks",
  image: "/harkirat.jpg",
  author: "Harkirat Singh",
  views: "1.2M views",
  uploadDate: "1 year ago",
  photo: "/photo.jpg"
},
{
    title: "How I CODE For HOURS With NO Breaks",
  image: "/harkirat.jpg",
  author: "Harkirat Singh",
  views: "1.2M views",
  uploadDate: "1 year ago",
  photo: "/photo.jpg"
},
{
    title: "How I CODE For HOURS With NO Breaks",
  image: "/harkirat.jpg",
  author: "Harkirat Singh",
  views: "1.2M views",
  uploadDate: "1 year ago",
  photo: "/photo.jpg"
},{
    title: "How I CODE For HOURS With NO Breaks",
  image: "/harkirat.jpg",
  author: "Harkirat Singh",
  views: "1.2M views",
  uploadDate: "1 year ago",
  photo: "/photo.jpg"
}
]

export function VideoGrid(){
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
              {video.map(item=> <div>
                 <VideoCard title={item.title} image={item.image} author={item.author} views={item.views} uploadDate={item.uploadDate} photo={item.photo} />
              </div>)}
        </div>
    )
}