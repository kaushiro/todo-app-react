// react redux's connect function
import { connect } from "react-redux";

// import in the Articles component
import Tasks from "../Components/Tasks";
import { getTasks, postTask } from "../actions/api";

// mapStateToProps is passed in the current state
// it should return an object, which gets passed in as props to the connected component
const mapStateToProps = state => {
    return {
        tasks: state.get("tasks"),
    };
}
const mapDispatchToProps = dispatch => {
    return {
        onLoad: () => dispatch(getTasks()),
        onSubmit: data => dispatch(postTask(data)),
    
    }
}

// connect up mapStateToProps with the Articles component
// Articles' props are now controlled by this file
export default connect(mapStateToProps, mapDispatchToProps)(Tasks);