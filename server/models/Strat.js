const mongoose = require('mongoose');

const Strat = new mongoose.Schema({
	strategies: {
		type: Array,
		required: true,
	}
});

const StratModel = mongoose.model('Strat', Strat);

module.exports = StratModel;
