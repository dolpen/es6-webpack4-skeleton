import React from 'react';
import PropTypes from 'prop-types';

class ReservationEntry extends React.Component {
  constructor(props){
    super(props);
  }

  formatDate(date, format){
    if (!format) format = 'YYYY-MM-DD hh:mm:ss.SSS';
    format = format.replace(/YYYY/g, date.getFullYear());
    format = format.replace(/MM/g, ('0' + (date.getMonth() + 1)).slice(-2));
    format = format.replace(/DD/g, ('0' + date.getDate()).slice(-2));
    format = format.replace(/hh/g, ('0' + date.getHours()).slice(-2));
    format = format.replace(/mm/g, ('0' + date.getMinutes()).slice(-2));
    format = format.replace(/ss/g, ('0' + date.getSeconds()).slice(-2));
    if (format.match(/S/g)){
      const milliSeconds = ('00' + date.getMilliseconds()).slice(-3);
      const length = format.match(/S/g).length;
      for (let i = 0; i < length; i++) format = format.replace(/S/, milliSeconds.substring(i, i + 1));
    }
    return format;
  }

  del(e){
    e.preventDefault();
    this.props.del(parseInt(this.props.time));
  }

  render(){
    const { time, message } = this.props;
    return (<div key={time} className="tl-wrapper clearfix col-lg-12">
      <div className="tl-title">{message}</div>
      <span className="tl-timestamp">{
        this.formatDate(new Date(time), 'YYYY/MM/DD hh:mm:ss')
      }</span>
      <button className="btn btn-default pull-right" onClick={this.del.bind(this)}>
        <i className="fa fa-trash" aria-hidden="true"/>
      </button>
    </div>);
  }
}

ReservationEntry.propTypes = {
  del: PropTypes.func,
  time: PropTypes.number,
  message: PropTypes.string
};
ReservationEntry.defaultProps = {};

export default ReservationEntry;
