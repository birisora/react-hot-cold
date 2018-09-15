import React from 'react';
// import connect
import { connect } from 'react-redux';

export function AuralStatus(props) {
  return (
    <p
      id="status-readout"
      className="visuallyhidden"
      aria-live="assertive"
      aria-atomic="true"
    >
      {props.auralStatus}
    </p>
  );
}

// grab state we want
const mapStateToProps = state => ({
  auralStatus: state.auralStatus
});

// have the new connect component be default with new features
export default connect(mapStateToProps)(AuralStatus);
