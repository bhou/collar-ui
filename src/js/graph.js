(function graphModule(Snap) {
	class Node {
		constructor(id, x, y, data) {
			this.id = id;
			this.x = (!x && x != 0) ? 0 : x;
			this.y = (!y && y != 0) ? 0 : y;
			this.data = data;
		}
	}

	class Graph {
		constructor(eleId) {
			this.canvas = Snap('#' + eleId);
			this.eleId = eleId;
			this.data = {
				nodes: [],
				edges: []
			}
		}

		addNode(node) {
			let n = this.canvas.circle(node.x, node.y, 10);	
			n.addClass('node');
		}
	}

	var g = new Graph('graph-example');
	g.addNode(new Node('node1', 100, 100));

}(Snap));
