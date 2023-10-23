import React from 'react'
import Proptypes from 'prop-types';


const Props = (props) => {
  return (
    <center>

      <h2>I am a { props.brand }!</h2>;

      <h5>i am in {props.city} city ?</h5>

      <h4>`Hi Heavy rain in {props.country} </h4>

    </center>
  );
};



Props.propTypes = {
  brand : Proptypes.string.isRequired,   // console me error dega hamne number used kiya toh
  city : Proptypes.string,
  country : Proptypes.string,
}

export default Props;
