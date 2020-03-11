
export const currentAgents = counter => ({
    type: 'CURRENT_AGENTS',
    counter
});
export const setQueues = queues => ({
    type: 'SET_QUEUES',
    queues
});
export const setAssignedAgent = agents => ({
    type: 'SET_ASSIGNED_AGENTS',
    agents
});
export const setUnassignedAgent = agents => ({
    type: 'SET_UNASSIGNED_AGENTS',
    agents
});
export const setAllAgents = agents => ({
    type: 'SET_ALL_AGENTS',
    agents
});
export const setAgentsStats = agents => ({
    type: 'SET_AGENTS_STATS',
    agents
});
export const setQueueStats = queues => ({
    type: 'SET_QUEUE_STATS',
    queues
});
export const setAgentsStatus = agents => ({
    type: 'SET_AGENTS_STATUS',
    agents
});
export const setMedias = list => ({
    type: 'SET_MEDIAS',
    list
});
export const setEditQueue = queue => ({
    type: 'SET_EDIT_QUEUE',
    queue
});
export const showToast = toast => ({
    type: 'showToast',
    toast
});
export const setAgentHistories = agents => ({
    type: 'SET_AGENT_HISTORY',
    agents
});
export const setAgentHistories = updateAgents => ({
    type: 'UPDATE_AGENT_LIST',
    updateAgents
});
export const setSelectedAgents = selectedAgents => ({
    type: 'SET_SELECTED_AGENTS',
    selectedAgents
});
export const clearSelectedAgents = selectedAgents => ({
    type: 'CLEAR_SELECTED_AGENTS',
    selectedAgents
});
export const setLanguage = language => ({
    type: 'SET_LANGUAGE',
    language
});
export const setCallFlows = callFlows => ({
    type: 'SET_CALL_FLOWS',
    callFlows
});

export const setSearchedQueues = searchedQueues => ({
    type: 'SET_SEARCHED_QUEUES',
    searchedQueues
});
