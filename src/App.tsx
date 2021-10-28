
import React from "react";
import { Provider } from 'react-redux';
import { store } from './state';
import { Router } from './components/router/Router';
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Child from './Child'

const youtubeChannelId = require('get-youtube-channel-id')
let oldDatacountList = [];

class App extends React.Component<{}, any>{
  constructor(props) {
    super(props);
    this.state = { DataCountList: [], DataCount: { subscriberCount: '', videoCount: '', viewCount: '' }, url: '', API_KEY: "AIzaSyCY6PqQqHzpcRYRyL6OZW7quNyf1fbs5qI" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {

    this.setState({ url: e.target.value });
  }
  async handleSubmit(e) {
    //  this.state.DataCountList[e.target.index]=e.target.value;
    // if(this.state.DataCountList.length>0){
    // this.setState({OldDataCountList:this.state.DataCountList})}
    oldDatacountList = this.state.DataCountList;
    e.preventDefault()
    const result = await youtubeChannelId(this.state.url)
    fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${result.id}&key=${this.state.API_KEY}`)
      .then((data) => data.json())
      .then((result) => {
        //  this.setState({ DataCountList: [result.items[0].statistics] })
        oldDatacountList[0]=(result.items[0].statistics)
        this.setState({ DataCountList: oldDatacountList });
        // this.setState({ DataCount: result.items[0].statistics })

        // this.setState({ DataCountList: [result.items[0].statistics.subscriberCount,this.state.OldDataCountList] })
      })
    console.log(result)
  }
  render() {
    return (
      <Provider store={store}>
        <Router />

        <Form>
          <Form.Group controlId="channelUrl">
            <Form.Label>Channel URL:</Form.Label>
            <Form.Control type="text" name="url" style={{ fontSize: 12, padding: 3 }}
              onChange={this.handleChange} value={this.state.url} required placeholder="Enter Channel URL" />
          </Form.Group>
          <Button variant="primary" type="submit" value={this.state.DataCountList} onClick={this.handleSubmit}>
            Submit
      </Button>
        </Form>
        { this.state.DataCountList.forEach(element => {
          <span>'Total subscribers:' {element.subscriberCount}+
          'Total Videos: '{element.videoCount}+
    'Total Views:' {element.viewCount}</span>
        })
        }
<Child></Child>
      </Provider>
    );
  }
}
export default App


