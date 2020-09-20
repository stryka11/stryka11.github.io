import { connect } from 'react-redux'
import { updatePin } from './StartActions'

class StartModule extends React.Component {

}

export default connect(
  null,
  { updatePin}
)(StartModule)