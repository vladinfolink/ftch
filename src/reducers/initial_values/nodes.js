const SENSORY = "sensory";
const INTER = "inter";
const INTER_SUPER = "interSuper";
const MOTOR = "motor";

export const colors = {
  sensory: `#4BB7E1`,
  inter: "#FF003C",
  interSuper: "#FBF502",
  motor: "#C652B0",
};

const sensoryNodes = {
  s_5: {
    charge: -1,
    type: SENSORY,
    displayType: "image",
    links: {
      i_3: {
        gates: {
          'one': function(x) {
            return new Promise((resolve) => {
              setTimeout(() => {
                resolve(x + 1);
              }, 3000);
            });
          },
        },
      },
    },
  },
  s_7: {
    charge: -1,
    type: SENSORY,
    displayType: "text",
    links: {
      i_3: {},
    },
  },
  s_1: {
    charge: -1,
    type: SENSORY,
    displayType: "base",
  },
  s_4: {
    charge: -1,
    type: SENSORY,
    displayType: "base",
    links: {
      i_3: {},
    },
  },
};
// Inter neurons firing when charged:
export const interNodes = {
  i_2: {
    charge: -1,
    type: INTER,
    displayType: "base",
    links: {
      i_s_2: {},
    },
  },
  i_3: {
    charge: -1,
    type: INTER,
    displayType: "base",
    links: {
      i_s_2: {
        gates: {
          'one': function(x) {
            return new Promise((resolve) => {
              setTimeout(() => {
                resolve(x + 1);
              }, 3000);
            });
          },
          2: function(x) {
            return new Promise((resolve) => {
              setTimeout(() => {
                resolve(x + 2);
              }, 3000);
            });
          },
        },
      },
      s_1: {
        gates: {
          one: function(x) {
            return new Promise((resolve) => {
              setTimeout(() => {
                resolve(x + 3);
              }, 3000);
            });
          },
          2: function(x) {
            return new Promise((resolve) => {
              setTimeout(() => {
                resolve(x + 4);
              }, 3000);
            });
          },
        },
      },
    },
  },
};

const interSuperNodes = {
  i_s_2: {
    charge: -1,
    type: INTER_SUPER,
    displayType: "base",
    links: {
      m_3: {
        gates: {
          one: function(x) {
            return new Promise((resolve) => {
              setTimeout(() => {
                resolve(x + 3);
              }, 3000);
            });
          },
        },
      },
    },
  },
};

const motorNodes = {
  m_3: {
    type: MOTOR,
    charge: -1,
    displayType: "base",
  },
};

export const nodesObject = {
  ...sensoryNodes,
  ...interNodes,
  ...interSuperNodes,
  ...motorNodes,
};

for (const key in nodesObject) {
  if (nodesObject.hasOwnProperty(key)) {
    nodesObject[key].id = key;
    nodesObject[key].color = colors[nodesObject[key].type];
  }
}
