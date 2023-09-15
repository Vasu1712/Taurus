const mongoose = require('mongoose');

const Graph = new mongoose.Schema({
	correlation_1: {
		type: Object,
		required: true,
	},
	correlation_2: {
		type: Object,
		required: true,
	},
	correlation_3: {
		type: Object,
		required: true,
	},
	id: {
		type: Number
	}
});

const GraphModel = mongoose.model('Graph', Graph);

module.exports = GraphModel;
