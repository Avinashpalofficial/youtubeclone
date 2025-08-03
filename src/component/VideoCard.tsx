export function VideoCard(props: any) {
  return (
    <div>
      <img src={props.image} alt="" className="rounded-lg" />
      <div className="grid grid-cols-12 pt-2">
        <div className="col-span-1">
          <img src={props.photo} alt="" className="rounded-full  " />
        </div>
        <div className="col-span-11 pl-2">
          <div className="text-lg font-semibold ">
           {props.title }
          </div>
          <div className="col-span-10 text-md text-gray-500">
           {props.author}
          </div>
          <div className="col-span-10 text-sm text-gray-500">
            {props.views} . {props.uploadDate}
          </div>
        </div>
      </div>
    </div>
  );
}
