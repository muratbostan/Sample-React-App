import React,{Component} from 'react'
import { Player } from 'video-react';
import "../../../node_modules/video-react/dist/video-react.css"; // import css


class ResponsivePlayer extends Component {
 
    render () {
      return (
        <div className='player-wrapper'>
          <Player
            className='react-player'
            src={this.props.video}
            width='100%'
            height='100%'
          />
        </div>
      )
    }
  }

  export default ResponsivePlayer;