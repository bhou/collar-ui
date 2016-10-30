'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function graphModule(Snap) {
	var Node = function Node(id, x, y, data) {
		_classCallCheck(this, Node);

		this.id = id;
		this.x = !x && x != 0 ? 0 : x;
		this.y = !y && y != 0 ? 0 : y;
		this.data = data;
	};

	var Graph = function () {
		function Graph(eleId) {
			_classCallCheck(this, Graph);

			this.canvas = Snap('#' + eleId);
			this.eleId = eleId;
			this.data = {
				nodes: [],
				edges: []
			};
		}

		_createClass(Graph, [{
			key: 'addNode',
			value: function addNode(node) {
				var n = this.canvas.circle(node.x, node.y, 10);
				n.addClass('node');
			}
		}]);

		return Graph;
	}();

	var g = new Graph('graph-example');
	g.addNode(new Node('node1', 100, 100));
})(Snap);