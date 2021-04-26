import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';

const GetData = ({ getNews, status, payload }) => {
    return (
        <div>
            <div>{status}</div>
            <div>{JSON.stringify(payload)}</div>
            <div>{payload.id}</div>
            <div>{payload.title}</div>
            <div>{payload.author}</div>
            <Button onClick={getNews}>Data</Button>
        </div>)
}
const mapDispatchToProps = (dispatch) => {
    return {
        getNews: () => dispatch({ type: "GET_DATA" })
    }
};
const mapStateToProps = (state) => {
    return {
        status: state.dataReducer.status,
        payload: state.dataReducer.payload,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(GetData);