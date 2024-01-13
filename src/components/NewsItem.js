import React from 'react'
import {dummy} from './imageexport.js'
import './file.css';
const NewsItem = (props)=> {
        let { title, description, imageUrl, newsUrl, author, date, white, color1} = props;
        return (
            <div className="news_comp" >
            <div className="">
                <div className="">

                    <img className="newsitem_img" src={imageUrl ? imageUrl : {dummy}}  />
                    <div className="newsitem_body">
                        <div className="body_title" style={{color:white}}> {title}  </div>
                        <div className="titlenauthor" style={{backgroundColor:color1}}>
                        <div className="body_description" style={{color:white, backgroundColor:color1}} >{<p className="card-text">{description}</p>}</div>
                        <div className="body_author"><p className=""><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                        </div>
                        </div>
                        <div className="readmorebutton"><a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a></div> 
                    </div>
                </div>
            </div>
            </div>
        )
     
}

export default NewsItem
