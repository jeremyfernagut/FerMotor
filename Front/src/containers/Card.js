import { connect } from 'react-redux';
import Home from '../components/Home';

const mapState = ( state ) => ({
    Cards: state.Home.cards
});

const mapDispatch = {};

export default connect(mapState, mapDispatch)(Home); 