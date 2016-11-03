(function(z) {
  var Cn = function(a) {
    a = a.tabIndex;
    return z.pa(a) && 0 <= a && 32768 > a
  };
  var Dn = function(a) {
    a = a.getAttributeNode("tabindex");
    return null != a && a.specified
  };
  z.En = function(a, b) {
    var c = b.getBoundingClientRect();
    return c.bottom < a.YO || c.top > a.size.height ? !1 : !0
  };
  var Fn = function(a, b) {
    return z.ob(a.HE || [], function(a) {
      return b === a || z.nf(a, b)
    })
  };
  var Gn = function(a) {
    if (a.vk) throw Error("Can not change this state of the popup while showing.");
  };
  var Hn = function(a) {
    return a.Vj.length ? a.Vj.pop() : a.io()
  };
  var In = function(a) {
    try {
      return a && a.activeElement
    } catch (b) {}
    return null
  };
  var Jn = function(a) {
    return Dn(a) && Cn(a)
  };
  var Kn = function(a) {
    a = String(a);
    if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
      return eval("(" + a + ")")
    } catch (b) {}
    throw Error("Invalid JSON string: " + a);
  };
  z.Z = function(a, b) {
    return z.aa[a] = b
  };
  z.Ln = function(a, b) {
    var c = z.en;
    c.ea.g(c, "update", function f() {
      window.document.body.contains(a) && a.getBoundingClientRect().bottom < this.size.height && (b.call(void 0), this.ea.oa(this, "update", f))
    });
    c.update()
  };
  var Mn = function(a) {
    z.wk ? z.U.enable(a.input, "placeholder-hilight", !1) : z.U.enable(a.label, "placeholder-label-hilight", !1)
  };
  z.Nn = function(a) {
    var b = z.W;
    b.rJ ? (b.rJ.innerHTML = a, z.P(b.h, !0)) : z.V.message(a)
  };
  var On = function(a, b) {
    b && b.length && z.A(b, function(a) {
      this.dispatchEvent(new z.Yj(a[0], a[1]))
    }, a)
  };
  z.Pn = function(a, b) {
    z.G.call(this);
    this.ea = new z.xd(this);
    this.Qh(a || null);
    b && (this.wb = b)
  };
  z.Qn = function(a, b) {
    return a.ze.get(b)
  };
  var Rn = function(a, b) {
    return a.$c && b ? z.kb(a.$c, b) : -1
  };
  z.Sn = function(a, b) {
    a.Kh(b.parentNode, b)
  };
  var Tn = function(a, b) {
    a.Ta && a.Ta.of && (z.Kb(a.Ta.of, a.tb), z.Lb(a.Ta.of, b, a));
    a.tb = b
  };
  var Un = function(a) {
    return new z.rg(a.top, a.left + a.width, a.top + a.height, a.left)
  };
  var Vn = function(a) {
    return "CSS1Compat" == a.Qa.compatMode
  };
  z.Wn = function(a) {
    if (a.da) return Kn(a.da.responseText)
  };
  var Xn = function(a) {
    z.Sd(a);
    for (var b = {}, c = 0; c < a.fb.length; c++) {
      var d = a.fb[c];
      b[d] = a.Nb[d]
    }
    return b
  };
  var Yn = function(a) {
    return a
  };
  var Zn = function() {
    return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ (0, z.H)()).toString(36)
  };
  var $n = function(a) {
    a = a ? z.Ke(a) : window.document;
    return !z.C || 9 <= z.Vg || Vn(z.Ie(a)) ? a.documentElement : a.body
  };
  z.ao = function(a) {
    var b = z.Ke(a),
      c = new z.Ge(0, 0),
      d = $n(b);
    if (a == d) return c;
    a = z.Dg(a);
    b = z.xf(z.Ie(b));
    c.x = a.left + b.x;
    c.y = a.top + b.y;
    return c
  };
  var bo = function(a, b) {
    for (var c = b; c = c.previousSibling;)
      if (c == a) return -1;
    return 1
  };
  z.co = function(a, b) {
    for (var c in a)
      if (a[c] == b) return !0;
    return !1
  };
  z.eo = function(a) {
    var b = 0,
      c;
    for (c in a) b++;
    return b
  };
  z.fo = function(a, b, c) {
    return Array.prototype.every.call(a, b, c)
  };
  var go = function(a) {
    return a.replace(/&([^;]+);/g, function(a, c) {
      switch (c) {
        case "amp":
          return "\x26";
        case "lt":
          return "\x3c";
        case "gt":
          return "\x3e";
        case "quot":
          return '"';
        default:
          if ("#" == c.charAt(0)) {
            var d = Number("0" + c.substr(1));
            if (!(0, window.isNaN)(d)) return String.fromCharCode(d)
          }
          return a
      }
    })
  };
  var ho = function(a) {
    var b = {
        "\x26amp;": "\x26",
        "\x26lt;": "\x3c",
        "\x26gt;": "\x3e",
        "\x26quot;": '"'
      },
      c;
    c = z.u.document.createElement("div");
    return a.replace(io, function(a, f) {
      var g = b[a];
      if (g) return g;
      if ("#" == f.charAt(0)) {
        var h = Number("0" + f.substr(1));
        (0, window.isNaN)(h) || (g = String.fromCharCode(h))
      }
      g || (c.innerHTML = a + " ", g = c.firstChild.nodeValue.slice(0, -1));
      return b[a] = g
    })
  };
  z.jo = function(a) {
    if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || (z.D || z.Gc) && 0 == a) return !0;
    switch (a) {
      case 32:
      case 43:
      case 63:
      case 64:
      case 107:
      case 109:
      case 110:
      case 111:
      case 186:
      case 59:
      case 189:
      case 187:
      case 61:
      case 188:
      case 190:
      case 191:
      case 192:
      case 222:
      case 219:
      case 220:
      case 221:
        return !0;
      default:
        return !1
    }
  };
  z.ko = function(a) {
    return new z.He(a.offsetWidth, a.offsetHeight)
  };
  var lo = function(a) {
    if (z.C && !(8 <= z.Vg)) return a.offsetParent;
    var b = z.Ke(a),
      c = z.zg(a, "position"),
      d = "fixed" == c || "absolute" == c;
    for (a = a.parentNode; a && a != b; a = a.parentNode)
      if (11 == a.nodeType && a.host && (a = a.host), c = z.zg(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
    return null
  };
  var mo = function(a, b, c, d) {
    if (null != a)
      for (a = a.firstChild; a;) {
        if (b(a) && (c.push(a), d) || mo(a, b, c, d)) return !0;
        a = a.nextSibling
      }
    return !1
  };
  var no = function(a, b) {
    var c = a.parentNode;
    if (c == b) return -1;
    for (var d = b; d.parentNode != c;) d = d.parentNode;
    return bo(d, a)
  };
  var oo = function(a, b) {
    return new z.Ge(a.x - b.x, a.y - b.y)
  };
  var po = function(a) {
    this.kv = a
  };
  var qo = function(a, b, c) {
    if (null == b) c.push("null");
    else {
      if ("object" == typeof b) {
        if (z.ma(b)) {
          a.serializeArray(b, c);
          return
        }
        if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
        else {
          c.push("{");
          var d = "",
            f;
          for (f in b)
            if (Object.prototype.hasOwnProperty.call(b, f)) {
              var g = b[f];
              "function" != typeof g && (c.push(d), ro(f, c), c.push(":"), qo(a, a.kv ? a.kv.call(b, f, g) : g, c), d = ",")
            }
          c.push("}");
          return
        }
      }
      switch (typeof b) {
        case "string":
          ro(b, c);
          break;
        case "number":
          c.push((0, window.isFinite)(b) && !(0, window.isNaN)(b) ?
            String(b) : "null");
          break;
        case "boolean":
          c.push(String(b));
          break;
        case "function":
          c.push("null");
          break;
        default:
          throw Error("Unknown type: " + typeof b);
      }
    }
  };
  var ro = function(a, b) {
    b.push('"', a.replace(z.Sl, function(a) {
      var b = so[a];
      b || (b = "\\u" + (a.charCodeAt(0) | 65536).toString(16).substr(1), so[a] = b);
      return b
    }), '"')
  };
  var to = function(a) {
    var b = typeof a;
    return "object" == b && a || "function" == b ? "o" + z.ta(a) : b.substr(0, 1) + a
  };
  var uo = function(a, b) {
    if ("function" == typeof a.every) return a.every(b, void 0);
    if (z.na(a) || z.oa(a)) return z.fo(a, b, void 0);
    for (var c = z.Id(a), d = z.Hd(a), f = d.length, g = 0; g < f; g++)
      if (!b.call(void 0, d[g], c && c[g], a)) return !1;
    return !0
  };
  var vo = function(a) {
    return a.hb && "function" == typeof a.hb ? a.hb() : z.na(a) || z.oa(a) ? a.length : z.eo(a)
  };
  var wo = function(a) {
    return z.Wa(a, "\x26") ? "document" in z.u ? ho(a) : go(a) : a
  };
  var xo = function(a, b, c, d, f) {
    if (!(z.C || z.Gc || z.D && z.E("525"))) return !0;
    if (z.Uc && f) return z.jo(a);
    if (f && !d) return !1;
    z.pa(b) && (b = z.lj(b));
    if (!c && (17 == b || 18 == b || z.Uc && 91 == b)) return !1;
    if ((z.D || z.Gc) && d && c) switch (a) {
      case 220:
      case 219:
      case 221:
      case 192:
      case 186:
      case 189:
      case 187:
      case 188:
      case 190:
      case 191:
      case 192:
      case 222:
        return !1
    }
    if (z.C && d && b == a) return !1;
    switch (a) {
      case 13:
        return !0;
      case 27:
        return !(z.D || z.Gc)
    }
    return z.jo(a)
  };
  var yo = function(a) {
    if (a.altKey && !a.ctrlKey || a.metaKey || 112 <= a.keyCode && 123 >= a.keyCode) return !1;
    switch (a.keyCode) {
      case 18:
      case 20:
      case 93:
      case 17:
      case 40:
      case 35:
      case 27:
      case 36:
      case 45:
      case 37:
      case 224:
      case 91:
      case 144:
      case 12:
      case 34:
      case 33:
      case 19:
      case 255:
      case 44:
      case 39:
      case 145:
      case 16:
      case 38:
      case 252:
      case 224:
      case 92:
        return !1;
      case 0:
        return !z.B;
      default:
        return 166 > a.keyCode || 183 < a.keyCode
    }
  };
  z.zo = function(a, b, c) {
    c ? z.hj(a, b) : z.jj(a, b)
  };
  var Ao = function(a) {
    return z.ej(a, "label")
  };
  var Bo = function(a, b) {
    var c = "";
    b && (c = b.id);
    z.cj(a, "activedescendant", c)
  };
  var Co = function(a, b) {
    switch (a) {
      case 1:
        return b ? "disable" : "enable";
      case 2:
        return b ? "highlight" : "unhighlight";
      case 4:
        return b ? "activate" : "deactivate";
      case 8:
        return b ? "select" : "unselect";
      case 16:
        return b ? "check" : "uncheck";
      case 32:
        return b ? "focus" : "blur";
      case 64:
        return b ? "open" : "close"
    }
    throw Error("Invalid component state");
  };
  z.Do = function(a, b, c) {
    c = c ? null : a.getElementsByTagName("*");
    if (z.em) {
      if (b = b ? "none" : "", a.style && (a.style[z.em] = b), c) {
        a = 0;
        for (var d; d = c[a]; a++) d.style && (d.style[z.em] = b)
      }
    } else if (z.C || z.wg)
      if (b = b ? "on" : "", a.setAttribute("unselectable", b), c)
        for (a = 0; d = c[a]; a++) d.setAttribute("unselectable", b)
  };
  var Eo = function(a) {
    var b = z.ao(a);
    a = z.Jg(a);
    return new z.sg(b.x, b.y, a.width, a.height)
  };
  var Fo = function(a, b, c) {
    var d = z.ao(a);
    b instanceof z.Ge && (c = b.y, b = b.x);
    z.Bg(a, a.offsetLeft + (b - d.x), a.offsetTop + (c - d.y))
  };
  var Go = function(a, b) {
    var c = b || z.Se(window.document),
      d;
    d = c || z.Se(window.document);
    var f = z.ao(a),
      g = z.ao(d),
      h = z.Ug(d);
    if (d == z.Se(window.document)) {
      var k = f.x - d.scrollLeft,
        f = f.y - d.scrollTop;
      !z.C || 10 <= z.Vg || (k += h.left, f += h.top)
    } else k = f.x - g.x - h.left, f = f.y - g.y - h.top;
    var h = d.clientHeight - a.offsetHeight,
      g = d.scrollLeft,
      l = d.scrollTop,
      g = g + Math.min(k, Math.max(k - (d.clientWidth - a.offsetWidth), 0)),
      l = l + Math.min(f, Math.max(f - h, 0));
    d = new z.Ge(g, l);
    c.scrollLeft = d.x;
    c.scrollTop = d.y
  };
  var Ho = function(a) {
    for (var b = new z.rg(0, window.Infinity, window.Infinity, 0), c = z.Ie(a), d = c.ua().body, f = c.ua().documentElement, g = z.Se(c.Qa); a = lo(a);)
      if (!(z.C && 0 == a.clientWidth || z.D && 0 == a.clientHeight && a == d) && a != d && a != f && "visible" != z.zg(a, "overflow")) {
        var h = z.ao(a),
          k = new z.Ge(a.clientLeft, a.clientTop);
        h.x += k.x;
        h.y += k.y;
        b.top = Math.max(b.top, h.y);
        b.right = Math.min(b.right, h.x + a.clientWidth);
        b.bottom = Math.min(b.bottom, h.y + a.clientHeight);
        b.left = Math.max(b.left, h.x)
      }
    d = g.scrollLeft;
    g = g.scrollTop;
    b.left = Math.max(b.left,
      d);
    b.top = Math.max(b.top, g);
    c = z.Qe(c.ab());
    b.right = Math.min(b.right, d + c.width);
    b.bottom = Math.min(b.bottom, g + c.height);
    return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null
  };
  var Io = function(a) {
    var b = a.body;
    a = a.documentElement;
    return new z.Ge(b.scrollLeft || a.scrollLeft, b.scrollTop || a.scrollTop)
  };
  var Jo = function(a, b) {
    var c = a.style[z.cb(b)];
    return "undefined" !== typeof c ? c : a.style[z.ug(a, b)] || ""
  };
  var Ko = function(a, b) {
    var c = b.x < a.left ? b.x - a.left : b.x > a.right ? b.x - a.right : 0,
      d = b.y < a.top ? b.y - a.top : b.y > a.bottom ? b.y - a.bottom : 0;
    return Math.sqrt(c * c + d * d)
  };
  z.Lo = function(a, b) {
    return z.vf(a, null, b, void 0)
  };
  z.Mo = function(a) {
    var b = [];
    z.sf(a, b, !1);
    return b.join("")
  };
  z.No = function(a, b) {
    var c = [];
    mo(a, b, c, !1);
    return c
  };
  z.Oo = function(a) {
    if ("outerHTML" in a) return a.outerHTML;
    var b = z.Ke(a).createElement("DIV");
    b.appendChild(a.cloneNode(!0));
    return b.innerHTML
  };
  var Po = function(a) {
    var b, c = arguments.length;
    if (!c) return null;
    if (1 == c) return arguments[0];
    var d = [],
      f = window.Infinity;
    for (b = 0; b < c; b++) {
      for (var g = [], h = arguments[b]; h;) g.unshift(h), h = h.parentNode;
      d.push(g);
      f = Math.min(f, g.length)
    }
    g = null;
    for (b = 0; b < f; b++) {
      for (var h = d[0][b], k = 1; k < c; k++)
        if (h != d[k][b]) return g;
      g = h
    }
    return g
  };
  var Qo = function(a, b) {
    if (a == b) return 0;
    if (a.compareDocumentPosition) return a.compareDocumentPosition(b) & 2 ? 1 : -1;
    if (z.C && !(9 <= z.Vg)) {
      if (9 == a.nodeType) return -1;
      if (9 == b.nodeType) return 1
    }
    if ("sourceIndex" in a || a.parentNode && "sourceIndex" in a.parentNode) {
      var c = 1 == a.nodeType,
        d = 1 == b.nodeType;
      if (c && d) return a.sourceIndex - b.sourceIndex;
      var f = a.parentNode,
        g = b.parentNode;
      return f == g ? bo(a, b) : !c && z.nf(f, b) ? -1 * no(a, b) : !d && z.nf(g, a) ? no(b, a) : (c ? a.sourceIndex : f.sourceIndex) - (d ? b.sourceIndex : g.sourceIndex)
    }
    d = z.Ke(a);
    c = d.createRange();
    c.selectNode(a);
    c.collapse(!0);
    d = d.createRange();
    d.selectNode(b);
    d.collapse(!0);
    return c.compareBoundaryPoints(z.u.Range.START_TO_END, d)
  };
  z.Ro = function(a) {
    return z.ja(a.previousElementSibling) ? a.previousElementSibling : z.kf(a.previousSibling, !1)
  };
  var So = function(a) {
    return z.ja(a.nextElementSibling) ? a.nextElementSibling : z.kf(a.nextSibling, !0)
  };
  z.To = function(a, b) {
    var c = b.parentNode;
    c && c.replaceChild(a, b)
  };
  z.Uo = function(a, b) {
    var c = b || window.document;
    return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : z.Ne(window.document, "*", a, b)
  };
  z.Vo = function(a, b) {
    return a == b ? !0 : a && b ? a.width == b.width && a.height == b.height : !1
  };
  z.Wo = function(a, b, c) {
    a = [a, "\x26", b];
    null != c && a.push("\x3d", (0, window.encodeURIComponent)(String(c)));
    a[1] && (c = a[0], b = c.indexOf("#"), 0 <= b && (a.push(c.substr(b)), a[0] = c = c.substr(0, b)), b = c.indexOf("?"), 0 > b ? a[1] = "?" : b == c.length - 1 && (a[1] = void 0));
    return a.join("")
  };
  var Xo = function(a, b) {
    return (new po(b)).serialize(a)
  };
  var Yo = function(a) {
    return eval("(" + a + ")")
  };
  var Zo = function(a) {
    this.Nb = new z.Qd;
    a && this.addAll(a)
  };
  var $o = function(a, b) {
    var c = vo(b);
    if (a.hb() > c) return !1;
    !(b instanceof Zo) && 5 < c && (b = new Zo(b));
    return uo(a, function(a) {
      var c = b;
      return c.contains && "function" == typeof c.contains ? c.contains(a) : c.vi && "function" == typeof c.vi ? c.vi(a) : z.na(c) || z.oa(c) ? z.rb(c, a) : z.co(c, a)
    })
  };
  var ap = function(a) {
    try {
      return z.Md(a).next()
    } catch (b) {
      if (b != z.Nd) throw b;
      return null
    }
  };
  z.bp = function(a, b) {
    var c = z.Md(a),
      d = new z.Ld;
    d.next = function() {
      for (;;) {
        var a = c.next();
        if (b.call(void 0, a, void 0, c)) return a
      }
    };
    return d
  };
  var cp = function(a, b, c) {
    return Math.min(Math.max(a, b), c)
  };
  z.dp = function(a) {
    var b = {},
      c;
    for (c in a) b[a[c]] = c;
    return b
  };
  var ep = function(a, b) {
    var c = {},
      d;
    for (d in a) c[d] = b.call(void 0, a[d], d, a);
    return c
  };
  var fp = function(a) {
    for (var b = [], c = 0; c < arguments.length; c++) {
      var d = arguments[c];
      if (z.ma(d))
        for (var f = 0; f < d.length; f += 8192)
          for (var g = z.yb(d, f, f + 8192), g = fp.apply(null, g), h = 0; h < g.length; h++) b.push(g[h]);
      else b.push(d)
    }
    return b
  };
  z.gp = function(a, b) {
    for (var c = z.oa(a) ? a.split("") : a, d = a.length - 1; 0 <= d; d--)
      if (d in c && b.call(void 0, c[d], d, a)) return d;
    return -1
  };
  var hp = function(a, b) {
    var c = 0;
    z.A(a, function(a, f, g) {
      b.call(void 0, a, f, g) && ++c
    }, void 0);
    return c
  };
  z.ip = function(a) {
    return function() {
      return !a.apply(this, arguments)
    }
  };
  z.jp = function(a) {
    var b = arguments,
      c = b.length;
    return function() {
      for (var a = 0; a < c; a++)
        if (!b[a].apply(this, arguments)) return !1;
      return !0
    }
  };
  z.kp = function(a) {
    var b = arguments,
      c = b.length;
    return function() {
      for (var a, f = 0; f < c; f++) a = b[f].apply(this, arguments);
      return a
    }
  };
  z.lp = function(a, b) {
    var c = arguments,
      d = c.length;
    return function() {
      var a;
      d && (a = c[d - 1].apply(this, arguments));
      for (var b = d - 2; 0 <= b; b--) a = c[b].call(this, a);
      return a
    }
  };
  var mp = function(a) {
    var b;
    b = b || 0;
    return function() {
      return a.apply(this, Array.prototype.slice.call(arguments, 0, b))
    }
  };
  z.np = function() {
    return "goog_" + z.El++
  };
  z.op = function(a) {
    return a.replace(/[\s\xa0]+$/, "")
  };
  z.pp = function(a) {
    return a.replace(/^[\s\xa0]+/, "")
  };
  var qp = function(a) {
    return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
  };
  z.rp = function(a) {
    return a.replace(/(\r\n|\r|\n)+/g, " ")
  };
  z.sp = function(a) {
    return !/[^\t\n\r ]/.test(a)
  };
  z.tp = function(a) {
    return /^[\s\xa0]*$/.test(a)
  };
  z.up = function(a, b) {
    var c = a.length - b.length;
    return 0 <= c && a.indexOf(b, c) == c
  };
  var vp = function() {
    throw Error("unimplemented abstract method");
  };
  z.wp = function(a) {
    z.de.call(this);
    this.xM = !!a;
    this.headers.set("X-Requested-With", "XMLHttpRequest");
    this.on("complete", this.pR, !1, this)
  };
  z.xp = function(a, b, c, d) {
    var f = new z.wp;
    if (b) f.on("complete", b);
    f.ajax(a, d, c)
  };
  var yp = function(a, b) {
    zp.push({
      NM: a,
      filter: b
    })
  };
  var Ap = function(a) {
    var b = a.getResponseHeader("content-type");
    if (b) {
      var c = Bp[b.split(";")[0].toLowerCase()];
      if (c && zp.length) {
        var d = z.te(a);
        z.A(zp, function(a) {
          "*" !== a.NM && a.NM !== c || a.filter("json" === c ? JSON.parse(d) : d, this)
        }, a)
      }
    }
  };
  var Cp = function(a) {
    Dp.push(a)
  };
  var Ep = function(a) {
    Dp.forEach(function(b) {
      return b(a)
    })
  };
  var Fp = function() {
    if (Gp) return Gp;
    var a = z.M("div", {
      id: "zh-global-spinner",
      style: "display:none",
      innerHTML: "加载中…"
    });
    window.document.body.appendChild(a);
    return Gp = a
  };
  var Hp = function() {
    z.G.call(this)
  };
  z.Ip = function(a, b, c) {
    function d() {
      var b = new z.wp(!0),
        d = "/question/" + (a ? "set_anonymous" : "set_public"),
        g = "qid\x3d" + (c || z.R.pa);
      b.on("success", function() {
        var c = z.Wn(b);
        c && !c.r && (z.R && (z.R.ub = a), f.dispatchEvent(new z.Jp(a)))
      });
      b.ajax(d, g)
    }
    var f = z.Kp,
      g = {
        title: "确认使用匿名身份？",
        content: '\x3cp\x3e使用匿名身份后\x3c/p\x3e\x3cul style\x3d"margin: 5px 0 0 5px;list-style-position: inside;"\x3e\x3cli\x3e提问、回答、赞同、关注会显示为匿名\x3c/li\x3e\x3cli\x3e除提问者本人，不能匿名编辑问题\x3c/li\x3e\x3cli\x3e不能邀请别人回答问题\x3c/li\x3e\x3c/ul\x3e'
      },
      h = {
        title: "确认取消匿名身份？",
        content: "取消匿名身份后， 提问、回答、赞同和关注将以实名显示。"
      };
    z.V.confirm(a ? g : h, function(a) {
      a && d();
      b && b(a)
    })
  };
  z.Jp = function(a) {
    this.type = "anon_change";
    this.ub = a
  };
  var Lp = function(a) {
    z.G.call(this);
    this.H = window.$.extend({
      Hk: z.r
    }, a || {});
    this.ls = z.um.guiders2 || {};
    this.hT = (0, z.H)();
    this.mb = z.Tj && !z.Uj;
    this.oc()
  };
  var Mp = function(a, b, c) {
    function d(g) {
      g || (g = a.shift()) && b.call(c, g, f++, d)
    }
    a = a.slice();
    var f = 0;
    d()
  };
  var Np = function(a) {
    var b = {
        "home-topstory": {
          path: "/",
          offset: {
            right: -10
          },
          Tu: "righttop",
          Mn: "arrow-lefttop",
          GB: ".zu-main-feed-con",
          qu: ".zu-main-sidebar"
        }
      },
      c = a.ls.section;
    c && Mp(z.Hb(c), function(a, f, g) {
      (f = b[a]) && f.path === window.location.pathname ? Op(this, "section", a, c[a], f, !1, g) : g()
    }, a)
  };
  var Pp = function(a) {
    var b = {
        "/": {
          offset: {
            top: 6
          },
          trigger: "1page-down inview",
          Tu: "lefttop",
          Mn: "arrow-righttop",
          GB: ".js-sidebarRoundtable",
          qu: ".zu-main-content-inner"
        },
        "/explore": {
          Tu: "lefttop",
          Mn: "arrow-righttop",
          GB: ".explore-side-section-roundtable",
          qu: ".zu-main-content-inner"
        }
      },
      c = a.ls["exclusive-popover"];
    c && Mp(z.Hb(c), function(a, f, g) {
      var h;
      "roundtable" === a && (h = b[window.location.pathname]);
      h && Op(this, "exclusive-popover", a, c[a], h, h.trigger, g)
    }, a)
  };
  var Op = function(a, b, c, d, f, g, h) {
    if (b && c && d && f) {
      var k = (0, window.$)(f.GB);
      if (k.length && ("righttop" !== f.Tu || 300 < z.Qe().width - k[0].getBoundingClientRect().right)) {
        var l = (0, window.$)(z.Ja('\x3cdiv class\x3d"guide2-section-popover"\x3e\x3cdiv class\x3d"title"\x3e%s\x3c/div\x3e\x3cdiv class\x3d"content"\x3e%s\x3c/div\x3e\x3cdiv class\x3d"action"\x3e\x3ca class\x3d"dismiss" href\x3d"%s"\x3e%s\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e', d.title || "", d.content, d.dismissHref || "#", d.dismissText));
        l.addClass(f.Tu).addClass(f.Mn).appendTo(k);
        var p = f.offset;
        p && window.$.each(["left", "top", "right", "bottom"], function(a, b) {
          p[b] && l.css("margin-" + b, p[b])
        });
        var q = (0, window.$)([]);
        z.Ba(function(a) {
          return (0, z.H)() - a
        }, a.hT);
        var v = function() {
            f.qu && (q = (0, window.$)('\x3cspan class\x3d"guidev2-mask"/\x3e').appendTo(f.qu));
            (0, window.setTimeout)(function() {
              l.add(q).addClass("fx-show");
              K()
            });
            window.$.post("/node/Guide2", {
              method: "dismiss_popover",
              params: {
                category: b,
                key: c
              }
            })
          },
          I = function(a) {
            if (window.Modernizr.csstransitions) l.add(q).removeClass("fx-show").onTransitionEnd(function() {
                (0, window.$)(this).remove()
              },
              350);
            else l.add(q).remove();
            h && h(a)
          };
        a = function(a) {
          function b(a) {
            var c = !1;
            return function() {
              !0 !== c && (c = a.apply(this, arguments));
              return c
            }
          }
          var c = 0,
            d = b(function() {
              var a = window.pageYOffset;
              if (a >= f.size.height) return c = a, !0
            }),
            d = {
              "1page-down .5page-up": z.jp(d, b(function() {
                return c - window.pageYOffset >= f.size.height / 2
              })),
              "1page-down inview": z.jp(d, function() {
                return z.En(f, k[0])
              })
            },
            f = new z.hl,
            g = d[a] || d["1page-down .5page-up"];
          f.o().g(f, "update", function() {
            g() && (f.dispose(), v())
          })
        };
        var K = function() {
          var a =
            new z.hl;
          a.o().g(a, "update", function() {
            l.parent().length ? z.En(a, l[0]) || (I(), a.dispose()) : a.dispose()
          })
        };
        (0, window.$)(".dismiss", l).click(function() {
          I();
          return !1
        });
        (0, window.$)(".skip-all", l).click(function() {
          window.$.post("/node/Guide2", {
            method: "skip_popover",
            params: {
              category: b
            }
          });
          I(!0);
          return !1
        });
        g ? a(g) : v()
      }
    }
  };
  var Qp = function() {
    var a = (0, window.$)("#guidersv2-page-banner");
    (0, window.$)(".js-close", a).click(function() {
      a.remove()
    })
  };
  var Rp = function(a) {
    function b(a) {
      window.$.post("/node/Guide2", {
        method: "dismiss_editor",
        params: {
          key: a
        }
      })
    }

    function c(a) {
      z.Ai(Object.assign({
        category: "popup_guide",
        label: {
          bio: "popup_guide_personal_introduction",
          topic: "popup_guide_topic_recommendation"
        }[h]
      }, a))
    }

    function d(a) {
      k || (k = new z.T, k.Ae(!0), k.rG = !1, z.U.add(k.pg(), "Guide"));
      k.ca(a);
      k.F(!0)
    }
    var f = window.$.Deferred(),
      g = a.ls.editor;
    if (!g || !g.length) return f.reject();
    var g = g.slice(),
      h, k, l = {},
      p = {
        bio: function(a) {
          var f = (0, window.$)("#tmpl-Guide-BioEditor").html();
          if (!f) return window.console && window.console.warn("Cannot find template"), a();
          var g = z.kp(a, function() {
            b("bio")
          });
          d(f);
          (function(a) {
            a = (0, window.$)(a).off();
            var b = (0, window.$)(".js-submit", a),
              d = (0, window.$)('input[name\x3d"bio"]', a);
            b.click(function() {
              var a = l.nx = window.$.trim(d.val());
              a ? (window.$.post("/node/Guide2", {
                method: "add_headline",
                params: {
                  headline: a
                }
              }), c({
                action: "click_edit_personal_introduction_submit",
                attributes: {
                  personal_introduction: a
                }
              })) : c({
                action: "click_edit_personal_introduction_skip"
              });
              g()
            })
          })(k.S());
          c({
            action: "popup_edit_personal_introduction_appear"
          })
        },
        topic: function(a) {
          function f() {
            z.Kp.dispatchEvent("guider2:topicselected")
          }
          window.$.get("/node/GuideTopicList", function(a) {
            (0, window.$)(".Guide-topicsLoading").remove();
            (0, window.$)(a).appendTo(".Guide-content")
          });
          var g = (0, window.$)("#tmpl-Guide-Topics").html();
          if (g) {
            var h = z.kp(a, function() {
              b("topic")
            });
            d(g);
            (function(a) {
              var b = (0, window.$)(a).off();
              a = (0, window.$)(".js-submit", b);
              b.on("click", ".Guide-TopicsItem", function() {
                var a =
                  (0, window.$)(this);
                a.toggleClass("is-checked");
                var b = (0, window.$)(".template-relatedTopics", a);
                if (b.length) {
                  var c = b.html();
                  b.remove();
                  (0, window.$)(c).insertAfter(a)
                }
              });
              a.click(function() {
                var a = l.sn = [],
                  d = {};
                (0, window.$)(".Guide-TopicsItem", b).filter(".is-checked").each(function() {
                  var b = (0, window.$)(this),
                    c = b.data("id"),
                    f = b.index(),
                    b = b.find(".name").text();
                  a.push(c);
                  d[c] = {
                    topic: b,
                    row: Math.ceil((f + 1) / 3),
                    column: f % 3 + 1
                  }
                });
                a.length ? (window.$.post("/topics/follow", {
                  follow_ids: a.join(",")
                }, f), c({
                  action: "click_popup_guide_topic_recommendation_submit",
                  attributes: {
                    selected_topic: d
                  }
                })) : (f(), c({
                  action: "click_popup_guide_topic_recommendation_skip"
                }));
                h()
              })
            })(k.S());
            c({
              action: "popup_guide_topic_recommendation_appear"
            })
          } else window.console && window.console.warn("Cannot find template"), a(), f()
        }
      };
    (0, window.$)(window).on("beforeunload.guide2", function() {
      k && k.W() && c({
        Vc: !0,
        action: {
          bio: "click_edit_personal_introduction_close",
          topic: "click_guide_topic_recommendation_close"
        }[h]
      })
    });
    Mp(g, function(a, b, c) {
      if (p[a]) {
        h = a;
        var d = b === g.length - 1,
          O = function(a) {
            if (k)
              if (window.Modernizr.cssanimations) var b =
                (0, window.$)(k.pg()).addClass("fx-hide").onAnimationEnd(function() {
                  b.removeClass("fx-hide");
                  a()
                }, 400);
              else a()
          };
        p[a](function() {
          d ? O(function() {
            k.F(!1);
            f.resolve(l);
            (0, window.$)(window).off(".guide2");
            "/topic" === window.location.pathname && window.location.reload()
          }) : O(c)
        })
      }
    });
    return f.promise()
  };
  var Sp = function(a, b) {
    z.G.call(this);
    a && this.attach(a, b)
  };
  var Tp = function(a, b, c, d) {
    z.Pc.call(this, d);
    this.type = "key";
    this.keyCode = a;
    this.charCode = b;
    this.repeat = c
  };
  var Up = function() {};
  var Vp = function(a, b, c) {
    if (a = c || a.zf()) c = b.getAttribute("role") || null, a != c && z.bj(b, a)
  };
  var Wp = function(a, b, c) {
    var d = b.CE;
    null != d && a.kC(c, d);
    b.W() || z.cj(c, "hidden", !b.W());
    b.isEnabled() || a.Qg(c, 1, !b.isEnabled());
    Xp(b, 8) && a.Qg(c, 8, !!(b.N & 8));
    Xp(b, 16) && a.Qg(c, 16, b.vg());
    Xp(b, 64) && a.Qg(c, 64, b.Bb())
  };
  var Yp = function(a, b) {
    var c = [];
    b && (a = a.concat([b]));
    z.A([], function(d) {
      !z.fo(d, z.Ba(z.rb, a)) || b && !z.rb(d, b) || c.push(d.join("_"))
    });
    return c
  };
  var Zp = function(a) {
    var b = a.V();
    b.replace(/\xa0|\s/g, " ");
    a.es = {
      1: b + "-disabled",
      2: b + "-hover",
      4: b + "-active",
      8: b + "-selected",
      16: b + "-checked",
      32: b + "-focused",
      64: b + "-open"
    }
  };
  z.$p = function() {};
  z.aq = function(a, b) {
    if (!a) throw Error("Invalid class name " + a);
    if (!z.qa(b)) throw Error("Invalid decorator function " + b);
    bq[a] = b
  };
  var cq = function(a, b, c) {
    z.Q.call(this, c);
    if (!b) {
      b = this.constructor;
      for (var d; b;) {
        d = z.ta(b);
        if (d = dq[d]) break;
        b = b.v ? b.v.constructor : null
      }
      b = d ? z.qa(d.aa) ? d.aa() : new d : null
    }
    this.M = b;
    this.$m(z.ja(a) ? a : null);
    this.CE = null
  };
  var eq = function(a, b) {
    var c = a.o(),
      d = a.m();
    b ? (c.g(d, "mouseover", a.Bd).g(d, "mousedown", a.ue).g(d, "mouseup", a.Ef).g(d, "mouseout", a.nm), a.Oo != z.r && c.g(d, "contextmenu", a.Oo), z.C && (c.g(d, "dblclick", a.dH), a.Xo || (a.Xo = new fq(a), z.Ac(a, a.Xo)))) : (c.oa(d, "mouseover", a.Bd).oa(d, "mousedown", a.ue).oa(d, "mouseup", a.Ef).oa(d, "mouseout", a.nm), a.Oo != z.r && c.oa(d, "contextmenu", a.Oo), z.C && (c.oa(d, "dblclick", a.dH), z.Cc(a.Xo), a.Xo = null))
  };
  var Xp = function(a, b) {
    return !!(a.Rq & b)
  };
  var gq = function(a, b) {
    return !!(a.zj & b) && Xp(a, b)
  };
  var hq = function(a, b, c) {
    return Xp(a, b) && !!(a.N & b) != c && (!(a.Wk & b) || a.dispatchEvent(Co(b, c))) && !a.Rd
  };
  var fq = function(a) {
    z.xc.call(this);
    this.ps = a;
    this.fs = !1;
    this.ea = new z.xd(this);
    z.Ac(this, this.ea);
    a = this.ps.h;
    this.ea.g(a, "mousedown", this.lm).g(a, "mouseup", this.tt).g(a, "click", this.km)
  };
  var iq = function() {};
  z.jq = function(a, b, c) {
    cq.call(this, a, b || iq.aa(), c)
  };
  var kq = function() {};
  var lq = function(a, b, c) {
    if (b) {
      var d = mq(a, c);
      z.gj(b, d) || (z.Db(nq, function(a) {
        a = mq(this, a);
        z.zo(b, a, a == d)
      }, a), z.cj(b, "checked", c == oq ? "mixed" : c == pq ? "true" : "false"))
    }
  };
  var mq = function(a, b) {
    var c = a.V();
    if (b == pq) return c + "-checked";
    if (b == qq) return c + "-unchecked";
    if (b == oq) return c + "-undetermined";
    throw Error("Invalid checkbox state: " + b);
  };
  var rq = function(a, b, c) {
    c = c || kq.aa();
    cq.call(this, null, c, b);
    this.ri = z.ja(a) ? a : qq
  };
  z.sq = function() {};
  var tq = function() {};
  z.uq = function(a, b, c, d, f) {
    function g(a) {
      a && (a.tabIndex = 0, z.bj(a, h.zf()), z.hj(a, "goog-zippy-header"), vq(h, a), a && h.BI.g(a, "keydown", h.eV))
    }
    z.G.call(this);
    this.ba = f || z.Ie();
    this.hg = this.ba.m(a) || null;
    this.Pj = this.ba.m(d || null);
    this.Vl = (this.du = z.qa(b) ? b : null) || !b ? null : this.ba.m(b);
    this.sb = 1 == c;
    z.ja(c) || this.du || (this.Pj ? this.sb = z.Mg(this.Pj) : this.hg && (this.sb = z.gj(this.hg, "goog-zippy-expanded")));
    this.BI = new z.xd(this);
    this.YA = new z.xd(this);
    var h = this;
    g(this.hg);
    g(this.Pj);
    this.Gc(this.sb)
  };
  var wq = function(a) {
    var b = a.Pj;
    return b && z.Mg(b) ? b : a.hg
  };
  var vq = function(a, b) {
    b && a.YA.g(b, "click", a.dV)
  };
  var xq = function(a, b, c) {
    z.Lc.call(this, a, b);
    this.lh = c
  };
  z.yq = function() {
    z.T.call(this);
    this.Ae(!0)
  };
  var zq = function(a) {
    var b = (0, window.$)(".resend-activation-email", a.HD);
    Aq(a, b, 10, function() {
      window.$.post("/reactive")
    })
  };
  var Bq = function(a) {
    window.$.get("/settings/account/request_unlock");
    var b = (0, window.$)("form.send-code", a.yD),
      c = a.vD = (0, window.$)("form.activate", a.yD),
      d = (0, window.$)(".submit", b);
    b.validate(window.$.extend({}, Cq, {
      submitHandler: z.tk(d, window.$.proxy(a.FV, a))
    }));
    b = (0, window.$)(".submit", c);
    c.validate(window.$.extend({}, Cq, {
      submitHandler: z.tk(b, window.$.proxy(a.HU, a))
    }));
    b = (0, window.$)("button.resend-code", c);
    Aq(a, b, 60, function() {
      var a = (0, window.$)('input[name\x3d"account"]', c).val();
      if ("" === a) return c.data("validator").showErrors({
        account: "请填写手机号或邮箱"
      }), !1;
      var b = this.Hf(a),
        d;
      b ? (a = {
        email: a
      }, d = "/settings/account/send_new_email_digits") : (a = {
        phone_no: a
      }, d = "/settings/account/send_new_phone_digits");
      var k = this;
      window.$.post(d, a, function(a) {
        a.success ? Dq(k, b) : (a = a.payload.fields, b ? k.Db(a, "email", "account") : k.Db(a, "phone_no", "account"), c.data("validator").showErrors(a))
      })
    })
  };
  var Dq = function(a, b) {
    a.Cw || (a.Cw = (0, window.$)(".tip", a.Ga));
    b ? a.Cw.html("验证码已发送至你的邮箱，请查收。") : a.Cw.html("验证码已发送至你的手机，请查收。")
  };
  var Aq = function(a, b, c, d) {
    var f = b.text();
    b = z.sk(b, c, function(a) {
      return a ? "%s 秒后即可重发" : f
    }, window.$.proxy(d, a));
    z.Ac(a, b)
  };
  var Eq = function(a) {
    function b() {
      (0, window.clearTimeout)(g);
      g = null;
      try {
        delete window[d]
      } catch (a) {
        window[d] = null
      }
    }
    "string" === window.$.type(a) && (a = {
      url: a
    });
    a = a || {};
    var c = window.$.Deferred(),
      d = "zh" + (0, z.H)() + Zn(),
      f = window.$.extend({}, a.data || {}, {
        callback: d
      }),
      g = null;
    a.timeout && (g = (0, window.setTimeout)(function() {
      window[d] && (window[d] = b, c.reject("timeout"))
    }, a.timeout));
    window[d] = c.resolve;
    a = a.url + (-1 === a.url.indexOf("?") ? "?" : "\x26") + window.$.param(f);
    z.eh(a).fail(c.reject).always(b);
    return c.promise()
  };
  var Fq = function(a, b) {
    b = void 0 === b ? 0 : b;
    z.G.call(this);
    this.tO = Object.assign({}, Gq, a);
    this.tW = b;
    this.ov = 1E3;
    this.eJ = 3E4;
    this.YS = 1.5
  };
  z.Hq = function(a, b) {
    a = void 0 === a ? z.r : a;
    b = void 0 === b ? !1 : b;
    z.Q.call(this);
    this.$J = a;
    this.aY = b
  };
  var Iq = function(a) {
    window.$.get("/antispam/get_token").then(function(b) {
      a.token = b.token;
      a.timeout = b.ttl;
      a.startTime = Date.now();
      (0, window.$)(".js-token", a.h).text(a.token);
      (0, window.$)(".js-timeout", a.h).text((0, window.parseInt)(a.timeout / 60))
    })
  };
  var Jq = function(a) {
    var b = (0, window.$)(".js-sent", a.h);
    b.click(z.tk(b, function() {
      if (Date.now() > a.startTime + 1E3 * a.timeout) return Iq(a), Kq(a, "短信超时，请重新发送");
      Lq(a);
      a.jl.show();
      return window.$.get("/antispam/is_send_sms").then(function(b) {
        b.is_send_sms ? Mq(a, "unblock") : Kq(a, "没收到正确的短信，请重新发送");
        a.jl.hide()
      }, function() {
        a.jl.hide()
      })
    }))
  };
  var Nq = function(a) {
    var b = (0, window.$)(".js-verify", a.h);
    b.click(z.tk(b, function() {
      var b = a.captcha.sj.val();
      if (!b) return Kq(a, "请填写验证码");
      Lq(a);
      a.jl.show();
      return window.$.post("/antispam/create_appeal", {
        captcha: b
      }).then(function(b) {
        0 === b.errcode ? Mq(a, "appeal") : (a.captcha.fv(), Kq(a, b.msg), a.jl.hide())
      }, function() {
        a.jl.hide()
      })
    }))
  };
  var Oq = function(a) {
    (0, window.$)(".js-appeal", a.h).click(function() {
      a.$J("向管理员申诉解封");
      a.Hw.hide();
      (0, window.$)(".unblock-dialog-appeal", a.h).show();
      a.captcha.fv();
      Lq(a)
    });
    (0, window.$)(".js-message", a.h).click(function() {
      a.$J("帐号解封");
      a.Hw.hide();
      (0, window.$)(".unblock-dialog-message", a.h).show();
      Lq(a)
    })
  };
  var Pq = function(a) {
    a.Vu = new Fq({
      url: "/antispam/is_send_sms"
    }, 1E3);
    z.Ac(a, a.Vu);
    a.Vu.g("message", function(b) {
      b.data.is_send_sms && Mq(a, "unblock")
    });
    a.Vu.Uu()
  };
  var Mq = function(a, b) {
    a.Vu.dispose();
    var c;
    "unblock" === b ? c = "成功自助解封" : "appeal" === b && (c = "成功提交申诉\x3cbr\x3e申诉成功后会以邮件或私信方式通知你");
    (0, window.$)(".unblock-dialog-success-text", a.h).html(c);
    a.Hw.hide();
    (0, window.$)(".unblock-dialog-success", a.h).show();
    if (a.aY) {
      var d = (0, window.$)(".js-count-down", a.h);
      d.show();
      var f = 5,
        g;
      "unblock" === b ? g = "刷新" : "appeal" === b && (g = "关闭");
      var h = function() {
        0 >= f ? "unblock" === b ? window.location.reload() : "appeal" === b && a.dispatchEvent("complete") : (d.text(f-- + " 秒后自动" + g), (0, window.setTimeout)(h,
          1E3))
      };
      h()
    }
  };
  var Kq = function(a, b) {
    a.hl.text(b).addClass("is-visible")
  };
  var Lq = function(a) {
    a.hl.removeClass("is-visible")
  };
  var Qq = function(a) {
    z.T.apply(this, arguments)
  };
  z.Rq = function(a, b, c) {
    function d(a) {
      return a && a.preventDefault ? a.preventDefault() : !1
    }
    return function(f) {
      var g = {
        Lb: !0,
        Ie: !1,
        Bu: !1,
        GK: !1
      };
      z.ma(b) ? (!0 === b[0] && (g = ep(g, function() {
        return !0
      })), z.Mb(g, b[1])) : !0 === b ? g = ep(g, function() {
        return !0
      }) : (z.qa(b) && (b = b.apply(this, arguments)), z.Mb(g, b || {}));
      var h = z.qa(c) ? c.apply(this, arguments) : c;
      if (!z.Y.Lb() && g.Lb) {
        var k = new z.Wk;
        k.zq(h);
        k.show();
        return d(f)
      }
      return !z.Y.Ie && g.Ie ? ((new z.yq).F(!0), window.$.post("/continuation/record", {
        url: window.location.pathname + window.location.search +
          (h || "")
      }), d(f)) : z.jm.mG && g.GK ? (h = z.jm.mG, "warning" === h ? k = '您的知乎用户名不符合 \x3ca href\x3d"/question/19791408"\x3e知乎用户名规范\x3c/a\x3e，请您 \x3ca href\x3d"/settings/profile"\x3e修改\x3c/a\x3e。' : "pending" === h && (k = "您提交的用户名修改正在审核中，帐号暂时锁定。"), k && z.V.message(k, 4E3), d(f)) : z.jm.px && g.Bu ? (z.jm.px.by_antispam ? (new Qq).F(!0) : z.V.message(z.jm.px.message), d(f)) : a.apply(this, arguments)
    }
  };
  var Sq = function() {
    z.G.call(this);
    this.N = Tq;
    this.endTime = this.startTime = null
  };
  var Uq = function(a, b, c) {
    z.xc.call(this);
    this.yk = a;
    this.uh = b || 0;
    this.ea = c;
    this.El = (0, z.t)(this.hh, this)
  };
  var Vq = function(a) {
    a.Dc() && a.fire()
  };
  var Wq = function(a) {
    a = z.ta(a);
    delete Xq[a];
    z.Jb(Xq) && Yq && Yq.stop()
  };
  var Zq = function() {
    Yq || (Yq = new Uq(function() {
      $q()
    }, 20));
    var a = Yq;
    a.Dc() || a.start()
  };
  var $q = function() {
    var a = (0, z.H)();
    z.Db(Xq, function(b) {
      ar(b, a)
    });
    z.Jb(Xq) || Zq()
  };
  var br = function(a, b, c, d) {
    Sq.call(this);
    if (!z.ma(a) || !z.ma(b)) throw Error("Start and end parameters must be arrays");
    if (a.length != b.length) throw Error("Start and end points must be the same length");
    this.Nq = a;
    this.xQ = b;
    this.duration = c;
    this.gE = d;
    this.coords = [];
    this.mj = !1;
    this.progress = 0
  };
  var ar = function(a, b) {
    a.progress = (b - a.startTime) / (a.endTime - a.startTime);
    1 <= a.progress && (a.progress = 1);
    cr(a, a.progress);
    1 == a.progress ? (a.N = Tq, Wq(a), a.vd("finish"), a.Eg()) : 1 == a.N && a.dB()
  };
  var cr = function(a, b) {
    z.qa(a.gE) && (b = a.gE(b));
    a.coords = Array(a.Nq.length);
    for (var c = 0; c < a.Nq.length; c++) a.coords[c] = (a.xQ[c] - a.Nq[c]) * b + a.Nq[c]
  };
  var dr = function(a, b) {
    z.Lc.call(this, a);
    this.coords = b.coords;
    this.x = b.coords[0];
    this.y = b.coords[1];
    this.z = b.coords[2];
    this.duration = b.duration;
    this.progress = b.progress;
    this.state = b.N;
    this.F_ = b
  };
  var er = function(a) {
    var b = {};
    a = String(a);
    var c = "#" == a.charAt(0) ? a : "#" + a;
    if (fr.test(c)) return b.Bt = gr(c), b.type = "hex", b;
    c = hr(a);
    if (c.length) {
      var d = c[0];
      a = c[1];
      c = c[2];
      d = Number(d);
      a = Number(a);
      c = Number(c);
      if ((0, window.isNaN)(d) || 0 > d || 255 < d || (0, window.isNaN)(a) || 0 > a || 255 < a || (0, window.isNaN)(c) || 0 > c || 255 < c) throw Error('"(' + d + "," + a + "," + c + '") is not a valid RGB color');
      d = ir(d.toString(16));
      a = ir(a.toString(16));
      c = ir(c.toString(16));
      b.Bt = "#" + d + a + c;
      b.type = "rgb";
      return b
    }
    if (jr && (c = jr[a.toLowerCase()])) return b.Bt =
      c, b.type = "named", b;
    throw Error(a + " is not a valid color string");
  };
  var gr = function(a) {
    if (!fr.test(a)) throw Error("'" + a + "' is not a valid hex color");
    4 == a.length && (a = a.replace(kr, "#$1$1$2$2$3$3"));
    return a.toLowerCase()
  };
  var hr = function(a) {
    var b = a.match(lr);
    if (b) {
      a = Number(b[1]);
      var c = Number(b[2]),
        b = Number(b[3]);
      if (0 <= a && 255 >= a && 0 <= c && 255 >= c && 0 <= b && 255 >= b) return [a, c, b]
    }
    return []
  };
  var ir = function(a) {
    return 1 == a.length ? "0" + a : a
  };
  var mr = function(a, b, c, d, f) {
    br.call(this, b, c, d, f);
    this.element = a
  };
  var nr = function(a, b, c, d, f) {
    if (2 != b.length || 2 != c.length) throw Error("Start and end points must be 2D");
    mr.apply(this, arguments)
  };
  var or = function(a, b, c, d, f) {
    if (2 != b.length || 2 != c.length) throw Error("Start and end points must be 2D");
    mr.apply(this, arguments)
  };
  var pr = function(a, b, c, d, f) {
    mr.call(this, a, [b], [c], d, f)
  };
  var qr = function(a, b, c, d, f) {
    mr.call(this, a, [b], [c], d, f)
  };
  var rr = function(a, b, c, d, f) {
    z.pa(b) && (b = [b]);
    z.pa(c) && (c = [c]);
    mr.call(this, a, b, c, d, f);
    if (1 != b.length || 1 != c.length) throw Error("Start and end points must be 1D");
    this.au = sr
  };
  var tr = function(a, b, c) {
    rr.call(this, a, 1, 0, b, c)
  };
  var ur = function(a, b, c) {
    rr.call(this, a, 0, 1, b, c)
  };
  var vr = function(a, b, c, d, f) {
    if (3 != b.length || 3 != c.length) throw Error("Start and end points must be 3D");
    mr.apply(this, arguments)
  };
  var wr = function() {
    return window.$.Deferred(function(a) {
      (0, window.setTimeout)(a.resolve, 2E3)
    }).promise()
  };
  var xr = function(a, b) {
    var c = z.No(a, function(a) {
      return 3 === a.nodeType && !z.tp(a.nodeValue)
    })[0];
    c && (c.nodeValue = b)
  };
  z.yr = function(a, b) {
    var c = new tr(a, 500);
    b && z.F(c, "finish", (0, z.t)(function() {
      z.N(this)
    }, a));
    c.play()
  };
  z.zr = function(a, b, c, d) {
    "bottom" === d && (d = "b");
    var f = "";
    !1 !== c && (f = 'data-hovercard\x3d"t$' + (d || "t") + "$" + a[1] + '"');
    return ["\x3ca ", f, ' class\x3d"', b || "zm-item-tag", '" href\x3d"/topic/', a[1], '"\x3e', a[0], "\x3c/a\x3e"].join("")
  };
  z.Ar = function(a) {
    return a ? a.replace(/^\s+/, "").replace(/\s+$/, "") : ""
  };
  var Br = function(a) {
    return a ? a.replace(/<[^>]+>/g, "") : ""
  };
  var Cr = function() {
    return '\x3ca href\x3d"javascript:;" class\x3d"zu-edit-button" name\x3d"edit"\x3e\x3ci class\x3d"zu-edit-button-icon"\x3e\x3c/i\x3e修改\x3c/a\x3e'
  };
  z.Dr = function(a, b) {
    z.P(a, !0);
    z.P(b, !1)
  };
  var Er = function(a, b, c) {
    var d;
    a && (b = (0, window.$)(a).data("animation") || new vr(a, [255, 255, 150], b || [255, 255, 255], c || 2E3), (0, window.$)(a).data("animation", b), 1 == b.N && b.stop(!0), d = a.style.backgroundColor, z.ld(b, "end", function() {
      z.tg(this.element, "background-color", d)
    }, !1, b), b.play())
  };
  z.Fr = function(a, b, c) {
    a && (Gr && window.document[Hr] ? z.F(window.document, Ir, function f() {
      window.document[Hr] || (Er(a, b, c), z.md(window.document, Ir, f))
    }) : Er(a, b, c))
  };
  var Jr = function(a) {
    var b = 0,
      c = 0;
    do c = a.indexOf("?", c), -1 !== c && (b++, c += 1); while (-1 !== c);
    return b
  };
  var Kr = function(a, b, c) {
    b = z.yb(a.data, 1);
    if ("topic" === a.data[0]) {
      a = (b[2] ? '\x3cimg class\x3d"zm-item-img-avatar zg-left" src\x3d"' + b[2] + '"\x3e' : "") + '\x3cspan class\x3d"zu-autocomplete-row-name' + (b[3] ? "" : " zu-autocomplete-row-name-info") + '" title\x3d"' + b[0] + '"\x3e' + b[0] + "\x3c/span\x3e";
      var d = 5 < b.length && b[5];
      4 <= b.length && (a += '\x3cspan class\x3d"zg-gray-normal zu-autocomplete-row-description"\x3e', b[4] || d ? (d && (a += "又称 " + b[5]), b[4] && d && (a += "，"), b[4] && (a += b[4] + " 人关注")) : a += "\x26nbsp;", a += "\x3c/span\x3e");
      c.innerHTML = a
    } else if ("people" === a.data[0]) {
      a = Array.isArray(b[5]) ? b[5] : [b[5]];
      var f = d = "";
      a[0] ? f = '\x3cspan class\x3d"OrgIcon sprite-global-icon-org-14"\x3e\x3c/span\x3e' : a[1] ? (d = b[6] || "", f = a[2] ? '\x3cspan class\x3d"icon icon-badge icon-badge-id-an"\x3e\x3c/span\x3e' : '\x3cspan class\x3d"icon icon-badge icon-badge-identity"\x3e\x3c/span\x3e') : a[2] && (d = "优秀回答者", f = '\x3cspan class\x3d"icon icon-badge icon-badge-best_answerer"\x3e\x3c/span\x3e');
      c.innerHTML = '\n      \x3cimg class\x3d"zm-item-img-avatar zg-left" src\x3d"' +
        b[2] + '"\x3e\n      \x3cdiv class\x3d"zu-autocomplete-row-name" title\x3d"' + b[0] + '"\x3e\n        ' + b[0] + f + '\n      \x3c/div\x3e\n      \x3cdiv class\x3d"zu-autocomplete-row-description"\x3e\n        \x3cspan class\x3d"badge-summary"\x3e' + d + '\x3c/span\x3e\n        \x3cspan class\x3d"zg-gray-normal bio"\x3e' + (b[4] || "\x26nbsp;") + "\x3c/span\x3e\n      \x3c/div\x3e\n    "
    } else "question" === a.data[0] ? c.innerHTML = b[0] + '\x3cspan class\x3d"zm-ac-gray"\x3e问题\x3c/span\x3e' : "plain_text" === a.data[0] ? (c.innerHTML =
      a.data[1], z.U.add(c, b[1])) : "sina" === a.data[0] && (c.innerHTML = b[0])
  };
  var Lr = function(a, b, c) {
    var d;
    b = z.yb(a.data, 1);
    var f = void 0,
      g;
    if ("topic" === a.data[0]) {
      a = ["\x3ca ", ' style\x3d"display:block" href\x3d"/topic/' + b[1] + '"\x3e\x3cspan class\x3d"zm-item-tag"\x3e', b[0], "\x3c/span\x3e"].join("");
      d = 6 < b.length && b[6];
      if (b[5] || d) {
        a += '\x3cspan class\x3d"zm-ac-gray"\x3e';
        var h = [];
        d && h.push("又称 " + b[6]);
        (d = (0, window.parseInt)(b[5], 10)) && h.push(d + " 个精华问答");
        a += h.join("，");
        a += "\x3c/span\x3e"
      } else a += '\x3cspan class\x3d"zm-ac-gray" \x3e\x26nbsp;\x3c/span\x3e';
      c.innerHTML = a + "\x3c/a\x3e";
      f = "Topic";
      g = b[1]
    } else if ("people" === a.data[0]) {
      a = Array.isArray(b[5]) ? b[5] : [b[5]];
      var h = a[0],
        k = d = "";
      h ? k = '\x3cspan class\x3d"OrgIcon sprite-global-icon-org-14"\x3e\x3c/span\x3e' : a[1] ? (d = b[6] || "", k = a[2] ? '\x3cspan class\x3d"icon icon-badge icon-badge-id-an"\x3e\x3c/span\x3e' : '\x3cspan class\x3d"icon icon-badge icon-badge-identity"\x3e\x3c/span\x3e') : a[2] && (d = "优秀回答者", k = '\x3cspan class\x3d"icon icon-badge icon-badge-best_answerer"\x3e\x3c/span\x3e');
      c.innerHTML = '\n        \x3ca href\x3d"/' + (h ? "org" : "people") +
        "/" + b[1] + '" title\x3d"' + b[0] + '"\n          class\x3d"zm-ac-link zm-ac-link-people"\x3e\n          \x3cimg class\x3d"zm-item-img-avatar zg-left" src\x3d"' + b[2] + '"\x3e\n          \x3cdiv class\x3d"zu-autocomplete-row-name" title\x3d"' + b[0] + '"\x3e\n            ' + b[0] + k + '\n          \x3c/div\x3e\n          \x3cdiv class\x3d"zu-autocomplete-row-description"\x3e\n            \x3cspan class\x3d"badge-summary"\x3e' + d + '\x3c/span\x3e\n            \x3cspan class\x3d"zg-gray-normal bio"\x3e' + b[4] + "\x3c/span\x3e\n          \x3c/div\x3e\n        \x3c/a\x3e\n      ";
      f = "User";
      g = b[1]
    } else "question" === a.data[0] ? (d = (0, window.parseInt)(b[3], 10), c.innerHTML = (b[4] ? '\x3ca class\x3d"zg-star" data-tooltip\x3d"s$b$优质问答" href\x3d"/question/' + b[2] + '"\x3e\x3c/a\x3e' : "") + ['\x3ca class\x3d"zm-ac-link"', 'href\x3d"/question/' + b[2] + '"\x3e', b[0]].join("") + ('\x3cspan class\x3d"zm-ac-gray"\x3e' + (d ? d + " 个回答" : "还没有回答") + "\x3c/span\x3e\x3c/a\x3e"), f = "Question", g = b[2].toString()) : "column" === a.data[0] ? (a = b[0], h = b[2].toString(), d = b[5], b = (0, window.parseInt)(b[3], 10), k = "", 0 < b && (k = '\x3cspan class\x3d"zm-ac-gray"\x3e ' +
      b + " 人关注\x3c/span\x3e"), c.innerHTML = '\n        \x3ca class\x3d"zm-ac-link" href\x3d"https://zhuanlan.zhihu.com/' + h + '"\x3e\n          \x3cimg class\x3d"zm-item-img-avatar column-avatar zg-left" src\x3d"' + d + '"\x3e' + a + k + "\n        \x3c/a\x3e\n      ", f = "Column", g = h) : "article" === a.data[0] || "promotion" === a.data[0] ? (a = a.data[0], h = b[0], d = b[2].toString(), b = (0, window.parseInt)(b[3], 10), k = "", 0 < b && (k = '\x3cspan class\x3d"zm-ac-gray"\x3e ' + b + " 个赞\x3c/span\x3e"), c.innerHTML = '\n        \x3ca class\x3d"zm-ac-link" href\x3d"https://' +
      ("promotion" === a ? "promotion" : "zhuanlan") + ".zhihu.com/p/" + d + '"\x3e\n          ' + h + k + "\n        \x3c/a\x3e\n      ", f = "promotion" === a ? "Ad" : "Post", g = d) : "search_link" === a.data[0] ? (c.innerHTML = '\x3ca href\x3d"/search?q\x3d' + b[0] + '\x26type\x3dquestion" data-za-element-name\x3d"ViewAll"\x3e查看全部搜索结果\x3ci class\x3d"zg-icon arrow"\x3e\x3c/i\x3e\x3c/a\x3e', z.U.add(c, "zu-autocomplete-row-search-link")) : "plain_text" === a.data[0] ? c.innerHTML = b[0] : "sina" === a.data[0] && (c.innerHTML = ['\x3ca href\x3d"javascript:;" title\x3d"' +
      b[0] + '"\x3e', '\x3cimg class\x3d"zm-item-img-avatar" src\x3d"' + b[2] + '" /\x3e', b[0], "\x3c/a\x3e"
    ].join(""));
    f && g && c && z.X.vb(c, {
      module: f + "Item",
      index: ""
    }, function() {
      return {
        card: {
          card_type: "Content",
          content: {
            type: f,
            token: g
          }
        }
      }
    });
    (0, window.$)("a", c).click(function(a) {
      a.preventDefault()
    })
  };
  z.Mr = function(a, b, c) {
    for (c = c || "A"; null != b && b !== a;) {
      if (b.tagName === c) return b;
      b = b.parentNode
    }
    return null
  };
  z.Nr = function(a) {
    this.ET = a;
    this.data = new z.Qd
  };
  var Or = function(a) {
    return (a = z.Ar(a)) ? a.length : 0
  };
  var Pr = function(a, b, c, d) {
    window._gaq || (window._gaq = []);
    c && (c = "" + c);
    d && (d = (0, window.parseInt)(d, 10));
    window._gaq.push(["_trackEvent", a, b, c, d]);
    z.Ki && Qr("trackEvent(deprecated)", z.vb(arguments))
  };
  var Rr = function(a) {
    return (a = String(a).toLowerCase()) ? z.ob([".jpg", ".jpeg", ".png"], function(b) {
      return z.up(a, b)
    }) : !1
  };
  var Sr = function(a, b) {
    function c(b) {
      return a.getElementsByTagName(b).length
    }
    var d = ["img", "embed"];
    return b && z.ob(d, c) ? !1 : !z.lp(z.Tr, z.ab, z.qf)(a)
  };
  z.Ur = function(a, b) {
    var c = window.$.extend({
        all: !1
      }, z.Ur.defaults, b || {}),
      d = (0, window.$)(a).get(0).getBoundingClientRect();
    return !c.all && (d.bottom < c.paddingTop || d.bottom > (0, window.$)(window).height()) || c.all && (d.top < c.paddingTop || d.bottom > (0, window.$)(window).height()) ? !1 : !0
  };
  z.Vr = function(a, b) {
    if (a) {
      "number" === window.$.type(b) && (b = {
        offsetTop: b
      });
      var c = window.$.extend({
        sD: z.Ur
      }, Wr, b || {});
      if (!c.sD(a, c)) {
        var d = (0, window.$)(a).offset().top - c.paddingTop - c.offsetTop || 0;
        c.cx ? (0, window.$)(window.document.documentElement).add(window.document.body).animate({
          scrollTop: d
        }) : (0, window.$)(window).scrollTop(d)
      }
    }
  };
  var Xr = function(a) {
    (0, window.$)(a.target.M.h).off("click.disable-a").on("click.disable-a", "a", function(a) {
      a.preventDefault()
    })
  };
  z.Yr = function(a, b) {
    var c = null;
    return function() {
      var d = this,
        f = arguments;
      (0, window.clearTimeout)(c);
      c = (0, window.setTimeout)(function() {
        b.apply(d, f)
      }, a)
    }
  };
  var Zr = function(a, b) {
    var c = a.getBoundingClientRect(),
      d = z.Rg(window.document.body).top;
    if (0 < c.top - d) b && b();
    else {
      var f = a.offsetHeight,
        g = Io(window.document).y,
        h = z.Qe().height;
      b && b();
      var k = a.offsetHeight;
      window.scrollTo(0, g + (c.bottom < h ? k - f : c.top - d))
    }
  };
  z.$r = function(a) {
    return 1E4 > a ? a.toString() : 1E6 > a ? (0, window.parseInt)(a / 1E3) + "K" : 1E9 > a ? (0, window.parseInt)(a / 1E6) + "M" : (0, window.parseInt)(a / 1E9) + "G"
  };
  z.as = function(a) {
    z.G.call(this);
    this.II = null;
    this.Dd = a;
    this.o().g(this.Dd, ["input", "propertychange"], this.qM);
    bs(this, !0);
    z.U.add(this.Dd, "zu-seamless-input-origin-element")
  };
  var bs = function(a, b) {
    cs(a);
    if (a.Bg) {
      var c = a.Dd.value;
      if (b || a.II !== c) a.II = c, a.Bg.value = c, c = z.Ug(a.Dd), a.Dd.style.height = z.Cg(a.Bg.scrollHeight + c.top + c.bottom, !0), a.dispatchEvent("change")
    }
  };
  var cs = function(a) {
    if (!a.Bg && 0 !== z.ko(a.Dd).width) {
      var b = z.M("div", {
        style: "overflow:hiddenposition:relativeheight:0"
      }, a.Bg = z.M("textarea", {
        rows: 1,
        className: "zu-seamless-input-mock-element"
      }));
      window.document.body.appendChild(b);
      z.Db("paddingTop paddingBottom fontFamily fontSize fontWeight fontStyle letterSpacing textTransform wordSpacing textIndent lineHeight width white-space".split(" "), function(a) {
        this.Bg.style[a] = z.xg(this.Dd, a)
      }, a)
    }
  };
  var ds = function(a) {
    this.hx = a
  };
  var es = function(a, b) {
    a && (a.tabIndex = b ? 0 : -1)
  };
  var fs = function(a, b, c) {
    if (c)
      for (var d = c.firstChild, f; d && d.parentNode == c;) {
        f = d.nextSibling;
        if (1 == d.nodeType) {
          var g = a.Co(d);
          g && (g.h = d, b.isEnabled() || g.bb(!1), b.L(g), g.w(d))
        } else d.nodeValue && "" != (0, z.ab)(d.nodeValue) || c.removeChild(d);
        d = f
      }
  };
  z.gs = function(a, b, c) {
    z.Q.call(this, c);
    this.M = b || ds.aa();
    this.Ub = a || this.M.OG()
  };
  var hs = function(a, b) {
    var c = a.o(),
      d = a.ec();
    b ? c.g(d, "focus", a.te).g(d, "blur", a.gd).g(a.ft(), "key", a.fc) : c.oa(d, "focus", a.te).oa(d, "blur", a.gd).oa(a.ft(), "key", a.fc)
  };
  var is = function(a, b) {
    var c = b.m(),
      c = c.id || (c.id = b.se());
    a.ah || (a.ah = {});
    a.ah[c] = b
  };
  var js = function(a) {
    return z.ch(a, a.Ya)
  };
  z.ks = function(a) {
    ls(a, function(a, c) {
      return (a + 1) % c
    }, z.bh(a) - 1)
  };
  var ms = function(a) {
    ls(a, function(a, c) {
      a--;
      return 0 > a ? c - 1 : a
    }, 0)
  };
  var ns = function(a) {
    ls(a, function(a, c) {
      return (a + 1) % c
    }, a.Ya)
  };
  var os = function(a) {
    ls(a, function(a, c) {
      a--;
      return 0 > a ? c - 1 : a
    }, a.Ya)
  };
  var ls = function(a, b, c) {
    c = 0 > c ? Rn(a, a.rc) : c;
    var d = z.bh(a);
    c = b.call(a, c, d);
    for (var f = 0; f <= d;) {
      var g = z.ch(a, c);
      if (g && a.ZE(g)) {
        a.Eb(c);
        break
      }
      f++;
      c = b.call(a, c, d)
    }
  };
  var ps = function() {
    z.Q.call(this);
    this.jw = []
  };
  z.qs = function(a, b) {
    this.Na = a || [];
    this.pD = !b
  };
  var rs = function(a, b, c) {
    var d = [];
    if ("" != a) {
      a = z.Xa(a);
      a = new RegExp("(^|\\W+)" + a, "i");
      for (var f = 0; f < c.length && d.length < b; f++) {
        var g = c[f];
        String(g).match(a) && d.push(g)
      }
    }
    return d
  };
  var ss = function(a, b, c) {
    for (var d = [], f = 0; f < c.length; f++) {
      var g = c[f],
        h = a.toLowerCase(),
        k = String(g).toLowerCase(),
        l = 0;
      if (-1 != k.indexOf(h)) l = (0, window.parseInt)((k.indexOf(h) / 4).toString(), 10);
      else
        for (var p = h.split(""), q = -1, v = 10, I = 0, K; K = p[I]; I++) K = k.indexOf(K), K > q ? (q = K - q - 1, q > v - 5 && (q = v - 5), l += q, q = K) : (l += v, v += 5);
      l < 6 * h.length && d.push({
        qY: g,
        cL: l,
        index: f
      })
    }
    d.sort(function(a, b) {
      var c = a.cL - b.cL;
      return 0 != c ? c : a.index - b.index
    });
    a = [];
    for (I = 0; I < b && I < d.length; I++) a.push(d[I].qY);
    return a
  };
  z.ts = function(a, b, c) {
    z.G.call(this);
    this.Xd = a;
    this.Sf = c;
    this.M = b;
    z.F(b, [us, z.vs, ws, z.xs], this.handleEvent, !1, this);
    this.cc = null;
    this.Na = [];
    this.sh = -1;
    this.dd = 0;
    this.ke = this.Ic = null;
    this.bI = {}
  };
  z.ys = function(a) {
    for (var b = a.dd + a.Na.length - 1, c = a.sh, d = 0; d < a.Na.length; d++) {
      if (c >= a.dd && c < b) c++;
      else if (-1 == c) c = a.dd;
      else if (a.uE && c == b) {
        a.ug(-1);
        break
      } else if (a.QM && c == b) c = a.dd;
      else break;
      if (a.ug(c)) break
    }
  };
  var zs = function(a) {
    for (var b = a.dd + a.Na.length - 1, c = a.sh, d = 0; d < a.Na.length; d++) {
      if (c > a.dd) c--;
      else if (a.uE && c == a.dd) {
        a.ug(-1);
        break
      } else if (!a.QM || -1 != c && c != a.dd) break;
      else c = b;
      if (a.ug(c)) break
    }
  };
  z.As = function(a) {
    a.QH() || window.setTimeout((0, z.t)(a.QH, a), 10)
  };
  var Bs = function(a, b) {
    var c = b - a.dd;
    return 0 > c || c >= a.Na.length ? -1 : c
  };
  z.Cs = function(a) {
    var b = 0,
      c = 0;
    if (Ds(a)) b = a.selectionStart, c = -1;
    else if (z.C) {
      var d = Es(a),
        f = d[0],
        d = d[1];
      if (f.inRange(d)) {
        f.setEndPoint("EndToStart", d);
        if ("textarea" == a.type) {
          d.duplicate();
          b = a = f.text;
          for (c = !1; !c;) 0 == f.compareEndPoints("StartToEnd", f) ? c = !0 : (f.moveEnd("character", -1), f.text == a ? b += "\r\n" : c = !0);
          f = [b.length, -1];
          return f
        }
        b = f.text.length;
        c = -1
      }
    }
    return [b, c]
  };
  z.Fs = function(a, b) {
    if (Ds(a)) a.selectionStart = b, a.selectionEnd = b;
    else if (z.C) {
      b = Gs(a, b);
      var c = a.createTextRange();
      c.collapse(!0);
      c.move("character", b);
      c.select()
    }
  };
  var Es = function(a) {
    var b = a.ownerDocument || a.document,
      c = b.selection.createRange();
    "textarea" == a.type ? (b = b.body.createTextRange(), b.moveToElementText(a)) : b = a.createTextRange();
    return [b, c]
  };
  var Gs = function(a, b) {
    "textarea" == a.type && (b = z.Ka(a.value.substring(0, b)).length);
    return b
  };
  var Ds = function(a) {
    try {
      return "number" == typeof a.selectionStart
    } catch (b) {
      return !1
    }
  };
  z.Hs = function(a, b, c, d) {
    z.xc.call(this);
    d = d || 150;
    this.Hm = null != c ? c : !0;
    this.vq = a || ",;";
    this.UP = this.vq.substring(0, 1);
    a = this.Hm ? "[\\s" + this.vq + "]+" : "[\\s]+";
    this.jM = new RegExp("^" + a + "|" + a + "$", "g");
    this.PX = new RegExp("\\s*[" + this.vq + "]$");
    this.QI = b || "";
    this.EW = !1;
    this.DW = this.Hm;
    this.ka = 0 < d ? new z.td(d) : null;
    this.kc = new z.xd(this);
    this.Mw = new z.xd(this);
    this.Cb = new Sp;
    this.FI = -1
  };
  var Is = function(a, b, c) {
    if (z.ja(c) ? c : a.Hm) {
      c = Js(a, a.X(), z.Cs(a.kb)[0]);
      var d = Ks(a, a.X());
      a.PX.test(b) || (b = z.op(b) + a.UP);
      a.vZ && (0 == c || z.tp(d[c - 1]) || (b = " " + b), c == d.length - 1 && (b += " "));
      if (b != d[c]) {
        d[c] = b;
        b = a.kb;
        (z.B || z.C && z.E("9")) && b.blur();
        b.value = d.join("");
        for (var f = 0, g = 0; g <= c; g++) f += d[g].length;
        b.focus();
        c = f;
        d = a.kb;
        b = c;
        Ds(d) ? d.selectionStart = b : z.C && (f = Es(d), g = f[0], g.inRange(f[1]) && (b = Gs(d, b), g.collapse(!0), g.move("character", b), g.select()));
        d = a.kb;
        Ds(d) ? d.selectionEnd = c : z.C && (f = Es(d), b = f[1], f[0].inRange(b) &&
          (c = Gs(d, c), d = Gs(d, z.Cs(d)[0]), b.collapse(!0), b.moveEnd("character", c - d), b.select()))
      }
    } else a.Da(b);
    a.cC = !0
  };
  var Ls = function(a, b) {
    var c = a.Hm && b.charCode && -1 != a.vq.indexOf(String.fromCharCode(b.charCode));
    a.RX && c && a.update();
    return a.QX && c && a.Y.bj() ? (b.preventDefault(), !0) : !1
  };
  var Ms = function(a) {
    a.Cb.attach(a.kb);
    a.kc.g(a.Cb, "key", a.Xp);
    a.kc.g(a.kb, "mousedown", a.SJ);
    z.C && a.kc.g(a.kb, "keypress", a.PJ)
  };
  var Ns = function(a, b) {
    a.Mw.removeAll();
    a.Y && z.As(a.Y);
    b != a.kb && (a.kb = b, a.ka && (a.ka.start(), a.kc.g(a.ka, "tick", a.$p)), a.Bp = a.X(), Ms(a))
  };
  var Os = function(a) {
    a.nj && (a.nj = !1, a.kc.oa(a.kb, "keypress", a.QJ), a.kc.oa(a.kb, "keyup", a.RJ))
  };
  var Js = function(a, b, c) {
    a = Ks(a, b);
    if (c == b.length) return a.length - 1;
    for (var d = b = 0, f = 0; d < a.length && f <= c; d++) f += a[d].length, b = d;
    return b
  };
  var Ks = function(a, b) {
    if (!a.Hm) return [b];
    for (var c = String(b).split(""), d = [], f = [], g = 0, h = !1; g < c.length; g++) a.QI && -1 != a.QI.indexOf(c[g]) ? (a.RQ && !h && (d.push(f.join("")), f.length = 0), f.push(c[g]), h = !h) : h || -1 == a.vq.indexOf(c[g]) ? f.push(c[g]) : (f.push(c[g]), d.push(f.join("")), f.length = 0);
    d.push(f.join(""));
    return d
  };
  z.Ps = function(a, b, c) {
    z.xc.call(this);
    this.jD = a;
    this.pD = !b;
    this.da = new z.de(c)
  };
  z.Qs = function(a, b, c, d, f, g, h, k, l) {
    var p = Rs(c),
      q = Eo(a),
      v = Ho(a);
    v && q.iA(new z.sg(v.left, v.top, v.right - v.left, v.bottom - v.top));
    var v = z.Ie(a),
      I = z.Ie(c);
    if (v.ua() != I.ua()) {
      var K = v.ua().body;
      var I = I.ab(),
        O = new z.Ge(0, 0),
        ba = z.Te(z.Ke(K));
      if (z.Oc(ba, "parent")) {
        var Ua = K;
        do {
          var Sa = ba == I ? z.ao(Ua) : z.Gg(Ua);
          O.x += Sa.x;
          O.y += Sa.y
        } while (ba && ba != I && ba != ba.parent && (Ua = ba.frameElement) && (ba = ba.parent))
      }
      K = oo(O, z.ao(K));
      !z.C || 9 <= z.Vg || Vn(v) || (K = oo(K, z.xf(v)));
      q.left += K.x;
      q.top += K.y
    }
    a = Ss(a, b);
    q = new z.Ge(a & 2 ? q.left + q.width :
      q.left, a & 1 ? q.top + q.height : q.top);
    q = oo(q, p);
    f && (q.x += (a & 2 ? -1 : 1) * f.x, q.y += (a & 1 ? -1 : 1) * f.y);
    var ya;
    if (h)
      if (l) ya = l;
      else if (ya = Ho(c)) ya.top -= p.y, ya.right -= p.x, ya.bottom -= p.y, ya.left -= p.x;
    return Ts(q, c, d, g, ya, h, k)
  };
  var Rs = function(a) {
    var b;
    if (a = a.offsetParent) {
      var c = "HTML" == a.tagName || "BODY" == a.tagName;
      c && "static" == z.Ag(a) || (b = z.ao(a), c || (c = (c = z.Og(a)) && z.B ? -a.scrollLeft : !c || z.Kl && z.E("8") || "visible" == z.zg(a, "overflowX") ? a.scrollLeft : a.scrollWidth - a.clientWidth - a.scrollLeft, b = oo(b, new z.Ge(c, a.scrollTop))))
    }
    return b || new z.Ge
  };
  var Ts = function(a, b, c, d, f, g, h) {
    a = a.clone();
    var k = Ss(b, c);
    c = z.Jg(b);
    h = h ? h.clone() : c.clone();
    a = a.clone();
    h = h.clone();
    var l = 0;
    if (d || 0 != k) k & 2 ? a.x -= h.width + (d ? d.right : 0) : d && (a.x += d.left), k & 1 ? a.y -= h.height + (d ? d.bottom : 0) : d && (a.y += d.top);
    if (g) {
      if (f) {
        d = a;
        k = h;
        l = 0;
        65 == (g & 65) && (d.x < f.left || d.x >= f.right) && (g &= -2);
        132 == (g & 132) && (d.y < f.top || d.y >= f.bottom) && (g &= -5);
        d.x < f.left && g & 1 && (d.x = f.left, l |= 1);
        if (g & 16) {
          var p = d.x;
          d.x < f.left && (d.x = f.left, l |= 4);
          d.x + k.width > f.right && (k.width = Math.min(f.right - d.x, p + k.width - f.left),
            k.width = Math.max(k.width, 0), l |= 4)
        }
        d.x + k.width > f.right && g & 1 && (d.x = Math.max(f.right - k.width, f.left), l |= 1);
        g & 2 && (l = l | (d.x < f.left ? 16 : 0) | (d.x + k.width > f.right ? 32 : 0));
        d.y < f.top && g & 4 && (d.y = f.top, l |= 2);
        g & 32 && (p = d.y, d.y < f.top && (d.y = f.top, l |= 8), d.y + k.height > f.bottom && (k.height = Math.min(f.bottom - d.y, p + k.height - f.top), k.height = Math.max(k.height, 0), l |= 8));
        d.y + k.height > f.bottom && g & 4 && (d.y = Math.max(f.bottom - k.height, f.top), l |= 2);
        g & 8 && (l = l | (d.y < f.top ? 64 : 0) | (d.y + k.height > f.bottom ? 128 : 0));
        f = l
      } else f = 256;
      l = f
    }
    g = new z.sg(0,
      0, 0, 0);
    g.left = a.x;
    g.top = a.y;
    g.width = h.width;
    g.height = h.height;
    f = l;
    if (f & 496) return f;
    z.Bg(b, new z.Ge(g.left, g.top));
    h = g.oh();
    z.Vo(c, h) || (c = h, a = Vn(z.Ie(z.Ke(b))), !z.C || z.E("10") || a && z.E("8") ? (b = b.style, z.B ? b.MozBoxSizing = "border-box" : z.D ? b.WebkitBoxSizing = "border-box" : b.boxSizing = "border-box", b.width = Math.max(c.width, 0) + "px", b.height = Math.max(c.height, 0) + "px") : (h = b.style, a ? (a = z.Rg(b), b = z.Ug(b), h.pixelWidth = c.width - b.left - a.left - a.right - b.right, h.pixelHeight = c.height - b.top - a.top - a.bottom - b.bottom) : (h.pixelWidth =
      c.width, h.pixelHeight = c.height)));
    return f
  };
  var Ss = function(a, b) {
    return (b & 4 && z.Og(a) ? b ^ 2 : b) & -5
  };
  z.Us = function(a, b, c, d) {
    z.G.call(this);
    this.Ta = a || window.document.body;
    this.ba = z.Ie(this.Ta);
    this.oq = !a;
    this.h = null;
    this.cc = "";
    this.Na = [];
    this.bf = [];
    this.BL = this.vm = -1;
    this.xb = !1;
    this.className = "ac-renderer";
    this.Nh = "ac-row";
    this.KI = "active";
    this.Nw = "ac-active";
    this.QS = "ac-highlighted";
    this.Pl = b || null;
    this.yM = null != d ? d : !0;
    this.oU = !0;
    this.Vo = !1;
    this.rX = !!c;
    this.Vv = !1;
    this.Jp = 0;
    this.wL = !1
  };
  var Vs = function(a, b) {
    a.Ic && (z.cj(a.Ic, "haspopup", b), z.cj(a.h, "expanded", b), b ? z.cj(a.Ic, "owns", a.h.id) : (a.Ic.removeAttribute("aria-owns"), Bo(a.Ic, null)))
  };
  var Ws = function(a, b) {
    var c = 0 <= b && b < a.Na.length ? a.Na[b] : void 0,
      d = 0 <= b && b < a.bf.length ? a.bf[b] : void 0;
    a.dispatchEvent({
      type: "rowhilite",
      q0: d,
      Zi: c ? c.data : null
    }) && (0 <= a.vm && z.kj(a.bf[a.vm], [a.Nw, a.KI]), a.vm = b, d && (z.ij(d, [a.Nw, a.KI]), a.Ic && Bo(a.Ic, d), Go(d, a.h)))
  };
  var Xs = function(a) {
    if (!a.h) {
      var b = a.ba.B("DIV", {
        style: "display:none"
      });
      a.wL && (b.style.overflowY = "auto");
      a.h = b;
      z.ij(b, (0, z.ab)(a.className).split(" "));
      z.bj(b, "listbox");
      b.id = z.Yg(z.Xg.aa());
      a.ba.appendChild(a.Ta, b);
      z.F(b, "click", a.km, !1, a);
      z.F(b, "mousedown", a.lm, !1, a);
      z.F(b, "mouseover", a.lH, !1, a)
    }
  };
  var Ys = function(a) {
    Xs(a);
    a.Vv && (a.h.style.visibility = "hidden");
    a.wZ && (a.h.style.minWidth = a.wZ.clientWidth + "px");
    a.bf.length = 0;
    a.ba.nq(a.h);
    if (a.Pl && a.Pl.render) a.Pl.render(a, a.h, a.Na, a.cc);
    else {
      var b = null;
      z.A(a.Na, function(a) {
        a = Zs(this, a, this.cc);
        this.Vv ? this.h.insertBefore(a, b) : this.ba.appendChild(this.h, a);
        b = a
      }, a)
    }
    0 == a.Na.length ? a.Mc() : (a.show(), a.ga(), z.Do(a.h, !0))
  };
  var $s = function(a, b, c) {
    if (a.Vo || !a.LM)
      if (3 == b.nodeType) {
        var d = null;
        z.ma(c) && 1 < c.length && !a.Vo && (d = z.yb(c, 1));
        c = at(a, c);
        if (0 != c.length) {
          var f = b.nodeValue,
            g = a.oU ? new RegExp("\\b(?:" + c + ")", "gi") : new RegExp(c, "gi");
          c = [];
          for (var h = 0, k = g.exec(f), l = 0; k;) l++, c.push(f.substring(h, k.index)), c.push(f.substring(k.index, g.lastIndex)), h = g.lastIndex, k = g.exec(f);
          c.push(f.substring(h));
          if (1 < c.length) {
            d = a.Vo ? l : 1;
            for (f = 0; f < d; f++) g = 2 * f, b.nodeValue = c[g], h = a.ba.createElement("B"), h.className = a.QS, a.ba.appendChild(h, a.ba.createTextNode(c[g +
              1])), h = b.parentNode.insertBefore(h, b.nextSibling), b.parentNode.insertBefore(a.ba.createTextNode(""), h.nextSibling), b = h.nextSibling;
            c = z.yb(c, 2 * d);
            b.nodeValue = c.join("");
            a.LM = !0
          } else d && $s(a, b, d)
        }
      } else
        for (b = b.firstChild; b;) d = b.nextSibling, $s(a, b, c), b = d
  };
  var at = function(a, b) {
    var c = "";
    if (!b) return c;
    z.ma(b) && (b = z.lb(b, function(a) {
      return !z.tp(null == a ? "" : String(a))
    }));
    a.Vo ? z.ma(b) ? c = z.mb(b, z.Xa).join("|") : (c = b.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, ""), c = z.Xa(c), c = c.replace(/ /g, "|")) : z.ma(b) ? c = 0 < b.length ? z.Xa(b[0]) : "" : /^\W/.test(b) || (c = z.Xa(b));
    return c
  };
  var Zs = function(a, b, c) {
    var d = a.ba.B("DIV", {
      className: a.Nh,
      id: z.Yg(z.Xg.aa())
    });
    z.bj(d, "option");
    a.Pl && a.Pl.ld ? a.Pl.ld(b, c, d) : a.OK(b, c, d);
    c && a.yM && (a.LM = !1, $s(a, d, c));
    z.hj(d, a.Nh);
    a.bf.push(d);
    return d
  };
  var bt = function(a, b) {
    for (; b && b != a.h && !z.gj(b, a.Nh);) b = b.parentNode;
    return b ? z.kb(a.bf, b) : -1
  };
  z.ct = function(a, b, c, d) {
    this.Xd = a = new z.Ps(a, !d);
    d = new z.Us;
    c = new z.Hs(null, null, !!c, 300);
    z.ts.call(this, a, d, c);
    c.Y = this;
    c.tl(b)
  };
  z.dt = function(a, b) {
    var c = this,
      d = {};
    z.Mb(d, this.defaults, b || {});
    this.H = d;
    var f = d.ld ? {
      ld: (0, z.t)(d.ld, c)
    } : null;
    f && (f.render = d.render ? (0, z.t)(d.render, c) : null);
    this.M = f = new z.Us(d.Wi, f);
    var g = "string" === typeof d.source ? z.Ps : z.qs,
      h = new g(d.source, !d.nZ);
    this.Xd = h;
    var k = d.gA;
    k || (k = new z.Hs(d.separator, d.aQ, !!d.multiple, d.delay), k.cj = function(a, b) {
      var f;
      z.qa(d.select) && (f = d.select.call(c, a, c.M.bf[c.M.vm]));
      Is(this, z.ja(f) ? f : a.label || a.toString(), b);
      return !1
    });
    z.ts.call(this, h, f, k);
    k.Y = this;
    k.tl(a);
    a.setAttribute("autocomplete",
      "off");
    h.Yi = function(a, b, f) {
      var h = f;
      z.qa(d.format) && (h = function(a, b) {
        var g = d.format.call(c, b, a);
        z.qa(d.filter) && (g = d.filter.call(c, g, a));
        f(a, g)
      });
      return g.prototype.Yi.call(this, a, b, h)
    };
    f.OK = function(a, b, c) {
      a = a.data;
      c.innerHTML = a.JY ? a.JY() : a.label || a.toString()
    };
    this.Ic = a;
    d.xe && (this.Ak = d.xe);
    d.placeholder && (this.sc = new z.uk(a, d.placeholder));
    this.addEventListener("suggestionsupdate", function() {
      this.dispatchEvent(this.Bb() ? "show" : "hide")
    })
  };
  var et = function(a, b, c, d) {
    z.Hs.call(this, a, b, c, d)
  };
  z.ft = function() {
    z.G.call(this);
    this.KH = 0;
    this.cd = [];
    this.Sl = [];
    this.ny = {};
    this.U = new z.xd(this);
    this.zT = this.lI = !1;
    this.hD = !0
  };
  z.gt = function(a, b, c) {
    b.dG = c;
    b.Kj = void 0;
    a.cd.push(b)
  };
  var ht = function(a, b) {
    for (var c = 0, d = a.cd.length; c < d; c++) {
      var f = a.cd[c];
      f.Rl = Eo(f)
    }
    c = 0;
    for (d = a.Sl.length; c < d; c++) f = a.Sl[c], f != b && (f.Rl = Eo(f))
  };
  var it = function(a) {
    z.Cc(a.Pb);
    a.Nc && z.N(a.Nc);
    a.Pa && "none" == a.Pa.style.display && (a.Nu.insertBefore(a.Pa, a.sB), a.Pa.style.display = "");
    a.Wx && a.Pa ? z.kj(a.Pa, a.Wx || []) : a.Pa && (a.Pa.style.visibility = "");
    for (var b = 0, c = a.cd.length; b < c; b++) {
      var d = a.cd[b];
      d.Kj && z.jj(d, d.Kj)
    }
  };
  var jt = function(a, b) {
    return a.x > b.left && a.x < b.left + b.width && a.y > b.top && a.y < b.top + b.height
  };
  var kt = function(a, b) {
    var c = a.Rl;
    return Math.abs(b.y - (c.top + (c.height - 1) / 2))
  };
  var lt = function(a) {
    return a.top + a.height - 1
  };
  var mt = function(a) {
    return a.left + a.width - 1
  };
  var nt = function(a) {
    return a.left || 0
  };
  var ot = function(a, b) {
    return a < b
  };
  var pt = function(a, b) {
    return a > b
  };
  var qt = function(a, b, c, d, f, g) {
    z.Lc.call(this, a);
    this.event = c;
    this.LP = d;
    this.Is = g
  };
  z.rt = function(a, b) {
    z.Q.call(this, b);
    this.Tb = a || ""
  };
  var st = function() {
    null != tt || (tt = "placeholder" in window.document.createElement("INPUT"));
    return tt
  };
  var ut = function(a) {
    !a.MQ && a.U && a.m().form && (a.U.g(a.m().form, "submit", a.PR), a.MQ = !0)
  };
  var vt = function(a) {
    return !!a.m() && "" != a.m().value && a.m().value != a.Tb
  };
  var wt = function(a, b) {
    return window.$.post("/node/MemberFollowBaseV2", {
      method: b ? "follow_member" : "unfollow_member",
      params: {
        hash_id: a
      }
    })
  };
  var xt = function(a, b) {
    return window.$.post("/node/QuestionFollowBaseV2", {
      method: b ? "follow_question" : "unfollow_question",
      params: {
        question_id: a
      }
    })
  };
  var yt = function(a, b) {
    return window.$.post(b ? "/collection/follow" : "/collection/unfollow", {
      favlist_id: a
    })
  };
  var zt = function(a, b) {
    return window.$.post("/node/TopicFollowBaseV2", {
      method: b ? "follow_topic" : "unfollow_topic",
      params: {
        topic_id: a
      }
    })
  };
  z.At = function(a, b) {
    return window.$.get("/" + a + "/" + b + "/sharetext")
  };
  var Bt = function(a, b, c, d) {
    z.Hs.call(this, a, b, c, d)
  };
  var Ct = function(a, b, c) {
    z.Ps.call(this, b, c);
    this.Y = a;
    this.bC = null;
    this.xG = !0
  };
  var Dt = function(a, b, c, d) {
    this.mJ = 0;
    z.Hs.call(this, a, b, !!c, d || 300)
  };
  var Et = function(a, b, c, d) {
    Dt.call(this, a, b, !!c, d)
  };
  z.Ft = function(a, b, c, d, f, g, h, k, l) {
    var p = {};
    "question_suggest" === g ? (p.render = (0, z.t)(this.eX, this), p.ld = Lr) : "topic_question" === g ? (p.render = (0, z.t)(this.gX, this), p.ld = Kr) : p.ld = g ? Kr : Lr;
    g = new z.Us(f, p);
    f && (g.oq = !1);
    g.Vo = !0;
    this.M = g;
    this.Xd = new Ct(this, a, !d);
    a = l ? l : new Dt(null, null, c);
    h && h.length && new z.uk(b, h[0]);
    a.pM = !1;
    z.ts.call(this, this.Xd, g, a);
    a.Y = this;
    a.Sr(b);
    k && (a.mJ = k)
  };
  z.Gt = function(a, b, c) {
    z.G.call(this);
    this.Ve = c || "搜索话题";
    this.pa = b;
    this.data = a || [];
    this.status = Ht;
    this.aX = "/topic/unbind";
    this.bO = "/topic/bind";
    this.isEnabled = !0;
    this.Zo = '\x3ca class\x3d"zm-tag-editor-tip-link" href\x3d"#" name\x3d"edit"\x3e帮忙给这个问题选个话题吧，好让别人来回答\x3c/a\x3e\x3ca name\x3d"edit" class\x3d"zu-edit-button" href\x3d"#"\x3e\x3ci class\x3d"zu-edit-button-icon"\x3e\x3c/i\x3e添加\x3c/a\x3e';
    this.xe = 10;
    this.zu = !1;
    this.Ep = window.Infinity;
    this.uu = 0;
    this.mE = !1
  };
  var It = function(a) {
    a = z.Uo("zm-item-tag", a.Og);
    return z.mb(a, function(a) {
      var c = [(0, z.ab)(a.innerHTML), a.getAttribute("data-token"), null, a.getAttribute("data-topicid")];
      c.YY = !!a.getAttribute("data-uneditable");
      return c
    })
  };
  z.Jt = function(a) {
    if (a.data.length) {
      var b = z.mb(a.data, function(a) {
        return z.zr(a, "", null, "b")
      }, a);
      a.isEnabled && b.push(Cr());
      a.Og.innerHTML = b.join("")
    } else a.isEnabled && (a.Og.innerHTML = a.Zo)
  };
  var Kt = function(a, b) {
    return z.lb(b, function(a) {
      return "topic" !== a[0] ? !1 : !this.Fy(a)
    }, a)
  };
  var Lt = function(a, b, c) {
    function d() {
      return z.pb(b, function(a) {
        return "topic" === a[0] && a[4] && a[1] === c
      })
    }

    function f() {
      return z.pb(b, function(a) {
        return 3 >= a.length && a[1] === z.Ja("创建 %s 话题", a[2])
      })
    }
    var g = (0, z.t)(function() {
      return z.pb(this.data, function(a) {
        return a[0] === c
      })
    }, a);
    z.Y.zt ? !a.mE || b.length && (f() || d()) || g() || b.push(["topic", z.Ja("创建 %s 话题", c), c]) : (a = f()) && (1 < b.length ? z.tb(b, a) : b = [
      ["plain_text", '\x3cspan class\x3d"zu-autocomplete-row-name zu-autocomplete-row-name-info"\x3e没有找到话题：' + a[2] + '\x3c/span\x3e\x3cspan class\x3d"zg-gray-normal zu-autocomplete-row-description"\x3e请使用已经创建的话题\x3c/span\x3e']
    ]);
    return b
  };
  z.Mt = function(a) {
    var b = a.data.length >= a.Ep;
    a.me && z.P(a.me, !b);
    a.ru && z.P(a.ru, b)
  };
  z.Nt = function(a) {
    var b = [];
    a.data = z.lb(a.data, function(a) {
      if (z.rb(b, a[1])) return !1;
      b.push(a[1]);
      return !0
    })
  };
  z.Ot = function(a, b, c) {
    z.Gt.call(this, a, 0, c ? "添加父话题" : "添加子话题");
    this.qA = c;
    this.Xf = b;
    this.Zo = "";
    this.NK = "/topic/parent/remove"
  };
  var Pt = function(a) {
    z.Gt.call(this);
    this.Zo = "";
    this.Ve = a || "";
    this.Ep = this.xe = 5;
    this.wr = (0, window.$)("#zh-question-suggest-title-content")
  };
  var Qt = function(a) {
    var b;
    b = a.Pq ? z.lb(a.Pq, function(a) {
      return !this.Fy(a)
    }, a) : [];
    a.yr.show();
    b && 0 !== b.length || a.yr.hide();
    var c = "";
    b = z.mb(b, function(a) {
      return "\x3ca href\x3d'javascript:;' name\x3d'add' data-id\x3d'" + a[4] + "' data-text\x3d'" + a[1] + "' class\x3d'zg-r3px zm-item-tag'\x3e\x3cspan\x3e" + a[1] + "\x3c/span\x3e\x3c/a\x3e"
    });
    c += b.join("");
    a.nN.html(c);
    a.Aw.hide()
  };
  z.Rt = function(a) {
    z.Gt.call(this, a, 0);
    this.Zo = "";
    this.TE = "/topic/ignore"
  };
  var St = function() {
    z.xc.call(this)
  };
  z.Tt = function(a) {
    z.xc.call(this);
    this.AL = z.np();
    this.lG = z.np();
    this.aC = a.wh();
    this.ba = z.Ie(a.ua());
    a.Sq(this.ba.B("SPAN", {
      id: this.AL
    }), this.ba.B("SPAN", {
      id: this.lG
    }))
  };
  z.Ut = function(a, b) {
    return a.ba.m(b ? a.AL : a.lG)
  };
  z.Vt = function(a, b, c, d, f) {
    this.Tc = !!b;
    this.node = null;
    this.$b = 0;
    this.Vk = !1;
    this.ns = !c;
    a && this.setPosition(a, d);
    this.depth = void 0 != f ? f : this.$b || 0;
    this.Tc && (this.depth *= -1)
  };
  var Wt = function() {};
  var Xt = function(a) {
    if (a.getSelection) return a.getSelection();
    a = a.document;
    var b = a.selection;
    if (b) {
      try {
        var c = b.createRange();
        if (c.parentElement) {
          if (c.parentElement().document != a) return null
        } else if (!c.length || c.item(0).document != a) return null
      } catch (d) {
        return null
      }
      return b
    }
    return null
  };
  z.Yt = function(a) {
    for (var b = [], c = 0, d = a.bk(); c < d; c++) b.push(a.Re(c));
    return b
  };
  z.Zt = function(a) {
    return a.wh() ? a.ia() : a.Z()
  };
  z.$t = function(a) {
    return a.wh() ? a.Ra() : a.va()
  };
  z.au = function(a) {
    return a.wh() ? a.Z() : a.ia()
  };
  z.bu = function(a) {
    return a.wh() ? a.va() : a.Ra()
  };
  var cu = function(a, b) {
    z.Vt.call(this, a, b, !0)
  };
  var du = function() {};
  z.eu = function(a, b, c, d, f) {
    this.ta = this.ya = null;
    this.Ca = this.Ea = 0;
    var g;
    a && (this.ya = a, this.Ea = b, this.ta = c, this.Ca = d, 1 == a.nodeType && "BR" != a.tagName && (a = a.childNodes, (b = a[b]) ? (this.ya = b, this.Ea = 0) : (a.length && (this.ya = z.jb(a)), g = !0)), 1 == c.nodeType && ((this.ta = c.childNodes[d]) ? this.Ca = 0 : this.ta = c));
    z.Vt.call(this, f ? this.ta : this.ya, f, !0);
    if (g) try {
      this.next()
    } catch (h) {
      if (h != z.Nd) throw h;
    }
  };
  var fu = function(a, b) {
    null != a && this.append.apply(this, arguments)
  };
  var gu = function() {};
  var hu = function(a, b) {
    var c = a.R.getClientRects();
    return c.length ? (c = b ? c[0] : z.jb(c), new z.Ge(b ? c.left : c.right, b ? c.top : c.bottom)) : null
  };
  var iu = function(a) {
    this.R = a
  };
  var ju = function(a) {
    var b = z.Ke(a).createRange();
    if (3 == a.nodeType) b.setStart(a, 0), b.setEnd(a, a.length);
    else if (ku(a)) {
      for (var c, d = a;
        (c = d.firstChild) && ku(c);) d = c;
      b.setStart(d, 0);
      for (d = a;
        (c = d.lastChild) && ku(c);) d = c;
      b.setEnd(d, 1 == d.nodeType ? d.childNodes.length : d.length)
    } else c = a.parentNode, a = z.kb(c.childNodes, a), b.setStart(c, a), b.setEnd(c, a + 1);
    return b
  };
  var lu = function(a, b, c, d) {
    var f = z.Ke(a).createRange();
    f.setStart(a, b);
    f.setEnd(c, d);
    return f
  };
  var mu = function(a) {
    this.R = a
  };
  z.nu = function(a, b) {
    this.ta = this.ya = this.Hg = null;
    this.Ca = this.Ea = -1;
    this.R = a;
    this.Gs = b
  };
  var ou = function(a) {
    var b = z.Ke(a).body.createTextRange();
    if (1 == a.nodeType) b.moveToElementText(a), ku(a) && !a.childNodes.length && b.collapse(!1);
    else {
      for (var c = 0, d = a; d = d.previousSibling;) {
        var f = d.nodeType;
        if (3 == f) c += d.length;
        else if (1 == f) {
          b.moveToElementText(d);
          break
        }
      }
      d || b.moveToElementText(a.parentNode);
      b.collapse(!d);
      c && b.move("character", c);
      b.moveEnd("character", a.length)
    }
    return b
  };
  var pu = function(a, b) {
    for (var c = b.childNodes, d = 0, f = c.length; d < f; d++) {
      var g = c[d];
      if (ku(g)) {
        var h = ou(g),
          k = h.htmlText != g.outerHTML;
        if (a.isCollapsed() && k ? 0 <= a.Oe(h, 1, 1) && 0 >= a.Oe(h, 1, 0) : a.R.inRange(h)) return pu(a, g)
      }
    }
    return b
  };
  var qu = function(a, b, c) {
    c = c || a.Cc();
    if (!c || !c.firstChild) return c;
    for (var d = 1 == b, f = 0, g = c.childNodes.length; f < g; f++) {
      var h = d ? f : g - f - 1,
        k = c.childNodes[h],
        l;
      try {
        l = ru(k)
      } catch (q) {
        continue
      }
      var p = l.R;
      if (a.isCollapsed())
        if (!ku(k)) {
          if (0 == a.Oe(p, 1, 1)) {
            a.Ea = a.Ca = h;
            break
          }
        } else {
          if (l.bh(a)) return qu(a, b, k)
        }
      else {
        if (a.bh(l)) {
          if (!ku(k)) {
            d ? a.Ea = h : a.Ca = h + 1;
            break
          }
          return qu(a, b, k)
        }
        if (0 > a.Oe(p, 1, 0) && 0 < a.Oe(p, 0, 1)) return qu(a, b, k)
      }
    }
    return c
  };
  var su = function(a, b) {
    var c = 1 == b,
      d = c ? a.Z() : a.ia();
    if (1 == d.nodeType) {
      for (var d = d.childNodes, f = d.length, g = c ? 1 : -1, h = c ? 0 : f - 1; 0 <= h && h < f; h += g) {
        var k = d[h];
        if (!ku(k) && 0 == a.R.compareEndPoints((1 == b ? "Start" : "End") + "To" + (1 == b ? "Start" : "End"), ru(k).R)) return c ? h : h + 1
      }
      return -1 == h ? 0 : h
    }
    f = a.R.duplicate();
    g = ou(d);
    f.setEndPoint(c ? "EndToEnd" : "StartToStart", g);
    f = f.text.length;
    return c ? d.length - f : f
  };
  var tu = function(a) {
    return 3 == a.nodeType ? a.nodeValue : a.innerText
  };
  var uu = function(a, b, c) {
    c = c || z.Ie(a.parentElement());
    var d, f = d = b.id;
    d || (d = b.id = z.np());
    a.pasteHTML(b.outerHTML);
    (b = c.m(d)) && (f || b.removeAttribute("id"));
    return b
  };
  var vu = function(a, b, c) {
    var d;
    d = d || z.Ie(a.parentElement());
    var f;
    1 != b.nodeType && (f = !0, b = d.B("DIV", null, b));
    a.collapse(c);
    b = uu(a, b, d);
    f && (a = b.firstChild, d.FQ(b), b = a);
    return b
  };
  var wu = function(a) {
    this.R = a
  };
  var xu = function(a) {
    this.R = a
  };
  var yu = function(a) {
    return z.Vl ? new z.nu(a, z.Ke(a.parentElement())) : z.D ? new xu(a) : z.B ? new mu(a) : z.wg ? new wu(a) : new iu(a)
  };
  var ru = function(a) {
    if (!z.C || 9 <= z.Vg) a = z.D ? new xu(ju(a)) : z.B ? new mu(ju(a)) : z.wg ? new wu(ju(a)) : new iu(ju(a));
    else {
      var b = new z.nu(ou(a), z.Ke(a));
      if (ku(a)) {
        for (var c, d = a;
          (c = d.firstChild) && ku(c);) d = c;
        b.ya = d;
        b.Ea = 0;
        for (d = a;
          (c = d.lastChild) && ku(c);) d = c;
        b.ta = d;
        b.Ca = 1 == d.nodeType ? d.childNodes.length : d.length;
        b.Hg = a
      } else b.ya = b.ta = b.Hg = a.parentNode, b.Ea = z.kb(b.Hg.childNodes, a), b.Ca = b.Ea + 1;
      a = b
    }
    return a
  };
  var ku = function(a) {
    return z.$e(a) || 3 == a.nodeType
  };
  z.zu = function() {
    this.Ca = this.ta = this.Ea = this.ya = this.li = null;
    this.If = !1
  };
  var Au = function(a, b) {
    var c = new z.zu;
    c.li = a;
    c.If = !!b;
    return c
  };
  z.Bu = function(a, b, c, d) {
    var f = new z.zu;
    f.If = Cu(a, b, c, d);
    if (z.lf(a) && !z.$e(a)) {
      var g = a.parentNode;
      b = z.kb(g.childNodes, a);
      a = g
    }
    z.lf(c) && !z.$e(c) && (g = c.parentNode, d = z.kb(g.childNodes, c), c = g);
    f.If ? (f.ya = c, f.Ea = d, f.ta = a, f.Ca = b) : (f.ya = a, f.Ea = b, f.ta = c, f.Ca = d);
    return f
  };
  z.Du = function(a) {
    var b;
    if (!(b = a.li)) {
      b = a.Z();
      var c = a.va(),
        d = a.ia(),
        f = a.Ra();
      if (!z.C || 9 <= z.Vg) b = z.D ? new xu(lu(b, c, d, f)) : z.B ? new mu(lu(b, c, d, f)) : z.wg ? new wu(lu(b, c, d, f)) : new iu(lu(b, c, d, f));
      else {
        var g = b,
          h = c,
          k = d,
          l = f,
          p = !1;
        1 == g.nodeType && (h = g.childNodes[h], p = !h, g = h || g.lastChild || g, h = 0);
        var q = ou(g);
        h && q.move("character", h);
        g == k && h == l ? q.collapse(!0) : (p && q.collapse(!1), p = !1, 1 == k.nodeType && (k = (h = k.childNodes[l]) || k.lastChild || k, l = 0, p = !h), g = ou(k), g.collapse(!p), l && g.moveEnd("character", l), q.setEndPoint("EndToEnd",
          g));
        l = new z.nu(q, z.Ke(b));
        l.ya = b;
        l.Ea = c;
        l.ta = d;
        l.Ca = f;
        b = l
      }
      b = a.li = b
    }
    return b
  };
  var Eu = function(a) {
    z.xc.call(this);
    this.xE = z.Zt(a);
    this.AO = z.$t(a);
    this.CG = z.au(a);
    this.IQ = z.bu(a)
  };
  z.Fu = function() {
    this.Lq = this.lb = this.R = null
  };
  var Gu = function(a) {
    var b = new z.Fu;
    b.R = a;
    return b
  };
  var Hu = function(a) {
    for (var b = z.Ke(arguments[0]).body.createControlRange(), c = 0, d = arguments.length; c < d; c++) b.addElement(arguments[c]);
    return Gu(b)
  };
  var Iu = function(a) {
    a.Lq || (a.Lq = a.Di().concat(), a.Lq.sort(function(a, c) {
      return a.sourceIndex - c.sourceIndex
    }));
    return a.Lq
  };
  var Ju = function(a) {
    this.lb = a.Di()
  };
  var Ku = function(a) {
    this.lb = this.ta = this.ya = null;
    a && (this.lb = Iu(a), this.ya = this.lb.shift(), this.ta = z.jb(this.lb) || this.ya);
    z.Vt.call(this, this.ya, !1, !0)
  };
  z.Lu = function() {
    this.cg = [];
    this.Um = [];
    this.os = this.kn = null
  };
  var Mu = function(a) {
    var b = new z.Lu;
    b.Um = a;
    b.cg = z.mb(a, function(a) {
      return a.re()
    });
    return b
  };
  var Nu = function(a) {
    a.kn || (a.kn = z.Yt(a), a.kn.sort(function(a, c) {
      var d = a.Z(),
        f = a.va(),
        g = c.Z(),
        h = c.va();
      return d == g && f == h ? 0 : Cu(d, f, g, h) ? 1 : -1
    }));
    return a.kn
  };
  var Ou = function(a) {
    this.eC = z.mb(z.Yt(a), function(a) {
      return a.dC()
    })
  };
  var Pu = function(a) {
    this.yg = null;
    this.Ml = 0;
    a && (this.yg = z.mb(Nu(a), function(a) {
      return z.Md(a)
    }));
    cu.call(this, a ? this.Z() : null, !1)
  };
  z.Qu = function(a) {
    return (a = Xt(a || window)) && Ru(a)
  };
  var Ru = function(a) {
    var b, c = !1;
    if (a.createRange) try {
      b = a.createRange()
    } catch (f) {
      return null
    } else if (a.rangeCount) {
      if (1 < a.rangeCount) {
        b = new z.Lu;
        for (var c = 0, d = a.rangeCount; c < d; c++) b.cg.push(a.getRangeAt(c));
        return b
      }
      b = a.getRangeAt(0);
      c = Cu(a.anchorNode, a.anchorOffset, a.focusNode, a.focusOffset)
    } else return null;
    return z.Su(b, c)
  };
  z.Su = function(a, b) {
    return a && a.addElement ? Gu(a) : Au(yu(a), b)
  };
  z.Tu = function(a) {
    return Au(ru(a), void 0)
  };
  z.Uu = function(a, b) {
    return z.Bu(a, b, a, b)
  };
  var Vu = function(a) {
    if (a = Xt(a || window))
      if (a.empty) try {
        a.empty()
      } catch (b) {} else try {
        a.removeAllRanges()
      } catch (b) {}
  };
  var Cu = function(a, b, c, d) {
    if (a == c) return d < b;
    var f;
    if (1 == a.nodeType && b)
      if (f = a.childNodes[b]) a = f, b = 0;
      else if (z.nf(a, c)) return !0;
    if (1 == c.nodeType && d)
      if (f = c.childNodes[d]) c = f, d = 0;
      else if (z.nf(c, a)) return !1;
    return 0 < (Qo(a, c) || b - d)
  };
  z.Wu = function(a, b, c) {
    this.yJ = a;
    this.pX = !!c;
    a && !b && this.next()
  };
  var Xu = function(a, b, c) {
    z.ja(c) || (c = b && a.childNodes.length ? a.childNodes.length - 1 : 0);
    z.Wu.call(this, a.childNodes[c], !0, b)
  };
  z.Yu = function(a) {
    for (var b; b = a && 1 == a.nodeType ? z.Zu(z.bp(new Xu(a, !1), z.$u)) : null;) a = b;
    return a
  };
  z.av = function(a) {
    return z.Zu(z.bp(new z.Wu(a), z.$u))
  };
  z.Zu = function(a) {
    try {
      return a.next()
    } catch (b) {
      return null
    }
  };
  z.$u = function(a) {
    return 1 == a.nodeType || 3 == a.nodeType && !z.sp(a.nodeValue)
  };
  z.bv = function(a, b) {
    var c = z.Mo(a);
    if (a.getElementsByTagName)
      for (var d in cv)
        if (a.tagName == d || 0 < a.getElementsByTagName(d).length) return !1;
    return !b && " " == c || z.sp(c)
  };
  z.dv = function(a) {
    return a.length || a.childNodes.length
  };
  z.ev = function(a) {
    return a.getAttribute && "true" == a.getAttribute("g_editable")
  };
  z.fv = function(a, b) {
    z.C && z.bf(a);
    a.innerHTML = b
  };
  var gv = function(a) {
    return (a = a.exec(z.Bb)) ? a[1] : ""
  };
  z.hv = function(a) {
    var b = a && a.nodeName;
    return !(!a || "block" != (1 != a.nodeType ? null : z.C ? z.yg(a, "display") : z.xg(a, "display")) && "TD" != b && "TABLE" != b && "LI" != b)
  };
  z.iv = function(a) {
    return z.wf(a, z.hv, !0)
  };
  z.jv = function(a) {
    z.Uu(z.Yu(a), 0).select()
  };
  z.kv = function(a, b) {
    var c = a.parentNode,
      d = z.kb(c.childNodes, a) + (b ? 0 : 1),
      c = lv(c, d, b, !0);
    z.Uu(c.node, c.offset).select()
  };
  var mv = function(a) {
    for (var b = null, c = a.firstChild; c;) {
      var d = c.nextSibling;
      3 == c.nodeType ? "" == c.nodeValue ? a.removeChild(c) : b ? (b.nodeValue += c.nodeValue, a.removeChild(c)) : b = c : (mv(c), b = null);
      c = d
    }
  };
  var nv = function(a, b) {
    if (b) var c = ov(b),
      d = z.iv(b.Wb());
    d ? (d = Po(d, a), z.C ? mv(d) : d.normalize()) : a && (z.C ? mv(a) : a.normalize());
    return c ? c() : null
  };
  z.pv = function(a, b) {
    return b ? lv(a.Z(), a.va()) : lv(a.ia(), a.Ra())
  };
  var ov = function(a) {
    var b = a.wh(),
      c = qv(z.pv(a, !b)),
      d = rv(c),
      f = c.node.previousSibling;
    3 == c.node.nodeType && (c.node = null);
    var g = qv(z.pv(a, b)),
      h = rv(g),
      k = g.node.previousSibling;
    3 == g.node.nodeType && (g.node = null);
    return function() {
      !c.node && f && (c.node = f.nextSibling, c.node || (c = new sv(f, z.dv(f))));
      !g.node && k && (g.node = k.nextSibling, g.node || (g = new sv(k, z.dv(k))));
      return z.Bu(c.node || d.node.firstChild || d.node, c.offset, g.node || h.node.firstChild || h.node, g.offset)
    }
  };
  var qv = function(a) {
    var b;
    if (3 == a.node.nodeType)
      for (b = a.node.previousSibling; b && 3 == b.nodeType; b = b.previousSibling) a.offset += z.dv(b);
    else b = a.node.previousSibling;
    var c = a.node.parentNode;
    a.node = b ? b.nextSibling : c.firstChild;
    return a
  };
  z.tv = function(a) {
    var b = a.Wb();
    return a.Z() != b.parentElement && z.ev(b) || !!z.wf(b, z.ev)
  };
  var sv = function(a, b) {
    this.node = a;
    this.offset = b
  };
  var rv = function(a) {
    var b = a.node.parentNode;
    return new sv(b, z.kb(b.childNodes, a.node))
  };
  var lv = function(a, b, c, d) {
    for (; 1 == a.nodeType;) {
      var f = a.childNodes[b];
      if (f || a.lastChild)
        if (f) {
          var g = f.previousSibling;
          if (c && g) {
            if (d && uv(g)) break;
            a = g;
            b = z.dv(a)
          } else {
            if (d && uv(f)) break;
            a = f;
            b = 0
          }
        } else {
          if (d && uv(a.lastChild)) break;
          a = a.lastChild;
          b = z.dv(a)
        }
      else break
    }
    return new sv(a, b)
  };
  var uv = function(a) {
    return 1 == a.nodeType && !z.$e(a)
  };
  z.vv = function(a) {
    z.Tt.call(this, a)
  };
  z.wv = function(a, b) {
    var c = a ? z.Ie(a) : b;
    z.Q.call(this, c);
    this.oW = a || this.K().ua().body;
    this.tB = {};
    z.xv.push(this);
    this.sv = !0
  };
  z.yv = function(a, b) {
    (a.sv = b) ? a.un(): z.zv(a)
  };
  var Av = function(a) {
    if (!a.am) {
      var b = a.m(),
        c = z.ao(b).x,
        d = z.ko(b).width;
      a.tB = {};
      z.Db(Bv, function(a) {
        this.tB[a] = b.style[a]
      }, a);
      z.Db(Cv, function(a) {
        this.sc.style[a] = b.style[a] || z.yg(b, a) || z.xg(b, a)
      }, a);
      z.Hg(a.sc, b.offsetWidth, b.offsetHeight);
      z.tg(b, {
        left: c + "px",
        width: d + "px",
        cssFloat: "none"
      });
      b.parentNode.replaceChild(a.sc, b);
      a.oW.appendChild(b);
      b.style.position = "fixed";
      a.oq();
      z.U.add(b, "goog-scrollfloater-floating");
      a.am = !0
    }
  };
  z.zv = function(a) {
    if (a.am) {
      var b = a.m();
      z.Db(a.tB, function(a, d) {
        b.style[d] = a
      });
      a.sc.parentNode.replaceChild(b, a.sc);
      z.U.remove(b, "goog-scrollfloater-floating");
      a.am = !1
    }
  };
  z.Dv = function(a, b, c) {
    z.wv.call(this, a, c);
    this.UW = b;
    this.tag = "";
    this.jK = 100
  };
  var Ev = function(a) {
    return a && z.pb(z.xv, function(b) {
      return a === b.tag && b.am
    })
  };
  var Fv = function() {};
  var Gv = function(a, b) {
    this.J = (0, window.$)(a);
    this.H = window.$.extend({}, this.defaults, b || {});
    this.Zg()
  };
  var Hv = function(a, b) {
    window.$.each(Iv, function(c, d) {
      var f = b && (null !== b && d in b ? b[d] : void 0);
      f ? f(a, d) : a.removeAttribute(d)
    })
  };
  var Jv = function(a, b) {
    (0, window.$)("*", a).each(function() {
      Hv(this, b)
    })
  };
  var Kv = function(a) {
    a = a.H;
    var b = a.jX,
      c = a.YB;
    return {
      id: function(a, c) {
        a.id && !z.rb(b, a.id) && a.removeAttribute(c)
      },
      "class": function(a, b) {
        if (a.className)
          if (c.length) {
            var g = z.U.get(a),
              g = z.lb(g, z.ip(z.Ba(z.rb, c)));
            g.length && z.U.remove.apply(null, [a].concat(g))
          } else a.removeAttribute(b)
      }
    }
  };
  var Lv = function(a) {
    z.G.call(this);
    this.H = window.$.extend(!0, {}, this.defaults, a || {});
    this.zx();
    this.Gf()
  };
  var Mv = function(a, b) {
    a.close();
    a.dispatchEvent({
      type: "cancel",
      data: {
        originalEvent: b
      }
    })
  };
  var Nv = function(a, b) {
    z.G.call(this);
    this.input = a;
    z.Mb(this.H = {}, this.defaults, b || {});
    this.Ig = new Lv({
      Dn: this.H.Dn,
      Mk: this.H.Mk
    });
    z.Ac(this, this.Ig);
    this.Zg()
  };
  var Ov = function(a) {
    a = z.L(a.H.Ct, a.input);
    var b;
    if (a) return b = window.document.createTextNode("@"), z.To(b, a), b
  };
  var Pv = function(a, b) {
    var c;
    z.B && (c = z.Re(window.document), a.input.focus(), window.scrollTo(c.x, c.y));
    var d;
    Qv ? (c = window.getSelection(), d = window.document.createRange(), d.setStartAfter(b), c.removeAllRanges(), c.addRange(d)) : 3 === b.nodeType && z.Uu(b, b.length).select()
  };
  var Rv = function(a) {
    return a && "A" === a.nodeName
  };
  var Sv = function(a, b, c) {
    var d = window.getSelection();
    if (b(d.anchorNode.parentNode)) {
      b = d.getRangeAt(0);
      var f = Tv(a);
      b.insertNode(f);
      b.selectNode(f);
      d.removeAllRanges();
      d.addRange(b);
      d = window.getSelection().getRangeAt(0);
      a = Uv(a, d);
      c(a)
    }
  };
  var Vv = function(a, b, c) {
    var d = window.document.selection.createRange(),
      f = d.parentElement();
    b(f) && (d.pasteHTML(Tv(a).outerHTML), d.moveToElementText(z.L(a.H.Ct, a.input)), d.select(), a = Uv(a, d), "7.0" === z.Jc && (a.x -= 2), c(a))
  };
  var Uv = function(a, b) {
    var c;
    c = b.getBoundingClientRect();
    var d;
    z.C && (d = {
      width: b.boundingWidth,
      height: b.boundingHeight
    }, z.Ca(d, c), c = d);
    d = z.Re(window.document);
    var f = z.ao(a.Ig.Cc());
    f.x = c.left - f.x + d.x;
    f.y = c.top - f.y + d.y;
    a.H.position.call(a, f, c);
    return f
  };
  var Wv = function(a) {
    return a && 1 === a.nodeType && "A" === a.tagName && z.rb(Xv, a.className)
  };
  var Tv = function(a) {
    return z.M("a", {
      className: a.H.Ct,
      innerHTML: "@"
    })
  };
  z.Yv = function(a, b, c) {
    z.Q.call(this);
    this.status = this.bc = null;
    this.nI = a;
    this.aL = b;
    this.xs = c;
    this.isEnabled = !0;
    this.FG = !1;
    this.params = [];
    this.content = null;
    this.mD = !1;
    this.OF = window.$.Deferred()
  };
  var Zv = function(a) {
    var b = a.Sa;
    if (b.m) b.on("load", function() {
      new Gv(b.m(), {
        YB: ["video-link"].concat(this.bw ? Xv : [])
      })
    }, !1, a)
  };
  var $v = function(a) {
    var b = a.Sa;
    b.m && (a = (0, z.t)(function() {
      new Nv(b.m(), {
        Mk: this.Oj
      })
    }, a), b.Ec() ? a() : b.addEventListener("load", a))
  };
  var aw = function(a) {
    if (a.dispatchEvent("shouldUpdateContent")) {
      var b = a.content,
        c = a.ud,
        d = a.RG();
      a.mD ? (z.of(c, b), c.appendChild(z.Ye(d))) : c.innerHTML = b + d;
      (0, window.$)("img.lazy", c).lazyload({
        data_attribute: "actualsrc",
        threshold: 400
      })
    }
  };
  z.bw = function(a, b, c) {
    z.Yv.call(this, a, b, c);
    this.xU = "mock" + this.se();
    this.sy = !1;
    this.Bx = !0;
    this.Td = !z.Ym || z.Xl;
    this.bw = !1;
    this.wM = this.mZ = !0;
    this.MA = ""
  };
  var cw = function(a, b, c) {
    var d = b.Xb.FullScreenPlugin;
    if (d) {
      var f = z.ah(c, "toggleFullScreen");
      d.on("save", a.ut, !1, a).on("willEnterFullScreen", function() {
        dw(this, !1)
      }, !1, a).on("enterFullScreen", function() {
        f.Kd("退出写作模式")
      }).on("exitFullScreen", function() {
        f.Kd("写作模式")
      }).on("shouldExitFullScreenOnEscape", function() {
        return !b.th
      })
    }
  };
  var dw = function(a, b) {
    if (a.Pg)
      if (b) {
        z.U.add(a.Ul, "zm-editable-editor-field-wrap-active");
        var c = a.Pg;
        c.Ou = z.ao(c.m()).y;
        z.yv(a.Pg, !0)
      } else z.U.remove(a.Ul, "zm-editable-editor-field-wrap-active"), z.yv(a.Pg, !1)
  };
  var ew = function(a) {
    a.SD.toggle();
    a.qr.toggleClass("no-toolbar")
  };
  z.fw = function() {
    z.T.call(this);
    this.XF = !0;
    this.$A = z.Y.$A;
    this.VX = -1 === window.location.href.indexOf("psq")
  };
  z.gw = function(a, b) {
    a.Pc && (a.Pc.value = b, a.aK(), a.CK.qM(), a.La && a.La.aw())
  };
  var hw = function(a) {
    var b = iw.get("add_question_form_title");
    b && z.gw(a, b);
    (b = iw.get("add_question_form_des")) && jw(a, b);
    b = a.H.sn;
    b || (b = iw.get("add_question_form_topics")) && (b = JSON.parse(b));
    b && z.A(b, function(b) {
      a.La.fj(b)
    })
  };
  var kw = function(a) {
    function b() {
      var a = (0, window.$)('\x3cdiv\x3e\x3cdiv style\x3d"text-align:center"\x3e\x3ci class\x3d"spinner-gray"\x3e\x3c/i\x3e\x3c/div\x3e\x3c/div\x3e'),
        b = (0, window.$)(wq(this)),
        c = b.data("answer_count"),
        f = b.data("url_token");
      window.$.get("/question/" + f + "/answers/summary").done(function(b) {
        if (b && !b.r) {
          b = d({
            forEach: z.A,
            answers: b.msg,
            question_url_token: f
          });
          var g = z.Ja('\x3cdiv class\x3d"zippy-row"\x3e\x3ca class\x3d"zg-link-litblue" href\x3d"/question/%s"\x3e查看该问题%s\x3c/a\x3e\x3c/div\x3e',
            f, 0 < c ? "的全部 " + c + " 个回答" : "");
          a.html(b + g)
        } else z.V.message(b.msg)
      });
      b.after(a);
      return a.get(0)
    }
    var c = (0, z.lw)(a.ar.PB),
      d = (0, z.lw)(a.ar.GO),
      f = a.Pc,
      g = new et;
    a.fE = new z.dt(f, {
      source: "/question/autocomplete",
      Wi: z.J("zh-question-suggest-ac-wrap"),
      ld: window.$.noop,
      render: function(d, f, g) {
        a.hE && a.hE.dispose();
        f = (0, window.$)(d.m());
        var p = a.hE = new ps;
        f.html(c({
          forEach: z.A,
          questions: g,
          token: (0, window.encodeURIComponent)(this.cc)
        }));
        f.prepend('\x3cdiv class\x3d"ac-head zg-gray"\x3e你的问题可能已经有答案\x3c/div\x3e');
        (0, window.$)(".ac-row",
          f).each(function() {
          p.Ha(new z.uq((0, window.$)(this).get(0), b, !1))
        });
        p.w(d.m())
      },
      gA: g
    })
  };
  var mw = function(a, b) {
    (0, window.$)(a.mY).toggle(!!b);
    (0, window.$)(a.YI).toggle(!b);
    b ? a.QE.focus() : (a.ap(), a.Pc.focus());
    a.ga()
  };
  var nw = function(a) {
    if (!z.Tj || z.Uj) {
      var b = tq.aa(),
        c = new z.jq("", b);
      c.Zb(32, !1);
      a.o().g(c, "action", a.$U);
      c.w(a.KY);
      c.Kd("切换工具栏");
      c = new z.jq("", b);
      c.Zb(32, !1);
      a.o().g(c, "action", function() {
        this.Vb.Sa.execCommand("image")
      });
      c.w(a.cO);
      c.Kd("添加图片");
      b = new z.jq("", b);
      b.Zb(32, !1);
      a.o().g(b, "action", function() {
        this.Vb.Sa.execCommand("video")
      });
      b.w(a.gO);
      b.Kd("添加视频")
    }
  };
  var ow = function(a) {
    a.La = new Pt;
    a.La.w(a.PY);
    a.o().g(a.La, ["add_tag", "remove_tag"], a.YJ);
    new z.uk(a.Pc, "写下你的问题");
    var b = a.cQ;
    a.Vb = new z.bw;
    a.Vb.MA = '\x3cspan style\x3d"font-style: normal;color: #999;"\x3e问题背景、条件等详细信息\x3c/span\x3e';
    a.Vb.w(b);
    a.Vb.init();
    a.Vb.Ng();
    z.Tj && !z.Uj || ew(a.Vb);
    (0, window.setTimeout)(function() {
      a.ga()
    });
    nw(a);
    kw(a)
  };
  var pw = function(a, b, c) {
    "title" === c ? a.MT = b : "detail" === c ? a.AT = b : a.OT = b;
    a.XF = a.MT || a.AT || a.OT
  };
  var qw = function(a, b) {
    (0, window.$)(a.Bl).attr("disabled", b)
  };
  var rw = function(a) {
    (0, window.$)(window).on("beforeunload.AddQuestionForm", (0, z.t)(function() {
      sw(this)
    }, a))
  };
  var sw = function(a) {
    a.Pc.value && iw.set("add_question_form_title", a.Pc.value);
    var b = a.Vb.rg();
    b && iw.set("add_question_form_des", b);
    (a = a.La.data) && iw.set("add_question_form_topics", JSON.stringify(a))
  };
  var tw = function(a, b, c) {
    a.wu.innerHTML = b.Pe;
    0 === b.level ? z.P(a.Ek, !1) : (3 !== b.level && (z.P(a.Bl, !0), z.P(a.Un, !1)), z.P(a.Ek, c), c && a.Pc.focus())
  };
  var uw = function(a) {
    var b = z.Ar(a.Pc.value).replace(/？/g, "?"),
      c = vw(a);
    1 < c.level || (1 > Jr(z.Ar(a.Pc.value).replace("？", "?")) ? (c.Pe = "您还没有给问题添加问号", c.level = 3, c.name = "noquestionmark") : 1 < Jr(b) && (c.Pe = "如果有多个问题，最好拆分一下", c.level = 1, c.name = "multiquestionmark"));
    return c
  };
  var vw = function(a) {
    var b = "#",
      c = a.Ap || new ww,
      d = !1;
    if (!a.fE || !a.VX) return c;
    var f = a.fE.Na;
    f && f.length ? (z.A(f, function(a) {
      4 < a.raw.length && 1 === +a.raw[4] && (d = !0, b = "/question/" + a.url_token + "?q\x3d" + (0, window.encodeURIComponent)(this.Pc.value) + "\x26psq\x3d0")
    }, a), d ? (c.Pe = '我们找到了一个也许是你想问的问题，\x3ca href\x3d"' + b + '"\x3e查看问题\x3c/a\x3e', c.level = 3, c.name = "duplicatedquestion", c.d0 = !0, a.Un.href = b, z.P(a.Bl, !1), z.P(a.Un, !0)) : (c = new ww, z.P(a.Bl, !0), z.P(a.Un, !1)), a.Ap = c) : (c = new ww, a.Ap = c, z.P(a.Bl, !0), z.P(a.Un, !1));
    a.Ap ||
      (a.Ap = c);
    return a.Ap
  };
  var xw = function(a) {
    a = z.Ar(a.Pc.value).replace(/？/g, "?");
    a = Or(a);
    var b = new ww;
    3 > a ? (b.level = 3, b.Pe = "问题字数太少了吧", b.name = "tooshort") : 40 < a && 51 >= a ? (b.level = 1, b.Pe = '还可以输入 \x3cspan class\x3d"warning"\x3e' + (51 - a) + "\x3c/span\x3e 字", b.name = "buffer") : 51 < a && (b.level = 3, b.Pe = '已超出 \x3cspan class\x3d"error"\x3e' + (a - 51) + "\x3c/span\x3e 字", b.name = "toolong");
    return b
  };
  var yw = function(a) {
    a = a.Vb;
    var b = (0, z.ab)(a.rg());
    return a.isContentEditable() ? b : z.La(b)
  };
  var jw = function(a, b) {
    var c = a.Vb;
    (0, window.setTimeout)(function() {
      c.ca(b);
      c.Bq()
    })
  };
  var zw = function(a) {
    var b = new z.Nr,
      c = [],
      d = [];
    b.add("question_title", a.Pc.value);
    b.add("question_detail", yw(a));
    a.eF && b.add("anon", a.eF.checked ? "1" : "0");
    z.A(a.La.data, function(a) {
      a[3] ? c.push(a[3]) : d.push(a[1])
    });
    b.add("topic_ids", c.join(","));
    b.add("new_topics", d.join("$"));
    z.nh && b.add("uid", z.nh[3]);
    return b
  };
  var Aw = function(a) {
    window.$.get("/org/ask_question_limit").then(function(b) {
      if (!b.r) {
        b = b.msg;
        var c = void 0,
          c = b ? (0, window.$)('\x3cspan class\x3d"zm-question-form-notice"\x3e本月还能提 ' + b + " 个问题\x3c/span\x3e") : (0, window.$)('\x3cspan class\x3d"zm-question-form-notice zm-question-form-notice--warning"\x3e已达到本月提问上限\x3c/span\x3e');
        (0, window.$)(a.YI).find(".zm-command").prepend(c)
      }
    })
  };
  var ww = function() {
    this.level = (0, window.isNaN)(void 0) ? 0 : void 0;
    this.Pe = ""
  };
  var Bw = function() {};
  z.Cw = function(a) {
    z.Bk.call(this, "register");
    this.zo = a
  };
  var Dw = function(a) {
    z.Q.apply(this, arguments)
  };
  var Ew = function() {
    z.lk.call(this, "DownloadAppDialog")
  };
  var Fw = function() {
    z.T.call(this)
  };
  var Gw = function() {};
  var Hw = function() {
    var a = (0, window.$)("#rq3-sidenav-link"),
      b = (0, window.$)(".tour", a);
    b.length && (0, window.$)(".close-button", b).click(function() {
      var a = (0, window.$)(this).data("feature");
      window.$.get("/notifeature", {
        feature: a
      });
      b.fadeOut(100, function() {
        b.remove()
      })
    })
  };
  var Iw = function() {
    var a = (0, window.$)(".zm-side-my-columns");
    if (a.length) {
      var b = a.find(".column-homepage-link .icon-column-logo"),
        c = +z.Uh.get("navcolumn:entered");
      a.on("click", ".column-unfold", function(b) {
        a.find(".column-list").append((0, window.$)("#SidebarColumnItem-template").html());
        (0, window.$)(b.currentTarget).parent().remove()
      });
      c || (b.addClass("icon-column-logo-active"), a.on("click", ".column-homepage-link", function() {
        b.removeClass("icon-column-logo-active");
        z.Uh.set("navcolumn:entered", 1)
      }))
    }
  };
  var Jw = function(a) {
    (0, window.$)(".DownloadApp-button").click(function(b) {
      b.preventDefault();
      b = new Ew;
      z.X.trackEvent(a, {
        action: "Download",
        element: "Button"
      });
      b.F(!0)
    });
    (0, window.$)(".DownloadApp-link").click(function(b) {
      b.preventDefault();
      b = new Fw;
      z.X.trackEvent(a, {
        action: "Download",
        element: "Button"
      });
      b.F(!0)
    })
  };
  var Kw = function(a) {
    z.Q.apply(this, arguments)
  };
  z.Lw = function(a) {
    (new window.Image).src = a
  };
  z.Mw = function(a) {
    if (z.oa(a)) try {
      a = JSON.parse(a)
    } catch (b) {
      a = {}
    }
    return {
      type: "Ad",
      is_ad: !0,
      ad_info: a
    }
  };
  var Nw = function() {
    (0, window.$)(".shameimaru-placeholder").each(function() {
      var a = (0, window.$)(this),
        b = Object.assign({}, {
          loc: a.data("loc")
        }, a.data("params"));
      window.$.get("/node/Banner", b, function(b) {
        b ? (b = (0, window.$)(b), a.replaceWith(b), (new Kw).w(b[0])) : a.remove()
      })
    })
  };
  var Ow = function(a) {
    z.Q.apply(this, arguments)
  };
  var Pw = function(a) {
    var b = a.$f;
    b.addClass("is-hidden");
    (0, window.setTimeout)(function() {
      b.remove()
    }, 200)
  };
  z.Qw = function(a) {
    return "/qrcode?" + window.$.param({
      url: a + "#showWechatShareTip"
    })
  };
  z.Rw = function() {
    Sw = (0, window.$)(".wechat-share-tip");
    Sw.on("touchstart click", function(a) {
      a.preventDefault();
      Tw()
    })
  };
  z.Uw = function() {
    Sw.length && (Sw.show(), (0, window.$)(window.document.documentElement).addClass("show-wechat-share-tip"))
  };
  var Tw = function() {
    Sw.onTransitionEnd(function() {
      Sw.hide()
    }, 150);
    (0, window.$)(window.document.documentElement).removeClass("show-wechat-share-tip")
  };
  var Vw = function(a) {
    z.Q.apply(this, arguments)
  };
  var Ww = function() {};
  var Xw = function(a) {
    var b = (0, window.$)("#zh-feedback-form"),
      c = (0, window.$)(".zg-report-msg", b),
      d = (0, window.$)("textarea", b),
      b = (0, window.$)("select", b);
    a = a.type || b.val();
    b = window.$.trim(d.val());
    if (!b) return c.html("请填写反馈内容").show(), d.focus(), !1;
    c.hide();
    c = new z.wp(!0);
    d = new z.Ah;
    c.on("success", function() {
      z.V.message("建议发送成功，我们会尽快处理，感谢您的帮助");
      Yw.remove("content")
    });
    d.add("type", a).add("content", b);
    c.ajax("/feedback/report", d.toString())
  };
  var Zw = function(a, b) {
    return window.$.post("/node/ColumnFollowBaseV2", {
      method: b ? "follow_column" : "unfollow_column",
      params: {
        column_id: a
      }
    })
  };
  var $w = function(a, b) {
    return window.$.post("/roundtable/" + a, {
      action: b ? "follow" : "unfollow"
    })
  };
  var ax = function(a) {
    z.G.call(this);
    this.url = a + "/apilive";
    this.RW = 5E3;
    this.oX = 1E3;
    this.Yx = 0;
    bx(this)
  };
  var bx = function(a) {
    a.client = new window.WebSocket(a.url);
    a.client.onmessage = function(b) {
      try {
        a.dispatchEvent({
          type: "message",
          data: b.data
        })
      } catch (c) {}
    };
    a.client.onclose = function() {
      (0, window.setTimeout)(function() {
        a.Yx < a.oX && (bx(a), a.Yx += 1)
      }, a.RW)
    };
    a.client.onerror = function() {
      a.client.close()
    }
  };
  var cx = function(a) {
    z.Mb(this.H = {}, this.defaults, a || {});
    this.oc()
  };
  var dx = function(a) {
    return ex.every(function(b) {
      return a[b]
    })
  };
  var fx = function(a, b) {
    return ex.every(function(c) {
      return a[c] === b[c]
    })
  };
  var gx = function(a) {
    return window.$.extend({}, {
      key: a.key
    }, a.bc)
  };
  var hx = function(a, b) {
    a.every(function(a) {
      return !fx(a, b)
    }) && a.push(b);
    return a
  };
  var ix = function(a, b) {
    var c = a[b.group];
    c ? c.push(b) : a[b.group] = [b];
    return a
  };
  var jx = function() {
    var a = fp(z.fn.map(function(a) {
        return z.Gb(Xn(a.Al))
      })).map(gx).filter(dx).reduce(hx, []).reduce(ix, {}),
      b = ['\x3cdiv class\x3d"shortcut-tips"\x3e'],
      c = {
        tX: /([^\s+])+|([\s+])/g,
        PQ: function(a) {
          return a.replace(this.tX, function(a, b) {
            return b ? "\x3ckbd\x3e" + a + "\x3c/kbd\x3e" : " " + a + " "
          })
        }
      };
    z.Db(a, function(a, f) {
      b.push('\x3cdiv class\x3d"group"\x3e\x3ch2\x3e', f, "\x3c/h2\x3e\x3cdl\x3e");
      z.A(a, function(a) {
        b.push("\x3cdt\x3e", c.PQ(a.key), "\x3c/dt\x3e");
        b.push("\x3cdd\x3e", a.name, "\x3c/dd\x3e")
      });
      b.push("\x3c/dl\x3e\x3c/div\x3e")
    });
    b.push("\x3c/div\x3e");
    return b.join("")
  };
  z.kx = function(a) {
    return lx("common").then(function() {
      return lx(a)
    })
  };
  var mx = function() {
    var a = z.Y;
    return {
      signedIn: a.Lb(),
      currentUser: {
        email: a.email,
        activated: a.Ie,
        isOrg: a.Qc
      },
      authRequired: z.Rq
    }
  };
  var nx = function(a, b) {
    ox.push([a, z.pa(b) ? b : 2]);
    ox.sort(function(a, b) {
      return a[1] - b[1]
    })
  };
  var px = function() {
    Sq.call(this);
    this.queue = []
  };
  var qx = function() {
    px.call(this);
    this.Ly = 0
  };
  var rx = function(a) {
    return Math.pow(a, 3)
  };
  var sx = function(a) {
    return 1 - Math.pow(1 - a, 3)
  };
  var tx = function(a) {
    return 3 * a * a - 2 * a * a * a
  };
  var ux = function() {
    z.G.call(this);
    this.h = null;
    this.wU = 768;
    this.Iy = this.AX = 300;
    this.To = !0;
    this.dx = !1;
    this.CY = 150
  };
  var vx = function() {};
  var xx = function() {
    z.G.call(this)
  };
  z.yx = function(a) {
    a.Gk = new z.wp(!1);
    a.o().xa(a.Gk, "success", a.qV);
    a.Gk.ajax("/noti7/new?r\x3d" + +new Date, null, "GET")
  };
  var zx = function() {
    if (Ax)(0, window.$)(window.document).on("click.tabless", "a:not(#js-openInApp)", function(a) {
      this.host === window.location.host && "_blank" === a.currentTarget.target && (a.currentTarget.target = "")
    })
  };
  z.Bx = function(a) {
    a = void 0 === a ? {} : a;
    z.G.call(this);
    this.jr = !0;
    this.rn = this.Tq = -1;
    this.WL = "";
    this.Ma = null;
    Object.assign(this.H = {}, this.defaults, a);
    this.H.ul && (this.vt = z.Rq(this.vt, this.H.ul))
  };
  z.Cx = function(a, b) {
    a.ai.innerHTML += '\n    \x3ca class\x3d"zm-profile-email-history-link" href\x3d"' + b + '"\x3e私信记录  »\x3c/a\x3e\n    ' + (z.Y.Qc ? "\x3cspan class\x3d'OrgIcon sprite-global-icon-org-14' data-tooltip\x3d's$b$已认证的机构' /\x3e" : "") + "\n  "
  };
  z.Dx = function(a, b, c, d) {
    -1 === b ? z.Dr(a.md, a.ai) : b !== z.Y.Ag && (a.rn = b, a.WL = c, a.ai && a.md && (a.ai.innerHTML = a.WL + (d ? Cr() : ""), z.Dr(a.ai, a.md), a.md.value = ""))
  };
  var Ex = function(a, b) {
    a.wu.innerHTML = b;
    z.P(a.wu, !0)
  };
  var Fx = function() {};
  z.Gx = function(a, b, c) {
    this.element = a;
    this.qf = b;
    this.jW = c
  };
  var Hx = function(a, b) {
    this.wi = a instanceof z.Ge ? a : new z.Ge(a, b)
  };
  var Ix = function(a, b) {
    this.IB = 4;
    this.Wu = b || void 0;
    z.Pn.call(this, a)
  };
  z.Jx = function(a, b) {
    a.PA = null == b || b instanceof z.rg ? b : new z.rg(b, void 0, void 0, void 0);
    a.W() && a.ga()
  };
  z.Kx = function(a, b, c) {
    this.ba = c || (a ? z.Ie(z.J(a)) : z.Ie());
    Ix.call(this, this.ba.B("DIV", {
      style: "position:absolute;display:none;"
    }));
    this.Ij = new z.Ge(1, 1);
    this.lb = new Zo;
    this.al = null;
    a && this.attach(a);
    null != b && z.of(this.m(), b)
  };
  var Lx = function(a, b) {
    z.md(b, "mouseover", a.Bd, !1, a);
    z.md(b, "mouseout", a.om, !1, a);
    z.md(b, "mousemove", a.mm, !1, a);
    z.md(b, "focus", a.te, !1, a);
    z.md(b, "blur", a.om, !1, a)
  };
  var Mx = function(a, b) {
    var c = z.xf(a.ba);
    a.Ij.x = b.clientX + c.x;
    a.Ij.y = b.clientY + c.y
  };
  var Nx = function(a, b) {
    try {
      for (; b && !a.lb.contains(b);) b = b.parentNode;
      return b
    } catch (c) {
      return null
    }
  };
  var Ox = function(a, b) {
    if (0 == b) {
      var c = a.Ij.clone();
      return new Px(c)
    }
    return new Qx(a.hc)
  };
  var Rx = function(a) {
    if (a.anchor)
      for (var b, c = 0; b = Sx[c]; c++) z.nf(b.m(), a.anchor) && (b.Hl = a, a.mK = b)
  };
  var Tx = function(a, b, c) {
    a.hn || (a.hn = z.vd((0, z.t)(a.RA, a, b, c), a.Iq))
  };
  var Ux = function(a) {
    a.hn && (z.wd(a.hn), a.hn = void 0)
  };
  var Px = function(a, b) {
    Hx.call(this, a, b)
  };
  var Qx = function(a) {
    z.Gx.call(this, a, 3)
  };
  var Vx = function(a, b, c) {
    z.Kx.call(this, a, b, c)
  };
  z.Wx = function(a, b) {
    a.Wo = b || null
  };
  var Xx = function(a, b) {
    if (a.bx && a.bx.contains(b) || a.Rt(b)) return !0;
    var c = a.Hl;
    return !!c && c.Rt(b)
  };
  z.Yx = function(a, b, c, d) {
    z.Kx.call(this, null, null, c);
    z.qa(a) ? this.kA = a : this.yE = a;
    this.iP = 0 != b;
    this.RC = [];
    this.Qa = d || (c ? c.ua() : window.document);
    z.F(this.Qa, "mouseover", this.xH, !1, this)
  };
  var Zx = function(a, b, c) {
    if (b == a.gg) a.Fj();
    else if (b != a.anchor) {
      1 != a.getState() && 4 != a.getState() || $x(a);
      var d = new ay("trigger", a, b, void 0);
      a.Di().contains(b) || (a.attach(b), a.RC.push(b));
      a.anchor = b;
      a.Ju(d) ? Tx(a, b, c || a.Wu) : by(a)
    }
  };
  var cy = function(a, b) {
    var c = z.kb(a.RC, b); - 1 != c && (a.detach(b), a.RC.splice(c, 1))
  };
  var $x = function(a) {
    Ux(a);
    by(a)
  };
  var by = function(a) {
    a.dispatchEvent(new ay("canceltrigger", a, a.anchor || null));
    cy(a, a.anchor);
    delete a.anchor
  };
  var ay = function(a, b, c, d) {
    z.Lc.call(this, a, b);
    this.anchor = c;
    this.data = d
  };
  var dy = function(a, b, c) {
    z.Gx.call(this, a, b);
    this.qE = c
  };
  var ey = function(a, b) {
    a & 48 && (b ^= 2);
    a & 192 && (b ^= 1);
    return b
  };
  var fy = function() {
    z.G.call(this);
    this.dY = this.PS = 250;
    this.wb = "tooltip";
    this.ws = "data-" + this.wb
  };
  var gy = function(a, b) {
    return '\n    \x3cdiv class\x3d"popover-content no-hovercard"\x3e' + a + "\x3c/div\x3e" + ('\n    \x3cdiv class\x3d"arrow"\x3e\x3c/div\x3e\n    \x3cdiv class\x3d"arrow2' + (b ? " loading" : "") + '"\x3e\x3c/div\x3e\n  ') + "\n  "
  };
  var hy = function(a) {
    var b = void 0;
    switch (a.Nl) {
      case "t":
        b = 5;
        break;
      case "r":
        b = 4;
        break;
      case "b":
        b = 4;
        break;
      case "l":
        b = 6
    }
    a = a.Ja;
    a.IB = b;
    a.W() && a.ga()
  };
  var iy = function(a, b) {
    a.Ja.be(b);
    a.Ja.setPosition(a.HF)
  };
  var jy = function() {
    fy.call(this);
    this.wb = "hovercard";
    this.mi = {}
  };
  var ky = function(a, b, c, d) {
    var f = a.mi[b] && a.mi[b][c];
    if (f) iy(a, gy(f));
    else if (f = ly[b]) window.$.get("/node/" + f, {
      params: {
        url_token: c
      }
    }, (0, z.t)(function(a) {
      my(this, a, b, c)
    }, a)), iy(a, a.yx(d))
  };
  var my = function(a, b, c, d) {
    a.Ol === c && a.oo === d && my(a, b);
    a.mi[c] = a.mi[c] || {};
    a.mi[c][d] = b;
    hy(a);
    iy(a, gy(b));
    Zx(a.Ja, a.MF, a.Nl)
  };
  var ny = function(a) {
    z.Q.call(this);
    this.options = window.$.extend({
      stopPropagation: !0,
      TO: "#000",
      lx: .5,
      AP: "#666",
      rF: .2,
      top: 2,
      width: 6,
      right: 2,
      QO: !0
    }, a);
    this.ZA = 0;
    this.Ks = !1
  };
  var oy = function(a) {
    a.en && (a.Ee.stop().css({
      opacity: a.options.lx
    }).show(), a.Qn && ((0, window.clearTimeout)(a.Qn), a.Qn = !1))
  };
  var py = function(a, b) {
    b = b || 0;
    a.Qn = (0, window.setTimeout)((0, z.t)(function() {
      this.Ee.stop().fadeOut();
      this.Qn = !1
    }, a), b)
  };
  var qy = function(a, b) {
    var c = a.sd.height() - 2 * a.options.top - a.Ee.height(),
      d = a.gf.height() - a.sd.height();
    return b / c * d
  };
  var ry = function(a, b, c) {
    z.Lc.call(this, "scroll", a);
    this.scrollTop = b;
    this.eL = c
  };
  z.sy = function(a) {
    z.Q.call(this);
    this.H = window.$.extend({}, this.defaults, a || {})
  };
  var ty = function() {
    z.G.call(this);
    this.fg = [0, 0, 0];
    this.DJ = [0, 0, 0];
    this.types = ["default", "follow", "vote_thank"];
    this.jG = !z.tm.mb;
    this.vM = z.tm.mb || null != window.navigator.userAgent.match(/iPad/i);
    this.cache = [!1, !1, !1];
    this.$j = [null, null, null];
    this.Op = [0, 0, 0];
    this.gn = [!1, !1, !1]
  };
  var uy = function(a) {
    a.tab = new z.sy({
      sJ: ".zm-noti7-popup-tab-item",
      lK: ".zm-noti7-content",
      $g: "current"
    });
    a.o().g(a.tab, "action", function(a) {
      this.KF = a = a.data.index;
      vy(this, a);
      var c = this.Kg && this.Kg[a];
      c && ((0, window.setTimeout)(function() {
        c.update()
      }), this.tab.index() === a && c.scrollTop())
    }).g(a.tab, "select", function(a) {
      this.KF = a = a.data.index;
      wy(this, a);
      z.W.yb({
        type: "ga_click_top_nav_noti_tab",
        data: {
          tab: +a
        }
      });
      this.ee || z.Uh.set("noti7-tab", a)
    });
    a.tab.w(a.Ui)
  };
  var xy = function(a) {
    var b = void 0,
      c = void 0,
      d = z.Yr(100, function(c, d) {
        var h = d.target;
        200 > ("number" === typeof d.eL ? d.eL : h.scrollHeight - h.offsetHeight - h.scrollTop) && a.IA(c).then(function(a) {
          a || z.nd(b[c])
        }, window.$.noop)
      }),
      c = a.vM ? a.contents : a.Kg,
      b = z.mb(c, function(a, b) {
        return z.F(a, "scroll", (0, z.t)(d, void 0, b))
      })
  };
  var wy = function(a, b) {
    a.Kg && z.A(a.Kg, function(a, d) {
      b === d ? a.enter() : a.wy && (a.o().removeAll(), a.ce && a.ce.stop(), a.wy = !1)
    })
  };
  var yy = function(a) {
    a = z.gp(a.fg, Yn);
    return -1 === a ? 0 : a
  };
  var zy = function(a) {
    if (!z.zm) {
      var b = Ay(a.ee);
      a = Ay(a.RH);
      var c = "";
      b && a ? c = "(" + a + " 封私信 / " + b + " 条消息) " : b ? c = "(" + b + " 条消息) " : a && (c = "(" + a + " 封私信) ");
      window.document.title = c + window.document.title.replace(/^(\(|\uff08)(\d)*(\+)?( )?(\u5c01\u79c1\u4fe1)?( \/ )?(\d)*(\+)?( )?(\u6761\u6d88\u606f)?(\)|\uff09)( )?/g, "")
    }
  };
  var By = function(a, b) {
    a.ee -= a.fg[b];
    a.ww.eq(b).removeClass("withdot");
    0 > a.ee && (a.ee = 0);
    z.P(a.fo, !!a.ee);
    a.fo.innerHTML = a.ee
  };
  var vy = function(a, b) {
    a.jG ? a.visible && (a.cache[b] ? ("$$used$$" !== a.cache[b] && (a.Ox[b].innerHTML = a.cache[b], a.cache[b] = "$$used$$"), a.fg[b] && Cy(a.types[b]), By(a, b), a.Kg && a.Kg[b].update().scrollTop(), a.ee || z.Uh.set("noti7-tab", b)) : (a.gn[b] = !0, a.im(b))) : a.cache[b] ? ("$$used$$" !== a.cache[b] && (a.Ox[b].innerHTML = a.cache[b], a.cache[b] = "$$used$$"), a.fg[b] && Cy(a.types[b]), By(a, b)) : (a.gn[b] = !0, a.im(b), Cy(a.types[b]))
  };
  var Dy = function(a, b) {
    b ? a.KD.fadeIn(50) : a.KD.fadeOut(50);
    a.visible = b;
    z.U.enable(a.Ui, "open", a.visible);
    z.U.enable(a.Xq, "open", a.visible);
    if (b) {
      a.Ui.focus();
      z.A(a.cache, function(a, b) {
        a || this.im(b)
      }, a);
      a.o().g(window.document, "click", a.nt);
      var c;
      a.ee ? (c = yy(a), a.tab.select(c), a.gn[c] = !0) : (c = Ey(), a.Tx || (a.tab.select(c), a.gn[c] = !0));
      wy(a, c);
      z.W.yb({
        type: "ga_click_top_nav_noti",
        data: {
          tab: a.KF,
          nM: +(a.ee || 0)
        }
      })
    } else a.o().oa(window.document, "click", a.nt), wy(a, -1)
  };
  var Cy = function(a) {
    (new z.wp(!1)).ajax("/noti7/readall", "tab\x3d" + a, "POST")
  };
  var Ey = function() {
    var a = z.Uh.get("noti7-tab");
    return a ? +a : 0
  };
  var Ay = function(a) {
    return 99 < a ? "99+" : a
  };
  var Fy = function(a) {
    z.Q.call(this);
    window.$.extend(this.H = {}, this.defaults, a || {})
  };
  var Gy = function(a) {
    var b = a.Vg,
      c = a.rd,
      d = c.attr("id");
    d || (d = z.Yg(z.Xg.aa()), c.attr("id", d), b.attr("aria-labelledby", d));
    c.attr("role") || c.attr("role", "button");
    a.rd.attr("aria-haspopup", "true").attr("aria-activedescendant", "");
    a.Vg.children().find("a").attr("tabindex", -1).attr("id", (0, z.t)(function(a, b) {
      return b || z.Yg(z.Xg.aa())
    }, a))
  };
  var Hy = function(a, b) {
    var c = a.Vg.children().find("a"),
      d = c.size();
    b >= d ? b = 0 : -1 >= b && (b = d - 1);
    c = c.eq(b);
    a.rd.attr("aria-activedescendant", c.attr("id"));
    c.focus();
    a.index = b
  };
  var Iy = function(a) {
    z.Q.apply(this, arguments)
  };
  var Jy = function(a, b) {
    return a ? Ky[b[0]] !== Ky[a[0]] : !0
  };
  var Ly = function(a, b, c) {
    if (c = Ky[c]) c = z.M("div", {
      className: "zu-autocomplete-row-label ac-row"
    }, c), z.cf(c, b), a.o().g(a.O, "suggestionsupdate", Xr)
  };
  var My = function(a, b) {
    if (!a.metaKey) try {
      z.Uh.set("query", a.O.cc)
    } catch (c) {
      b += "?q\x3d" + (0, window.encodeURIComponent)(a.O.cc)
    }
    return b
  };
  var Ny = function(a) {
    a = a.m();
    var b = Object.values({
      Zh: "Topic",
      m0: "User",
      PB: "Question",
      M_: "Column",
      I_: "Post"
    });
    return {
      search: {
        raw_query: a && a.value,
        restrict_type: b
      }
    }
  };
  var Oy = function() {
    z.G.call(this)
  };
  var Py = function() {
    var a = (0, window.$)("#js-top-nav-link-profile"),
      b = (0, window.$)("#mobile-top-nav-profile-popup");
    if (z.Tj && b.length && b.children("ul").length) {
      var c = function(c) {
          c = c.target;
          b[0].contains(c) || c.contains(a[0]) || d()
        },
        d = function() {
          a.parent().removeClass("open");
          b.hide();
          (0, window.$)(window.document.body).off("mousedown", c)
        };
      a.click(function(f) {
        f.preventDefault();
        b.is(":visible") ? d() : (a.parent().addClass("open"), b.show(), (0, window.$)(window.document.body).mousedown(c))
      }).attr("href", "javascript:;");
      b.find(".slide-up").click(d)
    }
  };
  var Qy = function() {
    z.Q.call(this)
  };
  var Ry = function() {
    z.Bj.call(this, null, !1);
    this.UE = "zh-lightbox-showing";
    this.EY = "zh-lightbox-thumb";
    this.oc()
  };
  var Sy = function() {
    (0, window.$)(window.document).on("click", ".OrgIcon,.icon-badge", function(a) {
      a = (0, window.$)(a.target);
      a.hasClass("no-badge-explain") || a.closest("a").length || (a.hasClass("OrgIcon") ? window.open("/question/48510028/answer/111228381") : a.hasClass("icon-badge-identity") ? window.open("/question/48510028/answer/111228361") : (a.hasClass("icon-badge-best_answerer") || a.hasClass("icon-badge-id-an")) && window.open("/question/48509984/answer/111228361"))
    })
  };
  var Qr = function() {
    if (window.console) {
      var a = Array.from(arguments);
      a.unshift("[" + (new Date).toLocaleTimeString() + "]:\t");
      window.console.log.apply ? window.console.log.apply(window.console, a) : window.console.log(a[0], a.slice(1).join(","))
    }
  };
  z.Ty = function(a) {
    a = void 0 === a ? {} : a;
    z.Q.call(this);
    if (void 0 === typeof a.Aa) throw Error("$form option is required.");
    var b = Object.assign({
      Cm: "FormItem",
      mx: function() {
        return window.Promise.resolve()
      },
      Jn: window.$.noop,
      lD: !0,
      VQ: {
        yI: !0
      },
      Ts: [],
      validator: function(a) {
        for (var d = b, f = d.Aa, g = {}, d = z.ha(d.Ts), h = d.next(); !h.done; h = d.next()) {
          var k = h.value,
            h = k.name,
            l = k.length,
            k = k.Va,
            p = f.find('input[name\x3d"' + h + '"]'),
            q = p.val();
          q && q.length !== l && (g[h] = k || p.attr("placeholder"))
        }
        Object.assign(g, Uy(f, a));
        return window.$.isEmptyObject(g) ?
          null : g
      }
    }, a);
    this.$e = b;
    this.Aa = b.Aa;
    this.w(b.Aa[0])
  };
  z.Vy = function(a, b) {
    var c = a.$e,
      d = c.Aa,
      f = c.Cm;
    b && (z.sa(b) ? Object.entries(b).forEach(function(a) {
        var b = z.ha(a);
        a = b.next().value;
        var b = b.next().value,
          c = d.find("[name\x3d" + a + "]").first().addClass("is-error");
        a = '\x3cp class\x3d"' + f + '-error"\x3e' + b + "\x3c/p\x3e";
        b = c.parents("\n          ." + f + ", ." + f + "-section,\n          ." + f + "-uploader, ." + f + "-radio-group\n        ").first().addClass("is-error");
        c = b.find("." + f + "-error-container");
        c.length ? c.html(a) : (b.hasClass("" + f) && (b = b.find("." + f + "-content")), b.append(a))
      }) :
      d.find('[type\x3d"submit"]').after('\x3cspan class\x3d"' + f + '-error is-inline"\x3e\n          ' + (b || "服务器错误，请稍后重试...") + "\n        \x3c/span\x3e").parents("." + f).addClass("is-error"))
  };
  var Uy = function(a, b) {
    b = void 0 === b ? {} : b;
    for (var c = window.$.unique(a.find("input, select, textarea").filter(function() {
        return (0, window.$)(this).data("required")
      }).map(function() {
        return (0, window.$)(this).attr("name")
      }).get()), d = {}, c = z.ha(c), f = c.next(); !f.done; f = c.next()) {
      var f = f.value,
        g = b[f];
      if (z.ma(g) && 0 === g.length || !g) {
        d[f] = "必填项";
        var g = a.find("[name\x3d" + f + "]"),
          h = g.data("empty-tip");
        h && (d[f] = "placeholder" === h ? g.attr("placeholder") : h)
      }
    }
    return window.$.isEmptyObject(d) ? null : d
  };
  var Wy = function(a, b) {
    function c(a) {
      a = a.val();
      d.yI && (a = window.$.trim(a));
      d.NT && window.$.isNumeric(a) && (a = Number(a));
      return a
    }
    var d = Object.assign({
        yI: !1,
        NT: !1,
        WQ: function(a) {
          return a.attr("name")
        }
      }, b),
      f = {};
    a.find("select, textarea, input").not("\n      input[type\x3dcheckbox]:not(:checkbox),\n      input[type\x3dradio]:not(:checked),\n      input[name^\x3d_]\n    ").each(function() {
      var b = (0, window.$)(this);
      if (!b.is(":disabled") && b.parents("form").first().is(a)) {
        var h = d.WQ(b);
        if (h)
          if (b.is('[type\x3d"checkbox"]')) "undefined" ===
            typeof f[h] && (f[h] = []), f[h].push(c(b));
          else if (b.is('[type\x3d"file"]')) {
          if ("undefined" === typeof f[h] && (f[h] = []), b = b.data("file") || b.val()) {
            try {
              b = JSON.parse(b)
            } catch (k) {}
            f[h].push(b)
          }
        } else f[h] = c(b)
      }
    });
    return f
  };
  var Xy = function(a, b) {
    z.G.call(this);
    this.h = a;
    var c = z.lf(this.h) ? this.h : this.h ? this.h.body : null;
    this.KT = !!c && z.Og(c);
    this.OI = z.F(this.h, z.B ? "DOMMouseScroll" : "mousewheel", this, b)
  };
  var Yy = function(a, b) {
    return z.D && (z.Uc || z.Ll) && 0 != a % b ? a : a / b
  };
  var Zy = function(a, b, c, d) {
    z.Pc.call(this, b);
    this.type = "mousewheel";
    this.detail = a;
    this.deltaX = c;
    this.deltaY = d
  };
  var $y = function() {
    z.G.call(this)
  };
  var az = function(a, b) {
    return null == a.Yk ? b : a.Kp + Math.round((b - a.Kp) / a.Yk) * a.Yk
  };
  var bz = function(a, b) {
    z.Q.call(this, a);
    this.pE = null;
    this.Ib = new $y;
    this.TT = b || z.Hl;
    z.F(this.Ib, "change", this.qH, !1, this)
  };
  var cz = function(a, b) {
    b ? (a.o().g(a.Ce, "beforedrag", a.lt).g(a.lg, "beforedrag", a.lt).g(a.Ce, ["start", "end"], a.wt).g(a.lg, ["start", "end"], a.wt).g(a.Cb, "key", a.Cf).g(a.m(), "click", a.st).g(a.m(), "mousedown", a.st), a.kI && dz(a, !0)) : (a.o().oa(a.Ce, "beforedrag", a.lt).oa(a.lg, "beforedrag", a.lt).oa(a.Ce, ["start", "end"], a.wt).oa(a.lg, ["start", "end"], a.wt).oa(a.Cb, "key", a.Cf).oa(a.m(), "click", a.st).oa(a.m(), "mousedown", a.st), a.kI && dz(a, !1))
  };
  var ez = function(a, b) {
    var c = z.Eg(b, a.m());
    return "vertical" == a.Ub ? c.y : a.qe && a.Ed() ? a.m().clientWidth - c.x : c.x
  };
  var fz = function(a, b) {
    var c = a.Oc(),
      d = a.ed();
    if ("vertical" == a.Ub) {
      var f = a.jb.offsetHeight,
        g = a.m().clientHeight - f,
        f = ez(a, b) - f / 2;
      return (d - c) * (g - f) / g + c
    }
    f = a.jb.offsetWidth;
    g = a.m().clientWidth - f;
    f = ez(a, b) - f / 2;
    return (d - c) * f / g + c
  };
  var gz = function(a, b) {
    if (b == a.jb) return a.Ib.X();
    if (b == a.Sd) return a.Ib.X() + a.Ib.Ei();
    throw Error("Illegal thumb element. Neither minThumb nor maxThumb");
  };
  var hz = function(a, b) {
    Math.abs(b) < a.Ho() && (b = (0, z.Rl)(b) * a.Ho());
    var c = gz(a, a.jb) + b,
      d = gz(a, a.Sd) + b,
      c = cp(c, a.Oc(), a.ed() - a.vu),
      d = cp(d, a.Oc() + a.vu, a.ed());
    iz(a, c, d - c)
  };
  var jz = function(a, b, c) {
    var d = az(a.Ib, c);
    c = b == a.jb ? d : a.Ib.X();
    b = b == a.Sd ? d : a.Ib.X() + a.Ib.Ei();
    c >= a.Oc() && b >= c + a.vu && a.ed() >= b && iz(a, c, b - c)
  };
  var iz = function(a, b, c) {
    a.Oc() <= b && b <= a.ed() - c && a.vu <= c && c <= a.ed() - b && (b != a.X() || c != a.Ei()) && (a.Ib.xu = !0, a.Ib.xv(0), a.Ib.Da(b), a.Ib.xv(c), a.Ib.xu = !1, a.qH())
  };
  var kz = function(a, b) {
    return b <= a.Ib.X() + a.Ib.Ei() / 2 ? a.jb : a.Sd
  };
  var lz = function(a) {
    if (a.jb && !a.mp) {
      var b = mz(a, gz(a, a.jb)),
        c = mz(a, gz(a, a.Sd));
      if ("vertical" == a.Ub) a.jb.style.top = b.y + "px", a.Sd.style.top = c.y + "px", a.Yb && (b = nz(c.y, b.y, a.jb.offsetHeight), a.Yb.style.top = b.offset + "px", a.Yb.style.height = b.size + "px");
      else {
        var d = a.qe && a.Ed() ? "right" : "left";
        a.jb.style[d] = b.x + "px";
        a.Sd.style[d] = c.x + "px";
        a.Yb && (b = nz(b.x, c.x, a.jb.offsetWidth), a.Yb.style[d] = b.offset + "px", a.Yb.style.width = b.size + "px")
      }
    }
  };
  var nz = function(a, b, c) {
    var d = Math.ceil(c / 2);
    return {
      offset: a + d,
      size: Math.max(b - a + c - 2 * d, 0)
    }
  };
  var mz = function(a, b) {
    var c = new z.Ge;
    if (a.jb) {
      var d = a.Oc(),
        f = a.ed(),
        f = b == d && d == f ? 0 : (b - d) / (f - d);
      "vertical" == a.Ub ? (d = a.m().clientHeight - a.jb.offsetHeight, f = Math.round(f * d), c.x = oz(a, a.jb), c.y = d - f) : (c.x = Math.round(f * (a.m().clientWidth - a.jb.offsetWidth)), c.y = a.jb.offsetTop)
    }
    return c
  };
  var pz = function(a, b) {
    b = cp(b, a.Oc(), a.ed());
    a.mp && (a.mo.stop(!0), a.mo.dispose());
    var c = new qx,
      d, f = kz(a, b),
      g = a.X(),
      h = a.Ei(),
      k = gz(a, f),
      l = mz(a, k);
    d = a.Ho();
    Math.abs(b - k) < d && (b = cp(k + (b > k ? d : -d), a.Oc(), a.ed()));
    jz(a, f, b);
    k = mz(a, gz(a, f));
    d = "vertical" == a.Ub ? [oz(a, f), k.y] : [k.x, f.offsetTop];
    l = new nr(f, [l.x, l.y], d, 100);
    l.jh(a.qe);
    c.add(l);
    a.Yb && qz(a, f, g, h, k, c);
    a.pE && (f = a.pE.O_(g, b, 100), z.A(f, function(a) {
      c.add(a)
    }));
    a.mo = c;
    a.o().g(c, "end", a.wQ);
    a.mp = !0;
    c.play(!1)
  };
  var qz = function(a, b, c, d, f, g) {
    var h = mz(a, c),
      k = mz(a, c + d);
    c = h;
    d = k;
    b == a.jb ? c = f : d = f;
    "vertical" == a.Ub ? (b = nz(k.y, h.y, a.jb.offsetHeight), h = nz(d.y, c.y, a.jb.offsetHeight), f = new nr(a.Yb, [oz(a, a.Yb), b.offset], [oz(a, a.Yb), h.offset], 100), b = new qr(a.Yb, b.size, h.size, 100)) : (b = nz(h.x, k.x, a.jb.offsetWidth), h = nz(c.x, d.x, a.jb.offsetWidth), f = new nr(a.Yb, [b.offset, a.Yb.offsetTop], [h.offset, a.Yb.offsetTop], 100), b = new pr(a.Yb, b.size, h.size, 100));
    f.jh(a.qe);
    b.jh(a.qe);
    g.add(f);
    g.add(b)
  };
  var rz = function(a) {
    var b = a.m();
    b && (z.cj(b, "valuemin", a.Oc()), z.cj(b, "valuemax", a.ed()), z.cj(b, "valuenow", a.X()), z.cj(b, "valuetext", a.TT(a.X()) || ""))
  };
  var dz = function(a, b) {
    b ? (a.Dk || (a.Dk = new Xy(a.m())), a.o().g(a.Dk, "mousewheel", a.mH)) : a.o().oa(a.Dk, "mousewheel", a.mH)
  };
  var oz = function(a, b) {
    return a.qe ? z.nj(b) : b.offsetLeft
  };
  var sz = function(a, b) {
    bz.call(this, a, b);
    this.Ib.xv(0)
  };
  var tz = function(a) {
    z.Q.call(this);
    this.options = window.$.extend({}, this.defaults, a)
  };
  var uz = function(a, b) {
    a.zoom = b;
    vz(a, a.Ze.mr / 2 + a.Ze.x, a.Ze.Ko / 2 + a.Ze.y)
  };
  var vz = function(a, b, c) {
    var d = a.zoom;
    a.Ze = {
      mr: a.options.Tg / d,
      Ko: a.options.Sg / d,
      x: b - a.options.Tg / d / 2,
      y: c - a.options.Sg / d / 2
    };
    wz(a)
  };
  var wz = function(a) {
    var b = a.zoom,
      c = cp(a.options.yn - a.Ze.x * b, a.options.Tg + a.options.yn - a.Et * b, a.options.yn),
      d = cp(a.options.zn - a.Ze.y * b, a.options.Sg + a.options.zn - a.Dt * b, a.options.zn),
      f = {
        width: b * a.Et,
        height: b * a.Dt,
        left: c,
        top: d
      };
    a.tr.css(f);
    a.tw.css(f);
    a.Ze.x = (a.options.yn - c) / b;
    a.Ze.y = (a.options.zn - d) / b
  };
  z.xz = function(a, b, c) {
    z.Q.call(this);
    this.Vr = a || z.yz;
    this.pG = b;
    this.WK = c || "l"
  };
  var zz = function() {
    return !!window.FileReader
  };
  var Az = function(a) {
    a.wm = a.Oz = a.jk = "";
    if (a.dialog) a.dialog.ga();
    else {
      a.dialog = new z.T(null);
      a.dialog.Fa("修改图片");
      var b = z.Qm.jf,
        c = z.Qm.Yg,
        d = new z.Nj;
      d.set(b, "取消", !1, !0).set(c, "确定", !0);
      z.Kj(a.dialog, d);
      a.o().g(a.dialog, z.Mj, function(a) {
        if (a.key === c) {
          if (zz()) {
            var b = this.Ux;
            a = (0, window.$)("\x3ccanvas\x3e\x3c/canvas\x3e");
            a.attr("width", b.options.Tg);
            a.attr("height", b.options.Sg);
            var d = a[0];
            (0, window.$)(window.document.body).append(d);
            var k = a[0].getContext("2d"),
              l = b.Ze;
            k.drawImage(b.Ft, l.x, l.y, l.mr, l.Ko,
              0, 0, b.options.Tg, b.options.Sg);
            b = d.toDataURL("image/png");
            a.remove();
            a = b
          } else a = this.Ux.Ze;
          this.jk = a;
          Bz(this);
          this.dialog.F(!1);
          return !1
        }
      })
    }
    Cz(a.dialog.S());
    a.dialog.F(!0);
    z.U.add(a.dialog.h, "avatar-edit-dialog")
  };
  var Dz = function(a) {
    var b = a.input.cloneNode();
    z.To(b, a.input);
    a.input = b;
    a.o().g(a.input, "change", a.Rc)
  };
  var Bz = function(a) {
    if (a.jk && (zz() || a.Oz)) {
      a.dispatchEvent("beforepost");
      var b = {
        type: a.Vr,
        dest_id: a.Vr === z.yz ? z.Y[3] : a.pG,
        return_size: a.WK
      };
      if (zz()) {
        var c = new window.FormData;
        c.append("handle_mode", "upload");
        c.append("picture", Ez(a.jk.replace(/data\:image\/\w{3,4};base64,/, "")), a.file.name);
        window.$.each(b, function(a, b) {
          c.append(a, b)
        });
        window.$.ajax({
          url: a.iD,
          data: c,
          method: "post",
          processData: !1,
          contentType: !1,
          success: window.$.proxy(a.DF, a),
          dataType: "json",
          xhrFields: {
            withCredentials: !0
          },
          crossDomain: !0
        })
      } else {
        var b =
          window.$.extend(b, {
            handle_mode: "resize",
            x: Math.round(a.jk.x),
            y: Math.round(a.jk.y),
            height: Math.round(a.jk.Ko),
            width: Math.round(a.jk.mr),
            hashval: a.Oz
          }),
          d = '\x3cform target\x3d"av_up_frame" style\x3d"display:none;" method\x3d"post" action\x3d"' + a.iD + '"\x3e';
        window.$.each(b, function(a, b) {
          d += '\x3cinput type\x3d"hidden" name\x3d"' + a + '" value\x3d"' + b + '" /\x3e'
        });
        d += "\x3c/form\x3e";
        b = (0, window.$)(d);
        b.appendTo(a.h);
        b[0].submit()
      }
    }
  };
  var Cz = function(a) {
    var b = (0, window.$)("\x3cdiv class\x3d'new-avatar-editor-loading'\x3e\x3cdiv\x3e\x3cspan\x3e\x3c/span\x3e\x3c/div\x3e\x3cdiv\x3e正在上传...\x3c/div\x3e\x3c/div\x3e");
    a = (0, window.$)(a);
    a.html("");
    a.append(b)
  };
  var Ez = function(a) {
    var b, c;
    c = "image/png";
    b = b || 512;
    a = (0, window.atob)(a);
    for (var d = [], f = 0; f < a.length; f += b) {
      for (var g = a.slice(f, f + b), h = Array(g.length), k = 0; k < g.length; k++) h[k] = g.charCodeAt(k);
      g = new window.Uint8Array(h);
      d.push(g)
    }
    return new window.Blob(d, {
      type: c
    })
  };
  z.Fz = function(a) {
    z.Q.call(this);
    this.dW = Object.assign({
      Ri: window.$.noop
    }, a)
  };
  z.Gz = function(a, b, c, d) {
    z.Gx.call(this, a, b);
    this.zp = c ? 5 : 0;
    this.vB = d || void 0
  };
  var Hz = function(a, b) {
    a & 48 && (b ^= 2);
    a & 192 && (b ^= 1);
    return b
  };
  var Iz = function() {};
  var Jz = function(a, b, c) {
    cq.call(this, a, c || Iz.aa(), b);
    this.Zb(1, !1);
    this.Zb(2, !1);
    this.Zb(4, !1);
    this.Zb(32, !1);
    this.N = 1
  };
  var Kz = function() {
    this.Gx = []
  };
  var Lz = function(a, b) {
    var c = a.Gx[b];
    if (!c) {
      switch (b) {
        case 0:
          c = a.V() + "-highlight";
          break;
        case 1:
          c = a.V() + "-checkbox";
          break;
        case 2:
          c = a.V() + "-content"
      }
      a.Gx[b] = c
    }
    return c
  };
  var Mz = function(a, b, c) {
    a = Lz(a, 2);
    return c.B("DIV", a, b)
  };
  var Nz = function(a, b) {
    var c = a.S(b);
    if (c) {
      var c = c.firstChild,
        d = Lz(a, 1);
      return !!c && z.lf(c) && z.gj(c, d)
    }
    return !1
  };
  var Oz = function(a, b, c, d) {
    Vp(a, c, b.Hi());
    Wp(a, b, c);
    d != Nz(a, c) && (z.zo(c, "goog-option", d), c = a.S(c), d ? (a = Lz(a, 1), c.insertBefore(b.K().B("DIV", a), c.firstChild || null)) : c.removeChild(c.firstChild))
  };
  z.Pz = function(a, b, c, d) {
    cq.call(this, a, d || Kz.aa(), c);
    this.Da(b)
  };
  var Qz = function() {};
  z.Rz = function(a, b) {
    cq.call(this, null, a || Qz.aa(), b);
    this.Zb(1, !1);
    this.Zb(2, !1);
    this.Zb(4, !1);
    this.Zb(32, !1);
    this.N = 1
  };
  var Sz = function(a) {
    this.hx = a || "menu"
  };
  z.Tz = function(a) {
    z.Rz.call(this, Qz.aa(), a)
  };
  z.Uz = function(a, b) {
    z.gs.call(this, Vz, b || Sz.aa(), a);
    this.cf(!1)
  };
  var Wz = function(a, b, c, d) {
    z.Gz.call(this, a, b, c || d);
    (c || d) && this.an(65 | (d ? 32 : 132))
  };
  var Xz = function() {};
  var Yz = function(a, b) {
    if (a)
      for (var c = b ? a.firstChild : a.lastChild, d; c && c.parentNode == a;) {
        d = b ? c.nextSibling : c.previousSibling;
        if (3 == c.nodeType) {
          var f = c.nodeValue;
          if ("" == (0, z.ab)(f)) a.removeChild(c);
          else {
            c.nodeValue = b ? z.pp(f) : z.op(f);
            break
          }
        } else break;
        c = d
      }
  };
  var Zz = function() {};
  var $z = function(a, b, c) {
    return c.B("DIV", "goog-inline-block " + (b + "-caption"), a)
  };
  z.aA = function(a, b, c, d, f) {
    z.jq.call(this, a, c || Zz.aa(), d);
    this.Zb(64, !0);
    this.Bk = new Wz(null, 5);
    b && this.Rh(b);
    this.gJ = null;
    this.ka = new z.td(500);
    !z.Ui && !z.Uj || z.E("533.17.9") || (this.Tt = !0);
    this.sU = f || Sz.aa()
  };
  var bA = function(a) {
    a.gJ = new z.rg(7, 0, 7, 0)
  };
  z.cA = function(a) {
    a.Bk.an && a.Bk.an(33)
  };
  var dA = function(a) {
    if (a.ha.wa) {
      var b = a.Bk;
      a.Bk.element = a.vW || a.m();
      var c = a.ha.m();
      a.ha.W() || (c.style.visibility = "hidden", z.P(c, !0));
      !a.Pu && a.Bk.Fo && a.Bk.Fo() & 32 && (a.Pu = z.Jg(c));
      b.ga(c, b.qf ^ 1, a.gJ, a.Pu);
      a.ha.W() || (z.P(c, !1), c.style.visibility = "visible")
    }
  };
  var eA = function(a, b, c) {
    var d = a.o();
    c = c ? d.g : d.oa;
    c.call(d, b, "action", a.Qo);
    c.call(d, b, "close", a.oz);
    c.call(d, b, "highlight", a.uz);
    c.call(d, b, "unhighlight", a.Dz)
  };
  var fA = function(a, b) {
    var c = a.o();
    (b ? c.g : c.oa).call(c, a.m(), "keydown", a.WR)
  };
  var gA = function(a, b) {
    var c = a.m(),
      d = z.ej(b, "activedescendant"),
      d = z.Ke(b).getElementById(d) || b;
    if (!d.id) {
      var f = z.Xg.aa();
      d.id = z.Yg(f)
    }
    Bo(c, d);
    z.cj(c, "owns", d.id)
  };
  var hA = function(a, b) {
    this.wi = a instanceof z.Ge ? a : new z.Ge(a, b)
  };
  var iA = function(a, b) {
    hA.call(this, a, b)
  };
  z.jA = function(a, b) {
    z.Uz.call(this, a, b);
    this.Kn = !0;
    this.cf(!0);
    this.F(!1, !0);
    this.Wf = new z.Qd
  };
  z.kA = function(a, b, c, d, f) {
    var g = a.W();
    a.oI() && a.LY ? a.hide() : (a.gg = f || null, a.dispatchEvent("beforeshow") && (c = "undefined" != typeof c ? c : 4, g || (a.m().style.visibility = "hidden"), z.P(a.m(), !0), b.ga(a.m(), c, d), g || (a.m().style.visibility = "visible"), a.Eb(-1), a.F(!0)))
  };
  var lA = function(a, b) {
    for (var c = a.Wf.zd(), d = 0; d < c.length; d++) {
      var f = a.Wf.get(c[d]);
      if (f.h == b.currentTarget) {
        a.vL(f, b.clientX, b.clientY);
        b.preventDefault();
        b.stopPropagation();
        break
      }
    }
  };
  var mA = function() {
    this.Gx = []
  };
  var nA = function(a, b, c) {
    var d = b.K().B("SPAN");
    d.className = "goog-submenu-arrow";
    oA(b, d);
    a.S(c).appendChild(d)
  };
  var oA = function(a, b) {
    a.Ed() ? (z.hj(b, "goog-submenu-arrow-rtl"), z.of(b, a.Lr ? "◄" : "►")) : (z.jj(b, "goog-submenu-arrow-rtl"), z.of(b, a.Lr ? "►" : "◄"))
  };
  var pA = function(a, b, c, d) {
    z.Pz.call(this, a, b, c, d || mA.aa())
  };
  var qA = function(a) {
    a.ke && z.wd(a.ke);
    a.wC && z.wd(a.wC)
  };
  var rA = function(a) {
    z.dh(a.getParent(), function(a) {
      a != this && "function" == typeof a.gh && (a.gh(), qA(a))
    }, a)
  };
  var sA = function(a, b) {
    !b && a.eb() && a.eb().Eb(-1);
    a.dispatchEvent(Co(64, b));
    var c = a.eb();
    b != a.SA && z.zo(a.m(), "goog-submenu-open", b);
    if (b != c.W() && (b && (c.wa || c.render(), c.Eb(-1)), c.F(b), b)) {
      var c = new z.Gz(a.m(), a.Lr ? 6 : 4, a.IT),
        d = a.eb(),
        f = d.m();
      d.W() || (f.style.visibility = "hidden", z.P(f, !0));
      c.ga(f, a.Lr ? 4 : 6);
      d.W() || (z.P(f, !1), f.style.visibility = "visible")
    }
    a.SA = b
  };
  var tA = function(a, b, c) {
    var d = a.o();
    (c ? d.g : d.oa).call(d, b, "enter", a.UU)
  };
  z.uA = function() {
    z.G.call(this);
    this.sa = null;
    this.cb = 0;
    this.GA = [];
    this.ju = [];
    this.XC = "最多输入 20 字";
    this.iy = "最多输入 256 字"
  };
  var vA = function(a, b, c) {
    a.sa || (a.sa = new z.T(null), z.Kj(a.sa, null), a.sa.Fa(b || ""), c && (a.sa.S().innerHTML = c), a.o().g(a.sa, "afterhide", a.yi))
  };
  var wA = function(a, b, c) {
    var d = z.J("zh-fav-list-item-place-holder");
    d && z.P(d, !1);
    a.MB = b[5] ? "" : z.M("span", "zm-fav-list-item-lock", [z.M("i", "icon icon-lock")]);
    d = z.M("span", "zm-favo-list-item-title");
    z.of(d, b[1]);
    d = z.M("a", {
      "class": "zg-r5px zm-favo-list-item-link",
      href: "javascript:;"
    }, [a.MB, d, z.M("span", {
      className: "meta zg-gray",
      innerHTML: '\x3cspan class\x3d"num"\x3e' + b[3] + '\x3c/span\x3e 条内容 \x3cspan class\x3d"zg-bull"\x3e•\x3c/span\x3e ' + b[4] + " 人关注"
    })]);
    a.MB && a.MB.setAttribute("data-tooltip", "s$t$私密收藏夹");
    d.setAttribute("data-lid", b[0]);
    z.rb(a.ju, b[0]) && z.U.add(d, "zm-favo-list-item-link-active");
    b = z.L("zm-favo-list-item-link", a.Ah);
    c && b ? z.cf(d, b) : a.Ah.appendChild(d)
  };
  var xA = function(a, b) {
    if (a.cb !== b && a.Ah) {
      var c = z.Uo("zm-favo-list-item-link", a.Ah);
      z.A(c, function(a) {
        z.U.remove(a, "zm-favo-list-item-link-active")
      }, a)
    }
    a.cb = b
  };
  var yA = function(a, b) {
    z.P(a.MW, b);
    z.P(a.HW, b);
    z.P(a.ST, b)
  };
  z.zA = function(a, b, c, d) {
    var f = z.J("zh-fav-head-title"),
      g = z.J("zh-fav-head-description-source");
    b = b || (f ? z.qf(f) : "");
    c = c || (g ? z.qf(g) : "");
    a.Zx = d || z.mh;
    AA(a);
    a.dc();
    BA(a, 1);
    z.P(a.IC, !1);
    a.gs.innerHTML = "取消";
    a.Qw.innerHTML = "保存";
    a.sa.Fa("编辑收藏夹");
    a.Oi.value = wo(b);
    a.xk.value = wo(c);
    a.Zx[1] ? a.Zx[3] ? yA(a, !1) : (yA(a, !0), a.rA.checked = !0) : (yA(a, !0), a.sI.checked = !0);
    a.gT = CA(a);
    a.sa.F(!0);
    a.Am = !0
  };
  var DA = function(a) {
    var b = z.Uo("zm-favo-list-item-link", a.Ah);
    z.A(b, function(a) {
      var b = a.getAttribute("data-lid");
      z.U.remove(a, "zm-favo-list-item-link-active");
      z.rb(this.ju, +b) && z.U.add(a, "zm-favo-list-item-link-active")
    }, a)
  };
  var AA = function(a) {
    a.iQ ? DA(a) : a.B()
  };
  var BA = function(a, b) {
    var c = !!b;
    a.sa.Fa(0 === b ? "添加到收藏夹" : "创建新收藏夹");
    z.P(a.aU, !c);
    z.P(a.Uy, c);
    (0, window.$)(a.xy).text("").hide();
    new z.uk(a.Oi, a.XC);
    new z.uk(a.xk, a.iy);
    if (1 === b)(0, window.$)(a.Uy).on("change.FavoDiag", "input, textarea, select", function() {
      a.kh()
    });
    else(0, window.$)(a.Uy).off("change.FavoDiag"), a.yi()
  };
  var CA = function(a) {
    var b = new z.Nr,
      c = z.Ar(a.Oi.value),
      d = z.Ma(a.xk.value === a.iy ? "" : a.xk.value);
    d || (d = -1);
    b.add("title", c);
    b.add("description", d);
    b.add("is_public", a.rA.checked ? 1 : 0);
    return b
  };
  var EA = function(a) {
    a.sa.F(!1);
    a.dispatchEvent(FA);
    z.W.yb({
      type: "ga_click_collect_answer",
      data: {
        count: (0, window.$)(".zm-favo-list-item-link-active", a.Ah).length
      }
    })
  };
  var GA = function(a, b, c, d) {
    (0, window.$)(c).addClass("btn-pending").text(d ? "保存中" : "创建中");
    a.o().xa(b, "complete", function() {
      (0, window.$)(c).removeClass("btn-pending").text(d ? "保存" : "确认创建")
    })
  };
  var HA = function(a, b, c) {
    c = c || (b ? "保存失败，请重试" : "创建失败，请重试");
    (0, window.$)(a).text(c).show()
  };
  var IA = function(a, b) {
    z.Ai({
      category: "collect",
      action: a,
      label: -1 < window.location.pathname.indexOf("collection") ? "collections_sidebar_create_collection" : "collect_answer_box",
      attributes: b
    })
  };
  z.JA = function(a, b, c) {
    z.Pz.call(this, a, b, c);
    this.yq(!0)
  };
  var KA = function(a) {
    z.Q.call(this);
    this.ii = a;
    this.Il = null;
    this.AF = [];
    this.EB = []
  };
  var LA = function(a, b, c) {
    ["1", "2", "0"].forEach(function(d) {
      var f = new z.JA(MA[d]);
      f.Da(d);
      f.tc(Number(d) === c);
      a.AF.push(f);
      b.Ha(f)
    })
  };
  var NA = function(a, b) {
    z.Db(OA, function(a, d) {
      var f = new z.JA(a);
      f.Da(d);
      f.tc(d === this.Il);
      this.EB.push(f);
      b.Ha(f)
    }, a)
  };
  var PA = function(a) {
    z.V.confirm("你确定要删除自己的答案吗？", "答案内容不会被永久删除，你还可以撤消本次删除操作。", function(b) {
      b && window.$.post("/answer/remove", {
        aid: a.ii.zb
      }).then(function() {
        return a.ii.gk()
      })
    })
  };
  var QA = function(a) {
    a.EB.forEach(function(b) {
      b.tc(b.X() === a.Il)
    })
  };
  var RA = function(a, b) {
    window.$.post("/answer/comment_permission", {
      answer_id: a.ii.zb,
      permission: b
    }).then(function(c) {
      c && !c.r && (a.Il = b, QA(a), a.dispatchEvent(SA))
    })
  };
  var TA = function(a) {
    var b = null;
    try {
      b = a.cssRules || a.rules
    } catch (c) {
      if (15 == c.code) throw c.styleSheet = a, c;
    }
    return b
  };
  var UA = function(a) {
    var b = [];
    a = a || window.document.styleSheets;
    var c = z.ja(void 0) ? void 0 : !1;
    if (a.imports && a.imports.length)
      for (var d = 0, f = a.imports.length; d < f; d++) z.wb(b, UA(a.imports[d]));
    else if (a.length)
      for (d = 0, f = a.length; d < f; d++) z.wb(b, UA(a[d]));
    else {
      var g = TA(a);
      if (g && g.length)
        for (var d = 0, f = g.length, h; d < f; d++) h = g[d], h.styleSheet && z.wb(b, UA(h.styleSheet))
    }!(a.type || a.rules || a.cssRules) || a.disabled && !c || b.push(a);
    return b
  };
  var VA = function() {
    this.ro = "";
    this.Ph = []
  };
  var WA = function(a, b, c) {
    var d = [],
      f;
    for (f in b) {
      var g = b[f];
      g && d.push(f, ":", g, c ? " !important" : "", ";")
    }
    a.ro = d.join("")
  };
  var XA = function(a) {
    this.ax = {};
    if (a) {
      var b = [];
      a = a.split(/\s+/gm);
      for (var c = 0; c < a.length; c++)
        if (a[c]) {
          var d = new YA(a[c]);
          b.push(d)
        }
      this.Ti = b
    }
  };
  var YA = function(a) {
    var b = ZA[a];
    if (b) return b;
    for (var b = a.match(/[#\.]/) ? a.split(/(?=[#\.])/) : [a], c = {}, d = 0; d < b.length; d++) {
      var f = b[d];
      "." == f.charAt(0) ? c.className = f.substring(1, f.length) : "#" == f.charAt(0) ? c.id = f.substring(1, f.length) : c.tagName = f.toUpperCase()
    }
    this.aI = a;
    this.nU = c;
    this.NL = {};
    ZA[a] = this
  };
  var $A = function(a, b) {
    var c = b.uid,
      d = a.NL[c];
    if ("undefined" != typeof d) return d;
    var f = a.nU,
      d = f.tagName,
      g = f.className,
      f = f.id,
      h = !0;
    d && "*" != d && d != b.nodeName ? h = !1 : f && f != b.id ? h = !1 : g && !b.nP[g] && (h = !1);
    return a.NL[c] = h
  };
  var aB = function(a) {
    var b = z.ta(a),
      c = bB[b];
    if (c) return c;
    c = [];
    do {
      var d = {
        id: a.id,
        nodeName: a.nodeName
      };
      d.uid = z.ta(d);
      var f = {};
      if (a.className)
        for (var g = z.fj(a), h = 0; h < g.length; h++) f[g[h]] = 1;
      d.nP = f;
      c.unshift(d)
    } while (a = a.parentNode);
    this.zJ = c;
    this.uid = z.ta(this);
    bB[b] = this
  };
  z.cB = function() {
    z.G.call(this);
    this.lc = this.Fr()
  };
  z.dB = function(a) {
    return a.G && a.G.ob
  };
  var eB = function(a) {
    return a.G && z.Gc ? (a = a.G.ob.ab(), a.scrollTo.bind(a, a.scrollX, a.scrollY)) : function() {}
  };
  var fB = function(a, b, c, d, f) {
    this.wG = a;
    this.DC = b;
    this.$r = c;
    this.AG = d;
    this.Hy = f || {}
  };
  var gB = function(a, b) {
    this.yZ = a;
    this.EF = b
  };
  var hB = function(a, b, c, d) {
    var f = [];
    a.$r && a.DC && f.push("\x3c!DOCTYPE HTML\x3e");
    f.push('\x3chtml style\x3d"background:none transparent;min-width:0;');
    a.$r && f.push("height:", a.AG ? "100%" : "auto");
    f.push('"\x3e');
    f.push("\x3chead\x3e\x3cstyle\x3e");
    c && c.EF && f.push(c.EF);
    z.B && a.DC && f.push(" img {-moz-force-broken-image-icon: 1;}");
    f.push("\x3c/style\x3e\x3c/head\x3e");
    f.push('\x3cbody g_editable\x3d"true" hidefocus\x3d"true" ');
    z.iB && f.push("contentEditable ");
    f.push('class\x3d"editable ');
    f.push('" id\x3d"',
      a.wG, '" style\x3d"min-width:0;');
    z.B && a.$r && (f.push(";width:100%;border:0;margin:0;background:none transparent;", ";height:", a.DC ? "100%" : "auto"), a.AG ? f.push(";overflow:auto") : f.push(";overflow-y:hidden;overflow-x:auto"));
    z.wg && f.push(";outline:hidden");
    for (var g in a.Hy) f.push(";" + g + ":" + a.Hy[g]);
    f.push('"\x3e', b, "\x3c/body\x3e\x3c/html\x3e");
    a = f.join("");
    d = d.contentDocument || d.contentWindow.document;
    d.open();
    d.write(a);
    d.close()
  };
  var jB = function(a, b) {
    z.G.call(this);
    this.rh = this.id = a;
    this.ob = null;
    this.Xb = {};
    this.nk = {};
    for (var c in z.kB) this.nk[c] = [];
    this.Ll = "";
    this.Zk = {};
    this.Zk[lB] = 1;
    this.Zk[z.mB] = 1;
    this.Bs = new Uq(this.$F, nB, this);
    this.zs = {};
    for (var d in oB) this.zs[oB[d]] = 0;
    z.B && (this.Ne = new Uq(this.dk, pB, this));
    this.mc = new z.xd(this);
    this.zZ = [];
    this.Em = z.qB;
    this.Om = z.Ie(b || window.document);
    this.Sc = this.Om.m(this.id);
    this.LQ = rB;
    this.sl = this.Om.ab()
  };
  var sB = function(a) {
    var b = !(a.ctrlKey || a.metaKey) && a.keyCode in tB;
    return (a.ctrlKey || a.metaKey) && a.keyCode in uB || b
  };
  var vB = function(a, b) {
    a.Em = 2;
    a.Ka = b;
    a.ob = z.Ie(b);
    b.setAttribute("g_editable", "true");
    z.bj(b, "textbox")
  };
  var wB = function(a, b) {
    if (9 == b.keyCode && !a.dispatchEvent({
        type: "beforetab",
        shiftKey: b.shiftKey,
        altKey: b.altKey,
        ctrlKey: b.ctrlKey
      }) || z.B && b.metaKey && !z.E(29) && (37 == b.keyCode || 39 == b.keyCode)) return b.preventDefault(), !1;
    var c;
    (c = b.charCode) || (c = sB(b) ? !0 : !(!z.B || b.ctrlKey || b.metaKey || z.B && !b.charCode));
    a.kz = c;
    a.kz && a.zi();
    return !0
  };
  var xB = function(a, b, c) {
    var d = {};
    a = a.ev(8, b || "", d);
    z.tg(c, d);
    z.fv(c, a)
  };
  var yB = function(a, b) {
    !zB(a, "selectionchange") && (AB[b.keyCode] || (b.ctrlKey || b.metaKey) && BB[b.keyCode]) && (a.dispatchEvent("beforeselectionchange"), a.hL.start())
  };
  var CB = function(a, b) {
    if (!b.altKey) {
      var c = z.Uc ? b.metaKey : b.ctrlKey;
      if (c || DB[b.keyCode]) {
        var d = b.charCode || b.keyCode;
        17 != d && (d = String.fromCharCode(d).toLowerCase(), z.Uc && z.B && "`" == d && " " == b.nc.key && (d = " "), a.kp(5, b, d, c) && b.preventDefault())
      }
    }
  };
  var EB = function(a) {
    var b;
    return a.wc() && (b = a.ob) ? (a = b.ab()) && a.frameElement : null
  };
  z.FB = function(a) {
    return (a = a.ob && a.ob.ab()) && z.Qu(a)
  };
  z.GB = function(a, b, c) {
    if (!zB(a, "selectionchange")) {
      var d = z.FB(a),
        d = d && d.Wb();
      a.Jf = !!d && z.nf(a.m(), d);
      a.dispatchEvent("cvc");
      a.dispatchEvent({
        type: "selectionchange",
        j0: b && b.type
      });
      a.kp(4, b, c)
    }
  };
  z.HB = function(a, b, c) {
    b && (a.Ne && Vq(a.Ne), a.Zk[lB] = 1);
    c && (z.IB(a), a.Zk[z.mB] = 1)
  };
  var JB = function(a, b, c) {
    !b && a.Ne && Vq(a.Ne);
    a.Zk[lB] = 0;
    a.Zk[z.mB] = 0;
    b && a.dk();
    c && a.$F()
  };
  var zB = function(a, b) {
    return !!a.Zk[b] || a.zs[b] && 500 >= (0, z.H)() - a.zs[b]
  };
  z.IB = function(a) {
    a.Ne && Vq(a.Ne);
    Vq(a.Bs)
  };
  var KB = function(a) {
    z.vf(a.target, "A") && a.preventDefault()
  };
  z.LB = function(a) {
    var b = a.m();
    if (b) {
      var c = z.Yu(b);
      b == c ? z.Uu(b, 0).select() : z.kv(c, !0);
      z.GB(a)
    }
  };
  var MB = function(a) {
    if (!z.ja(a.oA) && (a.oA = !1, z.C && a.wc())) {
      for (var b = a.Om.ab(); b != b.parent;) try {
        b = b.parent
      } catch (c) {
        break
      }
      b = b.location;
      a.oA = "https:" == b.protocol && -1 == b.search.indexOf("nocheckhttps")
    }
    return a.oA
  };
  z.NB = function(a, b) {
    jB.call(this, a, b)
  };
  var OB = function(a) {
    if (a.Jq ? 0 : a.Jq = !0) {
      var b = EB(a),
        c = a.m(),
        d = !1;
      if (b && c) {
        var f, g = b.parentNode,
          h = g.offsetWidth;
        (0, window.parseInt)(Jo(b, "width"), 10) != h && (f = z.Rg(c), b.style.width = h + "px", c.style.width = h - f.left - f.right + "px", d = !0);
        g = g.offsetHeight;
        a.tp() && (0, window.parseInt)(Jo(b, "height"), 10) != g && (f || (f = z.Rg(c)), b.style.height = g + "px", c.style.height = g - f.top - f.bottom + "px", d = !0)
      }
      a.Jq = !1;
      d && a.dispatchEvent("ifrsz")
    }
  };
  var PB = function(a) {
    a.m() && (OB(a), a.tp() || a.AC())
  };
  z.QB = function(a, b) {
    var c = a.split("!");
    this.type = c[0] + "!";
    this.namespace = c[1];
    this.Jc = new RB(b)
  };
  var RB = function(a) {
    this.category = a.category;
    this.action = a.action;
    this.label = a.label;
    this.value = a.value
  };
  var SB = function() {
    z.G.call(this)
  };
  z.TB = function() {
    z.G.call(this)
  };
  var UB = function(a, b, c) {
    window.$.post(a, b).done(function(a) {
      if (a.r) z.V.message(a.msg);
      else {
        var b = a.msg;
        (b = b && b.redirect) ? window.location.href = b: (z.V.message("操作成功！"), c && c(a))
      }
    })
  };
  var VB = function(a, b) {
    var c = window.$.extend({
      action: "get_member_info",
      reason: b.value
    }, a.yQ);
    return window.$.post("/manage", c).then(function(a) {
      return z.Ja("用户已被警告 %s 次，禁言 %s 次", a.warn_num, a.ban_num)
    })
  };
  z.WB = function(a) {
    a = void 0 === a ? {} : a;
    "post" === a.type && (a.type = "article");
    this.options = a;
    this.submit = z.Rq(this.submit.bind(this), !0);
    this.render = z.Rq(this.render.bind(this), !0)
  };
  var XB = function(a) {
    if (a) {
      var b = z.V({
        title: "举报成功",
        content: '\x3cp\x3e您的举报正在等待人工审核，我们会在 24 小时内审核完成\x3cbr\x3e处理完成后会「私信」通知您\x3cbr\x3e您也可以进入 \x3ca href\x3d"/community/report"\x3e社区服务中心\x3c/a\x3e 查看实时处理进度\x3c/p\x3e\x3cp style\x3d"margin-top: 1em"\x3e\x3clabel\x3e\x3cinput type\x3d"checkbox" name\x3d"neverRemind"\x3e不再提醒\x3c/label\x3e\x3c/p\x3e',
        modal: !0,
        ga: !0,
        buttons: {
          yes: "知道了"
        }
      });
      b.g(z.ok, function() {
        b.pg().querySelector("[name\x3dneverRemind]").checked && window.$.post("/community/report/noti", {
          cancel: !0
        })
      })
    } else {
      var c =
        z.V({
          title: "举报成功",
          content: "您的举报正在等待人工审核，我们会在 24 小时内审核完成",
          modal: !0,
          buttons: {}
        });
      (0, window.setTimeout)(function() {
        return c.F(!1)
      }, 4E3)
    }
  };
  var YB = function(a) {
    z.Q.call(this);
    z.Mb(this.H = {}, this.defaults, a || {});
    this.Fn = new z.Qd;
    this.Ke = null
  };
  var ZB = function(a, b) {
    var c = a.H,
      d = new z.Yx(c.trigger, !1, null, b);
    d.Iq = c.cY;
    d.Uo = c.OS;
    d.Qh(a.Aj);
    z.F(d, "trigger", function(a) {
      d.setPosition(new z.Gx(a.anchor, 1))
    });
    z.F(d, "beforeshow", function(a) {
      this.Ke = a.target.anchor;
      this.render()
    }, !1, a);
    d.className = c.XN;
    a.SS = d
  };
  var $B = function(a, b) {
    var c = a.H.PT,
      d = z.gf(a.Aj),
      f = z.pb(d, function(a) {
        return a.getAttribute("data-action") === b
      });
    if (!f || z.U.has(f, c)) return !1;
    z.A(d, function(a) {
      z.U.remove(a, c)
    });
    z.U.add(f, c);
    return !0
  };
  var aC = function(a, b, c, d) {
    a.Fn.set(b, {
      name: b,
      na: c,
      ni: d || z.r
    })
  };
  z.bC = function(a) {
    z.Q.call(this);
    z.Mb(this.H = {}, this.defaults, a || {})
  };
  var cC = function(a) {
    var b = a.H,
      c = a.h;
    dC(c);
    b = eC(c, b.AH);
    b.length && (a.dispatchEvent("willScrape"), window.$.when.apply(window.$, b).always(function() {
      a.dispatchEvent("didScrape")
    }))
  };
  var fC = function(a, b, c) {
    for (; a && a !== b;) {
      if (c(a)) return a;
      a = a.parentNode
    }
  };
  var gC = function(a, b) {
    return fC(a, b, function(a) {
      return hC(a) || "CODE" === a.nodeName || "PRE" === a.nodeName
    })
  };
  var hC = function(a) {
    return "A" === a.nodeName
  };
  var dC = function(a) {
    var b = z.No(a, function(b) {
        return 3 === b.nodeType && !gC(b, a)
      }),
      c, d = z.Qu(),
      f = d && z.Zt(d);
    z.A(b, function(a) {
      var b = a.nodeValue,
        d = iC(b);
      d !== b && (b = z.Ye(d), f === a && (c = b.lastChild), z.To(b, a))
    });
    c && z.kv(c)
  };
  var eC = function(a, b) {
    var c = z.lb(a.getElementsByTagName("A"), function(a) {
      var b = a.getAttribute("href");
      if (b = !(!b || "#" === b) && !a.getAttribute("data-editable") && z.rb(jC, a.protocol)) b = z.qf(a), z.Ia(a.href, b) ? a = void 0 : (a.setAttribute("data-editable", !0), a.setAttribute("data-title", b), a = !0), b = !a;
      return b
    });
    return z.mb(c, function(c) {
      return kC(c.href).done(function(f) {
        lC(a, c, f, b)
      })
    })
  };
  var lC = function(a, b, c, d) {
    if (c && a.contains(b)) {
      d = d || {};
      var f = function(a, b, c) {
        var d = z.Qu();
        if (d) {
          var f = d.Z(),
            q = d.va(),
            v = d.ia(),
            I = d.Ra();
          z.nf(b, f) && (f = a, q = 0);
          z.nf(b, v) && (v = a, I = 0);
          c(function() {
            f === a && v === a ? z.kv(a) : z.Bu(f, q, v, I).select()
          })
        } else c(z.r)
      };
      a = {
        link: function(a, b) {
          a.setAttribute("data-editable", !0);
          b.title === a.href ? a.setAttribute("data-title", mC(a.hostname)) : (a.setAttribute("data-title", b.title), f(a, a, function(c) {
            z.of(a, b.title);
            c()
          }))
        },
        image: function(a, b) {
          var c = window.document.createElement("img");
          c.src = b.src;
          c.setAttribute("data-rawwidth", b.width);
          c.setAttribute("data-rawheight", b.height);
          f(c, a, function(b) {
            z.To(c, a);
            b()
          })
        }
      };
      (d = d[c.type] || a[c.type]) && d(b, c)
    }
  };
  var mC = function(a) {
    return a.split(".").slice(/(.com|.edu|.gov|.net|.org)$/.test(a) ? -2 : -3).join(".").replace(/^www\./, "") + " 的页面"
  };
  var iC = function(a) {
    return a.replace(nC, function(a) {
      z.Ia(a, "http") || (a = "http://" + a);
      return a.link(a)
    })
  };
  var oC = function(a) {
    var b = new YB({});
    aC(b, "link", "链接", function(a) {
      z.of(a, a.href)
    });
    aC(b, "text", "文本", function(a) {
      z.of(a, a.getAttribute("data-title"))
    });
    b.w(a);
    var c = b.cz();
    z.Jx(c, new z.rg(2, 0, 0, 0));
    z.Wx(c, new z.rg(2, 0, 0, 0));
    var d = b.o();
    d.g(c, "beforeshow", function(a) {
      a = a.target.anchor;
      var c = z.qf(a);
      c === a.href ? $B(b, "link") : (c !== a.getAttribute("data-title") && a.setAttribute("data-title", c), $B(b, "text"))
    }).g(c, "beforehide", function(b) {
      if ((b = b.target) && a.contains(b) && hC(b)) return !1
    });
    var f;
    d.g(c, "show", function(a) {
      f =
        a.target.anchor;
      z.U.add(f, "hover")
    }).g(c, "hide", function() {
      f && (z.U.remove(f, "hover"), f = null)
    });
    return b
  };
  z.pC = function(a, b, c) {
    z.Q.call(this);
    this.id = a;
    this.type = b;
    this.Ka = null;
    this.lh = this.Su = !1;
    this.sc = "写下你的评论…";
    this.placeholder = '\x3cp style\x3d"color:#999"\x3e' + this.sc + "\x3c/p\x3e";
    this.wk = "";
    this.Oa = -1;
    this.JA = window.$.Deferred().resolve();
    this.JB = this.mu = null;
    this.jF = "zm-comment-box";
    this.qd = null;
    a = qC[b];
    if (!a) throw Error("API not found");
    this.lf = window.$.extend({}, qC._default_, a);
    this.Gj = "";
    z.Mb(this.H = {}, this.defaults, c || {})
  };
  var rC = function(a) {
    return z.Rq(a, !0, function() {
      return this.Gj
    })
  };
  var sC = function(a, b, c) {
    if (!z.lf(a) || "TEXTAREA" === a.nodeName) return function() {};
    var d = new z.bC({
      AH: {
        image: z.r
      }
    });
    d.w(a);
    b = (new z.Ah).add("type", b + "_comment").add("resource_id", c);
    var f = new Nv(a, {
      Dn: {
        source: "/people/autocomplete?" + b.toString()
      },
      Mk: z.L("zu-main") || window.document.body
    });
    new Gv(a, {
      YB: Xv
    });
    return function() {
      d.dispose();
      f.dispose()
    }
  };
  z.tC = function(a, b, c) {
    var d = z.L(a.jF, b);
    c && (a.qd = c);
    d ? a.w(d) : (a.Su = !0, a.render(b))
  };
  var uC = function(a) {
    z.Db({
      tE: ".load-more",
      co: ".zm-comment-list",
      qF: ".zm-comment-form",
      Ka: ".zm-comment-editable"
    }, function(a, c) {
      this[c] = (0, window.$)(a, this.h)[0]
    }, a)
  };
  var vC = function(a) {
    a.Ka && a.Ka.setAttribute("aria-label", a.sc);
    if (z.Ym) {
      var b = a.Ka;
      b.setAttribute("contentEditable", !0);
      var c = a.Nj = {
        m: function() {
          return b
        },
        dm: function() {
          return Sr(b) ? "" : b.innerHTML
        },
        be: function(a, c) {
          b.innerHTML = c
        },
        ng: function() {
          z.jv(b)
        }
      };
      z.Bc(a, sC(c.m(), a.type, a.id))
    } else wC(a);
    a.o().g(a.Ka, ["change", "keyup"], function(a) {
      27 !== a.keyCode && (z.bv(this.Ka) ? this.wk = "" : this.wk = this.$a())
    }).g(a.Nj.m(), "focus", function() {
      this.qa({
        action: "click_add_[type]_comment_box"
      })
    });
    xC(a)
  };
  var wC = function(a) {
    var b = z.M("textarea", {
      placeholder: a.sc,
      "class": "zm-comment-textarea"
    });
    z.To(b, a.Ka);
    new z.as(b);
    a.Ka = b;
    a.Nj = {
      m: function() {
        return b
      },
      dm: function() {
        return b.value
      },
      be: function() {
        b.value = "";
        b.style.height = z.Cg(22, !0)
      },
      ng: function() {
        b.focus()
      }
    }
  };
  var yC = function(a) {
    var b = a.Nj,
      c = b.m();
    if (b.dm() !== a.placeholder) {
      b.be(!1, a.placeholder);
      var d = ["click", "focus", "keydown"],
        f = function() {
          b.be(!1, this.wk || "");
          this.Ka.lastChild ? z.kv(this.Ka.lastChild) : b.ng();
          z.md(c, d, f, !1, this)
        };
      z.F(c, d, f, !1, a);
      var g;
      window.getSelection ? (g = window.getSelection(), g.anchorNode && z.nf(a.Ka, g.anchorNode) && g.removeAllRanges()) : window.document.selection && a.Ka.blur()
    }
  };
  var zC = function(a) {
    a.focus();
    a = z.Tu(a);
    a.collapse();
    a.select()
  };
  var AC = function(a) {
    var b;
    (b = z.L("zm-comment-reply-hack")) ? (b = z.Ye(z.Oo(b)), z.U.Tw(b, "zm-comment-reply-hack", "zm-comment-reply-hacked"), z.df(b, a)) : (b = "", z.Y.Lb() && (b = '\x3cimg class\x3d"avatar" src\x3d"' + z.Y.Ud("is") + '"\x3e'), b = z.Ye('\x3cdiv class\x3d"zm-comment-form expanded"\x3e\x3cdiv class\x3d"zm-comment-editable-wrap"\x3e' + b + '\x3cdiv class\x3d"zm-comment-editable" aria-label\x3d"写下你的回复"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"zm-command zg-clear"\x3e\x3ca href\x3d"javascript:;" class\x3d"zm-comment-submit zg-right zg-btn-blue"\x3e评论\x3c/a\x3e\x3ca href\x3d"javascript:;" class\x3d"zm-comment-close zm-command-cancel"\x3e取消\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e'),
      a.appendChild(b));
    return b
  };
  var BC = function(a, b) {
    return z.pb(CC(a), function(a) {
      return a.getAttribute("data-id") === b
    })
  };
  var CC = function(a) {
    return (0, window.$)(a.co).children(".zm-item-comment").get()
  };
  var DC = function(a) {
    a.o().g(a.h, "click", a.Wa).g(a.Ka, "keydown", a.fV).g(z.Kp, "anon_change", a.ck).g(a.Nj.m(), ["click", "focus"], z.Ba(a.Bv, !0)).g(a.Nj.m(), "focus", z.Ba(a.ij, "add_comment_start"));
    a.Oa = Number(a.h.getAttribute("data-count"));
    (0, window.$)(a.h).on("focusin focusout", "." + a.H.Kf, function(a) {
      (0, window.$)(this).toggleClass("focusin", "focusin" === a.type)
    });
    !z.Tj && a.tE && (a.JB = wr().then(window.$.proxy(a.SI, a)))
  };
  var EC = function(a) {
    0 < a.hb() ? (a.wk = a.$a(), a.Bv(!1), yC(a)) : a.qd ? a.collapse() : a.Bv();
    a.yi()
  };
  var FC = function(a) {
    if (a.qd) {
      var b = (0, window.$)(a.qd);
      a.$(a.DE).show().css("left", b.position().left + b.width() / 2)
    }
  };
  var GC = function(a) {
    if ("pending" !== a.JA.state()) {
      a.Ab();
      a.h.innerHTML = a.ho();
      a.expand();
      var b = a.lf.Yj(a.id, a.H.eU).done((0, z.t)(a.bX, a));
      return a.JA = b
    }
  };
  var xC = function(a) {
    z.Y.Lb() ? z.Y.Ie || HC(a, '\x3cdiv class\x3d"activate-mask-tip-comment"\x3e' + (z.Y.email ? "为了正常使用知乎的提问、回答、评论和编辑功能，请验证你的邮箱。" : "为了正常使用知乎的提问、回答、评论和编辑功能，请绑定你的手机或邮箱。") + "\x3c/div\x3e", '\x3cdiv class\x3d"zm-command"\x3e\x3ca class\x3d"zg-r3px zg-btn-blue" href\x3d"javascript:;"\x3e我要激活\x3c/a\x3e\x3c/div\x3e') : HC(a, '\x3cdiv class\x3d"signin-mask-tip-comment"\x3e\x3c/div\x3e', null)
  };
  var HC = function(a, b, c) {
    b = (0, window.$)(b);
    var d = (0, window.$)(c);
    c ? ((0, window.$)(".zm-command, .zm-comment-info", a.h).hide(), (0, window.$)(a.Ka).hide().after(d).after(b)) : b.insertAfter(a.Ka);
    a = (0, z.t)(rC(z.r), a);
    b.on("click", a);
    d.on("click", a)
  };
  var IC = function(a) {
    uC(a);
    vC(a);
    yC(a);
    DC(a);
    JC(a);
    FC(a)
  };
  var JC = function(a) {
    var b = a.H,
      c = !a.hb();
    z.U.enable(a.h, b.ry, c);
    c && a.Ka && b.autofocus && a.yo();
    a.dispatchEvent("change")
  };
  var KC = function(a, b, c) {
    if (!a.Tm || "pending" !== a.Tm.state()) {
      var d;
      z.sa(b) && (d = b.hX, b = b.content);
      b = z.La(b);
      var f = new z.Qd;
      f.set(a.type + "_id", a.id);
      f.set("content", b);
      d && f.set("reply", d);
      b = a.lf.add(Xn(f));
      b.done(window.$.proxy(a.gR, a)).done(c);
      a.Tm = b;
      a.wk = a.$a();
      a.ij("add_comment_submit")
    }
  };
  var LC = function(a, b) {
    if (z.rm("auth_f_manage") && "favlist" !== a.type && !(0, window.$)(".del, .op.remove", b).length) {
      var c = b.getAttribute("data-id");
      (0, window.$)("\x3ca\x3e", {
        href: "#",
        name: "admin_delcomment",
        "class": "del zm-comment-op-link op needsfocus",
        html: '\x3ci class\x3d"zg-icon zg-icon-comment-del"\x3e\x3c/i\x3e删除',
        "data-op": "remove-comment",
        "data-action": "/manage?" + window.$.param({
          comment_id: c,
          action: "remove_comment2"
        })
      }).appendTo((0, window.$)(".zm-comment-ft, .actions", b))
    }
  };
  var MC = function(a, b) {
    var c = z.Lo(b, a.H.Kf);
    (new z.TB).open(b, {
      id: c.getAttribute("data-id"),
      type: "comment"
    }, (0, z.t)(function() {
      z.N(c);
      --this.Oa;
      JC(this)
    }, a))
  };
  var NC = function(a, b) {
    var c = z.Lo(b, a.H.Kf),
      d = c.getAttribute("data-id"),
      f = "你确定要删除这条评论吗？",
      g = (0, window.$)(".zm-item-link-avatar", c).prop("href");
    g && (f += '\x3cp class\x3d"js-block" style\x3d"margin-top:.2em;color:#999;visibility:hidden"\x3e\x3clabel\x3e\x3cinput type\x3d"checkbox"\x3e同时将此人屏蔽\x3c/label\x3e\x3c/p\x3e', window.$.get(g + "/block", function(a) {
      a.r || a.msg || (0, window.$)(".js-block", h.m()).css("visibility", "visible")
    }));
    var h = z.V.confirm("删除评论", f, function(a) {
      a && (a = (0, window.$)(":checkbox", h.m()).prop("checked"),
        OC(this, d, Number(a), z.Ba(z.N, c)))
    }, a)
  };
  var PC = function(a, b, c) {
    a.lf.remove(b).done((0, z.t)(function() {
      z.qa(c) && c();
      --this.Oa;
      JC(this)
    }, a))
  };
  var OC = function(a, b, c, d) {
    a.lf.OO(b, c).done((0, z.t)(function() {
      z.qa(d) && d();
      --this.Oa;
      JC(this)
    }, a))
  };
  var QC = function(a, b) {
    return a && (b.length ? QC(a[b.shift()], b) : a)
  };
  z.RC = function(a, b) {
    z.Q.call(this);
    this.zb = a;
    this.entryType = b;
    this.tk = !1;
    this.jx = !0
  };
  var SC = function(a) {
    z.Y.Lb() && 0 === TC(a) && (0, window.setTimeout)(function() {
      return a.yo()
    })
  };
  var UC = function(a) {
    if (!a.$l && !z.zm) {
      var b = z.Lo(a.h, "zm-item-meta");
      if (b) {
        var c = z.L("zm-meta-panel", b);
        c && (a.$l = new z.Dv(null, b), a.$l.tag = "comment", a.$l.w(c))
      }
    }
  };
  var VC = function(a, b) {
    b && (a.qd = b, a.Ew = (0, window.$)(b), a.hW = z.qf(a.qd), a.Ew.on("click", function() {
      SC(a)
    }))
  };
  var TC = function(a) {
    var b;
    if (b = a.Qr) a = a.Qr.store.getState(), b = QC(a, ["commentBox", "meta", "totalCountPure"]);
    return b
  };
  var WC = function(a) {
    if (a.qd && (a.qd && a.tk && (0, window.$)(".icon-spike", a.h).css("left", a.Ew.position().left + a.Ew.width() / 2).removeClass("hidden"), a.qd))
      if (a.tk) xr(a.qd, "收起评论");
      else {
        var b = TC(a),
          c = void 0,
          c = z.pa(b) ? 0 < b ? b + " 条评论" : "添加评论" : a.hW;
        xr(a.qd, c)
      }
  };
  var XC = function(a, b, c) {
    var d = a.Qr;
    a = d.store;
    var f = d.actions,
      d = d.ActionTypes;
    /[A-Z]/.test(b[0]) ? a.dispatch({
      type: d[b],
      payload: c
    }) : a.dispatch(f[b](c))
  };
  var YC = function(a, b) {
    z.Q.call(this);
    window.$.extend(this.options = {}, ZC, b || {});
    this.state = {
      Bm: !1,
      St: !1,
      Ut: !0,
      lp: !1,
      DB: !1
    };
    var c = new z.gl(this.update, 17, this);
    z.Ac(this, c);
    this.SL = (0, z.t)(c.fire, c)
  };
  var $C = function(a) {
    var b = (0, window.$)(a.h),
      c = (0, window.$)("\x3cdiv\x3e");
    window.$.each("display position top right bottom left float margin".split(" "), function(a, f) {
      c.css(f, b.css(f))
    });
    c.css({
      visibility: "hidden",
      width: b.outerWidth(),
      height: b.outerHeight()
    }).insertBefore(b);
    a.sc = c.get(0);
    b.addClass(a.options.$g);
    a.ga();
    a.options.XJ.call(a)
  };
  var aD = function(a) {
    if (!window.Modernizr.csstransitions) return $C(a);
    var b = (0, window.$)(a.h);
    a.state.lp = !0;
    $C(a);
    b.css({
      transition: "none",
      transform: "translateY(" + bD(a) + "px)"
    });
    (0, window.setTimeout)(function() {
      b.css({
        transition: "",
        transform: ""
      }).onTransitionEnd(function() {
        a.onAnimationEnd()
      }, 200)
    })
  };
  var cD = function(a) {
    if (!window.Modernizr.csstransitions) return a.restore();
    var b = (0, window.$)(a.h);
    a.state.lp = !0;
    b.css("transform", "translateY(" + bD(a) + "px)").onTransitionEnd(function() {
      b.css({
        transition: "none",
        transform: ""
      });
      a.restore();
      a.onAnimationEnd()
    }, 200)
  };
  var bD = function(a) {
    var b = (0, window.$)(a.h).outerHeight();
    return null === a.options.bottom ? -(b + a.options.top) : b + a.options.bottom
  };
  var dD = function() {
    function a(a, b) {
      a = z.oa(a) ? new RegExp(a) : a;
      return a.test(b)
    }
    var b;
    z.Fb({
        home: "^/$",
        collection: "^/collection/\\d+$",
        roundtable: "^/roundtable/[\\w\\.-]+$",
        answer: "^/question/\\d+/answer/\\d+$",
        question: "^/question/\\d+$",
        search: "^/search$",
        people: "^/people/[\\w\\.-]+$",
        people_answers: "^/people/[\\w\\.-]+/answers$",
        explore_recommendations: "^/explore/recommendations$",
        explore_daily_hot: {
          path: "^/explore$",
          hash: "^(?!monthly-hot$)"
        },
        explore_monthly_hot: {
          path: "^/explore$",
          hash: "^monthly-hot$"
        }
      },
      function(c, d) {
        c.path && c.hash ? a(c.path, window.location.pathname) && a(c.hash, window.location.hash.slice(1)) && (b = d) : a(c, window.location.pathname) && (b = d);
        return !!b
      });
    return b
  };
  z.eD = function(a) {
    z.Q.call(this);
    this.entryType = a;
    this.uD = fD[a];
    this.sb = this.Rj = !1;
    this.Kt = window.setTimeout.bind(window, this.Kt.bind(this))
  };
  var gD = function(a, b) {
    return z.Rq(a, b, function() {
      return this.Yy()
    })
  };
  var hD = function(a) {
    a.uD && z.X.vb(a, {
      module: a.uD + "Item"
    }, function() {
      return {
        card: {
          card_type: "Content",
          content: a.jz()
        }
      }
    })
  };
  var iD = function(a) {
    var b = a.m();
    a.g("trackRequested", function(c) {
      c.label = a.XG();
      c.value = (0, window.$)(b).index() + 1;
      z.Ai(c)
    });
    a.Rj && z.Ln(b, function() {
      a.aJ()
    });
    var c = (0, window.$)(b).parent();
    0 === c.closest(".feed-item").length && z.Ln(b, function() {
      var b = "SearchResultList" === c.data("za-module") ? "ListItem" : "Card";
      z.X.trackCardShow(a, {
        element: b
      })
    })
  };
  var jD = function(a) {
    a = (0, window.$)(a);
    var b = {};
    (0, window.$)("[itemprop]", a).each(function() {
      var a = (0, window.$)(this);
      a.is("link, a") ? b[a.attr("itemprop")] = a.prop("href") : b[a.attr("itemprop")] = a.attr("content")
    });
    (0, window.$)("meta[name]", a).each(function() {
      var a = (0, window.$)(this);
      b[a.attr("name")] = a.attr("content")
    });
    return b
  };
  var kD = function(a) {
    var b = jD(a.h);
    a.zb = b[a.entryType + "-id"];
    a.ig = b[a.entryType + "-url-token"];
    a.xd = b
  };
  var lD = function(a) {
    if (a.CC) return a.CC;
    var b = (0, window.$)('meta[itemprop\x3d"ZReactor"]', a.h);
    b.length || (b = (0, window.$)(a.h).closest(".feed-item").find('meta[itemprop\x3d"ZReactor"]'));
    b = b.data("meta");
    a.CC = b && b.source_type || "";
    return a.CC
  };
  var mD = function(a) {
    if (a.AA) return a.AA;
    var b = dD();
    a.AA = ({
      home: "feed",
      search: "search_result_question_answer_tab",
      explore_daily_hot: "daily_trending",
      explore_monthly_hot: "monthly_trending",
      people: "people_profile_activities",
      people_answers: "people_profile_answers",
      explore_recommendations: "editor_recommendations"
    }[b] || b) + ({
      collection: "_feed",
      roundtable: "_feed",
      answer: "_more"
    }[b] || "");
    return a.AA
  };
  var nD = function(a) {
    return {
      promotion_answer: "promote",
      member_voteup_answer: "someone_vote_up",
      topic_acknowledged_answer: "from_topic",
      roundtable_add_answer: "from_roundtable",
      member_answer_question: "someone_add",
      member_create_article: "someone_add",
      member_voteup_article: "someone_vote_up"
    }[lD(a)]
  };
  var oD = function(a) {
    return (0, window.$)(a.YN, a.m())[0]
  };
  z.pD = function(a) {
    var b = {
      appkey: "3063806388"
    };
    a && (b.title = a);
    window.open("http://service.weibo.com/share/share.php?" + window.$.param(b), "_blank", "width\x3d615,height\x3d505") || (window.location.href = "http://service.weibo.com/share/share.php?" + window.$.param(b))
  };
  z.qD = function(a, b, c, d) {
    b = new rD(b, c, d);
    b.w(a);
    return b
  };
  var rD = function(a, b, c) {
    z.Q.call(this);
    this.wb = a;
    this.uM = b;
    this.qL = c
  };
  var sD = function(a) {
    var b = a.Ip = new z.Uz,
      c = [{
        label: z.Ye('\x3cspan class\x3d"ico z-ico-weibo-share"\x3e\x3c/span\x3e新浪微博'),
        value: 0
      }, {
        label: z.Ye('\x3cspan class\x3d"ico z-ico-wechat-share"\x3e\x3c/span\x3e微信扫一扫\x3cimg class\x3d"qrcode-image js-qrcode-image"\x3e'),
        value: 1
      }];
    "answer" !== a.wb && "post" !== a.wb || c.push({
      label: z.Ye('\x3cspan class\x3d"ico z-ico-daily-share"\x3e\x3c/span\x3e读读日报'),
      value: 2
    });
    window.$.each(c, function(a, c) {
      var g = new z.Pz(c.label, c.value);
      b.Ha(g)
    });
    z.ch(b, 1).bb(!1);
    c = new z.aA("share",
      b);
    c.Vi = !0;
    c.Ob = z.Gl;
    c.w(a.m());
    z.Ac(c, a);
    b.g("action", a.fR.bind(a));
    (0, window.$)(b.m()).addClass("share-menu")
  };
  var tD = function(a, b, c, d) {
    pA.call(this, a, b, c, d)
  };
  z.uD = function(a) {
    z.Q.call(this);
    z.Mb(this.options = {}, vD, a || {});
    this.content = "";
    this.rd = this.gf = this.nl = null
  };
  var wD = function(a) {
    a.getParent() ? a.dispatchEvent("expandRequest") : a.expand()
  };
  var xD = function(a, b) {
    return window.$.post("/node/PromotionVoteBarV2", {
      method: b,
      params: {
        post_id: a
      }
    })
  };
  var yD = function(a, b, c) {
    z.Q.call(this);
    this.zb = a;
    this.entryType = b || "answer";
    this.xi = null;
    this.H = window.$.extend({}, this.defaults, c || {})
  };
  var zD = function(a, b, c) {
    var d = +a.pr.text(),
      f = 0;
    (0, window.isNaN)(d) || (c === z.AD.Xg ? f = 1 : b === z.AD.Xg && (f = -1), a.pr.text(d + f))
  };
  var BD = function(a) {
    var b = a.N,
      c = a.H,
      d = b === z.AD.Xg,
      b = b === z.AD.ol,
      f = d ? "取消赞同" : "赞同",
      g = b ? "取消反对" : "反对，不会显示你的姓名";
    a.Gw.toggleClass(c.Yu, d).find(".label").text(f).end().attr("aria-pressed", d).attr("title", f);
    a.rw.toggleClass(c.Yu, b).find(".label").text(g).end().attr("aria-pressed", b).attr("title", g)
  };
  z.CD = function(a, b) {
    z.Q.call(this);
    this.zb = a;
    this.entryType = b || "answer";
    this.Tm = null;
    switch (this.entryType) {
      case "post":
        this.lf = DD;
        break;
      case "publications":
        this.lf = z.ED;
        break;
      default:
        this.lf = FD
    }
  };
  z.GD = function(a) {
    a.Tm && "pending" === a.Tm.state() || (a.Tm = a.lf.ZG(a.zb).done((0, z.t)(a.Kh, a)), (0, window.$)(".js-voteCount", a.rb).text(a.hb()))
  };
  var HD = function(a) {
    z.Q.call(this);
    this.FM = "votebar-mobile";
    this.ky = "votebar-mobile-dialog";
    this.dw = a;
    this.HM = "votebar-" + (["post", "promotion"].includes(a.entryType) ? "post" : "answer");
    this.GM = z.M("span", "_votebar-holder")
  };
  var ID = function(a) {
    var b = a.dw;
    z.To(a.GM, b.m());
    z.ij(b.m(), [a.FM, a.HM]);
    a.o().g(b, "action", function() {
      this.Ma && (0, window.setTimeout)((0, z.t)(function() {
        this.Ma.F(!1)
      }, this), 150)
    })
  };
  z.JD = function() {
    z.eD.call(this, "answer");
    this.xm = window.setTimeout.bind(window, this.xm.bind(this));
    this.qk = window.setTimeout.bind(window, this.qk.bind(this))
  };
  var KD = function(a) {
    var b = (0, window.$)(".js-administer", oD(a))[0];
    if (b) {
      a.iO = b;
      LD = 0;
      var c = new z.jA;
      a.L(c);
      c.attach(b, 5);
      var d = a.Mi ? new z.Pz("取消折叠") : new tD("折叠");
      d.Da("collapse");
      var f = function(a, b) {
        var c = new z.Pz(b + 1 + " " + a.label);
        c.Da(a.value);
        d.Ha(c)
      };
      a.Mi || MD("answer", "collapse").then(function(a) {
        z.A(a, f);
        z.U.add(d.eb().m(), "manage-menu")
      });
      b = new z.Pz("删除");
      b.Da("delete");
      c.Ha(d);
      c.Ha(b);
      c.render(a.h);
      z.U.add(c.m(), "manage-menu");
      return c
    }
  };
  var ND = function(a, b) {
    a.o().g(b, "action", function(a) {
      var b = a.target;
      a = b.X();
      var b = b.m(),
        f = new z.Ah;
      "collapse" === a ? (f.add("answer_id", this.cb).add("action", "collapse2").add("collapse", this.Mi ? "cancel" : "done"), b.setAttribute("data-op", this.Mi ? "uncollapse-answer" : "collapse-answer"), b.setAttribute("data-action", "/manage?" + f.toString()), OD(this, b)) : "delete" === a ? (f.add("answer_id", this.cb).add("action", "remove_answer2"), b.setAttribute("data-op", "remove-answer"), b.setAttribute("data-action", "/manage?" + f.toString()),
        OD(this, b)) : z.pa(a) && (b = new z.Ah, b.add("answer_id", this.cb).add("action", "collapse2").add("collapse", this.Mi ? "cancel" : "done").add("reason", a), UB("/manage", b.toString(), (0, z.t)(this.gk, this)))
    });
    a.o().g(b, "show", function() {
      z.U.add(oD(this), "zm-item-meta-has-menu")
    }).g(b, "hide", function(a) {
      a.currentTarget === a.target && z.U.remove(oD(this), "zm-item-meta-has-menu")
    })
  };
  var OD = function(a, b) {
    (new z.TB).open(b, {
      id: a.cb,
      type: "answer"
    }, (0, z.t)(a.gk, a))
  };
  var PD = function(a) {
    var b = Number(a.xd.copyrightStatus),
      c = a.xd.own || !1,
      d = (0, window.$)(".entry-content, .zm-item-rich-text", a.h),
      f = (0, window.$)(".copyright, .js-copyright", a.h);
    a = z.QD.iY.bind(z.QD, d, a.xd.disableCopyAvatar);
    switch (b) {
      case 0:
        c || a("保留所有权利，禁止转载", !0);
        break;
      case 2:
        c || (a("如需转载，请点击文末的申请转载按钮", !1), f.click(function(a) {
          z.Y.Qc && (a.preventDefault(), z.V.message("机构帐号暂不支持该功能"))
        }))
    }
    b = d.data("entryUrl");
    c = d.data("authorName");
    z.QD.lE(d, b, c)
  };
  z.RD = function() {
    z.eD.call(this, "post")
  };
  var SD = function(a) {
    var b = (0, window.$)(".Tipjar-entry", a.h);
    a.o().g(a.JL, "expand", function() {
      b.show()
    });
    a.o().g(a.JL, "collapse", function() {
      b.hide()
    });
    b.on("click", ".Tipjar-entryButton", function() {
      z.S("tipjar", "click_tipjar", "topstory")
    })
  };
  z.TD = function() {
    z.eD.call(this, "question")
  };
  z.UD = function() {
    z.eD.call(this, "live")
  };
  z.VD = function() {
    z.eD.call(this, "favorites")
  };
  z.WD = function() {
    z.eD.call(this, "column")
  };
  z.XD = function() {
    z.eD.call(this, "ebook")
  };
  var YD = function() {
    z.eD.call(this, "promotion")
  };
  z.ZD = function(a) {
    a = a.getAttribute("data-type");
    return new({
      a: z.JD,
      Answer: z.JD,
      c: z.WD,
      Column: z.WD,
      p: z.RD,
      Post: z.RD,
      q: z.TD,
      Question: z.TD,
      l: z.UD,
      f: z.VD,
      e: z.XD,
      Promotion: YD
    }[a] || z.Q)
  };
  z.$D = function(a, b, c) {
    z.Pz.call(this, a, b, c);
    this.gj(!0)
  };
  z.aE = function(a, b, c) {
    z.Q.call(this);
    this.offset = this.Gv = 0;
    this.XX = c;
    this.tQ = a;
    this.url = b || window.location.href;
    this.xh = "zm-item";
    this.params = {}
  };
  z.bE = function(a, b) {
    b ? a.kl.html('\x3ci class\x3d"spinner-gray"\x3e\x3c/i\x3e正在加载').prop("disabled", !0) : a.kl.html("更多").prop("disabled", !1)
  };
  var cE = function(a) {
    var b = a.ib();
    a.offset = a.bB ? a.bB(b) : b.length;
    a.xt ? (b = a.xt(), z.P(a.Zd, b)) : a.Zd && ("-1" !== a.kl.attr("data-next") && b ? a.kl.removeClass("hidden").show() : a.kl.hide())
  };
  z.dE = function(a) {
    a.dispatchEvent({
      data: {
        pp: a.pp,
        kD: a.kD
      },
      type: "afterload"
    })
  };
  var eE = function(a) {
    var b = a.ib(),
      c;
    if (a.XX)
      if (a.Zd && (c = a.Zd.getAttribute("data-next")), c) a.Gv = c;
      else if (b = z.jb(b)) a.Gv = a.BB(b)
  };
  var fE = function(a, b) {
    z.A(b, function(a) {
      var b = this.Fu(a);
      this.dispatchEvent({
        data: {
          item: a,
          QT: b
        },
        type: "itemcreated"
      })
    }, a)
  };
  z.gE = function(a) {
    z.G.call(this);
    this.ka = null;
    this.h = a;
    a = z.C || z.Gc || z.D && !z.E("531") && "TEXTAREA" == a.tagName;
    this.U = new z.xd(this);
    this.U.g(this.h, a ? ["keydown", "paste", "cut", "drop", "input"] : "input", this)
  };
  var hE = function(a) {
    null != a.ka && (z.wd(a.ka), a.ka = null)
  };
  var iE = function(a) {
    a = new z.Pc(a.nc);
    a.type = "input";
    return a
  };
  var jE = function(a, b, c, d) {
    z.G.call(this);
    this.Ai = a;
    this.hG = b;
    this.su = c;
    this.gQ = d || kE;
    a.removeAttribute("maxlength");
    this.fA = new z.gE(a);
    z.F(this.fA, "input", this.gB, !1, this);
    this.Gl()
  };
  z.lE = function(a) {
    z.G.call(this);
    this.sa = null;
    this.pa = a;
    this.pv = 0;
    this.yK = ""
  };
  var mE = function(a, b) {
    var c = z.Uo("zm-menu-item-link", a.fK);
    z.A(c, function(a, c) {
      var g = !z.rb(b, c);
      z.P(a, g)
    }, a)
  };
  var nE = function() {
    z.G.call(this)
  };
  z.oE = function(a) {
    function b() {
      var b;
      pE || (pE = new nE, pE.init());
      b = pE;
      b.wj = a;
      b.WN = a.id.split("-")[1];
      b.show()
    }

    function c(b) {
      if (!a.getAttribute("data-disabled")) {
        var c;
        qE || (qE = new z.lE, qE.init());
        c = qE;
        c.wj = a;
        c.pa = a.id.split("-")[1];
        "redirect" === b ? c.show() : (z.xp("/question/unredirect", null, "POST", "qid\x3d" + c.pa + "\x26rqid\x3d" + c.pv), c.wj.innerHTML = "重定向已撤销", c.wj.setAttribute("data-disabled", 1))
      }
    }

    function d() {
      function b() {
        var f = d.value,
          g = a.getAttribute("id").split("-")[1],
          f = (new z.Ah).add("revision", g).add("reason",
            f),
          q = new z.wp(!0);
        q.on("success", function() {
          var a = z.Wn(q);
          c.F(!1);
          if (!a) return z.V.message("网络异常");
          if (a.r) return z.V.message(a.msg);
          a.msg ? window.location.href = a.msg : window.location.reload()
        });
        q.ajax("/revert", f.toString())
      }
      var c = z.V.confirm("撤销", '\x3cdiv class\x3d"zg-form-text-input"\x3e\x3ctextarea class\x3d"zg-editor-input content" title\x3d"请输入撤销原因" placeholder\x3d"请输入撤销原因"\x3e\x3c/textarea\x3e\x3c/div\x3e', function(a) {
          if (a) return b(), !1
        }),
        d = z.L("content", c.S());
      new z.uk(d);
      new z.as(d);
      new jE(d,
        null, 200)
    }
    var f = a && a.name;
    if (f) switch (f) {
      case "adminflag":
        b();
        break;
      case "redirect":
      case "cancel_redirect":
        c(f);
        break;
      case "revert":
        d()
    }
  };
  z.rE = function(a) {
    (0, window.$)(a).on("click", 'a[name\x3d"revert"]', function() {
      z.oE(this)
    })
  };
  z.sE = function(a) {
    var b = {
      Zq: !1,
      n0: !1
    };
    return function(c) {
      if (!1 === c) return !1;
      c = {};
      z.Mb(c, b, a || {});
      if (c.Zq && !z.Y.zt) return z.V.alert('\x3ca href\x3d"/question/23261456" target\x3d"_blank"\x3e如何参与知乎话题的公共编辑？\x3c/a\x3e'), !1;
      if (c.hq) {
        if (!z.R.mQ) return z.V.alert('\x3cp\x3e创建较久或已有较多讨论的问题限制公共编辑\x3c/p\x3e\x3cp\x3e\x3ca href\x3d"/question/24501563" target\x3d"_blank"\x3e如何参与知乎问题的公共编辑？\x3c/a\x3e\x3c/p\x3e'), !1;
        if (z.R.sp) return z.V.alert('\x3cp\x3e创建较久或编辑次数较多的问题锁定公共编辑\x3c/p\x3e\x3cp\x3e\x3ca href\x3d"/question/24501563" target\x3d"_blank"\x3e如何参与知乎问题的公共编辑？\x3c/a\x3e\x3c/p\x3e'), !1
      }
    }
  };
  var tE = function(a) {
    return window.$.post("/settings/account/unlock_with_digits", a)
  };
  var uE = function(a) {
    return window.$.post("/settings/account/unlock_with_password", a)
  };
  z.vE = function(a) {
    return new window.Promise(function(b) {
      function c(a, b) {
        return !!z.pb(a, function(a) {
          return a.challenge_type === b
        })
      }

      function d(a) {
        var b = {
          value: a.challenge_type
        };
        switch (b.value) {
          case "password":
            b.label = "使用知乎密码验证";
            break;
          case "phone_digits":
            b.label = z.Ja("使用手机 %s 验证", a.hint);
            break;
          case "email_digits":
            b.label = z.Ja("使用邮箱 %s 验证", a.hint)
        }
        return b
      }
      if (z.aj.get("unlock_ticket")) return b();
      var f = z.V.async({
        title: "验证身份",
        modal: !0,
        zL: "正在进行安全验证，请稍等",
        className: "settings-account-unlock-dialog",
        onload: function(c,
          d) {
          function f(a) {
            var b = (0, window.$)(".panel", l),
              c = a ? b.filter(function() {
                return (0, window.$)(this).data("match") === a
              }) : b.first();
            b.not(c.show()).hide()
          }
          var l = (0, window.$)("form", c),
            p = (0, window.$)(".submit", l),
            q = (0, window.$)(".error-label-container", l),
            v = (0, window.$)(".hint-label-container", l),
            I = (0, window.$)("select", l).change(function() {
              f(this.value);
              q.text("");
              v.text("")
            });
          (0, window.$)(".js-send-digits", l).each(function() {
            var a = (0, window.$)(this),
              b = a.closest(".panel");
            (0, window.$)("input", b);
            var c =
              b.data("match"),
              a = z.sk(a, 60, function(a) {
                return a ? "%s 秒后即可重发" : "重发验证码"
              }, function() {
                v.text("");
                window.$.post("/settings/account/send_unlock_digits", {
                  type: c
                }).then(function() {
                  v.text("验证码已发送至你的" + ("email_digits" === c ? "邮箱" : "手机"))
                })
              });
            z.Ac(d, a)
          });
          z.sa(a) && (a.cancel = function() {
            d.F(!1)
          });
          var K = l.validate({
            messages: z.wE,
            ignore: "input.text:hidden",
            errorLabelContainer: q,
            submitHandler: z.tk(p, function() {
              var a = "password" === I.val();
              return (a ? uE : tE)((0, window.$)(":input:visible", l).serialize()).then(function(c) {
                if (c.success) d.F(!1),
                  b();
                else if (c = c.payload, c.fields) K.showErrors(c.fields);
                else if (c.message) {
                  var f = {};
                  f[a ? "password" : "digits"] = c.message;
                  K.showErrors(f)
                }
              })
            })
          });
          I.change();
          (0, window.$)("input.text:visible", l).focus()
        },
        Nx: window.$.get("/settings/account/request_unlock").then(function(a) {
          if (a.success) return (0, window.setTimeout)(function() {
            f.F(!1);
            b()
          }, 3E3), '\x3cp class\x3d"z-text-muted"\x3e验证成功\x3c/p\x3e';
          var h = a.payload;
          return window.$.get("/node/SettingsRequestUnlockTemplate").then(function(a) {
            return (0, z.lw)(a, {
              canUsePanel: z.Ba(c,
                h),
              each: z.A,
              options: z.mb(h, d)
            })
          })
        })
      })
    })
  };
  z.xE = function(a, b, c) {
    b = void 0 === b ? "success" : b;
    c = void 0 === c ? 3E3 : c;
    if (a) {
      var d = (0, window.$)("#zh-message-container");
      d.length || (d = (0, window.$)('\x3cdiv id\x3d"zh-message-container" style\x3d"display:none"\x3e\x3c/div\x3e').prependTo(".zu-main-content-inner"));
      d.text(a).attr("class", {
        success: "zg-info-message",
        error: "zg-error-message"
      }[b]).show().delay(c).fadeOut()
    }
  };
  z.yE = function(a, b) {
    z.ma(a) && z.xE(a[1], a[0] ? "error" : "success", b)
  };
  z.zE = function(a) {
    z.G.call(this);
    this.wd = a
  };
  z.AE = function(a) {
    this.Tl = a;
    this.oj = new z.Bj("", !0, this.Tl.wd);
    this.Yn = new z.Nj(this.Tl.wd);
    this.Xn = {};
    this.hi("tr-dialog")
  };
  z.BE = function(a, b) {
    var c = z.w("OK");
    a.Yn.set("ok", b || c, !0);
    a.Xn.ok = (0, z.t)(a.Tl.iS, a.Tl)
  };
  z.CE = function(a, b) {
    var c = z.Pm,
      d = z.w("Cancel");
    a.Yn.set(c, b || d, !1, !0);
    a.Xn[c] = (0, z.t)(a.Tl.No, a.Tl);
    return a
  };
  z.DE = function(a) {
    a.Yn.vh() && (z.BE(a), z.CE(a));
    z.Kj(a.oj, a.Yn);
    var b = a.Xn;
    a.Xn = null;
    a.oj.g(z.Mj, function(a) {
      if (b[a.key]) return b[a.key](a)
    });
    a.oj.Dq(!0);
    var c = a.oj;
    a.oj = null;
    return c
  };
  z.EE = function(a) {
    z.cB.call(this);
    this.yP = a;
    this.TK = function() {}
  };
  z.FE = function(a) {
    var b = a.G,
      c = a.bL;
    c && c.restore();
    b.focus();
    a.bL = null
  };
  var GE = function(a) {
    a.Ma && !a.lA && (a.lA = !0, a.Ma.dispose(), a.Ma = null, a.lA = !1)
  };
  var HE = function(a) {
    z.zE.call(this, a);
    this.U = new z.xd(this);
    this.ir = z.tm.gr + "/upload";
    this.hP = !z.C
  };
  var IE = function(a) {
    z.Lc.call(this, "ok");
    var b = a[0];
    this.wm = b;
    this.hK = b.replace("_m.jpg", "_r.jpg");
    this.EK = a[1];
    this.DK = a[2]
  };
  var JE = function(a, b) {
    function c(a) {
      a.eq(b).addClass("selected").siblings().removeClass("selected")
    }
    var d = (0, window.$)(".tab-nav", a.OC),
      f = (0, window.$)(".tab-content", a.form);
    z.P(a.vf, !1);
    var g = f.eq(b);
    g.find("input").val("");
    c(d);
    c(f);
    g.find(":text").focus()
  };
  var KE = function(a, b) {
    z.P(a.Ch, !1);
    a.vf.innerHTML = b;
    z.P(a.vf, !0)
  };
  z.LE = function() {
    z.EE.call(this, "image");
    this.U = new z.xd(this)
  };
  var ME = function(a, b, c, d) {
    z.Vt.call(this, a, b, c, null, d)
  };
  z.NE = function() {};
  var OE = function(a, b, c, d) {
    for (var f = [], g = 0, h = 0; g < c.height; g++) {
      for (var k = [], l = 0; l < c.width; l++) {
        var p = b && b[h++];
        k.push(PE(a, p, d))
      }
      f.push(QE(a, k, d))
    }
    return a.Sx(f, d)
  };
  var QE = function(a, b, c) {
    a = c.B("TR", a.V() + "-row", b);
    z.bj(a, "row");
    return a
  };
  var PE = function(a, b, c) {
    a = c.B("TD", {
      "class": a.V() + "-cell",
      id: a.V() + "-cell-" + RE++
    }, b);
    z.bj(a, "gridcell");
    z.cj(a, "selected", !1);
    if (!z.qf(a) && !Ao(a)) {
      var d;
      b = new ME(a);
      for (c = ""; !c && (d = ap(b));) 1 == d.nodeType && (c = Ao(d) || d.title);
      (d = c) && z.cj(a, "label", d)
    }
    return a
  };
  var SE = function(a, b, c) {
    for (b = b.m(); c && 1 == c.nodeType && c != b;) {
      if ("TD" == c.tagName && z.gj(c, a.V() + "-cell")) return c.firstChild;
      c = c.parentNode
    }
    return null
  };
  var TE = function(a) {
    z.G.call(this);
    this.Ye = [];
    UE(this, a)
  };
  var UE = function(a, b) {
    b && (z.A(b, function(a) {
      this.Ym(a, !1)
    }, a), z.wb(a.Ye, b))
  };
  z.VE = function(a, b, c) {
    cq.call(this, a, b || z.NE.aa(), c);
    this.zj &= -89;
    this.no = new WE;
    this.no.Fb(this);
    this.CA = -1
  };
  z.XE = function(a, b) {
    if (a.m()) throw Error("Component already rendered");
    a.Hc = z.pa(b) ? new z.He(b, void 0) : b;
    YE(a)
  };
  var ZE = function(a) {
    var b = a.$a();
    return b && b[a.Ya]
  };
  var $E = function(a, b, c) {
    if (a.m()) {
      var d = a.$a();
      if (d && 0 <= b && b < d.length) {
        var f;
        f = (f = ZE(a)) ? f.parentNode : null;
        a.no.m() != f && (a.no.h = f);
        f = a.no;
        f.Uc(c);
        !!(f.N & 2) == c && (b = d[b]) && (b = b ? b.parentNode : null, z.zo(b, a.M.V() + "-cell-hover", c), c ? z.cj(a.h, "activedescendant", b.id) : b.id == z.ej(a.h, "activedescendant") && a.h.removeAttribute("aria-activedescendant"))
      }
    }
  };
  var YE = function(a) {
    var b = a.$a();
    if (b)
      if (a.Hc && a.Hc.width) {
        if (b = Math.ceil(b.length / a.Hc.width), !z.pa(a.Hc.height) || a.Hc.height < b) a.Hc.height = b
      } else b = Math.ceil(Math.sqrt(b.length)), a.Hc = new z.He(b, b);
    else a.Hc = new z.He(0, 0)
  };
  var WE = function() {
    cq.call(this, null);
    this.Wk |= 2
  };
  z.aF = function() {};
  z.bF = function() {
    this.hx = "toolbar"
  };
  var cF = function() {};
  z.dF = function(a, b, c) {
    z.jq.call(this, a, b || cF.aa(), c)
  };
  var eF = function() {};
  var fF = function(a, b) {
    return b.B("DIV", "goog-color-menu-button-indicator", a)
  };
  var gF = function(a, b) {
    if (a && a.firstChild) {
      var c;
      if (c = b) c = !!(fr.test("#" == b.charAt(0) ? b : "#" + b) || hr(b).length || jr && jr[b.toLowerCase()]);
      c = c ? er(b).Bt : null;
      a.firstChild.style.borderBottomColor = c || (z.C ? "" : "transparent")
    }
  };
  var hF = function(a, b, c) {
    this.ks = a || [];
    z.VE.call(this, null, b || z.NE.aa(), c);
    this.ks = this.ks;
    this.Au = this.Yt = null;
    this.ca(iF(this))
  };
  var iF = function(a) {
    return z.mb(a.ks, function(a, c) {
      var d = this.K().B("DIV", {
          "class": this.M.V() + "-colorswatch",
          style: "background-color:" + a
        }),
        f;
      this.Yt && this.Yt[c] ? f = this.Yt[c] : "#" == a.charAt(0) ? (f = gr(a), f = "RGB (" + [(0, window.parseInt)(f.substr(1, 2), 16), (0, window.parseInt)(f.substr(3, 2), 16), (0, window.parseInt)(f.substr(5, 2), 16)].join(", ") + ")") : f = a;
      d.title = f;
      return d
    }, a)
  };
  var jF = function(a) {
    if (a) try {
      return er(a).Bt
    } catch (b) {}
    return null
  };
  var kF = function(a, b, c, d) {
    z.aA.call(this, a, b, c || eF.aa(), d)
  };
  var lF = function(a) {
    var b = new z.Uz(a);
    z.Db(mF, function(c) {
      c = new hF(c, null, a);
      z.XE(c, 8);
      b.L(c, !0)
    });
    return b
  };
  var nF = function() {};
  var oF = function() {};
  var pF = function(a, b, c, d) {
    kF.call(this, a, b, c || oF.aa(), d)
  };
  var qF = function(a, b, c, d) {
    z.aA.call(this, a, b, c || nF.aa(), d)
  };
  var rF = function(a, b, c, d, f) {
    z.aA.call(this, a, b, c, d, f || new Sz("listbox"));
    this.fy = this.$a();
    this.eA = null;
    this.zv("listbox")
  };
  var sF = function(a, b) {
    a.fy = b;
    tF(a)
  };
  var uF = function(a, b) {
    a.la = new TE;
    b && z.dh(b, function(a) {
      vF(a);
      this.la.Ha(a)
    }, a);
    wF(a)
  };
  var wF = function(a) {
    a.la && a.o().g(a.la, "select", a.hk)
  };
  var tF = function(a) {
    var b = a.Bf();
    a.ca(b ? b.nh() : a.fy);
    var c = a.M.S(a.m());
    c && a.K().isElement(c) && (null == a.eA && (a.eA = Ao(c)), b = (b = b ? b.m() : null) ? Ao(b) : a.eA, z.cj(c, "label", b), xF(a))
  };
  var xF = function(a) {
    var b = a.M;
    if (b && (b = b.S(a.m()))) {
      var c = a.h;
      b.id || (b.id = z.Yg(z.Xg.aa()));
      z.bj(b, "option");
      z.cj(c, "activedescendant", b.id);
      a.la && (c = a.la.ib(), z.cj(b, "setsize", yF(c)), a = a.la.ak(), z.cj(b, "posinset", 0 <= a ? yF(z.yb(c, 0, a + 1)) : 0))
    }
  };
  var yF = function(a) {
    return hp(a, function(a) {
      return a instanceof z.Pz
    })
  };
  var vF = function(a) {
    a.zv(a instanceof z.Pz ? "option" : "separator")
  };
  var zF = function(a, b, c, d) {
    rF.call(this, a, b, c || nF.aa(), d)
  };
  var AF = function(a) {
    var b = a.indexOf(",");
    a: for (a = (-1 != b ? a.substring(0, b) : a).toLowerCase(), b = 0; 2 > b; b++) {
      var c = "\"'".charAt(b);
      if (a.charAt(0) == c && a.charAt(a.length - 1) == c) {
        a = a.substring(1, a.length - 1);
        break a
      }
    }
    return a
  };
  var BF = function(a, b) {
    z.A(b, function(b) {
      var d = b.value,
        f = AF(d);
      b = new z.$D(b.caption, d, a.K());
      Tn(b, f);
      a.Ha(b);
      b.S().style.fontFamily = d
    })
  };
  var CF = function(a) {
    z.A(DF, function(b) {
      var c = b.value;
      b = new z.$D(b.caption, c, a.K());
      a.Ha(b);
      b = b.S();
      b.style.fontSize = (EF[c] || 10) + "px";
      b.firstChild.style.height = "1.1em"
    })
  };
  var FF = function(a) {
    z.A(GF, function(b) {
      var c = b.caption;
      b = b.Ba;
      var d = a.K(),
        c = new z.$D(d.B("DIV", null, c), b, d);
      Tn(c, b);
      a.Ha(c)
    })
  };
  z.HF = function(a, b, c, d, f, g) {
    c = new z.dF(IF(c, d, g), f, g);
    Tn(c, a);
    c.Kd(b);
    return c
  };
  z.JF = function(a, b, c, d, f, g) {
    a = z.HF(a, b, c, d, f, g);
    a.Zb(16, !0);
    return a
  };
  var KF = function(a, b, c, d, f, g) {
    f = new zF(null, null, f, g);
    d && z.A(d.split(/\s+/), f.hi, f);
    f.hi("goog-toolbar-select");
    sF(f, c);
    Tn(f, a);
    f.Kd(b);
    return f
  };
  var LF = function(a, b, c, d, f, g) {
    c = new pF(IF(c, d, g), null, f, g);
    Tn(c, a);
    c.Kd(b);
    return c
  };
  var IF = function(a, b, c) {
    a && "" != a || !z.B || z.E("1.9a") || (a = " ");
    return (c || z.Ie()).B("DIV", b ? {
      "class": b
    } : null, a)
  };
  var MF = function(a) {
    var b = "en-us".replace(/_/, "-").toLowerCase(),
      c = [];
    b in NF && (c = NF[b]);
    c.length && BF(a, c);
    BF(a, OF)
  };
  var PF = function(a, b, c, d, f, g) {
    var h = z.HF(a, b, c, d, f, g);
    h.lj = function(a) {
      h.bb(a)
    };
    return h
  };
  var QF = function(a, b) {
    var c = b;
    try {
      if (z.C) var d = "000000" + c.toString(16),
        f = d.substr(d.length - 6, 6),
        c = "#" + f.substring(4, 6) + f.substring(2, 4) + f.substring(0, 2);
      c != a.X() && a.Da(c)
    } catch (g) {}
  };
  z.RF = function(a) {
    z.cB.call(this);
    this.ea = new z.xd(this);
    this.IH = z.M("div", {
      style: "display:none"
    });
    this.h = this.Ac = null;
    this.H = {};
    z.Mb(this.H, this.defaults, a || {})
  };
  var SF = function(a) {
    a.dispatchEvent("willEnterFullScreen") && (a.oG || (a.RS = window.history.length), a.oG = !0, TF(a, "writing"), a.OM = z.xf(z.Ie((z.u || window).document)), z.To(a.IH, a.H.bl), a.Ac.appendChild(a.H.bl), z.U.add(window.document.body, a.H.Ao), a.Kb = z.L(a.H.OY, a.h), a.Kb.appendChild(a.Yq), UF(a), (0, z.ab)(z.qf(a.G.Ka)) || a.G.ng(), a.dispatchEvent("enterFullScreen"))
  };
  var VF = function(a) {
    !z.Uj && a.oG && a.RS !== window.history.length ? window.history.back() : TF(a, "");
    a.Kb.removeChild(a.Yq);
    a.nL(!1);
    a.h.onscroll = null;
    a.ea.oa(window.document, "keydown", a.Wp);
    z.To(a.H.bl, a.IH);
    z.U.remove(window.document.body, a.H.Ao);
    window.scrollTo(a.OM.x, a.OM.y);
    a.dispatchEvent("exitFullScreen")
  };
  var TF = function(a, b) {
    a.ea.oa(window, "hashchange", a.NJ);
    window.location.hash = b || "";
    (0, window.setTimeout)((0, z.t)(function() {
      this.ea.g(window, "hashchange", this.NJ)
    }, a))
  };
  var UF = function(a) {
    var b = a.h;
    b.scrollTop = 0;
    var c = a.Kb.getBoundingClientRect().top;
    b.onscroll = z.lp((0, z.t)(a.nL, a), function() {
      return b.scrollTop > c
    });
    a.ea.g(window.document, "keydown", a.Wp)
  };
  z.WF = function() {
    this.Ry = ["zg-btn-follow", "zg-btn-unfollow"];
    this.Sy = "people"
  };
  z.Wk.prototype.zq = z.Z(27, function(a) {
    this.Gj = a
  });
  z.Wj.prototype.mh = z.Z(26, function(a, b) {
    if (!this.h) return null;
    for (var c = b || "A", d = a; null != d && d !== this.h;) {
      if (d.tagName === c) return d;
      d = d.parentNode
    }
    return null
  });
  z.T.prototype.Zm = z.Z(25, function(a) {
    this.vl = a;
    this.wa && z.Rj(this)
  });
  z.Bj.prototype.zv = z.Z(22, function(a) {
    this.cq = a
  });
  z.Bj.prototype.$a = z.Z(21, function() {
    return null != this.Ac ? z.Fd(this.Ac) : ""
  });
  z.oj.prototype.bb = z.Z(20, function(a) {
    this.lc = a
  });
  z.oj.prototype.oC = z.Z(19, function(a) {
    this.Hz = Math.pow(a, 2)
  });
  z.oj.prototype.jh = z.Z(18, function(a) {
    this.mj = a
  });
  z.Q.prototype.Sh = z.Z(17, function(a) {
    if (this.wa) throw Error("Component already rendered");
    this.Jg = a
  });
  z.Q.prototype.Ed = z.Z(16, function() {
    null == this.Jg && (this.Jg = z.Og(this.wa ? this.h : this.ba.ua().body));
    return this.Jg
  });
  z.sg.prototype.oh = z.Z(15, function() {
    return new z.He(this.width, this.height)
  });
  z.sg.prototype.iA = z.Z(14, function(a) {
    var b = Math.max(this.left, a.left),
      c = Math.min(this.left + this.width, a.left + a.width);
    if (b <= c) {
      var d = Math.max(this.top, a.top);
      a = Math.min(this.top + this.height, a.top + a.height);
      if (d <= a) return this.left = b, this.top = d, this.width = c - b, this.height = a - d, !0
    }
    return !1
  });
  z.Tf.prototype.Gr = z.Z(13, function(a, b, c) {
    var d = (0, z.H)(),
      f = c ? c : d,
      g = Hn(this.Ns);
    g.Ps = 2;
    g.Os = f;
    g.type = b;
    g.pF = a;
    a = (a = this.U_) && a.isTracing() ? a.totalVarAlloc : -1;
    g.$L = a;
    this.Lx++;
    if (c) {
      c = this.jg.length;
      for (a = 0; a < c; a++)
        if (this.jg[a].Os > f) {
          z.xb(this.jg, a, 0, g);
          break
        }
      a == c && this.jg.push(g)
    } else this.jg.push(g);
    if (f = g.type) g = this.Xk.get(f), g || (g = Hn(this.GC), g.type = f, this.Xk.set(f, g)), g.count++;
    this.Wv += (0, z.H)() - d
  });
  z.Je.prototype.wg = z.Z(12, function(a) {
    var b;
    (b = "A" == a.tagName || "INPUT" == a.tagName || "TEXTAREA" == a.tagName || "SELECT" == a.tagName || "BUTTON" == a.tagName ? !a.disabled && (!Dn(a) || Cn(a)) : Jn(a)) && z.C ? (a = z.qa(a.getBoundingClientRect) ? a.getBoundingClientRect() : {
      height: a.offsetHeight,
      width: a.offsetWidth
    }, a = null != a && 0 < a.height && 0 < a.width) : a = b;
    return a
  });
  z.Q.prototype.nq = z.Z(11, function(a) {
    for (var b = []; this.$c && 0 != this.$c.length;) b.push(this.removeChild(z.ch(this, 0), a));
    return b
  });
  z.Je.prototype.cm = z.Z(10, function(a) {
    return In(a || this.Qa)
  });
  z.Je.prototype.Sx = z.Z(9, function(a, b, c) {
    var d = this.Qa;
    c = !!c;
    for (var f = d.createElement("TABLE"), g = f.appendChild(d.createElement("TBODY")), h = 0; h < a; h++) {
      for (var k = d.createElement("TR"), l = 0; l < b; l++) {
        var p = d.createElement("TD");
        c && z.of(p, " ");
        k.appendChild(p)
      }
      g.appendChild(k)
    }
    return f
  });
  z.Je.prototype.qg = z.Z(8, function(a, b) {
    return z.L(a, b || this.Qa)
  });
  z.Q.prototype.qg = z.Z(7, function(a) {
    return this.h ? this.ba.qg(a, this.h) : null
  });
  z.Qd.prototype.vi = z.Z(6, function(a) {
    for (var b = 0; b < this.fb.length; b++) {
      var c = this.fb[b];
      if (z.Ud(this.Nb, c) && this.Nb[c] == a) return !0
    }
    return !1
  });
  z.Ah.prototype.vi = z.Z(5, function(a) {
    var b = this.fd();
    return z.rb(b, a)
  });
  z.Xi.prototype.vi = z.Z(4, function(a) {
    for (var b = z.Yi(this).values, c = 0; c < b.length; c++)
      if (b[c] == a) return !0;
    return !1
  });
  z.Pc.prototype.MG = z.Z(0, function() {
    return this.nc
  });
  z.y(z.Pn, z.G);
  z.e = z.Pn.prototype;
  z.e.h = null;
  z.e.vl = !0;
  z.e.HE = null;
  z.e.IE = null;
  z.e.vk = !1;
  z.e.WX = !1;
  z.e.EA = -1;
  z.e.BA = -1;
  z.e.GH = !1;
  z.e.vQ = !0;
  z.e.wb = "toggle_display";
  z.e.Ii = function() {
    return this.wb
  };
  z.e.m = function() {
    return this.h
  };
  z.e.Qh = function(a) {
    Gn(this);
    this.h = a
  };
  z.e.Zm = function(a) {
    Gn(this);
    this.vl = a
  };
  z.e.oL = function(a, b) {
    this.jn = a;
    this.tm = b
  };
  z.e.o = function() {
    return this.ea
  };
  z.e.W = function() {
    return this.vk
  };
  z.e.oI = function() {
    return this.vk || 150 > (0, z.H)() - this.BA
  };
  z.e.F = function(a) {
    this.jn && this.jn.stop();
    this.tm && this.tm.stop();
    a ? this.xC() : this.um()
  };
  z.e.ga = z.r;
  z.e.xC = function() {
    if (!this.vk && this.Pp()) {
      if (!this.h) throw Error("Caller must call setElement before trying to show the popup");
      this.ga();
      var a = z.Ke(this.h);
      this.GH && this.ea.g(a, "keydown", this.ZU, !0);
      if (this.vl)
        if (this.ea.g(a, "mousedown", this.MJ, !0), z.C) {
          var b;
          try {
            b = a.activeElement
          } catch (d) {}
          for (; b && "IFRAME" == b.nodeName;) {
            try {
              var c = b.contentDocument || b.contentWindow.document
            } catch (d) {
              break
            }
            a = c;
            b = a.activeElement
          }
          this.ea.g(a, "mousedown", this.MJ, !0);
          this.ea.g(a, "deactivate", this.KJ)
        } else this.ea.g(a,
          "blur", this.KJ);
        "toggle_display" == this.wb ? (this.h.style.visibility = "visible", z.P(this.h, !0)) : "move_offscreen" == this.wb && this.ga();
      this.vk = !0;
      this.EA = (0, z.H)();
      this.BA = -1;
      this.jn ? (z.ld(this.jn, "end", this.Lk, !1, this), this.jn.play()) : this.Lk()
    }
  };
  z.e.um = function(a) {
    if (!this.vk || !this.dispatchEvent({
        type: "beforehide",
        target: a
      })) return !1;
    this.ea && this.ea.removeAll();
    this.vk = !1;
    this.BA = (0, z.H)();
    this.tm ? (z.ld(this.tm, "end", z.Ba(this.yF, a), !1, this), this.tm.play()) : this.yF(a);
    return !0
  };
  z.e.yF = function(a) {
    "toggle_display" == this.wb ? this.WX ? z.vd(this.HH, 0, this) : this.HH() : "move_offscreen" == this.wb && (this.h.style.top = "-10000px");
    this.Kk(a)
  };
  z.e.HH = function() {
    this.h.style.visibility = "hidden";
    z.P(this.h, !1)
  };
  z.e.Pp = function() {
    return this.dispatchEvent("beforeshow")
  };
  z.e.Lk = function() {
    this.dispatchEvent("show")
  };
  z.e.Kk = function(a) {
    this.dispatchEvent({
      type: "hide",
      target: a
    })
  };
  z.e.MJ = function(a) {
    a = a.target;
    z.nf(this.h, a) || Fn(this, a) || this.IE && !z.nf(this.IE, a) || 150 > (0, z.H)() - this.EA || this.um(a)
  };
  z.e.ZU = function(a) {
    27 == a.keyCode && this.um(a.target) && (a.preventDefault(), a.stopPropagation())
  };
  z.e.KJ = function(a) {
    if (this.vQ) {
      var b = z.Ke(this.h);
      if ("undefined" != typeof window.document.activeElement) {
        if (a = b.activeElement, !a || z.nf(this.h, a) || "BODY" == a.tagName) return
      } else if (a.target != b) return;
      150 > (0, z.H)() - this.EA || this.um()
    }
  };
  z.e.D = function() {
    z.Pn.v.D.call(this);
    this.ea.dispose();
    z.Cc(this.jn);
    z.Cc(this.tm);
    delete this.h;
    delete this.ea;
    delete this.HE
  };
  var io = /&([^;\s<&]+);?/g,
    so = {
      '"': '\\"',
      "\\": "\\\\",
      "/": "\\/",
      "\b": "\\b",
      "\f": "\\f",
      "\n": "\\n",
      "\r": "\\r",
      "\t": "\\t",
      "\x0B": "\\u000b"
    },
    XF = /[^\d]+$/;
  po.prototype.serialize = function(a) {
    var b = [];
    qo(this, a, b);
    return b.join("")
  };
  po.prototype.serializeArray = function(a, b) {
    var c = a.length;
    b.push("[");
    for (var d = "", f = 0; f < c; f++) b.push(d), d = a[f], qo(this, this.kv ? this.kv.call(a, String(f), d) : d, b), d = ",";
    b.push("]")
  };
  z.e = Zo.prototype;
  z.e.hb = function() {
    return this.Nb.hb()
  };
  z.e.add = function(a) {
    this.Nb.set(to(a), a)
  };
  z.e.addAll = function(a) {
    a = z.Hd(a);
    for (var b = a.length, c = 0; c < b; c++) this.add(a[c])
  };
  z.e.removeAll = function(a) {
    a = z.Hd(a);
    for (var b = a.length, c = 0; c < b; c++) this.remove(a[c])
  };
  z.e.remove = function(a) {
    return this.Nb.remove(to(a))
  };
  z.e.clear = function() {
    this.Nb.clear()
  };
  z.e.vh = function() {
    return this.Nb.vh()
  };
  z.e.contains = function(a) {
    return this.Nb.eg(to(a))
  };
  z.e.iA = function(a) {
    var b = new Zo;
    a = z.Hd(a);
    for (var c = 0; c < a.length; c++) {
      var d = a[c];
      this.contains(d) && b.add(d)
    }
    return b
  };
  z.e.fd = function() {
    return this.Nb.fd()
  };
  z.e.clone = function() {
    return new Zo(this)
  };
  z.e.equals = function(a) {
    return this.hb() == vo(a) && $o(this, a)
  };
  z.e.td = function() {
    return this.Nb.td(!1)
  };
  var Gp;
  z.y(z.wp, z.de);
  var YF = /#.*$/,
    Bp = {
      "*": "*",
      "text/html": "html",
      "text/plain": "text",
      "application/json": "json",
      "application/javascript": "script",
      "application/x-javascript": "script"
    },
    zp = [],
    Dp = [];
  z.wp.prototype.pR = function() {
    if (this.xM) {
      var a = Fp();
      z.P(a, !1)
    }
    Ap(this)
  };
  z.wp.prototype.ajax = function(a, b, c) {
    a = (0, window.encodeURI)((0, window.decodeURI)(a));
    a = a.replace(YF, "");
    if (!this.da) {
      if (this.xM) {
        var d = Fp();
        z.P(d, !0)
      }
      Ep(this);
      c = c || "POST";
      "POST" === c.toUpperCase() && (d = z.aj.get("_xsrf")) && (b = (b ? b + "\x26_xsrf\x3d" : "_xsrf\x3d") + d);
      return this.send(a, c, b, this.headers)
    }
  };
  z.y(Hp, z.G);
  Hp.prototype.o = function() {
    return this.Ff || (this.Ff = new z.xd(this))
  };
  z.y(z.Jp, z.Lc);
  z.Kp = new Hp;
  z.G.prototype.on = function() {
    z.G.prototype.addEventListener.apply(this, arguments);
    return this
  };
  z.G.prototype.off = function() {
    z.G.prototype.removeEventListener.apply(this, arguments);
    return this
  };
  z.G.prototype.yb = z.G.prototype.dispatchEvent;
  z.y(Lp, z.G);
  Lp.prototype.oc = function() {
    var a = (0, z.t)(function(a) {
      var c = this.ls.section;
      (c = c && c["home-topstory"]) && (c.content = a)
    }, this);
    Rp(this).always((0, z.t)(function(b) {
      this.mb || (b && b.sn && b.sn.length && a("这里是根据你关注的话题和人定制的内容精选"), this.H.Hk(), Np(this), Pp(this))
    }, this));
    this.mb || Qp()
  };
  z.y(Sp, z.G);
  z.e = Sp.prototype;
  z.e.h = null;
  z.e.Wt = null;
  z.e.uA = null;
  z.e.Xt = null;
  z.e.ve = -1;
  z.e.Ni = -1;
  z.e.$w = !1;
  var ZF = {
      3: 13,
      12: 144,
      63232: 38,
      63233: 40,
      63234: 37,
      63235: 39,
      63236: 112,
      63237: 113,
      63238: 114,
      63239: 115,
      63240: 116,
      63241: 117,
      63242: 118,
      63243: 119,
      63244: 120,
      63245: 121,
      63246: 122,
      63247: 123,
      63248: 44,
      63272: 46,
      63273: 36,
      63275: 35,
      63276: 33,
      63277: 34,
      63289: 144,
      63302: 45
    },
    $F = {
      Up: 38,
      Down: 40,
      Left: 37,
      Right: 39,
      Enter: 13,
      F1: 112,
      F2: 113,
      F3: 114,
      F4: 115,
      F5: 116,
      F6: 117,
      F7: 118,
      F8: 119,
      F9: 120,
      F10: 121,
      F11: 122,
      F12: 123,
      "U+007F": 46,
      Home: 36,
      End: 35,
      PageUp: 33,
      PageDown: 34,
      Insert: 45
    },
    aG = z.C || z.Gc || z.D && z.E("525"),
    bG = z.Uc && z.B;
  z.e = Sp.prototype;
  z.e.Cf = function(a) {
    if (z.D || z.Gc)
      if (17 == this.ve && !a.ctrlKey || 18 == this.ve && !a.altKey || z.Uc && 91 == this.ve && !a.metaKey) this.Ni = this.ve = -1; - 1 == this.ve && (a.ctrlKey && 17 != a.keyCode ? this.ve = 17 : a.altKey && 18 != a.keyCode ? this.ve = 18 : a.metaKey && 91 != a.keyCode && (this.ve = 91));
    aG && !xo(a.keyCode, this.ve, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : (this.Ni = z.lj(a.keyCode), bG && (this.$w = a.altKey))
  };
  z.e.$R = function(a) {
    this.Ni = this.ve = -1;
    this.$w = a.altKey
  };
  z.e.handleEvent = function(a) {
    var b = a.nc,
      c, d, f = b.altKey;
    z.C && "keypress" == a.type ? (c = this.Ni, d = 13 != c && 27 != c ? b.keyCode : 0) : (z.D || z.Gc) && "keypress" == a.type ? (c = this.Ni, d = 0 <= b.charCode && 63232 > b.charCode && z.jo(c) ? b.charCode : 0) : z.wg && !z.D ? (c = this.Ni, d = z.jo(c) ? b.keyCode : 0) : (c = b.keyCode || this.Ni, d = b.charCode || 0, bG && (f = this.$w), z.Uc && 63 == d && 224 == c && (c = 191));
    var g = c = z.lj(c),
      h = b.keyIdentifier;
    c ? 63232 <= c && c in ZF ? g = ZF[c] : 25 == c && a.shiftKey && (g = 9) : h && h in $F && (g = $F[h]);
    a = g == this.ve;
    this.ve = g;
    b = new Tp(g, d, a, b);
    b.altKey =
      f;
    this.dispatchEvent(b)
  };
  z.e.m = function() {
    return this.h
  };
  z.e.attach = function(a, b) {
    this.Xt && this.detach();
    this.h = a;
    this.Wt = z.F(this.h, "keypress", this, b);
    this.uA = z.F(this.h, "keydown", this.Cf, b, this);
    this.Xt = z.F(this.h, "keyup", this.$R, b, this)
  };
  z.e.detach = function() {
    this.Wt && (z.nd(this.Wt), z.nd(this.uA), z.nd(this.Xt), this.Xt = this.uA = this.Wt = null);
    this.h = null;
    this.Ni = this.ve = -1
  };
  z.e.D = function() {
    Sp.v.D.call(this);
    this.detach()
  };
  z.y(Tp, z.Pc);
  var cG;
  z.ka(Up);
  var dG = {
    button: "pressed",
    checkbox: "checked",
    menuitem: "selected",
    menuitemcheckbox: "checked",
    menuitemradio: "checked",
    radio: "checked",
    tab: "selected",
    treeitem: "selected"
  };
  z.e = Up.prototype;
  z.e.zf = function() {};
  z.e.B = function(a) {
    return a.K().B("DIV", this.og(a).join(" "), a.$a())
  };
  z.e.S = function(a) {
    return a
  };
  z.e.Qj = function(a, b, c) {
    if (a = a.m ? a.m() : a) {
      var d = [b];
      z.C && !z.E("7") && (d = Yp(z.fj(a), b), d.push(b));
      (c ? z.ij : z.kj)(a, d)
    }
  };
  z.e.Ob = function() {
    return !0
  };
  z.e.w = function(a, b) {
    b.id && Tn(a, b.id);
    var c = this.S(b);
    c && c.firstChild ? a.$m(c.firstChild.nextSibling ? z.vb(c.childNodes) : c.firstChild) : a.$m(null);
    var d = 0,
      f = this.V(),
      g = this.V(),
      h = !1,
      k = !1,
      l = !1,
      p = z.vb(z.fj(b));
    z.A(p, function(a) {
      h || a != f ? k || a != g ? d |= this.it(a) : k = !0 : (h = !0, g == f && (k = !0));
      1 == this.it(a) && Jn(c) && z.pf(c, !1)
    }, this);
    a.N = d;
    h || (p.push(f), g == f && (k = !0));
    k || p.push(g);
    var q = a.xf;
    q && p.push.apply(p, q);
    if (z.C && !z.E("7")) {
      var v = Yp(p);
      0 < v.length && (p.push.apply(p, v), l = !0)
    }
    if (!h || !k || q || l) b.className = p.join(" ");
    return b
  };
  z.e.Ue = function(a) {
    a.Ed() && this.Sh(a.m(), !0);
    a.isEnabled() && this.cf(a, a.W())
  };
  z.e.kC = function(a, b) {
    z.cj(a, "label", b)
  };
  z.e.wq = function(a, b) {
    z.Do(a, !b, !z.C && !z.wg)
  };
  z.e.Sh = function(a, b) {
    this.Qj(a, this.V() + "-rtl", b)
  };
  z.e.wg = function(a) {
    var b;
    return Xp(a, 32) && (b = a.ec()) ? Jn(b) : !1
  };
  z.e.cf = function(a, b) {
    var c;
    if (Xp(a, 32) && (c = a.ec())) {
      if (!b && a.N & 32) {
        try {
          c.blur()
        } catch (d) {}
        a.N & 32 && a.gd(null)
      }
      Jn(c) != b && z.pf(c, b)
    }
  };
  z.e.F = function(a, b) {
    z.P(a, b);
    a && z.cj(a, "hidden", !b)
  };
  z.e.uc = function(a, b, c) {
    var d = a.m();
    if (d) {
      var f = this.Bo(b);
      f && this.Qj(a, f, c);
      this.Qg(d, b, c)
    }
  };
  z.e.Qg = function(a, b, c) {
    cG || (cG = {
      1: "disabled",
      8: "selected",
      16: "checked",
      64: "expanded"
    });
    b = cG[b];
    var d = a.getAttribute("role") || null;
    d && (d = dG[d] || b, b = "checked" == b || "selected" == b ? d : b);
    b && z.cj(a, b, c)
  };
  z.e.ca = function(a, b) {
    var c = this.S(a);
    if (c && (z.bf(c), b))
      if (z.oa(b)) z.of(c, b);
      else {
        var d = function(a) {
          if (a) {
            var b = z.Ke(c);
            c.appendChild(z.oa(a) ? b.createTextNode(a) : a)
          }
        };
        z.ma(b) ? z.A(b, d) : !z.na(b) || "nodeType" in b ? d(b) : z.A(z.vb(b), d)
      }
  };
  z.e.ec = function(a) {
    return a.m()
  };
  z.e.V = function() {
    return "goog-control"
  };
  z.e.og = function(a) {
    var b = this.V(),
      c = [b],
      d = this.V();
    d != b && c.push(d);
    b = a.getState();
    for (d = []; b;) {
      var f = b & -b;
      d.push(this.Bo(f));
      b &= ~f
    }
    c.push.apply(c, d);
    (a = a.xf) && c.push.apply(c, a);
    z.C && !z.E("7") && c.push.apply(c, Yp(c));
    return c
  };
  z.e.Bo = function(a) {
    this.es || Zp(this);
    return this.es[a]
  };
  z.e.it = function(a) {
    this.EL || (this.es || Zp(this), this.EL = z.dp(this.es));
    a = (0, window.parseInt)(this.EL[a], 10);
    return (0, window.isNaN)(a) ? 0 : a
  };
  z.y(z.$p, Up);
  z.ka(z.$p);
  z.e = z.$p.prototype;
  z.e.zf = function() {
    return "button"
  };
  z.e.Qg = function(a, b, c) {
    switch (b) {
      case 8:
      case 16:
        z.cj(a, "pressed", c);
        break;
      default:
      case 64:
      case 1:
        z.$p.v.Qg.call(this, a, b, c)
    }
  };
  z.e.B = function(a) {
    var b = z.$p.v.B.call(this, a);
    this.Kd(b, a.jm());
    var c = a.X();
    c && this.Da(b, c);
    Xp(a, 16) && this.Qg(b, 16, a.vg());
    return b
  };
  z.e.w = function(a, b) {
    b = z.$p.v.w.call(this, a, b);
    var c = this.X(b);
    a.De = c;
    a.$C = this.jm(b);
    Xp(a, 16) && this.Qg(b, 16, a.vg());
    return b
  };
  z.e.X = z.r;
  z.e.Da = z.r;
  z.e.jm = function(a) {
    return a.title
  };
  z.e.Kd = function(a, b) {
    a && (b ? a.title = b : a.removeAttribute("title"))
  };
  z.e.dj = z.m(29);
  z.e.V = function() {
    return "goog-button"
  };
  var dq = {},
    bq = {};
  z.y(cq, z.Q);
  z.e = cq.prototype;
  z.e.Ac = null;
  z.e.N = 0;
  z.e.Rq = 39;
  z.e.zj = 255;
  z.e.Wk = 0;
  z.e.xb = !0;
  z.e.xf = null;
  z.e.ek = !0;
  z.e.Mr = !1;
  z.e.cq = null;
  z.e.Cq = function(a) {
    this.wa && a != this.ek && eq(this, a);
    this.ek = a
  };
  z.e.ec = function() {
    return this.M.ec(this)
  };
  z.e.ft = function() {
    return this.Cb || (this.Cb = new Sp)
  };
  z.e.hi = function(a) {
    a && (this.xf ? z.rb(this.xf, a) || this.xf.push(a) : this.xf = [a], this.M.Qj(this, a, !0))
  };
  z.e.Qj = function(a, b) {
    b ? this.hi(a) : a && this.xf && z.tb(this.xf, a) && (0 == this.xf.length && (this.xf = null), this.M.Qj(this, a, !1))
  };
  z.e.B = function() {
    var a = this.M.B(this);
    this.h = a;
    Vp(this.M, a, this.Hi());
    this.Mr || this.M.wq(a, !1);
    this.W() || this.M.F(a, !1)
  };
  z.e.Hi = function() {
    return this.cq
  };
  z.e.zv = function(a) {
    this.cq = a
  };
  z.e.kC = function(a) {
    this.CE = a;
    var b = this.m();
    b && this.M.kC(b, a)
  };
  z.e.S = function() {
    return this.M.S(this.m())
  };
  z.e.Ob = function(a) {
    return this.M.Ob(a)
  };
  z.e.T = function(a) {
    this.h = a = this.M.w(this, a);
    Vp(this.M, a, this.Hi());
    this.Mr || this.M.wq(a, !1);
    this.xb = "none" != a.style.display
  };
  z.e.C = function() {
    cq.v.C.call(this);
    Wp(this.M, this, this.h);
    this.M.Ue(this);
    if (this.Rq & -2 && (this.ek && eq(this, !0), Xp(this, 32))) {
      var a = this.ec();
      if (a) {
        var b = this.ft();
        b.attach(a);
        this.o().g(b, "key", this.fc).g(a, "focus", this.te).g(a, "blur", this.gd)
      }
    }
  };
  z.e.Ab = function() {
    cq.v.Ab.call(this);
    this.Cb && this.Cb.detach();
    this.W() && this.isEnabled() && this.M.cf(this, !1)
  };
  z.e.D = function() {
    cq.v.D.call(this);
    this.Cb && (this.Cb.dispose(), delete this.Cb);
    delete this.M;
    this.Xo = this.xf = this.Ac = null
  };
  z.e.$a = function() {
    return this.Ac
  };
  z.e.ca = function(a) {
    this.M.ca(this.m(), a);
    this.$m(a)
  };
  z.e.$m = function(a) {
    this.Ac = a
  };
  z.e.nh = function() {
    var a = this.$a();
    if (!a) return "";
    a = z.oa(a) ? a : z.ma(a) ? z.mb(a, z.Mo).join("") : z.qf(a);
    return qp(a)
  };
  z.e.xq = function(a) {
    this.ca(a)
  };
  z.e.Sh = function(a) {
    cq.v.Sh.call(this, a);
    var b = this.m();
    b && this.M.Sh(b, a)
  };
  z.e.wq = function(a) {
    this.Mr = a;
    var b = this.m();
    b && this.M.wq(b, a)
  };
  z.e.W = function() {
    return this.xb
  };
  z.e.F = function(a, b) {
    if (b || this.xb != a && this.dispatchEvent(a ? "show" : "hide")) {
      var c = this.m();
      c && this.M.F(c, a);
      this.isEnabled() && this.M.cf(this, a);
      this.xb = a;
      return !0
    }
    return !1
  };
  z.e.isEnabled = function() {
    return !(this.N & 1)
  };
  z.e.bb = function(a) {
    var b = this.getParent();
    b && "function" == typeof b.isEnabled && !b.isEnabled() || !hq(this, 1, !a) || (a || (this.setActive(!1), this.Uc(!1)), this.W() && this.M.cf(this, a), this.uc(1, !a, !0))
  };
  z.e.Uc = function(a) {
    hq(this, 2, a) && this.uc(2, a)
  };
  z.e.Dc = function() {
    return !!(this.N & 4)
  };
  z.e.setActive = function(a) {
    hq(this, 4, a) && this.uc(4, a)
  };
  z.e.rC = function(a) {
    hq(this, 8, a) && this.uc(8, a)
  };
  z.e.vg = function() {
    return !!(this.N & 16)
  };
  z.e.tc = function(a) {
    hq(this, 16, a) && this.uc(16, a)
  };
  z.e.Bb = function() {
    return !!(this.N & 64)
  };
  z.e.Jb = function(a) {
    hq(this, 64, a) && this.uc(64, a)
  };
  z.e.getState = function() {
    return this.N
  };
  z.e.uc = function(a, b, c) {
    c || 1 != a ? Xp(this, a) && b != !!(this.N & a) && (this.M.uc(this, a, b), this.N = b ? this.N | a : this.N & ~a) : this.bb(!b)
  };
  z.e.Zb = function(a, b) {
    if (this.wa && this.N & a && !b) throw Error("Component already rendered");
    !b && this.N & a && this.uc(a, !1);
    this.Rq = b ? this.Rq | a : this.Rq & ~a
  };
  z.e.Bd = function(a) {
    (!a.relatedTarget || !z.nf(this.m(), a.relatedTarget)) && this.dispatchEvent("enter") && this.isEnabled() && gq(this, 2) && this.Uc(!0)
  };
  z.e.nm = function(a) {
    a.relatedTarget && z.nf(this.m(), a.relatedTarget) || !this.dispatchEvent("leave") || (gq(this, 4) && this.setActive(!1), gq(this, 2) && this.Uc(!1))
  };
  z.e.Oo = z.r;
  z.e.ue = function(a) {
    this.isEnabled() && (gq(this, 2) && this.Uc(!0), z.Tc(a) && (gq(this, 4) && this.setActive(!0), this.M && this.M.wg(this) && this.ec().focus()));
    !this.Mr && z.Tc(a) && a.preventDefault()
  };
  z.e.Ef = function(a) {
    this.isEnabled() && (gq(this, 2) && this.Uc(!0), this.Dc() && this.$d(a) && gq(this, 4) && this.setActive(!1))
  };
  z.e.dH = function(a) {
    this.isEnabled() && this.$d(a)
  };
  z.e.$d = function(a) {
    gq(this, 16) && this.tc(!this.vg());
    gq(this, 8) && this.rC(!0);
    gq(this, 64) && this.Jb(!this.Bb());
    var b = new z.Lc("action", this);
    a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.FB = a.FB);
    return this.dispatchEvent(b)
  };
  z.e.te = function() {
    gq(this, 32) && hq(this, 32, !0) && this.uc(32, !0)
  };
  z.e.gd = function() {
    gq(this, 4) && this.setActive(!1);
    gq(this, 32) && hq(this, 32, !1) && this.uc(32, !1)
  };
  z.e.fc = function(a) {
    return this.W() && this.isEnabled() && this.Df(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
  };
  z.e.Df = function(a) {
    return 13 == a.keyCode && this.$d(a)
  };
  if (!z.qa(cq)) throw Error("Invalid component class " + cq);
  if (!z.qa(Up)) throw Error("Invalid renderer class " + Up);
  var eG = z.ta(cq);
  dq[eG] = Up;
  z.aq("goog-control", function() {
    return new cq(null)
  });
  z.y(fq, z.xc);
  fq.prototype.lm = function() {
    this.fs = !1
  };
  fq.prototype.tt = function() {
    this.fs = !0
  };
  fq.prototype.km = function(a) {
    if (this.fs) this.fs = !1;
    else {
      var b = a.nc,
        c = b.button,
        d = b.type;
      b.button = 0;
      b.type = "mousedown";
      this.ps.ue(new z.Pc(b, a.currentTarget));
      b.type = "mouseup";
      this.ps.Ef(new z.Pc(b, a.currentTarget));
      b.button = c;
      b.type = d
    }
  };
  fq.prototype.D = function() {
    this.ps = null;
    fq.v.D.call(this)
  };
  z.y(iq, z.$p);
  z.ka(iq);
  z.e = iq.prototype;
  z.e.zf = function() {};
  z.e.B = function(a) {
    a.Cq(!1);
    a.zj &= -256;
    a.Zb(32, !1);
    return a.K().B("BUTTON", {
      "class": this.og(a).join(" "),
      disabled: !a.isEnabled(),
      title: a.jm() || "",
      value: a.X() || ""
    }, a.nh() || "")
  };
  z.e.Ob = function(a) {
    return "BUTTON" == a.tagName || "INPUT" == a.tagName && ("button" == a.type || "submit" == a.type || "reset" == a.type)
  };
  z.e.w = function(a, b) {
    a.Cq(!1);
    a.zj &= -256;
    a.Zb(32, !1);
    if (b.disabled) {
      var c = this.Bo(1);
      z.hj(b, c)
    }
    return iq.v.w.call(this, a, b)
  };
  z.e.Ue = function(a) {
    a.o().g(a.m(), "click", a.$d)
  };
  z.e.wq = z.r;
  z.e.Sh = z.r;
  z.e.wg = function(a) {
    return a.isEnabled()
  };
  z.e.cf = z.r;
  z.e.uc = function(a, b, c) {
    iq.v.uc.call(this, a, b, c);
    (a = a.m()) && 1 == b && (a.disabled = c)
  };
  z.e.X = function(a) {
    return a.value
  };
  z.e.Da = function(a, b) {
    a && (a.value = b)
  };
  z.e.Qg = z.r;
  z.y(z.jq, cq);
  z.e = z.jq.prototype;
  z.e.X = function() {
    return this.De
  };
  z.e.Da = function(a) {
    this.De = a;
    this.M.Da(this.m(), a)
  };
  z.e.jm = function() {
    return this.$C
  };
  z.e.Kd = function(a) {
    this.$C = a;
    this.M.Kd(this.m(), a)
  };
  z.e.dj = z.m(28);
  z.e.D = function() {
    z.jq.v.D.call(this);
    delete this.De;
    delete this.$C
  };
  z.e.C = function() {
    z.jq.v.C.call(this);
    if (Xp(this, 32)) {
      var a = this.ec();
      a && this.o().g(a, "keyup", this.Df)
    }
  };
  z.e.Df = function(a) {
    return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.$d(a) : 32 == a.keyCode
  };
  z.aq("goog-button", function() {
    return new z.jq(null)
  });
  z.y(kq, Up);
  z.ka(kq);
  kq.prototype.B = function(a) {
    var b = a.K().B("SPAN", this.og(a).join(" "));
    lq(this, b, a.ri);
    return b
  };
  kq.prototype.w = function(a, b) {
    b = kq.v.w.call(this, a, b);
    var c = z.fj(b),
      d = qq;
    z.rb(c, mq(this, oq)) ? d = oq : z.rb(c, mq(this, pq)) ? d = pq : z.rb(c, mq(this, qq)) && (d = qq);
    a.ri = d;
    z.cj(b, "checked", d == oq ? "mixed" : d == pq ? "true" : "false");
    return b
  };
  kq.prototype.zf = function() {
    return "checkbox"
  };
  kq.prototype.V = function() {
    return "goog-checkbox"
  };
  z.y(rq, cq);
  var pq = !0,
    qq = !1,
    oq = null,
    nq = {
      LZ: pq,
      w_: qq,
      y_: oq
    };
  z.e = rq.prototype;
  z.e.Tb = null;
  z.e.vg = function() {
    return this.ri == pq
  };
  z.e.tc = function(a) {
    a != this.ri && (this.ri = a, lq(this.M, this.m(), this.ri))
  };
  z.e.toggle = function() {
    this.tc(this.ri ? qq : pq)
  };
  z.e.C = function() {
    rq.v.C.call(this);
    if (this.ek) {
      var a = this.o();
      this.Tb && a.g(this.Tb, "click", this.nz).g(this.Tb, "mouseover", this.Bd).g(this.Tb, "mouseout", this.nm).g(this.Tb, "mousedown", this.ue).g(this.Tb, "mouseup", this.Ef);
      a.g(this.m(), "click", this.nz)
    }
    a = this.h;
    if (this.Tb && a != this.Tb && z.tp(Ao(a))) {
      if (!this.Tb.id) {
        var b = this.Tb,
          c;
        c = this.se() + ".lbl";
        b.id = c
      }
      z.cj(a, "labelledby", this.Tb.id)
    }
  };
  z.e.bb = function(a) {
    rq.v.bb.call(this, a);
    if (a = this.m()) a.tabIndex = this.isEnabled() ? 0 : -1
  };
  z.e.nz = function(a) {
    a.stopPropagation();
    var b = this.ri ? "uncheck" : "check";
    this.isEnabled() && !a.target.href && this.dispatchEvent(b) && (a.preventDefault(), this.toggle(), this.dispatchEvent("change"))
  };
  z.e.Df = function(a) {
    32 == a.keyCode && (this.$d(a), this.nz(a));
    return !1
  };
  z.aq("goog-checkbox", function() {
    return new rq
  });
  z.y(z.sq, z.$p);
  z.ka(z.sq);
  z.e = z.sq.prototype;
  z.e.B = function(a) {
    var b = {
        "class": "goog-inline-block " + this.og(a).join(" ")
      },
      b = a.K().B("DIV", b, a.$a());
    this.Kd(b, a.jm());
    return b
  };
  z.e.zf = function() {
    return "button"
  };
  z.e.Ob = function(a) {
    return "DIV" == a.tagName
  };
  z.e.w = function(a, b) {
    z.hj(b, "goog-inline-block");
    return z.sq.v.w.call(this, a, b)
  };
  z.e.X = function() {
    return ""
  };
  z.e.V = function() {
    return "goog-flat-button"
  };
  z.aq("goog-flat-button", function() {
    return new z.jq(null, z.sq.aa())
  });
  z.y(tq, z.sq);
  z.ka(tq);
  tq.prototype.V = function() {
    return "goog-link-button"
  };
  z.aq("goog-link-button", function() {
    return new z.jq(null, tq.aa())
  });
  z.y(z.uq, z.G);
  z.e = z.uq.prototype;
  z.e.ek = !0;
  z.e.D = function() {
    z.uq.v.D.call(this);
    z.Cc(this.BI);
    z.Cc(this.YA)
  };
  z.e.zf = function() {
    return "tab"
  };
  z.e.S = function() {
    return this.Vl
  };
  z.e.expand = function() {
    this.Gc(!0)
  };
  z.e.collapse = function() {
    this.Gc(!1)
  };
  z.e.toggle = function() {
    this.Gc(!this.sb)
  };
  z.e.Gc = function(a) {
    this.Vl ? z.P(this.Vl, a) : a && this.du && (this.Vl = this.du());
    this.Vl && z.hj(this.Vl, "goog-zippy-content");
    this.Pj ? (z.P(this.hg, !a), z.P(this.Pj, a)) : this.hg && (z.zo(this.hg, "goog-zippy-expanded", a), z.zo(this.hg, "goog-zippy-collapsed", !a), z.cj(this.hg, "expanded", a));
    this.sb = a;
    this.dispatchEvent(new xq("toggle", this, this.sb))
  };
  z.e.hd = function() {
    return this.sb
  };
  z.e.Cq = function(a) {
    this.ek != a && ((this.ek = a) ? (vq(this, this.hg), vq(this, this.Pj)) : this.YA.removeAll())
  };
  z.e.eV = function(a) {
    if (13 == a.keyCode || 32 == a.keyCode) this.toggle(), this.dispatchEvent(new z.Lc("action", this)), a.preventDefault(), a.stopPropagation()
  };
  z.e.dV = function() {
    this.toggle();
    this.dispatchEvent(new z.Lc("action", this))
  };
  z.y(xq, z.Lc);
  z.y(z.yq, z.T);
  z.e = z.yq.prototype;
  z.e.B = function() {
    z.yq.v.B.call(this);
    var a = (0, window.$)(".activate-dialog-template").html();
    this.ca(a)
  };
  z.e.C = function() {
    z.yq.v.C.call(this);
    z.Sj(this, 420);
    this.Fa("激活帐号");
    this.Ga = (0, window.$)(this.pg()).addClass("activate-dialog");
    this.oc()
  };
  z.e.oc = function() {
    this.HD = (0, window.$)(".link-activate-view", this.Ga);
    this.yD = (0, window.$)(".code-activate-view", this.Ga);
    this.HD.length ? zq(this) : Bq(this)
  };
  z.e.FV = function(a) {
    var b = this,
      c = (0, window.$)(a);
    a = c.Fc();
    var d = a.account,
      f = this.Hf(d),
      g = f ? "/settings/account/send_new_email_digits" : "/settings/account/send_new_phone_digits";
    f ? this.Db(a, "account", "email") : this.Db(a, "account", "phone_no");
    return window.$.post(g, a, function(a) {
      a.success ? (c.hide(), (0, window.$)('input[name\x3d"account"]', b.vD).val(d), b.vD.show(), Dq(b, f)) : (a = a.payload.fields, f ? b.Db(a, "email", "account") : b.Db(a, "phone_no", "account"), c.data("validator").showErrors(a))
    })
  };
  z.e.HU = function(a) {
    var b = this,
      c = (0, window.$)(a);
    a = c.Fc();
    var d = this.Hf(a.account),
      f = d ? "/settings/account/update_email" : "/settings/account/update_phone";
    d ? this.Db(a, "account", "email") : this.Db(a, "account", "phone_no");
    return window.$.post(f, a, function(a) {
      a.success ? (b.ca("激活成功。你可以正常使用提问、回答、评论等功能啦！"), (0, window.setTimeout)(function() {
        window.location.reload()
      }, 1E3)) : (a = a.payload.fields, d ? b.Db(a, "email", "account") : b.Db(a, "phone_no", "account"), c.data("validator").showErrors(a))
    })
  };
  z.e.Db = function(a, b, c) {
    a[b] && (a[c] = a[b], delete a[b])
  };
  z.e.Hf = function(a) {
    return !/^\+?[0-9]+$/.test(a)
  };
  var Cq = {
    onkeyup: !1,
    onfocusout: !1,
    validClass: "",
    focusInvalid: !1,
    highlight: z.r,
    messages: {
      account: {
        required: "请填写手机号或邮箱"
      },
      digits: {
        required: "请填写验证码"
      }
    },
    errorPlacement: function(a, b) {
      var c = b.parent(".input-wrapper");
      a.appendTo(c).click(function() {
        b.focus()
      });
      b.focus(function() {
        a.remove()
      })
    }
  };
  z.n(Fq, z.G);
  Fq.prototype.D = function() {
    z.G.prototype.D.call(this);
    this.Ov && ((0, window.clearTimeout)(this.Ov), this.Ov = null)
  };
  Fq.prototype.Uu = function() {
    if (!this.promise || "pending" !== this.promise.state()) {
      var a = this.tO;
      this.promise = (window.$.support.cors ? window.$.ajax(a) : Eq(a)).done(this.onMessage.bind(this)).fail(this.hB.bind(this))
    }
  };
  Fq.prototype.onMessage = function(a) {
    try {
      this.dispatchEvent({
        type: "message",
        data: a
      })
    } catch (b) {}
    this.Ov = (0, window.setTimeout)(this.Uu.bind(this), this.tW)
  };
  Fq.prototype.hB = function() {
    this.dispatchEvent("error");
    this.ov < this.eJ && (this.ov = Math.min(this.ov * this.YS, this.eJ));
    this.Ov = (0, window.setTimeout)(this.Uu.bind(this), this.ov)
  };
  var Gq = {
    type: "GET",
    url: "",
    data: {},
    timeout: 6E4,
    xhrFields: {
      withCredentials: !0
    }
  };
  z.n(z.Hq, z.Q);
  z.Hq.prototype.B = function() {
    this.h = z.M("div", {
      innerHTML: (0, window.$)(".unblock-dialog-template").html()
    })
  };
  z.Hq.prototype.C = function() {
    z.Q.prototype.C.call(this);
    this.jl = (0, window.$)(".unblock-dialog-loading", this.h);
    this.hl = (0, window.$)(".unblock-dialog-error", this.h);
    this.Hw = (0, window.$)(".unblock-dialog-view", this.h);
    Iq(this);
    this.Uz();
    this.Rn();
    Pq(this)
  };
  z.Hq.prototype.Uz = function() {
    this.captcha = new z.ck("antispam");
    this.captcha.w((0, window.$)(".unblock-dialog-captcha", this.h).get(0))
  };
  z.Hq.prototype.Rn = function() {
    Jq(this);
    Nq(this);
    Oq(this)
  };
  z.n(Qq, z.T);
  Qq.prototype.B = function() {
    z.T.prototype.B.call(this);
    this.Fa("帐号解封");
    z.Kj(this, null);
    this.Ae(!0)
  };
  Qq.prototype.C = function() {
    var a = this;
    z.T.prototype.C.call(this);
    this.eD = new z.Hq(function(b) {
      return a.Fa(b)
    }, !0);
    z.Ac(this, this.eD);
    this.eD.render(this.S());
    this.eD.g("complete", function() {
      return a.F(!1)
    })
  };
  z.y(Sq, z.G);
  var Tq = 0;
  Sq.prototype.Dg = function() {
    this.vd("begin")
  };
  Sq.prototype.Eg = function() {
    this.vd("end")
  };
  Sq.prototype.vd = function(a) {
    this.dispatchEvent(a)
  };
  z.y(Uq, z.xc);
  z.e = Uq.prototype;
  z.e.tb = 0;
  z.e.D = function() {
    Uq.v.D.call(this);
    this.stop();
    delete this.yk;
    delete this.ea
  };
  z.e.start = function(a) {
    this.stop();
    this.tb = z.vd(this.El, z.ja(a) ? a : this.uh)
  };
  z.e.stop = function() {
    this.Dc() && z.wd(this.tb);
    this.tb = 0
  };
  z.e.fire = function() {
    this.stop();
    this.hh()
  };
  z.e.Dc = function() {
    return 0 != this.tb
  };
  z.e.hh = function() {
    this.tb = 0;
    this.yk && this.yk.call(this.ea)
  };
  var Xq = {},
    Yq = null;
  z.y(br, Sq);
  z.e = br.prototype;
  z.e.jh = function(a) {
    this.mj = a
  };
  z.e.play = function(a) {
    if (a || this.N == Tq) this.progress = 0, this.coords = this.Nq;
    else if (1 == this.N) return !1;
    Wq(this);
    this.startTime = a = (0, z.H)(); - 1 == this.N && (this.startTime -= this.duration * this.progress);
    this.endTime = this.startTime + this.duration;
    this.progress || this.Dg();
    this.vd("play"); - 1 == this.N && this.vd("resume");
    this.N = 1;
    var b = z.ta(this);
    b in Xq || (Xq[b] = this);
    Zq();
    ar(this, a);
    return !0
  };
  z.e.stop = function(a) {
    Wq(this);
    this.N = Tq;
    a && (this.progress = 1);
    cr(this, this.progress);
    this.vd("stop");
    this.Eg()
  };
  z.e.pause = function() {
    1 == this.N && (Wq(this), this.N = -1, this.vd("pause"))
  };
  z.e.D = function() {
    this.N == Tq || this.stop(!1);
    this.vd("destroy");
    br.v.D.call(this)
  };
  z.e.destroy = function() {
    this.dispose()
  };
  z.e.dB = function() {
    this.vd("animate")
  };
  z.e.vd = function(a) {
    this.dispatchEvent(new dr(a, this))
  };
  z.y(dr, z.Lc);
  var jr = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
  };
  var kr = /#(.)(.)(.)/,
    fr = /^#(?:[0-9a-f]{3}){1,2}$/i,
    lr = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;
  z.y(mr, br);
  z.e = mr.prototype;
  z.e.$h = z.r;
  z.e.Ed = function() {
    z.ja(this.Jg) || (this.Jg = z.Og(this.element));
    return this.Jg
  };
  z.e.dB = function() {
    this.$h();
    mr.v.dB.call(this)
  };
  z.e.Eg = function() {
    this.$h();
    mr.v.Eg.call(this)
  };
  z.e.Dg = function() {
    this.$h();
    mr.v.Dg.call(this)
  };
  z.y(nr, mr);
  nr.prototype.$h = function() {
    var a = this.mj && this.Ed() ? "right" : "left";
    this.element.style[a] = Math.round(this.coords[0]) + "px";
    this.element.style.top = Math.round(this.coords[1]) + "px"
  };
  z.y(or, mr);
  or.prototype.$h = function() {
    if (this.mj) {
      var a = this.element,
        b = Math.round(this.coords[0]),
        b = Math.max(b, 0);
      z.Og(a) ? z.B ? a.scrollLeft = -b : z.Kl && z.E("8") ? a.scrollLeft = b : a.scrollLeft = a.scrollWidth - b - a.clientWidth : a.scrollLeft = b
    } else this.element.scrollLeft = Math.round(this.coords[0]);
    this.element.scrollTop = Math.round(this.coords[1])
  };
  z.y(pr, mr);
  pr.prototype.$h = function() {
    this.element.style.width = Math.round(this.coords[0]) + "px"
  };
  z.y(qr, mr);
  qr.prototype.$h = function() {
    this.element.style.height = Math.round(this.coords[0]) + "px"
  };
  z.y(rr, mr);
  var fG = 1 / 1024,
    sr = -1;
  z.e = rr.prototype;
  z.e.$h = function() {
    var a = this.coords[0];
    Math.abs(a - this.au) >= fG && (z.Lg(this.element, a), this.au = a)
  };
  z.e.Dg = function() {
    this.au = sr;
    rr.v.Dg.call(this)
  };
  z.e.Eg = function() {
    this.au = sr;
    rr.v.Eg.call(this)
  };
  z.e.show = function() {
    this.element.style.display = ""
  };
  z.e.hide = function() {
    this.element.style.display = "none"
  };
  z.y(tr, rr);
  tr.prototype.Dg = function() {
    this.show();
    tr.v.Dg.call(this)
  };
  tr.prototype.Eg = function() {
    this.hide();
    tr.v.Eg.call(this)
  };
  z.y(ur, rr);
  ur.prototype.Dg = function() {
    this.show();
    ur.v.Dg.call(this)
  };
  z.y(vr, mr);
  vr.prototype.$h = function() {
    for (var a = [], b = 0; b < this.coords.length; b++) a[b] = Math.round(this.coords[b]);
    this.element.style.backgroundColor = "rgb(" + a.join(",") + ")"
  };
  var gG = {
      hidden: "visibilitychange",
      msHidden: "msvisibilitychange",
      mozHidden: "mozvisibilitychange",
      webkitHidden: "webkitvisibilitychange"
    },
    Hr;
  a: {
    var hG = function(a, b) {
        return b in window.document
      },
      iG;
    for (iG in gG)
      if (hG.call(void 0, 0, iG)) {
        Hr = iG;
        break a
      }
    Hr = void 0
  }
  var Ir = gG[Hr],
    Gr = z.ja(Hr);
  z.Tr = function(a) {
    return function(b) {
      return b.replace(a, "")
    }
  }(/^⁠+|⁠+$/);
  z.Nr.prototype.add = function(a, b) {
    !1 === this.ET ? this.data.set(a, b) : this.data.set((0, window.encodeURIComponent)(a), (0, window.encodeURIComponent)(b))
  };
  z.Nr.prototype.Vd = function() {
    var a = [];
    z.A(this.data.zd(), function(b) {
      a.push(b + "\x3d" + this.data.get(b))
    }, this);
    return a.join("\x26")
  };
  z.lw = function() {
    function a(a) {
      return a.replace(/\\\\/g, "\\").replace(/\\'/g, "'")
    }
    var b = {
        yY: {
          evaluate: /<%([\s\S]+?)%>/g,
          vT: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g
        },
        escape: function(a) {
          return ("" + a).replace(/&/g, "\x26amp;").replace(/</g, "\x26lt;").replace(/>/g, "\x26gt;").replace(/"/g, "\x26quot;").replace(/'/g, "\x26#x27;").replace(/\//g, "\x26#x2F;")
        }
      },
      c = /.^/;
    return function(d, f) {
      var g = b.yY,
        g = "var __p\x3d[],print\x3dfunction(){__p.push.apply(__p,arguments);};with(data||{}){__p.push('" + d.replace(/\\/g,
          "\\\\").replace(/'/g, "\\'").replace(g.escape || c, function(b, c) {
          return "',_.escape(" + a(c) + "),'"
        }).replace(g.vT || c, function(b, c) {
          return "'," + a(c) + ",'"
        }).replace(g.evaluate || c, function(b, c) {
          return "');" + a(c).replace(/[\r\n\t]/g, " ") + ";__p.push('"
        }).replace(/\r/g, "\\r").replace(/\n/g, "\\n").replace(/\t/g, "\\t") + "');}return __p.join('');",
        h = new Function("data", "_", g);
      return f ? h(f, b) : function(a) {
        return h.call(this, a, b)
      }
    }
  }();
  z.Ur.defaults = {
    paddingTop: 0
  };
  var Wr = {
    offsetTop: 0,
    paddingTop: 0,
    cx: !1
  };
  (0, window.$)(function() {
    Wr.paddingTop = z.Rg(window.document.body).top
  });
  z.jG = z.Pj(function() {
    return (+new Date).toString(32).slice(-5) + Math.random().toString(32).slice(-3)
  });
  z.y(z.as, z.Wj);
  z.as.prototype.qM = function() {
    return bs(this)
  };
  z.ka(ds);
  z.e = ds.prototype;
  z.e.zf = function() {
    return this.hx
  };
  z.e.B = function(a) {
    return a.K().B("DIV", this.og(a).join(" "))
  };
  z.e.S = function(a) {
    return a
  };
  z.e.Ob = function(a) {
    return "DIV" == a.tagName
  };
  z.e.w = function(a, b) {
    b.id && Tn(a, b.id);
    var c = this.V(),
      d = !1,
      f = z.fj(b);
    f && z.A(f, function(b) {
      b == c ? d = !0 : b && (b == c + "-disabled" ? a.bb(!1) : b == c + "-horizontal" ? a.setOrientation(z.kG) : b == c + "-vertical" && a.setOrientation(Vz))
    }, this);
    d || z.hj(b, c);
    fs(this, a, this.S(b));
    return b
  };
  z.e.Co = function(a) {
    a: {
      var b;a = z.fj(a);
      for (var c = 0, d = a.length; c < d; c++)
        if (b = a[c], b = b in bq ? bq[b]() : null) {
          a = b;
          break a
        }
      a = null
    }
    return a
  };
  z.e.Ue = function(a) {
    a = a.m();
    z.Do(a, !0, z.B);
    z.C && (a.hideFocus = !0);
    var b = this.zf();
    b && z.bj(a, b)
  };
  z.e.ec = function(a) {
    return a.m()
  };
  z.e.V = function() {
    return "goog-container"
  };
  z.e.og = function(a) {
    var b = this.V(),
      c = [b, a.Ub == z.kG ? b + "-horizontal" : b + "-vertical"];
    a.isEnabled() || c.push(b + "-disabled");
    return c
  };
  z.e.OG = function() {
    return Vz
  };
  var Vz;
  z.y(z.gs, z.Q);
  z.kG = "horizontal";
  Vz = "vertical";
  z.e = z.gs.prototype;
  z.e.vA = null;
  z.e.Cb = null;
  z.e.M = null;
  z.e.Ub = null;
  z.e.xb = !0;
  z.e.lc = !0;
  z.e.Py = !0;
  z.e.Ya = -1;
  z.e.rc = null;
  z.e.Mf = !1;
  z.e.vO = !1;
  z.e.WV = !0;
  z.e.ah = null;
  z.e.ec = function() {
    return this.vA || this.M.ec(this)
  };
  z.e.ft = function() {
    return this.Cb || (this.Cb = new Sp(this.ec()))
  };
  z.e.B = function() {
    this.h = this.M.B(this)
  };
  z.e.S = function() {
    return this.M.S(this.m())
  };
  z.e.Ob = function(a) {
    return this.M.Ob(a)
  };
  z.e.T = function(a) {
    this.h = this.M.w(this, a);
    "none" == a.style.display && (this.xb = !1)
  };
  z.e.C = function() {
    z.gs.v.C.call(this);
    z.dh(this, function(a) {
      a.wa && is(this, a)
    }, this);
    var a = this.m();
    this.M.Ue(this);
    this.F(this.xb, !0);
    this.o().g(this, "enter", this.rz).g(this, "highlight", this.uz).g(this, "unhighlight", this.Dz).g(this, "open", this.jS).g(this, "close", this.oz).g(a, "mousedown", this.ue).g(z.Ke(a), "mouseup", this.uR).g(a, ["mousedown", "mouseup", "mouseover", "mouseout", "contextmenu"], this.nR);
    this.wg() && hs(this, !0)
  };
  z.e.Ab = function() {
    this.Eb(-1);
    this.rc && this.rc.Jb(!1);
    this.Mf = !1;
    z.gs.v.Ab.call(this)
  };
  z.e.D = function() {
    z.gs.v.D.call(this);
    this.Cb && (this.Cb.dispose(), this.Cb = null);
    this.M = this.rc = this.ah = this.vA = null
  };
  z.e.rz = function() {
    return !0
  };
  z.e.uz = function(a) {
    var b = Rn(this, a.target);
    if (-1 < b && b != this.Ya) {
      var c = js(this);
      c && c.Uc(!1);
      this.Ya = b;
      c = js(this);
      this.Mf && c.setActive(!0);
      this.WV && this.rc && c != this.rc && (Xp(c, 64) ? c.Jb(!0) : this.rc.Jb(!1))
    }
    b = this.m();
    null != a.target.m() && z.cj(b, "activedescendant", a.target.m().id)
  };
  z.e.Dz = function(a) {
    a.target == js(this) && (this.Ya = -1);
    this.m().removeAttribute("aria-activedescendant")
  };
  z.e.jS = function(a) {
    (a = a.target) && a != this.rc && a.getParent() == this && (this.rc && this.rc.Jb(!1), this.rc = a)
  };
  z.e.oz = function(a) {
    a.target == this.rc && (this.rc = null);
    var b = this.m(),
      c = a.target.m();
    b && a.target.N & 2 && c && Bo(b, c)
  };
  z.e.ue = function(a) {
    this.lc && (this.Mf = !0);
    var b = this.ec();
    b && Jn(b) ? b.focus() : a.preventDefault()
  };
  z.e.uR = function() {
    this.Mf = !1
  };
  z.e.nR = function(a) {
    var b;
    a: {
      b = a.target;
      if (this.ah)
        for (var c = this.m(); b && b !== c;) {
          var d = b.id;
          if (d in this.ah) {
            b = this.ah[d];
            break a
          }
          b = b.parentNode
        }
      b = null
    }
    if (b) switch (a.type) {
      case "mousedown":
        b.ue(a);
        break;
      case "mouseup":
        b.Ef(a);
        break;
      case "mouseover":
        b.Bd(a);
        break;
      case "mouseout":
        b.nm(a);
        break;
      case "contextmenu":
        b.Oo(a)
    }
  };
  z.e.te = function() {};
  z.e.gd = function() {
    this.Eb(-1);
    this.Mf = !1;
    this.rc && this.rc.Jb(!1)
  };
  z.e.fc = function(a) {
    return this.isEnabled() && this.W() && (0 != z.bh(this) || this.vA) && this.Df(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
  };
  z.e.Df = function(a) {
    var b = js(this);
    if (b && "function" == typeof b.fc && b.fc(a) || this.rc && this.rc != b && "function" == typeof this.rc.fc && this.rc.fc(a)) return !0;
    if (a.shiftKey || a.ctrlKey || a.metaKey || a.altKey) return !1;
    switch (a.keyCode) {
      case 27:
        if (this.wg()) this.ec().blur();
        else return !1;
        break;
      case 36:
        z.ks(this);
        break;
      case 35:
        ms(this);
        break;
      case 38:
        if (this.Ub == Vz) os(this);
        else return !1;
        break;
      case 37:
        if (this.Ub == z.kG) this.Ed() ? ns(this) : os(this);
        else return !1;
        break;
      case 40:
        if (this.Ub == Vz) ns(this);
        else return !1;
        break;
      case 39:
        if (this.Ub == z.kG) this.Ed() ? os(this) : ns(this);
        else return !1;
        break;
      default:
        return !1
    }
    return !0
  };
  z.e.L = function(a, b) {
    z.gs.v.L.call(this, a, b)
  };
  z.e.pl = function(a, b, c) {
    a.Wk |= 2;
    a.Wk |= 64;
    !this.wg() && this.vO || a.Zb(32, !1);
    a.Cq(!1);
    var d = a.getParent() == this ? Rn(this, a) : -1;
    z.gs.v.pl.call(this, a, b, c);
    a.wa && this.wa && is(this, a);
    a = d; - 1 == a && (a = z.bh(this));
    a == this.Ya ? this.Ya = Math.min(z.bh(this) - 1, b) : a > this.Ya && b <= this.Ya ? this.Ya++ : a < this.Ya && b > this.Ya && this.Ya--
  };
  z.e.removeChild = function(a, b) {
    if (a = z.oa(a) ? z.ah(this, a) : a) {
      var c = Rn(this, a); - 1 != c && (c == this.Ya ? (a.Uc(!1), this.Ya = -1) : c < this.Ya && this.Ya--);
      (c = a.m()) && c.id && this.ah && z.Kb(this.ah, c.id)
    }
    a = z.gs.v.removeChild.call(this, a, b);
    a.Cq(!0);
    return a
  };
  z.e.setOrientation = function(a) {
    if (this.m()) throw Error("Component already rendered");
    this.Ub = a
  };
  z.e.W = function() {
    return this.xb
  };
  z.e.F = function(a, b) {
    if (b || this.xb != a && this.dispatchEvent(a ? "show" : "hide")) {
      this.xb = a;
      var c = this.m();
      c && (z.P(c, a), this.wg() && es(this.ec(), this.lc && this.xb), b || this.dispatchEvent(this.xb ? "aftershow" : "afterhide"));
      return !0
    }
    return !1
  };
  z.e.isEnabled = function() {
    return this.lc
  };
  z.e.bb = function(a) {
    this.lc != a && this.dispatchEvent(a ? "enable" : "disable") && (a ? (this.lc = !0, z.dh(this, function(a) {
      a.KM ? delete a.KM : a.bb(!0)
    })) : (z.dh(this, function(a) {
      a.isEnabled() ? a.bb(!1) : a.KM = !0
    }), this.Mf = this.lc = !1), this.wg() && es(this.ec(), a && this.xb))
  };
  z.e.wg = function() {
    return this.Py
  };
  z.e.cf = function(a) {
    a != this.Py && this.wa && hs(this, a);
    this.Py = a;
    this.lc && this.xb && es(this.ec(), a)
  };
  z.e.Eb = function(a) {
    (a = z.ch(this, a)) ? a.Uc(!0): -1 < this.Ya && js(this).Uc(!1)
  };
  z.e.Uc = function(a) {
    this.Eb(Rn(this, a))
  };
  z.e.ZE = function(a) {
    return a.W() && a.isEnabled() && Xp(a, 2)
  };
  z.y(ps, z.Q);
  ps.prototype.Ha = function(a) {
    this.jw.push(a);
    a.Fb(this)
  };
  ps.prototype.C = function() {
    ps.v.C.call(this);
    this.o().g(this, "toggle", this.yS)
  };
  ps.prototype.yS = function(a) {
    z.A(this.jw, function(b) {
      a.target !== b && b.hd() && b.Gc(!1, !0)
    }, this)
  };
  ps.prototype.D = function() {
    ps.v.D.call(this);
    z.A(this.jw, function(a) {
      a.dispose()
    }, this);
    this.jw = []
  };
  z.qs.prototype.Yi = function(a, b, c) {
    if (this.pD) {
      var d = this.Na,
        f = rs(a, b, d);
      0 == f.length && (f = ss(a, b, d));
      b = f
    } else b = rs(a, b, this.Na);
    c(a, b)
  };
  var us, ws;
  z.y(z.ts, z.G);
  z.e = z.ts.prototype;
  z.e.Ak = 10;
  z.e.On = !0;
  z.e.uE = !1;
  z.e.QM = !1;
  z.e.iM = !1;
  us = "hilite";
  z.vs = "select";
  z.xs = "dismiss";
  ws = "canceldismiss";
  z.e = z.ts.prototype;
  z.e.getToken = function() {
    return this.cc
  };
  z.e.handleEvent = function(a) {
    var b = this.Xd;
    if (a.target == this.M) switch (a.type) {
      case us:
        this.ug(a.Zi);
        break;
      case z.vs:
        var c = !1;
        if (z.pa(a.Zi)) {
          a = a.Zi;
          var d = this.Na[Bs(this, a)],
            c = !!d && b.sA && b.sA(d);
          d && !c && this.sh != a && this.ug(a)
        }
        c || this.bj();
        break;
      case ws:
        z.As(this);
        break;
      case z.xs:
        this.Jj()
    }
  };
  z.e.Gq = function(a, b) {
    this.cc != a && (this.cc = a, this.Xd.Yi(this.cc, this.Ak, (0, z.t)(this.mU, this), b), z.As(this))
  };
  z.e.iz = function() {
    return this.Ic
  };
  z.e.Bb = function() {
    return this.M.W()
  };
  z.e.ug = function(a) {
    var b = Bs(this, a),
      c = this.Na[b];
    return c && this.Xd.sA && this.Xd.sA(c) ? !1 : (this.sh = a, this.M.ug(a), -1 != b)
  };
  z.e.bj = function() {
    var a = Bs(this, this.sh);
    if (-1 != a) {
      var b = this.Na[a],
        c = this.Sf.cj(b);
      this.iM ? (this.cc = null, this.Jj()) : this.Mc();
      c || (this.dispatchEvent({
        type: "update",
        Zi: b,
        index: a
      }), this.iM && this.Sf.update(!0));
      return !0
    }
    this.Mc();
    this.dispatchEvent({
      type: "update",
      Zi: null,
      index: null
    });
    return !1
  };
  z.e.Mc = function() {
    this.sh = -1;
    this.cc = null;
    this.dd += this.Na.length;
    this.Na = [];
    window.clearTimeout(this.ke);
    this.ke = null;
    this.M.Mc();
    this.dispatchEvent("suggestionsupdate");
    this.dispatchEvent(z.xs)
  };
  z.e.Jj = function() {
    this.ke || (this.ke = window.setTimeout((0, z.t)(this.Mc, this), 100))
  };
  z.e.QH = function() {
    return this.ke ? (window.clearTimeout(this.ke), this.ke = null, !0) : !1
  };
  z.e.D = function() {
    z.ts.v.D.call(this);
    delete this.bI;
    this.M.dispose();
    this.Sf.dispose();
    this.Xd = null
  };
  z.e.mU = function(a, b, c) {
    this.cc == a && this.Wm(b, c)
  };
  z.e.Wm = function(a, b) {
    var c = "object" == z.la(b) && b,
      d = (c ? c.Y_() : b) ? Bs(this, this.sh) : -1;
    this.dd += this.Na.length;
    this.Na = a;
    for (var f = [], g = 0; g < a.length; ++g) f.push({
      id: this.dd + g,
      data: a[g]
    });
    g = null;
    this.Ic && (g = this.bI[z.ta(this.Ic)] || this.Ic);
    this.M.wE = g;
    this.M.Wm(f, this.cc, this.Ic);
    g = this.On;
    c && void 0 !== c.TQ() && (g = c.TQ());
    this.sh = -1;
    (g || 0 <= d) && 0 != f.length && this.cc && (0 <= d ? this.ug(this.dd + d) : z.ys(this));
    this.dispatchEvent("suggestionsupdate")
  };
  z.e.tl = function(a) {
    var b = this.Sf;
    b.tl.apply(b, arguments)
  };
  z.e.update = function(a) {
    this.Sf.update(a)
  };
  z.y(z.Hs, z.xc);
  var lG = (z.Ui || z.Uj) && !z.E("533.17.9");
  z.e = z.Hs.prototype;
  z.e.vZ = !0;
  z.e.RQ = !0;
  z.e.tM = !1;
  z.e.RX = !0;
  z.e.QX = !0;
  z.e.Pw = null;
  z.e.kb = null;
  z.e.Bp = "";
  z.e.nj = !1;
  z.e.cC = !1;
  z.e.pM = !0;
  z.e.at = function() {
    return this.Y
  };
  z.e.cm = function() {
    return this.kb
  };
  z.e.X = function() {
    return this.kb.value
  };
  z.e.Da = function(a) {
    this.kb.value = a
  };
  z.e.Sr = function(a) {
    z.lf(a) && (z.bj(a, "combobox"), z.cj(a, "autocomplete", "list"));
    this.kc.g(a, "focus", this.te);
    this.kc.g(a, "blur", this.gd);
    this.kb || (this.Mw.g(a, "keydown", this.gV), z.lf(a) && In(z.Ke(a)) == a && Ns(this, a))
  };
  z.e.tl = function(a) {
    for (var b = 0; b < arguments.length; b++) this.Sr(arguments[b])
  };
  z.e.cj = function(a, b) {
    this.kb && Is(this, a.toString(), b);
    return !1
  };
  z.e.D = function() {
    z.Hs.v.D.call(this);
    null != this.Pw && window.clearTimeout(this.Pw);
    this.kc.dispose();
    delete this.kc;
    this.Mw.dispose();
    this.Cb.dispose();
    z.Cc(this.ka)
  };
  z.e.fc = function(a) {
    switch (a.keyCode) {
      case 40:
        if (this.Y.Bb()) return this.tM ? zs(this.Y) : z.ys(this.Y), a.preventDefault(), !0;
        if (!this.Hm) return this.update(!0), a.preventDefault(), !0;
        break;
      case 38:
        if (this.Y.Bb()) return this.tM ? z.ys(this.Y) : zs(this.Y), a.preventDefault(), !0;
        break;
      case 9:
        if (!this.Y.Bb() || a.shiftKey || this.EW) this.Y.Mc();
        else if (this.update(), this.Y.bj() && this.DW) return a.preventDefault(), !0;
        break;
      case 13:
        if (this.Y.Bb()) {
          if (this.update(), this.Y.bj()) return a.preventDefault(), a.stopPropagation(), !0
        } else this.Y.Mc();
        break;
      case 27:
        if (this.Y.Bb()) return this.Y.Mc(), a.preventDefault(), a.stopPropagation(), !0;
        break;
      case 229:
        if (!this.nj) return this.nj || (this.kc.g(this.kb, "keyup", this.RJ), this.kc.g(this.kb, "keypress", this.QJ), this.nj = !0), !0;
        break;
      default:
        this.ka && !this.pM && (this.ka.stop(), this.ka.start())
    }
    return Ls(this, a)
  };
  z.e.qt = function() {
    return !1
  };
  z.e.te = function(a) {
    Ns(this, a.target || null)
  };
  z.e.gd = function() {
    lG ? this.Pw = window.setTimeout((0, z.t)(this.wK, this), 0) : this.wK()
  };
  z.e.wK = function() {
    this.kb && (this.kc.oa(this.Cb, "key", this.Xp), this.Cb.detach(), this.kc.oa(this.kb, "keyup", this.qt), this.kc.oa(this.kb, "mousedown", this.SJ), z.C && this.kc.oa(this.kb, "keypress", this.PJ), this.nj && Os(this), this.kb = null, this.ka && (this.ka.stop(), this.kc.oa(this.ka, "tick", this.$p)), this.Y && this.Y.Jj())
  };
  z.e.$p = function() {
    this.update()
  };
  z.e.gV = function(a) {
    this.te(a)
  };
  z.e.Xp = function(a) {
    this.FI = a.keyCode;
    this.Y && this.fc(a)
  };
  z.e.QJ = function() {
    this.nj && 229 != this.FI && Os(this)
  };
  z.e.RJ = function(a) {
    this.nj && (13 == a.keyCode || 77 == a.keyCode && a.ctrlKey) && Os(this)
  };
  z.e.SJ = function(a) {
    this.Y && this.ue(a)
  };
  z.e.ue = function() {};
  z.e.PJ = function(a) {
    Ls(this, a)
  };
  z.e.update = function(a) {
    if (this.kb && (a || this.X() != this.Bp)) {
      if (a || !this.cC) {
        a = z.Cs(this.kb)[0];
        var b = this.X();
        a = Ks(this, b)[Js(this, b, a)];
        a = this.jM ? String(a).replace(this.jM, "") : a;
        this.Y && (this.Y.Ic = this.kb, this.Y.Gq(a, this.X()))
      }
      this.Bp = this.X()
    }
    this.cC = !1
  };
  z.y(z.Ps, z.xc);
  z.e = z.Ps.prototype;
  z.e.lJ = "GET";
  z.e.Ac = void 0;
  z.e.MS = null;
  z.e.DA = null;
  z.e.qC = function(a) {
    this.lJ = a
  };
  z.e.ca = function(a) {
    this.Ac = a
  };
  z.e.AZ = function(a, b, c) {
    c = z.te(c.target);
    var d = [];
    if (c) try {
      d = Yo(c)
    } catch (f) {}
    b(a, d)
  };
  z.e.Yi = function(a, b, c) {
    var d, f = this.pD;
    d = new z.th(this.jD);
    z.vh(d);
    d.ze.set("token", a);
    b = String(b);
    z.vh(d);
    d.ze.set("max_matches", b);
    f = String(Number(f));
    z.vh(d);
    d.ze.set("use_similar", f);
    if (d = d.toString()) a = (0, z.t)(this.AZ, this, a, c), this.da.Dc() && this.da.abort(), this.DA && z.nd(this.DA), this.DA = z.ld(this.da, "success", a), this.da.send(d, this.lJ, this.Ac, this.MS)
  };
  z.e.D = function() {
    this.da.dispose();
    z.Ps.v.D.call(this)
  };
  z.y(z.Us, z.G);
  z.e = z.Us.prototype;
  z.e.m = function() {
    return this.h
  };
  z.e.Lg = function(a) {
    this.yM = a
  };
  z.e.$s = function() {
    return this.wE
  };
  z.e.Wm = function(a, b, c) {
    this.cc = b;
    this.Na = a;
    this.vm = -1;
    this.BL = (0, z.H)();
    this.Ic = c;
    this.bf = [];
    Ys(this)
  };
  z.e.Mc = function() {
    this.xb && (this.xb = !1, Vs(this, !1), 0 < this.Jp ? (z.Cc(this.rl), this.rl = new tr(this.h, this.Jp), this.rl.play()) : z.P(this.h, !1))
  };
  z.e.show = function() {
    this.xb || (this.xb = !0, Vs(this, !0), 0 < this.Jp ? (z.Cc(this.rl), this.rl = new ur(this.h, this.Jp), this.rl.play()) : z.P(this.h, !0))
  };
  z.e.W = function() {
    return this.xb
  };
  z.e.ug = function(a) {
    if (-1 == a) Ws(this, -1);
    else
      for (var b = 0; b < this.Na.length; b++)
        if (this.Na[b].id == a) {
          Ws(this, b);
          break
        }
  };
  z.e.ga = function() {
    if (this.Ic && this.oq) {
      var a = this.wE || this.Ic,
        b;
      b = this.rX ? 3 : 1;
      this.Vv && (b ^= 1);
      var c = 65;
      this.wL && (this.h.style.height = "", c |= 32);
      z.Qs(a, b, this.h, b ^ 1, null, null, c);
      this.Vv && (this.h.style.visibility = "visible")
    }
  };
  z.e.iz = function() {
    return this.Ic || null
  };
  z.e.D = function() {
    this.h && (z.md(this.h, "click", this.km, !1, this), z.md(this.h, "mousedown", this.lm, !1, this), z.md(this.h, "mouseover", this.lH, !1, this), this.ba.removeNode(this.h), this.h = null, this.xb = !1);
    z.Cc(this.rl);
    this.Ta = null;
    z.Us.v.D.call(this)
  };
  z.e.OK = function(a, b, c) {
    z.of(c, a.data.toString())
  };
  z.e.km = function(a) {
    var b = bt(this, a.target);
    0 <= b && this.dispatchEvent({
      type: z.vs,
      Zi: this.Na[b].id
    });
    a.stopPropagation()
  };
  z.e.lm = function(a) {
    a.stopPropagation();
    a.preventDefault()
  };
  z.e.lH = function(a) {
    a = bt(this, a.target);
    0 <= a && !(300 > (0, z.H)() - this.BL) && this.dispatchEvent({
      type: us,
      Zi: this.Na[a].id
    })
  };
  z.y(z.ct, z.ts);
  z.ct.prototype.Lg = function(a) {
    this.M.Lg(a)
  };
  z.ct.prototype.qC = function(a) {
    this.Xd.qC(a)
  };
  z.ct.prototype.ca = function(a) {
    this.Xd.ca(a)
  };
  z.y(z.dt, z.ct);
  z.dt.prototype.defaults = {
    source: "",
    xe: 10,
    nZ: !1,
    filter: null,
    format: null,
    gA: null,
    delay: 300,
    separator: null,
    aQ: null,
    multiple: !1,
    Wi: null,
    o0: null,
    placeholder: "",
    ld: null,
    render: null
  };
  z.dt.prototype.defaults.format = function(a) {
    return function(b, c) {
      return (0, z.ab)(c) && z.ma(b) ? z.ma(b[0]) ? z.mb(b[0].slice(1), a, this) : b : []
    }
  }(function(a) {
    var b;
    return (b = mG[this.H.source]) || (b = mG[nG][a[0]]) ? b(a) : a
  });
  var nG = "/autocomplete",
    mG = {};
  mG[nG] = {
    topic: function(a) {
      return {
        type: a[0],
        name: a[1],
        url_token: a[2],
        avatar: a[3],
        id: a[4],
        answers: a[6],
        alias: a[7],
        raw: a,
        value: a[4],
        label: a[1]
      }
    },
    question: function(a) {
      return {
        type: a[0],
        title: a[1],
        id: a[2],
        url_token: a[3],
        answers: a[4],
        is_star: !!a[5],
        raw: a,
        label: a[1],
        value: a[2]
      }
    },
    people: function(a) {
      return {
        type: a[0],
        fullname: a[1],
        url_token: a[2],
        avatar: a[3],
        id: a[4],
        headline: a[5],
        badges: a[6],
        raw: a,
        label: a[1],
        value: a[4]
      }
    },
    search_link: function(a) {
      return {
        type: a[0],
        raw: a,
        label: a[1],
        value: a[1]
      }
    }
  };
  mG["/topic/autocomplete"] = function(a) {
    return {
      type: a[0],
      name: a[1],
      url_token: a[2],
      avatar: a[3],
      id: a[4],
      followers: a[5],
      alias: a[6],
      label: a[1]
    }
  };
  mG["/question/autocomplete"] = function(a) {
    return {
      type: a[0],
      title: a[1],
      id: a[2],
      url_token: a[3],
      is_duplicated: Boolean(+a[4]),
      answer_count: a[5],
      raw: a,
      label: a[1],
      value: a[2]
    }
  };
  z.y(et, z.Hs);
  et.prototype.gd = z.r;
  et.prototype.fc = z.r;
  et.prototype.cj = function() {
    return !1
  };
  z.y(z.ft, z.G);
  z.e = z.ft.prototype;
  z.e.oC = function(a) {
    this.KH = a
  };
  z.e.kL = z.m(30);
  z.e.init = function() {
    if (!this.lI) {
      for (var a = 0, b = this.cd.length; a < b; a++)
        for (var c = z.gf(this.cd[a]), d = 0, f = c.length; d < f; ++d) {
          var g = c[d],
            h = g,
            k = z.ta(h);
          this.ny[k] = g;
          this.oy && (this.U.g(g, "mouseover", this.CR), this.U.g(g, "mouseout", this.AR));
          this.fG && (this.U.g(h, "mouseover", this.zR), this.U.g(h, "mouseout", this.yR));
          this.Sl.push(g);
          this.U.g(h, ["mousedown", "touchstart"], this.oS)
        }
      this.lI = !0
    }
  };
  z.e.D = function() {
    this.U.dispose();
    for (var a = 0, b = this.cd.length; a < b; a++) {
      var c = this.cd[a];
      c.dG = void 0;
      c.Kj = void 0
    }
    this.cd.length = 0;
    this.Sl.length = 0;
    this.ny = null;
    it(this);
    z.ft.v.D.call(this)
  };
  z.e.oS = function(a) {
    var b = z.ta(a.currentTarget);
    this.Pa = this.ny[b];
    a: {
      for (var b = this.Pa, c = b.cloneNode(!0), d = b.getElementsByTagName("TEXTAREA"), f = c.getElementsByTagName("TEXTAREA"), g = 0; g < d.length; g++) f[g].value = d[g].value;
      switch (b.tagName) {
        case "TR":
          b = z.M("TABLE", null, z.M("TBODY", null, c));
          break a;
        case "TD":
        case "TH":
          b = z.M("TABLE", null, z.M("TBODY", null, z.M("TR", null, c)));
          break a;
        case "TEXTAREA":
          c.value = b.value;
        default:
          b = c
      }
    }
    this.Nc = b;
    this.Js && z.ij(this.Nc, this.Js || []);
    this.Nc.style.margin = "0";
    this.Nc.style.position =
      "absolute";
    this.Nc.style.visibility = "hidden";
    z.Ke(this.Pa).body.appendChild(this.Nc);
    b = z.ao(this.Pa);
    Fo(this.Nc, b);
    this.Pb = new z.oj(this.Nc);
    this.Pb.oC(this.KH);
    z.F(this.Pb, "start", this.pz, !1, this);
    z.F(this.Pb, "end", this.wR, !1, this);
    z.F(this.Pb, "earlycancel", this.Hx, !1, this);
    this.Pb.mn(a)
  };
  z.e.pz = function(a) {
    if (this.dispatchEvent(new qt("beforedragstart", 0, a.WE, this.Pa, 0, null))) {
      this.Nu = this.Pa.parentNode;
      this.FF = this.sB = So(this.Pa);
      this.Xx = this.Nu;
      this.Wx ? z.ij(this.Pa, this.Wx || []) : this.Pa.style.visibility = "hidden";
      var b = z.Jg(this.Nc);
      this.Nc.dR = b.width / 2;
      this.Nc.cR = b.height / 2;
      this.Nc.style.visibility = "";
      this.hD && (this.Pa.style.display = "none");
      ht(this, this.Pa);
      this.Pa.style.display = "";
      z.F(this.Pb, "drag", this.DR, !1, this);
      this.dispatchEvent(new qt("dragstart", 0, a.WE, this.Pa, 0, this.Pb))
    } else a.preventDefault(),
      this.Hx()
  };
  z.e.DR = function(a) {
    var b = z.ao(this.Nc),
      b = new z.Ge(b.x + this.Nc.dR, b.y + this.Nc.cR),
      c;
    a: {
      c = null;
      if ("none" != this.Pa.style.display) {
        c = this.Pa.parentNode;
        var d = Eo(c);
        if (jt(b, d)) break a
      }
      for (var d = 0, f = this.cd.length; d < f; d++) {
        var g = this.cd[d];
        if (g != c && jt(b, g.Rl)) {
          c = g;
          break a
        }
      }
      c = null
    }
    var h;
    if (c) {
      if (null == c) throw Error("getHoverNextItem_ called with null hoverList.");
      var k, l, d = !1,
        f = void 0;
      switch (c.dG) {
        case 0:
          h = b.y;
          k = lt;
          l = ot;
          break;
        case 4:
          d = !0;
        case 2:
          h = b.x;
          k = mt;
          l = ot;
          break;
        case 5:
          d = !0;
        case 3:
          h = b.x, k = nt, l = pt
      }
      for (var g =
          null, p, q = z.gf(c), v = 0, I = q.length; v < I; v++) {
        var K = q[v];
        if (K != this.Pa) {
          var O = k(K.Rl);
          if (d) {
            var ba = kt(K, b);
            z.ja(f) || (f = ba);
            l(h, O) && (void 0 == p || ba < f || ba == f && (l(O, p) || O == p)) && (g = K, p = O);
            ba < f && (f = ba)
          } else l(h, O) && (void 0 == p || l(O, p)) && (g = K, p = O)
        }
      }
      h = null !== g && kt(g, b) > f ? null : g
    } else h = null;
    if (!this.dispatchEvent(new qt("beforedragmove", 0, a, this.Pa, 0, this.Pb))) return !1;
    if (c) this.hD ? this.Pa.parentNode == c && So(this.Pa) == h || c.insertBefore(this.Pa, h) : h && (this.FF = h), this.Pa.style.display = "", c.Kj && z.hj(c, c.Kj);
    else
      for (this.zT ||
        (this.Pa.style.display = "none"), h = 0, k = this.cd.length; h < k; h++) l = this.cd[h], l.Kj && z.jj(l, l.Kj);
    c != this.Xx && (this.Xx = c, ht(this, this.Pa));
    this.dispatchEvent(new qt("dragmove", 0, a, this.Pa, 0, this.Pb));
    return !1
  };
  z.e.Hx = function() {
    it(this);
    this.Pb = this.Nc = this.sB = this.Nu = this.Xx = this.Pa = null;
    for (var a = 0, b = this.cd.length; a < b; a++) this.cd[a].Rl = null;
    a = 0;
    for (b = this.Sl.length; a < b; a++) this.Sl[a].Rl = null
  };
  z.e.wR = function(a) {
    if (!this.dispatchEvent(new qt("beforedragend", 0, a, this.Pa, 0, this.Pb))) return !1;
    this.hD || this.Nu.insertBefore(this.Pa, this.FF);
    it(this);
    this.dispatchEvent(new qt("dragend", 0, a, this.Pa, 0, this.Pb));
    this.Hx();
    return !0
  };
  z.e.CR = function(a) {
    z.ij(a.currentTarget, this.oy || [])
  };
  z.e.AR = function(a) {
    z.kj(a.currentTarget, this.oy || [])
  };
  z.e.zR = function(a) {
    z.ij(a.currentTarget, this.fG || [])
  };
  z.e.yR = function(a) {
    z.kj(a.currentTarget, this.fG || [])
  };
  z.y(qt, z.Lc);
  var tt;
  z.y(z.rt, z.Q);
  z.e = z.rt.prototype;
  z.e.mg = null;
  z.e.VT = 10;
  z.e.pm = !1;
  z.e.B = function() {
    this.h = this.K().B("INPUT", {
      type: "text"
    })
  };
  z.e.T = function(a) {
    z.rt.v.T.call(this, a);
    this.Tb || (this.Tb = a.getAttribute("label") || "");
    In(z.Ke(a)) == a && (this.pm = !0, z.jj(this.m(), this.yp));
    st() && (this.m().placeholder = this.Tb);
    z.cj(this.m(), "label", this.Tb)
  };
  z.e.C = function() {
    z.rt.v.C.call(this);
    var a = new z.xd(this);
    a.g(this.m(), "focus", this.iH);
    a.g(this.m(), "blur", this.lz);
    st() ? this.U = a : (z.B && a.g(this.m(), ["keypress", "keydown", "keyup"], this.LR), a.g(z.Te(z.Ke(this.m())), "load", this.FS), this.U = a, ut(this));
    this.pi();
    this.m().UT = this
  };
  z.e.Ab = function() {
    z.rt.v.Ab.call(this);
    this.U && (this.U.dispose(), this.U = null);
    this.m().UT = null
  };
  z.e.D = function() {
    z.rt.v.D.call(this);
    this.U && (this.U.dispose(), this.U = null)
  };
  z.e.yp = "label-input-label";
  z.e.iH = function() {
    this.pm = !0;
    z.jj(this.m(), this.yp);
    if (!st() && !vt(this) && !this.XS) {
      var a = this,
        b = function() {
          a.m() && (a.m().value = "")
        };
      z.C ? z.vd(b, 10) : b()
    }
  };
  z.e.lz = function() {
    st() || (this.U.oa(this.m(), "click", this.iH), this.mg = null);
    this.pm = !1;
    this.pi()
  };
  z.e.LR = function(a) {
    27 == a.keyCode && ("keydown" == a.type ? this.mg = this.m().value : "keypress" == a.type ? this.m().value = this.mg : "keyup" == a.type && (this.mg = null), a.preventDefault())
  };
  z.e.PR = function() {
    vt(this) || (this.m().value = "", z.vd(this.iR, 10, this))
  };
  z.e.iR = function() {
    vt(this) || (this.m().value = this.Tb)
  };
  z.e.FS = function() {
    this.pi()
  };
  z.e.hasFocus = function() {
    return this.pm
  };
  z.e.clear = function() {
    this.m().value = "";
    null != this.mg && (this.mg = "")
  };
  z.e.reset = function() {
    vt(this) && (this.clear(), this.pi())
  };
  z.e.Da = function(a) {
    null != this.mg && (this.mg = a);
    this.m().value = a;
    this.pi()
  };
  z.e.X = function() {
    return null != this.mg ? this.mg : vt(this) ? this.m().value : ""
  };
  z.e.pi = function() {
    var a = this.m();
    st() ? this.m().placeholder != this.Tb && (this.m().placeholder = this.Tb) : ut(this);
    z.cj(a, "label", this.Tb);
    vt(this) ? (a = this.m(), z.jj(a, this.yp)) : (this.XS || this.pm || (a = this.m(), z.hj(a, this.yp)), st() || z.vd(this.mX, this.VT, this))
  };
  z.e.bb = function(a) {
    this.m().disabled = !a;
    z.zo(this.m(), this.yp + "-disabled", !a)
  };
  z.e.isEnabled = function() {
    return !this.m().disabled
  };
  z.e.mX = function() {
    !this.m() || vt(this) || this.pm || (this.m().value = this.Tb)
  };
  var FD = {
    ZG: function(a, b) {
      return window.$.get(b ? "/node/AnswerFullVoteInfoV2" : "/node/AnswerVoteInfoV2", {
        params: {
          answer_id: a
        }
      })
    },
    xn: function(a, b) {
      return window.$.post("/node/AnswerVoteBarV2", {
        method: b,
        params: {
          answer_id: a
        }
      }, function(a) {
        a && a.r && z.V.alert("\x3cp\x3e" + a.msg + "\x3c/p\x3e")
      })
    },
    mC: function(a, b) {
      return window.$.post("/node/AnswerMetaV2", {
        method: "set_copyright",
        params: {
          answer_id: a,
          copyright_status: Number(b)
        }
      })
    }
  };
  z.y(Bt, z.Hs);
  Bt.prototype.cj = function(a) {
    var b = Bt.v.cj.call(this, a);
    a.select(this.Y.iz());
    return b
  };
  z.y(Ct, z.Ps);
  Ct.prototype.IW = ["根话题", "未归类话题"];
  Ct.prototype.bn = function(a) {
    this.bC = a
  };
  Ct.prototype.Yi = function(a, b, c) {
    var d = (0, z.t)(function(a, b) {
      for (var d = [], k, l = 0; l < b.length; l++)
        for (var p = 1; p < b[l].length; p++) {
          k = b[l][p];
          var q = !0;
          this.xG && z.A(this.IW, function(a) {
            k[2] === a && (q = !1)
          });
          q && d.push(k)
        }
      this.bC && (d = this.bC(d, a));
      c(a, d)
    }, this);
    Ct.v.Yi.call(this, a, b, d);
    this.Y.dispatchEvent({
      type: oG
    })
  };
  z.y(Dt, z.Hs);
  z.e = Dt.prototype;
  z.e.cj = function(a) {
    var b = Bt.v.cj.call(this, a),
      c = this.Y.iz(),
      d = this.at();
    d.fL = a;
    d.dispatchEvent("select");
    c.value = "";
    return b
  };
  z.e.Da = function() {};
  z.e.update = function(a) {
    var b = z.Ar(this.X());
    !b || "搜索用户" === b || "搜索话题" === b || "在这里输入问题" === b || z.rb(this.Y.Cy || [], b) || (b ? (0, window.unescape)((0, window.encodeURIComponent)(b)).length : 0) < this.mJ || b === this.XI ? (this.Y.Jj(), this.Bp = b) : (this.XI = null, this.Y.dispatchEvent({
      type: pG
    }), Dt.v.update.call(this, a))
  };
  z.e.te = function(a) {
    this.Y && z.As(this.Y);
    a.target !== this.kb && (this.kb = a.target || null, this.ka && (this.ka.start(), this.kc.g(this.ka, "tick", this.$p)), this.Bp = this.X(), Ms(this));
    this.ka && this.ka.start();
    this.update(!0)
  };
  z.e.gd = function() {
    this.ka && this.ka.stop();
    this.Y && this.Y.Jj()
  };
  z.e.fc = function(a) {
    if (13 === a.keyCode) {
      if (this.Y.Bb()) {
        if (this.Y.bj()) return a.preventDefault(), a.stopPropagation(), !0;
        a.preventDefault();
        a.stopPropagation();
        this.Y.cc = "";
        this.Y.Mc();
        this.update(!0);
        return !1
      }
      a.stopPropagation();
      a.preventDefault();
      return !1
    }
    Dt.v.fc.call(this, a)
  };
  z.e.Sr = function(a) {
    Dt.v.Sr.call(this, a);
    this.kc.g(a, "mousedown", function(a) {
      a.stopPropagation();
      return !0
    })
  };
  z.y(Et, Dt);
  Et.prototype.cj = function(a) {
    var b = this.at();
    b.fL = a;
    b.dispatchEvent("select");
    return !1
  };
  z.y(z.Ft, z.ct);
  var pG = "before_update",
    oG = "before_request";
  z.e = z.Ft.prototype;
  z.e.YF = !0;
  z.e.eX = function(a, b, c) {
    z.Od(c, function(a) {
      a = Zs(this, a, this.cc);
      this.ba.appendChild(this.h, a)
    }, a);
    z.ef(a.h, a.ba.B("div", "zh-question-suggest-info", [a = a.ba.B("a", {
      href: "javascript:;",
      title: "关闭",
      name: "close",
      id: "zh-question-suggest-info-close"
    }, [a.ba.B("span", "x-m"), "不是"]), "您想问的是不是下面的问题？"]), 0);
    z.F(a, "click", function() {
      var a = this.Sf;
      a.gd();
      this.Mc();
      a.XI = a.X()
    }, !1, this)
  };
  z.e.gX = function(a, b, c) {
    0 === c.length ? this.Mc() : (z.Od(c, function(a) {
      a = Zs(this, a, this.cc);
      this.ba.appendChild(this.h, a)
    }, a), b = a.ba.B("div", "zh-question-topic-autocomplete-plaintext", ["建议添加的话题", a.ba.B("span", "x-m")]), z.ef(a.h, b, 0), z.tm.mb && z.F(b, "click", function() {
      this.Sf.gd();
      this.Mc()
    }, !1, this))
  };
  z.e.sg = function() {
    return this.fL
  };
  z.e.bn = function(a) {
    this.Xd.bn(a)
  };
  z.e.Mc = function() {
    if (this.YF) return z.Ft.v.Mc.call(this)
  };
  z.e.bj = function() {
    return -1 === Bs(this, this.sh) ? !1 : z.Ft.v.bj.call(this)
  };
  z.e.Jj = function() {
    z.tm.mb ? z.ld(window.document, "click", (0, z.t)(this.Mc, this)) : z.Ft.v.Jj.call(this)
  };
  z.y(z.Gt, z.Wj);
  var Ht = "view",
    qG = "零一二三四五六七八九十".split("");
  z.e = z.Gt.prototype;
  z.e.w = function(a) {
    this.h = a;
    this.Og = z.L("zm-tag-editor-labels", this.h);
    this.zu && (this.data = It(this));
    z.Jt(this);
    this.je();
    this.dc()
  };
  z.e.Wl = function() {
    this.Bc || (this.Bc = z.M("div", "zm-tag-editor-editor", [this.so = z.M("div", "zg-section zg-clear"), this.me = z.M("div", "zg-section zm-tag-editor-command-buttons-wrap", [this.Za = z.M("input", {
      "class": "zg-form-text-input zg-mr15",
      type: "text"
    }), z.M("a", {
      "class": "zg-mr15 zg-btn-blue",
      href: "#",
      name: "add",
      style: "display:none;"
    }, "添加"), this.zG = z.M("a", {
      href: "#",
      name: "close"
    }, "完成")]), this.ru = z.M("div", {
      className: "zm-tag-editor-maxcount zg-section",
      style: "display:none;"
    }, [z.M("span", {}, "最多只能为一个问题绑定 " +
      this.Ep + " 个话题"), z.M("a", {
      href: "#",
      name: "close"
    }, "完成")])]), z.df(this.Bc, this.Og), this.Ve && (this.zA = new z.rt(this.Ve), this.zA.w(this.Za), this.Za.title = this.Ve), this.Gf(this.me))
  };
  z.e.Gf = function(a, b) {
    this.O = new z.Ft(b || "/topic/autocomplete", this.Za, null, null, a, !0);
    this.O.Lg(!0);
    this.O.Ak = this.xe;
    this.O.bn(this.Rf());
    this.O.Cy = [this.Ve];
    this.o().g(this.O, "select", this.Nf);
    this.o().g(this.O, "suggestionsupdate", this.In)
  };
  z.e.Fy = function(a) {
    return z.ob(this.data, function(b) {
      return b[0] === a[1]
    })
  };
  z.e.Rf = function() {
    return (0, z.t)(function(a, b) {
      return Lt(this, Kt(this, a), b)
    }, this)
  };
  z.e.In = function() {
    1 < this.O.Na.length && !this.O.Na[0][4] && z.ys(this.O)
  };
  z.e.dc = function() {
    this.o().g(this.h, "click", this.Wa);
    z.Kp && this.o().g(z.Kp, "anon_change", this.ck)
  };
  z.e.ck = function(a) {
    a.ub ? z.U.add(this.h, "zm-tag-editor-disabled") : z.U.remove(this.h, "zm-tag-editor-disabled")
  };
  z.e.Wa = function(a) {
    var b = this.mh(a.target);
    if (b && b.name) switch (a.preventDefault(), b.name) {
      case "edit":
        this.we(!0);
        break;
      case "add":
        (a = z.Ar(Br(this.Za.value))) && a !== this.Za.title && this.Je("", a);
        break;
      case "close":
        this.we(!1);
        break;
      case "remove":
        this.mB(b)
    }
  };
  z.e.we = z.Rq(function(a) {
    if (a && (this.dispatchEvent("start_editing"), !1 === this.dispatchEvent("beforeedit"))) return;
    this.status = a ? "edit" : Ht;
    this.Wl();
    this.Hd();
    this.je();
    z.Mt(this)
  }, !0);
  z.e.mB = function(a) {
    var b = a.id.split("-")[1],
      c = z.Ro(a).innerHTML;
    this.uu && this.data.length <= this.uu ? z.V.message("请至少绑定" + qG[this.uu] + "个话题") : (this.data = z.lb(this.data, function(a) {
      return b ? String(a[3]) !== b : a[1] !== c
    }), this.Mm(b))
  };
  z.e.Mm = function(a) {
    if (!this.iv || !this.iv.Dc()) {
      this.iv = new z.wp(!0);
      var b = new z.Ah;
      b.add("qid", this.pa).add("question_id", this.pa).add("topic_id", a);
      this.o().xa(this.iv, "complete", this.qS);
      this.iv.ajax(this.aX, b.toString())
    }
  };
  z.e.qS = function(a) {
    a = z.Wn(a.target);
    a.r ? z.V.message(a.msg) : (this.dispatchEvent("remove_tag"), z.Jt(this), this.Hd(), z.Mt(this))
  };
  z.e.je = function() {
    this.status === Ht ? (z.P(this.Og, !0), this.Bc && z.P(this.Bc, !1)) : (z.P(this.Og, !1), this.Bc && this.isEnabled && z.P(this.Bc, !0), this.ru && z.P(this.ru, !1))
  };
  z.e.Je = function(a, b) {
    this.qc || (this.dispatchEvent("add_tag"), this.qc = !0, this.xhr = new z.wp(!0), this.o().xa(this.xhr, "complete", this.Uw), this.xhr.ajax(this.bO, "qid\x3d" + this.pa + "\x26question_id\x3d" + this.pa + "\x26topic_id\x3d" + a + "\x26topic_text\x3d" + (0, window.encodeURIComponent)(b)))
  };
  z.e.Nf = function() {
    var a = "",
      b = "",
      c = this.O.sg().slice(1);
    3 < c.length ? (a = c[3], b = c[0]) : b = c[1];
    z.ob(this.data, function(c) {
      return c[3] && String(c[3]) === a || c[0] === b
    }) || (a || b) && this.Je(a, b, c)
  };
  z.e.Uw = function() {
    this.qc = !1;
    var a = z.Wn(this.xhr);
    this.fj(a);
    z.Mt(this)
  };
  z.e.ql = z.m(32);
  z.e.fj = function(a) {
    var b = null;
    a && a.r ? a.notify ? z.Nn(a.notify) : z.V.message(a.msg) : (4 < a.length && z.Nn(a[4]), this.hC = b = a, this.data.push(b), z.Nt(this), z.Jt(this), this.Hd(), this.Za.value = "", this.dispatchEvent("select"))
  };
  z.e.IG = function(a) {
    return z.zr(a, "nor", !1)
  };
  z.e.Hd = function() {
    var a = z.mb(this.data, function(a) {
      return ['\x3cspan class\x3d"zm-tag-editor-edit-item"\x3e', this.IG(a), a.YY ? "" : '\x3ca id\x3d"rmid-' + a[3] + '" href\x3d"#" class\x3d"zg-r3px zm-tag-editor-remove-button" name\x3d"remove"\x3e\x3c/a\x3e', "\x3c/span\x3e"].join("")
    }, this);
    this.so.innerHTML = a.join("")
  };
  z.e.sg = function() {
    return this.hC
  };
  z.e.bb = function(a) {
    this.isEnabled = a;
    this.status = Ht;
    this.je()
  };
  z.y(z.Ot, z.Gt);
  z.e = z.Ot.prototype;
  z.e.w = function(a) {
    if (this.isEnabled = !a.getAttribute("data-disabled")) z.Ot.v.w.call(this, a), this.we(!0), z.P(this.zG, !1)
  };
  z.e.Gf = function(a) {
    var b;
    this.qA && (b = "/topic/autocomplete?no_create\x3dtrue");
    z.Ot.v.Gf.call(this, a, b);
    this.O.Xd.xG = !1
  };
  z.e.Rf = function() {
    return (0, z.t)(function(a, b) {
      return z.lb(a, function(a) {
        return 3 >= a.length ? !1 : z.fo(this.data, function(d) {
          return d[1] === a[2] ? b === a[1] ? (a[0] = "plain_text", a[1] = '"' + b + '"已在现有列表中', !0) : !1 : !0
        })
      }, this)
    }, this)
  };
  z.e.Je = function(a, b) {
    this.qc || (this.qc = !0, this.xhr = new z.wp(!0), this.o().xa(this.xhr, "complete", this.Uw), a || (a = -1), this.qA ? this.xhr.ajax("/topic/add", "tid\x3d" + this.Xf + "\x26pid\x3d" + a + "\x26topic_text\x3d" + (0, window.encodeURIComponent)(b)) : this.xhr.ajax("/topic/add", "tid\x3d" + this.Xf + "\x26cid\x3d" + a + "\x26topic_text\x3d" + (0, window.encodeURIComponent)(b)))
  };
  z.e.IG = function(a) {
    return '\x3ca class\x3d"nor" href\x3d"/topic/' + a[1] + '/organize"\x3e' + a[0] + "\x3c/a\x3e"
  };
  z.e.Mm = function(a) {
    if (!this.da || !this.da.Dc()) {
      var b = new z.wp(!0);
      this.o().g(b, "success", function() {
        var c = z.Wn(b);
        c.r ? z.V.message(c.msg) : (z.Jt(this), this.Hd(), this.dispatchEvent({
          type: "remove_tag",
          data: {
            id: a
          }
        }))
      });
      this.qA ? b.ajax(this.NK, "cid\x3d" + this.Xf + "\x26pid\x3d" + a) : b.ajax(this.NK, "pid\x3d" + this.Xf + "\x26cid\x3d" + a);
      this.da = b
    }
  };
  z.y(Pt, z.Gt);
  z.e = Pt.prototype;
  z.e.w = function(a) {
    Pt.v.w.call(this, a);
    this.we(!0);
    z.A(z.Me("a", null, a), function(a) {
      z.P(a, !1)
    });
    this.o().g(this.Za, "focus", function() {
      this.wr.val() && !this.kG && (this.kG = !0, this.aw());
      this.placeholder && (this.placeholder.Uk("搜索话题"), Mn(this.placeholder))
    });
    this.AI = new Sp;
    this.AI.attach(this.Za);
    this.o().g(this.AI, "key", function(a) {
      8 === a.keyCode && (1 === this.Za.value.length && (this.OE = !0, this.SO = (0, window.setTimeout)((0, z.t)(function() {
          this.OE = !1;
          (0, window.clearTimeout)(this.SO)
        }, this))), this.Za.value.length ||
        this.OE || (this.data.pop(), this.Hd(), this.dispatchEvent("remove_tag")))
    });
    this.sY = new z.gl(this.aw, 2E3, this);
    this.o().g(this.wr[0], "keyup", function() {
      var a = this.wr.val();
      this.Kv !== a && (this.sY.fire(), this.Kv = a)
    });
    this.o().g(this, ["remove_tag", "add_tag"], function() {
      Qt(this);
      0 < this.data.length && this.placeholder && (this.placeholder.Uk("搜索话题"), Mn(this.placeholder));
      5 <= this.data.length ? (this.bb(!1), this.rr.show(), this.placeholder && this.placeholder.hide(), this.zw.hide()) : (this.bb(!0), this.rr.hide(), this.placeholder &&
        this.placeholder.show(), this.zw.show(), this.rr.removeClass("light"))
    })
  };
  z.e.Fy = function(a) {
    return z.ob(this.data, function(b) {
      return b[1] === a[1]
    })
  };
  z.e.Mm = function() {
    this.dispatchEvent("remove_tag");
    z.Jt(this);
    this.Hd()
  };
  z.e.Wl = function() {
    this.Bc || (Pt.v.Wl.call(this), z.U.add(this.Bc, "zg-clear"), z.U.set(this.so, "zg-inline"), z.U.add(this.me, "zg-left"), z.U.remove(this.me, "zg-section"), z.U.set(this.Za, "zu-question-suggest-topic-input"), z.U.add(this.Za, "label-input-label"), this.yr = (0, window.$)("\x3cdiv class\x3d'sug-con zg-clear' style\x3d'display:none;'\x3e\x3c/div\x3e").append("\x3cspan class\x3d'zg-gray-normal zg-left tip'\x3e推荐添加\x3c/span\x3e").append(this.nN = (0, window.$)("\x3cspan class\x3d'sugs zg-clear zg-inline'\x3e\x3c/span\x3e")).append(this.Aw =
      (0, window.$)('\x3cimg data-src\x3d"' + z.tm.HC + '/img/spinner2.gif"\x3e')), this.yr.insertAfter(this.h), this.yr.on("click", "a[name\x3d'add']", (0, z.t)(function(a) {
      a = a.currentTarget;
      5 > this.data.length ? this.Je((0, window.$)(a).attr("data-id"), (0, window.$)(a).attr("data-text")) : this.rr.addClass("light")
    }, this)), this.zw = (0, window.$)('\x3clabel for\x3d"topic" class\x3d"zg-icon icon-magnify"\x3e\x3c/label\x3e'), (0, window.$)(this.me).prepend(this.zw), this.placeholder = new z.uk(this.Za, {
      text: "搜索话题",
      KE: !0
    }), (0, window.$)(this.me).append(this.rr =
      (0, window.$)("\x3clabel class\x3d'err-tip' style\x3d'display:none;'\x3e最多添加五个话题\x3c/label\x3e")), this.o().g(this.Bc, "click", this.TY))
  };
  z.e.TY = function(a) {
    z.Mr(this.h, a.target) || (a = z.L("zu-question-suggest-topic-input", this.Bc), z.Mg(a) && a.focus())
  };
  z.e.aw = function() {
    this.kG && (this.Kv = this.wr.val(), 8 > this.Kv.length ? (this.Pq = [], Qt(this)) : (this.Qq && this.Qq.abort(), this.Qq = new z.wp(!1), this.o().g(this.Qq, "success", this.GV), this.Qq.ajax("/topic-question/autocomplete?token\x3d" + this.Kv + "\x26max_matches\x3d5\x26use_similar\x3d0", "GET"), this.Aw.attr("src", this.Aw.attr("data-src")).show()))
  };
  z.e.GV = function() {
    this.Pq = z.Wn(this.Qq)[0].slice(1);
    Qt(this)
  };
  z.e.Hd = function() {
    var a = [];
    z.A(this.data, function(b) {
      a.push(['\x3cdiv class\x3d"zm-tag-editor-edit-item"\x3e\x3cspan\x3e', b[0], '\x3c/span\x3e\x3ca id\x3d"rmid-', b[3], '" href\x3d"#" class\x3d"zg-r3px zm-tag-editor-remove-button" name\x3d"remove"\x3e\x3c/a\x3e\x3c/div\x3e'].join(""))
    }, this);
    this.so.innerHTML = a.join("")
  };
  z.e.reset = function() {
    this.data = [];
    z.Jt(this);
    this.Hd()
  };
  z.e.mB = function(a) {
    var b = a.id.split("-")[1],
      c = z.Ro(a).innerHTML;
    this.data = z.lb(this.data, function(a) {
      return b ? String(a[3]) !== b : a[1] !== c
    });
    this.Mm(b)
  };
  z.e.Je = function(a, b) {
    var c = [b, b, "", a];
    this.hC = c;
    this.data.push(c);
    z.Jt(this);
    this.Hd();
    this.Za.value = "";
    this.dispatchEvent("select");
    this.dispatchEvent("add_tag")
  };
  z.e.bb = function(a) {
    this.Za && z.P(this.Za, a)
  };
  z.e.trackEvent = function() {
    if (this.Pq) {
      var a = 0,
        b = this.data.length;
      z.A(this.data, function(b) {
        z.A(this.Pq, function(d) {
          b[1] === d[1] && a++
        }, this)
      }, this);
      z.W.yb({
        type: "ga_click_add_question",
        data: {
          Lv: a,
          total: b
        }
      })
    }
  };
  z.y(z.Rt, z.Ot);
  z.Rt.prototype.Je = function(a) {
    this.qc || (this.qc = !0, this.xhr = new z.wp(!0), this.o().xa(this.xhr, "complete", this.Uw), this.xhr.ajax(this.TE, "tid\x3d" + a + "\x26method\x3dadd"))
  };
  z.Rt.prototype.Mm = function(a) {
    this.qc || (this.qc = !0, this.xhr = new z.wp(!0), this.o().g(this.xhr, "complete", function() {
      z.Jt(this);
      this.Hd();
      this.qc = !1
    }), this.xhr.ajax(this.TE, "tid\x3d" + a + "\x26method\x3ddel"))
  };
  z.y(St, z.xc);
  St.prototype.restore = function(a) {
    var b = this.nv();
    a || this.dispose();
    return b
  };
  z.y(z.Tt, St);
  z.Tt.prototype.mq = function(a) {
    z.N(z.Ut(this, !0));
    z.N(z.Ut(this, !1));
    return a
  };
  z.Tt.prototype.nv = function() {
    var a = null,
      b = z.Ut(this, !this.aC),
      c = z.Ut(this, this.aC);
    if (b && c) {
      var a = b.parentNode,
        b = z.kb(a.childNodes, b),
        d = c.parentNode,
        c = z.kb(d.childNodes, c);
      d == a && (this.aC ? b-- : c--);
      a = z.Bu(a, b, d, c);
      a = this.mq(a);
      a.select()
    } else this.mq();
    return a
  };
  z.Tt.prototype.D = function() {
    this.mq();
    this.ba = null
  };
  z.y(z.Vt, z.Ld);
  z.e = z.Vt.prototype;
  z.e.setPosition = function(a, b, c) {
    if (this.node = a) this.$b = z.pa(b) ? b : 1 != this.node.nodeType ? 0 : this.Tc ? -1 : 1;
    z.pa(c) && (this.depth = c)
  };
  z.e.dh = function(a) {
    this.node = a.node;
    this.$b = a.$b;
    this.depth = a.depth;
    this.Tc = a.Tc;
    this.ns = a.ns
  };
  z.e.clone = function() {
    return new z.Vt(this.node, this.Tc, !this.ns, this.$b, this.depth)
  };
  z.e.Kq = z.m(34);
  z.e.next = function() {
    var a;
    if (this.Vk) {
      if (!this.node || this.ns && 0 == this.depth) throw z.Nd;
      a = this.node;
      var b = this.Tc ? -1 : 1;
      if (this.$b == b) {
        var c = this.Tc ? a.lastChild : a.firstChild;
        c ? this.setPosition(c) : this.setPosition(a, -1 * b)
      } else(c = this.Tc ? a.previousSibling : a.nextSibling) ? this.setPosition(c) : this.setPosition(a.parentNode, -1 * b);
      this.depth += this.$b * (this.Tc ? -1 : 1)
    } else this.Vk = !0;
    a = this.node;
    if (!this.node) throw z.Nd;
    return a
  };
  z.e.Bm = function() {
    return this.Vk
  };
  z.e.equals = function(a) {
    return a.node == this.node && (!this.node || a.$b == this.$b)
  };
  z.e.splice = function(a) {
    var b = this.node,
      c = this.Tc ? 1 : -1;
    this.$b == c && (this.$b = -1 * c, this.depth += this.$b * (this.Tc ? -1 : 1));
    this.Tc = !this.Tc;
    z.Vt.prototype.next.call(this);
    this.Tc = !this.Tc;
    for (var c = z.na(arguments[0]) ? arguments[0] : arguments, d = c.length - 1; 0 <= d; d--) z.df(c[d], b);
    z.N(b)
  };
  z.e = Wt.prototype;
  z.e.Wb = function() {
    var a = this.Cc();
    return 1 == a.nodeType ? a : a.parentNode
  };
  z.e.wh = function() {
    return !1
  };
  z.e.ua = function() {
    return z.Ke(z.C ? this.Cc() : this.Z())
  };
  z.e.ab = function() {
    return z.Te(this.ua())
  };
  z.e.containsNode = function(a, b) {
    return this.bh(z.Tu(a), b)
  };
  z.e.Xi = function(a) {
    this.isCollapsed() || this.Qf();
    return this.insertNode(a, !0)
  };
  z.y(cu, z.Vt);
  z.y(du, Wt);
  du.prototype.bh = function(a, b) {
    var c = z.Yt(this),
      d = z.Yt(a);
    return (b ? z.ob : z.fo)(d, function(a) {
      return z.ob(c, function(c) {
        return c.bh(a, b)
      })
    })
  };
  du.prototype.insertNode = function(a, b) {
    b ? z.cf(a, this.Z()) : z.df(a, this.ia());
    return a
  };
  du.prototype.Sq = function(a, b) {
    this.insertNode(a, !0);
    this.insertNode(b, !1)
  };
  z.y(z.eu, cu);
  z.e = z.eu.prototype;
  z.e.ht = function() {
    return 3 != this.node.nodeType ? -1 : this.node == this.ya ? this.Ea : 0
  };
  z.e.dt = function() {
    return 3 != this.node.nodeType ? -1 : this.node == this.ta ? this.Ca : this.node.nodeValue.length
  };
  z.e.Z = function() {
    return this.ya
  };
  z.e.ia = function() {
    return this.ta
  };
  z.e.up = function() {
    return this.Bm() && this.node == this.ta && (!this.Ca || 1 != this.$b)
  };
  z.e.next = function() {
    if (this.up()) throw z.Nd;
    return z.eu.v.next.call(this)
  };
  z.e.Kq = z.m(33);
  z.e.dh = function(a) {
    this.ya = a.ya;
    this.ta = a.ta;
    this.Ea = a.Ea;
    this.Ca = a.Ca;
    this.If = a.If;
    z.eu.v.dh.call(this, a)
  };
  z.e.clone = function() {
    var a = new z.eu(this.ya, this.Ea, this.ta, this.Ca, this.If);
    a.dh(this);
    return a
  };
  z.e = fu.prototype;
  z.e.Dj = "";
  z.e.set = function(a) {
    this.Dj = "" + a
  };
  z.e.append = function(a, b, c) {
    this.Dj += a;
    if (null != b)
      for (var d = 1; d < arguments.length; d++) this.Dj += arguments[d];
    return this
  };
  z.e.clear = function() {
    this.Dj = ""
  };
  z.e.toString = function() {
    return this.Dj
  };
  z.e = gu.prototype;
  z.e.hz = function() {
    return hu(this, !0)
  };
  z.e.Zy = function() {
    return hu(this, !1)
  };
  z.e.bh = function(a, b) {
    var c = b && !a.isCollapsed(),
      d = a.R;
    try {
      return c ? 0 <= this.Oe(d, 0, 1) && 0 >= this.Oe(d, 1, 0) : 0 <= this.Oe(d, 0, 0) && 0 >= this.Oe(d, 1, 1)
    } catch (f) {
      if (!z.C) throw f;
      return !1
    }
  };
  z.e.containsNode = function(a, b) {
    return this.bh(ru(a), b)
  };
  z.e.Eo = function() {
    var a = new fu;
    z.Od(this, function(b, c, d) {
      3 == b.nodeType ? a.append(z.Ma(b.nodeValue.substring(d.ht(), d.dt()))) : 1 == b.nodeType && (-1 == d.$b ? z.$e(b) && a.append("\x3c/" + b.tagName + "\x3e") : (c = b.cloneNode(!1), c = z.Oo(c), z.C && "LI" == b.tagName ? a.append(c) : (b = c.lastIndexOf("\x3c"), a.append(b ? c.substr(0, b) : c))))
    }, this);
    return a.toString()
  };
  z.e.td = function() {
    return new z.eu(this.Z(), this.va(), this.ia(), this.Ra())
  };
  z.y(iu, gu);
  z.e = iu.prototype;
  z.e.clone = function() {
    return new this.constructor(this.R.cloneRange())
  };
  z.e.Cc = function() {
    return this.R.commonAncestorContainer
  };
  z.e.Z = function() {
    return this.R.startContainer
  };
  z.e.va = function() {
    return this.R.startOffset
  };
  z.e.ia = function() {
    return this.R.endContainer
  };
  z.e.Ra = function() {
    return this.R.endOffset
  };
  z.e.Oe = function(a, b, c) {
    return this.R.compareBoundaryPoints(1 == c ? 1 == b ? z.u.Range.START_TO_START : z.u.Range.START_TO_END : 1 == b ? z.u.Range.END_TO_START : z.u.Range.END_TO_END, a)
  };
  z.e.isCollapsed = function() {
    return this.R.collapsed
  };
  z.e.Wd = function() {
    return this.R.toString()
  };
  z.e.tg = function() {
    var a = z.Ie(this.R.startContainer).B("DIV");
    a.appendChild(this.R.cloneContents());
    a = a.innerHTML;
    if (z.Ia(a, "\x3c") || !this.isCollapsed() && !z.Wa(a, "\x3c")) return a;
    var b = this.Cc(),
      b = 1 == b.nodeType ? b : b.parentNode;
    return z.Oo(b.cloneNode(!1)).replace("\x3e", "\x3e" + a)
  };
  z.e.select = function(a) {
    var b = z.Te(z.Ke(this.Z()));
    this.uq(b.getSelection(), a)
  };
  z.e.uq = function(a) {
    a.removeAllRanges();
    a.addRange(this.R)
  };
  z.e.Qf = function() {
    var a = this.R;
    a.extractContents();
    if (a.startContainer.hasChildNodes()) {
      var b = a.startContainer.childNodes[a.startOffset];
      if (b) {
        var c = b.previousSibling;
        "" == z.Mo(b) && z.N(b);
        c && "" == z.Mo(c) && z.N(c)
      }
    }
    if (z.Kl) {
      var b = this.Z(),
        c = this.va(),
        d = this.ia(),
        f = this.Ra(),
        g = b.nextSibling;
      b == d && b.parentNode && 3 == b.nodeType && g && 3 == g.nodeType && (b.nodeValue += g.nodeValue, z.N(g), a.setStart(b, c), a.setEnd(d, f))
    }
  };
  z.e.surroundContents = function(a) {
    this.R.surroundContents(a);
    return a
  };
  z.e.insertNode = function(a, b) {
    var c = this.R.cloneRange();
    c.collapse(b);
    c.insertNode(a);
    c.detach();
    return a
  };
  z.e.Sq = function(a, b) {
    var c = z.Te(z.Ke(this.Z()));
    if (c = z.Qu(c)) var d = c.Z(),
      f = c.ia(),
      g = c.va(),
      h = c.Ra();
    var k = this.R.cloneRange(),
      l = this.R.cloneRange();
    k.collapse(!1);
    l.collapse(!0);
    k.insertNode(b);
    l.insertNode(a);
    k.detach();
    l.detach();
    if (c) {
      if (3 == d.nodeType)
        for (; g > d.length;) {
          g -= d.length;
          do d = d.nextSibling; while (d == a || d == b)
        }
      if (3 == f.nodeType)
        for (; h > f.length;) {
          h -= f.length;
          do f = f.nextSibling; while (f == a || f == b)
        }
      z.Bu(d, g, f, h).select()
    }
  };
  z.e.collapse = function(a) {
    this.R.collapse(a)
  };
  z.y(mu, iu);
  mu.prototype.uq = function(a, b) {
    !b || this.isCollapsed() ? mu.v.uq.call(this, a, b) : (a.collapse(this.ia(), this.Ra()), a.extend(this.Z(), this.va()))
  };
  z.y(z.nu, gu);
  z.e = z.nu.prototype;
  z.e.clone = function() {
    var a = new z.nu(this.R.duplicate(), this.Gs);
    a.Hg = this.Hg;
    a.ya = this.ya;
    a.ta = this.ta;
    return a
  };
  z.e.Pd = function() {
    this.Hg = this.ya = this.ta = null;
    this.Ea = this.Ca = -1
  };
  z.e.Cc = function() {
    if (!this.Hg) {
      var a = this.R.text,
        b = this.R.duplicate(),
        c = a.replace(/ +$/, "");
      (c = a.length - c.length) && b.moveEnd("character", -c);
      c = b.parentElement();
      b = z.rp(b.htmlText).length;
      if (this.isCollapsed() && 0 < b) return this.Hg = c;
      for (; b > z.rp(c.outerHTML).length;) c = c.parentNode;
      for (; 1 == c.childNodes.length && c.innerText == tu(c.firstChild) && ku(c.firstChild);) c = c.firstChild;
      0 == a.length && (c = pu(this, c));
      this.Hg = c
    }
    return this.Hg
  };
  z.e.Z = function() {
    this.ya || (this.ya = qu(this, 1), this.isCollapsed() && (this.ta = this.ya));
    return this.ya
  };
  z.e.va = function() {
    0 > this.Ea && (this.Ea = su(this, 1), this.isCollapsed() && (this.Ca = this.Ea));
    return this.Ea
  };
  z.e.ia = function() {
    if (this.isCollapsed()) return this.Z();
    this.ta || (this.ta = qu(this, 0));
    return this.ta
  };
  z.e.Ra = function() {
    if (this.isCollapsed()) return this.va();
    0 > this.Ca && (this.Ca = su(this, 0), this.isCollapsed() && (this.Ea = this.Ca));
    return this.Ca
  };
  z.e.Oe = function(a, b, c) {
    return this.R.compareEndPoints((1 == b ? "Start" : "End") + "To" + (1 == c ? "Start" : "End"), a)
  };
  z.e.xg = z.m(38);
  z.e.isCollapsed = function() {
    return 0 == this.R.compareEndPoints("StartToEnd", this.R)
  };
  z.e.Wd = function() {
    return this.R.text
  };
  z.e.tg = function() {
    return this.R.htmlText
  };
  z.e.select = function() {
    this.R.select()
  };
  z.e.Qf = function() {
    if (!this.isCollapsed() && this.R.htmlText) {
      var a = this.Z(),
        b = this.ia(),
        c = this.R.text,
        d = this.R.duplicate();
      d.moveStart("character", 1);
      d.moveStart("character", -1);
      d.text == c && (this.R = d);
      this.R.text = "";
      this.Pd();
      c = this.Z();
      d = this.va();
      try {
        var f = a.nextSibling;
        a == b && a.parentNode && 3 == a.nodeType && f && 3 == f.nodeType && (a.nodeValue += f.nodeValue, z.N(f), this.R = ou(c), this.R.move("character", d), this.Pd())
      } catch (g) {}
    }
  };
  z.e.surroundContents = function(a) {
    z.N(a);
    a.innerHTML = this.R.htmlText;
    (a = uu(this.R, a)) && this.R.moveToElementText(a);
    this.Pd();
    return a
  };
  z.e.insertNode = function(a, b) {
    var c = vu(this.R.duplicate(), a, b);
    this.Pd();
    return c
  };
  z.e.Sq = function(a, b) {
    var c = this.R.duplicate(),
      d = this.R.duplicate();
    vu(c, a, !0);
    vu(d, b, !1);
    this.Pd()
  };
  z.e.collapse = function(a) {
    this.R.collapse(a);
    a ? (this.ta = this.ya, this.Ca = this.Ea) : (this.ya = this.ta, this.Ea = this.Ca)
  };
  z.y(wu, iu);
  wu.prototype.uq = function(a) {
    a.collapse(this.Z(), this.va());
    this.ia() == this.Z() && this.Ra() == this.va() || a.extend(this.ia(), this.Ra());
    0 == a.rangeCount && a.addRange(this.R)
  };
  z.y(xu, iu);
  xu.prototype.Oe = function(a, b, c) {
    return z.E("528") ? xu.v.Oe.call(this, a, b, c) : this.R.compareBoundaryPoints(1 == c ? 1 == b ? z.u.Range.START_TO_START : z.u.Range.END_TO_START : 1 == b ? z.u.Range.START_TO_END : z.u.Range.END_TO_END, a)
  };
  xu.prototype.uq = function(a, b) {
    b ? a.setBaseAndExtent(this.ia(), this.Ra(), this.Z(), this.va()) : a.setBaseAndExtent(this.Z(), this.va(), this.ia(), this.Ra())
  };
  z.y(z.zu, Wt);
  z.e = z.zu.prototype;
  z.e.clone = function() {
    var a = new z.zu;
    a.li = this.li && this.li.clone();
    a.ya = this.ya;
    a.Ea = this.Ea;
    a.ta = this.ta;
    a.Ca = this.Ca;
    a.If = this.If;
    return a
  };
  z.e.Ii = function() {
    return "text"
  };
  z.e.re = function() {
    return z.Du(this).R
  };
  z.e.Pd = function() {
    this.ya = this.Ea = this.ta = this.Ca = null
  };
  z.e.bk = function() {
    return 1
  };
  z.e.Re = function() {
    return this
  };
  z.e.Cc = function() {
    return z.Du(this).Cc()
  };
  z.e.Z = function() {
    return this.ya || (this.ya = z.Du(this).Z())
  };
  z.e.va = function() {
    return null != this.Ea ? this.Ea : this.Ea = z.Du(this).va()
  };
  z.e.hz = function() {
    return z.Du(this).hz()
  };
  z.e.ia = function() {
    return this.ta || (this.ta = z.Du(this).ia())
  };
  z.e.Ra = function() {
    return null != this.Ca ? this.Ca : this.Ca = z.Du(this).Ra()
  };
  z.e.Zy = function() {
    return z.Du(this).Zy()
  };
  z.e.wh = function() {
    return this.If
  };
  z.e.bh = function(a, b) {
    var c = a.Ii();
    return "text" == c ? z.Du(this).bh(z.Du(a), b) : "control" == c ? (c = a.Di(), (b ? z.ob : z.fo)(c, function(a) {
      return this.containsNode(a, b)
    }, this)) : !1
  };
  z.e.xg = z.m(37);
  z.e.isCollapsed = function() {
    return z.Du(this).isCollapsed()
  };
  z.e.Wd = function() {
    return z.Du(this).Wd()
  };
  z.e.Eo = function() {
    return z.Du(this).Eo()
  };
  z.e.tg = function() {
    return z.Du(this).tg()
  };
  z.e.td = function() {
    return new z.eu(this.Z(), this.va(), this.ia(), this.Ra())
  };
  z.e.select = function() {
    z.Du(this).select(this.If)
  };
  z.e.Qf = function() {
    z.Du(this).Qf();
    this.Pd()
  };
  z.e.surroundContents = function(a) {
    a = z.Du(this).surroundContents(a);
    this.Pd();
    return a
  };
  z.e.insertNode = function(a, b) {
    var c = z.Du(this).insertNode(a, b);
    this.Pd();
    return c
  };
  z.e.Sq = function(a, b) {
    z.Du(this).Sq(a, b);
    this.Pd()
  };
  z.e.dC = function() {
    return new Eu(this)
  };
  z.e.collapse = function(a) {
    a = this.wh() ? !a : a;
    this.li && this.li.collapse(a);
    a ? (this.ta = this.ya, this.Ca = this.Ea) : (this.ya = this.ta, this.Ea = this.Ca);
    this.If = !1
  };
  z.y(Eu, St);
  Eu.prototype.nv = function() {
    return z.Bu(this.xE, this.AO, this.CG, this.IQ)
  };
  Eu.prototype.D = function() {
    Eu.v.D.call(this);
    this.CG = this.xE = null
  };
  z.y(z.Fu, du);
  z.e = z.Fu.prototype;
  z.e.Pd = function() {
    this.Lq = this.lb = null
  };
  z.e.clone = function() {
    return Hu.apply(this, this.Di())
  };
  z.e.Ii = function() {
    return "control"
  };
  z.e.re = function() {
    return this.R || window.document.body.createControlRange()
  };
  z.e.bk = function() {
    return this.R ? this.R.length : 0
  };
  z.e.Re = function(a) {
    a = this.R.item(a);
    return Au(ru(a), void 0)
  };
  z.e.Cc = function() {
    return Po.apply(null, this.Di())
  };
  z.e.Z = function() {
    return Iu(this)[0]
  };
  z.e.va = function() {
    return 0
  };
  z.e.ia = function() {
    var a = Iu(this),
      b = z.jb(a);
    return z.pb(a, function(a) {
      return z.nf(a, b)
    })
  };
  z.e.Ra = function() {
    return this.ia().childNodes.length
  };
  z.e.Di = function() {
    if (!this.lb && (this.lb = [], this.R))
      for (var a = 0; a < this.R.length; a++) this.lb.push(this.R.item(a));
    return this.lb
  };
  z.e.xg = z.m(36);
  z.e.isCollapsed = function() {
    return !this.R || !this.R.length
  };
  z.e.Wd = function() {
    return ""
  };
  z.e.Eo = function() {
    return z.mb(Iu(this), z.Oo).join("")
  };
  z.e.tg = function() {
    return this.Eo()
  };
  z.e.td = function() {
    return new Ku(this)
  };
  z.e.select = function() {
    this.R && this.R.select()
  };
  z.e.Qf = function() {
    if (this.R) {
      for (var a = [], b = 0, c = this.R.length; b < c; b++) a.push(this.R.item(b));
      z.A(a, z.N);
      this.collapse(!1)
    }
  };
  z.e.Xi = function(a) {
    a = this.insertNode(a, !0);
    this.isCollapsed() || this.Qf();
    return a
  };
  z.e.dC = function() {
    return new Ju(this)
  };
  z.e.collapse = function() {
    this.R = null;
    this.Pd()
  };
  z.y(Ju, St);
  Ju.prototype.nv = function() {
    for (var a = (this.lb.length ? z.Ke(this.lb[0]) : window.document).body.createControlRange(), b = 0, c = this.lb.length; b < c; b++) a.addElement(this.lb[b]);
    return Gu(a)
  };
  Ju.prototype.D = function() {
    Ju.v.D.call(this);
    delete this.lb
  };
  z.y(Ku, cu);
  z.e = Ku.prototype;
  z.e.ht = function() {
    return 0
  };
  z.e.dt = function() {
    return 0
  };
  z.e.Z = function() {
    return this.ya
  };
  z.e.ia = function() {
    return this.ta
  };
  z.e.up = function() {
    return !this.depth && !this.lb.length
  };
  z.e.next = function() {
    if (this.up()) throw z.Nd;
    if (!this.depth) {
      var a = this.lb.shift();
      this.setPosition(a, 1, 1);
      return a
    }
    return Ku.v.next.call(this)
  };
  z.e.dh = function(a) {
    this.lb = a.lb;
    this.ya = a.ya;
    this.ta = a.ta;
    Ku.v.dh.call(this, a)
  };
  z.e.clone = function() {
    var a = new Ku(null);
    a.dh(this);
    return a
  };
  z.y(z.Lu, du);
  z.e = z.Lu.prototype;
  z.e.Pd = function() {
    this.Um = [];
    this.os = this.kn = null
  };
  z.e.clone = function() {
    var a = this.cg,
      b = new z.Lu;
    b.cg = z.vb(a);
    return b
  };
  z.e.Ii = function() {
    return "mutli"
  };
  z.e.re = function() {
    return this.cg[0]
  };
  z.e.bk = function() {
    return this.cg.length
  };
  z.e.Re = function(a) {
    this.Um[a] || (this.Um[a] = Au(yu(this.cg[a]), void 0));
    return this.Um[a]
  };
  z.e.Cc = function() {
    if (!this.os) {
      for (var a = [], b = 0, c = this.bk(); b < c; b++) a.push(this.Re(b).Cc());
      this.os = Po.apply(null, a)
    }
    return this.os
  };
  z.e.Z = function() {
    return Nu(this)[0].Z()
  };
  z.e.va = function() {
    return Nu(this)[0].va()
  };
  z.e.ia = function() {
    return z.jb(Nu(this)).ia()
  };
  z.e.Ra = function() {
    return z.jb(Nu(this)).Ra()
  };
  z.e.xg = z.m(35);
  z.e.isCollapsed = function() {
    return 0 == this.cg.length || 1 == this.cg.length && this.Re(0).isCollapsed()
  };
  z.e.Wd = function() {
    return z.mb(z.Yt(this), function(a) {
      return a.Wd()
    }).join("")
  };
  z.e.Eo = function() {
    return this.tg()
  };
  z.e.tg = function() {
    return z.mb(z.Yt(this), function(a) {
      return a.tg()
    }).join("")
  };
  z.e.td = function() {
    return new Pu(this)
  };
  z.e.select = function() {
    var a = Xt(this.ab());
    a.removeAllRanges();
    for (var b = 0, c = this.bk(); b < c; b++) a.addRange(this.Re(b).re())
  };
  z.e.Qf = function() {
    z.A(z.Yt(this), function(a) {
      a.Qf()
    })
  };
  z.e.dC = function() {
    return new Ou(this)
  };
  z.e.collapse = function(a) {
    if (!this.isCollapsed()) {
      var b = a ? this.Re(0) : this.Re(this.bk() - 1);
      this.Pd();
      b.collapse(a);
      this.Um = [b];
      this.kn = [b];
      this.cg = [b.re()]
    }
  };
  z.y(Ou, St);
  Ou.prototype.nv = function() {
    var a = z.mb(this.eC, function(a) {
      return a.restore()
    });
    return Mu(a)
  };
  Ou.prototype.D = function() {
    Ou.v.D.call(this);
    z.A(this.eC, function(a) {
      a.dispose()
    });
    delete this.eC
  };
  z.y(Pu, cu);
  z.e = Pu.prototype;
  z.e.ht = function() {
    return this.yg[this.Ml].ht()
  };
  z.e.dt = function() {
    return this.yg[this.Ml].dt()
  };
  z.e.Z = function() {
    return this.yg[0].Z()
  };
  z.e.ia = function() {
    return z.jb(this.yg).ia()
  };
  z.e.up = function() {
    return this.yg[this.Ml].up()
  };
  z.e.next = function() {
    try {
      var a = this.yg[this.Ml],
        b = a.next();
      this.setPosition(a.node, a.$b, a.depth);
      return b
    } catch (c) {
      if (c !== z.Nd || this.yg.length - 1 == this.Ml) throw c;
      this.Ml++;
      return this.next()
    }
  };
  z.e.dh = function(a) {
    this.yg = z.vb(a.yg);
    Pu.v.dh.call(this, a)
  };
  z.e.clone = function() {
    var a = new Pu(null);
    a.dh(this);
    return a
  };
  z.y(z.Wu, z.Ld);
  z.Wu.prototype.next = function() {
    var a = this.yJ;
    if (!a) throw z.Nd;
    this.yJ = this.pX ? a.previousSibling : a.nextSibling;
    return a
  };
  z.y(Xu, z.Wu);
  var cv = {
    IMG: !0,
    IFRAME: !0,
    EMBED: !0
  };
  var rG = function() {
    if (z.Wl) return gv(/Firefox\/([0-9.]+)/);
    if (z.C || z.Gc || z.wg) return z.Jc;
    if (z.Kf) return gv(/Chrome\/([0-9.]+)/);
    if (z.Yl && !(z.Ec() || z.Ab("iPad") || z.Ab("iPod"))) return gv(/Version\/([0-9.]+)/);
    if (z.Ui || z.Uj) {
      var a;
      if (a = /Version\/(\S+).*Mobile\/(\S+)/.exec(z.Bb)) return a[1] + "." + a[2]
    } else if (z.Xl) return (a = gv(/Android\s+([0-9.]+)/)) ? a : gv(/Version\/([0-9.]+)/);
    return ""
  }();
  var uG, vG, xG, rB, CG, DG;
  z.sG = z.C && !(9 <= z.Vg);
  z.tG = z.B || z.D || z.wg || z.Gc || z.C && 9 <= z.Vg;
  z.iB = z.C || z.D || z.wg || z.Gc || !1;
  uG = z.D || !1;
  vG = z.C || z.D || z.wg;
  z.wG = z.B || z.D;
  z.D && z.E("534.16");
  xG = z.B && !0;
  z.yG = z.B || z.D || z.wg;
  z.zG = z.B || z.wg;
  z.C && z.E("7.0");
  z.AG = z.B && z.E("1.8") || z.D || z.wg;
  rB = z.D || z.C && z.E("9");
  z.C || z.Gc || z.wg || z.B && z.E("1.9");
  z.BG = z.B || z.D && !z.E("527");
  CG = z.C || z.wg;
  DG = z.C || z.Gc || z.D && z.E("525");
  z.EG = z.D && !z.E("531");
  z.FG = z.D && !z.E("528");
  z.B && z.E("1.9") || z.C || z.Gc || z.wg || z.D && z.E("531");
  z.GG = z.C || z.Gc || z.B || z.wg;
  z.HG = z.B || z.D && !z.E("526");
  z.IG = z.C || z.wg;
  z.JG = !z.C && !z.wg;
  z.KG = !z.D && !z.Gc;
  z.Kf && 0 <= z.$a(rG, "4") || z.Yl && z.E("533") || z.B && z.E("2.0") || z.C && z.E("10");
  z.LG = z.wg && z.E("11.10");
  z.Kf && z.$a(rG, "12");
  z.y(z.vv, z.Tt);
  z.vv.prototype.mq = function(a) {
    var b = z.Ut(this, !0),
      c = z.Ut(this, !1),
      b = b && c ? Po(b, c) : b || c;
    z.vv.v.mq.call(this);
    if (a) return nv(b, a);
    b && (a = z.Qu(z.Te(z.Ke(b))), (a = nv(b, a)) && a.select())
  };
  z.y(z.wv, z.Q);
  z.MG = 0;
  z.xv = [];
  z.wv.prototype.sc = null;
  z.wv.prototype.am = !1;
  z.wv.prototype.Ou = 0;
  var NG = z.C ? "styleFloat" : "cssFloat",
    Bv = ["position", "top", "left", "width", NG],
    Cv = ["position", "top", "left", "display", NG, "marginTop", "marginLeft", "marginRight", "marginBottom"];
  z.e = z.wv.prototype;
  z.e.B = function() {
    z.wv.v.B.call(this);
    this.T(this.m())
  };
  z.e.T = function(a) {
    z.wv.v.T.call(this, a);
    z.U.add(a, "goog-scrollfloater")
  };
  z.e.C = function() {
    z.wv.v.C.call(this);
    this.rx = z.Rg(window.document.body).top - 2;
    this.sc || (this.sc = this.K().B("div", {
      style: "visibility:hidden"
    }));
    this.Ou = z.ao(this.m()).y;
    z.yv(this, this.sv);
    var a = this.Uq = new z.gl(this.un, 150, this);
    this.o().g(window, "scroll", (0, z.t)(a.fire, a));
    this.o().g(window, "resize", z.Yr(150, this.zz))
  };
  z.e.D = function() {
    z.wv.v.D.call(this);
    z.tb(z.xv, this);
    this.Uq.dispose();
    this.nA && (z.MG -= this.IF);
    delete this.sc
  };
  z.e.un = function() {
    this.sv && (z.xf(this.K()).y + this.rx > this.Ou ? Av(this) : z.zv(this))
  };
  z.e.oq = function() {
    var a = this.m(),
      b = this.rx;
    !this.nA && 0 < z.MG && (b += z.MG);
    a.style.top = b + "px"
  };
  z.e.zz = function() {
    z.zv(this);
    this.Ou = z.ao(this.m()).y;
    this.un()
  };
  z.y(z.Dv, z.wv);
  z.Dv.prototype.un = function() {
    var a = Ev(this.tag);
    if (this.sv && (!a || a === this)) {
      var a = this.UW.getBoundingClientRect(),
        b = this.rx + z.MG,
        c = b + this.jK;
      a.top < b && a.bottom > c ? Av(this) : z.zv(this)
    }
  };
  z.Dv.prototype.update = function() {
    return this.un()
  };
  z.ka(Fv);
  Fv.prototype.rf = function(a, b, c) {
    z.qg("richtexteditor", function() {
      var d = window.ZH.createRichTextEditor(a, b),
        f = d[0],
        d = d[1];
      c && c(f, d)
    })
  };
  Gv.prototype.defaults = {
    jX: [],
    YB: [],
    rP: !0
  };
  var Iv = "data-tooltip data-hovercard class style id bgcolor color size width height".split(" ");
  Gv.prototype.Zg = function() {
    var a = this;
    if (this.H.rP) this.J.on("paste", function() {
      (0, window.setTimeout)(function() {
        Jv(a.J, Kv(a))
      })
    })
  };
  z.y(Lv, z.G);
  z.e = Lv.prototype;
  z.e.defaults = {
    Dn: {
      xe: 6,
      content: "",
      method: "GET",
      source: "/people/autocomplete"
    },
    uW: "mention-popup",
    Mk: window.document.body,
    jE: "activated"
  };
  z.e.D = function() {
    this.ys();
    z.N(this.h);
    this.h = null;
    Lv.v.D.call(this)
  };
  z.e.zx = function() {
    var a = this.h = z.Ye(this.UY);
    this.gq = a.getElementsByTagName("input")[0];
    a.className = this.H.uW;
    a.style.display = "none";
    this.H.Mk.appendChild(a)
  };
  z.e.Cc = function() {
    return this.H.Mk
  };
  z.e.UY = '\x3cdiv\x3e\x3cdiv class\x3d"writing-bg"\x3e\x3cinput\x3e\x3c/div\x3e\x3cdiv class\x3d"tip"\x3e想用 @ 提到谁？\x3c/div\x3e\x3c/div\x3e';
  z.e.template = (0, z.lw)('\n    \x3c% if (data.id) { %\x3e\n        \x3cimg class\x3d"avatar" src\x3d"\x3c%\x3davatar%\x3e"\x3e\n        \x3cdiv class\x3d"body"\x3e\n            \x3cdiv class\x3d"name"\x3e\n              \x3c%\x3d label %\x3e\n              \x3c% if (badges[0]) { %\x3e\n                  \x3cspan class\x3d"OrgIcon sprite-global-icon-org-14"\n                      data-tooltip\x3d"s$b$已认证的机构"\x3e\x3c/span\x3e\n              \x3c% } %\x3e\n            \x3c/div\x3e\n            \x3cdiv class\x3d"bio"\x3e\x3c%\x3d headline %\x3e\x3c/div\x3e\n        \x3c/div\x3e\n    \x3c% } %\x3e\n');
  z.e.Bb = function() {
    return z.Mg(this.h)
  };
  z.e.open = function() {
    this.Bb() || (z.P(this.h, !0), this.gq.focus(), this.Zg(), this.dispatchEvent("open"))
  };
  z.e.close = function() {
    this.Bb() && (z.P(this.h, !1), z.U.remove(this.h, this.H.jE), this.gq.value = "", this.gq.blur(), this.ys(), this.dispatchEvent("close"))
  };
  z.e.LJ = function(a) {
    this.Bb() && !z.nf(this.h, a.target) && Mv(this, a)
  };
  z.e.Wp = function(a) {
    var b = a.keyCode,
      c = this.gq;
    if (27 === b || c === a.target && "" === c.value && (8 === b || 32 === b)) Mv(this, a), a.preventDefault(), a.stopPropagation()
  };
  z.e.Zg = function() {
    z.F(window.document, "click", this.LJ, !1, this);
    z.F(this.h, "keydown", this.Wp, !1, this)
  };
  z.e.ys = function() {
    z.md(window.document, "click", this.LJ, !1, this);
    z.md(this.h, "keydown", this.Wp, !1, this)
  };
  z.e.Gf = function() {
    var a = this,
      b = this.H.Dn,
      c = new z.dt(this.gq, {
        Wi: this.h,
        xe: b.xe,
        source: b.source,
        select: function(b) {
          (0, window.setTimeout)(function() {
            a.close();
            a.dispatchEvent({
              type: "select",
              data: {
                sW: b
              }
            })
          });
          return ""
        },
        ld: function(b, c, g) {
          g.innerHTML = a.template(b.data)
        }
      });
    c.qC(b.method);
    c.ca(b.content);
    c.addEventListener("suggestionsupdate", function() {
      z.U.enable(this.h, this.H.jE, c.Bb())
    }, !1, this);
    this.Y = c
  };
  z.e.position = function(a) {
    z.Bg(this.h, a)
  };
  z.y(Nv, z.G);
  var Qv = !!window.getSelection;
  Nv.prototype.defaults = {
    Dn: {},
    Mk: window.document.body,
    Cp: "member_mention",
    Ct: "mention-holder",
    position: function(a, b) {
      a.x += b.width + 7;
      a.y -= 5;
      z.C && 7 < z.Jc && (a.y += b.height / 2 - 9)
    }
  };
  var Xv = z.Gb({
    h_: "member_mention"
  });
  Nv.prototype.m = function() {
    return this.input
  };
  Nv.prototype.Zg = function() {
    var a = this.Ig;
    z.F(a, "cancel", function(a) {
      var c = Ov(this);
      a = a.data.originalEvent;
      c && "click" !== a.type && ("keydown" === a.type && 32 === a.keyCode && (c = c.parentNode.insertBefore(window.document.createTextNode(" "), c.nextSibling)), Pv(this, c))
    }, !1, this);
    z.F(a, "select", function(a) {
      var c = a.data.sW;
      a = z.L(this.H.Ct, this.input);
      var c = this.ts(c),
        d = a.previousSibling,
        f = window.document.createTextNode(" ");
      z.To(c, a);
      z.df(f, c);
      d && 3 === d.nodeType && !z.up(z.qf(d), " ") && z.cf(window.document.createTextNode(" "),
        c);
      Pv(this, f)
    }, !1, this);
    z.F(this.input, "click", function() {
      a.Bb() && Ov(this)
    }, !1, this);
    z.F(this.input, "keydown", function(a) {
      var c;
      if (8 === a.keyCode && (c = z.Qu())) {
        a = c.Z();
        var d = c.ia(),
          f = c.va();
        c = c.Ra();
        var g = !1;
        Wv(a.parentNode) && (f = 0, g = !0);
        Wv(d.parentNode) && (c = d.length, g = !0);
        g && z.Bu(a, f, d, c).select()
      }
    }, !1, this);
    z.F(this.input, z.Ui || z.Uj ? "keypress" : "keyup", function(a) {
      function c(a, b) {
        if (3 !== a.nodeType || "@" === a.nodeValue && Rv(a.previousSibling) || Rv(a.parentNode)) return !1;
        var c = a.nodeValue,
          d = b - 1;
        if ("@" !==
          c.slice(d, d + 1)) return !1;
        var f = c;
        0 <= d && d < c.length && (f = c.substr(0, d) + c.substr(d + 1, c.length - d - 1));
        a.nodeValue = f;
        return !0
      }
      if ("keypress" !== a.type || "@" === String.fromCharCode(a.charCode)) {
        var d, f, g, h;
        if ("keyup" === a.type) {
          if (50 !== a.keyCode) return;
          if (Qv) {
            d = window.getSelection();
            g = d.anchorNode;
            h = d.anchorOffset;
            if (!c(g, h)) return;
            z.D && !g.nextSibling && (g.nodeValue += " ");
            f = window.document.createRange();
            d.removeAllRanges();
            f.setStart(g, h - 1);
            f.setEnd(g, h - 1);
            d.addRange(f)
          } else {
            f = z.Su(window.document.selection.createRange());
            g = z.Zt(f);
            h = f.va();
            if (!c(g, h)) return;
            z.Uu(g, h - 1).select()
          }
        }
        this.Lv(a)
      }
    }, !1, this)
  };
  Nv.prototype.Lv = function(a) {
    var b = this,
      c = this.Ig;
    if (!c.Bb()) {
      var d = function(c) {
          return Rv(c) || c.className === b.H.Cp ? !1 : (a && a.preventDefault(), !0)
        },
        f = function(a) {
          c.position(a);
          c.open()
        };
      Qv ? Sv(b, d, f) : Vv(b, d, f)
    }
  };
  Nv.prototype.ts = function(a, b) {
    return z.M("a", {
      "data-hash": a.id,
      href: "/" + (a.badges[0] ? "org" : "people") + "/" + a.url_token,
      className: b || this.H.Cp,
      innerHTML: "@" + a.label
    })
  };
  z.y(z.Yv, z.Q);
  z.e = z.Yv.prototype;
  z.e.D = function() {
    this.Sa = null;
    z.Yv.v.D.call(this)
  };
  z.e.T = function(a) {
    z.Yv.v.T.call(this, a);
    var b = a.getAttribute("data-resourceid");
    b && (this.lX = a.getAttribute("data-action"), this.tq = b);
    this.status || (this.status = "normal");
    a = this.K();
    this.ud || (this.ud = a.qg("zm-editable-content", this.h)) && "1" === this.ud.getAttribute("data-disabled") && (this.disabled = !0);
    this.gc ? this.bc && (this.gc.innerHTML = this.bc) : (this.gc = a.qg("zm-editable-tip", this.h), this.bc && !this.gc && (this.gc = a.B("div", "zm-editable-tip"), this.gc.innerHTML = this.bc, a.Qt(this.gc, this.ud)));
    this.Qb = a.qg("zm-editable-editor-wrap",
      this.h);
    this.content = (0, z.ab)(this.content || this.mD ? z.qf(this.ud) : this.ud.innerHTML);
    this.je();
    aw(this)
  };
  z.e.B = function() {
    var a = this.K(),
      a = a.B("div", "zm-editable-item-wrap", [this.gc = a.B("div", "zm-editable-tip"), this.ud = a.B("div", "zm-editable-content", this.content)]);
    this.T(a)
  };
  z.e.C = function() {
    z.Yv.v.C.call(this);
    this.o().g(this.ud, "click", this.Wa);
    this.gc && this.o().g(this.gc, "click", this.Wa)
  };
  z.e.ca = function(a) {
    this.content = a;
    aw(this)
  };
  z.e.Wa = function(a) {
    var b = z.Mr(this.h, a.target),
      c = this.K();
    if (!b || !b.name) return a = c.SQ(a.target, "div", "zm-editable-tip-label"), this.isEnabled && a && this.Ng(), !0;
    a = b.name;
    switch (a) {
      case "expand":
        aw(this);
        break;
      case "collapse":
        aw(this);
        break;
      case "edit":
        this.qz();
        this.dispatchEvent("click_edit");
        break;
      case "save":
        this.ut();
        break;
      case "cancel":
        this.dispatchEvent("cancel_edit");
        this.hj();
        break;
      default:
        return this.mt(a)
    }
    return !0
  };
  z.e.qz = function() {
    if (z.Y.Ie) {
      if (!1 === this.dispatchEvent("beforeedit")) return !1;
      this.init();
      this.Ng()
    } else(new z.yq).F(!0)
  };
  z.e.ut = function() {
    var a = z.Ar(this.rg()),
      b = /<embed/i.test(a);
    if (/<img/i.test(a) || b || this.nI || a && Br(a).length) a !== this.content || this.FG ? (this.dispatchEvent("save_changed"), this.Fh(a)) : (this.dispatchEvent("save_unchanged"), this.hj())
  };
  z.e.Fh = function(a) {
    if (!this.da || !this.da.Dc())
      if (this.xs && this.aL) {
        this.da = new z.wp(!0);
        this.o().xa(this.da, "success", this.sE);
        var b = new z.Ah(this.params.join("\x26"));
        b.add(this.xs, a).add("field_name", this.xs);
        this.da.ajax(this.aL, b.toString())
      } else this.dispatchEvent("change")
  };
  z.e.hj = function() {
    this.status = "normal";
    this.je()
  };
  z.e.sE = function() {
    var a = z.Wn(this.da);
    if (!a) return z.V.message("网络异常");
    if (a.r) return z.V.message(a.msg);
    this.ca(a.msg);
    this.hj();
    this.dispatchEvent("saveSuccess");
    this.dispatchEvent("change")
  };
  z.e.$a = function() {
    return this.content
  };
  z.e.$y = z.m(39);
  z.e.isContentEditable = function() {
    return !this.Td
  };
  z.e.rg = function() {
    return (0, z.Tr)(z.La(this.Sa.value))
  };
  z.e.mt = function(a) {
    this.dispatchEvent(a);
    return !0
  };
  z.e.init = function() {
    this.KS || (this.KS = !0, this.rf())
  };
  z.e.rf = function() {
    var a = this.K();
    this.Qb ? (this.ic = a.qg("zm-command", this.Qb), this.Sa = a.qg("zm-editable-editor-input", this.Qb)) : (this.Qb = a.B("div", "zm-editable-editor-wrap clearfix", this.Oj = a.B("div", "zm-editable-editor-outer", a.B("div", "zm-editable-editor-inner zg-form-text-input", this.Sa = a.B("textarea", "zm-editable-editor-input")))), a.hA(this.Qb, this.ud), this.Kl());
    this.Sa && this.Sa.tagName && "TEXTAREA" === this.Sa.tagName && !this.UF && new z.as(this.Sa);
    this.Rp()
  };
  z.e.ready = function(a) {
    this.OF.done(a)
  };
  z.e.Rp = function() {
    this.o().g(this.ic, "click", this.Wa);
    this.bw && $v(this);
    Zv(this);
    this.OF.resolveWith(this)
  };
  z.e.Kl = function() {
    this.ic = z.M("div", "zm-command", [this.ds = z.M("a", {
      "class": "zm-command-cancel",
      name: "cancel",
      href: "javascript:;"
    }, "取消"), this.eo = z.M("a", {
      "class": "zg-r3px zg-btn-blue",
      name: "save",
      href: "javascript:;"
    }, "保存")]);
    this.Qb.appendChild(this.ic)
  };
  z.e.je = function() {
    this.vs && z.U.remove(this.h, this.vs);
    "editing" === this.status ? (this.gc && z.P(this.gc, !1), this.Qb && z.P(this.Qb, !0), z.P(this.ud, !1), this.vs = "zm-editable-status-editing") : (this.gc && (!this.nI || this.content || this.disabled ? z.P(this.gc, !1) : z.P(this.gc, !0)), this.Qb && z.P(this.Qb, !1), this.content ? z.P(this.ud, !0) : z.P(this.ud, !1), this.vs = "zm-editable-status-normal");
    z.U.add(this.h, this.vs)
  };
  z.e.Ng = function() {
    this.Us || (this.init(), this.ready(function() {
      this.status = "editing";
      this.je();
      this.Bq()
    }))
  };
  z.e.Bq = function() {
    if (this.tq) this.Us = !0, this.Ky();
    else {
      var a = this.Sa,
        b;
      b = wo(this.content.replace(/<br \/>/g, "\n").replace(/<br>/g, "\n")).replace(/<a.*?href="(.*?)".*?<\/a>/g, "$1");
      a.value = b
    }
  };
  z.e.RG = function() {
    var a = [];
    this.disabled || a.push('\x3ca href\x3d"javascript:;" class\x3d"zu-edit-button" name\x3d"edit"\x3e\x3ci class\x3d"zu-edit-button-icon"\x3e\x3c/i\x3e修改\x3c/a\x3e');
    return a.join("")
  };
  z.e.Ky = function() {
    this.Us || (this.Us = !0, z.xp(this.lX + "?id\x3d" + this.tq, (0, z.t)(function(a) {
      this.Us = !1;
      a = z.Wn(a.target);
      a.r ? z.V.message(a.msg) : this.yv(a.msg)
    }, this), "GET"))
  };
  z.e.yv = function(a) {
    this.Sa.value = a
  };
  z.y(z.bw, z.Yv);
  z.e = z.bw.prototype;
  z.e.yv = function(a) {
    this.Td ? z.bw.v.yv.call(this, a) : (a || (a = z.B ? "" : "\x3cdiv\x3e\x3c/div\x3e"), this.Sa.be(!1, a, !0))
  };
  z.e.Bq = function() {
    this.ready(function() {
      this.tq ? this.Ky() : this.Td ? z.bw.v.Bq.call(this) : this.content ? this.Sa.be(!1, this.content, !1, !0) : this.Sa.be(!1, z.D ? "\x3cdiv\x3e\x3cbr\x3e\x3c/div\x3e" : "\x3cdiv\x3e\x3c/div\x3e", !1, !0)
    })
  };
  z.e.D = function() {
    z.Cc(this.Sa);
    z.N(this.Qb);
    this.qr = this.SD = this.Bg = this.Ul = this.ZC = this.Oj = this.Qb = null;
    z.bw.v.D.call(this)
  };
  z.e.rf = function() {
    if (this.Td) z.bw.v.rf.call(this);
    else {
      var a = this.K();
      this.Qb = a.B("div", "zm-editable-editor-wrap", this.Oj = a.B("div", "zm-editable-editor-outer", [this.ZC = a.B("div", "zm-editable-toolbar-container"), this.Ul = a.B("div", "zm-editable-editor-field-wrap", this.Bg = a.B("div", {
        id: this.xU,
        className: "zm-editable-editor-field-element"
      }))]));
      this.SD = (0, window.$)(this.ZC);
      this.qr = (0, window.$)(this.Qb);
      this.qr.hide();
      a.hA(this.Qb, this.ud);
      this.tq || (this.Bg.innerHTML = this.content);
      a = {
        loremIpsum_: this.MA,
        enableFullScreen: this.sy,
        content: this.content,
        useScraper_: this.mZ,
        canUploadMedia_: this.Bx,
        useRemoveFormat_: this.wM
      };
      this.Kl();
      Fv.aa().rf(this.Qb, a, (0, z.t)(this.Rp, this));
      z.Tj || (this.Pg = new z.Dv(null, this.Oj), this.Pg.w(this.ZC), z.yv(this.Pg, !1), z.zv(this.Pg), z.Ac(this, this.Pg))
    }
  };
  z.e.Rp = function(a, b) {
    if (this.Td) z.bw.v.Rp.call(this);
    else {
      this.Sa = a;
      this.qr.show();
      z.bw.v.Rp.call(this);
      cw(this, a, b);
      var c = a.Xb.CodePlugin;
      c && (c.TX(b), c.Zg())
    }
  };
  z.e.Ng = function() {
    z.bw.v.Ng.call(this);
    this.ready(function() {
      this.Td || this.rQ || (this.rQ = !0, z.ld(this.Sa, "load", function() {
        var a = this.Sa,
          b = a.Xb.FullScreenPlugin;
        z.B && (a = a.Ka);
        z.F(a, ["focus", "blur"], function(a) {
          b && z.U.has(window.document.body, b.H.Ao) || dw(this, "focus" === a.type)
        }, !1, this)
      }, !1, this), this.Sa.we())
    })
  };
  z.e.rg = function() {
    if (this.Td) return z.bw.v.rg.call(this);
    var a = this.Sa;
    return Sr(a.m(), !0) ? "" : a.dm()
  };
  z.e.je = function() {
    z.bw.v.je.call(this);
    this.Pg && z.yv(this.Pg, "editing" === this.status)
  };
  z.y(z.fw, z.T);
  z.ka(z.fw);
  var OG = '\x3cdiv class\x3d"zh-add-question-form"\x3e\n  \x3cdiv class\x3d"js-add-question-splash add-question-splash-page" \x3e\n    \x3cp\x3e\n      知乎是一个真诚、友善、认真、互助的社区\x3cbr\x3e\n      我们希望每一个疑惑都有解答，好的问题更容易得到好答案 \x3ca href\x3d"//www.zhihu.com/question/19555761"\x3e如何提一个好问题？\x3c/a\x3e\n    \x3c/p\x3e\n    \x3cp\x3e\n      \x3cb\x3e提问应遵循真实、客观、简洁、明确、规范的原则\x3c/b\x3e\x3cbr\x3e\n      1、提问应尽可能简洁明了，避免「请问」「有谁知道」「谢谢！」等与问题本身无关的附加语。\x3cbr\x3e\n      2、应避免使用「为神马」「童鞋」「肿么办」等网络用语。\x3cbr\x3e\n      3、基于个人判断或传言的问题，在提问时应在补充说明里详细说明原由\x3cbr\x3e\n      4、避免太宽泛问题，如调查性的问题容易变成每个人都可以发表观点，但对其他人没有价值。\x3cbr\x3e\n    \x3c/p\x3e\n    \x3cp\x3e\n      \x3cb\x3e知乎禁止这些提问\x3c/b\x3e\x3cbr\x3e\n      1、和已有问题完全重复的问题，\x3cb\x3e为避免重复，提问前可以先进行搜索\x3c/b\x3e\x3cbr\x3e\n      2、招聘 / 求职、交易 / 合作、寻人 / 征友、召集 / 赠送、求码类内容\x3cbr\x3e\n      3、投票类问题。例如：你支持方舟子还是韩寒？\x3cbr\x3e\n      4、作业或其他希望代为完成个人任务类的内容，以及针对个人具体病情的求医问药类问题\x3cbr\x3e\n      完整的提问建议可查看 \x3ca href\x3d"//www.zhihu.com/question/19806261"\x3e知乎的提问规范有哪些？\x3c/a\x3e\x3cbr\x3e\n    \x3c/p\x3e\n    \x3cdiv class\x3d"before-ask-form"\x3e\n      \x3cb\x3e提问前请先搜索\x3c/b\x3e\n      \x3cdiv style\x3d"position:relative;margin-top:18px;"\x3e\n        \x3cinput type\x3d"text" class\x3d"zg-form-text-input" id\x3d"js-before-ask" placeholder\x3d"请输入你的问题"\x3e\n      \x3c/div\x3e\n    \x3c/div\x3e\n  \x3c/div\x3e\n  \x3cform class\x3d"js-add-question-form"\x3e\n    \x3cdiv class\x3d"zg-section-big clearfix"\x3e\n      \x3cdiv id\x3d"zm-modal-dialog-info-wrapper"\x3e\x3c/div\x3e\n      \x3cdiv style\x3d"display: none;position: relative;" id\x3d"zm-modal-dialog-warnmsg-wrapper"\x3e\x3cdiv class\x3d"zm-modal-dialog-warnmsg zm-modal-dialog-guide-warn-message zg-r5px"\x3e\x3c/div\x3e\n        \x3ca name\x3d"close" title\x3d"关闭" href\x3d"javascript:;" class\x3d"zu-global-notify-close"  style\x3d"display:none"\x3ex\x3c/a\x3e\n        \x3cspan class\x3d"zm-modal-dialog-guide-title-msg"\x3e\x3c/span\x3e\n      \x3c/div\x3e\n      \x3cdiv class\x3d"zg-form-text-input add-question-title-form" style\x3d"position: relative;"\x3e\n        \x3ctextarea rows\x3d"1" class\x3d"zg-editor-input" title\x3d"在这里输入问题" id\x3d"zh-question-suggest-title-content"\x3e\x3c/textarea\x3e\n      \x3c/div\x3e\n      \x3cspan id\x3d"js-title-length-err-msg" class\x3d"title-length-err-msg zg-right"\x3e\x3c/span\x3e\n      \x3cdiv id\x3d"zh-question-suggest-ac-wrap" class\x3d"question-suggest-ac-wrap"\x3e\x3c/div\x3e\n    \x3c/div\x3e\n    \x3cdiv class\x3d"zg-section-big"\x3e\n      \x3cdiv style\x3d"display: none;position: relative;" class\x3d"zm-modal-dialog-warnmsg-wrapper"\x3e\n        \x3cdiv class\x3d"zm-modal-dialog-warnmsg zm-modal-dialog-guide-warn-message zg-r5px"\x3e\x3c/div\x3e\n        \x3ca name\x3d"close" title\x3d"关闭" href\x3d"javascript:;" class\x3d"zu-global-notify-close" style\x3d"display:none"\x3ex\x3c/a\x3e\n        \x3cspan class\x3d"zm-modal-dialog-guide-title-msg"\x3e\x3c/span\x3e\n      \x3c/div\x3e\n      \x3cdiv class\x3d"add-question-section-title"\x3e\n        \x3cspan class\x3d"zg-right extra-editor-toolbar hidden-phone"\x3e\n          \x3cdiv class\x3d"js-toggle-editor-toolbar"\x3e\x3ci class\x3d"tr-inline-icon z-ico-textedit"\x3e\x3c/i\x3e\x3c/div\x3e\n          \x3cdiv class\x3d"js-editor-add-pic"\x3e\x3ci class\x3d"tr-inline-icon tr-image"\x3e\x3c/i\x3e\x3c/div\x3e\n          \x3cdiv class\x3d"js-editor-add-video"\x3e\x3ci class\x3d"tr-inline-icon tr-video"\x3e\x3c/i\x3e\x3c/div\x3e\n        \x3c/span\x3e\n        问题说明（可选）：\n        \x3cspan id\x3d"zh-question-form-detail-err"\x3e\x3c/span\x3e\n      \x3c/div\x3e\n      \x3cdiv id\x3d"zh-question-suggest-detail-container"\x3e\n        \x3cdiv class\x3d"zm-editable-content" data-disabled\x3d"1"\x3e\x3c/div\x3e\n      \x3c/div\x3e\n    \x3c/div\x3e\n    \x3cdiv class\x3d"zm-add-question-form-topic-wrap"\x3e\n      \x3cdiv class\x3d"add-question-section-title"\x3e\n        \x3cspan class\x3d"zg-gray zg-right hidden-phone"\x3e话题越精准，越容易让相关领域专业人士看到你的问题\x3c/span\x3e\n        选择话题：\n        \x3cspan id\x3d"zh-question-form-tag-err"\x3e\x3c/span\x3e\n      \x3c/div\x3e\n      \x3cdiv id\x3d"zh-question-suggest-topic-container" class\x3d"zm-tag-editor zg-section"\x3e\n        \x3cdiv class\x3d"zm-tag-editor-labels"\x3e\x3c/div\x3e\n        \x3cdiv id\x3d"zh-question-suggest-autocomplete-container"\x3e\x3c/div\x3e\n      \x3c/div\x3e\n    \x3c/div\x3e\n    \x3cdiv class\x3d"zm-command"\x3e\n      ' + (z.Y.Qc ?
      "" : '\x3clabel class\x3d"zm-question-form-hide-in-about-question-el zg-left"\x3e\n        \x3cinput type\x3d"checkbox" value\x3d"1" class\x3d"zg-addq-isanon"\x3e匿名\n      \x3c/label\x3e') + '\n      \x3ca href\x3d"javascript:;" name\x3d"cancel" class\x3d"zm-command-cancel"\x3e取消\x3c/a\x3e\n      \x3ca href\x3d"javascript:;" name\x3d"addq" class\x3d"zg-r5px zu-question-form-add zg-btn-blue"\x3e发布\x3c/a\x3e\n      \x3ca name\x3d"jumpq" class\x3d"zg-r5px zg-btn-blue zu-question-form-jump" style\x3d"display:none;"\x3e查看问题\x3c/a\x3e\n    \x3c/div\x3e\n  \x3c/form\x3e\n\x3c/div\x3e',
    iw = z.Im.create("AddQuestionForm" + z.Y.Ag);
  z.e = z.fw.prototype;
  z.e.C = function() {
    z.fw.v.C.call(this);
    var a = z.Ye((0, z.ab)(OG));
    this.S().appendChild(a);
    this.Pc = z.Uo("zg-editor-input", this.h)[0];
    this.Bl = z.L("zu-question-form-add", this.h);
    this.Un = z.L("zu-question-form-jump", this.h);
    this.Ek = z.J("zm-modal-dialog-warnmsg-wrapper");
    this.eu = z.J("js-title-length-err-msg");
    this.QB = z.L("zm-modal-dialog-warnmsg-wrapper", this.h);
    this.TF = z.J("zh-question-form-detail-err");
    this.PC = z.J("zh-question-form-tag-err");
    this.wP = z.L("zu-global-notify-close", this.Ek);
    this.QY = z.L("zu-global-notify-close",
      this.QB);
    this.$S = z.J("zm-modal-dialog-info-wrapper");
    this.wu = z.L("zm-modal-dialog-warnmsg", this.Ek);
    z.L("zm-modal-dialog-warnmsg", this.QB);
    this.eF = z.L("zg-addq-isanon", this.h);
    this.KY = z.L("js-toggle-editor-toolbar", this.h);
    this.cO = z.L("js-editor-add-pic", this.h);
    this.gO = z.L("js-editor-add-video", this.h);
    this.mY = z.L("js-add-question-splash", this.h);
    this.YI = z.L("js-add-question-form", this.h);
    this.QE = z.J("js-before-ask");
    this.cQ = z.J("zh-question-suggest-detail-container");
    this.PY = z.J("zh-question-suggest-topic-container");
    this.Vz();
    this.$A ? (mw(this, !0), this.Tz()) : (this.ap(), mw(this, !1));
    z.Y.Qc && Aw(this)
  };
  z.e.ql = z.m(31);
  z.e.show = z.Rq(function(a) {
    this.H = window.$.extend({
      sn: null,
      Hk: null
    }, a || {});
    this.F(!0)
  }, !0, "#ask");
  z.e.Km = function() {
    z.fw.v.Km.call(this);
    this.H = {}
  };
  z.e.Vz = function() {
    this.Fa("提问");
    z.Sj(this, 550);
    z.Kj(this, null);
    this.J = (0, window.$)(this.h);
    this.J.addClass("absolute-position");
    this.F(!0);
    this.ga()
  };
  z.e.ap = z.Pj(function() {
    ow(this);
    this.dc();
    hw(this)
  });
  z.e.ar = {};
  z.e.ar.PB = '\x3c% forEach(questions, function(q, i) { q \x3d q.data; %\x3e\x3cdiv class\x3d"ac-row" data-url_token\x3d"\x3c%\x3dq.url_token%\x3e" data-answer_count\x3d"\x3c%\x3dq.answer_count%\x3e"\x3e\x3c% if (q.is_star) { %\x3e\x3ca class\x3d"zg-star" data-tooltip\x3d"s$b$优质问答" href\x3d"/question/\x3c%\x3dq.url_token%\x3e"\x3e\x3c/a\x3e\x3c% } %\x3e\x3ca class\x3d"zippy-indicator"\x3e\x3ci\x3e\x3c/i\x3e\x3c/a\x3e\x3ca style\x3d"color:#222" href\x3d"/question/\x3c%\x3dq.url_token%\x3e?q\x3d\x3c%\x3d token %\x3e"\x3e\x3c%\x3dq.title%\x3e\x3c/a\x3e \x3cspan class\x3d"zm-ac-gray"\x3e\x3c%\x3d parseInt(q.answer_count) \x3e 0 ? q.answer_count + " 个回答" : "还没有回答" %\x3e \x3c/span\x3e\x3c/div\x3e\x3c% }) %\x3e';
  z.e.ar.GO = '\x3c% forEach(answers, function(a, i) { %\x3e\x3cdiv class\x3d"zippy-row"\x3e\x3cdiv class\x3d"summary-item"\x3e\x3ca class\x3d"inline-block zm-item-vote-count" href\x3d"/question/\x3c%\x3dquestion_url_token%\x3e/answer/\x3c%\x3da.url_token%\x3e"\x3e\x3c%\x3da.vote_count%\x3e\x3c/a\x3e\x3c% if (a.author.url_token) { %\x3e\x3ca class\x3d"inline-block" href\x3d"/people/\x3c%\x3da.author.url_token%\x3e"\x3e\x3cspan class\x3d"author"\x3e\x3c%-a.author.name%\x3e\x3c/span\x3e \x3c/a\x3e\x3c% } else { %\x3e\x3cspan class\x3d"inline-block anon-author"\x3e\x3c%-a.author.name%\x3e\x3c/span\x3e \x3c% } %\x3e\x3cspan class\x3d"inline-block summary ellipsis"\x3e\x3c%\x3da.summary_text%\x3e\x3c/span\x3e\x3ca class\x3d"inline-block" href\x3d"/question/\x3c%\x3dquestion_url_token%\x3e/answer/\x3c%\x3da.url_token%\x3e"\x3e阅读全部 »\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e\x3c% }) %\x3e';
  z.e.Tz = function() {
    function a() {
      mw(b, !1);
      b.Pc.value = d.value
    }
    var b = this,
      c = (0, z.lw)(this.ar.PB),
      d = this.QE,
      f = new et;
    this.VN = new z.dt(d, {
      source: "/question/autocomplete",
      Wi: d.offsetParent,
      ld: function() {},
      render: function(b, f, k) {
        b = (0, window.$)(b.m());
        b.html(c({
          forEach: z.A,
          questions: k,
          token: (0, window.encodeURIComponent)(this.cc)
        }));
        0 < k.length && b.prepend('\x3cdiv class\x3d"ac-row ac-first"\x3e\x3cb\x3e你想问的是不是：\x3c/b\x3e\x3c/div\x3e').append((0, window.$)('\x3cdiv class\x3d"ac-row ac-last iwanttoask"\x3e\x3ca href\x3d"#"\x3e不是，我要提一个新问题 »\x3c/a\x3e\x3c/div\x3e'));
        0 === k.length && d.value && (b.html('\x3cdiv class\x3d"ac-row ac-last iwanttoask"\x3e\x3ca href\x3d"#"\x3e没有找到相关问题，马上提问 »\x3c/a\x3e\x3c/div\x3e').show(), k.push("fake row"));
        b.off("click").on("click", ".iwanttoask", a)
      },
      gA: f
    });
    this.VN.On = !1
  };
  z.e.resetForm = function() {
    this.Pc.value = "";
    this.La && this.La.aw();
    this.Ek && z.P(this.Ek, !1);
    this.La.reset()
  };
  z.e.dc = function() {
    this.o().g(this.h, "click", this.oR);
    this.XT && this.XT.w(this.Pc);
    this.CK = new z.as(this.Pc);
    this.o().g(this.CK, "change", this.aK);
    this.o().g(this.wP, "click", function() {
      z.P(this.Ek, !1);
      z.P(this.$S, !0)
    });
    this.o().g(this.QY, "click", function() {
      z.P(this.QB, !1)
    });
    this.o().g(this, "afterhide", function() {
      sw(this)
    });
    rw(this)
  };
  z.e.oR = function(a) {
    if (a = z.Mr(this.h, a.target)) switch (a = a.name, a) {
      case "expand":
        z.U.add(this.h, "zg-qform-expanded");
        break;
      default:
        this.mt(a)
    }
  };
  z.e.Hk = function() {
    var a = z.Wn(this.xhr);
    if (!a) return qw(this, !1), z.V.message("网络异常");
    if (a.r) {
      if (281 === a.errcode) {
        var b = new ww;
        b.Pe = a.msg;
        b.level = 3;
        tw(this, b, !0)
      } else z.V.message(a.msg);
      qw(this, !1)
    } else z.Uh.set("__Q_ISNEWLYCREATED__", "yep"), iw.clear(), (0, window.$)(window).off("beforeunload.AddQuestionForm"), a = a.msg, b = a.match(/\/question\/(\d+)/)[1], this.H.Hk ? this.H.Hk({
      url: a,
      gb: b
    }) : window.location.href = a
  };
  z.e.mt = function(a) {
    if ("cancel" === a) this.F(!1);
    else if ("addq" === a) {
      a = xw(this);
      var b = uw(this);
      if (!(1 < b.level || 1 < a.level)) {
        var c = yw(this),
          d = new ww;
        3E3 < Or(c) ? (d.level = 3, d.Pe = "请控制在 3000 字以下") : d.level = 0;
        c = 1 < d.level;
        this.TF.innerHTML = d.Pe;
        z.P(this.TF, c);
        pw(this, c, "detail");
        this.YJ()
      }
      pw(this, 1 < b.level || 1 < a.level, "title");
      this.XF ? tw(this, 1 < a.level ? a : b, !0) : (0, window.$)(this.Bl).attr("disabled") || (qw(this, !0), this.xhr = new z.wp(!0), this.o().xa(this.xhr, "success", this.Hk), this.xhr.ajax("/question/add", zw(this).Vd()),
        this.La.trackEvent())
    }
  };
  z.e.aK = function() {
    var a = xw(this),
      b = uw(this);
    "toolong" === a.name || "buffer" === a.name ? (this.eu.innerHTML = a.Pe, z.P(this.eu, !0)) : (this.eu.innerHTML = a.Pe, z.P(this.eu, !1));
    "multiquestionmark" === b.name || "duplicatedquestion" === b.name ? tw(this, b, !0) : tw(this, b, !1);
    pw(this, 1 < b.level, "title")
  };
  z.e.YJ = function() {
    var a = !1;
    1 > this.La.data.length ? (a = !0, this.PC.innerHTML = "至少添加一个话题") : 5 < this.La.data.length && (a = !0, this.PC.innerHTML = "最多添加五个话题");
    z.P(this.PC, a);
    pw(this, a, "topic")
  };
  z.e.$U = function() {
    this.Vb && ew(this.Vb)
  };
  Bw.prototype.init = function() {
    var a = (0, window.$)("#zh-question-related-questions");
    if (a.length) {
      var b = (0, window.$)("li", a),
        c = function(a, b, c) {
          var h = 1,
            k = Math.ceil(a.length / b);
          return {
            next: function() {
              1 !== k && (h = h === k ? 1 : h + 1, c(h))
            },
            NP: function() {
              var c = (h - 1) * b;
              return a.slice(c, c + b)
            }
          }
        }(b, 5, function() {
          b.attr("hidden", "true");
          c.NP().removeAttr("hidden")
        });
      (0, window.$)(".next", a).click(function() {
        c.next();
        z.S("question_answer", "click_sidebarrelatedquestions_pager")
      });
      b.each(function(a, b) {
        z.X.vb(b, {
            module: "QuestionItem"
          },
          function() {
            return {
              card: {
                card_type: "Content",
                content: {
                  type: "Question",
                  id: b.getAttribute("data-id")
                }
              }
            }
          })
      })
    }
  };
  z.n(z.Cw, z.Bk);
  z.Cw.prototype.B = function() {
    z.Bk.prototype.B.call(this);
    this.ca((0, window.$)(".phone-verification-template").html())
  };
  z.Cw.prototype.C = function() {
    z.Bk.prototype.C.call(this);
    var a = (0, window.$)(".view.verification", this.Yc),
      b = new z.Vk(this.zo);
    this.L(b);
    b.nd(this.Yf);
    b.w(a[0])
  };
  z.n(Dw, z.Q);
  Dw.prototype.C = function() {
    z.Q.prototype.C.call(this);
    this.nf()
  };
  Dw.prototype.nf = function() {
    var a = this,
      b = this.m();
    this.ml = (0, window.$)(".SignFlow-panel", b);
    this.ml.on("click", ".switch-to-login", function() {
      a.ml.filter(":visible").attr("hidden", !0).siblings().removeAttr("hidden");
      a.qa({
        category: "sign_in",
        action: "switch_to_sign_in_box_appear"
      });
      z.X.trackEvent(a.ml, {
        action: "Click",
        element: "Button",
        element_name: "SignIn"
      })
    });
    var c = (0, window.$)(".LoginForm", b)[0],
      d = new z.Rk({
        Cn: z.Sk
      });
    d.nd(this.Yf);
    d.w(c);
    b = (0, window.$)(".SignupForm", b)[0];
    c = new z.Uk;
    c.nd(this.Yf);
    c.w(b);
    c.g("success", function(b) {
      b = new z.Cw(b.data);
      b.Fb(a);
      b.F(!0)
    })
  };
  z.Ca(Dw.prototype, z.cn);
  z.n(Ew, z.lk);
  Ew.prototype.C = function() {
    z.lk.prototype.C.call(this);
    z.Sj(this, 310)
  };
  Ew.prototype.B = function() {
    z.lk.prototype.B.call(this);
    this.ca('\x3cp class\x3d"title DownloadAppDialog-title"\x3e扫描二维码下载知乎 App\x3c/p\x3e\n  \x3cdiv class\x3d"DownloadAppDialog-QRCode"\x3e\x3c/div\x3e')
  };
  z.n(Fw, z.T);
  Fw.prototype.C = function() {
    z.T.prototype.C.call(this);
    this.Fa("下载知乎客户端");
    z.Sj(this, 310);
    this.Ae(!0)
  };
  Fw.prototype.B = function() {
    z.T.prototype.B.call(this);
    this.ca('\x3cp class\x3d"title DownloadAppDialog-title"\x3e扫描二维码下载知乎 App\x3c/p\x3e\n  \x3cdiv class\x3d"DownloadAppDialog-QRCode"\x3e\x3c/div\x3e')
  };
  Gw.prototype.init = function() {
    this.aA();
    Hw();
    Iw();
    Jw(this)
  };
  Gw.prototype.aA = function() {
    var a = (0, window.$)("#SidebarSignFlow")[0];
    if (a) {
      var b = function(b) {
        var d = (0, window.$)(".account", a);
        b || d.attr("name", "account").attr("aria-label", "手机号或邮箱").attr("data-placeholder", "手机号或邮箱");
        (0, window.$)("[data-placeholder]", a).attr("placeholder", function() {
          return (0, window.$)(this).attr("data-placeholder")
        })
      };
      window.$.get("/register/is_domestic").then(function(c) {
        b(c.value);
        c = new Dw;
        c.nd("sidebar_signflow");
        c.w(a)
      })
    }
  };
  z.n(Kw, z.Q);
  Kw.prototype.C = function() {
    var a = this;
    z.Q.prototype.C.call(this);
    var b = this.m(),
      c = (0, window.$)(b),
      d = c.find(".shameimaru-link"),
      f = c.find(".shameimaru-close"),
      g = c.find(".shameimaru-pixel"),
      h = c.data("close"),
      k = c.data("info"),
      l = JSON.parse(c.find('meta[itemprop\x3d"view_url"]').attr("content"));
    z.X.vb(this, {
      module: "AdItem"
    }, function() {
      return {
        card: {
          card_type: "Content",
          content: [z.Mw(k)]
        }
      }
    });
    z.Ln(b, function() {
      z.X.trackCardShow(a, {
        element: "Image"
      });
      l.forEach(function(a) {
        return z.Lw(a)
      })
    });
    d.one("click", function() {
      var a =
        d.attr("href");
      d.attr("href", z.Wo(a, "click", 1))
    });
    g.on("load", function() {
      z.X.trackEvent(a, {
        element: "Image",
        action: "Load"
      })
    });
    f.one("click", function(b) {
      b.preventDefault();
      z.Lw(h);
      z.X.trackEvent(a, {
        element: "Button",
        action: "Ignore"
      });
      c.fadeOut(500, function() {
        return c.remove()
      });
      a.dispose()
    })
  };
  z.n(Ow, z.Q);
  Ow.prototype.init = function() {
    var a = (0, window.$)(".AppPromotionBar");
    this.$f = a;
    var b = this;
    if (a.length && (0, window.$)("html").hasClass("is-AppPromotionBarVisible")) a.on("click", ".AppPromotionBar-closeButton, .AppPromotionBar-downloadButton", function() {
      (0, window.$)(this).hasClass("AppPromotionBar-downloadButton") ? z.S("app-promotion", "click_mobileweb_app_dl_bar_download_btn") : z.S("app-promotion", "click_mobileweb_app_dl_bar_close_btn");
      z.Uh.set("hideAppPromotionBar", "true");
      Pw(b)
    })
  };
  var Sw;
  z.n(Vw, z.Q);
  z.e = Vw.prototype;
  z.e.init = function() {
    var a = window.document.querySelector(".js-WechatLoginIntro");
    a && this.w(a)
  };
  z.e.C = function() {
    z.Q.prototype.C.call(this);
    this.h.querySelector(".js-login").addEventListener("click", this.ES.bind(this));
    this.h.querySelector(".js-other").addEventListener("click", this.lS.bind(this));
    this.h.querySelector(".js-close").addEventListener("click", this.close.bind(this));
    z.Ai({
      action: "show",
      category: "wechat-login-intro"
    })
  };
  z.e.ES = function() {
    z.Ai({
      category: "wechat_login_intro",
      action: "click_main"
    })
  };
  z.e.lS = function() {
    (new z.Sk).show();
    z.Ai({
      category: "wechat_login_intro",
      action: "click_other"
    })
  };
  z.e.close = function() {
    this.h.parentNode.removeChild(this.h);
    window.$.post("/intro/wechat/uninterest");
    z.Ai({
      category: "wechat_login_intro",
      action: "close"
    })
  };
  z.ka(Ww);
  var Yw = z.Im.create("Report" + z.Y.Ag);
  Ww.prototype.ON = '\x3cdiv id\x3d"zh-feedback-form"\x3e\x3cselect name\x3d"type" class\x3d"zg-editor-type zg-right"\x3e\x3coption value\x3d"help"\x3e使用帮助 \x3c/option\x3e\x3coption value\x3d"bug"\x3e问题反馈\x3c/option\x3e\x3coption value\x3d"search_suggest"\x3e搜索反馈\x3c/option\x3e\x3coption value\x3d"suggest"\x3e功能建议\x3c/option\x3e\x3c/select\x3e\x3cdiv class\x3d"zg-report-title"\x3e\x3cspan class\x3d"zg-gray-darker"\x3e请填写你的反馈内容\x3c/span\x3e\x3cspan class\x3d"zg-report-msg" style\x3d"display:none;"\x3e请选择反馈种类：\x3c/span\x3e\x3c/div\x3e\x3cdiv class\x3d"zg-editor-simple-wrap zg-form-text-input zg-report-content"\x3e\x3ctextarea class\x3d"zg-editor-input" name\x3d"content"\x3e\x3c/textarea\x3e\x3c/div\x3e\x3c/div\x3e';
  Ww.prototype.defaults = {
    title: "建议和反馈"
  };
  Ww.prototype.nf = function(a) {
    var b = (0, window.$)("#zh-feedback-form"),
      c = (0, window.$)("select", b),
      b = (0, window.$)("textarea", b);
    new z.as(b[0]);
    c.toggle(!a.type);
    b.html(Yw.get("content") || "");
    b.on("input change", function() {
      Yw.set("content", this.value)
    })
  };
  Ww.prototype.create = function(a) {
    var b = window.$.extend(this.defaults, a || {});
    z.V.confirm(b.title, this.ON, function(a) {
      if (a) return Xw(b)
    }, this);
    this.nf(b)
  };
  var PG, RG;
  RG = {
    "rt:button": function() {
      (0, z.QG)(this, "roundtable", null, ["zg-btn-follow", "zg-btn-unfollow"])
    },
    "rt:link": function() {
      (0, z.QG)(this, "roundtable", null, null, {
        follow_text: "关注圆桌"
      })
    },
    "c:link": function() {
      (0, z.QG)(this, "column", null, null, {
        follow_text: "关注专栏"
      })
    },
    "c:button": function() {
      (0, z.QG)(this, "column", null, ["zg-btn-follow", "zg-btn-unfollow"])
    },
    "q:link": function() {
      (0, z.QG)(this, "question", null, null, {
        follow_text: "关注问题"
      })
    },
    "m:link": function() {
      var a = this.getAttribute("data-follow_text");
      (0, z.QG)(this, "people",
        null, null, a ? {
          follow_text: a
        } : {})
    },
    "t:link": function() {
      (0, z.QG)(this, "topic", null, null, {
        follow_text: "关注话题"
      })
    },
    "t:link:simple": function() {
      (0, z.QG)(this, "topic")
    },
    "m:button": function() {
      var a = this;
      (0, z.QG)(a, "people", function() {
        a.getAttribute("data-followme") && (z.U.has(a, "zg-btn-follow") ? a.setAttribute("data-tooltip", "s$b$对方已关注你") : a.setAttribute("data-tooltip", "s$b$已互相关注"))
      }, ["zg-btn-follow", "zg-btn-unfollow"])
    },
    "q:fi:button": function() {
      var a = this;
      (0, z.QG)(a, "question", function(b) {
        (0, window.$)(".label",
          a).text(b ? "取消关注" : "关注");
        var c = (0, window.$)(".count", a);
        b = Number(c.data("count")) + (b ? 1 : -1);
        c.length && (b = Math.max(b, 0), c.text("（" + b + "）").data("count", b))
      }, ["unfollowing", "following"])
    },
    "q:m:button": function() {
      (0, z.QG)(this, "question", null, ["zg-btn-green", "zg-btn-white"], {
        follow_text: "关注问题"
      })
    },
    "f:button": function() {
      (0, z.QG)(this, "favlist", null, ["zg-btn-follow", "zg-btn-unfollow"])
    },
    "f:link": function() {
      (0, z.QG)(this, "favlist", null, null, {
        follow_text: "关注收藏夹"
      })
    },
    "t:button": function() {
      (0, z.QG)(this, "topic",
        null, ["zg-btn-follow", "zg-btn-unfollow"])
    }
  };
  z.QG = z.Rq(function(a, b, c, d, f) {
    function g(a) {
      a.r ? z.V.message(a.msg) : h(p)
    }

    function h(b) {
      b ? (z.U.Tw(a, k, l), xr(a, f.unfollow_text || "取消关注")) : (z.U.Tw(a, l, k), xr(a, f.follow_text || "关注" + ((0, window.$)(a).data("gender") || "")));
      z.qa(c) && c(b)
    }
    PG && "pending" === PG.state() && PG.abort();
    f = f || {};
    b = b || a.getAttribute("data-focustype");
    d = d || ["zg-follow", "zg-unfollow"];
    var k = d[0],
      l = d[1],
      p = z.U.has(a, k);
    z.W.yb({
      type: "ga_click_follow",
      target: a,
      data: {
        type: b,
        uk: p
      }
    });
    var q;
    q = {
      roundtable: $w,
      column: Zw,
      people: wt,
      question: xt,
      topic: zt,
      favlist: yt
    }[b];
    d = a.getAttribute("data-id") || a.id.match(/-(.*)/)[1];
    q && (q = q(d, p), "people" === b && p ? q.done(g) : h(p), PG = q, q = {
      type: {
        roundtable: "Roundtable",
        column: "Column",
        people: "User",
        question: "Question",
        topic: "Topic",
        favlist: "Collection"
      }[b]
    }, "people" === b ? q.member_hash_id = d : "roundtable" === b ? q.token = d : q.id = d, z.X.trackEvent(a, {
      action: p ? "Follow" : "UnFollow",
      element: "Button"
    }, {
      content: q
    }))
  });
  z.y(ax, z.G);
  var ex = ["group", "key", "name"];
  cx.prototype.defaults = {
    dQ: "帮助信息",
    ky: "shortcut-tips-dialog"
  };
  cx.prototype.oc = function() {
    z.xl(z.gn.register("shift+/", this.show, this), {
      group: "导航",
      name: "帮助",
      key: "?"
    })
  };
  cx.prototype.show = function() {
    var a = this.H;
    z.V.alert({
      title: a.dQ,
      content: jx(),
      className: a.ky
    })
  };
  var lx = z.hk(function(a) {
    var b = z.um["ra-urls"],
      c = b && b[a];
    return c ? new window.Promise(function(b) {
      window.$.ajax({
        url: c,
        dataType: "script",
        cache: !0
      }).then(function() {
        b(window.ra[a])
      })
    }) : window.Promise.reject(Error("Missing react app name: " + a))
  });
  var ox = [];
  z.Kp.on("init", function() {
    function a() {
      var b = ox.shift();
      b && (b = b[0], b.length ? b(a) : (b(), a()))
    }
    a()
  });
  z.Kp.on("init", function() {
    (0, window.$)("img.lazy").attr("data-lazyloaded", "").lazyload({
      load: function() {
        (0, window.$)(this).trigger("contentchange")
      },
      data_attribute: "actualsrc",
      event: "scroll updatelazy",
      threshold: 400
    })
  });
  z.Kp.on("init", function() {
    z.Y.email && z.Uh.set("lastuser:email", z.Y.email)
  });
  nx(function(a) {
    z.Y.Qc || new Lp({
      Hk: a
    })
  }, 0);
  nx(function() {
    "#ask" === window.location.hash && (z.fw.aa().show(), window.history.replaceState ? window.history.replaceState(null, window.document.title, window.location.pathname + window.location.search) : window.location.hash = "")
  }, window.Infinity);
  z.Kp.on("init", function() {
    (new Bw).init()
  });
  z.Kp.on("init", function() {
    (new Gw).init()
  });
  z.Kp.on("init", function() {
    Nw()
  });
  z.Kp.on("init", function() {
    (new Ow).init()
  });
  z.Kp.on("init", function() {
    z.Rw()
  });
  z.Kp.on("init", function() {
    z.fh()
  });
  z.Kp.on("init", function() {
    return (new Vw).init()
  });
  z.Kp.on("init", function() {
    z.Ni()
  });
  z.Kp.on("postinit", function() {
    (0, window.$)("#js-feedback-button").click(function() {
      Ww.aa().create()
    })
  });
  z.Kp.on("init", function() {
    (0, window.$)(window.document.body).on("click.follow", "[data-follow]", function() {
      if (this.name) return Qr("未清除的 name 属性:", this);
      var a = this.getAttribute("data-follow");
      (a = a && RG[a]) && a.call(this)
    })
  });
  z.Kp.on("postinit", function() {
    window.FastClick && !z.Bm && window.FastClick.attach(window.document.body)
  });
  z.Kp.on("postinit", function() {
    if (z.Y.Lb())
      if (window.WebSocket) {
        var a;
        a = -1 !== z.tm.ao.indexOf("https") ? z.tm.ao.replace("https", "wss") : z.tm.ao.replace("http", "ws");
        (new ax(a)).addEventListener("message", function(a) {
          On(z.W, JSON.parse(a.data.replace(/^\+;/, "")))
        })
      } else a = new Fq({
        url: z.gm,
        data: {
          loc: window.location.href,
          channel: (0, z.H)() + Zn()
        },
        dataType: "polling",
        converters: {
          "text polling": function(a) {
            return JSON.parse(a.replace(/^\+;/, ""))
          }
        }
      }), a.addEventListener("message", function(a) {
        On(z.W, a.data)
      }), a.Uu()
  });
  z.Kp.on("init", function() {
    new cx;
    z.Bl.prototype.defaults.offsetTop = -60;
    var a = (0, window.$)('div[data-widget\x3d"navigable"], ul[data-widget\x3d"navigable"]');
    if (1 === a.length) {
      var b = a.data("navigable-options"),
        b = new z.Bl(b);
      b.w(a.get(0));
      var c = (0, window.$)("#zh-load-more");
      b.on("action", function(a) {
        a.data.index >= a.data.size && c.is(":visible") && c[0].click()
      })
    }
  });
  z.Kp.on("init", function() {
    (0, window.$)(window.document).on("click", 'a[href\x3d"#"]', function(a) {
      a.preventDefault()
    })
  });
  z.Kp.on("postinit", function() {
    var a = window.location.pathname;
    z.Y.Lb() && "/" === a || /^\/(question|explore|collection|topic|people|search|roundtable\/)/.test(a) ? z.kx("CommentApp") : /^\/copyright(\/|$)/.test(a) && z.kx("Copyright")
  });
  z.Kp.on("postinit", function() {
    (0, window.$)(".js-openProfilePage").on("click", function() {
      var a = (0, window.$)(this).attr("data-url"),
        a = (0, window.$)("\x3cform target\x3d'_blank' method\x3d'POST' style\x3d'display:none;'\x3e\x3c/form\x3e").attr({
          action: a
        }).appendTo(window.document.body);
      (0, window.$)('\x3cinput type\x3d"hidden" /\x3e').attr({
        name: "content",
        value: (0, window.$)("#performance-profile-data").text()
      }).appendTo(a);
      a.submit();
      a.remove()
    })
  });
  z.Kp.on("init", function() {
    var a = z.aj.get("d_c0", ""),
      b = new z.wp(!0);
    "" === a && b.ajax("/udid", "", "POST")
  });
  z.y(px, Sq);
  px.prototype.add = function(a) {
    z.rb(this.queue, a) || (this.queue.push(a), z.F(a, "finish", this.EJ, !1, this))
  };
  px.prototype.remove = function(a) {
    z.tb(this.queue, a) && z.md(a, "finish", this.EJ, !1, this)
  };
  px.prototype.D = function() {
    z.A(this.queue, function(a) {
      a.dispose()
    });
    this.queue.length = 0;
    px.v.D.call(this)
  };
  z.y(qx, px);
  qx.prototype.play = function(a) {
    if (0 == this.queue.length) return !1;
    if (a || this.N == Tq) this.Ly = 0, this.Dg();
    else if (1 == this.N) return !1;
    this.vd("play"); - 1 == this.N && this.vd("resume");
    var b = -1 == this.N && !a;
    this.startTime = (0, z.H)();
    this.endTime = null;
    this.N = 1;
    z.A(this.queue, function(c) {
      b && -1 != c.N || c.play(a)
    });
    return !0
  };
  qx.prototype.pause = function() {
    1 == this.N && (z.A(this.queue, function(a) {
      1 == a.N && a.pause()
    }), this.N = -1, this.vd("pause"))
  };
  qx.prototype.stop = function(a) {
    z.A(this.queue, function(b) {
      b.N == Tq || b.stop(a)
    });
    this.N = Tq;
    this.endTime = (0, z.H)();
    this.vd("stop");
    this.Eg()
  };
  qx.prototype.EJ = function() {
    this.Ly++;
    this.Ly == this.queue.length && (this.endTime = (0, z.H)(), this.N = Tq, this.vd("finish"), this.Eg())
  };
  z.y(ux, z.Wj);
  z.e = ux.prototype;
  z.e.init = function() {
    if (!z.sm("back_to_top")) {
      this.h = z.Ye(this.zY);
      window.document.body.appendChild(this.h);
      var a = new z.gl(this.Hu, this.CY, this);
      this.RL = (0, z.t)(a.fire, a);
      this.o().g(window, "resize", this.bK);
      this.bK()
    }
  };
  z.e.start = function() {
    this.Vk || (this.Vk = !0, this.o().g(window, "scroll", this.RL).g(this.h, "click", this.NE), this.Hu())
  };
  z.e.stop = function() {
    this.Vk && (this.Vk = !1, this.o().oa(window, "scroll", this.RL).oa(this.h, "click", this.NE), this.hide())
  };
  z.e.bK = function() {
    z.Qe().width >= this.wU ? this.start() : this.stop()
  };
  z.e.zY = '\x3cdiv class\x3d"zh-backtotop" style\x3d"display:none"\x3e\x3ca data-action\x3d"backtotop" data-tooltip\x3d"s$r$回到顶部" href\x3d"javascript:;" class\x3d"btn-backtotop btn-action"\x3e\x3cdiv class\x3d"arrow"\x3e\x3c/div\x3e\x3cdiv class\x3d"stick"\x3e\x3c/div\x3e\x3c/a\x3e\x3c/div\x3e';
  z.e.NE = function() {
    var a = z.Se(window.document),
      b = z.Re(window.document),
      c = b.x,
      b = b.y,
      d = new qx,
      f = this.o();
    d.add(new or(a, [c, b], [0, 0], this.AX, tx));
    d.add(new tr(this.h, this.Iy, sx));
    f.g(d, "finish", this.aV);
    f.g(d, "begin", this.OU);
    d.play();
    z.W.yb("ga_click_back_to_top");
    z.X.trackEvent(this, {
      action: "BackToTop",
      element: "Button"
    })
  };
  z.e.OU = function() {
    this.dx = this.To = !0
  };
  z.e.aV = function() {
    this.dx = !1
  };
  z.e.show = function() {
    (new ur(this.h, this.Iy, rx)).play();
    this.To = !1
  };
  z.e.hide = function() {
    (new tr(this.h, this.Iy, sx)).play();
    this.To = !0
  };
  z.e.Hu = function() {
    this.dx || (1200 <= z.Re(window.document).y ? this.To && this.show() : this.To || this.hide())
  };
  vx.prototype.link = "想来知乎工作？请发送邮件到 jobs@zhihu.com";
  vx.prototype.JO = "          _____                    _____                    _____                    _____          \n         /\\    \\                  /\\    \\                  /\\    \\                  /\\    \\         \n        /::\\____\\                /::\\    \\                /::\\    \\                /::\\    \\        \n       /:::/    /                \\:::\\    \\              /::::\\    \\              /::::\\    \\       \n      /:::/    /                  \\:::\\    \\            /::::::\\    \\            /::::::\\    \\      \n     /:::/    /                    \\:::\\    \\          /:::/\\:::\\    \\          /:::/\\:::\\    \\     \n    /:::/____/                      \\:::\\    \\        /:::/__\\:::\\    \\        /:::/__\\:::\\    \\    \n   /::::\\    \\                      /::::\\    \\      /::::\\   \\:::\\    \\      /::::\\   \\:::\\    \\   \n  /::::::\\    \\   _____    ____    /::::::\\    \\    /::::::\\   \\:::\\    \\    /::::::\\   \\:::\\    \\  \n /:::/\\:::\\    \\ /\\    \\  /\\   \\  /:::/\\:::\\    \\  /:::/\\:::\\   \\:::\\____\\  /:::/\\:::\\   \\:::\\    \\ \n/:::/  \\:::\\    /::\\____\\/::\\   \\/:::/  \\:::\\____\\/:::/  \\:::\\   \\:::|    |/:::/__\\:::\\   \\:::\\____\\\n\\::/    \\:::\\  /:::/    /\\:::\\  /:::/    \\::/    /\\::/   |::::\\  /:::|____|\\:::\\   \\:::\\   \\::/    /\n \\/____/ \\:::\\/:::/    /  \\:::\\/:::/    / \\/____/  \\/____|:::::\\/:::/    /  \\:::\\   \\:::\\   \\/____/ \n          \\::::::/    /    \\::::::/    /                 |:::::::::/    /    \\:::\\   \\:::\\    \\     \n           \\::::/    /      \\::::/____/                  |::|\\::::/    /      \\:::\\   \\:::\\____\\    \n           /:::/    /        \\:::\\    \\                  |::| \\::/____/        \\:::\\   \\::/    /    \n          /:::/    /          \\:::\\    \\                 |::|  ~|               \\:::\\   \\/____/     \n         /:::/    /            \\:::\\    \\                |::|   |                \\:::\\    \\         \n        /:::/    /              \\:::\\____\\               \\::|   |                 \\:::\\____\\        \n        \\::/    /                \\::/    /                \\:|   |                  \\::/    /        \n         \\/____/                  \\/____/                  \\|___|                   \\/____/         \n";
  z.y(xx, z.Wj);
  z.SG = null;
  xx.prototype.init = function() {
    z.SG = this;
    z.yx(this)
  };
  xx.prototype.qV = function() {
    var a = z.Wn(this.Gk);
    a && !a.r && On(z.W, [a])
  };
  var Ax = window.localStorage && !z.Uh.zm() || z.vm && (!z.Bm || z.Am);
  z.y(z.Bx, z.Wj);
  z.e = z.Bx.prototype;
  z.e.defaults = {
    qW: "pm",
    hv: !1,
    ul: !0
  };
  z.e.Qh = function(a) {
    this.h = a
  };
  z.e.m = function() {
    return this.h
  };
  z.e.Vz = function() {
    this.Ma = new z.T(null);
    this.Ma.Fa("发送私信");
    z.Kj(this.Ma, null);
    this.Ma.Ae(!0);
    this.Ma.F(!0);
    this.h = this.Ma.S()
  };
  z.e.focus = function() {
    this.init();
    this.Dd.focus()
  };
  z.e.init = function() {
    this.IS || (this.IS = !0, this.jr && (this.Ma || this.Vz(), this.h.innerHTML = '\x3cdiv class\x3d"zm-pm-wrap"\x3e\x3cdl class\x3d"zm-form-table zm-form-table-medium"\x3e\x3cdt class\x3d"zm-form-table-head zm-form-table-head-align-middle"\x3e\x3clabel class\x3d"zg-medium-gray"\x3e发给：\x3c/label\x3e\x3c/dt\x3e\x3cdd class\x3d"zm-form-table-field"\x3e\x3cdiv class\x3d"zm-pm-selector-wrap"\x3e\x3cdiv class\x3d"zg-user-name" style\x3d"display:none;padding:4px 0 0 0"\x3e\x3c/div\x3e\x3cinput class\x3d"zg-form-text-input zm-pm-user-selector" type\x3d"text" /\x3e\x3c/div\x3e\x3c/dd\x3e\x3cdt class\x3d"zm-form-table-head zm-form-table-head-align-middle"\x3e\x3clabel class\x3d"zg-medium-gray"\x3e内容：\x3c/label\x3e\x3c/dt\x3e\x3cdd class\x3d"zm-form-table-field zm-form-table-field-last"\x3e\x3cdiv class\x3d"zg-editor-simple-wrap zg-form-text-input"\x3e\x3ctextarea class\x3d"zg-editor-input" style\x3d"font-weight:normal"\x3e\x3c/textarea\x3e\x3c/div\x3e\x3c/dd\x3e\x3c/dl\x3e\x3cdiv class\x3d"zh-pm-warnmsg" style\x3d"display:none;text-align:right;color:#C3412F;"\x3e\x3c/div\x3e\x3cdiv class\x3d"zm-command zg-clear"\x3e\x3cdiv class\x3d"zm-item-meta zg-left" style\x3d"margin: 0 0 0 57px;"\x3e\x3cspan class\x3d"zg-text-counter" style\x3d"display:none"\x3e还可以输入 500 字\x3c/span\x3e\x3cspan class\x3d"additional-info" \x3e\x3c/span\x3e\x3c/div\x3e\x3ca name\x3d"cancel" href\x3d"javascript:;" class\x3d"zm-command-cancel"\x3e取消\x3c/a\x3e\x3ca name\x3d"send" href\x3d"javascript:;" class\x3d"zg-btn-blue zg-r3px" id\x3d"zh-question-pm-send-button"\x3e发送\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e'), this.ai =
      z.L("zg-user-name", this.h), this.Dd = z.L("zg-editor-input", this.h), this.md = z.L("zm-pm-user-selector", this.h), this.bo = z.L("zm-command", this.h), z.L("zg-text-counter", this.h), this.wu = z.L("zh-pm-warnmsg", this.h), (0, window.$)(".additional-info", (0, window.$)(this.h)), new z.as(this.Dd), this.o().g(this.bo, "click", this.Wa).g(this.ai, "click", this.Wa).g(this.Dd, "keydown", this.VR), this.md && ((new z.rt("搜索用户")).w(this.md), this.o().g(this.md, "blur", this.jP), this.O = new z.Ft("/people/autocomplete?type\x3d" + this.H.qW,
        this.md, null, null, z.L("zm-pm-wrap", this.h), !0), this.O.Lg(!0), this.o().g(this.O, "select", this.CV)), z.Y.Ie || Ex(this, "未激活用户，不能发送私信。请先激活邮箱。"))
  };
  z.e.VR = function(a) {
    13 === a.keyCode && (a.ctrlKey || a.metaKey) && (this.vt(), a.preventDefault())
  };
  z.e.jP = function() {
    this.hF && (0, window.clearTimeout)(this.hF);
    this.hF = (0, window.setTimeout)((0, z.t)(this.kP, this), 200)
  };
  z.e.kP = function() {
    var a = z.Ar(this.md.value); - 1 === this.rn && a && "搜索用户" !== a && Ex(this, "请输入对方姓名，从下拉菜单里选择收件人")
  };
  z.e.Gq = function(a) {
    this.jL = a
  };
  z.e.show = function() {
    this.init();
    this.jr && (this.Ma.F(!0), this.Ma.ga())
  };
  z.e.CV = function() {
    var a = z.yb(this.O.sg(), 1);
    z.Dx(this, a[3], a[0], !0)
  };
  z.e.vt = function() {
    if (!this.xi || "pending" !== this.xi.state())
      if (-1 === this.rn) Ex(this, "请填写收信人。");
      else {
        var a = this.Dd.value;
        (0, z.ab)(a) ? (a = -1 !== this.Tq ? window.$.post("/inbox/reply", {
          message_id: this.Tq,
          content: a,
          token: this.jL,
          type: this.Nv
        }) : window.$.post("/inbox/post", {
          member_id: this.rn,
          content: a,
          token: this.jL,
          type: this.Nv
        }), a.done((0, z.t)(this.EV, this)), this.xi = a) : Ex(this, "请填写私信内容。")
      }
  };
  z.e.Wa = function(a) {
    if (a = (a = this.mh(a.target)) && a.name) switch (a) {
      case "edit":
        this.rn = -1;
        z.Dr(this.md, this.ai);
        break;
      case "cancel":
        this.jr && this.Ma.F(!1);
        break;
      case "send":
        this.vt()
    }
  };
  z.e.EV = function(a) {
    Pr("message", "send_message");
    if (!a) return z.V.message("网络异常");
    if (a.r) return Ex(this, a.msg);
    this.jr && this.Ma.F(!1);
    this.H.hv ? window.location.reload() : z.V.message("发送成功")
  };
  Fx.prototype.ga = function() {};
  z.y(z.Gx, Fx);
  z.Gx.prototype.ga = function(a, b, c) {
    z.Qs(this.element, this.qf, a, b, void 0, c, this.jW)
  };
  z.y(Hx, Fx);
  Hx.prototype.ga = function(a, b, c, d) {
    z.Qs($n(a), 0, a, b, this.wi, c, null, d)
  };
  z.y(Ix, z.Pn);
  Ix.prototype.setPosition = function(a) {
    this.Wu = a || void 0;
    this.W() && this.ga()
  };
  Ix.prototype.ga = function() {
    if (this.Wu) {
      var a = !this.W() && "move_offscreen" != this.Ii(),
        b = this.m();
      a && (b.style.visibility = "hidden", z.P(b, !0));
      this.Wu.ga(b, this.IB, this.PA);
      a && z.P(b, !1)
    }
  };
  z.y(z.Kx, Ix);
  var Sx = [];
  z.e = z.Kx.prototype;
  z.e.hc = null;
  z.e.className = "goog-tooltip";
  z.e.Iq = 500;
  z.e.Uo = 0;
  z.e.K = function() {
    return this.ba
  };
  z.e.attach = function(a) {
    a = z.J(a);
    this.lb.add(a);
    z.F(a, "mouseover", this.Bd, !1, this);
    z.F(a, "mouseout", this.om, !1, this);
    z.F(a, "mousemove", this.mm, !1, this);
    z.F(a, "focus", this.te, !1, this);
    z.F(a, "blur", this.om, !1, this)
  };
  z.e.detach = function(a) {
    if (a) a = z.J(a), Lx(this, a), this.lb.remove(a);
    else {
      for (var b = this.lb.fd(), c = 0; a = b[c]; c++) Lx(this, a);
      this.lb.clear()
    }
  };
  z.e.bz = function() {
    return this.Uo
  };
  z.e.be = function(a) {
    a = z.Gd(a, null);
    var b = this.m();
    b && z.Fe(b, a)
  };
  z.e.Qh = function(a) {
    var b = this.m();
    b && z.N(b);
    z.Kx.v.Qh.call(this, a);
    a ? (b = this.ba.ua().body, b.insertBefore(a, b.lastChild), z.Cc(this.al), this.al = new z.vj(this.m()), z.Ac(this, this.al), z.F(this.al, "focusin", this.Fj, void 0, this), z.F(this.al, "focusout", this.Mq, void 0, this)) : (z.Cc(this.al), this.al = null)
  };
  z.e.Wd = function() {
    return z.qf(this.m())
  };
  z.e.dz = z.m(40);
  z.e.getState = function() {
    return this.hn ? this.W() ? 4 : 1 : this.sm ? 3 : this.W() ? 2 : 0
  };
  z.e.Rt = function(a) {
    if (!this.W()) return !1;
    var b = z.ao(this.m()),
      c = z.Jg(this.m());
    return b.x <= a.x && a.x <= b.x + c.width && b.y <= a.y && a.y <= b.y + c.height
  };
  z.e.Pp = function() {
    if (!z.Pn.prototype.Pp.call(this)) return !1;
    if (this.anchor)
      for (var a, b = 0; a = Sx[b]; b++) z.nf(a.m(), this.anchor) || a.F(!1);
    z.sb(Sx, this);
    a = this.m();
    a.className = this.className;
    this.Fj();
    z.F(a, "mouseover", this.Cz, !1, this);
    z.F(a, "mouseout", this.vH, !1, this);
    Ux(this);
    return !0
  };
  z.e.Kk = function() {
    z.tb(Sx, this);
    for (var a = this.m(), b, c = 0; b = Sx[c]; c++) b.anchor && z.nf(a, b.anchor) && b.F(!1);
    this.mK && this.mK.Mq();
    z.md(a, "mouseover", this.Cz, !1, this);
    z.md(a, "mouseout", this.vH, !1, this);
    this.anchor = void 0;
    0 == this.getState() && (this.tv = !1);
    z.Pn.prototype.Kk.call(this)
  };
  z.e.RA = function(a, b) {
    this.anchor == a && this.lb.contains(this.anchor) && (this.tv || !this.p0 ? (this.F(!1), this.W() || (this.anchor = a, this.setPosition(b || Ox(this, 0)), this.F(!0))) : this.anchor = void 0);
    this.hn = void 0
  };
  z.e.Di = function() {
    return this.lb
  };
  z.e.cm = function() {
    return this.hc
  };
  z.e.fJ = function(a) {
    this.sm = void 0;
    if (a == this.anchor) {
      a = this.K();
      var b = a.cm();
      a = b && this.m() && a.contains(this.m(), b);
      null != this.hc && (this.hc == this.m() || this.lb.contains(this.hc)) || a || this.Hl && this.Hl.hc || this.F(!1)
    }
  };
  z.e.Bd = function(a) {
    var b = Nx(this, a.target);
    this.hc = b;
    this.Fj();
    b != this.anchor && (this.anchor = b, Tx(this, b), Rx(this), Mx(this, a))
  };
  z.e.mm = function(a) {
    Mx(this, a);
    this.tv = !0
  };
  z.e.te = function(a) {
    this.hc = a = Nx(this, a.target);
    this.tv = !0;
    if (this.anchor != a) {
      this.anchor = a;
      var b = Ox(this, 1);
      this.Fj();
      Tx(this, a, b);
      Rx(this)
    }
  };
  z.e.om = function(a) {
    var b = Nx(this, a.target),
      c = Nx(this, a.relatedTarget);
    b != c && (b == this.hc && (this.hc = null), Ux(this), this.tv = !1, !this.W() || a.relatedTarget && z.nf(this.m(), a.relatedTarget) ? this.anchor = void 0 : this.Mq())
  };
  z.e.Cz = function() {
    var a = this.m();
    this.hc != a && (this.Fj(), this.hc = a)
  };
  z.e.vH = function(a) {
    var b = this.m();
    this.hc != b || a.relatedTarget && z.nf(b, a.relatedTarget) || (this.hc = null, this.Mq())
  };
  z.e.Mq = function() {
    2 == this.getState() && (this.sm = z.vd((0, z.t)(this.fJ, this, this.anchor), this.bz()))
  };
  z.e.Fj = function() {
    this.sm && (z.wd(this.sm), this.sm = void 0)
  };
  z.e.D = function() {
    this.F(!1);
    Ux(this);
    this.detach();
    this.m() && z.N(this.m());
    this.hc = null;
    delete this.ba;
    z.Kx.v.D.call(this)
  };
  z.y(Px, Hx);
  Px.prototype.ga = function(a, b, c) {
    b = $n(a);
    b = Ho(b);
    c = c ? new z.rg(c.top + 10, c.right, c.bottom, c.left + 10) : new z.rg(10, 0, 0, 10);
    Ts(this.wi, a, 4, c, b, 9) & 496 && Ts(this.wi, a, 4, c, b, 5)
  };
  z.y(Qx, z.Gx);
  Qx.prototype.ga = function(a, b, c) {
    var d = new z.Ge(10, 0);
    z.Qs(this.element, this.qf, a, b, d, c, 9) & 496 && z.Qs(this.element, 2, a, 1, d, c, 5)
  };
  z.y(Vx, z.Kx);
  z.e = Vx.prototype;
  z.e.PP = !1;
  z.e.OP = 100;
  z.e.cr = !1;
  z.e.Lk = function() {
    Vx.v.Lk.call(this);
    this.as = Un(Eo(this.m()));
    this.anchor && (this.bx = Un(Eo(this.anchor)));
    this.cr = this.PP;
    z.F(this.K().ua(), "mousemove", this.mm, !1, this)
  };
  z.e.Kk = function() {
    z.md(this.K().ua(), "mousemove", this.mm, !1, this);
    this.bx = this.as = null;
    this.cr = !1;
    Vx.v.Kk.call(this)
  };
  z.e.Rt = function(a) {
    if (this.Wo) {
      var b = z.ao(this.m()),
        c = z.Jg(this.m());
      return b.x - this.Wo.left <= a.x && a.x <= b.x + c.width + this.Wo.right && b.y - this.Wo.top <= a.y && a.y <= b.y + c.height + this.Wo.bottom
    }
    return Vx.v.Rt.call(this, a)
  };
  z.e.fJ = function(a) {
    this.sm = void 0;
    a != this.anchor || Xx(this, this.Ij) || this.cm() || this.Hl && this.Hl.hc || z.B && 0 == this.Ij.x && 0 == this.Ij.y || this.F(!1)
  };
  z.e.mm = function(a) {
    var b = this.W();
    if (this.as) {
      var c = z.xf(this.K()),
        c = new z.Ge(a.clientX + c.x, a.clientY + c.y);
      Xx(this, c) ? b = !1 : this.cr && (b = Ko(this.as, c) >= Ko(this.as, this.Ij))
    }
    if (b) {
      if (this.Mq(), this.hc = null, b = this.Hl) b.hc = null
    } else 3 == this.getState() && this.Fj();
    Vx.v.mm.call(this, a)
  };
  z.e.Cz = function() {
    this.cm() != this.m() && (this.cr = !1, this.hc = this.m())
  };
  z.e.bz = function() {
    return this.cr ? this.OP : Vx.v.bz.call(this)
  };
  z.y(z.Yx, Vx);
  z.e = z.Yx.prototype;
  z.e.D = function() {
    z.Yx.v.D.call(this);
    z.md(this.Qa, "mouseover", this.xH, !1, this)
  };
  z.e.kA = function(a) {
    return a.tagName in this.yE && !!a.getAttribute(this.yE[a.tagName])
  };
  z.e.xH = function(a) {
    if (a = a.target) this.kA(a) ? (this.setPosition(null), Zx(this, a)) : this.iP && (a = z.wf(a, (0, z.t)(this.kA, this), !1, this.f0)) && (this.setPosition(null), Zx(this, a))
  };
  z.e.Ju = function(a) {
    return this.dispatchEvent(a)
  };
  z.e.$s = function() {
    return this.gg || this.anchor
  };
  z.e.Kk = function() {
    z.Yx.v.Kk.call(this);
    null != this.gg && cy(this, this.gg);
    this.gg = null
  };
  z.e.Bd = function(a) {
    var b = Nx(this, a.target);
    b && b != this.anchor ? Zx(this, b) : z.Yx.v.Bd.call(this, a)
  };
  z.e.om = function(a) {
    var b = this.anchor,
      c = this.getState();
    z.Yx.v.om.call(this, a);
    c == this.getState() || 1 != c && 4 != c || (this.anchor = b, by(this))
  };
  z.e.RA = function(a, b) {
    z.Yx.v.RA.call(this, a, b);
    this.W() ? (a != this.gg && cy(this, this.gg), this.gg = a) : $x(this)
  };
  z.y(ay, z.Lc);
  z.y(dy, z.Gx);
  dy.prototype.Fo = function() {
    return 5
  };
  dy.prototype.ga = function(a, b, c, d) {
    var f = {
        "1-4": "bottom",
        "0-4": "top",
        "0-5": "top",
        "1-5": "bottom",
        "2-5": "top",
        "3-5": "bottom",
        "3-4": "bottom",
        "2-6": "left",
        "2-4": "right"
      },
      g;
    if (this.qE) {
      g = z.Qs(this.element, this.qf, a, b, null, c, 10, d);
      var h = ey(g, this.qf),
        k = ey(g, b);
      g & 496 && (g = z.Qs(this.element, h, a, k, null, c, 10, d), g & 496 && (h = ey(g, h), k = ey(g, k), this.qE ? z.Qs(this.element, h, a, k, null, c, this.Fo(), d) : z.Qs(this.element, h, a, k, null, c, 0, d)));
      this.bq && (a = (z.ja(h) ? h : this.qf) + "-" + (z.ja(b) ? b : k), this.bq(f[a], a))
    } else z.Qs(this.element,
      this.qf, a, b, void 0, c), this.bq && (a = this.qf + "-" + b, this.bq(f[a], a))
  };
  z.y(fy, z.Wj);
  z.e = fy.prototype;
  z.e.JH = {
    t: 0,
    r: 2,
    b: 1,
    l: 2
  };
  z.e.Kh = function() {
    var a = this.Ja,
      b = (0, window.$)('\x3cdiv id\x3d"zh-' + this.wb + '"\x3e\x3c/div\x3e'),
      c = null;
    (0, window.$)("body").append(b);
    a.Qh(b[0]);
    a.on("show", function(a) {
      (0, window.clearTimeout)(c);
      b.addClass("in");
      z.W.yb({
        type: "ga_hover_hovercard",
        target: a.target.$s()
      })
    }).on("hide", function() {
      b.css({
        display: "block",
        visibility: "visible"
      }).removeClass("in").addClass("out");
      c = (0, window.setTimeout)(function() {
        b.removeClass("out").css({
          display: "none",
          visibility: "hidden"
        })
      }, 1E3)
    })
  };
  z.e.init = function() {
    if (!z.tm.mb && !z.sm("tooltip")) {
      var a = this.ws = "data-" + this.wb;
      this.Ja = new z.Yx({
        A: a,
        SPAN: a,
        BUTTON: a,
        I: a,
        DIV: a,
        INPUT: a,
        IMG: a
      });
      this.Ja.Iq = this.dY;
      this.Ja.Uo = this.PS;
      this.Kh();
      this.o().g(this.Ja, "trigger", this.Ju).g(this.Ja, "beforeshow", this.Pp).g(this.Ja, "show", this.Of).g(this.Ja, "beforehide", this.FJ)
    }
  };
  z.e.FJ = function() {};
  z.e.Pp = function() {
    var a = this.Ja.$s(),
      b = a.getAttribute(this.ws).split("$");
    this.MF = a;
    this.Ol = b[0];
    this.oo = b[2];
    this.Nl = b[1];
    this.Ja.m().setAttribute("data-theme", a.getAttribute("data-theme") || "");
    this.rM();
    hy(this)
  };
  z.e.Of = function() {};
  z.e.rM = function() {
    var a = this.oo,
      b = [];
    b.push('\x3cdiv class\x3d"tooltip-arrow"\x3e\x3c/div\x3e');
    b.push('\x3cdiv class\x3d"tooltip-inner content-prewrap"\x3e');
    b.push(wo(a));
    b.push("\x3c/div\x3e");
    iy(this, b.join(""))
  };
  z.e.yx = function() {
    return gy('\n    \x3cdiv class\x3d"zh-hovercard-spinner"\x3e\x3c/div\x3e\n  ', !0)
  };
  z.e.Ju = function(a) {
    var b = this.ws,
      c = (a = a.anchor) && a.getAttribute(b),
      d = c.split("$"),
      b = null;
    c && 1 < d.length ? (b = d[1], a.title && (a.setAttribute("data-original_title", a.title), a.removeAttribute("title")), this.HF = b = new dy(a, this.JH[b], "b" === b || "t" === b), a = (0, z.t)(this.WJ, this), b.bq = a, this.Ja.className = "tooltip") : $x(this.Ja)
  };
  z.e.WJ = function(a, b) {
    var c = this.Ja.m();
    z.U.remove(c, "top", "bottom", "left", "right");
    z.U.add(c, a);
    var d = z.ko(c),
      f = z.ko(this.MF),
      g = new z.Ge(c.offsetLeft, c.offsetTop);
    if ("t" === this.Nl || "b" === this.Nl) {
      var d = (d.width - f.width) / 2,
        h = g.x - d;
      if ("s" === this.Ol) z.tg(c, "left", h + "px");
      else {
        var h = z.rb(["2-5", "3-5", "3-4", "2-4"], b),
          k = (0, window.$)(".zh-hovercard-spinner", c)[0],
          l = z.L("arrow", c),
          p = z.L("arrow2", c);
        k ? z.tg(c, "left", g.x - d + "px") : h ? z.tg(c, "left", g.x + 83 + "px") : z.tg(c, "left", g.x - 70 + "px");
        var q = f.width / 2;
        l && p && (k ||
          (h ? z.A([l, p], function(a) {
            z.tg(a, "left", "auto");
            z.tg(a, "right", q + 70 + "px")
          }) : z.A([l, p], function(a) {
            z.tg(a, "left", q + 70 + "px")
          })))
      }
    } else z.tg(c, "top", g.y - (d.height - f.height) / 2 + "px"), "l" === this.Nl && z.Bg(c, g.x - f.width)
  };
  z.y(jy, fy);
  var ly = {
    p: "MemberProfileCardV2",
    t: "TopicProfileCardV2",
    c: "ColumnProfileCardV2",
    r: "RoundtableProfileCardV2"
  };
  z.e = jy.prototype;
  z.e.Kh = function() {
    var a = this.Ja;
    fy.prototype.Kh.call(this);
    (0, window.$)(a.m()).on("click", ".member-profile-card-pm", function(b) {
      b.preventDefault();
      var c = (0, window.$)(this);
      a.F(!1);
      z.Rq(function() {
        var a = new z.Bx({
          ul: !1
        });
        a.show();
        z.Dx(a, c.data("pmHash"), c.data("pmName"));
        z.Cx(a, c.attr("href"));
        a.Dd.focus()
      }, !0)()
    })
  };
  z.e.FJ = function() {
    this.mi[this.Ol] && this.mi[this.Ol][this.oo] && (this.mi[this.Ol][this.oo] = (0, window.$)(this.Ja.m()).find(".popover-content").html());
    z.X.trackEvent(this.Ja.m(), {
      action: "Hide",
      element: "Card"
    }, {
      link: {
        url: this.Ja.$s().href
      }
    })
  };
  z.e.Of = function() {
    z.X.vb(this.Ja, {
      module: "HoverCard"
    });
    z.X.trackCardShow(this.Ja, {
      element: "Card"
    })
  };
  z.e.rM = function() {
    ky(this, this.Ol, this.oo, this.Nl)
  };
  z.e.Ju = function(a) {
    var b = this.ws,
      c = (a = a.anchor) && a.getAttribute(b),
      d = c.split("$"),
      f = null;
    z.Lo(a, "no-hovercard") ? $x(this.Ja) : c && 1 < d.length ? (a.title && (a.setAttribute("data-original_title", a.title), a.removeAttribute("title")), f = d[1], 210 > z.Fg(a).y ? "t" === f && (f = "b", a.setAttribute(b, c.replace("$t$", "$b$"))) : (f = "t", a.setAttribute(b, c.replace("$b$", "$t$"))), this.HF = f = new dy(a, this.JH[f], "b" === f || "t" === f), b = (0, z.t)(this.WJ, this), f.bq = b, this.Ja.className = "goog-hovercard popover") : $x(this.Ja)
  };
  z.y(ny, z.Q);
  z.e = ny.prototype;
  z.e.T = function(a) {
    this.h = a;
    this.J = (0, window.$)(this.h);
    this.J.addClass("zh-scroller").css({
      position: "relative",
      overflow: "hidden"
    }).wrapInner('\x3cdiv class\x3d"zh-scroller-content"\x3e\x3c/div\x3e');
    this.J.wrapInner('\x3cdiv class\x3d"zh-scroller-inner"\x3e\x3c/div\x3e');
    this.J.append("\x3cdiv class\x3d'zh-scroller-bar-container'\x3e\x3cdiv\x3e");
    this.J.append('\x3cdiv class\x3d"zh-scroller-bar"\x3e\x3c/div\x3e');
    this.sd = this.J.children(".zh-scroller-inner");
    this.el = this.J.children(".zh-scroller-bar-container");
    this.Ee =
      this.J.children(".zh-scroller-bar");
    this.gf = this.sd.children(".zh-scroller-content");
    this.Xr = this.Ee[0];
    this.jT = this.sd[0];
    this.content = this.gf[0];
    this.Yr = this.el[0];
    this.sd.css({
      height: "100%",
      width: "150%",
      overflow: "auto"
    });
    this.Ee.css({
      position: "absolute",
      right: this.options.right,
      top: this.options.top,
      opacity: this.options.lx,
      background: this.options.TO,
      width: this.options.width,
      "border-radius": 3,
      cursor: "default"
    });
    this.el.css({
      position: "absolute",
      right: this.options.right - 1,
      top: 0,
      height: "100%",
      width: this.options.width,
      background: this.options.AP,
      border: "1px solid #444",
      opacity: 0,
      cursor: "default",
      "border-radius": "2px"
    });
    this.gj(this.Xr, !1);
    this.gj(this.Yr, !1);
    this.update()
  };
  z.e.C = function() {
    ny.v.C.call(this);
    this.SC = new z.gl(this.nB, 50, this);
    this.options.stopPropagation && this.sd.bind("mousewheel DOMMouseScroll", function(a) {
      var b = null;
      "mousewheel" === a.type ? b = -1 * a.originalEvent.wheelDelta : "DOMMouseScroll" === a.type && (b = 40 * a.originalEvent.detail);
      b && (a.preventDefault(), (0, window.$)(this).scrollTop(b + (0, window.$)(this).scrollTop()))
    })
  };
  z.e.enter = function() {
    this.wy || (this.o().g(this.jT, "scroll", function() {
      this.SC.fire()
    }), z.C || (this.o().g(this.Yr, "click", this.NU), this.o().g(window.document, "mousedown", this.mV), this.o().g(window.document, "mouseup", this.oV), this.o().g(window.document, "mousemove", this.nV)), this.options.QO ? (this.ce = new z.td(200), this.o().g(this.ce, "tick", function() {
      2 === this.ZA || 1 === this.ZA ? (oy(this), this.en && this.el.css({
        opacity: this.options.rF
      })) : this.Ks || this.Qn || (py(this, 1E3), this.el.css({
        opacity: 0
      }))
    })) : (this.Ee.css({
        opacity: this.options.lx
      }),
      this.el.css({
        opacity: this.options.rF
      })), this.ce && this.ce.start(), py(this), this.wy = !0)
  };
  z.e.mV = function(a) {
    a.target === this.Xr && (this.Ks = !0, this.UO = a.clientY, this.VO = (0, window.parseInt)(this.Ee.css("top"), 10));
    a.target !== this.Xr && a.target !== this.Yr || this.gj(window.document.body, !1)
  };
  z.e.oV = function() {
    this.Ks = !1;
    this.gj(window.document.body, !0)
  };
  z.e.nV = function(a) {
    if (this.Ks) {
      var b = qy(this, this.VO + (a.clientY - this.UO));
      this.sd.scrollTop(b)
    }
    this.ZA = a.target === this.Xr ? 2 : a.target === this.Yr ? 1 : 0
  };
  z.e.nB = function() {
    var a = this.sd.scrollTop(),
      b = this.gf.height(),
      c = this.sd.height(),
      d = a / b * (c - 2 * this.options.top);
    oy(this);
    this.Ee.css({
      top: d + this.options.top
    });
    this.dispatchEvent(new ry(this, a, b - a - c))
  };
  z.e.update = function() {
    var a = this.oh(this.sd).height,
      b = this.oh(this.gf).height;
    a >= b ? (this.en = !1, this.Ee.hide()) : (this.en = !0, this.Ee.show());
    this.Ee.css({
      height: a / b * (a - 2 * this.options.top)
    });
    this.el.css({
      height: a - 2
    });
    this.gf.css({
      overflow: "hidden",
      width: this.J.width(),
      "min-height": "100%"
    });
    return this
  };
  z.e.oh = function(a) {
    var b = {
      height: a.height(),
      width: a.width()
    };
    if (!b.height) {
      var c = a.css("display"),
        d = a.css("position"),
        f = a.css("visibility");
      a.css({
        position: "absolute",
        display: "block",
        visibility: "hidden"
      });
      b = {
        height: a.height(),
        width: a.width()
      };
      a.css({
        position: d,
        display: c,
        visibility: f
      })
    }
    return b
  };
  z.e.NU = function(a) {
    this.scrollTo(qy(this, a.offsetY - this.Ee.height() / 2))
  };
  z.e.scrollTop = function(a) {
    this.en && (a = a || 200, oy(this), this.sd.stop().animate({
      scrollTop: 0
    }, a));
    return this
  };
  z.e.gj = function(a, b) {
    z.Do(a, !b)
  };
  z.e.scrollBy = function(a, b) {
    if (this.en) {
      oy(this);
      var c = b || this.oh(this.sd).height,
        c = Math.abs(c),
        c = this.sd.scrollTop() + (a ? -1 : 1) * c;
      this.sd.stop().animate({
        scrollTop: c
      }, 200)
    }
  };
  z.e.scrollTo = function(a) {
    this.en && (oy(this), this.sd.stop().animate({
      scrollTop: a
    }, 200));
    return this
  };
  z.y(ry, z.Lc);
  z.y(z.sy, z.Q);
  z.sy.prototype.defaults = {
    sJ: ".tab-nav",
    lK: ".tab-panel",
    $g: "active"
  };
  z.sy.prototype.T = function(a) {
    if (a) {
      this.h = a;
      var b = this,
        c = this.H;
      this.ll = (0, window.$)(c.sJ, a);
      this.ml = (0, window.$)(c.lK, a);
      this.mk = this.ll.index("." + c.$g);
      this.ll.on("click", function() {
        b.select(b.ll.index(this))
      });
      this.ll.attr("role", "tab").parent().attr("role", "tablist")
    }
  };
  z.sy.prototype.select = function(a) {
    if (!(0 > a || a > this.ll.size()) && (this.dispatchEvent({
        type: "action",
        data: {
          index: a
        }
      }), a !== this.mk)) {
      this.mk = a;
      var b = this.H;
      this.ll.eq(a).addClass(b.$g).attr("aria-selected", "true").siblings().removeClass(b.$g).attr("aria-selected", "false");
      b = this.ml.eq(a);
      this.ml.not(b.show()).hide();
      this.dispatchEvent({
        type: "select",
        data: {
          index: a
        }
      })
    }
  };
  z.sy.prototype.index = function() {
    return this.mk
  };
  z.n(ty, z.Wj);
  z.e = ty.prototype;
  z.e.init = function() {
    this.Ui = z.J("zh-top-nav-live-new");
    this.KD = (0, window.$)(this.Ui);
    this.Xq = z.J("zh-top-nav-count-wrap");
    this.fo = z.M("span", {
      id: "zh-top-nav-count",
      className: "zu-top-nav-count zg-noti-number",
      style: "display:none"
    });
    this.contents = z.Uo("zm-noti7-content", this.Ui);
    this.Ox = z.Uo("zm-noti7-content-body", this.Ui);
    this.Xq.appendChild(this.fo);
    this.o().g(this.Xq, "click", this.XL).g(this.Xq, "keypress", function(a) {
      32 === a.keyCode && (a.preventDefault(), this.XL())
    });
    this.o().g(z.W, "notification",
      this.hS);
    this.o().g(this.Ui, "click", function(a) {
      a = a.target;
      a.href && /group_id=/.test(a.href + "") && (0, window.$)(a).parent(".unread").removeClass("unread")
    });
    this.ww = (0, window.$)(".zm-noti7-popup-tab-container .icon");
    uy(this);
    this.vM || (this.Kg = z.mb(this.contents, function(a) {
      var b = new ny;
      b.w(a);
      return b
    }));
    xy(this);
    this.Qm = z.J("zh-top-nav-pm-count");
    this.Qm || (this.Qm = z.M("span"));
    this.Im = z.J("zh-top-nav-new-pm");
    this.Im || (this.Im = z.M("span"));
    this.RH = (0, window.parseInt)((0, window.$)(this.Im).attr("data-count") ||
      (0, window.$)(this.Qm).attr("data-count"), 10) || 0;
    this.o().g(z.W, "inbox", this.UR)
  };
  z.e.hS = function(a) {
    this.DJ = this.fg;
    this.fg = a.Pf;
    this.ee = this.fg[0] + this.fg[1] + this.fg[2];
    z.P(this.fo, !!this.ee);
    this.fo.innerHTML = Ay(this.ee);
    z.A(this.fg, function(a, c) {
      a ? (this.ww.eq(c).addClass("withdot"), this.cache[c] = !1) : this.ww.eq(c).removeClass("withdot");
      this.jG && 0 < a - this.DJ[c] && this.im(c)
    }, this);
    zy(this)
  };
  z.e.XL = function() {
    this.visible ? z.tm.mb ? Dy(this, !1) : Dy(this, !!this.ee) : Dy(this, !0);
    zy(this)
  };
  z.e.im = function(a) {
    if (!this.$j[a]) {
      var b = this.$j[a] = new z.wp(!1);
      this.o().xa(b, "success", function() {
        var b = z.Wn(this.$j[a]);
        this.$j[a] = null;
        if (b)
          if (b.r) z.V.message(b.msg);
          else {
            this.Tx = !0;
            var d = b.msg;
            if (d) 1 === a && (d = '\x3cdiv class\x3d"zm-noti7-content-head-item"\x3e\x3cspan class\x3d"zg-gray-normal"\x3e这些人最近关注了你\x3c/span\x3e\x3c/div\x3e' + d);
            else {
              switch (a) {
                case 0:
                  d = "暂无新消息";
                  break;
                case 1:
                  d = "有人关注你时会显示在这里";
                  break;
                case 2:
                  d = "你的答案收到赞同、感谢时会显示在这里"
              }
              d = '\x3cdiv class\x3d"zm-noti7-popup-empty"\x3e' + d + "\x3c/div\x3e"
            }
            this.cache[a] =
              d;
            b.hasMore && 0 === this.Op[a] && (this.Op[a] = b.offset);
            this.gn[a] && (vy(this, a), this.gn[a] = !1)
          }
      });
      b.ajax("/noti7/stack/" + this.types[a] + "?limit\x3d10\x26r\x3d" + (0, z.H)(), "", "GET")
    }
  };
  z.e.IA = function(a) {
    var b = this;
    if (this.$j[a]) return window.Promise.reject("Request already in progress");
    if (0 === this.Op[a]) return window.Promise.resolve(!1);
    var c = this.Ox[a],
      d = z.Ye('\x3cdiv class\x3d"text-center"\x3e\x3ci class\x3d"spinner-gray"\x3e\x3c/i\x3e\x3c/div\x3e');
    c.appendChild(d);
    return this.$j[a] = window.$.get("/noti7/stack/" + this.types[a], {
      offset: this.Op[a],
      r: (0, z.H)()
    }).then(function(f) {
      z.N(d);
      if (f)
        if (f.r) z.V.message(f.msg);
        else {
          var g = z.Ye(f.msg);
          c.appendChild(g);
          b.$j[a] = null;
          b.Kg && b.Kg[a] &&
            b.Kg[a].update();
          b.Op[a] = f.offset;
          return f.hasMore
        }
    })
  };
  z.e.UR = function(a) {
    this.RH = a = window.$.isNumeric(a) ? a : a.Pf;
    0 !== a ? (this.Im.innerHTML = this.Qm.innerHTML = a, this.Im.style.visibility = this.Qm.style.visibility = "visible") : this.Im.style.visibility = this.Qm.style.visibility = "hidden";
    zy(this)
  };
  z.e.nt = function(a) {
    z.nf(this.Ui, a.target) || z.nf(this.Xq, a.target) || Dy(this, !1)
  };
  z.y(Fy, z.Q);
  z.e = Fy.prototype;
  z.e.defaults = {
    trigger: "hover",
    cK: "open",
    hideFocus: !1
  };
  z.e.Ob = function() {
    return this.Vg.length && this.rd.length
  };
  z.e.w = function(a) {
    if (a) {
      var b = (0, window.$)(a),
        c = b.prev();
      this.Vg = b;
      this.rd = c;
      this.$parent = b.parent();
      Fy.v.w.call(this, a);
      return this
    }
  };
  z.e.toggle = function() {
    this.Bb() ? this.close() : this.open()
  };
  z.e.Bb = function() {
    return this.Vg.is(":visible")
  };
  z.e.open = function() {
    this.Vg.attr("aria-hidden", "false").parent().addClass(this.H.cK);
    this.rd.attr("aria-expanded", "true")
  };
  z.e.close = function() {
    this.Vg.attr("aria-hidden", "true").parent().removeClass(this.H.cK);
    this.rd.attr("aria-expanded", "false")
  };
  z.e.SU = function(a) {
    var b = a.keyCode;
    switch (b) {
      case 32:
        a.preventDefault();
        this.toggle();
        break;
      case 27:
      case 9:
        this.close();
        break;
      case 38:
      case 40:
        Hy(this, 38 === b ? -1 : 0)
    }
  };
  z.e.iV = function(a) {
    var b = a.keyCode;
    switch (b) {
      case 27:
      case 9:
        this.close();
        this.rd.focus();
        break;
      case 38:
      case 40:
        a.preventDefault(), Hy(this, this.index + (38 === b ? -1 : 1))
    }
  };
  z.e.C = function() {
    var a = this,
      b = this.H;
    Gy(this);
    this.Vg.on("keydown", (0, z.t)(this.iV, this));
    this.rd.on("keydown", (0, z.t)(this.SU, this));
    var c = z.Zm ? "click" : b.trigger;
    if ("hover" === c) this.$parent.on("hover", (0, z.t)(function(a) {
      "mouseenter" === a.type ? this.open() : this.close()
    }, this));
    else if ("click" === c) this.rd.on("click", (0, z.t)(function(a) {
      a.preventDefault();
      this.toggle();
      this.rd.focus()
    }, this));
    this.$parent.on("focusout", function() {
      (0, window.setTimeout)(function() {
        a.$parent.get(0).contains(window.document.activeElement) ||
          a.close()
      })
    });
    if (b.hideFocus) this.Vg.children().find("a").on("click", function() {
      this.blur()
    })
  };
  z.n(Iy, z.Q);
  z.e = Iy.prototype;
  z.e.C = function() {
    z.Q.prototype.C.call(this);
    this.Sz()
  };
  z.e.at = function() {
    return this.O
  };
  z.e.aD = function(a, b, c) {
    if (a) {
      var d = {
        query: (0, z.ab)(this.m().value)
      };
      z.Ai({
        Vc: !0,
        category: "search",
        action: a,
        label: b,
        value: c,
        attributes: d
      })
    }
  };
  z.e.Sz = function() {
    var a = this,
      b = this.m();
    z.xl(z.gn.register("/", function() {
      (0, window.setTimeout)(function() {
        b.focus()
      });
      z.Fr(b, null, 500)
    }), {
      group: "导航",
      name: "搜索"
    });
    var c = new Et,
      d = b.getAttribute("placeholder") || "搜索你感兴趣的内容...";
    this.O = new z.Ft("/autocomplete", b, null, null, b.offsetParent, null, [d], null, c);
    this.O.On = !1;
    this.O.Lg(!0);
    this.o().g(this.O, "select", this.Az).g(this.O, oG, function() {
      z.X.trackEvent(a, {
        action: "Search",
        element: "InputBox"
      }, Ny(a))
    });
    var f = b.form;
    if (f) {
      var g = this,
        h = function(a) {
          (0, z.ab)(b.value) ?
          f.submit(): a.preventDefault()
        };
      this.o().g(b, "keydown", function(a) {
        13 === a.keyCode && (g.aD("visit_search_result", "enter"), z.X.trackEvent(g, {
          action: "Search",
          element: "InputBox"
        }, Ny(g)), h(a))
      });
      this.o().g(f, "submit", h);
      (0, window.$)(":submit", f).click(function() {
        g.aD("visit_search_result", "search_box_submit");
        z.X.trackEvent(g, {
          action: "Search",
          element: "Button"
        }, Ny(g))
      })
    }
    this.o().g(this.O, "suggestionsupdate", function() {
      a.dA();
      a.Rw()
    });
    var k = (0, z.t)(function() {
      this.O.YF = !(this.metaKey || this.UA)
    }, this);
    this.o().g(window.document,
      "keydown",
      function(a) {
        a.metaKey && (this.metaKey = !0, k())
      });
    this.o().g(window.document, "keyup", function(a) {
      if (91 === a.keyCode || 224 === a.keyCode) this.metaKey = !1, k()
    });
    this.o().g(window.document, "mouseup", function(a) {
      z.Qc(a, 1) && (this.UA = !0, k(), (0, window.setTimeout)((0, z.t)(function() {
        this.UA = !1;
        k()
      }, this), 0))
    });
    this.o().g(b, "mousedown", function(a) {
      a.stopPropagation();
      return !0
    })
  };
  z.e.dA = function() {
    var a = this.O.M;
    a && a.m() && z.X.vb(a, {
      module: "SearchResultList"
    })
  };
  z.e.Rw = function() {
    var a = this.O.Na,
      b = this.O.M.bf;
    if (a && 0 !== a.length) {
      if (1 === a.length) {
        var c = z.M("div", {
          className: "zu-autocomplete-empty"
        }, "没有找到相关的结果");
        z.cf(c, b[0]);
        z.N(b[0])
      }
      var d = Ny(this);
      z.A(a, function(c, g) {
        Jy(a[g - 1], c) && Ly(this, b[g], c[0]);
        var h = (0, window.$)("a", b[g]),
          k = h.data("za-element-name");
        z.Ln(h[0], function() {
          z.X.trackCardShow(h[0], {
            element: "Link",
            element_name: k
          }, d)
        })
      }, this)
    }
  };
  z.e.Az = function(a) {
    var b = this.O.sg(),
      c = this.O.M.vm,
      d = z.yb(b, 1),
      f = d[2],
      g = null,
      b = b[0];
    "topic" === b ? (g = "/topic/" + d[1], g = My(this, g)) : "people" === b ? (g = "/" + ((Array.isArray(d[5]) ? d[5][0] : d[5]) ? "org" : "people") + "/" + d[1], g = My(this, g)) : "question" === b ? g = My(this, "/question/" + f) : "article" === b ? g = My(this, "https://zhuanlan.zhihu.com/p/" + f) : "promotion" === b ? g = My(this, "https://promotion.zhihu.com/p/" + f) : "column" === b ? g = My(this, "https://zhuanlan.zhihu.com/" + f) : "search_link" === b && (g = "/search?q\x3d" + (0, window.encodeURI)(d[0]) +
      "\x26type\x3dcontent");
    g && (z.W.yb({
        type: "ga_serach_select",
        data: {
          type: b,
          index: c
        }
      }), d = (0, window.$)("a", this.O.M.bf[c])[0], z.X.trackEvent(d, {
        action: "OpenUrl",
        element: "Link"
      }, {
        link: {
          url: d.href
        }
      }), d = c + 1, (b = {
        topic: ["visit_topic", "instant_search_result_topic", d],
        question: ["visit_question", "instant_search_result_question", d],
        people: ["visit_people_profile", "instant_search_result_people", d],
        search_link: ["visit_search_result"]
      }[b]) && this.aD.apply(this, b), z.aj.set("s-q", (0, window.encodeURI)(this.O.cc), -1, "/"),
      z.aj.set("s-i", c + 1, -1, "/"), z.aj.set("sid", (0, z.jG)(), -1, "/"), z.aj.set("s-t", "autocomplete", -1, "/"), this.metaKey || this.UA ? window.open(g) : window.location.href = g);
    a.preventDefault()
  };
  var Ky = {
    people: "用户",
    topic: "话题",
    question: "内容",
    column: "内容",
    article: "内容",
    promotion: "内容"
  };
  z.y(Oy, z.Wj);
  Oy.prototype.init = function() {
    if ((0, window.$)(".zu-top").length) {
      z.Uh.get("__Q_ISNEWLYCREATED__") && (z.Uh.remove("__Q_ISNEWLYCREATED__"), z.R && (z.R.mI = !0));
      if (z.Y.Lb())(new ty).init();
      else(0, window.$)("#zh-top-inner").on("click", 'a[href\x3d"/topic"]', function() {
        var a = new z.Sk;
        a.nd("top_navigation_topics");
        a.show();
        return !1
      }).on("click", ".js-signin-noauth", function() {
        var a = new z.Sk;
        a.nd("top_navigation_sign_in");
        a.show();
        return !1
      }).on("click", ".js-signin-noauth-mobile", function() {
        z.S("app-promotion", "click_mobileweb_signin_btn");
        var a = new z.Sk;
        a.nd("top_navigation_sign_in_mobile");
        a.show();
        return !1
      }).on("click", ".js-signup-noauth", function() {
        var a = new z.Wk;
        a.nd("top_navigation_sign_up");
        a.show();
        return !1
      }).on("click", ".js-signup-noauth-mobile", function() {
        z.S("app-promotion", "click_mobileweb_signup_btn");
        var a = new z.Wk;
        a.nd("top_navigation_sign_up_mobile");
        a.show();
        return !1
      });
      if (this.Ja = z.J("zh-top-search")) {
        this.pT = z.L("zu-top-search-input", this.Ja);
        var a = z.J("zu-top-add-question");
        a && this.o().g(a, "click", this.$X);
        z.Uj ||
          !z.Tj ? (new Fy({
            hideFocus: !0
          })).w((0, window.$)("#top-nav-profile-dropdown").get(0)) : Py();
        this.Sz()
      }
    }
  };
  Oy.prototype.Sz = function() {
    var a = (new z.th(window.location)).Vd().get("q");
    a ? a = (0, window.decodeURIComponent)(a) : (a = z.Uh.get("query"), z.Uh.remove("query"));
    var b = this.pT;
    a && (b.value = a);
    z.Tj && this.o().g(b, ["focus", "blur"], function(a) {
      (0, window.$)(".zu-top").toggleClass("is-searching", "focus" === a.type)
    });
    (new Iy).w(b)
  };
  Oy.prototype.$X = z.Rq(function() {
    z.fw.aa().show()
  }, !0, "#ask");
  window.JSON || (window.JSON = {
    parse: Kn,
    stringify: Xo
  });
  z.C && (Object.getPrototypeOf = function(a) {
    return function(b) {
      return b.__proto__ || a.apply(this, arguments)
    }
  }(Object.getPrototypeOf));
  z.y(Qy, z.Q);
  z.TG = new Qy;
  z.TG.w(window.document);
  z.y(Ry, z.Bj);
  z.ka(Ry);
  z.e = Ry.prototype;
  z.e.oc = function() {
    z.Kj(this, null);
    this.o().g(window.document, "click", this.nt)
  };
  z.e.nt = function(a) {
    a = a.target;
    if ("IMG" === a.tagName && z.U.has(a, this.EY)) {
      var b = a.getAttribute("data-original");
      if (b && !z.zm && !z.Lo(a, "editable")) {
        this.ca('\x3cdiv class\x3d"zm-light-box-x1" id\x3d"zm-light-box-x1"\x3e\x3cdiv class\x3d"zm-light-box-x2" id\x3d"zm-light-box-x2"\x3e\x3cimg src\x3d"' + b + '" class\x3d"zm-light-box-img-el" /\x3e\x3cdiv class\x3d"zm-light-box-footer"\x3e\x3ca class\x3d"zm-light-box-show-origin" href\x3d"' + b + '" target\x3d"_blank"\x3e查看原图\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e');
        this.F(!0);
        z.U.add(this.m(), "zm-light-box-fullscreen-image");
        var b = z.Qe(),
          c = z.J("zm-light-box-x1"),
          d = z.J("zm-light-box-x2"),
          f = a.getAttribute("data-rawheight"),
          g = a.getAttribute("data-rawwidth"),
          g = g ? +g : 0;
        (f ? +f : 0) > b.height - 80 ? d.style.marginTop = "40px" : c.style.lineHeight = b.height + "px";
        d.style.width = g > b.width - 80 ? b.width - 80 + "px" : g + "px";
        z.W.yb({
          type: "ga_click_enlarge_image",
          target: a
        })
      }
    }
  };
  z.e.ga = z.r;
  z.e.focus = z.r;
  z.e.VK = z.Hl;
  z.e.QR = function() {
    this.F(!1);
    z.U.remove(window.document.body, this.UE)
  };
  z.e.Of = function() {
    Ry.v.Of.call(this);
    z.U.add(window.document.body, this.UE);
    this.o().xa(window.document, "click", this.QR)
  };
  z.e.B = function() {
    Ry.v.B.call(this);
    z.U.add(this.m(), "zm-light-box")
  };
  z.e.OA = function() {
    this.Zc = this.K().B("div", this.bd + "-bg zm-light-box-background");
    z.P(this.Zc, !1)
  };
  Ry.aa();
  z.lg("common");
  window.console || (window.console = {
    info: z.r,
    log: z.r,
    warning: z.r,
    error: z.r
  });
  z.TG.on(["click!", "show!", "visit!"], function(a) {
    var b = a.Jc;
    b.category && b.action && z.S(b.category, a.type.replace("!", "") + "_" + b.action, b.label, b.value)
  });
  z.ud = window;
  (function() {
    function a(a) {
      z.X.config({
        responseId: a.getResponseHeader(z.X.cE),
        experiment: a.getResponseHeader(z.X.ZD)
      })
    }
    z.Tj = z.tm.mb;
    window.$.ajaxPrefilter(function(a, c, d) {
      var f;
      c = a.url;
      "get" !== a.type.toLowerCase() && (f = z.aj.get("_xsrf")) && (c.startsWith("/") || (new RegExp("https?://" + window.location.hostname + "[/|:]")).test(c)) && d.setRequestHeader("X-Xsrftoken", f)
    });
    window.$.ajaxPrefilter(function(b, c, d) {
      var f = Date.now();
      d.always(function() {
        a(d);
        z.X.trackMonitor(null, {
          monitor: {
            type: "Ajax",
            url: b.url,
            statusCode: d.status,
            loadTime: Date.now() - f
          }
        })
      })
    });
    yp("*", function(b, c) {
      a(c)
    });
    Cp(function(a) {
      var c = Date.now();
      a.on("complete", function() {
        z.X.trackMonitor(null, {
          monitor: {
            type: "Ajax",
            url: String(a.cu),
            statusCode: z.le(a),
            loadTime: Date.now() - c
          }
        })
      })
    });
    (new Oy).init()
  })();
  z.Kp.dispatchEvent("init");
  (0, window.$)(function() {
    z.Kp.dispatchEvent("postinit")
  });
  z.Y.Lb() ? (yp("json", function(a) {
    (a = a.profile_result) && (0, window.$)(a).css("border-top", "1px solid #eee").appendTo(window.document.body)
  }), z.tm.mb && (window.$.fx.off = !0), (0, window.$)(function() {
    (new xx).init()
  })) : (0, window.$)("body").addClass("no-auth");
  z.Wa(window.location.host, "zhihu.com") || (z.Ki = !0);
  (0, window.$)(window.document.body).children("div.zu-main").attr("role", "main");
  window.document.addEventListener && window.document.addEventListener("touchstart", z.r, !1);
  z.Uj && (0, window.$)('meta[name\x3d"viewport"]').attr("content", "width\x3ddevice-width, initial-scale\x3d1.0");
  (0, window.$)(function() {
    window.znonce && window.znonce.evalScripts();
    (new ux).init();
    (new jy).init();
    (new fy).init();
    var a = new vx;
    window.console && window.console.info && window.console.info(a.JO + "\n\n" + a.link);
    zx();
    Sy();
    z.S.init()
  });
  z.n(z.Ty, z.Q);
  z.e = z.Ty.prototype;
  z.e.C = function() {
    var a = this;
    z.Q.prototype.C.call(this);
    var b = this.$e,
      c = b.Aa,
      d = b.validator,
      f = b.mx,
      g = b.Jn,
      h = this.MK.bind(this),
      k = this.$W.bind(this);
    c.on("change keyup", ".is-error", function() {
      h((0, window.$)(this))
    }).submit(function() {
      function b(d) {
        c.removeClass("form-submitting");
        d && d.r ? z.Vy(a, d.msg) : z.Vy(a, d)
      }

      function h(b) {
        c.removeClass("form-submitting");
        b && !b.r ? g.call(c, b) : z.Vy(a, b)
      }
      if (c.hasClass("form-submitting")) return !1;
      k();
      var q = d(a.getData());
      if (q) return z.Vy(a, q), !1;
      f.call(c).then(function() {
        c.addClass("form-submitting");
        a.submit().then(h).catch(b)
      });
      return !1
    }).find('[type\x3d"submit"]').attr("disabled", !1)
  };
  z.e.MK = function(a) {
    a.removeClass("is-error").find("." + this.$e.Cm + "-error").remove()
  };
  z.e.$W = function() {
    this.Aa.find(".is-error").removeClass("is-error").end().find("." + this.$e.Cm + "-error").remove()
  };
  z.e.submit = function() {
    var a = this.$e,
      b = a.Aa,
      a = a.lD,
      c = b.attr("contentType") || "application/json",
      d = {
        url: b.attr("action"),
        type: b.attr("method") || "POST"
      };
    if (a) Object.assign(d, {
      data: new window.FormData(b[0]),
      async: !1,
      cache: !1,
      contentType: !1,
      processData: !1
    });
    else {
      var f = this;
      Object.assign(d, {
        data: function() {
          var a = f.getData();
          "application/json" === c && (a = JSON.stringify(a));
          return a
        }(),
        contentType: c
      })
    }
    return new window.Promise(function(a, b) {
      window.$.ajax(d).done(a).fail(function(a) {
        b(a.responseJSON || a.responseText)
      })
    })
  };
  z.e.getData = function() {
    return Wy(this.Aa, this.$e.VQ)
  };
  z.y(Xy, z.G);
  Xy.prototype.handleEvent = function(a) {
    var b = 0,
      c = 0,
      d = 0;
    a = a.nc;
    if ("mousewheel" == a.type) {
      c = 1;
      if (z.C || z.D && (z.ml || z.E("532.0"))) c = 40;
      d = Yy(-a.wheelDelta, c);
      z.ja(a.wheelDeltaX) ? (b = Yy(-a.wheelDeltaX, c), c = Yy(-a.wheelDeltaY, c)) : c = d
    } else d = a.detail, 100 < d ? d = 3 : -100 > d && (d = -3), z.ja(a.axis) && a.axis === a.HORIZONTAL_AXIS ? b = d : c = d;
    z.pa(this.cJ) && (b = cp(b, -this.cJ, this.cJ));
    z.pa(this.dJ) && (c = cp(c, -this.dJ, this.dJ));
    this.KT && (b = -b);
    b = new Zy(d, a, b, c);
    this.dispatchEvent(b)
  };
  Xy.prototype.D = function() {
    Xy.v.D.call(this);
    z.nd(this.OI);
    this.OI = null
  };
  z.y(Zy, z.Pc);
  z.y($y, z.G);
  z.e = $y.prototype;
  z.e.De = 0;
  z.e.Kp = 0;
  z.e.Gp = 100;
  z.e.uo = 0;
  z.e.Yk = 1;
  z.e.fI = !1;
  z.e.xu = !1;
  z.e.Da = function(a) {
    a = az(this, a);
    this.De != a && (this.De = a + this.uo > this.Gp ? this.Gp - this.uo : a < this.Kp ? this.Kp : a, this.fI || this.xu || this.dispatchEvent("change"))
  };
  z.e.X = function() {
    return az(this, this.De)
  };
  z.e.xv = function(a) {
    a = az(this, a);
    this.uo != a && (this.uo = 0 > a ? 0 : this.De + a > this.Gp ? this.Gp - this.De : a, this.fI || this.xu || this.dispatchEvent("change"))
  };
  z.e.Ei = function() {
    var a = this.uo;
    return null == this.Yk ? a : Math.round(a / this.Yk) * this.Yk
  };
  z.e.Oc = function() {
    return az(this, this.Kp)
  };
  z.e.ed = function() {
    return az(this, this.Gp)
  };
  z.e.Ho = function() {
    return this.Yk
  };
  z.y(bz, z.Q);
  z.e = bz.prototype;
  z.e.Ub = "horizontal";
  z.e.mp = !1;
  z.e.BU = !1;
  z.e.bg = 10;
  z.e.vu = 0;
  z.e.kI = !0;
  z.e.qJ = 0;
  z.e.wN = 1E3;
  z.e.lc = !0;
  z.e.qe = !1;
  z.e.B = function() {
    bz.v.B.call(this);
    var a = this.K().B("DIV", this.V(this.Ub));
    this.T(a)
  };
  z.e.T = function(a) {
    bz.v.T.call(this, a);
    z.hj(a, this.V(this.Ub));
    a = this.m();
    var b = z.Me(null, "goog-slider-thumb", a)[0];
    b || (b = this.K().B("DIV", "goog-slider-thumb"), z.bj(b, "button"), a.appendChild(b));
    this.jb = this.Sd = b;
    z.bj(this.m(), "slider");
    rz(this)
  };
  z.e.C = function() {
    bz.v.C.call(this);
    this.Ce = new z.oj(this.jb);
    this.lg = new z.oj(this.Sd);
    this.Ce.jh(this.qe);
    this.lg.jh(this.qe);
    this.Ce.dy = this.lg.dy = z.r;
    this.Cb = new Sp(this.m());
    cz(this, !0);
    this.m().tabIndex = 0;
    lz(this)
  };
  z.e.Ab = function() {
    bz.v.Ab.call(this);
    z.Dc(this.Ce, this.lg, this.Cb, this.Dk)
  };
  z.e.lt = function(a) {
    var b = a.Is == this.Ce ? this.jb : this.Sd,
      c;
    "vertical" == this.Ub ? (c = this.m().clientHeight - b.offsetHeight, c = (c - a.top) / c * (this.ed() - this.Oc()) + this.Oc()) : c = a.left / (this.m().clientWidth - b.offsetWidth) * (this.ed() - this.Oc()) + this.Oc();
    c = a.Is == this.Ce ? Math.min(Math.max(c, this.Oc()), this.X() + this.Ei()) : Math.min(Math.max(c, this.X()), this.ed());
    jz(this, b, c)
  };
  z.e.wt = function(a) {
    var b = "start" == a.type;
    z.zo(this.m(), "goog-slider-dragging", b);
    z.zo(a.target.handle, "goog-slider-thumb-dragging", b);
    a = a.Is == this.Ce;
    b ? (this.dispatchEvent("h"), this.dispatchEvent(a ? "d" : "f")) : (this.dispatchEvent("i"), this.dispatchEvent(a ? "e" : "g"))
  };
  z.e.Cf = function(a) {
    var b = !0;
    switch (a.keyCode) {
      case 36:
        pz(this, this.Oc());
        break;
      case 35:
        pz(this, this.ed());
        break;
      case 33:
        hz(this, this.bg);
        break;
      case 34:
        hz(this, -this.bg);
        break;
      case 37:
        var c = this.qe && this.Ed() ? 1 : -1;
        hz(this, a.shiftKey ? c * this.bg : c * this.fr);
        break;
      case 40:
        hz(this, a.shiftKey ? -this.bg : -this.fr);
        break;
      case 39:
        c = this.qe && this.Ed() ? -1 : 1;
        hz(this, a.shiftKey ? c * this.bg : c * this.fr);
        break;
      case 38:
        hz(this, a.shiftKey ? this.bg : this.fr);
        break;
      default:
        b = !1
    }
    b && a.preventDefault()
  };
  z.e.st = function(a) {
    this.m().focus && this.m().focus();
    var b = a.target;
    z.nf(this.jb, b) || z.nf(this.Sd, b) || (b = "click" == a.type, b && (0, z.H)() < this.qJ + this.wN || (b || (this.qJ = (0, z.H)()), this.BU ? pz(this, fz(this, a)) : (this.LC(a), this.ff = kz(this, fz(this, a)), this.SH = "vertical" == this.Ub ? this.$t < this.ff.offsetTop : this.$t > oz(this, this.ff) + this.ff.offsetWidth, a = z.Ke(this.m()), this.o().g(a, "mouseup", this.KC, !0).g(this.m(), "mousemove", this.LC), this.Ki || (this.Ki = new z.td(200), this.o().g(this.Ki, "tick", this.tH)), this.tH(),
      this.Ki.start())))
  };
  z.e.mH = function(a) {
    hz(this, (0 < a.detail ? -1 : 1) * this.fr);
    a.preventDefault()
  };
  z.e.tH = function() {
    var a;
    if ("vertical" == this.Ub) {
      var b = this.$t,
        c = this.ff.offsetTop;
      this.SH ? b < c && (a = gz(this, this.ff) + this.bg) : b > c + this.ff.offsetHeight && (a = gz(this, this.ff) - this.bg)
    } else b = this.$t, c = oz(this, this.ff), this.SH ? b > c + this.ff.offsetWidth && (a = gz(this, this.ff) + this.bg) : b < c && (a = gz(this, this.ff) - this.bg);
    z.ja(a) && jz(this, this.ff, a)
  };
  z.e.KC = function() {
    this.Ki && this.Ki.stop();
    var a = z.Ke(this.m());
    this.o().oa(a, "mouseup", this.KC, !0).oa(this.m(), "mousemove", this.LC)
  };
  z.e.LC = function(a) {
    this.$t = ez(this, a)
  };
  z.e.Oc = function() {
    return this.Ib.Oc()
  };
  z.e.ed = function() {
    return this.Ib.ed()
  };
  z.e.qH = function() {
    lz(this);
    rz(this);
    this.dispatchEvent("change")
  };
  z.e.lp = function() {
    return this.mp
  };
  z.e.wQ = function() {
    this.mp = !1
  };
  z.e.setOrientation = function(a) {
    if (this.Ub != a) {
      var b = this.V(this.Ub),
        c = this.V(a);
      this.Ub = a;
      this.m() && (a = this.m(), z.gj(a, b) && (z.jj(a, b), z.hj(a, c)), b = this.qe && this.Ed() ? "right" : "left", this.jb.style[b] = this.jb.style.top = "", this.Sd.style[b] = this.Sd.style.top = "", this.Yb && (this.Yb.style[b] = this.Yb.style.top = "", this.Yb.style.width = this.Yb.style.height = ""), lz(this))
    }
  };
  z.e.D = function() {
    bz.v.D.call(this);
    this.Ki && this.Ki.dispose();
    delete this.Ki;
    this.mo && this.mo.dispose();
    delete this.mo;
    delete this.jb;
    delete this.Sd;
    this.Yb && delete this.Yb;
    this.Ib.dispose();
    delete this.Ib;
    this.Cb && (this.Cb.dispose(), delete this.Cb);
    this.Dk && (this.Dk.dispose(), delete this.Dk);
    this.Ce && (this.Ce.dispose(), delete this.Ce);
    this.lg && (this.lg.dispose(), delete this.lg)
  };
  z.e.fr = 1;
  z.e.Ho = function() {
    return this.Ib.Ho()
  };
  z.e.X = function() {
    return this.Ib.X()
  };
  z.e.Da = function(a) {
    jz(this, this.jb, a)
  };
  z.e.Ei = function() {
    return this.Ib.Ei()
  };
  z.e.xv = function(a) {
    jz(this, this.Sd, this.Ib.X() + a)
  };
  z.e.F = function(a) {
    z.P(this.m(), a);
    a && lz(this)
  };
  z.e.bb = function(a) {
    this.lc != a && this.dispatchEvent(a ? "enable" : "disable") && (this.lc = a, cz(this, a), a || this.KC(), z.zo(this.m(), "goog-slider-disabled", !a))
  };
  z.e.isEnabled = function() {
    return this.lc
  };
  z.y(sz, bz);
  sz.prototype.V = function(a) {
    return "vertical" == a ? "goog-slider-vertical" : "goog-slider-horizontal"
  };
  z.y(tz, z.Q);
  z.e = tz.prototype;
  z.e.defaults = {
    sF: 310,
    tF: 310,
    Sg: 250,
    Tg: 250,
    qU: 2,
    opacity: .25,
    y0: "#eee"
  };
  z.e.T = function(a) {
    tz.v.T.call(this, a);
    this.src = this.h.src;
    this.options.src = this.src;
    this.options.zn = (this.options.sF - this.options.Sg) / 2;
    this.options.yn = (this.options.tF - this.options.Tg) / 2;
    this.rs()
  };
  z.e.rs = function() {
    var a = this.options;
    this.zD = (0, window.$)((0, z.lw)('\x3cdiv class\x3d"avatar-editor-container" style\x3d"width:\x3c%\x3dcontainerWidth%\x3epx"\x3e\x3cdiv class\x3d"avatar-editor-container-inner" style\x3d"height:\x3c%\x3dcontainerHeight%\x3epx;"\x3e\x3cdiv class\x3d"avatar-editor-window" style\x3d"height:\x3c%\x3dwindowHeight%\x3epx;width:\x3c%\x3dwindowWidth%\x3epx;margin:\x3c%\x3dwindowMarginTop%\x3epx \x3c%\x3dwindowMarginLeft%\x3epx;"\x3e\x3cdiv class\x3d"avatar-editor-window-shadow" style\x3d"height:\x3c%\x3dwindowHeight%\x3epx;width:\x3c%\x3dwindowWidth%\x3epx;"\x3e\x3c/div\x3e\x3cdiv class\x3d"avatar-editor-window-inner" style\x3d"width:\x3c%\x3dcontainerWidth%\x3epx; height:\x3c%\x3dcontainerHeight%\x3epx;margin:-\x3c%\x3dwindowMarginTop%\x3epx 0 0 -\x3c%\x3dwindowMarginLeft%\x3epx;"\x3e\x3cimg class\x3d"inner" title\x3d"拖动相片"/\x3e\x3c/div\x3e\x3c/div\x3e\x3cimg class\x3d"outer" style\x3d"opacity:\x3c%\x3dopacity%\x3e;"/\x3e\x3c/div\x3e\x3cdiv class\x3d"goog-slider-wrap"\x3e\x3ci class\x3d"zg-icon image-minus"\x3e\x3c/i\x3e\x3ci class\x3d"zg-icon image-plus"\x3e\x3c/i\x3e\x3cdiv class\x3d"goog-slider"\x3e\x3cdiv class\x3d"line"\x3e\x3c/div\x3e\x3cdiv class\x3d"goog-slider-thumb"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e', {
      containerWidth: a.tF,
      containerHeight: a.sF,
      windowHeight: a.Sg,
      windowWidth: a.Tg,
      windowMarginTop: a.zn,
      windowMarginLeft: a.yn,
      src: a.src,
      opacity: a.opacity
    }));
    this.Mb = this.zD[0];
    this.zD.insertBefore(this.h);
    z.P(this.h, !1);
    this.EP = z.L("avatar-editor-container-inner", this.Mb);
    this.Ft = z.L("outer", this.Mb);
    this.Pz = z.L("inner", this.Mb);
    this.tr = (0, window.$)(this.Ft);
    this.tw = (0, window.$)(this.Pz);
    this.PH = 0;
    this.tr.load((0, z.t)(this.kM, this));
    this.tw.load((0, z.t)(this.kM, this));
    this.Pz.src = this.Ft.src = this.options.src;
    this.jY = z.L("goog-slider",
      this.Mb)
  };
  z.e.C = function() {
    this.BC = new sz;
    this.BC.w(this.jY);
    this.o().g(this.EP, ["mousedown", "touchstart"], function(a) {
      var b = new z.oj(this.Mb);
      b.addEventListener("drag", (0, z.t)(function(a) {
        var b = this.zoom;
        this.Ze = {
          mr: this.options.Tg / b,
          Ko: this.options.Sg / b,
          x: (this.options.yn - (this.$H.left + (a.clientX - this.Hv))) / b,
          y: (this.options.zn - (this.$H.top + (a.clientY - this.Iv))) / b
        };
        wz(this)
      }, this));
      b.addEventListener("end", (0, z.t)(function() {
        b.dispose()
      }, this));
      b.mn(a);
      this.mn(a)
    });
    this.o().g(this.Mb, ["touchmove"], function(a) {
      a.stopPropagation();
      a.preventDefault()
    });
    this.o().g(this.BC, "change", function() {
      var a = this.BC.X(),
        b = this.TM;
      uz(this, (this.BZ - b) * a / 100 + b)
    })
  };
  z.e.kM = function() {
    this.fT || (this.Pz.complete && this.Ft.complete ? this.init() : (this.PH++, 2 <= this.PH && this.init()))
  };
  z.e.init = function() {
    var a, b;
    b = this.tr[0];
    if (b.naturalWidth) a = b.naturalWidth, b = b.naturalHeight;
    else {
      var c = new window.Image;
      c.src = b.src;
      a = c.width;
      b = c.height
    }
    this.Et = a;
    this.Dt = b;
    a = this.options.Tg / this.Et;
    b = this.options.Sg / this.Dt;
    this.TM = a = b > a ? b : a;
    this.BZ = this.TM * this.options.qU;
    this.Ze = {
      Ko: this.options.Tg / a,
      mr: this.options.Sg / a,
      x: 0,
      y: 0
    };
    uz(this, a);
    vz(this, this.Et / 2, this.Dt / 2);
    this.fT = !0
  };
  z.e.mn = function(a) {
    this.Hv = a.clientX;
    this.Iv = a.clientY;
    this.$H = this.tw.position();
    this.tr.position()
  };
  z.e.support = function() {
    return "getContext" in window.document.createElement("canvas")
  };
  z.y(z.xz, z.Q);
  z.yz = 1;
  z.e = z.xz.prototype;
  z.e.T = function(a) {
    this.h = a;
    this.B()
  };
  z.e.B = function() {
    this.iD = z.tm.gr + "/upload_avatar";
    this.Aa = (0, window.$)((0, z.lw)('\x3cform target\x3d"av_up_frame" style\x3d"display:none;" method\x3d"post" enctype\x3d"multipart/form-data" action\x3d"\x3c%\x3duploadAction%\x3e"\x3e\x3clabel for\x3d"avt_file"\x3e\x3c/label\x3e\x3cinput type\x3d"file" accept\x3d"image/*" name\x3d"picture" id\x3d"avt_file" /\x3e\x3cinput type\x3d"hidden" name\x3d"handle_mode" value\x3d"upload" /\x3e\x3cinput type\x3d"hidden" name\x3d"type" value\x3d"\x3c%\x3dtype%\x3e" /\x3e\x3cinput type\x3d"hidden" name\x3d"dest_id" value\x3d"\x3c%\x3ddest_id%\x3e" /\x3e\x3cinput type\x3d"hidden" name\x3d"return_size" value\x3d"\x3c%\x3dreturn_size%\x3e" /\x3e\x3c/form\x3e', {
      uploadAction: this.iD,
      type: this.Vr,
      dest_id: this.Vr === z.yz ? z.Y[3] : this.pG,
      return_size: this.WK
    }));
    this.bN = (0, window.$)('\x3ciframe id\x3d"av_up_frame" name\x3d"av_up_frame" style\x3d"position: absolute; height: 0px; width: 0px; left: -9000px;"\x3e\x3c/iframe\x3e');
    this.bN.appendTo(window.document.body);
    this.input = this.Aa.find("input[type\x3dfile]")[0];
    z.C ? (this.Aa.find("label").html((0, window.$)(this.h).html()), this.h.innerHTML = "", (0, window.$)(this.h).append(this.Aa), this.Aa.addClass("avatar-editor-form-ie")) : (this.Aa.insertAfter(this.h),
      (0, window.$)(this.h).click(window.$.proxy(function() {
        this.input.click()
      }, this)));
    this.o().g(this.input, "change", this.Rc).g(this.input, "click", function(a) {
      !1 === this.dispatchEvent("beforeopen") && a.preventDefault()
    });
    this.o().g(z.W, "iframe_data", function(a) {
      (a = a.Pf) && !a.r ? "upload" === a.handle_mode ? (this.wm = a.url, this.Oz = a.id, zz() || this.Yp()) : "resize" === a.handle_mode && ((0, window.$)(this.h).find("form").remove(), this.DF(a)) : z.V.message(a.msg)
    })
  };
  z.e.Rc = function(a) {
    Az(this);
    a = this.input = a.target;
    if (zz()) {
      if (a.files && a.files[0]) {
        this.file = a = a.files[0];
        var b = new window.FileReader;
        b.onload = (0, z.t)(function(a) {
          this.wm = a.target.result;
          this.Yp()
        }, this);
        b.readAsDataURL(a)
      }
    } else this.Aa[0].submit();
    Dz(this)
  };
  z.e.Yp = function() {
    var a = this.dialog.S();
    this.Nz = new window.Image;
    this.Nz.src = this.wm;
    a = (0, window.$)(a);
    a.html("");
    a.append(this.Nz);
    this.Ux = new tz;
    this.Ux.w(this.Nz)
  };
  z.e.DF = function(a) {
    a && !a.r ? this.data = a : z.V.message(a.msg);
    this.dispatchEvent({
      type: "success",
      src: this.data
    });
    this.dialog.F(!1)
  };
  z.e.getData = function() {
    return this.data || null
  };
  z.e.Ud = function(a) {
    return this.data ? this.data.url.replace(/(\.\w+)$/, "_" + a + "$1") : ""
  };
  z.n(z.Fz, z.Q);
  z.Fz.prototype.C = function() {
    z.Q.prototype.C.call(this);
    var a = this.dW,
      b = this.m(),
      c = new z.xz(z.yz);
    c.w(b);
    var d = (0, window.$)(b),
      f = d.find(".Avatar"),
      g = d.find(".Spinner");
    this.o().g(c, "beforepost", function() {
      g.show()
    }).g(c, "success", function() {
      var b = {
        method: "save",
        params: {
          data: {
            avatar_path: c.getData().id
          }
        }
      };
      window.$.post("/node/ProfileHeaderV2", b, function(b) {
        g.hide();
        b && b.r ? z.V.message("更新失败") : (d.removeClass("ProfileAvatarEditor-none-avatar"), f.add(".top-nav-profile .Avatar").attr({
          src: c.Ud("l"),
          srcset: c.Ud("xl") +
            " 2x"
        }), a.Ri(b))
      })
    })
  };
  z.UG = function(a, b) {
    var c = [],
      d = [].slice,
      f = z.Yr(a, function() {
        c.length && (b(c), c = [])
      });
    return function() {
      c.push(d.call(arguments));
      f()
    }
  }(550, function(a) {
    z.Y.Lb() && (a = {
      items: JSON.stringify(a)
    }, window.$.post("/lastread/touch", a))
  });
  z.y(z.Gz, z.Gx);
  z.Gz.prototype.Fo = function() {
    return this.zp
  };
  z.Gz.prototype.an = function(a) {
    this.zp = a
  };
  z.Gz.prototype.ga = function(a, b, c, d) {
    var f = z.Qs(this.element, this.qf, a, b, null, c, 10, d, this.vB);
    if (f & 496) {
      var g = Hz(f, this.qf);
      b = Hz(f, b);
      f = z.Qs(this.element, g, a, b, null, c, 10, d, this.vB);
      f & 496 && (g = Hz(f, g), b = Hz(f, b), z.Qs(this.element, g, a, b, null, c, this.Fo(), d, this.vB))
    }
  };
  z.y(Iz, Up);
  z.ka(Iz);
  Iz.prototype.V = function() {
    return "goog-menuheader"
  };
  z.y(Jz, cq);
  z.aq("goog-menuheader", function() {
    return new Jz(null)
  });
  z.y(Kz, Up);
  z.ka(Kz);
  z.e = Kz.prototype;
  z.e.zf = function() {
    return "menuitem"
  };
  z.e.B = function(a) {
    var b = a.K().B("DIV", this.og(a).join(" "), Mz(this, a.$a(), a.K()));
    Oz(this, a, b, Xp(a, 8) || Xp(a, 16));
    return b
  };
  z.e.S = function(a) {
    return a && a.firstChild
  };
  z.e.w = function(a, b) {
    var c = z.jf(b),
      d = Lz(this, 2);
    c && z.gj(c, d) || b.appendChild(Mz(this, b.childNodes, a.K()));
    z.gj(b, "goog-option") && (a.yq(!0), this.yq(a, b, !0));
    return Kz.v.w.call(this, a, b)
  };
  z.e.ca = function(a, b) {
    var c = this.S(a),
      d = Nz(this, a) ? c.firstChild : null;
    Kz.v.ca.call(this, a, b);
    d && !Nz(this, a) && c.insertBefore(d, c.firstChild || null)
  };
  z.e.gj = function(a, b, c) {
    a && b && Oz(this, a, b, c)
  };
  z.e.yq = function(a, b, c) {
    a && b && Oz(this, a, b, c)
  };
  z.e.Bo = function(a) {
    switch (a) {
      case 2:
        return Lz(this, 0);
      case 16:
      case 8:
        return "goog-option-selected";
      default:
        return Kz.v.Bo.call(this, a)
    }
  };
  z.e.it = function(a) {
    var b = Lz(this, 0);
    switch (a) {
      case "goog-option-selected":
        return 16;
      case b:
        return 2;
      default:
        return Kz.v.it.call(this, a)
    }
  };
  z.e.V = function() {
    return "goog-menuitem"
  };
  z.y(z.Pz, cq);
  z.e = z.Pz.prototype;
  z.e.X = function() {
    var a = this.WA;
    return null != a ? a : this.nh()
  };
  z.e.Da = function(a) {
    this.WA = a
  };
  z.e.Zb = function(a, b) {
    z.Pz.v.Zb.call(this, a, b);
    switch (a) {
      case 8:
        this.vg() && !b && this.tc(!1);
        var c = this.m();
        c && this.M.gj(this, c, b);
        break;
      case 16:
        (c = this.m()) && this.M.yq(this, c, b)
    }
  };
  z.e.gj = function(a) {
    this.Zb(8, a)
  };
  z.e.yq = function(a) {
    this.Zb(16, a)
  };
  z.e.nh = function() {
    var a = this.$a();
    return z.ma(a) ? (a = z.mb(a, function(a) {
      return z.lf(a) && (z.gj(a, "goog-menuitem-accel") || z.gj(a, "goog-menuitem-mnemonic-separator")) ? "" : z.Mo(a)
    }).join(""), qp(a)) : z.Pz.v.nh.call(this)
  };
  z.e.Ef = function(a) {
    var b = this.getParent();
    if (b) {
      var c = b.dK;
      b.dK = null;
      if (b = c && z.pa(a.clientX)) b = new z.Ge(a.clientX, a.clientY), b = c == b ? !0 : c && b ? c.x == b.x && c.y == b.y : !1;
      if (b) return
    }
    z.Pz.v.Ef.call(this, a)
  };
  z.e.Df = function(a) {
    return a.keyCode == this.VA && this.$d(a) ? !0 : z.Pz.v.Df.call(this, a)
  };
  z.e.XQ = function() {
    return this.VA
  };
  z.aq("goog-menuitem", function() {
    return new z.Pz(null)
  });
  z.Pz.prototype.Hi = function() {
    return Xp(this, 16) ? "menuitemcheckbox" : Xp(this, 8) ? "menuitemradio" : z.Pz.v.Hi.call(this)
  };
  z.Pz.prototype.getParent = function() {
    return cq.prototype.getParent.call(this)
  };
  z.Pz.prototype.Gi = function() {
    return cq.prototype.Gi.call(this)
  };
  z.y(Qz, Up);
  z.ka(Qz);
  Qz.prototype.B = function(a) {
    return a.K().B("DIV", this.V())
  };
  Qz.prototype.w = function(a, b) {
    b.id && Tn(a, b.id);
    if ("HR" == b.tagName) {
      var c = b;
      b = this.B(a);
      z.cf(b, c);
      z.N(c)
    } else z.hj(b, this.V());
    return b
  };
  Qz.prototype.ca = function() {};
  Qz.prototype.V = function() {
    return "goog-menuseparator"
  };
  z.y(z.Rz, cq);
  z.Rz.prototype.C = function() {
    z.Rz.v.C.call(this);
    z.bj(this.m(), "separator")
  };
  z.aq("goog-menuseparator", function() {
    return new z.Rz
  });
  z.y(Sz, ds);
  z.ka(Sz);
  z.e = Sz.prototype;
  z.e.Ob = function(a) {
    return "UL" == a.tagName || Sz.v.Ob.call(this, a)
  };
  z.e.Co = function(a) {
    return "HR" == a.tagName ? new z.Rz : Sz.v.Co.call(this, a)
  };
  z.e.dg = function(a, b) {
    return z.nf(a.m(), b)
  };
  z.e.V = function() {
    return "goog-menu"
  };
  z.e.Ue = function(a) {
    Sz.v.Ue.call(this, a);
    z.cj(a.m(), "haspopup", "true")
  };
  z.y(z.Tz, z.Rz);
  z.aq("goog-menuseparator", function() {
    return new z.Rz
  });
  z.y(z.Uz, z.gs);
  z.e = z.Uz.prototype;
  z.e.Kn = !0;
  z.e.wO = !1;
  z.e.V = function() {
    return this.M.V()
  };
  z.e.dg = function(a) {
    if (this.M.dg(this, a)) return !0;
    for (var b = 0, c = z.bh(this); b < c; b++) {
      var d = z.ch(this, b);
      if ("function" == typeof d.dg && d.dg(a)) return !0
    }
    return !1
  };
  z.e.Ha = function(a) {
    this.L(a, !0)
  };
  z.e.yj = function(a, b) {
    this.pl(a, b, !0)
  };
  z.e.removeItem = function(a) {
    (a = this.removeChild(a, !0)) && a.dispose()
  };
  z.e.Fi = function(a) {
    return z.ch(this, a)
  };
  z.e.gm = function() {
    return z.bh(this)
  };
  z.e.ib = function() {
    var a = [];
    z.dh(this, function(b) {
      a.push(b)
    });
    return a
  };
  z.e.setPosition = function(a, b) {
    var c = this.W();
    c || z.P(this.m(), !0);
    Fo(this.m(), a, b);
    c || z.P(this.m(), !1)
  };
  z.e.F = function(a, b, c) {
    (b = z.Uz.v.F.call(this, a, b)) && a && this.wa && this.Kn && this.ec().focus();
    this.dK = a && c && z.pa(c.clientX) ? new z.Ge(c.clientX, c.clientY) : null;
    return b
  };
  z.e.rz = function(a) {
    this.Kn && this.ec().focus();
    return z.Uz.v.rz.call(this, a)
  };
  z.e.ZE = function(a) {
    return (this.wO || a.isEnabled()) && a.W() && Xp(a, 2)
  };
  z.e.T = function(a) {
    var b = this.M,
      c;
    c = this.K();
    c = z.Ne(c.Qa, "DIV", b.V() + "-content", a);
    for (var d = c.length, f = 0; f < d; f++) fs(b, this, c[f]);
    z.Uz.v.T.call(this, a)
  };
  z.e.Df = function(a) {
    var b = z.Uz.v.Df.call(this, a);
    b || z.dh(this, function(c) {
      !b && c.XQ && c.VA == a.keyCode && (this.isEnabled() && this.Uc(c), b = c.fc(a))
    }, this);
    return b
  };
  z.e.Eb = function(a) {
    z.Uz.v.Eb.call(this, a);
    (a = z.ch(this, a)) && Go(a.m(), this.m())
  };
  z.y(Wz, z.Gz);
  z.y(Xz, z.$p);
  z.ka(Xz);
  z.e = Xz.prototype;
  z.e.B = function(a) {
    var b = {
        "class": "goog-inline-block " + this.og(a).join(" ")
      },
      b = a.K().B("DIV", b, this.eh(a.$a(), a.K()));
    this.Kd(b, a.jm());
    return b
  };
  z.e.zf = function() {
    return "button"
  };
  z.e.S = function(a) {
    return a && a.firstChild && a.firstChild.firstChild
  };
  z.e.eh = function(a, b) {
    return b.B("DIV", "goog-inline-block " + (this.V() + "-outer-box"), b.B("DIV", "goog-inline-block " + (this.V() + "-inner-box"), a))
  };
  z.e.Ob = function(a) {
    return "DIV" == a.tagName
  };
  z.e.w = function(a, b) {
    Yz(b, !0);
    Yz(b, !1);
    var c;
    a: {
      c = a.K().SG(b);
      var d = this.V() + "-outer-box";
      if (c && z.gj(c, d) && (c = a.K().SG(c), d = this.V() + "-inner-box", c && z.gj(c, d))) {
        c = !0;
        break a
      }
      c = !1
    }
    c || b.appendChild(this.eh(b.childNodes, a.K()));
    z.ij(b, ["goog-inline-block", this.V()]);
    return Xz.v.w.call(this, a, b)
  };
  z.e.V = function() {
    return "goog-custom-button"
  };
  z.y(Zz, Xz);
  z.ka(Zz);
  z.e = Zz.prototype;
  z.e.S = function(a) {
    return Zz.v.S.call(this, a && a.firstChild)
  };
  z.e.w = function(a, b) {
    var c = z.Me("*", "goog-menu", b)[0];
    if (c) {
      z.P(c, !1);
      z.Ke(c).body.appendChild(c);
      var d = new z.Uz;
      d.w(c);
      a.Rh(d)
    }
    return Zz.v.w.call(this, a, b)
  };
  z.e.eh = function(a, b) {
    return Zz.v.eh.call(this, [this.createCaption(a, b), b.B("DIV", "goog-inline-block " + (this.V() + "-dropdown"), " ")], b)
  };
  z.e.createCaption = function(a, b) {
    return $z(a, this.V(), b)
  };
  z.e.V = function() {
    return "goog-menu-button"
  };
  z.y(z.aA, z.jq);
  z.e = z.aA.prototype;
  z.e.Tt = !1;
  z.e.Vi = !1;
  z.e.KX = !1;
  z.e.C = function() {
    z.aA.v.C.call(this);
    fA(this, !0);
    this.ha && eA(this, this.ha, !0);
    z.cj(this.h, "haspopup", !!this.ha)
  };
  z.e.Ab = function() {
    z.aA.v.Ab.call(this);
    fA(this, !1);
    if (this.ha) {
      this.Jb(!1);
      this.ha.Ab();
      eA(this, this.ha, !1);
      var a = this.ha.m();
      a && z.N(a)
    }
  };
  z.e.D = function() {
    z.aA.v.D.call(this);
    this.ha && (this.ha.dispose(), delete this.ha);
    delete this.vW;
    this.ka.dispose()
  };
  z.e.ue = function(a) {
    z.aA.v.ue.call(this, a);
    this.Dc() && (this.Jb(!this.Bb(), a), this.ha && (a = this.Bb(), this.ha.Mf = a))
  };
  z.e.Ef = function(a) {
    z.aA.v.Ef.call(this, a);
    this.ha && !this.Dc() && (this.ha.Mf = !1)
  };
  z.e.$d = function() {
    this.setActive(!1);
    return !0
  };
  z.e.tR = function(a) {
    this.ha && this.ha.W() && !this.dg(a.target) && this.Jb(!1)
  };
  z.e.dg = function(a) {
    return a && z.nf(this.m(), a) || this.ha && this.ha.dg(a) || !1
  };
  z.e.Df = function(a) {
    if (32 == a.keyCode) {
      if (a.preventDefault(), "keyup" != a.type) return !0
    } else if ("key" != a.type) return !1;
    if (this.ha && this.ha.W()) {
      var b = 13 == a.keyCode || 32 == a.keyCode,
        c = this.ha.fc(a);
      return 27 == a.keyCode || b ? (this.Jb(!1), !0) : c
    }
    return 40 == a.keyCode || 38 == a.keyCode || 32 == a.keyCode || 13 == a.keyCode ? (this.Jb(!0, a), !0) : !1
  };
  z.e.Qo = function() {
    this.Jb(!1)
  };
  z.e.dS = function() {
    this.Dc() || this.Jb(!1)
  };
  z.e.gd = function(a) {
    this.Tt || this.Jb(!1);
    z.aA.v.gd.call(this, a)
  };
  z.e.eb = function() {
    this.ha || this.Rh(new z.Uz(this.K(), this.sU));
    return this.ha || null
  };
  z.e.Rh = function(a) {
    var b = this.ha;
    if (a != b && (b && (this.Jb(!1), this.wa && eA(this, b, !1), delete this.ha), this.wa && z.cj(this.h, "haspopup", !!a), a)) {
      this.ha = a;
      z.$g(a, this);
      a.F(!1);
      var c = this.Tt;
      (a.Kn = c) && a.cf(!0);
      this.wa && eA(this, a, !0)
    }
    return b
  };
  z.e.Ha = function(a) {
    this.eb().L(a, !0)
  };
  z.e.yj = function(a, b) {
    this.eb().pl(a, b, !0)
  };
  z.e.removeItem = function(a) {
    (a = this.eb().removeChild(a, !0)) && a.dispose()
  };
  z.e.Fi = function(a) {
    return this.ha ? z.ch(this.ha, a) : null
  };
  z.e.gm = function() {
    return this.ha ? z.bh(this.ha) : 0
  };
  z.e.F = function(a, b) {
    var c = z.aA.v.F.call(this, a, b);
    c && !this.W() && this.Jb(!1);
    return c
  };
  z.e.bb = function(a) {
    z.aA.v.bb.call(this, a);
    this.isEnabled() || this.Jb(!1)
  };
  z.e.vL = function() {
    this.Jb(!0)
  };
  z.e.Jb = function(a, b) {
    z.aA.v.Jb.call(this, a);
    if (this.ha && !!(this.N & 64) == a) {
      if (a) {
        if (!this.ha.wa)
          if (this.Vi) {
            var c = So(this.m());
            c ? z.Sn(this.ha, c) : this.ha.render(this.m().parentNode)
          } else this.ha.render();
        this.EM = Ho(this.m());
        this.XE = Eo(this.m());
        dA(this);
        c = !!b && (13 == b.keyCode || 32 == b.keyCode);
        b && (40 == b.keyCode || 38 == b.keyCode) || c && this.KX ? z.ks(this.ha) : this.ha.Eb(-1)
      } else {
        this.setActive(!1);
        this.ha.Mf = !1;
        if (c = this.m()) z.cj(c, "activedescendant", ""), z.cj(c, "owns", "");
        null != this.Pu && (this.Pu = void 0, (c = this.ha.m()) &&
          z.Hg(c, "", ""))
      }
      this.ha.F(a, !1, b);
      if (!this.Rd) {
        var c = this.o(),
          d = a ? c.g : c.oa;
        d.call(c, this.K().ua(), "mousedown", this.tR, !0);
        this.Tt && d.call(c, this.ha, "blur", this.dS);
        d.call(c, this.ka, "tick", this.$p);
        a ? this.ka.start() : this.ka.stop()
      }
    }
    this.ha && this.ha.m() && this.ha.h.removeAttribute("aria-hidden")
  };
  z.e.$p = function() {
    var a = Eo(this.m()),
      b = Ho(this.m()),
      c = this.XE;
    (c = !(c == a || c && a && c.left == a.left && c.width == a.width && c.top == a.top && c.height == a.height)) || (c = this.EM, c = !(c == b || c && b && c.top == b.top && c.right == b.right && c.bottom == b.bottom && c.left == b.left));
    c && (this.XE = a, this.EM = b, dA(this))
  };
  z.e.uz = function(a) {
    (a = a.target.m()) && gA(this, a)
  };
  z.e.WR = function(a) {
    Xp(this, 32) && this.ec() && this.ha && this.ha.W() && a.stopPropagation()
  };
  z.e.Dz = function() {
    if (!js(this.ha)) {
      var a = this.m();
      z.cj(a, "activedescendant", "");
      z.cj(a, "owns", "")
    }
  };
  z.e.oz = function(a) {
    if (this.Bb() && a.target instanceof z.Pz) {
      a = a.target;
      var b = a.m();
      a.W() && a.N & 2 && null != b && gA(this, b)
    }
  };
  z.aq("goog-menu-button", function() {
    return new z.aA(null)
  });
  z.y(hA, Fx);
  hA.prototype.ga = function(a, b, c, d) {
    var f = Io(z.Ke(a)),
      g = this.wi.x + f.x,
      f = this.wi.y + f.y,
      h = Rs(a),
      g = g - h.x,
      f = f - h.y;
    Ts(new z.Ge(g, f), a, b, c, null, null, d)
  };
  z.y(iA, hA);
  iA.prototype.zp = 0;
  iA.prototype.an = function(a) {
    this.zp = a
  };
  iA.prototype.ga = function(a, b, c, d) {
    var f = $n(a),
      f = Ho(f),
      g;
    g = z.Ie(a);
    g = z.Se(g.Qa);
    g = new z.Ge(this.wi.x + g.scrollLeft, this.wi.y + g.scrollTop);
    var h = b,
      k = Ts(g, a, h, c, f, 10, d);
    if (0 != (k & 496)) {
      if (k & 16 || k & 32) h ^= 2;
      if (k & 64 || k & 128) h ^= 1;
      k = Ts(g, a, h, c, f, 10, d);
      0 != (k & 496) && Ts(g, a, b, c, f, this.zp, d)
    }
  };
  z.y(z.jA, z.Uz);
  z.e = z.jA.prototype;
  z.e.LY = !1;
  z.e.DI = 0;
  z.e.gg = null;
  z.e.T = function(a) {
    z.jA.v.T.call(this, a);
    (a = a.getAttribute("for") || a.htmlFor) && this.attach(this.K().m(a), 1)
  };
  z.e.C = function() {
    z.jA.v.C.call(this);
    this.Wf.forEach(this.EE, this);
    var a = this.o();
    a.g(this, "action", this.GU);
    a.g(this.K().ua(), "mousedown", this.JJ, !0);
    z.D && a.g(this.K().ua(), "contextmenu", this.JJ, !0)
  };
  z.e.attach = function(a, b, c, d, f) {
    a && this.Wf.eg(z.ta(a)) || (a ? (b = {
      h: a,
      LL: b,
      rU: c,
      Ay: d ? "contextmenu" : "mousedown",
      PA: f
    }, this.Wf.set(z.ta(a), b)) : b = null, this.wa && this.EE(b), a = z.Ba(this.jV, a), this.m() && this.o().g(this.m(), "keydown", a))
  };
  z.e.jV = function(a, b) {
    if (27 == b.keyCode) a.focus();
    else {
      var c = z.ch(this, this.Ya);
      if (c) {
        var c = c.m(),
          d = new z.Pc(b.nc, c);
        d.target = c;
        if (32 == b.keyCode || 13 == b.keyCode) z.Vc(c) ? z.sd(c, "keydown", !1, d) : z.pd(c, "keydown", !1, d);
        32 == b.keyCode && this.hide()
      }
    }
  };
  z.e.EE = function(a) {
    this.o().g(a.h, a.Ay, this.ZJ);
    "contextmenu" != a.Ay && this.o().g(a.h, "keydown", this.HV)
  };
  z.e.detach = function(a) {
    if (!a || !this.Wf.eg(z.ta(a))) throw Error("Menu not attached to provided element, unable to detach.");
    a = z.ta(a);
    if (this.wa) {
      var b = this.Wf.get(a);
      this.o().oa(b.h, b.Ay, this.ZJ)
    }
    this.Wf.remove(a)
  };
  z.e.vL = function(a, b, c) {
    b = z.ja(a.LL) ? new z.Gz(a.h, a.LL, !0) : new iA(b, c);
    b.an && b.an(5);
    z.kA(this, b, a.rU, a.PA, a.h)
  };
  z.e.hide = function() {
    this.W() && (this.F(!1), this.W() || (this.DI = (0, z.H)(), this.gg = null))
  };
  z.e.oI = function() {
    return this.W() || 150 > (0, z.H)() - this.DI
  };
  z.e.GU = function() {
    this.hide()
  };
  z.e.ZJ = function(a) {
    lA(this, a)
  };
  z.e.HV = function(a) {
    32 != a.keyCode && 13 != a.keyCode && 40 != a.keyCode || lA(this, a);
    40 == a.keyCode && z.ks(this)
  };
  z.e.JJ = function(a) {
    this.W() && !this.dg(a.target) && this.hide()
  };
  z.e.gd = function(a) {
    z.jA.v.gd.call(this, a);
    this.hide()
  };
  z.e.D = function() {
    z.jA.v.D.call(this);
    this.Wf && (this.Wf.clear(), delete this.Wf)
  };
  z.y(mA, Kz);
  z.ka(mA);
  mA.prototype.B = function(a) {
    var b = mA.v.B.call(this, a);
    z.hj(b, "goog-submenu");
    nA(this, a, b);
    return b
  };
  mA.prototype.w = function(a, b) {
    b = mA.v.w.call(this, a, b);
    z.hj(b, "goog-submenu");
    nA(this, a, b);
    var c = z.Me("DIV", "goog-menu", b);
    if (c.length) {
      var d = new z.Uz(a.K()),
        c = c[0];
      z.P(c, !1);
      a.K().ua().body.appendChild(c);
      d.w(c);
      a.Rh(d, !0)
    }
    return b
  };
  mA.prototype.ca = function(a, b) {
    var c = this.S(a),
      d = c && c.lastChild;
    mA.v.ca.call(this, a, b);
    d && c.lastChild != d && z.gj(d, "goog-submenu-arrow") && c.appendChild(d)
  };
  mA.prototype.Ue = function(a) {
    mA.v.Ue.call(this, a);
    var b = a.S(),
      c = a.K(),
      c = z.Ne(c.Qa, "SPAN", "goog-submenu-arrow", b)[0];
    oA(a, c);
    c != b.lastChild && b.appendChild(c);
    z.cj(a.m(), "haspopup", "true")
  };
  z.y(pA, z.Pz);
  var LD = 218;
  z.e = pA.prototype;
  z.e.ke = null;
  z.e.wC = null;
  z.e.SA = !1;
  z.e.vc = null;
  z.e.Ss = !1;
  z.e.Lr = !0;
  z.e.IT = !1;
  z.e.C = function() {
    pA.v.C.call(this);
    this.o().g(this.getParent(), "hide", this.TJ);
    this.vc && tA(this, this.vc, !0)
  };
  z.e.Ab = function() {
    this.o().oa(this.getParent(), "hide", this.TJ);
    this.vc && (tA(this, this.vc, !1), this.Ss || (this.vc.Ab(), z.N(this.vc.m())));
    pA.v.Ab.call(this)
  };
  z.e.D = function() {
    this.vc && !this.Ss && this.vc.dispose();
    this.vc = null;
    pA.v.D.call(this)
  };
  z.e.Uc = function(a, b) {
    pA.v.Uc.call(this, a);
    b && (this.eb().Mf = !0);
    a || (this.ke && z.wd(this.ke), this.ke = z.vd(this.gh, LD, this))
  };
  z.e.Dv = function() {
    var a = this.getParent();
    a && js(a) == this && (sA(this, !0), rA(this))
  };
  z.e.gh = function() {
    var a = this.vc;
    a && a.getParent() == this && (sA(this, !1), z.dh(a, function(a) {
      "function" == typeof a.gh && a.gh()
    }))
  };
  z.e.F = function(a, b) {
    var c = pA.v.F.call(this, a, b);
    c && !this.W() && this.gh();
    return c
  };
  z.e.fc = function(a) {
    var b = a.keyCode,
      c = this.Ed() ? 37 : 39,
      d = this.Ed() ? 39 : 37;
    if (!this.SA) {
      if (!this.isEnabled() || b != c && b != this.VA) return !1;
      this.Dv();
      z.ks(this.eb());
      qA(this)
    } else if (!this.eb().fc(a))
      if (b == d) this.gh();
      else return !1;
    a.preventDefault();
    return !0
  };
  z.e.UU = function() {
    this.vc.getParent() == this && (qA(this), this.Gi().Uc(this), rA(this))
  };
  z.e.TJ = function(a) {
    a.target == this.Gi() && (this.gh(), qA(this))
  };
  z.e.Bd = function(a) {
    this.isEnabled() && (qA(this), this.wC = z.vd(this.Dv, LD, this));
    pA.v.Bd.call(this, a)
  };
  z.e.$d = function(a) {
    qA(this);
    if (Xp(this, 8) || Xp(this, 16)) return pA.v.$d.call(this, a);
    this.Dv();
    return !0
  };
  z.e.Ha = function(a) {
    this.eb().L(a, !0)
  };
  z.e.yj = function(a, b) {
    this.eb().pl(a, b, !0)
  };
  z.e.removeItem = function(a) {
    (a = this.eb().removeChild(a, !0)) && a.dispose()
  };
  z.e.Fi = function(a) {
    return z.ch(this.eb(), a)
  };
  z.e.gm = function() {
    return z.bh(this.eb())
  };
  z.e.ib = function() {
    return this.eb().ib()
  };
  z.e.eb = function() {
    this.vc ? this.Ss && this.vc.getParent() != this && z.$g(this.vc, this) : this.Rh(new z.Uz(this.K()), !0);
    this.vc.m() || this.vc.B();
    return this.vc
  };
  z.e.Rh = function(a, b) {
    var c = this.vc;
    a != c && (c && (this.gh(), this.wa && tA(this, c, !1)), this.vc = a, this.Ss = !b, a && (z.$g(a, this), a.F(!1, !0), a.Kn = !1, a.cf(!1), this.wa && tA(this, a, !0)))
  };
  z.e.dg = function(a) {
    return this.eb().dg(a)
  };
  z.aq("goog-submenu", function() {
    return new pA(null)
  });
  z.y(z.uA, z.Wj);
  z.ka(z.uA);
  z.e = z.uA.prototype;
  z.e.B = function() {
    this.iQ = !0;
    this.h = z.M("div", null, [this.aU = z.M("div", null, [this.Ah = z.M("div", "zm-favo-list-content"), this.oE = z.M("div", "zh-favo-add-new-wrap zm-command", this.nY = z.M("a", {
      "class": "zm-favo-dialog-create zg-left",
      href: "javascript:;"
    }, "+ 创建收藏夹"), this.Jx = z.M("a", {
      href: "javascript:;",
      "class": "zg-btn-blue"
    }, "关闭")), this.Sw = z.M("div", "zh-favo-add-new-wrap zm-command", this.uP = z.M("a", {
      href: "javascript:;",
      "class": ""
    }, "取消"), this.oY = z.M("a", {
        "class": "zm-favo-dialog-create zg-btn-blue",
        href: "javascript:;"
      },
      "创建收藏夹"))]), this.Uy = z.M("div", {
      "class": "zh-favo-add-form",
      style: "display:none"
    }, [z.M("div", null, ["标题", this.VC = z.M("span", {
      "class": "zh-favo-add-title-error"
    }, "请填写标题")]), z.M("div", "zg-section", this.Oi = z.M("input", {
      "class": "zg-form-text-input"
    })), z.M("div", null, "描述（可选）"), z.M("div", {
      "class": "zg-section zg-form-text-input"
    }, this.xk = z.M("textarea", {
      "class": "zg-editor-input",
      style: "height:66px"
    })), this.MW = z.M("label", null, [this.rA = z.M("input", {
        type: "radio",
        checked: "checked",
        value: "public",
        name: "mode"
      }),
      z.M("strong", null, " 公开 "), z.M("span", "zg-gray-normal", "收藏夹关注者 \x3e 0 时不能设置为私密")
    ]), this.ST = z.M("br"), this.HW = z.M("label", null, [this.sI = z.M("input", {
      type: "radio",
      value: "private",
      name: "mode"
    }), z.M("strong", null, " 私密 "), z.M("span", "zg-gray-normal", "只有你可以查看这个收藏夹")]), z.M("div", "zm-command", [this.xy = z.M("label", {
        href: "javascript:;",
        "class": "zh-favo-error-message-label zg-left"
      }, ""), this.IC = z.M("a", {
        href: "javascript:;",
        "class": "zg-mr10"
      }, "取消"), this.gs = z.M("a", {
        href: "javascript:;",
        "class": "zg-mr10"
      }, "完成"),
      this.Qw = z.M("a", {
        "class": "zg-btn-blue"
      }, "确认创建")
    ])])]);
    z.P(this.VC, !1);
    z.P(this.Sw, !1);
    (new z.rt(this.XC)).w(this.Oi);
    (new z.rt(this.iy)).w(this.xk);
    z.A(this.GA, function(a) {
      wA(this, a)
    }, this);
    this.GA.length || (this.Ah.innerHTML = '\x3cdiv id\x3d"zh-fav-list-item-place-holder" class\x3d"zg-r5px zm-fav-list-item-place-holder"\x3e你可以创建多个收藏夹，将答案分类收藏\x3c/div\x3e ', z.P(this.Sw, !0), z.P(this.oE, !1));
    vA(this);
    this.sa.S().innerHTML = "";
    this.sa.S().appendChild(this.h);
    this.sa.ga()
  };
  z.e.dc = function() {
    this.$O || (this.$O = !0, this.o().g(this.IC, "click", function() {
      this.cb ? BA(this, 0) : EA(this);
      IA("click_add_collection_cancel")
    }).g(this.nY, "click", function() {
      z.W.yb({
        type: "ga_click_add_collection"
      });
      BA(this, 1);
      z.Ci("collect", "click_add_collection_start", "collect_answer_box")
    }).g(this.Jx, "click", function() {
      IA("click_add_collection_close");
      EA(this)
    }).g(this.oY, "click", function() {
      z.W.yb({
        type: "ga_click_add_collection"
      });
      BA(this, 1)
    }).g(this.uP, "click", function() {
      EA(this)
    }).g(this.gs, "click",
      function() {
        EA(this)
      }).g(this.Qw, "click", function() {
      var a = this.xk.value,
        b = this.Oi.value;
      a && IA("click_add_collection_discription", a);
      b && IA("click_add_collection_title", b);
      this.Fh()
    }).g(this.Ah, "click", this.BV).g(this.Oi, "change", function() {
      z.P(this.VC, !1)
    }).g(this.rA, "click", function() {
      IA("click_add_collection_public")
    }).g(this.sI, "click", function() {
      IA("click_add_collection_private")
    }))
  };
  z.e.BV = function(a) {
    var b = z.vf(a.target, "A");
    if (b && !this.locked) {
      a = b.getAttribute("data-lid");
      var c = !1;
      z.U.has(b, "zm-favo-list-item-link-active") ? (c = !0, this.JF = a) : this.GF = a;
      b = new z.Nr;
      b.add("answer_id", this.cb);
      b.add("favlist_id", a);
      this.fC = new z.wp(!0);
      this.locked = !0;
      this.o().xa(this.fC, "complete", this.rO);
      this.fC.ajax(c ? "/collection/remove" : "/collection/add", b.Vd())
    }
  };
  z.e.rO = function() {
    this.locked = !1;
    this.Jx.innerHTML = "关闭";
    var a = z.Wn(this.fC);
    a && !a.r ? (a = z.Uo("zm-favo-list-item-link", this.Ah), z.A(a, function(a) {
      var c = a.getAttribute("data-lid"),
        d = z.L("num", a),
        f = (0, window.parseInt)(d.innerHTML, 10);
      c === this.JF ? (d.innerHTML = f - 1 + "", z.U.remove(a, "zm-favo-list-item-link-active")) : c === this.GF && (d.innerHTML = f + 1 + "", z.U.add(a, "zm-favo-list-item-link-active"))
    }, this), this.GF = this.JF = null, Pr("Favorite", "add_favorite")) : z.V.message("添加失败: " + a.msg)
  };
  z.e.Lk = function() {
    this.dc();
    this.Jx.innerHTML = "关闭";
    this.cb ? (z.P(this.gs, !1), BA(this, 0)) : (BA(this, 1), z.P(this.IC, !1), this.gs.innerHTML = "取消")
  };
  z.e.show = function(a) {
    a ? (AA(this), this.sa.F(!0), this.Lk()) : (vA(this, "添加到收藏夹", '\x3cdiv style\x3d"text-align: center; color: #999;"\x3e收藏夹加载中\x3ci class\x3d"spinner-gray"\x3e\x3c/i\x3e\x3c/div\x3e'), this.sa.F(!0), this.gt())
  };
  z.e.gt = function() {
    this.cb && window.$.get("/collections/json", {
      answer_id: this.cb
    }).done((0, z.t)(this.lV, this))
  };
  z.e.lV = function(a) {
    a && !a.r && (this.GA = a.msg[0], this.ju = a.msg[1], AA(this), this.Lk())
  };
  z.e.Fh = function() {
    if (!this.xhr || !this.xhr.Dc()) {
      (0, window.$)(this.xy).text("").hide();
      var a = z.Ar(this.Oi.value);
      if (a && a !== this.XC) {
        a = CA(this);
        this.cb && a.add("answer_id", this.cb);
        if (this.Am) {
          if (this.gT.Vd() === a.Vd()) {
            EA(this);
            return
          }
          a.add("favlist_id", this.Zx[0])
        }
        this.xhr = new z.wp(!0);
        GA(this, this.xhr, this.Qw, this.Am);
        this.o().xa(this.xhr, "complete", this.jO);
        this.xhr.ajax(this.Am ? "/collection/update" : "/collection/create", a.Vd())
      } else z.P(this.VC, !0)
    }
  };
  z.e.jO = function() {
    var a = z.Wn(this.xhr);
    a && !a.r ? this.Am ? (EA(this), z.V.message("编辑成功"), (0, window.setTimeout)(function() {
      window.location.reload()
    }, 1E3), this.Am = !1) : this.cb ? (z.P(this.Sw, !1), z.P(this.oE, !0), BA(this, 0), this.ju.push(a.msg[0]), wA(this, a.msg, !0), this.Oi.value = "", this.xk.value = "") : (EA(this), z.V.message("创建成功"), (0, window.setTimeout)(function() {
      window.location.href = "/collections/mine"
    }, 1E3)) : HA(this.xy, this.Am, a.msg)
  };
  z.e.W = function() {
    return this.sa.W()
  };
  var FA = "close";
  z.uA.prototype.kh = function() {
    (0, window.$)(window).on("beforeunload.FavoDiag", (0, z.t)(function() {
      return "你对收藏夹的修改还未保存，确认离开该页面吗？"
    }, this))
  };
  z.uA.prototype.yi = function() {
    (0, window.$)(window).off("beforeunload.FavoDiag")
  };
  z.y(z.JA, z.Pz);
  z.aq("goog-checkbox-menuitem", function() {
    return new z.JA(null)
  });
  z.n(KA, z.Q);
  KA.prototype.T = function(a) {
    z.Q.prototype.T.call(this, a);
    var b = (0, window.$)(a).data(),
      c = new z.Uz;
    LA(this, c, b.copyable);
    c.Ha(new z.Tz);
    NA(this, c);
    c.Ha(new z.Tz);
    c.Ha(new z.Pz("删除"));
    this.o().g(c, "action", this.Az).xa(c, "show", this.CQ);
    z.U.add(c.m(), "zg-gray-normal");
    (0, window.$)(c.m()).addClass("setting-menu");
    b = new z.aA("comment", c);
    b.Vi = !0;
    z.cA(b);
    bA(b);
    b.Ob = z.Gl;
    b.w(a);
    this.ha = c
  };
  KA.prototype.CQ = function() {
    var a = this;
    window.$.get("/answer/comment_permission", {
      answer_id: this.ii.zb
    }).then(function(b) {
      if (b && !b.r) {
        var c = b.msg;
        a.EB.forEach(function(a) {
          a.X() === c && a.tc(!0)
        });
        a.Il = c
      } else z.V.message(b.msg)
    })
  };
  KA.prototype.mC = function(a) {
    FD.mC(this.ii.zb, a);
    (0, window.$)(".copyright", oD(this.ii)).text(VG[a]).attr("href", WG[a] || "#")
  };
  KA.prototype.Az = function(a) {
    var b = a.target,
      c = b.X();
    if (c in MA) z.Y.mA || "2" !== c ? (this.mC(c), this.AF.forEach(function(a) {
      a.tc(a === b)
    })) : (window.open("/copyright/invite", "copyright_invite"), window.setTimeout(function() {
      return b.tc(!1)
    }, 100));
    else if ("删除" === c) PA(this);
    else if (c in OA)
      if (this.Il === c) QA(this);
      else if ("review_comment" === this.Il) {
      var d = this;
      a = void 0;
      var f;
      "all_can_comment" === c ? (a = "确认开放评论吗？", f = "开放评论后，评论提交即公开显示。\x3cbr/\x3e当前所有待审核评论不会公开，为您自动保存，若切换回预审评论可以继续审核。") : "nobody_can_comment" === c && (a = "确认关闭评论吗？",
        f = "关闭评论后，所有人无法提交评论。\x3cbr/\x3e当前所有待审核评论不会公开，为您自动保存，若切换回预审评论可以继续审核。");
      z.V.confirm(a, f, function(a) {
        a && RA(d, c)
      });
      QA(this)
    } else RA(this, c)
  };
  var MA = {
      0: "禁止转载",
      1: "允许规范转载",
      2: "允许付费转载"
    },
    VG = {
      0: "禁止转载",
      1: "允许规范转载",
      2: "允许付费转载"
    },
    WG = {
      0: "/terms#sec-licence-6",
      1: "/terms#sec-licence-1"
    },
    OA = z.Y.Qc ? {
      all_can_comment: "开放评论",
      review_comment: "预审评论",
      nobody_can_comment: "关闭评论"
    } : {
      all_can_comment: "允许任何人评论",
      followee_can_comment: "允许我关注的人评论",
      nobody_can_comment: "关闭评论"
    },
    SA = "set_permission";
  var XG = /a(:(link|visited|active|hover))?/;
  VA.prototype.clone = function() {
    var a = new VA;
    a.Ph = this.Ph.concat();
    a.ro = this.ro;
    return a
  };
  var YG = /(^|;|{)\s*color:([^;]+);/g,
    ZA = {},
    bB = {},
    ZG = {},
    $G = "color visibility quotes list-style-type list-style-image list-style-position list-style page-break-inside orphans widows font-family font-style font-variant font-weight text-indent text-align text-transform white-space caption-side border-collapse border-spacing empty-cells cursor".split(" "),
    aH = "font-family font-size font-weight font-variant font-style color text-align text-decoration text-indent text-transform letter-spacing white-space word-spacing".split(" ");
  var bH;
  z.y(z.cB, z.G);
  z.e = z.cB.prototype;
  z.e.G = null;
  z.e.PO = !0;
  z.e.oM = function() {
    this.G && (this.disable(this.G), this.G = null)
  };
  z.e.enable = function(a) {
    this.G == a && (this.lc = !0)
  };
  z.e.disable = function(a) {
    this.G == a && (this.lc = !1)
  };
  z.e.isEnabled = function(a) {
    return this.G == a ? this.lc : !1
  };
  z.e.Fr = z.Fl;
  z.e.vI = z.Fl;
  z.e.D = function() {
    this.G && this.oM(this.G);
    z.cB.v.D.call(this)
  };
  z.kB = z.dp({
    wz: 1,
    XR: 2,
    qt: 3,
    hk: 4,
    rt: 5,
    execCommand: 6,
    queryCommandValue: 7,
    qK: 8,
    pP: 10,
    oP: 11
  });
  bH = {
    8: !0,
    10: !0,
    11: !0
  };
  z.cB.prototype.execCommand = function(a, b) {
    var c = this.vI(a);
    c || (z.B && z.HB(this.G, !0, !0), this.G.zi());
    try {
      var d = this.wf.apply(this, arguments)
    } finally {
      c || (this.G.uf(), z.GB(this.G))
    }
    return d
  };
  z.cB.prototype.Xe = function() {
    return !1
  };
  var lB, oB;
  z.y(jB, z.G);
  jB.prototype.Ka = null;
  jB.prototype.Sc = null;
  lB = "change";
  z.mB = "delayedchange";
  oB = {
    MZ: "cvc",
    f_: "load",
    A_: "unload",
    EZ: "beforechange",
    KZ: lB,
    OZ: z.mB,
    FZ: "beforefocus",
    RZ: "focus",
    IZ: "blur",
    HZ: "beforetab",
    YZ: "ifrsz",
    GZ: "beforeselectionchange",
    o_: "selectionchange"
  };
  z.qB = 0;
  z.cH = null;
  z.e = jB.prototype;
  z.e.th = !1;
  z.e.zM = !1;
  z.e.ew = !1;
  z.e.m = function() {
    return this.Ka
  };
  z.e.addListener = function(a, b, c, d) {
    var f = this.m();
    xG && f && this.wc() && (f = f.ownerDocument);
    d ? z.yd(this.mc, f, a, b, c, d) : this.mc.g(f, a, b, c)
  };
  var pB = 15,
    nB = 250;
  jB.prototype.wc = z.Gl;
  jB.prototype.tp = z.Gl;
  jB.prototype.sL = z.Fl;
  var tB = {
    46: !0,
    8: !0
  };
  z.C || (tB[9] = !0);
  var uB = {
    86: !0,
    88: !0
  };
  z.ml && !z.B && (tB[229] = !0);
  jB.prototype.Ix = function() {
    this.mc && this.mc.removeAll();
    if ((z.Ui || z.Uj) && this.wc() && this.sL()) {
      try {
        var a = this.ob.ab();
        a.removeEventListener("keydown", this.Tn, !1);
        a.removeEventListener("touchend", this.Tn, !1)
      } catch (b) {}
      delete this.Tn
    }
    if (z.wg && this.wc()) {
      try {
        a = this.ob.ab(), a.removeEventListener("focus", this.tx, !1), a.removeEventListener("blur", this.sx, !1)
      } catch (b) {}
      delete this.tx;
      delete this.sx
    }
    this.Ne && this.Ne.stop();
    this.Bs.stop()
  };
  jB.prototype.D = function() {
    this.vp() || this.Ec();
    this.Sc && this.execCommand("clearlorem");
    this.Em = z.qB;
    for (var a in this.Xb) {
      var b = this.Xb[a];
      b.Fr() || b.disable(this)
    }
    this.ob = this.Ka = null;
    this.Ix();
    this.Yl && (z.nd(this.Yl), this.Yl = null);
    this.Om = null;
    this.mc && (this.mc.dispose(), this.mc = null);
    for (; a = this.zZ.pop();) a.dispose();
    z.cH == this.id && (z.cH = null);
    for (var c in this.Xb) a = this.Xb[c], a.PO && a.dispose();
    delete this.Xb;
    jB.v.D.call(this)
  };
  var dH = ["DOMNodeInserted", "DOMNodeRemoved", "DOMNodeRemovedFromDocument", "DOMNodeInsertedIntoDocument", "DOMCharacterDataModified"];
  jB.prototype.sC = function() {
    if (uG || !this.wc()) this.mc.g(this.m(), "DOMSubtreeModified", this.xz);
    else {
      var a = this.ob.ua();
      this.mc.g(a, dH, this.xz, !0);
      this.mc.g(a, "DOMAttrModified", (0, z.t)(this.fH, this, this.xz), !0)
    }
  };
  var AB = {
      8: 1,
      9: 1,
      13: 1,
      33: 1,
      34: 1,
      35: 1,
      36: 1,
      37: 1,
      38: 1,
      39: 1,
      40: 1,
      46: 1
    },
    BB = {
      65: !0,
      86: !0,
      88: !0
    },
    DB = {
      8: 1,
      9: 1,
      13: 1,
      27: 1,
      33: 1,
      34: 1,
      37: 1,
      38: 1,
      39: 1,
      40: 1
    };
  z.e = jB.prototype;
  z.e.kp = function(a, b) {
    for (var c = this.nk[a], d = z.yb(arguments, 1), f = 0; f < c.length; ++f) {
      var g = c[f];
      if ((g.isEnabled(this) || bH[a]) && g[z.kB[a]].apply(g, d)) return !0
    }
    return !1
  };
  z.e.wT = function(a, b) {
    for (var c = this.nk[a], d = z.yb(arguments, 1), f = 0; f < c.length; ++f) {
      var g = c[f];
      (g.isEnabled(this) || bH[a]) && g[z.kB[a]].apply(g, d)
    }
  };
  z.e.ev = function(a, b, c) {
    for (var d = this.nk[a], f = z.yb(arguments, 1), g = 0; g < d.length; ++g) {
      var h = d[g];
      if (h.isEnabled(this) || bH[a]) f[0] = h[z.kB[a]].apply(h, f)
    }
    return f[0]
  };
  z.e.Cf = function(a) {
    z.Uc && 65 == a.keyCode && yB(this, a);
    (z.B || wB(this, a)) && !this.kp(1, a) && DG && CB(this, a)
  };
  z.e.YR = function(a) {
    if (z.B) {
      if (!wB(this, a)) return
    } else this.kz = !0, this.zi();
    this.kp(2, a) || DG || CB(this, a)
  };
  z.e.ZR = function(a) {
    z.B || !this.kz && !sB(a) || this.dk();
    this.kp(3, a);
    yB(this, a)
  };
  z.e.execCommand = function(a, b) {
    for (var c = arguments, d, f = this.nk[6], g = 0; g < f.length; ++g) {
      var h = f[g];
      if (h.isEnabled(this) && h.Xe(a)) {
        d = h.execCommand.apply(h, c);
        break
      }
    }
    return d
  };
  z.e.queryCommandValue = function(a) {
    var b = this.Ec() && this.Jf;
    if (z.oa(a)) return this.$u(a, b);
    for (var c = {}, d = 0; d < a.length; d++) c[a[d]] = this.$u(a[d], b);
    return c
  };
  z.e.$u = function(a, b) {
    for (var c = this.nk[7], d = 0; d < c.length; ++d) {
      var f = c[d];
      if (f.isEnabled(this) && f.Xe(a) && (b || f.Fr())) return f.queryCommandValue(a)
    }
    return b ? null : !1
  };
  z.e.fH = function(a, b) {
    if (!zB(this, lB)) {
      var c = b.nc;
      try {
        if (c.originalTarget.prefix || "scrollbar" == c.originalTarget.nodeName) return
      } catch (d) {
        return
      }
      c.prevValue != c.newValue && a.call(this, c)
    }
  };
  z.e.xz = function(a) {
    zB(this, lB) || (a = a.MG ? a.nc : a, a.target.firebugIgnore || this.Ne.start())
  };
  z.e.ot = function() {
    z.C && this.execCommand("clearlorem", !0);
    z.B && this.ly();
    this.uf()
  };
  z.e.sS = function() {
    var a = this.gL;
    this.gL = null;
    z.GB(this, void 0, a)
  };
  z.e.zi = function() {
    zB(this, "beforechange") || this.dispatchEvent("beforechange")
  };
  z.e.uf = function(a) {
    JB(this, !0, a)
  };
  z.e.dk = function() {
    zB(this, lB) || (this.Ne && this.Ne.stop(), zB(this, z.mB) || this.Bs.start())
  };
  z.e.$F = function() {
    zB(this, z.mB) || (this.Bs.stop(), this.dispatchEvent(z.mB))
  };
  z.e.ly = function() {
    this.ZF();
    this.aG()
  };
  z.e.ZF = function() {
    zB(this, "beforefocus") || (this.execCommand("clearlorem", !0), this.dispatchEvent("beforefocus"))
  };
  z.e.aG = function() {
    if (!zB(this, "focus")) {
      z.cH = this.id;
      this.Jf = !0;
      this.dispatchEvent("focus");
      if (z.B) {
        var a = this.m(),
          b = z.FB(this);
        if (b) {
          var c = z.au(b);
          0 != z.bu(b) || c && c != a && "BODY" != c.tagName || z.jv(a)
        }
      }!vG && this.wc() && this.ob.ab().parent.getSelection().removeAllRanges()
    }
  };
  z.e.Es = function() {
    zB(this, "blur") || (z.cH == this.id && (z.cH = null), this.Jf = !1, this.dispatchEvent("blur"))
  };
  z.e.lm = function(a) {
    z.cH = this.id;
    if (z.C) {
      var b = a.target;
      b && "A" == b.tagName && a.ctrlKey && this.Om.ab().open(b.href)
    }
    this.ew = !0
  };
  z.e.pz = function() {
    this.ew = !1
  };
  z.e.tt = function(a) {
    if (!this.zM || this.ew) this.ew = !1, this.dispatchEvent("beforeselectionchange"), z.GB(this, a), z.C && (this.gL = a.target, this.hL.start())
  };
  z.e.dm = function() {
    if (this.queryCommandValue("usinglorem")) return " ";
    if (!this.Ec()) return this.Sc.innerHTML;
    var a = this.m(),
      b = a.cloneNode(!1),
      a = a.innerHTML;
    z.C && a.match(/^\s*<script/i) && (a = " " + a);
    b.innerHTML = a;
    this.wT(11, b);
    return this.ev(10, b.innerHTML)
  };
  z.e.be = function(a, b, c, d) {
    if (!this.vp()) {
      d && this.execCommand("clearlorem");
      b && a && (b = "\x3cp\x3e" + b + "\x3c/p\x3e");
      c && z.HB(this, !1, !0);
      a = b;
      if (b = this.m()) {
        if (this.wc() && z.D)
          for (var f = b.ownerDocument.getElementsByTagName("HEAD"), g = f.length - 1; 1 <= g; --g) f[g].parentNode.removeChild(f[g])
      } else b = this.Sc;
      b && xB(this, a, b);
      d && this.execCommand("updatelorem");
      this.Ec() && (c ? (z.B && Vq(this.Ne), JB(this)) : this.uf())
    }
  };
  z.e.cD = function() {
    var a = this.ob.ua();
    a.designMode = "on";
    z.AG && a.execCommand("styleWithCSS", !1, !1)
  };
  z.e.cI = function() {
    this.Ll && MB(this) && z.Ng(this.Ll, this.m())
  };
  z.e.Ec = function() {
    return 2 == this.Em
  };
  z.e.vp = function() {
    return 1 == this.Em
  };
  z.e.focus = function() {
    if (!z.iB && this.wc()) this.ob.ab().focus();
    else {
      if (z.wg) var a = this.sl.pageXOffset,
        b = this.sl.pageYOffset;
      this.m().focus();
      z.wg && this.sl.scrollTo(a, b)
    }
  };
  z.e.ng = function() {
    !z.sG && z.B || z.LB(this);
    this.focus()
  };
  z.e.we = function(a) {
    this.Em = 1;
    var b = this.Sc;
    this.nodeName = b.nodeName;
    this.cssText = b.style.cssText;
    z.hj(b, "editable");
    this.NA(a)
  };
  z.e.NA = function(a) {
    var b = this.Sc;
    if (b) {
      var b = b.innerHTML,
        c = {},
        b = this.ev(8, b, c),
        d = this.Om.B("IFRAME", this.UG());
      if (MB(this)) {
        var f = (0, z.t)(this.MH, this, d, b, c);
        this.Yl = z.F(d, "load", f, !0);
        a && (d.src = a)
      }
      this.FE(d);
      MB(this) || this.MH(d, b, c)
    }
  };
  z.e.pt = function() {
    z.C && Vu(this.ob.ab());
    z.cH != this.id && this.execCommand("updatelorem");
    if ((z.Ui || z.Uj) && this.wc() && this.sL()) {
      var a = this.ob.ab();
      this.Tn = (0, z.t)(a.focus, a);
      a.addEventListener("keydown", this.Tn, !1);
      a.addEventListener("touchend", this.Tn, !1)
    }
    z.wg && this.wc() ? (this.tx = (0, z.t)(this.ly, this), this.sx = (0, z.t)(this.Es, this), a = this.ob.ab(), a.addEventListener("focus", this.tx, !1), a.addEventListener("blur", this.sx, !1)) : (CG ? (this.addListener("focus", this.aG), this.addListener(z.Pl, this.ZF)) : this.addListener("focus",
      this.ly), this.addListener("blur", this.Es, z.B));
    z.B ? this.sC() : (this.addListener(["beforecut", "beforepaste", "drop", "dragend"], this.zi), this.addListener(["cut", "paste"], mp(this.uf)), this.addListener("drop", this.ot));
    this.addListener(z.D ? "dragend" : "dragdrop", this.ot);
    this.addListener("keydown", this.Cf);
    this.addListener("keypress", this.YR);
    this.addListener("keyup", this.ZR);
    this.hL = new Uq(this.sS, 250, this);
    this.LQ && this.addListener("click", KB);
    this.addListener("mousedown", this.lm);
    this.zM ? (this.mc.g(this.ob.ua(),
      "mouseup", this.tt), this.addListener("dragstart", this.pz)) : this.addListener("mouseup", this.tt);
    this.cI();
    JB(this);
    this.dispatchEvent("load");
    for (var b in this.Xb) this.Xb[b].enable(this)
  };
  z.e.FE = function(a) {
    var b = this.Sc;
    a.className = b.className;
    a.id = b.id;
    z.To(a, b)
  };
  z.e.az = function(a) {
    var b = Vn(z.Ie(this.Sc));
    return new fB(this.id, b, !1, !1, a)
  };
  z.e.RM = function(a, b, c) {
    c = this.az(c);
    MB(this) ? (a = (a.contentDocument || a.contentWindow.document).body, z.iB && (a.contentEditable = !0), a.className = "editable", a.setAttribute("g_editable", !0), a.hideFocus = !0, a.id = c.wG, z.tg(a, c.Hy), a.innerHTML = b) : hB(c, b, new gB(this.m(), this.Ll), a)
  };
  z.e.MH = function(a, b, c) {
    this.Yl && (z.nd(this.Yl), this.Yl = null);
    a.allowTransparency = "true";
    this.RM(a, b, c);
    vB(this, (a.contentDocument || a.contentWindow.document).body);
    !z.iB && this.wc() && this.cD();
    this.pt()
  };
  z.e.UG = function() {
    var a = "padding:0;" + this.Sc.style.cssText;
    z.up(a, ";") || (a += ";");
    a += "background-color:white;";
    z.C && (a += "overflow:visible;");
    return {
      frameBorder: 0,
      style: a
    }
  };
  var eH;
  z.y(z.NB, jB);
  z.e = z.NB.prototype;
  z.e.iI = !1;
  z.e.FT = !1;
  z.e.tp = function() {
    return this.iI
  };
  z.e.oH = function() {
    zB(this, lB) || OB(this)
  };
  z.e.AC = function() {
    if (this.Jq ? 0 : this.Jq = !0) {
      var a = !1,
        b = EB(this);
      if (b) {
        var c, d = EB(this),
          f = d.contentDocument.body;
        c = f.parentNode;
        0 === (0, window.parseInt)(Jo(d, "height"), 10) && z.tg(d, "height", "1px");
        Vn(z.Ie(f)) ? d = c.offsetHeight : (d = c.scrollHeight, c.clientHeight != c.offsetHeight && (d += eH || (eH = z.Wg())));
        c = d;
        this.vU && (c = Math.max(c, this.vU));
        (0, window.parseInt)(Jo(b, "height"), 10) != c && (b.style.height = c + "px", a = !0)
      }
      this.Jq = !1;
      a && this.dispatchEvent("ifrsz")
    }
  };
  z.e.Kz = "";
  var fH = !1;
  z.e = z.NB.prototype;
  z.e.wc = function() {
    return !z.iB
  };
  z.e.sC = function() {
    z.NB.v.sC.call(this);
    if (this.wc()) {
      var a = EB(this).ownerDocument;
      this.mc.g(a, dH, this.oH, !0);
      this.bU = z.ld(this.ob.ab(), "load", this.AC, !0, this);
      this.mc.g(a, "DOMAttrModified", (0, z.t)(this.fH, this, this.oH), !0)
    }
  };
  z.e.dk = function() {
    zB(this, lB) || (z.NB.v.dk.call(this), this.wc() && this.AC())
  };
  z.e.Es = function() {
    if (!zB(this, "blur") && (z.NB.v.Es.call(this), !z.iB && !vG)) {
      var a = this.ob.ab(),
        b = !1;
      z.nd(this.NI);
      this.NI = z.ld(a.document.body, "dragover", function() {
        b = !0
      });
      z.u.setTimeout((0, z.t)(function() {
        if (!b && this.ob) {
          var a = z.FB(this),
            d = this.ob.ab();
          Vu(d);
          a && (a.collapse(!0), a.select())
        }
      }, this), 0)
    }
  };
  z.e.cD = function() {
    z.NB.v.cD.call(this);
    var a = this.ob.ua();
    a.execCommand("enableInlineTableEditing", !1, "false");
    a.execCommand("enableObjectResizing", !1, "false")
  };
  z.e.cI = function() {
    this.wc() || fH || (this.Ll && z.Ng(this.Ll, this.m()), fH = !0)
  };
  z.e.NA = function(a) {
    if (this.wc()) z.NB.v.NA.call(this, a);
    else if (a = this.Sc) vB(this, a), a.contentEditable = !0, xB(this, a.innerHTML, a), this.pt()
  };
  z.e.pt = function() {
    if (this.wc()) {
      var a = this;
      z.u.setTimeout(function() {
        PB(a)
      }, 0)
    }
    z.NB.v.pt.call(this)
  };
  z.e.UG = function() {
    return {
      frameBorder: 0,
      style: "padding:0;"
    }
  };
  z.e.FE = function(a) {
    if (!this.FT) {
      var b = this.Sc;
      b && (this.iI = "auto" == z.zg(b, "overflowY"))
    }
    var b = this.Sc,
      c = z.Ie(b),
      d = b.style.width,
      f = b.style.height;
    z.tg(b, "visibility", "hidden");
    var c = c.B("DIV", {
        style: "height:0;clear:both",
        innerHTML: "\x26nbsp;"
      }),
      g = c.cloneNode(!0);
    b.insertBefore(c, b.firstChild);
    b.appendChild(g);
    g = z.Ke(b);
    if ((c = z.C && b.currentStyle) && Vn(z.Ie(g)) && "auto" != c.width && "auto" != c.height && !c.boxSizing) g = z.Pg(b, c.width, "width", "pixelWidth"), c = z.Pg(b, c.height, "height", "pixelHeight"), g = new z.He(g,
      c);
    else var c = z.ko(b),
      g = z.Rg(b),
      h = z.Ug(b),
      g = new z.He(c.width - h.left - g.left - g.right - h.right, c.height - h.top - g.top - g.bottom - h.bottom);
    c = g.width;
    g = g.height;
    h = "";
    this.tp() && (h = "\x26nbsp;", z.tg(b, "position", "relative"), z.tg(b, "overflow", "visible"), z.tg(a, "position", "absolute"), z.tg(a, "top", "0"), z.tg(a, "left", "0"));
    z.Hg(b, c, g);
    Vn(z.Ie(b)) && z.tg(b, "lineHeight", "0");
    z.fv(b, h);
    z.Hg(a, c, g);
    z.Hg(b, d, f);
    z.tg(b, "visibility", "");
    b.appendChild(a);
    MB(this) || (b = a.contentWindow.document, Vn(z.Ie(a.ownerDocument)) && (b.open(),
      a = z.Gd("\x3c!DOCTYPE HTML\x3e\x3chtml\x3e\x3c/html\x3e", null), b.write(z.Fd(a)), b.close()))
  };
  z.e.az = function(a) {
    var b = this.Sc;
    if (b) return new fB(this.id, Vn(z.Ie(b)), !0, this.tp(), a);
    throw Error("no field");
  };
  z.e.RM = function(a, b, c) {
    z.tg(a, "visibility", "hidden");
    c = this.az(c);
    var d = this.Sc,
      f = this.Ll;
    if (!this.Kz) {
      var g = this.Sc;
      if (g) {
        var h = g.ownerDocument,
          k = z.ta(h);
        if (!ZG[k]) {
          for (var l = z.ta(h), p = [], h = UA(h.styleSheets), q = 0, v; v = h[q]; q++)
            if ((v = TA(v)) && v.length)
              for (var I = 0, K = v.length; I < K; I++) {
                var O = new VA,
                  ba;
                ba = O;
                var Ua = v[I],
                  Sa = Ua.style;
                if (Sa) {
                  var ya = void 0,
                    ua = "";
                  Sa && (ya = Ua.selectorText) && (ua = Sa.cssText) ? z.C && (ua += "/* */") : Ua.cssText && (ua = /([^\{]+)\{/, ya = ua.exec(Ua.cssText)[1], ua = Ua.cssText.replace(ua, "").replace(/\}[^\}]*$/g,
                    ""));
                  if (ya) {
                    Ua = ba;
                    Ua.Ph = [];
                    ya = ya.split(/,\s*/gm);
                    for (Sa = 0; Sa < ya.length; Sa++) {
                      var Jd = ya[Sa];
                      0 < Jd.length && Ua.Ph.push(new XA(Jd))
                    }
                    ba.ro = ua;
                    ba = !0
                  } else ba = !1
                } else ba = !1;
                ba && p.push(O)
              }
            ZG[l] = p
        }
        l = ZG[k];
        k = [];
        for (p = 0; p < l.length; p++) k.push(l[p].clone());
        h = new aB(g);
        q = new YA("body");
        for (l = 0; l < k.length; l++)
          for (v = k[l].Ph, p = v.length, I = 0; I < p; I++) {
            K = v[I];
            O = K;
            ba = h.uid;
            if (O.ax[ba]) ba = O.ax[ba];
            else {
              for (var ua = 0, Sa = ya = Ua = null, Jd = h.zJ, ui = Jd.length, se = 0; se <= O.Ti.length; se++) {
                for (ya = O.Ti[se]; ua < ui;) {
                  var Td = Jd[ua];
                  if (ya &&
                    $A(ya, Td)) {
                    Ua = {
                      iG: ua,
                      iL: se
                    };
                    ua++;
                    break
                  } else Sa && $A(Sa, Td) && (Ua = {
                    iG: ua,
                    iL: se - 1
                  });
                  ua++
                }
                Sa = ya
              }
              ba = O.ax[ba] = Ua
            }
            ba && (O = ba.iL, K = K.Ti, ua = K.length - 1, ba.iG == h.zJ.length - 1 || O < ua ? (K = K.concat(), K.splice(0, O + 1, q), O = new XA, O.Ti = K, v.push(O)) : 0 < O && O == ua && (O = new XA, O.Ti = [q, K[ua]], v.push(O)))
          }
        h = new VA;
        g = g.currentStyle || z.Ke(g).defaultView.getComputedStyle(g, "") || {};
        l = new XA;
        l.Ti = [new YA("html")];
        h.Ph = [l];
        q = {};
        for (l = 0; p = $G[l]; l++) q[p] = g[z.cb(p)];
        WA(h, q);
        k.push(h);
        h = new VA;
        q = new XA;
        q.Ti = [new YA("body")];
        v = {
          position: "relative",
          top: "0",
          left: "0",
          right: "auto",
          display: "block",
          visibility: "visible"
        };
        for (l = 0; p = aH[l]; l++) v[p] = g[z.cb(p)];
        WA(h, v, !0);
        h.Ph = [q];
        k.push(h);
        g = [];
        p = k.length;
        for (l = 0; l < p; l++) {
          v = k[l];
          h = g;
          I = v.Ph.length;
          q = !1;
          for (K = 0; K < I; K++) {
            O = v.Ph[K].Ti;
            ba = O.length;
            for (ua = 0; ua < ba; ua++) h.push(O[ua].aI, " ");
            K < I - 1 && h.push(",");
            z.B && !z.E("1.9a") && (q = q || XG.test(O[ba - 1].aI))
          }
          v = v.ro;
          q && (v = v.replace(YG, "$1 color: $2 ! important; "));
          h.push("{", v, "}\n")
        }
        this.Kz = g.join("")
      }
    }
    d = new gB(d, f + this.Kz);
    c.$r && (f = z.Rg(d.yZ), (f.top || f.left || f.right ||
      f.bottom) && z.tg(a, "margin", -f.top + "px " + -f.right + "px " + -f.bottom + "px " + -f.left + "px"));
    hB(c, b, d, a);
    PB(this);
    z.tg(a, "visibility", "visible")
  };
  z.e.Ix = function() {
    z.nd(this.NI);
    z.nd(this.bU);
    z.NB.v.Ix.call(this)
  };
  var qC = {};
  qC._default_ = {
    et: function(a) {
      return window.$.get("/node/CommentV2", {
        params: {
          comment_id: a
        }
      })
    },
    Yj: vp,
    Zj: vp,
    add: function(a) {
      return window.$.post("/node/AnswerCommentAddV2", {
        method: "add_comment",
        params: a
      })
    },
    remove: function(a) {
      return window.$.post("/node/CommentV2", {
        method: "remove_comment",
        params: {
          comment_id: a
        }
      })
    },
    gu: function(a, b) {
      return window.$.post("/node/CommentV2", {
        method: b ? "like_comment" : "undo_like_comment",
        params: {
          comment_id: a
        }
      })
    }
  };
  qC.answer = {
    Yj: function(a, b) {
      return window.$.get("/node/AnswerCommentBoxV2", {
        params: {
          answer_id: a,
          load_all: b
        }
      })
    },
    Zj: function(a) {
      return window.$.get("/node/AnswerCommentListV2", {
        params: {
          answer_id: a
        }
      })
    },
    add: function(a) {
      return window.$.post("/node/AnswerCommentAddV2", {
        method: "add_comment",
        params: a
      })
    },
    OO: function(a, b) {
      return window.$.post("/node/AnswerCommentV2", {
        method: "author_remove_comment",
        params: {
          comment_id: a,
          is_block: b
        }
      })
    }
  };
  qC.question = {
    Yj: function(a) {
      return window.$.get("/node/QuestionCommentBoxV2", {
        params: {
          question_id: a
        }
      })
    },
    Zj: function(a) {
      return window.$.get("/node/QuestionCommentListV2", {
        params: {
          question_id: a
        }
      })
    },
    add: function(a) {
      return window.$.post("/node/QuestionCommentAddV2", {
        method: "add_comment",
        params: a
      })
    }
  };
  qC.favlist = {
    Yj: function(a) {
      return window.$.get("/node/FavlistCommentBoxV2", {
        params: {
          favlist_id: a
        }
      })
    },
    Zj: function(a) {
      return window.$.get("/node/FavlistCommentListV2", {
        params: {
          favlist_id: a
        }
      })
    },
    add: function(a) {
      return window.$.post("/node/FavlistCommentAddV2", {
        method: "add_comment",
        params: a
      })
    }
  };
  qC.post = {
    et: function(a) {
      return window.$.get("/node/PostCommentV2", {
        params: {
          comment_id: a
        }
      })
    },
    Yj: function(a, b) {
      return window.$.get("/node/PostCommentBoxV2", {
        params: {
          post_id: a,
          load_all: b
        }
      })
    },
    Zj: function(a) {
      return window.$.get("/node/PostCommentListV2", {
        params: {
          post_id: a
        }
      })
    },
    add: function(a) {
      return window.$.post("/node/PostCommentV2", {
        method: "add_comment",
        params: a
      })
    },
    gu: function(a, b) {
      return window.$.post("/node/PostCommentV2", {
        method: b ? "like_comment" : "undo_like_comment",
        params: {
          comment_id: a
        }
      })
    },
    remove: function(a) {
      return window.$.post("/node/PostCommentV2", {
        method: "remove_comment",
        params: {
          comment_id: a
        }
      })
    }
  };
  qC.roundtable = {
    et: function(a) {
      return window.$.get("/roundtable/comments/" + a)
    },
    Yj: function(a, b) {
      return window.$.get("/node/RoundtableCommentBoxV2", {
        params: {
          roundtable_id: a,
          load_all: b
        }
      })
    },
    Zj: function(a) {
      return window.$.get("/roundtable/comments", {
        roundtable_id: a
      })
    },
    add: function(a) {
      return window.$.post("/node/RoundtableCommentV2", {
        method: "add_comment",
        params: a
      })
    },
    gu: function(a, b) {
      return window.$.post("/node/RoundtableCommentV2", {
        method: b ? "like_comment" : "undo_like_comment",
        params: {
          comment_id: a
        }
      })
    },
    remove: function(a) {
      return window.$.post("/node/RoundtableCommentV2", {
        method: "remove_comment",
        params: {
          comment_id: a
        }
      })
    }
  };
  qC.promotion = {
    et: function(a) {
      return window.$.get("/node/PromotionCommentV2", {
        params: {
          comment_id: a
        }
      })
    },
    Yj: function(a, b) {
      return window.$.get("/node/PromotionCommentBoxV2", {
        params: {
          post_id: a,
          load_all: b
        }
      })
    },
    Zj: function(a) {
      return window.$.get("/node/PromotionCommentListV2", {
        params: {
          post_id: a
        }
      })
    },
    add: function(a) {
      return window.$.post("/node/PromotionCommentV2", {
        method: "add_comment",
        params: a
      })
    },
    gu: function(a, b) {
      return window.$.post("/node/PromotionCommentV2", {
        method: b ? "like_comment" : "undo_like_comment",
        params: {
          comment_id: a
        }
      })
    },
    remove: function(a) {
      return window.$.post("/node/PromotionCommentV2", {
        method: "remove_comment",
        params: {
          comment_id: a
        }
      })
    }
  };
  z.y(z.QB, z.Lc);
  RB.prototype.fill = function(a, b) {
    this[a] = this[a].replace("?", b);
    return this
  };
  z.y(SB, z.G);
  z.e = SB.prototype;
  z.e.QN = {
    question: "问题",
    comment: "评论",
    answer: "回答",
    favlist: "收藏",
    member: "用户",
    message: "私信",
    image: "图片",
    video: "视频",
    post: "文章"
  };
  z.e.Vx = "report-dialog";
  z.e.WI = "loading";
  z.e.OQ = '\x3cform\x3e\x3cdiv class\x3d"header"\x3e\x3c% if (headnote) { %\x3e\x3cspan class\x3d"headnote"\x3e\x3c%\x3dheadnote%\x3e\x3c/span\x3e\x3c% } %\x3e\x3cspan class\x3d"error-container"\x3e\x3c/span\x3e\x3c/div\x3e\x3cul class\x3d"options clearfix"\x3e\x3c% each(options, function(option) { %\x3e\x3cli\x3e\x3clabel\x3e\x3cinput value\x3d"\x3c%\x3doption.value%\x3e" name\x3d"reason" type\x3d"radio"\x3e\x3c%\x3doption.label%\x3e\x3c/label\x3e\x3c% if (option.description) { %\x3e\x3cdiv class\x3d"description visible-if-checked"\x3e\x3c%\x3doption.description%\x3e\x3c/div\x3e\x3c% } %\x3e\x3c% if (option.options) { %\x3e\x3cul class\x3d"group-options clearfix visible-if-checked"\x3e\x3c% each(option.options, function(opt) { %\x3e\x3cli\x3e\x3clabel\x3e\x3cinput required data-description\x3d"\x3c%\x3dopt.description%\x3e" value\x3d"\x3c%\x3dopt.value%\x3e" name\x3d"reason-\x3c%\x3doption.value%\x3e" type\x3d"radio"\x3e\x3c%\x3dopt.label%\x3e\x3c/label\x3e\x3c/li\x3e\x3c% }) %\x3e\x3c/ul\x3e\x3cdiv class\x3d"group-description visible-if-checked"\x3e\x3c/div\x3e\x3c% } %\x3e\x3c% if (option.value \x3d\x3d 0) { %\x3e\x3cp class\x3d"input-container visible-if-checked"\x3e\x3cinput placeholder\x3d"请填写原因" type\x3d"text" name\x3d"detail" class\x3d"reason-text zg-form-text-input"\x3e\x3c/p\x3e\x3cp class\x3d"error-container visible-if-checked"\x3e\x3c/p\x3e\x3c% } %\x3e\x3c/li\x3e\x3c% }) %\x3e\x3c/ul\x3e\x3cp class\x3d"footnote"\x3e\x3c/p\x3e\x3c/form\x3e';
  z.e.PG = function() {
    return this.Fs
  };
  z.e.xx = function(a, b) {
    var c = new z.T;
    c.Dq(!0);
    c.Ae(!0);
    z.Kj(c, z.Cj());
    c.addEventListener(z.Mj, this.rR, !1, this);
    z.Ac(c, this);
    a && c.Fa(a);
    b && c.ca(b);
    c.F(!0);
    c.ga();
    z.U.add(c.m(), this.Vx);
    return this.Fs = c
  };
  z.e.rR = function(a) {
    if ("ok" === a.key) return (a = (0, window.$)("form", this.Fs.m()).valid()) && this.submit(), a
  };
  z.e.open = function(a, b, c) {
    var d = this.xx(z.Ja("确定要%s该%s？", this.WD[this.bm()], this.QN[a] || "条目"), this.yx());
    z.U.add(d.m(), this.WI);
    MD(a, this.bm()).then((0, z.t)(function(f) {
      d.ca((0, z.lw)(this.OQ, {
        each: z.A,
        options: f,
        headnote: c
      }));
      z.U.remove(d.m(), this.WI);
      d.ga();
      z.Sj(d, 450);
      this.yQ = {
        type: a,
        id: b
      };
      this.nf(f)
    }, this))
  };
  z.e.nH = function() {};
  z.e.nf = function(a) {
    var b = this,
      c = (0, window.$)(this.Fs.m()),
      d = (0, window.$)("form", c),
      f = (0, window.$)(".reason-text", c);
    c.on("change", ":radio", function(g) {
      g = (0, window.$)(g.target);
      c.find("li").removeClass("checked");
      g.parentsUntil(d, "li").addClass("checked");
      var h = this.value,
        k = z.pb(a, function(a) {
          return h === String(a.value)
        });
      b.nH(k);
      k = "0" === h;
      f.toggle(k);
      k && f.placeholder();
      g.closest("li").find("ul, :text").length || d.valid()
    });
    c.find("ul ul").on("change", ":radio", function(a) {
      (0, window.$)(a.delegateTarget).parent().find(".group-description").text((0, window.$)(this).data("description"))
    });
    d.validate({
      rules: {
        reason: "required",
        detail: {
          rangelength: [2, 100],
          required: function() {
            return !!(0, window.$)("input[name\x3dreason]:checked", c).length
          }
        }
      },
      messages: {
        reason: "请选择理由",
        detail: "理由为 2-100 字"
      },
      errorLabelContainer: (0, window.$)(".error-container", d)
    })
  };
  z.e.yx = function() {
    return '\x3cdiv class\x3d"loading"\x3e理由加载中\x3ci class\x3d"spinner-gray"\x3e\x3c/i\x3e\x3c/div\x3e'
  };
  z.y(z.TB, SB);
  var MD = function(a) {
    return function(b, c) {
      return a(z.Ja("/manage/%s/options?action\x3d%s", b, c))
    }
  }(z.hk(window.$.getJSON));
  z.e = z.TB.prototype;
  z.e.WD = {
    remove: "删除",
    lock: "锁定",
    unlock: "解除锁定",
    collapse: "折叠",
    uncollapse: "解除折叠",
    mute: "隔离",
    unmute: "解除隔离"
  };
  z.e.xx = function(a, b) {
    var c = z.TB.v.xx.call(this, a, b);
    c.yc.set("ok", this.WD[this.bm()]);
    return c
  };
  z.e.bm = function() {
    return this.av.op.split("-")[0]
  };
  z.e.lL = function(a) {
    (0, window.$)(".footnote", this.PG().m()).text(a)
  };
  z.e.nH = function(a) {
    a && (a.trackable ? VB(this, a).then((0, z.t)(this.lL, this)) : this.lL(""))
  };
  z.e.submit = function() {
    var a = this.av.action,
      b = this.av.content,
      c = (0, window.$)((0, window.$)("form", this.Fs.m())[0]).serialize();
    b && (c += "\x26" + b);
    UB(a, c, this.El)
  };
  z.e.D = function() {
    this.El = this.av = null;
    z.TB.v.D.call(this)
  };
  z.e.open = function(a, b, c) {
    this.av = z.lf(a) ? (0, window.$)(a).data() : a;
    this.El = c || z.je.g0;
    z.TB.v.open.call(this, b.type, b.id, "")
  };
  z.WB.prototype.submit = function(a, b) {
    function c() {
      b ? b() : d.handleError()
    }
    var d = this;
    window.$.post("/report", {
      type: this.options.type,
      id: this.options.id,
      reason: a && a.reason || "edit",
      custom_reason: a && a.customReason,
      source: "web"
    }).done(function(a) {
      d.mM && d.mM();
      a.r ? "duplicate_report" === a.errtype ? d.handleError(a.msg) : c() : XB(!!a.noti)
    }).fail(c)
  };
  z.WB.prototype.handleError = function(a) {
    var b = z.V({
      title: "举报",
      content: void 0 === a ? "举报失败" : a,
      modal: !0,
      buttons: {}
    });
    (0, window.setTimeout)(function() {
      return b.F(!1)
    }, 4E3)
  };
  z.WB.prototype.render = function() {
    var a = this,
      b = new z.T;
    b.Ae(!0);
    z.Sj(b, 420);
    b.Fa("举报");
    b.render();
    var c = b.S();
    c.style.margin = "0";
    c.style.padding = "0";
    z.X.vb(b.m(), {
      module: "ReportDialog"
    }, function() {
      var b = z.db(a.options.type),
        c = String(a.options.id);
      "Article" === b && (b = "Post");
      return {
        card: {
          card_type: "Content",
          content: "Comment" === b ? {
            type: b,
            id: c
          } : {
            type: b,
            token: c
          }
        }
      }
    });
    z.kx("Report").then(function(d) {
      function f() {
        d.unmountComponentAtNode(c);
        b.F(!1)
      }
      a.eM = 0;
      a.mM = f;
      var g = {},
        g = (g.type = a.options.type, g.talkerToken =
          a.options.KL, g.isColumnArticle = a.options.yT, g.isTipjarEnabled = a.options.LT, g.onContentChange = function(a) {
            b.Fa(a);
            b.m().focus()
          }, g.onClose = f, g.onSubmit = a.submit.bind(a), g.onMenuChange = function(b) {
            return a.eM = b
          }, g);
      d.render(c, g);
      b.F(!0);
      b.ga();
      (0, window.$)(b.jt()).on("click", function(b) {
        z.X.trackEvent(b.currentTarget, {
          action: "Close",
          element: "Button"
        }, {
          report: {
            id: a.eM
          }
        })
      })
    })
  };
  z.y(YB, z.Q);
  z.e = YB.prototype;
  z.e.defaults = {
    trigger: {
      A: "data-editable"
    },
    XN: "hc-actionbar",
    PT: "checked",
    cY: 100,
    OS: 100
  };
  z.e.C = function() {
    YB.v.C.call(this);
    this.Aj = z.M("div");
    window.document.body.appendChild(this.Aj);
    ZB(this, this.h)
  };
  z.e.D = function() {
    z.N(this.Aj);
    this.Aj = null;
    YB.v.D.call(this)
  };
  z.e.cz = function() {
    return this.SS
  };
  z.e.dP = function(a, b, c) {
    b = z.M("div", {
      title: a.na,
      "data-action": a.name,
      className: "button " + a.name + (0 === b ? " first" : b === c.length - 1 ? " last" : "")
    }, [z.M("i", "icon icon-actionbar-" + a.name)]);
    z.Do(b, !0);
    this.o().g(b, "click", function() {
      $B(this, a.name) && a.ni(this.Ke)
    });
    return b
  };
  z.e.render = function() {
    this.Aj.innerHTML = "";
    z.af(this.Aj, z.mb(z.Gb(Xn(this.Fn)), this.dP, this))
  };
  z.y(z.bC, z.Q);
  z.bC.prototype.defaults = {
    AH: {},
    LO: !0
  };
  z.bC.prototype.C = function() {
    z.bC.v.C.call(this);
    var a = this,
      b = this.h;
    this.H.LO && (this.En = oC(b), z.Ac(this, this.En));
    this.o().g(b, "paste", function() {
      (0, window.setTimeout)(function() {
        cC(a)
      })
    }).g(b, "keydown", this.HS)
  };
  z.bC.prototype.HS = function(a) {
    var b = z.jo(a.keyCode),
      c = 8 === a.keyCode;
    if (!(a.ctrlKey || a.altKey || a.metaKey || !b && !c)) {
      var b = z.Qu(),
        d = b.Z(),
        f = b.ia(),
        g = this.h,
        h, k = fC(d, g, hC) || f !== d && (h || (h = fC(f, g, hC)));
      if (k) {
        var l = z.qf(k),
          p = b.va(),
          q = b.Ra();
        if (k.getAttribute("data-editable") && l === k.href || "video-link" === k.className) {
          var v = !1;
          h = h || fC(f, g, hC) || k;
          var g = k.contains(d),
            I = h.contains(f);
          if (c) g && (d = k, p = 0, v = !0), I && (f = h, q = z.dv(h), v = !0), v && z.Bu(d, p, f, q).select();
          else if (g && I && h === k) {
            if (!b.isCollapsed() || 0 !== p && l.length !==
              p) a.preventDefault(), z.kv(k)
          } else g && (d = k.nextSibling, p = 0, v = !0), I && (f = h.previousSibling, q = z.dv(f), v = !0), v && z.Bu(d, p, f, q).select()
        }
      }
    }
  };
  var nC = /\b(?:(?:https?):\/\/|www\.)(?:\([\-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[\-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([\-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/ig,
    jC = ["http:", "https:"],
    kC = z.hk(function(a) {
      return window.$.post("/scraper", {
        url: a
      })
    });
  z.y(z.pC, z.Q);
  z.e = z.pC.prototype;
  z.e.defaults = {
    eU: !1,
    autofocus: !0,
    ry: "empty",
    Kf: "zm-item-comment"
  };
  z.e.T = function(a) {
    z.pC.v.T.call(this, a);
    IC(this);
    a = window.location.hash.slice(1).split("-");
    if (a = "comment" === a[0] && a[1]) a = BC(this, a), z.Fr(a), z.Vr(a), a.focus();
    this.lh = !0;
    z.A(CC(this), this.Eu, this)
  };
  z.e.Mn = "zm-comment-bubble";
  z.e.DE = "." + z.pC.prototype.Mn;
  z.e.$ = function(a) {
    return (0, window.$)(a, this.h)
  };
  z.e.B = function() {
    this.h = z.M("div", {
      "class": this.jF,
      style: "display:none"
    });
    this.kh()
  };
  z.e.ho = function() {
    return '\x3ci class\x3d"icon icon-spike zm-comment-bubble"\x3e\x3c/i\x3e\x3cdiv class\x3d"zm-comment-spinner"\x3e正在加载，请稍等 \x3ci class\x3d"spinner-lightgray"\x3e\x3c/i\x3e\x3c/div\x3e'
  };
  z.e.D = function() {
    z.pC.v.D.call(this);
    this.Ka = this.qF = this.co = this.tE = this.qd = this.JB = this.RI = null
  };
  z.e.hY = rC(function(a) {
    var b = z.L("zm-comment-content-wrap", a),
      c = z.L("zm-comment-form", a),
      d = a.getAttribute("data-id"),
      f = this,
      g;
    if (c) {
      g = z.L("zm-comment-editable", c);
      if (z.Mg(c)) {
        if (z.Ur(c)) {
          z.P(c, !1);
          return
        }
      } else z.P(c, !0);
      zC(g)
    } else {
      c = AC(b);
      g = z.L("zm-comment-editable", c);
      var h = new z.NB(g);
      h.be(!1, "");
      h.we();
      z.Bc(this, sC(h.m(), this.type, this.id));
      zC(g);
      a = z.L("zm-comment-close", c);
      b = z.L("zm-comment-submit", c);
      b.name = "";
      var k = function() {
        f.qa({
          action: "click_reply_[type]_comment_submit"
        });
        var a = (0, z.ab)(h.dm()),
          b = (0, z.ab)(z.qf(g));
        a && b ? KC(f, {
          content: a,
          hX: d
        }, function(a) {
          a.r || (z.P(c, !1), h.be(!1, ""), (a = z.jb(CC(f))) && z.Vr(a, {
            offsetTop: 100,
            cx: !0
          }))
        }) : (z.V.message("请填写内容"), g.focus())
      };
      z.F(a, "click", function() {
        z.P(c, !1)
      });
      z.F(b, "click", k);
      z.F(g, "keydown", function(a) {
        13 === a.keyCode && (a.ctrlKey || a.metaKey) && (k(), a.preventDefault())
      })
    }
    z.Vr(c, 100)
  });
  z.e.Bv = function(a) {
    z.U.enable(this.qF, "expanded", a)
  };
  z.e.ij = function(a, b) {
    this.dispatchEvent(new z.QB("click!comment", {
      category: "?",
      action: this.type + "_comments",
      label: "?_" + a,
      value: z.pa(b) ? b : this.hb()
    }))
  };
  z.e.ck = function() {
    this.lh ? GC(this) : this.Su = !0
  };
  z.e.fV = function(a) {
    13 === a.keyCode && (a.ctrlKey || a.metaKey) && (this.Gr(), (0, window.$)(this.Ka).blur(), a.preventDefault());
    27 === a.keyCode && EC(this)
  };
  z.e.Wa = function(a) {
    var b = z.Mr(this.h, a.target, "BUTTON") || z.Mr(this.h, a.target);
    if (b && b.name) {
      var c = z.Lo(b, this.H.Kf);
      a.preventDefault();
      switch (b.name) {
        case "reply_comment":
          this.qa({
            action: "click_reply_[type]_comment_start"
          });
          this.hY(c);
          break;
        case "cancelanon":
          a = (0, window.$)(this.h).parents(".feed-item-hook").data("qid");
          z.Ip(0, null, a);
          break;
        case "delcomment":
          this.Po(b);
          break;
        case "like_comment":
          this.aS(b);
          break;
        case "author_delcomment":
          NC(this, b);
          break;
        case "admin_delcomment":
          MC(this, b);
          break;
        case "closeform":
          this.qa({
            action: "click_add_[type]_comment_cancel"
          });
          EC(this);
          break;
        case "addnew":
          this.qa({
            action: "click_add_[type]_comment_submit"
          });
          this.Gr();
          break;
        case "load-more":
          this.ij("comments_all"), this.qa({
            action: "click_view_all_comment"
          }), this.RI(b)
      }
    }
  };
  z.e.RI = function(a) {
    this.mu && "pending" === this.mu.state() || (a && z.U.add(a, "loading"), this.mu = this.JB || this.SI(), this.mu.done((0, z.t)(function(b) {
      b = (0, window.$)(b).filter(".zm-item-comment").get();
      if (b.length) {
        var c = CC(this);
        c.length && (b = z.lb(b, function(a) {
          return !z.pb(c, function(b) {
            return b.getAttribute("data-id") === a.getAttribute("data-id")
          })
        }), b = z.ub(c, b).sort(function(a, b) {
          return a.getAttribute("data-id") - b.getAttribute("data-id")
        }), z.A(b, this.Eu, this), a && z.N(a));
        z.af(this.co, b)
      }
    }, this)))
  };
  z.e.aS = rC(function(a) {
    var b = (0, window.$)(a),
      c = z.Lo(a, this.H.Kf);
    a = (0, window.$)(".like-num", c);
    var d = c.getAttribute("data-id");
    if (c = !b.hasClass("liked")) this.ij("like_comment"), this.qa({
      action: "click_like_[type]_comment"
    });
    this.lf.gu(d, c);
    var d = (0, window.$)("em", a),
      f = +d.text() + (c ? 1 : -1);
    a.toggleClass("liked", c).toggleClass("nil", 0 >= f).attr("data-tooltip", "s$r$" + f + " 人觉得这个很赞");
    d.text(f);
    b.toggleClass("liked", c);
    xr(b[0], c ? "取消赞" : "赞")
  });
  z.e.expand = function() {
    this.Gc(!0)
  };
  z.e.collapse = function() {
    this.Gc(!1)
  };
  z.e.hd = function() {
    return this.lh
  };
  z.e.Gc = function(a) {
    if (a !== this.lh) {
      a && (this.$(this.DE).hide(), this.kh());
      this.lh = a;
      this.dispatchEvent(a ? "beforeexpand" : "beforecollapse");
      z.P(this.h, this.lh);
      var b = (0, z.t)(function() {
          a && FC(this);
          this.dispatchEvent(a ? "expand" : "collapse");
          this.yf && !a && (z.zv(this.yf), z.Vr(this.yf.h))
        }, this),
        c;
      a && this.Su ? (c = GC(this)) && c.done(b) : (0, window.setTimeout)(b);
      this.qd && (a ? (this.iW = z.qf(this.qd), xr(this.qd, "收起评论")) : xr(this.qd, 0 > this.Oa ? this.iW : this.Oa ? this.Oa + " 条评论" : "添加评论"))
    }
  };
  z.e.Yh = function() {
    this.Gc(!this.lh)
  };
  z.e.SI = function() {
    return this.lf.Zj(this.id)
  };
  z.e.zq = function(a) {
    this.Gj = a
  };
  z.e.bX = function(a) {
    a = z.Ye((0, z.ab)(a));
    z.P(a, this.lh);
    z.A((0, window.$)("." + this.H.Kf, a).get(), this.Eu, this);
    this.Su = !1;
    this.Ab();
    z.To(a, this.h);
    this.h = a;
    IC(this)
  };
  z.e.yo = function() {
    this.Ka.focus()
  };
  z.e.$a = function() {
    var a = (0, z.ab)(this.Nj.dm());
    return a === this.placeholder ? "" : a
  };
  z.e.Gr = rC(function() {
    var a = this.$a(),
      b = (0, z.ab)(z.qf(this.Ka));
    a && "TEXTAREA" === this.Ka.tagName && b || a ? KC(this, a) : (z.V.message("请填写内容"), this.yo())
  });
  z.e.hb = function() {
    return this.Oa
  };
  z.e.gR = function(a) {
    if (!a) return z.V.message("网络异常");
    if (a.r) return z.V.alert(a.msg);
    this.lf.et(a.msg).done(window.$.proxy(this.cX, this));
    this.Nj.be("");
    yC(this);
    this.Bv(!1)
  };
  z.e.Eu = function(a) {
    var b = this;
    a && (LC(this, a), this.gp(a), z.X.vb(a, {
      module: "CommentItem"
    }, function() {
      return {
        card: {
          card_type: "Content",
          content: {
            type: "Comment",
            id: String(b.data.id)
          }
        }
      }
    }))
  };
  z.e.gp = function(a) {
    var b = this;
    (0, window.$)("a[name\x3dreport], button.report", a).on("click", function() {
      z.X.trackEvent(b, {
        action: "ReportIntent",
        element: "Button"
      });
      (new z.WB({
        type: "comment",
        id: a.getAttribute("data-id")
      })).render()
    })
  };
  z.e.cX = function(a) {
    this.wk = "";
    a = z.Ye(a);
    this.co.appendChild(a);
    this.Eu(a);
    this.Oa += 1;
    JC(this)
  };
  z.e.Po = function(a) {
    var b = z.Lo(a, this.H.Kf),
      c = b.getAttribute("data-id");
    z.V.confirm("删除评论", "你确定要删除这条评论吗？", function(a) {
      a && PC(this, c, z.Ba(z.N, b))
    }, this)
  };
  z.e.kh = function() {
    (0, window.$)(window).on("beforeunload.CommentForm", (0, z.t)(function() {
      if (this.wk) return "你的评论还未保存，确认离开该页面吗？"
    }, this))
  };
  z.e.yi = function() {
    (0, window.$)(window).off("beforeunload.CommentForm")
  };
  z.e.qa = function(a) {
    this.dispatchEvent({
      type: "trackRequested",
      category: "comment",
      action: a.action.replace("[type]", this.type)
    })
  };
  z.n(z.RC, z.Q);
  z.e = z.RC.prototype;
  z.e.hd = function() {
    return this.tk
  };
  z.e.Gc = function(a) {
    a !== this.tk && (this.dispatchEvent(a ? "beforeexpand" : "beforecollapse"), this.tk = a, z.P(this.h, a), WC(this), this.dispatchEvent(a ? "expand" : "collapse"), this.$l && !a && (z.zv(this.$l), z.Vr(this.$l.m())))
  };
  z.e.Yh = function() {
    this.Gc(!this.tk)
  };
  z.e.ij = function() {};
  z.e.yo = function() {
    (0, window.$)("[data-input-box]", this.m()).focus()
  };
  z.e.reload = function() {
    XC(this, "reloadComments")
  };
  z.e.zq = function(a) {
    this.Gj = a
  };
  z.e.nf = function() {
    var a = this;
    WC(this);
    UC(this);
    this.o().g(z.Kp, "anon_change", function() {
      a.tk && a.reload()
    });
    (0, window.$)(this.m()).on("click", 'button[data-key\x3d"cancel"]', function(b) {
      0 === TC(a) && (b.preventDefault(), a.Gc(!1))
    })
  };
  z.e.B = function() {
    this.h = z.M("div", "comment-app-holder");
    z.P(this.h, !1)
  };
  z.e.render = function(a, b) {
    b = void 0 === b ? {} : b;
    var c = this;
    z.Q.prototype.render.call(this, a);
    var d = this.entryType,
      f = this.zb,
      g = {},
      h = Object.assign((g.entry = {
        id: f,
        type: d
      }, g.useContentEditable = z.Ym, g.createItemActions = function(a) {
        var b = [],
          d = a.id,
          f = a.own;
        !f && z.tm.eI && b.push({
          key: "adminremove",
          label: "删除",
          icon: "zg-icon zg-icon-comment-del",
          onClick: function() {
            var a = {
                op: "remove-comment",
                action: "/manage?comment_id\x3d" + d + "\x26action\x3dremove_comment2"
              },
              b = {
                id: d,
                type: "comment"
              };
            (new z.TB).open(a, b, function() {
              XC(c,
                "RemoveComment", {
                  id: d
                })
            })
          }
        });
        f || b.push({
          key: "report",
          label: "举报",
          icon: "zg-icon zg-icon-comment-report",
          onClick: function(b) {
            (new z.WB({
              type: "comment",
              id: a.id
            })).render();
            z.X.trackEvent(b.target, {
              action: "ReportIntent",
              element: "Button"
            })
          }
        });
        return b
      }, g.onEditorCreated = function(a) {
        return sC(a, d, f)
      }, g.onRequestHighlight = function(a) {
        z.Fr(a);
        z.Vr(a, {
          offsetTop: 45
        });
        a.focus()
      }, g), b),
      g = z.ha(window.location.hash.match(/#comment-(\d+)/) || []);
    g.next();
    (g = g.next().value) && (h.query = {
      bycomment: g
    });
    var k = Object.assign({},
        mx(), {
          authRequired: function(a) {
            return z.Rq(a, !0, function() {
              return c.Gj
            })
          }
        }),
      l = z.Pj(function() {
        return c.jx && SC(c)
      });
    z.kx("CommentApp").then(function(b) {
      a.appendChild(c.h);
      c.Qr = b.render(c.h, h, k);
      c.nf();
      c.Qr.store.subscribe(function() {
        (0, window.setTimeout)(function() {
          WC(c);
          l()
        })
      })
    });
    return this
  };
  z.gH = {
    uH: function(a) {
      this.Tv();
      var b = this.Ia.hd();
      (0, window.$)(".zm-meta-panel", this.m()).toggleClass("focusin", b);
      b && (a = (0, window.parseInt)(z.qf(a.currentTarget), 10) || 0, this.Ia.ij("view_comments", a));
      z.X.trackEvent(this, {
        action: b ? "CommentIntent" : "EndCommentIntent",
        element: "Button"
      })
    },
    Px: function() {
      return new(this.ct())(this.zb, this.entryType)
    },
    Tv: function() {
      this.nG();
      this.Ia.Yh()
    },
    V_: function() {
      return this.Ia
    },
    NR: function() {
      this.Ia ? this.Ia.yo() : this.Tv()
    },
    nG: function() {
      if (!this.Ia) {
        var a = (0, window.$)(".toggle-comment, .js-toggleCommentBox",
          this.h)[0];
        if (this.ct() === z.RC) this.Ia = this.Px(), this.L(this.Ia), this.Ia.render(this.Xy(), {
          embedded: /^\/roundtable/.test(window.location.pathname)
        }), VC(this.Ia, a);
        else if (this.Ia = this.Px(), this.L(this.Ia), z.tC(this.Ia, this.Xy(), a), a = this.Ia, !a.yf && !z.tm.mb) {
          var b = z.Lo(a.h, "zm-item-meta");
          if (b) {
            var c = z.L("zm-meta-panel", b);
            c && (a.yf = new z.Dv(null, b), a.yf.tag = "comment", a.yf.w(c))
          }
        }
        this.Yy && this.Ia.zq(this.Yy())
      }
    },
    ct: function() {
      return z.pC
    }
  };
  z.y(YC, z.Q);
  var ZC = {
    $g: "is-sticky",
    top: null,
    bottom: null,
    Mb: null,
    BO: !1,
    XJ: z.r,
    Gu: z.r
  };
  z.e = YC.prototype;
  z.e.D = function() {
    this.stop();
    YC.v.D.call(this)
  };
  z.e.start = function() {
    this.state.Bm || (this.state.Bm = !0, (0, window.$)(window).on("scroll resize", this.SL).trigger("scroll"))
  };
  z.e.stop = function() {
    this.state.Bm && (this.state.Bm = !1, (0, window.$)(window).off("scroll resize", this.SL), this.restore(), this.state.St = !1, this.state.Ut = !0, (0, window.setTimeout)(function() {
      (0, window.$)(window).trigger("scroll")
    }))
  };
  z.e.update = function() {
    if (this.state.lp) this.state.DB = !0;
    else {
      var a = this.options.top,
        b = this.options.bottom,
        c = this.state.St,
        d = this.state.Ut,
        f, g, h = (this.sc || this.h).getBoundingClientRect(),
        k = this.options.Mb.getBoundingClientRect(),
        l = (0, window.$)(window).height();
      h.height || (h.height = h.bottom - h.top);
      null !== a ? (f = h.top > a, g = k.bottom > a + h.height) : null !== b && (f = h.bottom > l - b, g = k.top > l - h.height - b);
      this.state.St = f;
      this.state.Ut = g;
      if ((c && !d) === (f && !g)) f && !g && this.ga();
      else {
        if (d && !g) return aD(this);
        if (!d && g) return cD(this);
        this.options.BO ? f ? aD(this) : cD(this) : f ? $C(this) : this.restore()
      }
    }
  };
  z.e.ga = function() {
    var a = (this.sc || this.h).getBoundingClientRect().left,
      b = this.options.top,
      c = this.options.bottom;
    (0, window.$)(this.h).css({
      left: a + "px",
      top: b ? b + "px" : "auto",
      bottom: c ? c + "px" : "auto"
    })
  };
  z.e.restore = function() {
    this.sc && ((0, window.$)(this.h).removeClass(this.options.$g).css({
      left: "",
      top: "",
      bottom: ""
    }), (0, window.$)(this.sc).remove(), this.sc = null, this.options.Gu.call(this))
  };
  z.e.onAnimationEnd = function() {
    this.state.lp = !1;
    this.state.DB && (this.state.DB = !1, this.update())
  };
  z.y(z.eD, z.Q);
  z.Ca(z.eD.prototype, z.gH);
  var fD = {
    post: "Post",
    anwser: "Answer",
    question: "Question",
    roundtable: "Roundtable",
    column: "Column",
    promotion: "Ad",
    live: "Live",
    favorites: "Collection"
  };
  z.e = z.eD.prototype;
  z.e.Rs = "zm-item-expanded";
  z.e.YN = "zm-item-meta, .js-contentActions";
  z.e.Cp = null;
  z.e.gy = "z-icon-fold";
  z.e.JC = "sprite-global-icon-fold-white";
  z.e.C = function() {
    z.eD.v.C.call(this);
    kD(this);
    this.Cj();
    this.ag();
    hD(this);
    iD(this);
    if (this.sb) this.Kt();
    else {
      var a = this;
      this.g("expand", function() {
        return a.Kt()
      })
    }
  };
  z.e.jz = function() {
    return Object.assign({}, {
      type: this.uD,
      id: this.zb,
      token: this.ig
    }, this.Do())
  };
  z.e.Do = function() {
    return {}
  };
  z.e.XG = function() {
    return mD(this)
  };
  z.e.Yy = function() {
    var a = this.entryType + "-" + this.zb;
    return (0, window.$)('a[name\x3d"' + a + '"]', this.h).length && "#" + a
  };
  z.e.Cj = function(a) {
    var b = {
      ".js-expand": this.expand,
      ".js-collapse": this.collapse,
      ".js-report": this.rS,
      ".column[data-entry-url]": this.cH
    };
    z.Mb(b, a || {});
    z.Db(b, function(a, b) {
      if (z.qa(a))(0, window.$)(this.h).on("click", b, window.$.proxy(a, this))
    }, this);
    (0, window.$)(".js-toggleCommentBox", this.h).on("click", this.uH.bind(this))
  };
  z.e.pu = function() {
    (0, z.UG)(this.entryType, this.ig, "read")
  };
  z.e.aJ = function() {
    (0, z.UG)(this.entryType, this.ig, "touch")
  };
  z.e.expand = function(a) {
    this.sb || (this.sb = !0, z.U.add(this.h, this.Rs), this.dispatchEvent("expand"), a = a && z.lf(a.target) && z.gj(a.target, "js-vote-count"), this.Yv(a), z.X.trackEvent(this, {
      action: "Expand",
      element: "Card"
    }))
  };
  z.e.collapse = function() {
    this.sb && (this.sb = !1, this.Xv(), Zr(this.h, (0, z.t)(function() {
      z.U.remove(this.h, this.Rs);
      this.dispatchEvent("collapse")
    }, this)), z.X.trackEvent(this, {
      action: "Collapse",
      element: "Button"
    }))
  };
  z.e.hd = function() {
    return this.sb
  };
  z.e.Yh = function() {
    this.sb ? this.collapse() : this.expand()
  };
  z.e.rL = function() {
    return !z.zm
  };
  z.e.Kt = function() {
    if (this.sb && this.rL() && !this.eQ) {
      this.eQ = !0;
      var a = (0, window.$)(".js-collapse-body", this.h)[0];
      if (a) {
        var b = this,
          c = (0, window.$)(".js-collapse", this.h)[0];
        if (!c) {
          if ("answer" !== this.entryType) return;
          c = (0, window.$)(".zm-meta-panel", this.h);
          if (!c.length) return;
          c = (0, window.$)('\x3cbutton class\x3d"item-collapse js-collapse"\x3e\x3ci class\x3d"sprite-global-icon-fold-white"\x3e\x3c/i\x3e收起\x3c/button\x3e').appendTo(c).on("click", (0, z.t)(this.collapse, this)).get(0)
        }
        var d = this.GL = new YC(0, {
          bottom: 12,
          Mb: a,
          XJ: function() {
            (0, window.$)("i", this.h).removeClass(b.gy).addClass(b.JC)
          },
          Gu: function() {
            (0, window.$)("i", this.h).removeClass(b.JC).addClass(b.gy)
          }
        });
        z.Ac(this, d);
        d.w(c);
        this.g("expand", function(a) {
          a.target === a.currentTarget && d.start()
        });
        this.g("collapse", function(a) {
          a.target === a.currentTarget && d.stop()
        });
        d.start()
      }
    }
  };
  z.e.Yv = function(a) {
    var b = "view_answer",
      c = mD(this);
    a = a ? "vote_up_count" : "expand_answer";
    var d = (0, window.$)(this.h).index() + 1;
    if ("feed" !== c) z.Ci(b, "click_expand_answer", c + "_" + a, d);
    else {
      var c = lD(this),
        f = nD(this); - 1 < c.indexOf("article") ? (b = "view_article", c = "feed_article", a = "expand_article") : c = "feed_answer";
      z.Ci(b, "click_expand_answer", c + "_" + f + "_" + a, d)
    }
  };
  z.e.Xv = function() {
    var a = "view_answer",
      b = mD(this),
      c;
    if (c = this.GL) c = this.GL, c = c.state.St && !c.state.Ut;
    c = c ? "blue" : "grey";
    var d = "collapse_answer_" + c,
      f = (0, window.$)(this.h).index() + 1;
    if ("feed" !== b) z.Ci(a, "click_collapse_answer", b + "_" + d, f);
    else {
      var b = lD(this),
        g = nD(this); - 1 < b.indexOf("article") ? (a = "view_article", b = "feed_article", d = "collapse_article_" + c) : b = "feed_answer";
      z.Ci(a, "click_collapse_answer", b + "_" + g + "_" + d, f)
    }
  };
  z.e.VV = function() {
    var a = z.L(this.Cp, this.h);
    window.open(a ? a.href : this.xd.url)
  };
  z.e.gk = function() {
    var a = this,
      b = (0, window.$)(this.m());
    b.slideUp(function() {
      a.dispose();
      b.remove()
    })
  };
  z.e.Rb = null;
  z.e.cH = function(a) {
    var b = (0, window.$)(a.currentTarget).data("entry-url");
    "column" === this.entryType && b && !a.target.href && window.open(b)
  };
  z.e.Xy = function() {
    return oD(this)
  };
  z.e.ct = function() {
    return ["answer", "post", "ebook"].includes(this.entryType) ? z.RC : z.pC
  };
  z.e.ag = function() {
    this.df = z.gn.PM(this.h);
    z.xl(z.xl(z.xl(z.xl(this.df.register("shift+o", this.VV, this), {
      group: "操作",
      name: "新窗口打开条目"
    }).register("o", this.Yh, this), {
      group: "操作",
      name: "显示全部/收起"
    }).register("c", this.Tv, this), {
      group: "操作",
      name: "打开评论"
    }).register("shift+c", this.NR, this), {
      group: "操作",
      name: "定位到评论框"
    })
  };
  z.e.rS = function() {
    var a = {
      type: this.entryType,
      id: this.zb
    };
    if ("post" === a.type) {
      var b = (0, window.$)(this.h),
        c = Boolean(b.find(".js-followButton").length),
        b = Boolean(b.find(".js-tipjar").length);
      Object.assign(a, {
        yT: c,
        LT: b
      })
    }(new z.WB(a)).render();
    z.X.trackEvent(this, {
      action: "ReportIntent",
      element: "Button"
    })
  };
  z.QD = {
    ZI: function(a) {
      return (0, window.$)('\x3cdiv class\x3d"copyright-notification"\x3e\x3cdiv class\x3d"user-image-container"\x3e\x3cimg class\x3d"user-image" src\x3d"' + (a || "") + '"\x3e\x3c/div\x3e\x3cdiv class\x3d"tooltip right noty-tooltip"\x3e\x3cdiv class\x3d"tooltip-arrow arrow"\x3e \x3c/div\x3e\x3cdiv class\x3d"tooltip-inner inner"\x3e保留所有权利，禁止转载\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e')
    }
  };
  z.QD.cT = z.Pj(function() {
    var a = z.QD.ZI();
    (0, window.$)("body").append(a);
    return a
  });
  z.QD.iY = function(a, b, c, d) {
    var f = -1,
      g = -1,
      h = z.QD.cT();
    a.on("mousedown", function(a) {
      3 === a.which && (f = a.pageX, g = a.pageY)
    });
    a.on("copy", function(k) {
      var l = z.Qu(),
        p = Math.floor(22 * Math.random() + 44);
      if (l && l.Wd() && (0, z.ab)(l.Wd()).length > p) {
        d && (k.preventDefault(), k.stopImmediatePropagation());
        (0, window.$)(".user-image", h).attr("src", b);
        (0, window.$)(".tooltip-inner", h).text(c);
        k = l.hz();
        var l = l.Zy(),
          p = z.ao(window).y,
          q = z.Qe(window).height,
          v = cp(p + 45 + 15, Math.min(k.y, l.y) + p, p + q - 15),
          I = cp(p + 45 + 15, Math.max(k.y, l.y) +
            p, p + q - 15);
        z.tm.mb ? (q = (z.Qe(window).width - 265) / 2, k = z.Ml ? l.y > k.y ? l.y + p + 10 : k.y + p - 10 : -1 !== g ? g + 3 : v + (I - v) / 2 - 15) : (q = -1 !== f ? f + 3 : a.offset().left + a.width() / 2 - 15, k = -1 !== g ? g + 3 : v + (I - v) / 2 - 15);
        h.css({
          position: "absolute",
          left: q,
          top: k
        }).finish().fadeIn(300).delay(2E3).fadeOut(300)
      }
      g = f = -1
    })
  };
  z.QD.lE = function(a, b, c) {
    function d(a, b, c) {
      a = ["作者：" + b, "链接：" + a, "来源：知乎", "著作权归作者所有，转载请联系作者获得授权。"];
      b = ["", ""];
      return a = c ? a.concat(b) : b.concat(a)
    }

    function f(a, b, c, f) {
      b = d(b, c, f).join("\x3cbr /\x3e");
      return "\x3cdiv\x3e" + (f ? b + a : a + b) + "\x3c/div\x3e"
    }

    function g(a, b, c, f) {
      b = d(b, c, f).join("\n");
      return f ? b + a : a + b
    }

    function h() {
      var a = "";
      window.getSelection ? a = window.getSelection().toString() : window.document.selection && "Control" !== window.document.selection.type && (a = window.document.selection.createRange().text);
      return a
    }

    function k(a) {
      var d = z.Qu(),
        k = d && (0, z.ab)(d.Wd());
      if (k && !(128 > k.length)) {
        k = 512 <= k.length;
        if ("object" === typeof a.originalEvent.clipboardData && (a.originalEvent.clipboardData.setData("text/html", f(d.tg(), b, c, k)), a.originalEvent.clipboardData.setData("text/plain", g(h(), b, c, k)), 0 < a.originalEvent.clipboardData.getData("text/plain").length)) {
          a.preventDefault();
          return
        }
        if (window.getSelection) {
          a = d.tg();
          var v = (0, window.$)(f(a, b, c, k)).css({
            position: "fixed",
            left: "-9999px"
          }).appendTo("body");
          window.getSelection().selectAllChildren(v.get(0));
          (0, window.setTimeout)(function() {
            d.select();
            v.remove()
          }, 200)
        }
      }
    }
    a && b && c && (z.Ia(b, "http") || (b = window.location.protocol + "//" + window.location.host + b), a.on("copy", k))
  };
  z.y(rD, z.Q);
  z.e = rD.prototype;
  z.e.qa = function(a) {
    this.dispatchEvent({
      type: "trackRequested",
      category: "share",
      action: a.action.replace("[type]", "post" !== this.wb ? this.wb : "article"),
      attributes: a.attributes
    })
  };
  z.e.T = function(a) {
    var b = this;
    rD.v.T.call(this, a);
    var c = this.Ga = (0, window.$)(a);
    z.gh ? c.click(z.Uw) : z.zm ? c.click(this.Hq.bind(this)) : this.oc();
    c.click(function() {
      b.qa({
        action: "click_share_[type]_start"
      });
      (!b.Ip || b.Ip && b.Ip.W()) && z.X.trackEvent(a, {
        action: "ShareIntent",
        element: "Button"
      })
    })
  };
  z.e.oc = function() {
    sD(this);
    this.Ga.one("mouseover focus", window.$.proxy(z.Pj(this.zW), this))
  };
  z.e.zW = function() {
    this.cn || (this.cn = z.At(this.wb, this.uM));
    if (this.Ip) {
      var a = z.Qw(this.qL);
      (0, window.$)(".js-qrcode-image", this.Ip.m()).attr("src", a)
    }
  };
  z.e.fR = function(a) {
    a = a.target.X();
    0 === a ? this.Hq() : 2 === a && (window.open("https://dudu.zhihu.com/post?" + window.$.param({
      url: this.qL,
      utm_source: "zhihu-web_share",
      utm_medium: "button",
      utm_campaign: "post"
    }), "_blank"), this.qa({
      action: "click_share_[type]_to_dudu_start"
    }), z.X.trackEvent(this.m(), {
      action: "Share",
      element: "Menu"
    }, {
      share: {
        type: "Dudu"
      }
    }))
  };
  z.e.Hq = function() {
    this.cn || (this.cn = z.At(this.wb, this.uM));
    this.cn.then(function(a) {
      z.pD(a.msg.sina)
    });
    this.qa({
      action: "click_share_[type]_to_weibo_start"
    });
    z.X.trackEvent(this.m(), {
      action: "Share",
      element: "Menu"
    }, {
      share: {
        type: "Weibo"
      }
    })
  };
  z.y(tD, pA);
  tD.prototype.fc = function(a) {
    var b = tD.v.fc.call(this, a);
    a = (0, window.parseInt)(z.rl[a.keyCode], 10);
    (0, window.isNaN)(a) || this.eb().Eb(a - 1);
    return b
  };
  z.y(z.uD, z.Q);
  var vD = {
    xY: "textarea.content, script.content",
    eP: ".toggle-expand",
    tY: ".summary",
    wF: null,
    uF: ""
  };
  z.e = z.uD.prototype;
  z.e.C = function() {
    z.uD.v.C.call(this);
    var a = this.h;
    this.Ar = (0, window.$)(this.options.xY, a);
    this.content = this.Ar.is(":input") ? this.Ar.val() : this.Ar.html();
    this.nl = (0, window.$)(this.options.tY, a);
    this.gf = (0, window.$)(this.options.wF, a);
    this.rd = (0, window.$)(this.options.eP, this.nl);
    if (!this.nl.length) return this.dispatchEvent("invalid");
    this.tI = !!this.rd.length;
    this.rd.on("click", (0, z.t)(this.kR, this));
    this.nl.on("click", (0, z.t)(this.uS, this))
  };
  z.e.kR = function(a) {
    a.preventDefault();
    wD(this)
  };
  z.e.uS = function(a) {
    var b = z.Qu();
    b && b.Wd() || a.target === this.rd[0] || (b = (0, window.$)(a.target).closest("a").get(0), b && "javascript:" !== b.protocol || (a.preventDefault(), wD(this)))
  };
  z.e.expand = function() {
    this.gf.length || (this.gf = (0, window.$)("\x3cdiv\x3e").html(this.content).addClass(this.options.uF).insertBefore(this.Ar));
    this.nl.hide();
    this.gf.show();
    this.dispatchEvent("expand")
  };
  z.e.collapse = function() {
    this.nl.show();
    this.gf.hide();
    this.dispatchEvent("collapse")
  };
  var DD = {
    xn: function(a, b) {
      return window.$.post("/node/ColumnPostVoteBarV2", {
        method: b,
        params: {
          post_id: a
        }
      })
    },
    ZG: function(a) {
      return window.$.get("/node/ColumnPostVoteInfoV2", {
        params: {
          post_id: a
        }
      })
    }
  };
  z.y(yD, z.Q);
  z.AD = {
    Xg: 1,
    ol: -1,
    Cr: 0
  };
  yD.prototype.defaults = {
    cZ: "up",
    kQ: "down",
    GP: "count",
    Yu: "pressed"
  };
  z.Mb(yD.prototype, z.AD);
  z.e = yD.prototype;
  z.e.N = z.AD.Cr;
  z.e.w = function(a) {
    yD.v.w.call(this, a);
    var b = this.H;
    a = this.J = (0, window.$)(a);
    this.Gw = (0, window.$)("." + b.cZ, a);
    this.rw = (0, window.$)("." + b.kQ, a);
    this.pr = (0, window.$)("." + b.GP, a);
    b = this.Gw.hasClass(this.H.Yu);
    a = this.rw.hasClass(this.H.Yu);
    b ? this.N = z.AD.Xg : a && (this.N = z.AD.ol);
    BD(this);
    this.Gw.click(window.$.proxy(this.Uv, this));
    this.rw.click(window.$.proxy(this.YL, this));
    z.X.vb(this, {
      module: "VoteBar"
    })
  };
  z.e.getState = function() {
    return this.N
  };
  z.e.uc = z.Rq(function(a) {
    a !== this.N && z.co(z.AD, a) && (this.dispatchEvent({
      type: "action",
      data: {
        state: a
      }
    }), this.xi && "pending" === this.xi.state() && this.xi.abort(), zD(this, this.N, a), this.N = a, BD(this), this.vY().done((0, z.t)(function(a) {
      a.r || this.Rc()
    }, this)))
  }, !0);
  z.e.Aq = function(a) {
    this.pr.text(z.$r((0, window.parseInt)(a)))
  };
  z.e.hb = function() {
    return this.pr.text()
  };
  z.e.vY = function() {
    var a = {};
    a[z.AD.Xg] = "vote_up";
    a[z.AD.ol] = "vote_down";
    a[z.AD.Cr] = "vote_neutral";
    return this.xi = (0, {
      post: DD.xn,
      answer: FD.xn,
      promotion: xD
    }[this.entryType])(this.zb, a[this.N])
  };
  z.e.Uv = function() {
    this.uc(this.N === z.AD.ol ? z.AD.Xg : this.N ^ z.AD.Xg);
    z.X.trackEvent(this, {
      action: this.N === z.AD.Cr ? "UnUpvote" : "Upvote",
      element: "Button"
    })
  };
  z.e.YL = function() {
    this.uc(this.N === z.AD.Xg ? z.AD.ol : this.N ^ z.AD.ol);
    z.X.trackEvent(this, {
      action: this.N === z.AD.Cr ? "UnDownvote" : "Downvote",
      element: "Button"
    })
  };
  z.e.Rc = function() {
    this.dispatchEvent("change")
  };
  z.ED = {
    xn: function(a, b) {
      var c = void 0;
      switch (b) {
        case "up":
          c = window.$.ajax({
            url: "/publications/" + a + "/upvote",
            method: "post"
          });
          break;
        case "neutral":
          c = window.$.ajax({
            url: "/publications/" + a + "/upvote",
            method: "delete"
          })
      }
      return c
    },
    gP: function(a, b) {
      return window.$.ajax({
        method: "post",
        url: "/publications/" + a + "/buy",
        contentType: "application/json",
        data: JSON.stringify(b)
      })
    }
  };
  z.y(z.CD, z.Q);
  z.e = z.CD.prototype;
  z.e.hb = function() {
    return this.rb.data("votecount")
  };
  z.e.Aq = function(a) {
    this.rb.data("votecount", a);
    this.Rc()
  };
  z.e.Rc = function() {
    this.dispatchEvent("change")
  };
  z.e.Kh = function(a) {
    if (a = (0, z.ab)(a)) a = (0, window.$)(a), this.rb.replaceWith(a), this.rb = a, this.dc(), this.Rc()
  };
  z.e.dc = function() {
    function a(a, d) {
      var f = z.M("div", "zm-voters");
      a.appendChild(f);
      var g = z.M("div", "listview");
      f.appendChild(g);
      var h = "/" + b.entryType + "/" + b.zb + "/voters_profile",
        k = new z.Dl({
          use: [],
          source: function() {
            return window.$.get(h).then(function(a) {
              var c = a.paging;
              c && (c.total && b.Aq(c.total), h = c.next);
              return {
                results: a.payload,
                next: !!h
              }
            })
          }
        });
      k.w(g);
      k.Af().setAttribute("hidden", "true");
      z.Ac(d, k);
      k.o().xa(k, "next", function() {
        k.ib().length ? (k.Af().removeAttribute("hidden"), k.use("autoload", {
            Tr: !1,
            viewport: f
          })) :
          (k.dispose(), f.innerHTML = '\x3cdiv class\x3d"empty-results"\x3e还没有人赞同\x3c/div\x3e')
      });
      return k.zg()
    }
    var b = this;
    (0, window.$)("a.more", this.rb).click(function() {
      var c = z.V.async({
        modal: !0,
        title: b.hb() + " 人赞同",
        className: "zm-voters-dialog",
        Nx: window.$.Deferred(function(b) {
          (0, window.setTimeout)(function() {
            a(c.S(), c).then(function() {
              b.resolve(null)
            })
          })
        }).promise()
      });
      c.o().g(b, "change", function() {
        c.Fa(b.hb() + " 人赞同")
      })
    })
  };
  z.e.C = function() {
    this.rb = (0, window.$)(this.h);
    this.dc();
    z.X.vb(this, {
      module: "VoteInfo"
    })
  };
  z.y(HD, z.Q);
  z.e = HD.prototype;
  z.e.T = function(a) {
    HD.v.T.call(this, a);
    this.o().g(a, "click", this.YV)
  };
  z.e.bQ = function() {
    var a = this.dw;
    z.To(a.m(), this.GM);
    z.kj(a.m(), [this.FM, this.HM])
  };
  z.e.CO = '\x3cdiv class\x3d"text zg-clear"\x3e\x3clabel class\x3d"zg-left"\x3e赞同\x3c/label\x3e\x3clabel class\x3d"zg-right"\x3e反对\x3c/label\x3e\x3c/div\x3e';
  z.e.xW = '\x3cdiv class\x3d"text zg-clear votebar-text-post"\x3e\n  \x3clabel\x3e赞\x3c/label\x3e\n\x3c/div\x3e';
  z.e.YV = z.Rq(function() {
    this.Ma && this.Ma.dispose();
    var a = new z.T(null);
    a.Ae(!0);
    a.Zm(!0);
    a.EG = !0;
    ID(this);
    this.o().xa(a, "hide", this.bQ);
    var b = ["post", "promotion"].includes(this.dw.entryType) ? this.xW : this.CO,
      c = a.S();
    c.appendChild(this.dw.m());
    c.appendChild(z.Ye(b));
    z.U.add(a.m(), this.ky);
    a.F(!0);
    this.Ma = a;
    z.Ac(this, a)
  }, !0);
  z.hH = {
    Ot: function() {
      function a() {
        var a = c.hd();
        if (a && (b(), f)) {
          var d = f,
            h = d.rb;
          h.data("async-voters") && (h.removeData("async-voters"), z.GD(d))
        }
        g && z.yv(g, a)
      }

      function b() {
        if (!g) {
          var a = !z.Tj,
            b = z.L("js-collapse-body", c.m());
          a && h && (0, window.$)(h).is(":visible") && b && 230 < (0, window.$)(b).height() && (g = c.x0 = new z.Dv(null, b), c.L(g), g.tag = "votebar", g.jK = 50, g.w(h))
        }
      }
      var c = this,
        d = void 0,
        f = void 0,
        g = void 0,
        h = (0, window.$)(".votebar, .zm-votebar", this.m())[0];
      if (h) {
        d = this.Rg = new yD(this.zb, this.entryType);
        this.L(d);
        d.w(h);
        var k = (0, window.$)(".js-openVoteDialog", this.m())[0];
        k && (new HD(d)).w(k)
      }
      if (k = (0, window.$)(".zm-item-vote-info", this.m())[0]) f = this.IM = new z.CD(this.zb, this.entryType), this.L(f), f.w(k);
      d && (this.o().g(d, "change", function() {
        f ? z.GD(f) : (0, window.$)("[data-bind-votecount]", this.m()).text(d.hb())
      }), f && this.o().g(f, "change", function() {
        (0, window.$)("[data-bind-votecount]", this.m()).text(f.hb());
        d.Aq(f.hb())
      }));
      this.o().g(this, ["expand", "collapse"], a);
      (0, window.$)(this.m()).on("contentchange", b);
      (0, window.setTimeout)(a)
    }
  };
  z.y(z.JD, z.eD);
  z.e = z.JD.prototype;
  z.e.Do = function() {
    return {
      parent_token: (0, window.$)(this.m()).find('link[itemprop\x3d"url"]').attr("href").match(/\/question\/([\d]+)\/answer\/([\d]+)/)[1]
    }
  };
  z.e.Cj = function() {
    var a = this;
    z.JD.v.Cj.call(this, {
      ".js-collect": this.bH,
      ".js-thank": this.sH,
      ".js-noHelp": this.gS,
      ".js-administer": this.tL,
      ".js-orgCollapse": this.kS,
      ".js-expandQuestionDetail": this.mL.bind(this, !0)
    });
    this.Ot();
    this.fp();
    this.Li();
    PD(this);
    this.qk();
    this.Yz();
    this.o().g(this, "collapse", function(b) {
      b.target === a && a.mL(!1)
    });
    if (this.sb) this.xm();
    else {
      var b = this;
      this.xa("expand", function() {
        return b.xm()
      })
    }
  };
  z.e.ag = function() {
    var a = this;
    z.JD.v.ag.call(this);
    z.xl(z.xl(z.xl(z.xl(this.df.register("v", function() {
      a.Rg && a.Rg.Uv()
    }), {
      group: "操作",
      name: "赞同"
    }).register("d", function() {
      a.Rg && a.Rg.YL()
    }), {
      group: "操作",
      name: "反对"
    }).register("t", this.sH, this), {
      group: "操作",
      name: "感谢"
    }).register("s c", this.bH, this), {
      group: "操作",
      name: "收藏"
    });
    if (z.tm.eI && (0, window.$)(".js-administer", oD(this))[0]) {
      var b = this,
        c = z.Uc ? "⌘" : "ctrl",
        d = function() {
          b.tL();
          b.Ir.Eb(0)
        };
      z.xl(z.xl(this.df.register("meta+.", d), {
        group: "管理",
        name: "展开菜单",
        key: c + "+."
      }).register("meta+k",
        function() {
          d();
          var a = b.Ir.Fi(0);
          a.eb && a.eb() && (a.Dv(), a.eb().Eb(0))
        }), {
        group: "管理",
        name: "展开折叠子菜单 (Kill)",
        key: c + "+k"
      })
    }
  };
  z.e.qk = function() {
    var a = (0, window.$)(".js-share", this.m()).get(0),
      b = this.xd.url;
    a && b && (a = z.qD(a, "answer", this.ig, b), z.Ac(this, a), a.Fb(this))
  };
  z.e.Li = function(a) {
    var b = new z.uD(a);
    this.L(b);
    b.w(this.h);
    this.g("expandRequest", (0, z.t)(this.expand, this));
    this.g("expand", function(a) {
      a.target === a.currentTarget && b.expand()
    });
    this.g("collapse", function(a) {
      a.target === a.currentTarget && b.collapse()
    });
    b.tI && this.o().xa(b, "expand", this.pu)
  };
  z.e.fp = function() {
    var a = (0, window.$)(".phone-actions", this.m());
    if (a.length) {
      var b = new z.Uz;
      b.w((0, window.$)(".menu", a)[0]);
      b = new z.aA("operation", b);
      b.Vi = !0;
      z.cA(b);
      bA(b);
      b.Ob = z.Gl;
      b.w((0, window.$)(".menubutton", a)[0])
    }
  };
  z.e.sH = gD(function(a) {
    if (a = a.target) {
      var b = "true" === a.getAttribute("data-thanked");
      b ? (xr(a, "感谢"), a.setAttribute("data-thanked", !1), window.$.post("/answer/cancel_thanks", {
        aid: this.zb
      })) : (xr(a, "取消感谢"), a.setAttribute("data-thanked", !0), window.$.post("/answer/thanks", {
        aid: this.zb
      }));
      z.X.trackEvent(a, {
        action: b ? "UnThank" : "Thank",
        element: "Button"
      })
    }
  }, {
    Lb: "question_answer_thank"
  });
  z.e.gS = gD(function(a) {
    a = a.target;
    var b = !!a.m;
    z.W.yb({
      type: "ga_click_answer_not_helpful",
      target: b ? a.m() : a
    });
    this.jy && "pending" === this.jy.state() && this.jy.abort();
    var c = -1 < (b ? a.nh() : a.innerHTML).indexOf("撤销"),
      d = c ? "没有帮助" : "撤销没有帮助";
    b ? a.xq(d) : a.innerHTML = d;
    d = c ? "/answer/helpful" : "/answer/not_helpful";
    b || z.Fr(a);
    this.jy = window.$.post(d, {
      aid: this.zb
    });
    z.X.trackEvent(this, {
      action: c ? "UnNoHelp" : "NoHelp",
      element: "Button"
    })
  }, !0);
  z.e.bH = gD(function() {
    var a = z.uA.aa();
    xA(a, this.zb);
    a.show();
    z.X.trackEvent(this, {
      action: "CollectIntent",
      element: "Button"
    })
  }, {
    Lb: "question_answer_collect",
    Ie: !0
  });
  z.e.Yz = function() {
    var a = (0, window.$)(".js-settings", oD(this))[0];
    if (a) {
      var b = this;
      this.AE = new KA(this);
      this.AE.w(a);
      this.o().g(this.AE, SA, function() {
        if (b.Ia) {
          var a = b.Ia.hd();
          b.removeChild(b.Ia, !0);
          b.Ia.dispose();
          b.Ia = null;
          b.nG();
          a && b.Ia.Yh()
        }
      })
    }
  };
  z.e.tL = function() {
    if (this.Ir) return this.Ir.F(!0);
    var a = KD(this);
    a && (z.kA(a, new z.Gz(this.iO, 1, !0), 0, new z.rg(5, 0, 5, 0)), ND(this, a), this.Ir = a)
  };
  z.e.kS = function() {
    var a = this,
      b = void 0,
      c, d;
    this.Mi ? (b = "取消隐藏回答", c = "确认取消隐藏？", d = "cancel_collapse") : (b = "隐藏回答", c = "隐藏后该回答将不展示也不流通，是否确认隐藏？", d = "collapse");
    z.V.confirm(b, c, function(b) {
      b && window.$.post("/answer/" + a.ig + "/org_" + d).then(function(a) {
        a.r ? z.V.message(a.msg) : (z.V.message("操作成功！"), window.location.reload())
      })
    })
  };
  z.e.xm = function() {
    (0, window.$)("img.lazy:not([data-lazyloaded])", this.m()).attr("data-lazyloaded", "").lazyload({
      load: function() {
        (0, window.$)(this).trigger("contentchange")
      },
      data_attribute: "actualsrc",
      event: "scroll updatelazy",
      threshold: 400
    })
  };
  z.e.Rb = z.m(46);
  z.e.mL = function(a) {
    (0, window.$)(".feed-question-detail-item", this.h).toggleClass("question-detail-expanded", a)
  };
  z.Ca(z.JD.prototype, z.hH);
  z.y(z.RD, z.eD);
  z.e = z.RD.prototype;
  z.e.Cp = "post-link";
  z.e.C = function() {
    z.RD.v.C.call(this);
    this.Ot();
    this.Li();
    this.fp();
    this.qk();
    var a = (0, window.$)(".post-content", this.h),
      b = a.data("entryUrl"),
      c = a.data("authorName");
    z.QD.lE(a, b, c);
    SD(this)
  };
  z.e.XG = function() {
    return "feed_article_" + nD(this) + (this.hd() ? "_expand" : "")
  };
  z.e.qk = function() {
    var a = (0, window.$)("a[name\x3dshare], .js-share", this.h).get(0),
      b = (0, window.$)(".post-link, .js-title-link", this.h).get(0);
    a && b && z.qD(a, "post", this.ig, b.href).Fb(this)
  };
  z.e.Rb = z.m(45);
  z.e.Ez = z.m(47);
  z.e.vz = z.m(48);
  z.e.Li = function(a) {
    var b = new z.uD(a);
    this.L(b);
    b.w(this.h);
    this.JL = b;
    this.g("expandRequest", (0, z.t)(this.expand, this));
    this.g("expand", function(a) {
      a.target === a.currentTarget && b.expand()
    });
    this.g("collapse", function(a) {
      a.target === a.currentTarget && b.collapse()
    });
    b.tI && this.o().xa(b, "expand", this.pu)
  };
  z.e.ag = function() {
    var a = this;
    z.RD.v.ag.call(this);
    z.xl(this.df.register("v", function() {
      a.Rg && a.Rg.Uv()
    }), {
      group: "操作",
      name: "赞同"
    })
  };
  z.e.fp = function() {
    var a = (0, window.$)(".phone-actions", this.m());
    if (a.length) {
      var b = new z.Uz;
      b.w((0, window.$)(".menu", a)[0]);
      b = new z.aA("operation", b);
      b.Vi = !0;
      z.cA(b);
      bA(b);
      b.Ob = z.Gl;
      b.w((0, window.$)(".menubutton", a)[0])
    }
  };
  z.Ca(z.RD.prototype, z.hH);
  z.n(z.TD, z.eD);
  z.TD.prototype.Rb = z.m(44);
  z.n(z.UD, z.eD);
  z.UD.prototype.Rb = z.m(43);
  z.n(z.VD, z.eD);
  z.n(z.WD, z.eD);
  z.WD.prototype.Rb = z.m(42);
  z.n(z.XD, z.eD);
  z.XD.prototype.Cj = function() {
    z.eD.prototype.Cj.call(this, {
      "[data-entry-url]": function(a) {
        var b = (0, window.$)(a.currentTarget).data("entry-url");
        b && !a.target.href && window.open(b)
      }
    })
  };
  z.XD.prototype.Rb = z.m(41);
  z.XD.prototype.Px = function() {
    return new(this.ct())(this.ig, this.entryType)
  };
  z.n(YD, z.eD);
  YD.prototype.C = function() {
    z.eD.prototype.C.call(this);
    this.Ot();
    this.Zz();
    this.fp()
  };
  YD.prototype.Zz = function() {
    var a = (0, window.$)(".js-share", this.m()).get(0),
      b = this.xd["promotion-url"];
    a && b && z.qD(a, this.entryType, this.ig, b).Fb(this)
  };
  YD.prototype.ag = function() {
    var a = this;
    z.eD.prototype.ag.call(this);
    z.xl(this.df.register("v", function() {
      a.Rg && a.Rg.Uv()
    }), {
      group: "操作",
      name: "赞同"
    })
  };
  YD.prototype.fp = function() {
    var a = (0, window.$)(".phone-actions", this.m());
    if (a.length) {
      var b = new z.Uz;
      b.w((0, window.$)(".menu", a)[0]);
      b = new z.aA("operation", b);
      b.Vi = !0;
      z.cA(b);
      bA(b);
      b.Ob = z.Gl;
      b.w((0, window.$)(".menubutton", a)[0])
    }
  };
  z.Ca(YD.prototype, z.hH);
  z.y(z.$D, z.Pz);
  z.$D.prototype.$d = function() {
    return this.dispatchEvent("action")
  };
  z.aq("goog-option", function() {
    return new z.$D(null)
  });
  z.y(z.aE, z.Q);
  z.e = z.aE.prototype;
  z.e.nD = !z.Tj;
  z.e.kD = !z.Tj;
  z.e.TI = !1;
  z.e.ej = function(a) {
    this.xh = a
  };
  z.e.init = function() {
    this.Zd = z.J("zh-load-more");
    this.w(this.tQ)
  };
  z.e.C = function() {
    z.aE.v.C.call(this);
    this.Pn = 1;
    eE(this);
    this.kl = (0, window.$)(this.Zd);
    this.Zd && (cE(this), this.o().g(this.Zd, "click", function() {
      this.pp = !0;
      this.ei && "pending" === this.ei.state() && 1 === this.Pn ? (this.ei.done((0, z.t)(this.Ik, this)), this.uC = !0, z.bE(this, !0)) : this.nD && this.Xu ? (this.Ik(this.Xu), this.Xu = null) : (z.bE(this, !0), this.Bh())
    }), this.nD && (this.SC = new z.gl(this.nB, 100, this), this.o().g(window, "scroll", function() {
      this.SC.fire()
    })));
    fE(this, this.ib())
  };
  z.e.zg = function() {
    this.Bh(!0)
  };
  z.e.nB = function() {
    var a = this.Zd;
    a && z.Mg(a) && 1E3 >= a.getBoundingClientRect().top - z.Qe().height && !(this.Xu || this.ei && "pending" === this.ei.state()) && (this.kD && (3 !== this.Pn || this.TI ? (this.pp = !1, this.Pn++, this.uC = !0) : (this.Pn = 1, this.uC = !1)), this.Bh())
  };
  z.e.Bh = function(a, b, c) {
    b = b || z.r;
    if (!this.ei || "pending" !== this.ei.state()) {
      var d = this.KB(window.$.extend(this.params, {
        offset: this.offset,
        start: this.Gv
      }));
      z.W.yb({
        type: "topstory_feed_more"
      });
      z.X.trackEvent(this, {
        action: this.pp ? "LoadMore" : "RollForMore",
        element: "Button"
      });
      this.ei = window.$.post(this.url, d).done(b).done(window.$.proxy(function(b) {
        if (c) return c.call(this, b);
        this.nD && !a ? this.uC ? this.Ik(b) : (this.Xu = b, z.bE(this, !1)) : this.Ik(b)
      }, this));
      1 !== this.Pn && z.bE(this, !0);
      return this.ei
    }
  };
  z.e.KB = function(a) {
    return a
  };
  z.e.Ik = function(a) {
    if (a && !a.r) {
      var b = a.msg,
        c = b[0],
        d = b[1],
        f;
      2 < b.length && (f = b[2], this.Zd.setAttribute("data-next", f));
      0 < c && (this.Rr(d), this.offset = this.bB ? this.bB(this.ib()) : this.offset + c);
      b = !0;
      b = this.xt ? this.xt(a) : !(-1 === f || 10 > c);
      z.P(this.Zd, b);
      z.bE(this, !1);
      z.dE(this)
    }
  };
  z.e.ib = function() {
    return z.Uo(this.xh, this.h)
  };
  z.e.BB = function(a) {
    return a.id.replace(/^\w+-/, "")
  };
  z.e.Rr = function(a, b) {
    var c = z.ma(a) ? a.join("") : a,
      c = z.Ye(c + " "),
      d = z.Uo(this.xh, c);
    fE(this, d);
    "prepend" === b ? z.cf(c, this.h.firstChild) : this.h.appendChild(c);
    eE(this)
  };
  z.e.Fu = z.r;
  z.y(z.gE, z.G);
  z.gE.prototype.handleEvent = function(a) {
    if ("input" == a.type) z.C && z.E(10) && 0 == a.keyCode && 0 == a.charCode || (hE(this), this.dispatchEvent(iE(a)));
    else if ("keydown" != a.type || yo(a)) {
      var b = "keydown" == a.type ? this.h.value : null;
      z.C && 229 == a.keyCode && (b = null);
      var c = iE(a);
      hE(this);
      this.ka = z.vd(function() {
        this.ka = null;
        this.h.value != b && this.dispatchEvent(c)
      }, 0, this)
    }
  };
  z.gE.prototype.D = function() {
    z.gE.v.D.call(this);
    this.U.dispose();
    hE(this);
    delete this.h
  };
  z.y(jE, z.G);
  var kE = 0;
  jE.prototype.gB = function() {
    this.Gl()
  };
  jE.prototype.Gl = function() {
    var a = this.Ai.value.length;
    if (a > this.su) {
      var b = this.Ai.scrollTop,
        c = this.Ai.scrollLeft;
      this.Ai.value = this.Ai.value.substring(0, this.su);
      a = this.su;
      this.Ai.scrollTop = b;
      this.Ai.scrollLeft = c
    }
    this.hG && z.of(this.hG, String(1 == this.gQ ? a : this.su - a))
  };
  jE.prototype.D = function() {
    jE.v.D.call(this);
    delete this.Ai;
    this.fA.dispose();
    this.fA = null
  };
  var qE;
  z.y(z.lE, z.Wj);
  z.e = z.lE.prototype;
  z.e.init = function() {
    this.Pt || (this.Pt = !0, this.B(), this.dc())
  };
  z.e.dc = function() {
    z.C || (new z.rt("搜索问题")).w(this.md);
    this.O = new z.Ft("/redirect-question/autocomplete", this.md, null, null, z.J("zh-question-redirect-diag-content"), !1);
    this.O.On = !1;
    this.O.Lg(!0);
    this.o().g(this.O, "suggestionsupdate", Xr);
    this.o().g(this.O, "select", this.DV).g(this.bP, "click", function() {
      this.sa.F(!1)
    })
  };
  z.e.DV = function() {
    var a = this.O.sg();
    if ("search_link" === a[0]) window.open("/search?q\x3d" + (0, window.encodeURIComponent)(a[1]) + "\x26type\x3dquestion");
    else {
      this.md.value = "";
      var b = a[3],
        a = a[1];
      this.sa.F(!1);
      this.md.value = "";
      this.xhr = new z.wp(!0);
      this.o().xa(this.xhr, "complete", this.sO);
      this.xhr.ajax("/question/redirect", "qid\x3d" + this.pa + "\x26rqid\x3d" + b);
      this.pv = b;
      this.yK = a
    }
  };
  z.e.sO = function() {
    var a = z.Wn(this.xhr);
    a && (a.r ? z.V.message(a.msg) : this.wj ? (this.wj.innerHTML = "已经重定向", this.wj.setAttribute("data-disabled", 1)) : this.dispatchEvent("change"))
  };
  z.e.B = function() {
    this.h = z.M("div", {
      id: "zh-question-redirect-diag"
    }, ["将问题跳转至", z.M("div", {
      id: "zh-question-redirect-diag-content"
    }, this.md = z.M("input", {
      type: "text",
      "class": "zg-form-text-input"
    })), z.M("div", "zm-command", this.bP = z.M("a", {
      href: "javascript:;",
      "class": "zm-command-cancel",
      name: "cancel"
    }, "放弃操作"))]);
    this.sa = new z.T(null);
    this.sa.Fa("问题重定向");
    z.Kj(this.sa, null);
    this.sa.S().appendChild(this.h)
  };
  z.e.show = function() {
    this.init();
    this.sa.F(!0)
  };
  var iH = {},
    iH = function() {
      z.G.call(this)
    };
  z.y(iH, z.Wj);
  iH.Jw = [
    ["需要详细阐述", "答案过于简短或表述不清晰，请完善答案。"],
    ["答非所问", "没有正面或直接回答问题，请修改答案。"],
    ["应作为问题的评论", "该内容是对问题本身的评论而不是回答，请改为发布到评论。"],
    ["应作为答案的评论", "该内容是对另外一个答案的评论或回应，而不是回答问题，请改为发布到评论。"],
    ["内容重复", "与已有答案重复，请修改答案。"],
    ["内容已过期", "答案的时效性已过，请更新答案。"],
    ["需要注明关联利益", "有广告、推销嫌疑，请注明作者与利益方的关系。"]
  ];
  iH.rk = null;
  iH.aa = function() {
    iH.rk || (iH.rk = new iH, iH.rk.init());
    return iH.rk
  };
  z.e = iH.prototype;
  z.e.init = function() {
    if (!this.h) {
      this.B();
      this.dc();
      var a = new Ix(this.h);
      Gn(a);
      a.GH = !0;
      a.Zm(!0);
      a.F(!1);
      a.IB = 0;
      a.W() && a.ga();
      z.Jx(a, new z.rg(13, 0, 0, -22));
      this.HB = a
    }
  };
  z.e.dc = function() {
    this.o().g(this.h, "click", this.AV)
  };
  z.e.AV = function(a) {
    "A" === a.target.tagName && (a = a.target.getAttribute("data-index"), this.MP.S_(a), this.HB.F(!1))
  };
  z.e.B = function() {
    var a = z.M("div", {
      id: "zh-answer-flag-popup",
      "class": "zg-r5px zu-hovercard-wrap"
    }, [z.M("div", "zg-r5px zu-hovercard-inner", [z.M("div", {
      id: "zh-answer-flag-popup-header"
    }, [z.M("a", {
      "class": "zg-right",
      href: "/question/19867017",
      target: "_blank"
    }, "这是什么？"), "选择一个理由："]), this.fK = z.M("div", {
      id: "zh-answer-flog-options-wrap"
    })]), z.M("div", "zu-hovercard-spin-top")]);
    z.A(iH.Jw, function(a, c) {
        var d = z.M("a", {
          href: "javascript:;",
          "class": "zm-menu-item-link"
        }, a[0]);
        d.setAttribute("data-index", c);
        this.fK.appendChild(d)
      },
      this);
    window.document.body.appendChild(a);
    this.h = a
  };
  z.e.show = function(a, b) {
    this.HB.setPosition(new z.Gx(a, 1));
    mE(this, b.W_());
    this.HB.F(!0);
    this.MP = b
  };
  var pE;
  z.y(nE, z.Wj);
  nE.prototype.init = function() {
    this.B();
    this.Rn()
  };
  nE.prototype.B = function() {
    this.h = z.M("div", null, [z.M("div", "zg-section", [z.M("div", null, "标记："), this.Zl = z.M("select")]), z.M("div", null, [z.M("div", null, "原因"), this.RB = z.M("textarea", {
      style: "width:96%;border:solid 1px #666;height:66px;padding:5px"
    })]), this.bo = z.M("div", "zm-command", [z.M("a", {
      "class": "zg-mr10",
      href: "javascript:void(0);",
      name: "cancel"
    }, "取消"), z.M("a", {
      "class": "zg-btn-blue",
      href: "javascript:void(0);",
      name: "confirm"
    }, "确定")])]);
    this.Zl.appendChild(z.M("option", {
      value: "no"
    }, "选择标记原因"));
    z.A(iH.Jw,
      function(a, b) {
        this.Zl.appendChild(z.M("option", {
          value: b
        }, a[0]))
      }, this);
    this.sa = new z.T(null);
    this.sa.Fa("标记答案");
    z.Kj(this.sa, null);
    this.sa.S().appendChild(this.h)
  };
  nE.prototype.Rn = function() {
    this.o().g(this.Zl, "change", function() {
      var a = this.Zl.value;
      this.RB.value = "no" === a ? "" : iH.Jw[+a][1]
    }).g(this.bo, "click", function(a) {
      "cancel" === a.target.name ? this.sa.F(!1) : this.RB.value && "no" !== this.Zl.value && (this.My = new z.wp(!0), this.o().g(this.My, "complete", function() {
        var a = z.Wn(this.My);
        a && !a.r ? (this.wj.innerHTML = "已经标记", this.sa.F(!1)) : z.V.message(a.msg)
      }), a = z.Ar(this.RB.value), this.My.ajax("/answer/flag", "answer_id\x3d" + this.WN + "\x26flag\x3d" + this.Zl.value + "\x26reason\x3d" +
        (0, window.encodeURIComponent)(a)))
    })
  };
  nE.prototype.show = function() {
    this.sa.F(!0)
  };
  z.wE = {
    digits: {
      required: "请填写数字验证码"
    },
    password: {
      required: "请填写密码"
    },
    password_repeat: {
      required: "请填写密码"
    },
    email: {
      required: "请填写邮箱"
    },
    phone_no: {
      required: "请填写手机号"
    }
  };
  z.x("ZH.ui.requestUnlock", z.vE);
  z.x("ZH.m", z.yE);
  z.y(z.zE, z.G);
  z.zE.prototype.show = function() {
    this.tf || (this.tf = this.Rx(), this.tf.g("hide", this.hR, !1, this));
    this.tf.F(!0)
  };
  z.zE.prototype.hide = function() {
    this.tf && this.tf.F(!1)
  };
  z.zE.prototype.Bb = function() {
    return !!this.tf && this.tf.W()
  };
  z.AE.prototype.Fa = function(a) {
    this.oj.Fa(a);
    return this
  };
  z.AE.prototype.Nd = function(a, b, c) {
    c = c || z.np();
    this.Yn.set(c, a);
    this.Xn[c] = b;
    return this
  };
  z.AE.prototype.hi = function(a) {
    z.hj(this.oj.pg(), a);
    return this
  };
  z.AE.prototype.ca = function(a) {
    this.oj.S().appendChild(a);
    return this
  };
  z.e = z.zE.prototype;
  z.e.bt = z.m(23);
  z.e.iS = function(a) {
    return (a = this.jo(a)) ? this.dispatchEvent(a) : !1
  };
  z.e.No = function() {
    return this.dispatchEvent("cancel")
  };
  z.e.D = function() {
    this.tf && (this.hide(), this.tf.dispose(), this.tf = null);
    z.zE.v.D.call(this)
  };
  z.e.hR = function() {
    this.dispatchEvent("afterhide")
  };
  z.y(z.EE, z.cB);
  z.e = z.EE.prototype;
  z.e.Xe = function(a) {
    return a == this.yP
  };
  z.e.execCommand = function(a, b) {
    return this.wf.apply(this, arguments)
  };
  z.e.PG = function() {
    return this.Ma
  };
  z.e.wf = function(a, b) {
    this.YK || GE(this);
    this.Ma || (this.Ma = this.Qx(z.Ie(this.G.sl), b));
    var c = z.FB(this.G);
    this.TK = eB(this);
    this.bL = c && new z.vv(c);
    Vu(this.G.ob.ab());
    z.ld(this.Ma, "afterhide", this.Mo, !1, this);
    this.G.th = !0;
    this.Ma.show();
    this.dispatchEvent("dialogOpened");
    z.GB(this.G);
    return !0
  };
  z.e.Mo = function() {
    this.G.th = !1;
    z.FE(this);
    this.TK();
    this.YK || GE(this);
    this.dispatchEvent("dialogClosed");
    z.GB(this.G);
    this.G.zs.selectionchange = (0, z.H)()
  };
  z.e.D = function() {
    GE(this);
    z.EE.v.D.call(this)
  };
  z.e.YK = !1;
  z.e.lA = !1;
  z.y(HE, z.zE);
  z.y(IE, z.Lc);
  z.e = HE.prototype;
  z.e.template = (0, z.lw)('\x3cdiv class\x3d"zm-img-uploader"\x3e\x3ciframe src\x3d"about:blank" name\x3d"av_up_frame" style\x3d"position: absolute; height: 0; width: 0; left: -9000px; "\x3e\x3c/iframe\x3e\x3cdiv class\x3d"zg-section zm-img-uploader-tab"\x3e\x3ca href\x3d"javascript:;" class\x3d"tab-nav selected"\x3e上传图片\x3c/a\x3e 或 \x3ca href\x3d"javascript:;" class\x3d"tab-nav"\x3e引用站外图片\x3c/a\x3e\x3c/div\x3e\x3cform class\x3d"zg-clear" target\x3d"av_up_frame" method\x3d"POST" enctype\x3d"multipart/form-data" action\x3d"\x3c%\x3d uploadURL %\x3e"\x3e\x3cdiv class\x3d"tab-content selected \x3c% if (canStylize) { %\x3einline\x3c% } %\x3e"\x3e\x3c% if (canStylize) { %\x3e\x3cinput type\x3d"file" name\x3d"upload_file" style\x3d"opacity:0;height:0;width:0;font-size:0;position:absolute;"\x3e\x3ca href\x3d"javascript:;" class\x3d"browser zg-btn-blue"\x3e选择图片\x3c/a\x3e\x3c% } else { %\x3e\x3cinput type\x3d"file" name\x3d"upload_file"\x3e\x3c% } %\x3e\x3c/div\x3e\x3cdiv class\x3d"tab-content"\x3e\x3cinput type\x3d"text" autocomplete\x3d"off" name\x3d"upload_file_url" class\x3d"zm-editable-editor-input zg-form-text-input"\x3e\x3ca href\x3d"javascript:;" class\x3d"insert zg-btn-blue zm-uploader-button-fix"\x3e确认\x3c/a\x3e\x3c/div\x3e\x3cspan style\x3d"display: none; " class\x3d"zm-img-uploader-loading"\x3e正在上传\x3c/span\x3e\x3cspan style\x3d"display: none; " class\x3d"zm-img-uploader-error"\x3e上传图片失败，请稍后重试\x3c/span\x3e\x3c/form\x3e\x3cdiv class\x3d"zg-gray"\x3e请不要上传与回答问题无关的图片，详细请看 \x3ca href\x3d"/question/20064580" target\x3d"_blank"\x3e知乎图片使用规范\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d"zm-command"\x3e\x3ca class\x3d"cancel" href\x3d"javascript:;"\x3e取消\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e');
  z.e.Rx = function() {
    var a = z.Ye(this.template({
      uploadURL: this.ir,
      canStylize: this.hP
    }));
    z.Db({
      form: "form",
      OC: ".zm-img-uploader-tab",
      Ch: ".zm-img-uploader-loading",
      vf: ".zm-img-uploader-error",
      QL: "input[type\x3dtext]",
      xo: "input[type\x3dfile]",
      VE: ".browser",
      Cx: ".cancel",
      rT: ".insert"
    }, function(b, d) {
      this[d] = (0, window.$)(b, a).get(0)
    }, this);
    this.U.g(z.W, "iframe_data", this.Ww).g(this.xo, "change", this.yW).g(this.rT, "click", this.sT).g(this.Cx, "click", function() {
      this.No();
      this.hide()
    }).g(this.OC, "click", function(a) {
      a =
        (0, window.$)(a.target);
      a.is("a") && !a.is(".selected") && JE(this, a.index())
    });
    this.vF = a;
    z.$m || (JE(this, 1), (0, window.$)(this.OC).replaceWith("\x3cstrong\x3e输入站外图片地址：\x3c/strong\x3e"));
    this.VE && this.U.g(this.VE, "click", function() {
      this.xo.click()
    });
    var b = new z.AE(this);
    b.Fa("插入图片").ca(this.vF);
    b = z.DE(b);
    z.Kj(b, null);
    return b
  };
  z.e.yW = function() {
    this.xo.value && (Rr(this.xo.value) ? (this.QL.value = "", z.P(this.Ch, !0), z.P(this.vf, !1), this.form.submit()) : KE(this, "图片不是 .jpg 或 .png 格式无法上传"))
  };
  z.e.sT = function() {
    var a = z.Ar(this.QL.value);
    a ? z.Ia(a, "http://") ? (this.xo.value = "", z.P(this.Ch, !0), z.P(this.vf, !1), this.form.submit()) : KE(this, "我们目前不支持该协议。") : KE(this, "请填写图片地址。")
  };
  z.e.Ww = function(a) {
    z.P(this.Ch, !1);
    this.fj(a.Pf)
  };
  z.e.fj = function(a) {
    a && !a.r ? (this.dispatchEvent(this.jo(a.msg)), this.hide()) : KE(this, a.msg)
  };
  z.e.jo = function(a) {
    return new IE(a)
  };
  z.e.D = function() {
    this.U.dispose();
    this.U = null;
    HE.v.D.call(this)
  };
  z.y(z.LE, z.EE);
  z.e = z.LE.prototype;
  z.e.Ad = z.hb("ImageDialogPlugin");
  z.e.wf = function(a, b) {
    var c = this.G;
    return c.Jf || (c.ng(), c.Jf) ? z.LE.v.wf.call(this, a, b) : !1
  };
  z.e.hk = function(a) {
    if (a && "mouseup" === a.type) {
      var b = a.target;
      b && "IMG" === b.nodeName && (a = z.av(b), a || (a = window.document.createElement("br"), z.df(a, b)), z.jv(a))
    }
  };
  z.e.Mo = function(a) {
    z.LE.v.Mo.call(this, a)
  };
  z.e.Qx = function(a) {
    a = new HE(a);
    this.U.g(a, "ok", this.Ro).g(a, "cancel", this.mz);
    return a
  };
  z.e.D = function() {
    z.LE.v.D.call(this);
    this.U.dispose()
  };
  z.e.Ro = function(a) {
    z.FE(this);
    var b = z.dB(this),
      c;
    c = a.hK ? b.B("IMG", {
      "class": "origin_image zh-lightbox-thumb",
      "data-original": a.hK,
      title: "点击查看原图",
      src: a.wm
    }) : b.B("IMG", {
      "class": "content_image",
      src: a.wm
    });
    a.EK && c.setAttribute("data-rawwidth", a.EK);
    a.DK && c.setAttribute("data-rawheight", a.DK);
    a = z.FB(this.G);
    if (z.tv(a)) a.Xi(c), z.C || (z.kv(c, !1), b.ab().focus()), z.GB(this.G), this.G.uf();
    else return null;
    this.U.removeAll()
  };
  z.e.mz = function() {
    this.U.removeAll()
  };
  var jH = z.w("Link");
  z.w("Edit Link");
  z.w("Text to display:");
  z.kH = z.w("Link to:");
  z.w("Web address");
  z.w("Link to a page or file somewhere else on the web");
  z.w("Test this link");
  z.w("{$startBold}Not sure what to put in the box?{$endBold} First, find the page on the web that you want to link to. (A {$searchEngineLink}search engine{$endLink} might be useful.) Then, copy the web address from the box in your browser's address bar, and paste it into the box above.", {
    startBold: "\x3cb\x3e",
    endBold: "\x3c/b\x3e",
    searchEngineLink: "\x3ca href\x3d'http://www.google.com/' target\x3d'_new'\x3e",
    endLink: "\x3c/a\x3e"
  });
  z.w("To what URL should this link go?");
  z.w("Email address");
  z.w("Link to an email address");
  z.w("Invalid email address");
  z.w("To what email address should this link?");
  z.w("{$preb}Be careful.{$postb} Remember that any time you include an email address on a web page, nasty spammers can find it too.", {
    preb: "\x3cb\x3e",
    postb: "\x3c/b\x3e"
  });
  z.w("Open this link in a new window");
  z.w("Image");
  z.y(ME, z.Vt);
  ME.prototype.next = function() {
    do ME.v.next.call(this); while (-1 == this.$b);
    return this.node
  };
  z.y(z.NE, Up);
  z.ka(z.NE);
  var RE = 0;
  z.e = z.NE.prototype;
  z.e.B = function(a) {
    var b = this.og(a);
    a = a.K().B("DIV", b ? b.join(" ") : null, OE(this, a.$a(), a.oh(), a.K()));
    z.bj(a, "grid");
    return a
  };
  z.e.Sx = function(a, b) {
    var c = b.B("TABLE", this.V() + "-table", b.B("TBODY", this.V() + "-body", a));
    c.cellSpacing = 0;
    c.cellPadding = 0;
    return c
  };
  z.e.Ob = function() {
    return !1
  };
  z.e.w = function() {
    return null
  };
  z.e.ca = function(a, b) {
    if (a) {
      var c = z.Me("TBODY", this.V() + "-body", a)[0];
      if (c) {
        var d = 0;
        z.A(c.rows, function(a) {
          z.A(a.cells, function(a) {
            z.bf(a);
            if (b) {
              var c = b[d++];
              c && a.appendChild(c)
            }
          })
        });
        if (d < b.length) {
          for (var f = [], g = z.Ie(a), h = c.rows[0].cells.length; d < b.length;) {
            var k = b[d++];
            f.push(PE(this, k, g));
            f.length == h && (k = QE(this, f, g), c.appendChild(k), f.length = 0)
          }
          if (0 < f.length) {
            for (; f.length < h;) f.push(PE(this, "", g));
            k = QE(this, f, g);
            c.appendChild(k)
          }
        }
      }
      z.Do(a, !0, z.B)
    }
  };
  z.e.V = function() {
    return "goog-palette"
  };
  z.y(TE, z.G);
  z.e = TE.prototype;
  z.e.Oh = null;
  z.e.Sf = null;
  z.e.gm = function() {
    return this.Ye.length
  };
  z.e.Fi = function(a) {
    return this.Ye[a] || null
  };
  z.e.Ha = function(a) {
    this.yj(a, this.gm())
  };
  z.e.yj = function(a, b) {
    a && (this.Ym(a, !1), z.xb(this.Ye, b, 0, a))
  };
  z.e.removeItem = function(a) {
    a && z.tb(this.Ye, a) && a == this.Oh && (this.Oh = null, this.dispatchEvent("select"))
  };
  z.e.Bf = function() {
    return this.Oh
  };
  z.e.ib = function() {
    return z.vb(this.Ye)
  };
  z.e.Tf = function(a) {
    a != this.Oh && (this.Ym(this.Oh, !1), this.Oh = a, this.Ym(a, !0));
    this.dispatchEvent("select")
  };
  z.e.ak = function() {
    var a = this.Oh;
    return a ? z.kb(this.Ye, a) : -1
  };
  z.e.Fq = function(a) {
    this.Tf(this.Fi(a))
  };
  z.e.clear = function() {
    var a = this.Ye;
    if (!z.ma(a))
      for (var b = a.length - 1; 0 <= b; b--) delete a[b];
    a.length = 0;
    this.Oh = null
  };
  z.e.D = function() {
    TE.v.D.call(this);
    delete this.Ye;
    this.Oh = null
  };
  z.e.Ym = function(a, b) {
    a && ("function" == typeof this.Sf ? this.Sf(a, b) : "function" == typeof a.rC && a.rC(b))
  };
  z.y(z.VE, cq);
  z.e = z.VE.prototype;
  z.e.Hc = null;
  z.e.Ya = -1;
  z.e.la = null;
  z.e.D = function() {
    z.VE.v.D.call(this);
    this.la && (this.la.dispose(), this.la = null);
    this.Hc = null;
    this.no.dispose()
  };
  z.e.$m = function(a) {
    z.VE.v.$m.call(this, a);
    YE(this);
    this.la ? (this.la.clear(), UE(this.la, a)) : (this.la = new TE(a), a = (0, z.t)(this.Ym, this), this.la.Sf = a, this.o().g(this.la, "select", this.hk));
    this.Ya = -1
  };
  z.e.nh = function() {
    return ""
  };
  z.e.xq = function() {};
  z.e.Bd = function(a) {
    z.VE.v.Bd.call(this, a);
    var b = SE(this.M, this, a.target);
    b && a.relatedTarget && z.nf(b, a.relatedTarget) || b == ZE(this) || (a = this.$a(), this.Eb(a ? z.kb(a, b) : -1))
  };
  z.e.ue = function(a) {
    z.VE.v.ue.call(this, a);
    if (this.Dc() && (a = SE(this.M, this, a.target), a != ZE(this))) {
      var b = this.$a();
      this.Eb(b ? z.kb(b, a) : -1)
    }
  };
  z.e.$d = function(a) {
    var b = ZE(this);
    return b ? (this.Tf(b), z.VE.v.$d.call(this, a)) : !1
  };
  z.e.fc = function(a) {
    var b = this.$a(),
      b = b ? b.length : 0,
      c = this.Hc.width;
    if (0 == b || !this.isEnabled()) return !1;
    if (13 == a.keyCode || 32 == a.keyCode) return this.$d(a);
    if (36 == a.keyCode) return this.Eb(0), !0;
    if (35 == a.keyCode) return this.Eb(b - 1), !0;
    var d = 0 > this.Ya ? this.ak() : this.Ya;
    switch (a.keyCode) {
      case 37:
        if (-1 == d || 0 == d) d = b;
        this.Eb(d - 1);
        a.preventDefault();
        return !0;
      case 39:
        return d == b - 1 && (d = -1), this.Eb(d + 1), a.preventDefault(), !0;
      case 38:
        -1 == d && (d = b + c - 1);
        if (d >= c) return this.Eb(d - c), a.preventDefault(), !0;
        break;
      case 40:
        if (-1 ==
          d && (d = -c), d < b - c) return this.Eb(d + c), a.preventDefault(), !0
    }
    return !1
  };
  z.e.hk = function() {};
  z.e.oh = function() {
    return this.Hc
  };
  z.e.Eb = function(a) {
    a != this.Ya && ($E(this, this.Ya, !1), this.CA = this.Ya, this.Ya = a, $E(this, a, !0), this.dispatchEvent("j"))
  };
  z.e.ak = function() {
    return this.la ? this.la.ak() : -1
  };
  z.e.Bf = function() {
    return this.la ? this.la.Bf() : null
  };
  z.e.Fq = function(a) {
    this.la && this.la.Fq(a)
  };
  z.e.Tf = function(a) {
    this.la && this.la.Tf(a)
  };
  z.e.Uc = function(a) {
    a && -1 == this.Ya ? this.Eb(-1 < this.CA ? this.CA : 0) : a || this.Eb(-1);
    z.VE.v.Uc.call(this, a)
  };
  z.e.Ym = function(a, b) {
    if (this.m() && a) {
      var c = a.parentNode;
      z.zo(c, this.M.V() + "-cell-selected", b);
      z.cj(c, "selected", b)
    }
  };
  z.y(WE, cq);
  z.y(z.aF, Qz);
  z.ka(z.aF);
  z.aF.prototype.B = function(a) {
    return a.K().B("DIV", this.og(a).join(" ") + " goog-inline-block", " ")
  };
  z.aF.prototype.w = function(a, b) {
    b = z.aF.v.w.call(this, a, b);
    z.hj(b, "goog-inline-block");
    return b
  };
  z.aF.prototype.V = function() {
    return "goog-toolbar-separator"
  };
  z.y(z.bF, ds);
  z.ka(z.bF);
  z.bF.prototype.Co = function(a) {
    return "HR" == a.tagName ? new z.Rz(z.aF.aa()) : z.bF.v.Co.call(this, a)
  };
  z.bF.prototype.V = function() {
    return "goog-toolbar"
  };
  z.bF.prototype.OG = function() {
    return z.kG
  };
  z.y(cF, Xz);
  z.ka(cF);
  cF.prototype.V = function() {
    return "goog-toolbar-button"
  };
  z.y(z.dF, z.jq);
  z.aq("goog-toolbar-button", function() {
    return new z.dF(null)
  });
  z.y(eF, Zz);
  z.ka(eF);
  eF.prototype.createCaption = function(a, b) {
    return eF.v.createCaption.call(this, fF(a, b), b)
  };
  eF.prototype.Da = function(a, b) {
    a && gF(this.S(a), b)
  };
  eF.prototype.Ue = function(a) {
    var b = a.m();
    this.Da(b, a.X());
    z.hj(b, "goog-color-menu-button");
    eF.v.Ue.call(this, a)
  };
  z.y(hF, z.VE);
  hF.prototype.Au = null;
  hF.prototype.Yt = null;
  hF.prototype.gz = function() {
    var a = this.Bf();
    return a ? (a = Jo(a, "background-color"), jF(a)) : null
  };
  hF.prototype.Eq = function(a) {
    a = jF(a);
    this.Au || (this.Au = z.mb(this.ks, function(a) {
      return jF(a)
    }));
    this.Fq(a ? z.kb(this.Au, a) : -1)
  };
  z.y(kF, z.aA);
  var mF = {
    WZ: "#000 #444 #666 #999 #ccc #eee #f3f3f3 #fff".split(" "),
    q_: "#f00 #f90 #ff0 #0f0 #0ff #00f #90f #f0f".split(" "),
    m_: "#f4cccc #fce5cd #fff2cc #d9ead3 #d0e0e3 #cfe2f3 #d9d2e9 #ead1dc #ea9999 #f9cb9c #ffe599 #b6d7a8 #a2c4c9 #9fc5e8 #b4a7d6 #d5a6bd #e06666 #f6b26b #ffd966 #93c47d #76a5af #6fa8dc #8e7cc3 #c27ba0 #cc0000 #e69138 #f1c232 #6aa84f #45818e #3d85c6 #674ea7 #a64d79 #990000 #b45f06 #bf9000 #38761d #134f5c #0b5394 #351c75 #741b47 #660000 #783f04 #7f6000 #274e13 #0c343d #073763 #20124d #4c1130".split(" ")
  };
  z.e = kF.prototype;
  z.e.gz = function() {
    return this.X()
  };
  z.e.Eq = function(a) {
    this.Da(a)
  };
  z.e.Da = function(a) {
    for (var b = 0, c; c = this.Fi(b); b++) "function" == typeof c.Eq && c.Eq(a);
    kF.v.Da.call(this, a)
  };
  z.e.Qo = function(a) {
    "function" == typeof a.target.gz ? this.Da(a.target.gz()) : "none" == a.target.X() && this.Da(null);
    kF.v.Qo.call(this, a);
    a.stopPropagation();
    this.dispatchEvent("action")
  };
  z.e.Jb = function(a, b) {
    a && 0 == this.gm() && (this.Rh(lF(this.K())), this.Da(this.X()));
    kF.v.Jb.call(this, a, b)
  };
  z.aq("goog-color-menu-button", function() {
    return new kF(null)
  });
  z.y(nF, Zz);
  z.ka(nF);
  nF.prototype.V = function() {
    return "goog-toolbar-menu-button"
  };
  z.y(oF, nF);
  z.ka(oF);
  oF.prototype.createCaption = function(a, b) {
    return $z(fF(a, b), this.V(), b)
  };
  oF.prototype.Da = function(a, b) {
    a && gF(this.S(a), b)
  };
  oF.prototype.Ue = function(a) {
    this.Da(a.m(), a.X());
    z.hj(a.m(), "goog-toolbar-color-menu-button");
    oF.v.Ue.call(this, a)
  };
  z.y(pF, kF);
  z.aq("goog-toolbar-color-menu-button", function() {
    return new pF(null)
  });
  z.y(qF, z.aA);
  z.aq("goog-toolbar-menu-button", function() {
    return new qF(null)
  });
  z.y(rF, z.aA);
  z.e = rF.prototype;
  z.e.la = null;
  z.e.C = function() {
    rF.v.C.call(this);
    tF(this);
    wF(this)
  };
  z.e.T = function(a) {
    rF.v.T.call(this, a);
    (a = this.nh()) ? sF(this, a): this.Bf() || this.Fq(0)
  };
  z.e.D = function() {
    rF.v.D.call(this);
    this.la && (this.la.dispose(), this.la = null);
    this.fy = null
  };
  z.e.Qo = function(a) {
    this.Tf(a.target);
    rF.v.Qo.call(this, a);
    a.stopPropagation();
    this.dispatchEvent("action")
  };
  z.e.hk = function() {
    var a = this.Bf();
    rF.v.Da.call(this, a && a.X());
    tF(this)
  };
  z.e.Rh = function(a) {
    var b = rF.v.Rh.call(this, a);
    a != b && (this.la && this.la.clear(), a && (this.la ? z.dh(a, function(a) {
      vF(a);
      this.la.Ha(a)
    }, this) : uF(this, a)));
    return b
  };
  z.e.Ha = function(a) {
    vF(a);
    rF.v.Ha.call(this, a);
    this.la ? this.la.Ha(a) : uF(this, this.eb());
    xF(this)
  };
  z.e.yj = function(a, b) {
    vF(a);
    rF.v.yj.call(this, a, b);
    this.la ? this.la.yj(a, b) : uF(this, this.eb())
  };
  z.e.removeItem = function(a) {
    rF.v.removeItem.call(this, a);
    this.la && this.la.removeItem(a)
  };
  z.e.Tf = function(a) {
    if (this.la) {
      var b = this.Bf();
      this.la.Tf(a);
      a != b && this.dispatchEvent("change")
    }
  };
  z.e.Fq = function(a) {
    this.la && this.Tf(this.la.Fi(a))
  };
  z.e.Da = function(a) {
    if (null != a && this.la)
      for (var b = 0, c; c = this.la.Fi(b); b++)
        if (c && "function" == typeof c.X && c.X() == a) {
          this.Tf(c);
          return
        }
    this.Tf(null)
  };
  z.e.X = function() {
    var a = this.Bf();
    return a ? a.X() : null
  };
  z.e.Bf = function() {
    return this.la ? this.la.Bf() : null
  };
  z.e.ak = function() {
    return this.la ? this.la.ak() : -1
  };
  z.e.Jb = function(a, b) {
    rF.v.Jb.call(this, a, b);
    this.Bb() ? this.eb().Eb(this.ak()) : xF(this)
  };
  z.aq("goog-select", function() {
    return new rF(null)
  });
  z.y(zF, rF);
  z.aq("goog-toolbar-select", function() {
    return new zF(null)
  });
  var EF = [10, 10, 13, 16, 18, 24, 32, 48];
  var lH, mH, OF, NF, nH, oH, pH, qH, DF, rH, sH, tH, uH, GF, vH, wH, xH, yH, zH, AH, BH, CH, DH, EH, FH, GH, HH, IH, JH, KH, LH, MH, NH, OH, PH, QH, RH, SH, TH, UH, VH, WH, XH, YH, aI, bI, cI;
  for (lH = z.w("Normal"), mH = z.w("Normal / serif"), OF = [{
      caption: lH,
      value: "arial,sans-serif"
    }, {
      caption: mH,
      value: "times new roman,serif"
    }, {
      caption: "Courier New",
      value: "courier new,monospace"
    }, {
      caption: "Georgia",
      value: "georgia,serif"
    }, {
      caption: "Trebuchet",
      value: "trebuchet ms,sans-serif"
    }, {
      caption: "Verdana",
      value: "verdana,sans-serif"
    }], NF = {
      ja: [{
        caption: "ＭＳ Ｐゴシック",
        value: "ms pgothic,sans-serif"
      }, {
        caption: "ＭＳ Ｐ明朝",
        value: "ms pmincho,serif"
      }, {
        caption: "ＭＳ ゴシック",
        value: "ms gothic,monospace"
      }],
      ko: [{
        caption: "굴림",
        value: "gulim,sans-serif"
      }, {
        caption: "바탕",
        value: "batang,serif"
      }, {
        caption: "굴림체",
        value: "gulimche,monospace"
      }],
      "zh-tw": [{
        caption: "新細明體",
        value: "pmingliu,serif"
      }, {
        caption: "細明體",
        value: "mingliu,serif"
      }],
      "zh-cn": [{
        caption: "宋体",
        value: "simsun,serif"
      }, {
        caption: "黑体",
        value: "simhei,sans-serif"
      }, {
        caption: "MS Song",
        value: "ms song,monospace"
      }]
    }, nH = z.w("Small"), oH = z.w("Normal"), pH = z.w("Large"), qH = z.w("Huge"), DF = [{
      caption: nH,
      value: 1
    }, {
      caption: oH,
      value: 2
    }, {
      caption: pH,
      value: 4
    }, {
      caption: qH,
      value: 6
    }], rH = z.w("Heading"), sH = z.w("Subheading"), tH = z.w("Minor heading"),
    uH = z.w("Normal"), GF = [{
      caption: rH,
      Ba: "H2"
    }, {
      caption: sH,
      Ba: "H3"
    }, {
      caption: tH,
      Ba: "H4"
    }, {
      caption: uH,
      Ba: "P"
    }], vH = z.w("Format"), wH = z.w("Format"), xH = z.w("Undo"), yH = z.w("Redo"), zH = z.w("Font"), AH = z.w("Font size"), BH = z.w("Text color"), CH = z.w("Bold"), DH = z.w("Italic"), EH = z.w("Underline"), FH = z.w("Text background color"), GH = z.w("Add or remove link"), HH = z.w("Numbered list"), IH = z.w("Bullet list"), JH = z.w("Decrease indent"), KH = z.w("Increase indent"), LH = z.w("Align left"), MH = z.w("Align center"), NH = z.w("Align right"),
    OH = z.w("Justify"), PH = z.w("Remove formatting"), QH = z.w("Insert image"), RH = z.w("Strikethrough"), SH = z.w("Left-to-right"), TH = z.w("Right-to-left"), UH = z.w("Quote"), VH = z.w("Edit HTML source"), WH = z.w("Subscript"), XH = z.w("Superscript"), YH = z.w("Edit HTML"), z.$H = {}, aI = [{
      Ba: "+undo",
      na: xH,
      Ua: "tr-icon tr-undo",
      factory: PF,
      qb: !0
    }, {
      Ba: "+redo",
      na: yH,
      Ua: "tr-icon tr-redo",
      factory: PF,
      qb: !0
    }, {
      Ba: "+fontName",
      na: zH,
      Ua: "tr-fontName",
      factory: function(a, b, c, d, f, g) {
        var h = KF(a, b, c, d, f, g);
        MF(h);
        sF(h, lH);
        z.hj(h.eb().S(), "goog-menu-noaccel");
        h.lj = function(a) {
          var b = null;
          a && 0 < a.length && (b = z.ah(h.eb(), AF(a)));
          b != h.Bf() && h.Tf(b)
        };
        return h
      },
      qb: !0
    }, {
      Ba: "+fontSize",
      na: AH,
      Ua: "tr-fontSize",
      factory: function(a, b, c, d, f, g) {
        var h = KF(a, b, c, d, f, g);
        CF(h);
        sF(h, oH);
        z.hj(h.eb().S(), "goog-menu-noaccel");
        h.lj = function(a) {
          var b;
          if (b = z.oa(a)) b = a.match(XF), b = "px" == (b && b[0] || null);
          b && (b = EF, a = Array.prototype.lastIndexOf.call(b, (0, window.parseInt)(a, 10), b.length - 1));
          a = 0 < a ? a : null;
          a != h.X() && h.Da(a)
        };
        return h
      },
      qb: !0
    }, {
      Ba: "+bold",
      na: CH,
      Ua: "tr-icon tr-bold",
      qb: !0
    }, {
      Ba: "+italic",
      na: DH,
      Ua: "tr-icon tr-italic",
      qb: !0
    }, {
      Ba: "+underline",
      na: EH,
      Ua: "tr-icon tr-underline",
      qb: !0
    }, {
      Ba: "+foreColor",
      na: BH,
      Ua: "tr-icon tr-foreColor",
      factory: function(a, b, c, d, f, g) {
        a = LF(a, b, c, d, f, g);
        a.Eq("#000");
        a.lj = z.Ba(QF, a);
        return a
      },
      qb: !0
    }, {
      Ba: "+backColor",
      na: FH,
      Ua: "tr-icon tr-backColor",
      factory: function(a, b, c, d, f, g) {
        a = LF(a, b, c, d, f, g);
        a.Eq("#FFF");
        a.lj = z.Ba(QF, a);
        return a
      },
      qb: !0
    }, {
      Ba: "+link",
      na: GH,
      caption: jH,
      Ua: "tr-link",
      qb: !0
    }, {
      Ba: "+insertOrderedList",
      na: HH,
      Ua: "tr-icon tr-insertOrderedList",
      qb: !0
    }, {
      Ba: "+insertUnorderedList",
      na: IH,
      Ua: "tr-icon tr-insertUnorderedList",
      qb: !0
    }, {
      Ba: "+outdent",
      na: JH,
      Ua: "tr-icon tr-outdent",
      factory: z.HF
    }, {
      Ba: "+indent",
      na: KH,
      Ua: "tr-icon tr-indent",
      factory: z.HF
    }, {
      Ba: "+justifyLeft",
      na: LH,
      Ua: "tr-icon tr-justifyLeft",
      qb: !0
    }, {
      Ba: "+justifyCenter",
      na: MH,
      Ua: "tr-icon tr-justifyCenter",
      qb: !0
    }, {
      Ba: "+justifyRight",
      na: NH,
      Ua: "tr-icon tr-justifyRight",
      qb: !0
    }, {
      Ba: "+justifyFull",
      na: OH,
      Ua: "tr-icon tr-justifyFull",
      qb: !0
    }, {
      Ba: "+removeFormat",
      na: PH,
      Ua: "tr-icon tr-removeFormat",
      factory: z.HF
    }, {
      Ba: "image",
      na: QH,
      Ua: "tr-icon tr-image",
      factory: z.HF
    }, {
      Ba: "+strikeThrough",
      na: RH,
      Ua: "tr-icon tr-strikeThrough",
      qb: !0
    }, {
      Ba: "+subscript",
      na: WH,
      Ua: "tr-icon tr-subscript",
      qb: !0
    }, {
      Ba: "+superscript",
      na: XH,
      Ua: "tr-icon tr-superscript",
      qb: !0
    }, {
      Ba: "ltr",
      na: SH,
      Ua: "tr-icon tr-ltr",
      qb: !0
    }, {
      Ba: "rtl",
      na: TH,
      Ua: "tr-icon tr-rtl",
      factory: function(a, b, c, d, f, g) {
        var h = z.JF(a, b, c, d, f, g);
        h.lj = function(a) {
          a = !!a;
          z.zo(h.getParent().m(), "tr-rtl-mode", a);
          h.tc(a)
        };
        return h
      },
      qb: !0
    }, {
      Ba: "+BLOCKQUOTE",
      na: UH,
      Ua: "tr-icon tr-BLOCKQUOTE",
      qb: !0
    }, {
      Ba: "+formatBlock",
      na: vH,
      caption: wH,
      Ua: "tr-formatBlock",
      factory: function(a, b, c, d, f, g) {
        var h = KF(a, b, c, d, f, g);
        FF(h);
        sF(h, uH);
        z.hj(h.eb().S(), "goog-menu-noaccel");
        h.lj = function(a) {
          a = a && 0 < a.length ? a : null;
          a != h.X() && h.Da(a)
        };
        return h
      },
      qb: !0
    }, {
      Ba: "editHtml",
      na: VH,
      caption: YH,
      Ua: "tr-editHtml",
      factory: z.HF
    }], bI = 0, cI; cI = aI[bI]; bI++) z.$H[cI.Ba] = cI;
  aI = null;
  var dI = {};
  dI.track = Pr;
  z.y(z.RF, z.cB);
  z.Ca(z.RF.prototype, dI);
  z.RF.prototype.defaults = {
    bl: null,
    title: "Distraction Free Mode",
    RO: "back",
    vX: "publish",
    Ao: "zu-editing-distraction-free",
    pY: "sticky-goog-scrollfloater",
    OY: "zm-editable-toolbar-container"
  };
  z.RF.prototype.Ad = z.hb("FullScreenPlugin");
  z.$H.toggleFullScreen = {
    Ba: "toggleFullScreen",
    na: "写作模式",
    Ua: "tr-icon tr-max",
    factory: z.HF
  };
  z.e = z.RF.prototype;
  z.e.Xe = z.Ba(z.co, {
    v_: "toggleFullScreen",
    PZ: "enterFullScreen",
    QZ: "exitFullScreen"
  });
  z.e.D = function() {
    this.ea.dispose();
    z.N(this.h);
    this.H = this.Yq = this.Ac = this.Kb = this.h = null;
    z.RF.v.D.call(this)
  };
  z.e.zx = function() {
    var a = this.H,
      b = window.document.createElement("div");
    b.id = "zu-distraction-free-editor";
    b.innerHTML = '\x3cdiv class\x3d"header"\x3e\x3cdiv class\x3d"wrapper"\x3e\x3ch1 class\x3d"title"\x3e' + a.title + '\x3c/h1\x3e\x3ca href\x3d"#" class\x3d"' + a.RO + '" name\x3d"return"\x3e返回\x3c/a\x3e\x3ca href\x3d"#" class\x3d"' + a.vX + '" name\x3d"save"\x3e发布\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"toolbar"\x3e\x3cdiv class\x3d"tools"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"content" class\x3d"grid"\x3e\x3c/div\x3e';
    window.document.body.appendChild(b);
    this.ea.g(z.L("back", b), "click", function(a) {
      a.preventDefault();
      VF(this)
    });
    this.ea.g(z.L("publish", b), "click", function(a) {
      a.preventDefault();
      this.dispatchEvent("save") && VF(this)
    });
    this.h = b;
    this.Ac = z.L("content", b);
    this.Yq = z.M("div", {
      className: "toolbar-info"
    });
    this.H.bl || (this.H.bl = this.G.Ka)
  };
  z.e.wf = function(a) {
    this.h || this.zx();
    switch (a) {
      case "enterFullScreen":
        SF(this);
        break;
      case "exitFullScreen":
        VF(this);
        break;
      case "toggleFullScreen":
        z.U.has(window.document.body, this.H.Ao) ? VF(this) : SF(this)
    }
  };
  z.e.NJ = function() {
    z.U.has(window.document.body, this.H.Ao) ? VF(this) : "writing" === window.location.hash.slice(1) && SF(this)
  };
  z.e.Wp = function(a) {
    27 === a.keyCode && this.dispatchEvent("shouldExitFullScreenOnEscape") && VF(this)
  };
  z.e.nL = function(a) {
    z.U[a ? "add" : "remove"](this.Kb, this.H.pY)
  };
  z.y(z.WF, z.Q);
  z.WF.prototype.C = function() {
    this.o().g(this.h, "click", this.Wa)
  };
  z.WF.prototype.Wa = function(a) {
    var b = z.Mr(this.h, a.target);
    this.Zn && this.Zn(b);
    b && b.name && "focus" === b.name && (0, z.QG)(b, this.Sy, function() {
      b.getAttribute("data-followme") && (z.U.has(b, "zg-btn-follow") ? b.setAttribute("data-tooltip", "s$b$对方已关注你") : b.setAttribute("data-tooltip", "s$b$已互相关注"))
    }, this.Ry, {
      T_: "question" === this.Sy ? "关注问题" : null
    })
  };
  z.WF.prototype.lC = z.m(49);
}).call(this, __z_z__);
