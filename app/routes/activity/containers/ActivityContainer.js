import { connect } from 'react-redux'
import { fetchActivity } from '../../../reducers/activity'
import Activity from '../components/Activity'

const mapDispatchToProps = {
	fetchActivity
}

const mapStateToProps = (state) => ({
	activity: state.activity,
	ticker: state.ticker
})

export default connect(mapStateToProps, mapDispatchToProps)(Activity)