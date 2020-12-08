// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {
    state = {
        errors : [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
            resolution: '1080p'
            }
        }
    }

    handleChangeBitrate = () => {
        this.setState({
          settings: {
            ...this.state.settings,
            bitrate: 12
          }
        });
      };
    
      handleChangeResolution = () => {
          this.setState({ settings: { ...this.state.settings, video: { ...this.state.video, resolution: "720p"}}})
      }


    render() {
        console.log(this.state)
        return (
            <div>
               <button className="bitrate" onClick={this.handleChangeBitrate}>bitrate</button> 
               <button className="resolution" onClick={this.handleChangeResolution}> resolution</button>
            </div>
        )
    }
}

