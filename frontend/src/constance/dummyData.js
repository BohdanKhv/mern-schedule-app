// create dummy data for users shifts
const employees = [
    {
        id: 1,
        user: {
            firstName: 'John'
        },
        position: 'Barista',
        business: 'Hungry Ghost Coffee',
        isActive: true,
        isManager: false,
        shifts: [
            {
                id: 1,
                user: 'John',
                scheduledBy: 'Bohdan',
                business: 'Hungry Ghost Coffee',
                color: 'bg-primary',
                date: '2022-4-6',
                position: 'Barista',
                startTime: '09:00AM',
                endTime: '03:00PM'
            },
            {
                id: 2,
                user: 'John',
                scheduledBy: 'Bohdan',
                business: 'Hungry Ghost Coffee',
                color: 'bg-primary',
                date: '2022-4-6',
                position: 'Barista',
                startTime: '04:00PM',
                endTime: '06:00PM'
            },
        ]
    },
    {
        id: 2,
        user: {
            firstName: 'Bohdan'
        },
        position: 'Manager',
        business: 'Hungry Ghost Coffee',
        isManager: true,
        isActive: true,
        shifts: [
            {
                id: 4,
                user: 'Bohdan',
                scheduledBy: 'Bohdan',
                business: 'Hungry Ghost Coffee',
                color: 'bg-danger',
                date: '2022-4-6',
                position: 'Manager',
                startTime: '06:00AM',
                endTime: '12:00PM'
            },
            {
                id: 5,
                user: 'Bohdan',
                scheduledBy: 'Bohdan',
                color: 'bg-primary',
                position: 'Manager',
                business: 'Hungry Ghost Coffee',
                date: '2022-4-6',
                startTime: '05:00PM',
                endTime: '11:00PM'
            },
        ]
    },
    {
        id: 3,
        user: {
            firstName: 'Eugene'
        },
        position: 'Barista',
        isActive: false,
        business: 'Hungry Ghost Coffee',
        shifts: [
            {
                id: 6,
                user: 'Eugene',
                scheduledBy: 'Bohdan',
                color: 'bg-primary',
                position: 'Barista',
                business: 'Hungry Ghost Coffee',
                date: '2022-4-6',
                startTime: '07:00AM',
                endTime: '01:00PM'
            },
        ]
    },
]

// create dummy data for open shifts with id, scheduledBy, schedule, business, date, startTime, endTime
const openShifts = [
    {
        id: 1,
        scheduledBy: 'Bohdan',
        color: 'bg-info',
        position: 'Barista',
        business: 'Hungry Ghost Coffee',
        date: '2022-4-6',
        startTime: '09:00AM',
        endTime: '05:00PM'
    },
    {
        id: 2,
        scheduledBy: 'Bohdan',
        color: 'bg-info',
        position: 'Barista',
        business: 'Hungry Ghost Coffee',
        date: '2022-4-6',
        startTime: '06:00AM',
        endTime: '12:00PM'
    },
    {
        id: 3,
        scheduledBy: 'Bohdan',
        color: 'bg-info',
        position: 'Barista',
        business: 'Hungry Ghost Coffee',
        date: '2022-4-8',
        startTime: '06:00AM',
        endTime: '01:00PM'
    }
]

const hours = [ '12AM', '01AM', '02AM', '03AM', '04AM', '05AM', '06AM', '07AM', '08AM', '09AM', '10AM', '11AM', '12PM', '01PM', '02PM', '03PM', '04PM', '05PM', '06PM', '07PM', '08PM', '09PM', '10PM', '11PM' ];

export { employees, openShifts, hours }