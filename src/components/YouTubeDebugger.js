import React, { Component } from "react";

class YouTubeDebugger extends Component {
  constructor() {
    super();
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: "1080p",
        },
      },
    };
  }

  render() {
    return (
      <div>
        <button onClick={this.setBitrate} className="bitrate">
          Bitrate
        </button>
        <button onClick={this.setResolution} className="resolution">
          Resolution
        </button>
      </div>
    );
  }

  setBitrate = () => {
    this.setState((prevState) => {
      return {
        settings: {
          ...prevState.settings,
          bitrate: 12,
        },
      };
    });
  };

  setResolution = () => {
    this.setState((prevState) => {
      return {
        settings: {
          ...prevState.settings,
          video: {
            resolution: "720p",
          },
        },
      };
    });
  };
}

export default YouTubeDebugger;
