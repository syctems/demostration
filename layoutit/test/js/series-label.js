/*
 Highcharts JS v6.1.1 (2018-06-27)

 (c) 2009-2017 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(r) {
	"object" === typeof module && module.exports ? module.exports = r : r(Highcharts)
})(function(r) {
	(function(n) {
		function r(c, b, a, k, d, e) {
			c = (e - b) * (a - c) - (k - b) * (d - c);
			return 0 < c ? !0 : 0 > c ? !1 : !0
		}
		function w(c, b, a, k, d, e, f, m) {
			return r(c, b, d, e, f, m) !== r(a, k, d, e, f, m) && r(c, b, a, k, d, e) !== r(c, b, a, k, f, m)
		}
		function A(c, b, a, k, d, e, f, m) {
			return w(c, b, c + a, b, d, e, f, m) || w(c + a, b, c + a, b + k, d, e, f, m) || w(c, b + k, c + a, b + k, d, e, f, m) || w(c, b, c, b + k, d, e, f, m)
		}
		var D = n.addEvent,
			u = n.each,
			B = n.extend,
			y = n.isNumber,
			x = n.pick,
			z = n.Series,
			E = n.SVGRenderer,
			C = n.Chart;
		n.setOptions({
			plotOptions: {
				series: {
					label: {
						enabled: !0,
						connectorAllowed: !1,
						connectorNeighbourDistance: 24,
						minFontSize: null,
						maxFontSize: null,
						onArea: null,
						style: {
							fontWeight: "bold"
						},
						boxesToAvoid: []
					}
				}
			}
		});
		E.prototype.symbols.connector = function(c, b, a, k, d) {
			var e = d && d.anchorX;
			d = d && d.anchorY;
			var f, m, h = a / 2;
			y(e) && y(d) && (f = ["M", e, d], m = b - d, 0 > m && (m = -k - m), m < a && (h = e < c + a / 2 ? m : a - m), d > b + k ? f.push("L", c + h, b + k) : d < b ? f.push("L", c + h, b) : e < c ? f.push("L", c, b + k / 2) : e > c + a && f.push("L", c + a, b + k / 2));
			return f || []
		};
		z.prototype.getPointsOnGraph = function() {
			if (this.xAxis || this.yAxis) {
				var c = this.points,
					b, a, k = [],
					d, e, f, m;
				e = this.graph || this.area;
				f = e.element;
				var h = this.chart.inverted,
					q = this.xAxis;
				b = this.yAxis;
				var v = h ? b.pos : q.pos,
					h = h ? q.pos : b.pos,
					q = x(this.options.label.onArea, !! this.area),
					p = b.getThreshold(this.options.threshold);
				if (this.getPointSpline && f.getPointAtLength && !q) {
					e.toD && (a = e.attr("d"), e.attr({
						d: e.toD
					}));
					m = f.getTotalLength();
					for (d = 0; d < m; d += 16) b = f.getPointAtLength(d), k.push({
						chartX: v + b.x,
						chartY: h + b.y,
						plotX: b.x,
						plotY: b.y
					});
					a && e.attr({
						d: a
					});
					b = c[c.length - 1];
					b.chartX = v + b.plotX;
					b.chartY = h + b.plotY;
					k.push(b)
				} else for (m = c.length, d = 0; d < m; d += 1) {
					b = c[d];
					a = c[d - 1];
					b.chartX = v + b.plotX;
					b.chartY = h + b.plotY;
					q && (b.chartCenterY = h + (b.plotY + x(b.yBottom, p)) / 2);
					if (0 < d && (e = Math.abs(b.chartX - a.chartX), f = Math.abs(b.chartY - a.chartY), e = Math.max(e, f), 16 < e)) for (e = Math.ceil(e / 16), f = 1; f < e; f += 1) k.push({
						chartX: a.chartX + f / e * (b.chartX - a.chartX),
						chartY: a.chartY + f / e * (b.chartY - a.chartY),
						chartCenterY: a.chartCenterY + f / e * (b.chartCenterY - a.chartCenterY),
						plotX: a.plotX + f / e * (b.plotX - a.plotX),
						plotY: a.plotY + f / e * (b.plotY - a.plotY)
					});
					y(b.plotY) && k.push(b)
				}
				return k
			}
		};
		z.prototype.labelFontSize = function(c, b) {
			return c + this.sum / this.chart.labelSeriesMaxSum * (b - c) + "px"
		};
		z.prototype.checkClearPoint = function(c, b, a, k) {
			var d = Number.MAX_VALUE,
				e = Number.MAX_VALUE,
				f, m, h = this.options.label.connectorAllowed,
				q = x(this.options.label.onArea, !! this.area),
				v = this.chart,
				p, l, n, r, t, g;
			for (t = 0; t < v.boxesToAvoid.length; t += 1) if (l = v.boxesToAvoid[t], g = c + a.width, p = b, n = b + a.height, !(c > l.right || g < l.left || p > l.bottom || n < l.top)) return !1;
			for (t = 0; t < v.series.length; t += 1) if (p = v.series[t], l = p.interpolatedPoints, p.visible && l) {
				for (g = 1; g < l.length; g += 1) {
					if (l[g].chartX >= c - 16 && l[g - 1].chartX <= c + a.width + 16) {
						if (A(c, b, a.width, a.height, l[g - 1].chartX, l[g - 1].chartY, l[g].chartX, l[g].chartY)) return !1;
						this === p && !f && k && (f = A(c - 16, b - 16, a.width + 32, a.height + 32, l[g - 1].chartX, l[g - 1].chartY, l[g].chartX, l[g].chartY))
					}!h && !f || this === p && !q || (n = c + a.width / 2 - l[g].chartX, r = b + a.height / 2 - l[g].chartY, d = Math.min(d, n * n + r * r))
				}
				if (!q && h && this === p && (k && !f || d < Math.pow(this.options.label.connectorNeighbourDistance, 2))) {
					for (g = 1; g < l.length; g += 1) f = Math.min(Math.pow(c + a.width / 2 - l[g].chartX, 2) + Math.pow(b + a.height / 2 - l[g].chartY, 2), Math.pow(c - l[g].chartX, 2) + Math.pow(b - l[g].chartY, 2), Math.pow(c + a.width - l[g].chartX, 2) + Math.pow(b - l[g].chartY, 2), Math.pow(c + a.width - l[g].chartX, 2) + Math.pow(b + a.height - l[g].chartY, 2), Math.pow(c - l[g].chartX, 2) + Math.pow(b + a.height - l[g].chartY, 2)), f < e && (e = f, m = l[g]);
					f = !0
				}
			}
			return !k || f ? {
				x: c,
				y: b,
				weight: d - (m ? e : 0),
				connectorPoint: m
			} : !1
		};
		C.prototype.drawSeriesLabels = function() {
			var c = this,
				b = this.labelSeries;
			c.boxesToAvoid = [];
			u(b, function(a) {
				a.interpolatedPoints = a.getPointsOnGraph();
				u(a.options.label.boxesToAvoid || [], function(a) {
					c.boxesToAvoid.push(a)
				})
			});
			u(c.series, function(a) {
				function b(a, b, c) {
					return a > l && a <= l + w - c.width && b >= r && b <= r + t - c.height
				}
				if (a.xAxis || a.yAxis) {
					var d, e, f, m = [],
						h, q, n = a.options.label,
						p = c.inverted,
						l = p ? a.yAxis.pos : a.xAxis.pos,
						r = p ? a.xAxis.pos : a.yAxis.pos,
						w = c.inverted ? a.yAxis.len : a.xAxis.len,
						t = c.inverted ? a.xAxis.len : a.yAxis.len,
						g = a.interpolatedPoints,
						u = x(n.onArea, !! a.area),
						p = a.labelBySeries;
					d = n.minFontSize;
					e = n.maxFontSize;
					if (a.visible && !a.isSeriesBoosting && g) {
						p || (a.labelBySeries = p = c.renderer.label(a.name, 0, -9999, "connector").css(B({
							color: u ? c.renderer.getContrast(a.color) : a.color
						}, a.options.label.style)), d && e && p.css({
							fontSize: a.labelFontSize(d, e)
						}), p.attr({
							padding: 0,
							opacity: c.renderer.forExport ? 1 : 0,
							stroke: a.color,
							"stroke-width": 1,
							zIndex: 3
						}).add().animate({
							opacity: 1
						}, {
							duration: 200
						}));
						d = p.getBBox();
						d.width = Math.round(d.width);
						for (q = g.length - 1; 0 < q; --q) u ? (e = g[q].chartX - d.width / 2, f = g[q].chartCenterY - d.height / 2) : (e = g[q].chartX + 3, f = g[q].chartY - d.height - 3, b(e, f, d) && (h = a.checkClearPoint(e, f, d)), h && m.push(h), e = g[q].chartX + 3, f = g[q].chartY + 3, b(e, f, d) && (h = a.checkClearPoint(e, f, d)), h && m.push(h), e = g[q].chartX - d.width - 3, f = g[q].chartY + 3, b(e, f, d) && (h = a.checkClearPoint(e, f, d)), h && m.push(h), e = g[q].chartX - d.width - 3, f = g[q].chartY - d.height - 3), b(e, f, d) && (h = a.checkClearPoint(e, f, d)), h && m.push(h);
						if (n.connectorAllowed && !m.length && !u) for (e = l + w - d.width; e >= l; e -= 16) for (f = r; f < r + t - d.height; f += 16)(h = a.checkClearPoint(e, f, d, !0)) && m.push(h);
						if (m.length) {
							if (m.sort(function(a, b) {
								return b.weight - a.weight
							}), h = m[0], c.boxesToAvoid.push({
								left: h.x,
								right: h.x + d.width,
								top: h.y,
								bottom: h.y + d.height
							}), m = Math.sqrt(Math.pow(Math.abs(h.x - p.x), 2), Math.pow(Math.abs(h.y - p.y), 2))) n = {
								opacity: c.renderer.forExport ? 1 : 0,
								x: h.x,
								y: h.y
							}, g = {
								opacity: 1
							}, 10 >= m && (g = {
								x: n.x,
								y: n.y
							}, n = {}), a.labelBySeries.attr(B(n, {
								anchorX: h.connectorPoint && h.connectorPoint.plotX + l,
								anchorY: h.connectorPoint && h.connectorPoint.plotY + r
							})).animate(g), a.options.kdNow = !0, a.buildKDTree(), a = a.searchPoint({
								chartX: h.x,
								chartY: h.y
							}, !0), p.closest = [a, h.x - a.plotX, h.y - a.plotY]
						} else p && (a.labelBySeries = p.destroy())
					} else p && (a.labelBySeries = p.destroy())
				}
			})
		};
		D(C, "render", function() {
			var c = this,
				b = Math.max(n.animObject(c.renderer.globalAnimation).duration, 250),
				a = !c.hasRendered;
			c.labelSeries = [];
			c.labelSeriesMaxSum = 0;
			n.clearTimeout(c.seriesLabelTimer);
			u(c.series, function(k) {
				var d = k.options.label,
					e = k.labelBySeries,
					f = e && e.closest;
				d.enabled && k.visible && (k.graph || k.area) && !k.isSeriesBoosting && (c.labelSeries.push(k), d.minFontSize && d.maxFontSize && (k.sum = n.reduce(k.yData, function(a, b) {
					return (a || 0) + (b || 0)
				}, 0), c.labelSeriesMaxSum = Math.max(c.labelSeriesMaxSum, k.sum)), a && (b = Math.max(b, n.animObject(k.options.animation).duration)), f && (void 0 !== f[0].plotX ? e.animate({
					x: f[0].plotX + f[1],
					y: f[0].plotY + f[2]
				}) : e.attr({
					opacity: 0
				})))
			});
			c.seriesLabelTimer = n.syncTimeout(function() {
				c.series && c.labelSeries && c.drawSeriesLabels()
			}, c.renderer.forExport ? 0 : b)
		})
	})(r)
});