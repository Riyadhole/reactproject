import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, author, publishedAt, source } =
      this.props;
    return (
      <div className="mx-3 my-3">
        
        <div className="card " style={{ width: "20rem" }}>
        <span className=" d-flex position-absolute top-0  badge rounded-pill bg-danger" style={{right:"0"}}>
            {source}
            <span className="visually-hidden">unread messages</span>
          </span>
          <img
            src={
              imgUrl
                ? imgUrl
                : "https://www.usatoday.com/gcdn/authoring/authoring-images/2023/12/13/USAT/71899390007-gas-prices.jpg?crop=2999,1687,x0,y0&width=2999&height=1687&format=pjpg&auto=webp"
            }
            className="card-img-top"
            style={{ height: "200px", backgroundSize: "contain" }}
            alt="..."
          />
          
          <div className="card-body">
            <h5
              className="card-title"
              style={{ height: "80px", overflow: "auto" }}
            >
              {title}
            </h5>
            <p
              style={{ height: "80px", overflow: "auto" }}
              className="card-text"
            >
              {description}
            </p>
            <p className="discription text-muted">
              {new Date(publishedAt).toGMTString()}{" "}
            </p>
            <p className="discription text-danger">by {author} </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
