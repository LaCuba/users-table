;(() => {
  "use strict"
  var n = {
      280: (n, e, t) => {
        t.d(e, { Z: () => s })
        var r = t(645),
          i = t.n(r)()(function (n) {
            return n[1]
          })
        i.push([
          n.id,
          "/* Filter */\n\n.filter {\n  width: 600px;\n  margin: 0 auto;\n  margin-bottom: 40px;\n  display: grid;\n  grid-template-columns: 1fr 30px;\n}\n\n.filter-input-container {\n  display: block;\n\n  border: solid 2px #e6ecf5;\n  border-right: none;\n}\n\n.filter-input {\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n\n  outline: none;\n\n  padding: 10px 10px;\n  border: none;\n\n  font-size: 16px;\n  font-weight: 500;\n}\n\n.filter-cancel-btn-container {\n  border-right: solid 2px #e6ecf5;\n  border-top: solid 2px #e6ecf5;\n  border-bottom: solid 2px #e6ecf5;\n}\n\n.filter-cancel-btn {\n  width: 100%;\n  height: 100%;\n  background-color: #fff;\n  border: none;\n  cursor: pointer;\n\n  padding-left: 5px;\n  padding-right: 10px;\n\n  font-size: 14px;\n  font-weight: 100;\n}\n\n.filter-btn-container {\n  border: solid 2px #ccc8c8;\n}\n",
          "",
        ])
        const s = i
      },
      747: (n, e, t) => {
        t.d(e, { Z: () => s })
        var r = t(645),
          i = t.n(r)()(function (n) {
            return n[1]
          })
        i.push([
          n.id,
          ".container {\n  box-sizing: border-box;\n  display: grid;\n  justify-items: start;\n  width: 265px;\n  background-color: #fff;\n  border: solid 1px #e6ecf5;\n  padding: 20px;\n}\n\n.info {\n  width: 100%;\n}\n\n.avatar {\n  width: 100%;\n  text-align: center;\n  position: relative;\n}\n\n.tooltip-avatar {\n  visibility: hidden;\n  width: 245px;\n  text-align: center;\n  border-radius: 6px;\n  padding: 5px 0;\n\n  position: absolute;\n  top: -5px;\n  left: -10px;\n  z-index: 100;\n}\n\n.avatar-min {\n  width: 70px;\n  height: 70px;\n  border-radius: 90px;\n}\n\n.avatar-max {\n  width: 220px;\n  height: auto;\n  border-radius: 10px;\n}\n\n.avatar:hover .tooltip-avatar {\n  visibility: visible;\n}\n\n.name h3 {\n  max-width: 225px;\n  padding-bottom: 5px;\n\n  text-align: center;\n  color: #515465;\n  font-size: 20px;\n  font-weight: 700;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.location {\n  width: 100%;\n  text-align: center;\n  padding-bottom: 15px;\n  border-bottom: solid 1px #e6ecf5;\n}\n\n.location-content {\n  color: #888da8;\n  font-size: 15px;\n  font-weight: 500;\n  max-width: 225px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.title {\n  font-size: 16px;\n  font-size: 500;\n  color: #515465;\n\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.content {\n  max-width: 225px;\n  margin-bottom: 5px;\n  font-size: 15px;\n  font-weight: 600;\n  color: #888da8;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.email {\n  width: 100%;\n  text-align: center;\n  padding-top: 15px;\n  position: relative;\n}\n\n.tooltip-email {\n  display: block;\n  visibility: hidden;\n  width: 100%;\n  background-color: #edf2f6;\n  padding: 5px 0;\n  overflow-wrap: break-word;\n\n  position: absolute;\n  top: 25px;\n  z-index: 100;\n}\n\n.email:hover .tooltip-email {\n  visibility: visible;\n}\n\n.phone {\n  width: 100%;\n  text-align: center;\n}\n\n.registerDate {\n  width: 100%;\n  text-align: center;\n}\n\n.message-filter {\n  margin: 0 auto;\n  font-size: 18px;\n  font-weight: 600;\n  text-align: center;\n}\n",
          "",
        ])
        const s = i
      },
      28: (n, e, t) => {
        t.d(e, { Z: () => s })
        var r = t(645),
          i = t.n(r)()(function (n) {
            return n[1]
          })
        i.push([
          n.id,
          "html,\nbody,\ndiv,\nspan,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nimg,\nheader,\nnav,\nul,\nli {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n}\n\nhtml {\n  min-width: 100%;\n  height: 100%;\n  min-width: 1120px;\n  min-height: 100vh;\n  background-color: #edf2f6;\n}\n\n.body {\n  padding: 50px 0;\n}\n",
          "",
        ])
        const s = i
      },
      645: (n) => {
        n.exports = function (n) {
          var e = []
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var t = n(e)
                return e[2] ? "@media ".concat(e[2], " {").concat(t, "}") : t
              }).join("")
            }),
            (e.i = function (n, t, r) {
              "string" == typeof n && (n = [[null, n, ""]])
              var i = {}
              if (r)
                for (var s = 0; s < this.length; s++) {
                  var a = this[s][0]
                  null != a && (i[a] = !0)
                }
              for (var o = 0; o < n.length; o++) {
                var l = [].concat(n[o])
                ;(r && i[l[0]]) ||
                  (t &&
                    (l[2]
                      ? (l[2] = "".concat(t, " and ").concat(l[2]))
                      : (l[2] = t)),
                  e.push(l))
              }
            }),
            e
          )
        }
      },
      695: (n) => {
        var e = {}
        n.exports = function (n) {
          if (void 0 === e[n]) {
            var t = document.querySelector(n)
            if (
              window.HTMLIFrameElement &&
              t instanceof window.HTMLIFrameElement
            )
              try {
                t = t.contentDocument.head
              } catch (n) {
                t = null
              }
            e[n] = t
          }
          return e[n]
        }
      },
      379: (n) => {
        var e = []
        function t(n) {
          for (var t = -1, r = 0; r < e.length; r++)
            if (e[r].identifier === n) {
              t = r
              break
            }
          return t
        }
        function r(n, r) {
          for (var s = {}, a = [], o = 0; o < n.length; o++) {
            var l = n[o],
              c = r.base ? l[0] + r.base : l[0],
              d = s[c] || 0,
              u = "".concat(c, " ").concat(d)
            s[c] = d + 1
            var p = t(u),
              h = { css: l[1], media: l[2], sourceMap: l[3] }
            ;-1 !== p
              ? (e[p].references++, e[p].updater(h))
              : e.push({ identifier: u, updater: i(h, r), references: 1 }),
              a.push(u)
          }
          return a
        }
        function i(n, e) {
          var t = e.domAPI(e)
          return (
            t.update(n),
            function (e) {
              if (e) {
                if (
                  e.css === n.css &&
                  e.media === n.media &&
                  e.sourceMap === n.sourceMap
                )
                  return
                t.update((n = e))
              } else t.remove()
            }
          )
        }
        n.exports = function (n, i) {
          var s = r((n = n || []), (i = i || {}))
          return function (n) {
            n = n || []
            for (var a = 0; a < s.length; a++) {
              var o = t(s[a])
              e[o].references--
            }
            for (var l = r(n, i), c = 0; c < s.length; c++) {
              var d = t(s[c])
              0 === e[d].references && (e[d].updater(), e.splice(d, 1))
            }
            s = l
          }
        }
      },
      216: (n) => {
        n.exports = function (n) {
          var e = document.createElement("style")
          return n.setAttributes(e, n.attributes), n.insert(e), e
        }
      },
      795: (n) => {
        n.exports = function (n) {
          var e = n.insertStyleElement(n)
          return {
            update: function (t) {
              !(function (n, e, t) {
                var r = t.css,
                  i = t.media,
                  s = t.sourceMap
                i ? n.setAttribute("media", i) : n.removeAttribute("media"),
                  s &&
                    "undefined" != typeof btoa &&
                    (r +=
                      "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                        btoa(unescape(encodeURIComponent(JSON.stringify(s)))),
                        " */"
                      )),
                  e.styleTagTransform(r, n)
              })(e, n, t)
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1
                n.parentNode.removeChild(n)
              })(e)
            },
          }
        }
      },
    },
    e = {}
  function t(r) {
    var i = e[r]
    if (void 0 !== i) return i.exports
    var s = (e[r] = { id: r, exports: {} })
    return n[r](s, s.exports, t), s.exports
  }
  ;(t.n = (n) => {
    var e = n && n.__esModule ? () => n.default : () => n
    return t.d(e, { a: e }), e
  }),
    (t.d = (n, e) => {
      for (var r in e)
        t.o(e, r) &&
          !t.o(n, r) &&
          Object.defineProperty(n, r, { enumerable: !0, get: e[r] })
    }),
    (t.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e)),
    (() => {
      const n = () =>
          fetch("https://randomuser.me/api/?results=16")
            .then((n) => n.json())
            .then((n) => n.results),
        e = (n) => {
          if (n) {
            const n = document.querySelector(".users-list")
            ;(n.style.cssText = "none"),
              (n.style.cssText =
                "\n      width: 1120px;\n      margin: 0 auto;\n      margin-bottom: 50px;\n      text-align: center;"),
              (n.innerHTML =
                '<img class="loader" src="./loader.svg" alt="preloader" />')
          }
        },
        r = "users/SET-USERS",
        i = "users/FILTER-USERS",
        s = "users/REMOTE-RESULT-FILTER"
      const a = {
        _state: {
          users: {
            users: [],
            filterUsers: [],
            filterMessage: void 0,
            isFetching: !1,
          },
        },
        _observers: [],
        getState() {
          return this._state
        },
        _update() {
          for (const n of this._observers) n()
        },
        subscribes(n) {
          this._observers.push(n)
        },
        dispatch(n) {
          ;(this._state.users = ((n, e) => {
            switch (e.type) {
              case r:
                return { ...n, users: e.users }
              case i:
                if (e.users.length > 0)
                  return { ...n, filterUsers: e.users, filterMessage: void 0 }
                if (0 === e.users.length)
                  return {
                    ...n,
                    filterUsers: [],
                    filterMessage: "Пользователи с таким именем не найдены!",
                  }
              case s:
                return { ...n, filterUsers: [], filterMessage: void 0 }
              default:
                return n
            }
          })(this._state.users, n)),
            this._update()
        },
      }
      window.store = a
      const o = () => {
          ;(() => {
            const n = document.getElementById("filter")
            if (!n.firstChild) {
              const e =
                '\n    <span class="filter-input-container">\n      <input class="filter-input" type="text" />\n    </span>\n    <span class="filter-cancel-btn-container">\n      <button class="filter-cancel-btn">X</button>\n    </span>\n  '
              n.innerHTML = e
            }
          })()
          let n = (() => {
            const n = document.querySelector(".filter-input"),
              e = document.querySelector(".filter-cancel-btn")
            n.addEventListener("input", r), e.addEventListener("click", o)
            let t = null
            function r(n) {
              n.target.value &&
                (clearTimeout(t),
                (t = window.setTimeout(
                  (n) => {
                    let e = a.getState().users.users.filter((e) => {
                      if (
                        e.name.first
                          .toLowerCase()
                          .startsWith(n.toLowerCase()) ||
                        e.name.last.toLowerCase().startsWith(n.toLowerCase())
                      )
                        return e
                    })
                    a.dispatch({ type: i, users: e })
                  },
                  1500,
                  n.target.value
                )))
            }
            function o() {
              a.dispatch({ type: s }), (n.value = "")
            }
            return () => {
              n.removeEventListener("input", r),
                e.removeEventListener("click", o)
            }
          })()
          return () => {
            n()
          }
        },
        l = (n) => {
          const e = new Date(n.registered.date).toLocaleString("ru", {
            day: "numeric",
            month: "numeric",
            year: "numeric",
          })
          return `\n    <div class="container">\n      <div class="info">\n        <div class="avatar">\n          <img class="avatar-min" src=${n.picture.thumbnail} alt="" />\n          <div class="tooltip-avatar">\n            <img class="avatar-max" src=${n.picture.large} alt="" />\n          </div>\n        </div>\n        <div class="name">\n          <h3>${n.name.first} ${n.name.last}</h3>\n        </div>\n        <div class="location">\n          <h4 class="location-content">${n.location.state}, </h4>\n          <h4 class="location-content">${n.location.city}</h4>\n        </div>\n        <div class="email">\n          <h4 class="title">Email: </h4>\n          <h4 class="email-content content">${n.email}</h4>\n          <span class="tooltip-email">${n.email}</span>\n        </div>\n        <div class="phone">\n          <h4 class="title">Phone: </h4>\n          <h4 class="content">${n.phone}</h4>\n        </div>\n        <div class="registerDate">\n          <h4 class="title">Register date: </h4>\n          <h4 class="content">${e}</h4>\n        </div>\n      </div>\n    </div>\n  `
        }
      var c = t(379),
        d = t.n(c),
        u = t(795),
        p = t.n(u),
        h = t(695),
        f = t.n(h),
        m = t(216),
        v = t.n(m),
        g = t(28),
        x = {
          styleTagTransform: function (n, e) {
            if (e.styleSheet) e.styleSheet.cssText = n
            else {
              for (; e.firstChild; ) e.removeChild(e.firstChild)
              e.appendChild(document.createTextNode(n))
            }
          },
          setAttributes: function (n) {
            var e = t.nc
            e && n.setAttribute("nonce", e)
          },
          insert: function (n) {
            var e = f()("head")
            if (!e)
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
              )
            e.appendChild(n)
          },
        }
      ;(x.domAPI = p()),
        (x.insertStyleElement = v()),
        d()(g.Z, x),
        g.Z && g.Z.locals && g.Z.locals
      var b = t(280),
        w = {
          styleTagTransform: function (n, e) {
            if (e.styleSheet) e.styleSheet.cssText = n
            else {
              for (; e.firstChild; ) e.removeChild(e.firstChild)
              e.appendChild(document.createTextNode(n))
            }
          },
          setAttributes: function (n) {
            var e = t.nc
            e && n.setAttribute("nonce", e)
          },
          insert: function (n) {
            var e = f()("head")
            if (!e)
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
              )
            e.appendChild(n)
          },
        }
      ;(w.domAPI = p()),
        (w.insertStyleElement = v()),
        d()(b.Z, w),
        b.Z && b.Z.locals && b.Z.locals
      var y = t(747),
        T = {
          styleTagTransform: function (n, e) {
            if (e.styleSheet) e.styleSheet.cssText = n
            else {
              for (; e.firstChild; ) e.removeChild(e.firstChild)
              e.appendChild(document.createTextNode(n))
            }
          },
          setAttributes: function (n) {
            var e = t.nc
            e && n.setAttribute("nonce", e)
          },
          insert: function (n) {
            var e = f()("head")
            if (!e)
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
              )
            e.appendChild(n)
          },
        }
      ;(T.domAPI = p()),
        (T.insertStyleElement = v()),
        d()(y.Z, T),
        y.Z && y.Z.locals && y.Z.locals
      const S = () => {
        if (0 !== a.getState().users.users.length) {
          const n = o()
          return (
            (() => {
              if (a.getState().users.users.length > 0) {
                const n = document.querySelector(".users-list")
                if (a.getState().users.filterMessage) {
                  ;(n.style.cssText = "none"),
                    (n.style.cssText =
                      "\n      width: 1120px;\n      margin: 0 auto;\n      margin-bottom: 50px;")
                  const e = `<h2 class="message-filter">${
                    a.getState().users.filterMessage
                  }</h2>`
                  n.innerHTML = e
                } else {
                  n.style.cssText =
                    "\n      width: 1120px;\n      margin: 0 auto;\n      margin-bottom: 50px;\n      display: grid;\n      grid-template-columns: repeat(4, 265px);\n      gap: 20px;"
                  const e = (
                    a.getState().users.filterUsers.length > 0
                      ? a.getState().users.filterUsers
                      : a.getState().users.users
                  )
                    .map(l)
                    .join("")
                  n.innerHTML = e
                }
              }
            })(),
            () => {
              n()
            }
          )
        }
        e(!0),
          n().then((n) => {
            a.dispatch({ type: r, users: n }), e(!1)
          })
      }
      a.subscribes(() => {
        C && C(), (C = S())
      })
      let C = S()
    })()
})()
