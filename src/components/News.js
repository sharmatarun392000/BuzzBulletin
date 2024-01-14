import React, {useEffect, useState} from 'react'

import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import './file.css'

const News = (props)=>{


    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    let country="in";
    const updateNews = async ()=> {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`; 
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json()
        props.setProgress(70);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100);
    }

    useEffect(() => {
        updateNews();
    }, [])

    const fetchMoreData = async () => {   
        const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1) 
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
      };
 
        return (
            <>

<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Change Country
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
<li className='countrylistitem' onClick={()=>{country="ar";updateNews();document.title="Argentina"}}>Argentina</li>
<li className='countrylistitem' onClick={()=>{country="au";updateNews();document.title="Australia"}}>Australia</li>
<li className='countrylistitem' onClick={()=>{country="at";updateNews();document.title="Austria"}}>Austria</li>
<li className='countrylistitem' onClick={()=>{country="be";updateNews();document.title="Belgium"}}>Belgium</li>
<li className='countrylistitem' onClick={()=>{country="br";updateNews();document.title="Brazil"}}>Brazil</li>
<li className='countrylistitem' onClick={()=>{country="bg";updateNews();document.title="Bulgaria"}}>Bulgaria</li>
<li className='countrylistitem' onClick={()=>{country="ca";updateNews();document.title="Canada"}}>Canada</li>
<li className='countrylistitem' onClick={()=>{country="cn";updateNews();document.title="China"}}>China</li>
<li className='countrylistitem' onClick={()=>{country="co";updateNews();document.title="Colombia"}}>Colombia</li>
<li className='countrylistitem' onClick={()=>{country="cu";updateNews();document.title="Cuba"}}>Cuba</li>
<li className='countrylistitem' onClick={()=>{country="cz";updateNews();document.title="Czeh Republic"}}>Czech Republic</li>
<li className='countrylistitem' onClick={()=>{country="eg";updateNews();document.title="Egypt"}}>Egypt</li>
<li className='countrylistitem' onClick={()=>{country="fr";updateNews();document.title="France"}}>France</li>
<li className='countrylistitem' onClick={()=>{country="de";updateNews();document.title="Germany"}}>Germany</li>
<li className='countrylistitem' onClick={()=>{country="gr";updateNews();document.title="Greece"}}>Greece</li>
<li className='countrylistitem' onClick={()=>{country="hk";updateNews();document.title="Hong Kong"}}>Hong Kong</li>
<li className='countrylistitem' onClick={()=>{country="hu";updateNews();document.title="Hungary"}}>Hungary</li>
<li className='countrylistitem' onClick={()=>{country="in";updateNews();document.title="India"}}>India</li>
<li className='countrylistitem' onClick={()=>{country="id";updateNews();document.title="Indonesia"}}>Indonesia</li>
<li className='countrylistitem' onClick={()=>{country="ie";updateNews();document.title="Ireland"}}>Ireland</li>
<li className='countrylistitem' onClick={()=>{country="il";updateNews();document.title="Israel"}}>Israel</li>
<li className='countrylistitem' onClick={()=>{country="it";updateNews();document.title="Italy"}}>Italy</li>
<li className='countrylistitem' onClick={()=>{country="jp";updateNews();document.title="Japan"}}>Japan</li>
<li className='countrylistitem' onClick={()=>{country="lv";updateNews();document.title="Latvia"}}>Latvia</li>
<li className='countrylistitem' onClick={()=>{country="lt";updateNews();document.title="Lithuania"}}>Lithuania</li>
<li className='countrylistitem' onClick={()=>{country="my";updateNews();document.title="Malaysia"}}>Malaysia</li>
<li className='countrylistitem' onClick={()=>{country="mx";updateNews();document.title="Mexico"}}>Mexico</li>
<li className='countrylistitem' onClick={()=>{country="ma";updateNews();document.title="Morocco"}}>Morocco</li>
<li className='countrylistitem' onClick={()=>{country="nl";updateNews();document.title="Netherlands"}}>Netherlands</li>
<li className='countrylistitem' onClick={()=>{country="nz";updateNews();document.title="New Zealand"}}>New Zealand</li>
<li className='countrylistitem' onClick={()=>{country="ng";updateNews();document.title="Nigeria"}}>Nigeria</li>
<li className='countrylistitem' onClick={()=>{country="no";updateNews();document.title="Norway"}}>Norway</li>
<li className='countrylistitem' onClick={()=>{country="ph";updateNews();document.title="Philippines"}}>Philippines</li>
<li className='countrylistitem' onClick={()=>{country="po";updateNews();document.title="Poland"}}>Poland</li>
<li className='countrylistitem' onClick={()=>{country="pt";updateNews();document.title="Portugal"}}>Portugal</li>
<li className='countrylistitem' onClick={()=>{country="ro";updateNews();document.title="Romania"}}>Romania</li>
<li className='countrylistitem' onClick={()=>{country="ru";updateNews();document.title="Russia"}}>Russia</li>
<li className='countrylistitem' onClick={()=>{country="sa";updateNews();document.title="Saudi Arabia"}}>Saudi Arabia</li>
<li className='countrylistitem' onClick={()=>{country="rs";updateNews();document.title="Serbia"}}>Serbia</li>
<li className='countrylistitem' onClick={()=>{country="sg";updateNews();document.title="Singapore"}}>Singapore</li>
<li className='countrylistitem' onClick={()=>{country="sk";updateNews();document.title="Slovakia"}}>Slovakia</li>
<li className='countrylistitem' onClick={()=>{country="si";updateNews();document.title="Slovenia"}}>Slovenia</li>
<li className='countrylistitem' onClick={()=>{country="za";updateNews();document.title="South Africa"}}>South Africa</li>
<li className='countrylistitem' onClick={()=>{country="kr";updateNews();document.title="South Korea"}}>South Korea</li>
<li className='countrylistitem' onClick={()=>{country="se";updateNews();document.title="Sweden"}}>Sweden</li>
<li className='countrylistitem' onClick={()=>{country="ch";updateNews();document.title="Switzerland"}}>Switzerland</li>
<li className='countrylistitem' onClick={()=>{country="tw";updateNews();document.title="Taiwan"}}>Taiwan</li>
<li className='countrylistitem' onClick={()=>{country="th";updateNews();document.title="Thailand"}}>Thailand</li>
<li className='countrylistitem' onClick={()=>{country="tr";updateNews();document.title="Turkey"}}>Turkey</li>
<li className='countrylistitem' onClick={()=>{country="ae";updateNews();document.title="UAE"}}>UAE</li>
<li className='countrylistitem' onClick={()=>{country="ua";updateNews();document.title="Ukraine"}}>Ukraine</li>
<li className='countrylistitem' onClick={()=>{country="uk";updateNews();document.title="United Kingdom"}}>United Kingdom</li>
<li className='countrylistitem' onClick={()=>{country="us";updateNews();document.title="United States"}}>United States</li>
<li className='countrylistitem' onClick={()=>{country="ve";updateNews();document.title="Venuzuela"}}>Venuzuela</li>
  </ul>
</div>

                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner/>}
                > 
                    <div className="newscontainer">
                    <div className="container_child">
                        {articles.map((element) => {
                            return <div className="container_element" key={element.url}>
                                <NewsItem title={element.title ? element.title.slice(0,500) : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}                       black={props.black}
                                white={props.white}
                                color1={props.color1}
                                color2={props.color2}  />
                            </div>
                        })}
                    </div>
                    </div> 
                </InfiniteScroll>
            </>
        )
    
}


News.defaultProps = {
    pageSize: 8,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News
