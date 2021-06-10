import React from "react";

function Card({ data }) {
  const tags = data.tags.split(',');
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <img src={data.webformatURL} alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by John Doe
        </div>

        <ul>
          <li>
            <strong>Views: </strong>
            {data.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {data.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {data.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
       {tags.map((tag,index) =>(
          <span  key ={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #{tag}
        </span>
       ))}
      </div>
    </div>
  );
}

export default Card;
