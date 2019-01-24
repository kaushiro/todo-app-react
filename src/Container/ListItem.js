import { connect } from "react-redux";
import ListItem from "../Components/ListItem";
import { getTasks, postTask } from "../actions/api";

// the second argument passed to mapStateToProps represent the props passed in from the parent
const mapStateToProps = (state, { id }) => {
    const tasks = state.get("tasks");
    const task = tasks.find(t => t.get("id") === +id);

    return {
      task: task
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onSubmit: data => dispatch(postTask(data)),    
    }
}

// connect up mapStateToProps with the Article component
// Article's props are now controlled by this file
export default connect(mapStateToProps, mapDispatchToProps)(ListItem);