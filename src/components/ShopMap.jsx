import React, { PropTypes } from 'react'
import GoogleMap from 'react-google-maps/lib/GoogleMap'
import Marker from 'react-google-maps/lib/Marker'
import ScriptjsLoader from 'react-google-maps/lib/async/ScriptjsLoader'
import CircularProgress from 'material-ui/CircularProgress'

class ShopMap extends React.Component {
  render () {
    let { className, center, markers, zoom } = this.props
    return (
      <ScriptjsLoader
        hostname={"maps.googleapis.com"}
        pathname={"/maps/api/js"}
        query={{ libraries: 'geometry,drawing,places', key: 'AIzaSyDnX9B4SZbbgRTbMYhf7rSq1VNAAU9gqKc' }}
        loadingElement={<CircularProgress style={{ margin: '0 auto' }} />}
        containerElement={<section className={className} />}
        googleMapElement={
          <GoogleMap
            defaultZoom={zoom}
            defaultCenter={center}
            options={{ scrollwheel: false }}
          >
            {markers.map((marker, key) => <Marker key={key} {...marker} />)}
          </GoogleMap>
        }
      />
    )
  }
}

ShopMap.propTypes = {
  className: PropTypes.string,
  center: PropTypes.object.isRequired,
  markers: PropTypes.array.isRequired,
  zoom: PropTypes.number
}

ShopMap.defaultProps = {
  zoom: 18
}

export default ShopMap
