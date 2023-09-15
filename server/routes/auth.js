const express = require('express');
const router = express.Router();
const GraphModel = require('../models/Graph');
const { sendcsv } = require('../utils/helpers');
const StratModel = require('../models/Strat');

router.post(
	'/sendcsv',
	async (req, res) => {
		const link = req.body.link;
		try {
			let response = await sendcsv({ link: link });
			return response;
		}
		catch (error) {
			console.error('Error sending mail:', error);
			return res.status(500).json({ error: 'Internal server error' });
		}
	}
);

router.post(
	'/promo',
	async (req, res) => {
		const {
			title,
			subTitle,
			additionalText,
			productImageLink,
			companyLogoLink,
			validityDate,
			email
		} = req.body;
		const link = "additionaltext=" + additionalText + "&offertitle=" + title + "&subtitle=" + subTitle + "productimg=" + productImageLink + "&companyimg=" + companyLogoLink + "&receivers=" + email + "&valdate=" + validityDate;
		console.log(link);
		try {
			let response = await sendMails({ link: link });
			return 200;
			return response;
		}
		catch (error) {
			console.error('Error sending mail:', error);
			return res.status(500).json({ error: 'Internal server error' });
		}
	}
);

router.get('/getgraphs', async (req, res) => {
	console.log('Collection Name:', GraphModel.collection.name);

	try {
		const graph = await GraphModel.find({ ID: 111 });

		if (!graph || graph.length === 0) {
			return res.status(404).json({ error: 'Graph not found' });
		}

		return res.status(200).json(graph);
	} catch (error) {
		console.error('Error fetching graph:', error);
		return res.status(500).json({ error: 'Internal server error' });
	}
});

router.get('/getstrat', async (req, res) => {
	console.log('Collection Name:', StratModel.collection.name);

	try {
		const graph = await StratModel.find({ ID: 222 });

		if (!graph || graph.length === 0) {
			return res.status(404).json({ error: 'Graph not found' });
		}

		return res.status(200).json(graph);
	} catch (error) {
		console.error('Error fetching graph:', error);
		return res.status(500).json({ error: 'Internal server error' });
	}
});

module.exports = router;
