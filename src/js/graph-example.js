(function graphExample () {
	window.graphData = {
		nodes: [
			{
				id: 'node1',
				x: 50,
				y: 200,
				data: {}
			},
			{
				id: 'node2',
				x: 100,
				y: 200,
				data: {}
			}
		],
		edges: [
			{
				id: 'edge1',
				source: {
					x: 50,
					y: 200,
				},
				target: {
					x: 100,
					y: 200
				}
			}
		]
	};
} ());
