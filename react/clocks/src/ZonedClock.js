import React from 'react';
import './ZonedClock.css';

class ZonedClock extends React.Component {
  constructor(props)
  {
    super(props);
    // Don't call this.setState() here!
    this.moment = require('moment-timezone');
    this.state = { currentTime: this.moment().tz(props.tz).format('YYYY-MM-DD HH:mm:ss ZZ') };
  }
  componentDidMount()
  {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount()
  {
    clearInterval(this.timerID);
  }

  tick()
  {
    this.setState({currentTime: this.moment().tz(this.props.tz).format('YYYY-MM-DD HH:mm:ss ZZ')});
  }

  render() {
    return <div className="time-zone-component">
      <div className="time">
      {this.state.currentTime}
      </div>
      <div className="timezone">
      {this.props.tz}
      </div>
    </div>;
  }
}

export default ZonedClock;
