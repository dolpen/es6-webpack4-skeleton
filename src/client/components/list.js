import React from 'react';
import PropTypes from 'prop-types';
import ReservationEntry from './entry';

const defaultProps = {
  data: []
};

class ReservationList extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const { data, del } = this.props;
    return (
        <div className="col-lg-6">
          <h3>通知一覧</h3>
          <div className="container">
            {
              data.map((d) =>{
                return <ReservationEntry key={d.time} time={d.time} message={d.message} del={del}/>
              })
            }
          </div>
        </div>
    );
  }
}

ReservationList.propTypes = {
  data : PropTypes.array,
  del : PropTypes.func
};
ReservationList.defaultProps = defaultProps;

export default ReservationList;
