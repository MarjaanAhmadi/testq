import React,{useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import axiosInstance from "../../../../../routing/axios";
import {toast} from "react-toastify";
import i18next from "i18next";

const SpecSettings = () => {
    const dispatch = useDispatch()
    const queues = useSelector(state => state.queues)
    const [error, setError] = useState(false)
    const [queueName, setQueueName] = useState({
        name: '',
        number: ''
    })

    const setListToStore = (list, type) => {
        dispatch({list,type: type})

    }
    const getQueueList= async () => {
        const response = await axiosInstance.get('/queues/')
        setListToStore(response.data.data, 'SET_QUEUES')
        setListToStore(response.data.data, 'SET_SEARCHED_QUEUES')

    }

    const handleData = (event) => {
        setError(false)

        setQueueName({
            ...queueName,
            name: event.target.value
        })
    };
    const handleNumber= (event) => {
        setError(false)

        setQueueName({
            ...queueName,
            number: event.target.value
        })
    };

    const createQueue = async () => {
        if(queueName.name !== '' && queueName.number !== '')
        {
            const repetetiveName = queues.filter(i => i.name === queueName.name)
            if(repetetiveName.length > 0){
                setError(true);
            }
            else{
                try {
                    const response = await axiosInstance.put('/queues', {data: queueName});
                    toast.success(i18next.t('Queue created successfully'));
                    await setQueueNumber(response.data.data.id);
                    await getQueueList();
                }
                catch(e) {
                    console.log(e);
                }
            }
        }
        else{
            toast.error(i18next.t('Please fill all fields'));
        }
    };
    const setQueueNumber = async (id) => {
        let numbers = [];
        numbers.push(queueName.number);

        const data = {
            flow: {
                data: {
                    id: id
                },
                module: "acdc_member",
                children: {}
            },
            numbers: numbers,
            name: queueName.name
        };
        try {
            await axiosInstance.put(`/callflows`, {
                data: data
            });
        }
        catch (e){

            toast.error(`Number ${queueName.number} exists in callflow Member _01 SmartPBX's Callflow.`);

            console.log(e);
        }
    };
    // const deleteQueuesRoster = async () => {
    //     try {
    //         await axiosInstance.delete(
    //             `/queues/${props.queue.id}/roster/`
    //         );
    //     }
    //     catch(e){
    //         toast.error("Please try again later.");
    //         console.log(e);
    //     }
    //
    // };

    // const deleteQueue = async () => {
    //     try {
    //         await deleteQueuesRoster();
    //         await axiosInstance.delete(
    //             `/queues/${props.queue.id}`
    //         );
    //         toast.error("Queue has been deleted successfully");
    //
    //     }
    //     catch (e) {
    //         toast.error("Please try again later.");
    //         console.log(e);
    //     }
    //
    // };
    return (
        <React.Fragment>
            <div className='row'>
                <div className='col-md-5'>
                    <div className="mb-3">
                        <input
                            placeholder={i18next.t('Type Queue Name')}
                            value={queueName.name}
                            onChange={handleData}
                        />
                    </div>
                </div>
                <div className='col-md-5'>
                    <div className="mb-3">
                        <input
                            placeholder={i18next.t('Type Queue Number')}
                            value={queueName.number}
                            onChange={handleNumber}
                        />
                    </div>
                </div>
                <div className='col-md-2'>
                    <button onClick={createQueue} className='btn btn-success'>
                        {i18next.t('Add to list')}
                    </button>
                </div>
            </div>
            {error === true ? (
                <p className="text-danger">This Queue Name has exist!</p>
            ) : (
                ""
            )}

        </React.Fragment>

    )
};
export default SpecSettings;
