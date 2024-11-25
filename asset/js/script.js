// https://dev.to/tsparticles/how-to-create-snow-effects-for-this-christmas-with-tsparticles-4mpd
tsParticles.load("snow-container", {
  background: {
    color: "#E6F0FF"
  },
  particles: {
    color: { value: "#fff" },
    move: {
      direction: "bottom",
      enable: true,
      outModes: "out",
      speed: 2
    },
    number: {
      density: {
        enable: true,
        area: 800
      },
      value: 400
    },
    opacity: {
      value: 0.7
    },
    shape: {
      type: "circle"
    },
    size: {
      value: 10
    },
    wobble: {
      enable: true,
      distance: 10,
      speed: 10
    },
    zIndex: {
      value: { min: 0, max: 100 }
    }
  }
});