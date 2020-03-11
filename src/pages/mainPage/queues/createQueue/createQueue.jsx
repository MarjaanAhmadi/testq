import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axiosInstance from "../../../../routing/axios";
import {toast} from "react-toastify";
import i18next from "i18next";
import GeneralSettings from "./generalSettings/generalSettings";
import SpecSettings from "./specSettings/specSettings";


const CreateQueue = () => {
    const dispatch = useDispatch();
    const queue = useSelector(state => state.queue);
    const queueName = queue.name;
    const medias = useSelector(state => state.medias);
    const [ns, setNs] = useState(false)
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
            <SpecSettings/>

            <GeneralSettings/>
        </React.Fragment>
    );
};
export default CreateQueue;
