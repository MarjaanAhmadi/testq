import parseCookie from '../routing/parseCookie';
const initialState = {
  counter: 0,
  queues: [],
  assignedAgents: [],
  unAssignedAgents: [],
  agents:[],
  agentsStats: [],
  queueStats: [],
  agentsStatus: [],
  queue: {},
  agentHistories: [],
  users: [],
  updateAgents: false,
  selectedAgents: [],
  medias: [],
  language: 'eng',
  callFlows: [],
  searchedQueues: [],
  // language: JSON.parse(parseCookie(document.cookie)['monster-auth']).language
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CURRENT_AGENTS': {
      return {
        ...state,
        counter: state.counter
      };
    }
    case 'SET_QUEUES': {
      return {
        ...state,
        queues: action.queues
      };
    }
    case 'SET_SEARCHED_QUEUES': {
      return {
        ...state,
        searchedQueues: action.searchedQueues
      };
    }
    case 'SET_ASSIGNED_AGENTS': {
      return {
        ...state,
        assignedAgents: action.list
      };
    }
    case 'SET_UNASSIGNED_AGENTS': {
      return {
        ...state,
        unAssignedAgents: action.list
      };
    }
    case 'SET_ALL_AGENTS': {
      return {
        ...state,
        agents: action.list
      };
    }
    case 'SET_ALL_USERS': {
      return {
        ...state,
        users: action.list
      };
    }
    case 'SET_AGENTS_STATS': {
      return {
        ...state,
        agentsStats: action.list
      };
    }
    case 'SET_QUEUE_STATS': {
      return {
        ...state,
        queueStats: action.list
      };
    }
    case 'SET_AGENTS_STATUS': {
      return {
        ...state,
        agentsStatus: action.list
      };
    }
    case 'SET_EDIT_QUEUE': {

      return {
        ...state,
        queue: action.queue
      };
    }
    case 'SHOW_TOAST': {

      return {
        ...state,
        toast: action.toast
      };
    }
    case 'SET_AGENT_HISTORY': {

      return {
        ...state,
        agentHistories: action.list
      };
    }
    case 'UPDATE_AGENT_LIST': {

      return {
        ...state,
        updateAgents: action.updateAgents
      };
    }
    case 'SET_SELECTED_AGENTS': {

      let list = state.selectedAgents;
      list.push(action.selectedAgents);
      return {
        ...state,
        selectedAgents: list
      }
    }
    case 'SET_MEDIAS': {
      return {
        ...state,
        medias: action.list
      }
    }

    case 'CLEAR_SELECTED_AGENTS': {

      return {
        ...state,
        selectedAgents: action.selectedAgents
      }
    }
    case 'SET_LANGUAGE': {

      return {
        ...state,
        language: action.language
      }
    }

    case 'SET_CALL_FLOWS': {
      return {
        ...state,
        callFlows: action.callFlows
      }
    }
    default:
      return state;
  }
};
export default reducer;
