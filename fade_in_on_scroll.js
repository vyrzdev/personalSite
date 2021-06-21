let projects = new Waypoint.Inview({
        element: document.getElementById("projects-anchor"),
        entered: function(direction) {
            this.element.classList.add("fading-in")
        },
        exit: function (direction) {
            this.element.classList.remove("fading-in")
        },
    }
)