import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axiosInstance from "../../../../../routing/axios";
import {toast} from "react-toastify";
import i18next from "i18next";


const GeneralSettings = () => {
    const dispatch = useDispatch();
    const queue = useSelector(state => state.queue);
    const queueName = queue.name;
    const medias = useSelector(state => state.medias);

    const [specQueue, setSpecQueue] = useState({
        name: "",
        record_caller: false,
        max_queue_size: 0,
        agent_ring_timeout: 0,
        agent_wrapup_time: 0,
        strategy: "",
        enter_when_empty: false,
        moh: "",
        numbers: []
    });

    const setListToStore = (list, type) => {
        dispatch({ list, type: type });
    };
    const getQueueList = async () => {
        const response = await axiosInstance.get(
            " /queues/"
        );
        setListToStore(response.data.data, "SET_QUEUE");
    };

    // const getQueueData = async () => {
    //     const data = await axiosInstance.get(
    //         `/queues/${queue.id}`
    //     );
    //     setSpecQueue(data.data.data);
    // };
    //
    const getUserNumbers = async () => {

        const callNumbers = await axiosInstance.get(
            `/callflows?paginate=false`
        );
        const callFlow = callNumbers.data.data.filter(
            i => i.name === queueName
        )[0];

        return callFlow
    };
    const updateCallflow = async (callflow) => {
        try {

            await axiosInstance.delete(
                `/callflows/${callflow.id}`
            );
        } catch (e) {
            console.log(e);
        }
        const data = {
            flow: {
                data: {
                    id: queue.id
                },
                module: "acdc_member",
                children: {}
            },
            numbers: callflow.numbers,
            name: specQueue.name
        };


        try {
            await axiosInstance.put(`/callflows`, {
                data: data
            });
        } catch (e) {
            console.log(e);
        }
    };

    const updateQueue = async () => {
        try {
            const data = {
                name: specQueue.name,
                record_caller: specQueue.record_caller,
                max_queue_size: specQueue.max_queue_size,
                agent_ring_timeout: specQueue.agent_ring_timeout,
                agent_wrapup_time: specQueue.agent_wrapup_time,
                strategy: specQueue.strategy,
                enter_when_empty: specQueue.enter_when_empty,
                moh: specQueue.moh
            };

            const callFlow = await getUserNumbers();
            if(callFlow !== undefined){
                await updateCallflow(callFlow);

            }
            const updatedDate = await axiosInstance.patch(
                `/queues/${queue.id}`,
                { data: data }
            );

            setSpecQueue(updatedDate.data.data);
            toast.success(i18next.t('Queue edited successfully'));
            await getQueueList();
        }
        catch (e) {
            toast.error(i18next.t('Please try again later.'));
            console.log(e);
        }
    };

    const createMediaList = () => {
        return medias.map(item => {
            return (
                <option id={item.id} value={item.id}>
                    {item.name}
                </option>
            );
        });
    };

    useEffect(() => {
        // getQueueData();
    }, []);

    return (
        <React.Fragment>
            <div controlId="formBasicEmail">
                <label>Name</label>
                <input
                    value={specQueue.name}
                    onChange={event => {
                        setSpecQueue({
                            ...specQueue,
                            name: event.target.value
                        });
                    }}
                    placeholder="Name"
                    aria-label="Name"
                />
            </div>
            <div>
                <label className="mr-2">{i18next.t('Music on Hold:')} </label>

                <select
                    value={specQueue.moh}
                    onChange={event => {
                        setSpecQueue({
                            ...specQueue,
                            moh: event.target.value
                        });
                    }}
                >
                    <option id="" value="">
                        Default
                    </option>
                    <option
                        id="silence_stream://300000"
                        value="silence_stream://300000"
                    >
                        Silence
                    </option>
                    {createMediaList()}
                </select>
            </div>
            <div>
                <input
                    label={i18next.t('Call Recording')}
                    type="checkbox"
                    checked={specQueue.record_caller}
                    onChange={event => {
                        setSpecQueue({
                            ...specQueue,
                            record_caller: event.target.checked
                        });
                    }}
                    className="ml-2"
                />
            </div>
            <div>
                <label>{i18next.t('Max Number of Calls')}</label>
                <input
                    value={specQueue.max_queue_size}
                    onChange={event => {
                        setSpecQueue({
                            ...specQueue,
                            max_queue_size: event.target.value
                        });
                    }}
                    placeholder="Max number of call"
                    aria-label="max num of call"
                />
            </div>
            <div>
                <label>{i18next.t('Max Hold Time (s)')}</label>
                <input
                    value={specQueue.agent_ring_timeout}
                    onChange={event => {
                        setSpecQueue({
                            ...specQueue,
                            agent_ring_timeout: event.target.value
                        });
                    }}
                    placeholder="Max hold time"
                    aria-label="max hold time"
                />
            </div>
            <div>
                <label>{i18next.t('Call Wrap-up Time (s)')}</label>
                <input
                    value={specQueue.agent_wrapup_time}
                    onChange={event => {
                        setSpecQueue({
                            ...specQueue,
                            agent_wrapup_time: event.target.value
                        });
                    }}
                    placeholder="Call wrap up time"
                    aria-label="Call wrap up time"
                />
            </div>
            <div>
                <label className="mr-2">{i18next.t('Music on Hold:')}</label>

                <select
                    value={specQueue.moh}
                    onChange={event => {
                        setSpecQueue({
                            ...specQueue,
                            moh: event.target.value
                        });
                    }}
                >
                    <option id="" value="">
                        Default
                    </option>
                    <option
                        id="silence_stream://300000"
                        value="silence_stream://300000"
                    >
                        Silence
                    </option>
                    {createMediaList()}
                </select>
            </div>
            <div>
                <label className="mr-2">{i18next.t('Strategy')}:</label>
                <select
                    value={specQueue.strategy}
                    onChange={event => {
                        setSpecQueue({
                            ...specQueue,
                            strategy: event.target.value
                        });
                    }}
                >
                    <option value="most_idle">Most Idle</option>
                    <option value="round_robin">Round Robin</option>
                </select>
            </div>
            <div>
                <input
                    label={i18next.t('Allows a caller to enter this queue when no agents are available.')}
                    type="checkbox"
                    checked={specQueue.enter_when_empty}
                    onChange={event => {
                        setSpecQueue({
                            ...specQueue,
                            enter_when_empty: event.target.checked
                        });
                    }}
                />
            </div>


            <button onClick={updateQueue} variant="primary">
                Save changes
            </button>
        </React.Fragment>
    );
};
export default GeneralSettings;
