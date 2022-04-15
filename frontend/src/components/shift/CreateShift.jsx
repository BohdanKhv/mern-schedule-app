import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import { toast } from 'react-toastify';
import { Modal } from '../';
import { createShift } from '../../features/shift/shiftSlice';
import { customSelectModalStyles, hoursArray, positions } from '../../constance/localData';

const positionsSelect = positions.map(position => {
    return {
        value: position,
        label: position
    }
})

const CreateShift = ({ date, employee, startTime }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const dispatch = useDispatch();
    const { id } = useParams();

    const [shift, setShift] = useState({
        startTime: startTime ? {value: startTime, label: startTime} : null,
        endTime: null,
        position: null,
    });


    const hoursSelectStart = hoursArray
    .filter((hour, index) => {
        return shift.endTime ? index < hoursArray.indexOf(shift.endTime.value) : true;
    })
    .map(hour => {
        return {
            value: hour,
            label: hour
        }
    })

    const hoursSelectEnd = hoursArray
    .filter((hour, index) => {
        return shift.startTime ? index > hoursArray.indexOf(shift.startTime.value) : true;
    })
    .map(hour => {
        return {
            value: hour,
            label: hour
        }
    })

    const onSubmit = () => {
        if(shift.startTime && shift.endTime) {
            const data = {
                employee: employee ? employee._id : null,
                business: employee ? employee.business : id,
                date: date,
                position: shift.position ? shift.position.value : null,
                startTime: shift.startTime.value,
                endTime: shift.endTime.value
            }
            // console.log(data)
            dispatch(createShift(data));
            setModalIsOpen(false);
        } else {
            toast.error("Please select start and end time");
        }
    }


    return (
    <>
        <Modal
        setModalIsOpen={setModalIsOpen}
        modalIsOpen={modalIsOpen}
        actionBtnText="Save"
        onSubmit={onSubmit}
        contentLabel={
            `Create ${employee ? 
            'Shift for ' + employee.firstName 
            : 'Open Shift'} on ${date.toLocaleString('en-us', {  weekday: 'short', month: 'short', day: 'numeric' })}`
            }
        >
            <div className="create-shift-form">
                <div className="form-group-row">
                    <div className="form-group">
                        <label>Start *</label>
                        <Select
                        value={shift.startTime}
                        onChange={(e) => {setShift({...shift, startTime: e})}}
                        options={hoursSelectStart}
                        styles={customSelectModalStyles}
                        />
                    </div>
                    <div className="form-group">
                        <label>End *</label>
                        <Select
                        value={shift.endTime}
                        onChange={(e) => {setShift({...shift, endTime: e});}}
                        options={hoursSelectEnd}
                        styles={customSelectModalStyles}
                        />
                    </div>
                </div>
                {(!employee || !employee.position) && (
                    <div className="form-group">
                        <label>Position</label>
                        <Select
                            value={shift.position}
                            onChange={(e) => { setShift({ ...shift, position: e })} }
                            options={positionsSelect}
                            styles={customSelectModalStyles}
                        />
                    </div>
                )}
            </div>
        </Modal>
        <div className="create-shift flex align-end" title="Create Shift">
            <div className="flex align-center w-100 h-100" onClick={() => setModalIsOpen(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                </svg>
            </div>
        </div>
    </>
    )
}

export default CreateShift