import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
// import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    // country : this.props.name,

    category: "general",
  };

  static propTypes = {
    category: PropTypes.string.isRequired,
  };

  // capitalizeFirst = (string)=>{
  //    return string.charAt(0).toUppercase() + string.slice(1)
  // }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      loading: false,
      totalResults: 0,
      // countryCode: props.country,
      // category : props.category
    };
    // document.title = this.capitalizeFirst(this.props.category);
    document.title = this.props.category;
  }

  async componentDidMount() {
    console.log('category', this.props.category)
    this.loadNewsData();
   
  }

  componentDidUpdate(preProps,preState){
   
      
       if(preProps.country !== this.props.country) {
        this.loadNewsData();
       }
       if(preProps.category !== this.props.category) {
        this.loadNewsData();
       }
       
  }

//   useEffect(() => {
//     //write you code here
// }, [a])

  async loadNewsData() {
    let url1 = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pageDisplayed}`;
    this.setState({ loading: true });
    let data = await fetch(url1);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  previousPage = async () => {
    this.setState({ page: this.state.page - 1 });
    this.loadNewsData();
   
  };
  nextPage = async () => {
    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.props.pageDisplayed)
    ) {
    } else {
      this.setState({ page: this.state.page + 1 });
      this.loadNewsData();
    }
  };

  // fetchMoreData = async () => {
  //   this.setState({ page: this.state.page + 1 });
  //   this.loadNewsData()
  //   this.setState({ articles: this.state.articles.concat(this.parsedData.articles)})
  // };

  render() {
    return (
      <>
        <h2 className="container text-center">
          Top Headlines - {this.props.category} - page : {this.state.page} 
        </h2>
        {/* <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasmore={this.state.articles.length !== this.state.totalResults}
          loader= {<Spinner/>}
          // {this.state.loading && <Spinner />}>
        >
          <div className="container">
            <div className="row ">
              {!this.state.loading &&
                this.state.articles?.map((elements) => {
             

                  return (
                    <div className="col-md-4" key={elements.url}>
                      <NewsItem
                        newsUrl={elements.url}
                        title={
                          elements.title ? elements.title.slice(0, 150) : " "
                        }
                        description={
                          elements.description
                            ? elements.description.slice(0, 250)
                            : " "
                        }
                        imgUrl={elements.urlToImage}
                        author={elements.author}
                        publishedAt={elements.publishedAt}
                        source={elements.source.name}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </InfiniteScroll> */}
  

        {this.state.loading && <Spinner />}
        <div className="container">
          <div className="row ">
            {!this.state.loading &&
              this.state.articles?.map((elements) => {
          
                return (
                  <div className="col-md-4" key={elements.url}>
                    <NewsItem
                      newsUrl={elements.url}
                      title={
                        elements.title ? elements.title.slice(0, 150) : " "
                      }
                      description={
                        elements.description
                          ? elements.description.slice(0, 250)
                          : " "
                      }
                      imgUrl={elements.urlToImage}
                      author={elements.author}
                      publishedAt={elements.publishedAt}
                      source={elements.source.name}
                    />
                  </div>
                );
              })}
          </div>
        </div>

        {!this.state.loading && (
          <div className="container d-flex justify-content-between">
            <button
                disabled={this.state.page <= 1}
                type="button"
                onClick={this.previousPage}
                className="btn btn-dark my-3"
              >
                &larr; Previous
              </button>
              <button
                disabled={
                  this.state.page + 1 >
                  Math.ceil(this.state.totalResults / this.props.pageDisplayed)
                }
                type="button"
                onClick={this.nextPage}
                className="btn btn-dark my-3"
              >
                Next&rarr;
              </button>
          </div>
        )}
      </>
    );
  }
}

export default News;
