import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReservationPanel from './panel';
import ReservationList from './list';

const defaultProps = {};

class Container extends React.Component {
  constructor(props){
    super(props);
  }

  del(mills){
    this.props.del(mills);
  }

  add(mills, title){
    this.props.add(mills, title);
  }

  render(){
    const { data } = this.props;
    return (
        <div className="row">
          <ReservationPanel add={this.add.bind(this)}/>
          <ReservationList data={data} del={this.del.bind(this)}/>
        </div>
    );
  }
}

Container.propTypes = {
  data: PropTypes.array,
  add: PropTypes.func,
  del: PropTypes.func
};
Container.defaultProps = defaultProps;


const mapStateToProps = (state, ownProps) =>{
  return {
    data: state.reservation.data,
    add: ownProps.add,
    del: ownProps.del
  }
};
const mapDispatchToProps = undefined; //(dispatch) => {};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Container);
