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
    id: `s_5`,
    charge: -1,
    type: SENSORY,
    img: {
      indexes: 4,
      imageName: "two",
    },
    displayType: "image",
    links: {
      i_3: {
        active: true,
      },
    },
  },
  s_7: {
    id: `s_7`,
    charge: -1,
    type: SENSORY,
    img: {
      indexes: 4,
      imageName: "two",
    },
    displayType: "text",
    links: {
      i_3: {
        active: true,
      },
    },
  },
  s_1: {
    id: `s_1`,
    charge: -1,
    type: SENSORY,
    img: "batman.jpg",
    displayType: "base",
    links: {
      i_3: {
        active: true,
      },
    },
  },
  s_4: {
    id: `s_4`,
    charge: -1,
    type: SENSORY,
    img: {
      indexes: 4,
      imageName: "two",
    },
    displayType: "base",
    links: {
      i_3: {
        active: true,
      },
    },
  },
};
// Inter neurons firing when charged:
export const interNodes = {
  i_2: {
    id: `i_2`,
    charge: -1,
    type: INTER,
    img: "NC-Profile-2077-Placeholder.jpg",
    displayType: "base",
    links: {
      i_s_2: { active: true },
    },
  },
  i_3: {
    id: `i_3`,
    charge: -1,
    type: INTER,
    img: {
      indexes: 4,
      imageName: "two",
    },
    displayType: "base",
    links: {
      i_s_2: { active: true },
      s_1: {
        active: true,
      },
    },
  },
};

const interSuperNodes = {
  i_s_2: {
    id: `i_s_2`,
    charge: -1,
    type: INTER_SUPER,
    img: {
      indexes: 4,
      imageName: "two",
    },
    displayType: "base",
    links: {
      m_3: {
        active: true,
      },
    },
  },
};

const motorNodes = {
  m_3: {
    id: `m_3`,
    type: MOTOR,
    charge: -1,
    img: {
      indexes: 4,
      imageName: "two",
    },
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
    nodesObject[key].color = colors[nodesObject[key].type];
  }
}
