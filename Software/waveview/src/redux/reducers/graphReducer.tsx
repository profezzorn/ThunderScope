import GraphStatus from '../../configuration/enums/graphStatus';
import GraphInitialState from '../initialStates/graphInitialState';

export default function GraphReducer(state = GraphInitialState, action: {type: any, payload: any}) {
  switch(action.type) {
    case "graph/changeStatus":
      var newStatus = state.currentStatus === GraphStatus.On ? GraphStatus.Off : GraphStatus.On;
      return {
        ...state,
        currentStatus: newStatus
      };
    case "graph/singleMode":
      // Need to implement this in the tick generator to stop/pause polling when in single mode
      return {
        ...state,
        currentStatus: GraphStatus.Off,
        singleMode: !state.singleMode
      };
    case "graph/tick":
      return {
        ...state,
        tickCount: state.tickCount + 1
      }
    case "graph/xDomain":
      return {
        ...state,
        xDomain: action.payload
      }
    case "graph/yDomain":
      return {
        ...state,
        yDomain: action.payload
      }
    default:
      return state;
  }
}