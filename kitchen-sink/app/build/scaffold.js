// Generated by CoffeeScript 1.3.3
(function() {
  var section_login, section_main, sections;

  sections = [
    {
      id: "main",
      transition: "slide",
      header: {
        title: "hola",
        back: true,
        nav: {
          position: "right",
          items: [
            {
              href: "#",
              icon: "home",
              label: "Home",
              tap: App.Session
            }, {
              href: "b",
              router: "section",
              label: "Section B"
            }
          ]
        }
      },
      footer: {
        nav: {
          "class": "with-labels",
          items: [
            {
              href: "#",
              "data-icon": "home",
              "data-label": "ir"
            }, {
              href: "#",
              "data-icon": "home",
              "data-label": "ir"
            }
          ]
        }
      },
      articles: [
        {
          id: "main-article"
        }, {
          id: "sksks"
        }
      ]
    }, {
      id: "item",
      header: {
        back: true
      },
      articles: [
        {
          id: "pending",
          "class": "list scroll"
        }, {
          id: "finished",
          "class": "list scroll"
        }
      ]
    }
  ];

  section_main = {
    id: "main",
    transition: "slide",
    header: {
      title: "Lungo Scaffold",
      subtitle: "definition",
      nav: {
        position: "left",
        items: [
          {
            href: "back",
            icon: "home",
            label: "return"
          }
        ]
      }
    },
    footer: {
      nav: {
        "class": "with-labels",
        items: [
          {
            href: "#",
            icon: "user",
            label: "Profile",
            callback: function() {
              return alert("user");
            }
          }, {
            href: "#",
            icon: "map",
            label: "Map",
            callback: function() {
              return alert("map");
            }
          }, {
            href: "#",
            icon: "settings",
            label: "Config",
            callback: function() {
              return alert("Congiguration");
            }
          }
        ]
      }
    }
  };

  section_login = {
    id: "login",
    article: {
      "class": "list scroll"
    }
  };

}).call(this);
