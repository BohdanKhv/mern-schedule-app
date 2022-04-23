const mongoose = require('mongoose');


const type = ['Time-off', 'Issue', 'Request', 'Complaint', 'Other'];
const status = ['Pending', 'Resolved', 'Approved', 'Rejected'];


const ticketSchema = new mongoose.Schema({
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
        required: false
    },
    business: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Business',
        required: false
    },
    message: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: type,
        required: true
    },
    status: {
        type: String,
        enum: status,
        default: 'Pending'
    },
    targetEmployee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
        required: false
    },
}, { timestamps: true });


module.exports = mongoose.model('Ticket', ticketSchema);