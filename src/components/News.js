import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 10,
        category: 'general',
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category:PropTypes.string,
    }
    constructor() {
        super();
        console.log("Hello i am a constructor from news component");
        this.state = {
            articles: [],
            loading: false,
            page: 1,

        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=720ec503696743379b8f82aeb8f0c1ed&page=1&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedata = await data.json();
        console.log(parsedata);
        this.setState({
            articles: parsedata.articles,
            totalResults: parsedata.totalResults,
            loading: false,
        })
        // this.state({ articles: parsedata.articles })
    }

    handleprevclick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=720ec503696743379b8f82aeb8f0c1ed&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedata = await data.json();
        console.log(parsedata);
        this.setState({
            page: this.state.page - 1,
            articles: parsedata.articles,
            loading: false,
        })


    }
    handlenextclick = async () => {
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {



            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=720ec503696743379b8f82aeb8f0c1ed&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({ loading: true });
            let data = await fetch(url);
            let parsedata = await data.json();

            // console.log(parsedata);
            this.setState({
                page: this.state.page + 1,
                articles: parsedata.articles,
                loading: false,


            })
        }
    }
    render() {
        return (
            <div className='container my-3'>
                <h2 className='text-center'>TierNews - Top Headlines</h2>
                {this.state.loading && <Spinner />}

                <div className="row">
                    {!(this.state.loading) && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url} >
                            <Newsitem tittle={element.title ? element.title : ""} description={element.description ? element.description : ""} imageurl={element.urlToImage} newsurl={element.url} />
                        </div>

                    })}


                </div>
                <div>
                    <div className="container d-flex justify-content-between">
                        <button disabled={this.state.page <= 1} type="button" className="btn btn-primary " onClick={this.handleprevclick}>&larr; Previous</button>
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-primary" onClick={this.handlenextclick}>Next &rarr;</button>
                    </div>
                </div>

            </div>
        )
    }
}

export default News