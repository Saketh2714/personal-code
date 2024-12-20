import React from "react";
import NavBar from "./NavBar";

export default function Photos() {
  const Actors = [
  
{
    name: "Mahesh Babu",
    movie: "Guntur Kaaram",
    description:
      "SuperStar ",
    url: "https://cdn.telugu.yousay.tv/wp-content/uploads/sites/2/2024/07/13165310/Untitled-design-2024-07-13T143227.866.jpg",
  },

  {
    name: "Prabhas",
    movie: "Salaar",
    description:
      "RebelStar",
    url:" https://telugucinema.com/wp-content/uploads/cwv-webp-images/2024/08/prabhasnewlook.jpg.webp ",
  },
  {
    name: "NTR",
    movie: "Devara",
    description:
      "YoungTiger",
    url: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Jr-NTRspotted-promoting-RRR-on-sets-of-The-Kapil-Sharma-Show_%28cropped%29.jpg",
  },
  {
    name: "Mufasa",
    movie: "Mufasa The Lion King",
    description:
      " Mufasa as Mahesh Babu",
    url: "https://content.tupaki.com/en/feeds/2024/12/18/629049-cut.webp",
  },

  ];

  return (
    <div>
      <NavBar />

      <div className="row row-cols-1 row-cols-md-2 g-4">
        {Actors.map((Actor) => (
          <div className="col">
            <div className="card">
              <img src={Actor.url} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{Actor.name}</h5>
                <p className="card-text">{Actor.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}