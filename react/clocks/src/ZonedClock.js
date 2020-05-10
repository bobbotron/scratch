import React from 'react';
import './ZonedClock.css';

class ZonedClock extends React.Component {
  constructor(props)
  {
    super(props);
  }

  render() {
    this.currentTime = this.props.moment.tz(this.props.tz).format('YYYY-MM-DD HH:mm:ss ZZ');
    return <div className="time-zone-component">
      <div className="time">
      {this.currentTime}
      </div>
      <div className="timezone">
      {this.props.tz}
      </div>
    </div>;
  }
}

export default ZonedClock;
