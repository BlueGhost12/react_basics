import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import JSON from './12.1 db.json.json';

// COMPONENTS
import Header from './components/header';
import NewsList from './components/news_list';

class App extends Component{
    state = {
        news: JSON,
        filtered: []
    }

    getKeyword = (event) => {
        let keyword = event.target.value
        let filtered = this.state.news.filter((item) => {
            return item.title.indexOf(keyword) > -1
        })
        this.setState({
            filtered: filtered
        })
    }

    render(){
        let filteredNews = this.state.filtered
        let wholeNews = this.state.news
        return (
            <div>
                <Header keyword = {this.getKeyword}/>
                <NewsList news = {filteredNews.length === 0 ? wholeNews : filteredNews}/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));   