import React from 'react';
import ZonedClock from './ZonedClock.js';
import './ZonedClockCollection.css';

class ZonedClockCollection extends React.Component {
  constructor(props)
  {
    super(props);

    this.moment = require('moment-timezone');
    this.state = { currentMoment: this.moment() };
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
    this.setState({currentMoment: this.moment()});
  }


  render() {
    var clockList = this.props.zones.map((zone) =>
        <ZonedClock moment={this.state.currentMoment} tz={zone}>
        </ZonedClock>
      );

    return <div className="clock-container">
      {clockList}
    </div>;
  }
}

export default ZonedClockCollection;
