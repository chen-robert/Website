const timelineData = {
  redpwn: {
    events: [
      {
        date: "9/28/17",
        title: "Founding",
        desc: "Met TPA on FTW and started doing CTFs together."
      },
      {
        date: "11/18/17",
        title: "Easy CTF",
        desc: "Two person team. Placed top 30."
      },
      {
        date: "1/28/18",
        title: "Blevy",
        desc: "The god himself!"
      },
      {
        date: "5/28/18",
        title: "PACTF",
        desc: "Placed 3rd. Won over $1200 worth of prizes. "
      },
      {
        date: "9/30/18",
        title: "Pico CTF",
        desc: "No information yet."
      }
    ],
    name: "Cybersecurity"
  },
  usaco: {
    events: [
      {
        date: "12/28/16",
        title: "Gold",
        desc: "Qualified for USACO Gold."
      },
      {
        date: "11/18/17",
        title: "Platinum",
        desc: "Qualified for USACO Platinum. Top 300 in the nation."
      },
      {
        date: "1/28/18",
        title: "Leetcode",
        desc: "Ranked 31 out of 2900 participants."
      },
      {
        date: "4/28/18",
        title: "Codeforces",
        desc: "Reached Master."
      }
    ],
    name: "Competitive Programming"
  }
};

const data = {
  timeline: {},
  hobbies: [
    {
      name: "Volunteering",
      altText: "Develops strong communication skills by teaching children.",
      items: ["Advanced English Teacher", "Curriculum Planner"]
    },
    {
      name: "Cybersecurity",
      altText:
        "Quickly grasps new concepts to keep up with a rapidly developing field. Understands important security concepts such as CSP.",
      items: ["Team Captain", "Third Place at PACTF"]
    },
    {
      name: "Competitive Programming",
      altText: "Knowledge of multiple datastructures and their impact on runtime. Competition problems develop clear and logical thinking skills.",
      items: ["USACO Platinum", "Codeforces Master", "TeamsCode Instructor"]
    },
    {
      name: "Math",
      altText: "Motivated self-learner. Proficient at googling.",
      items: ["AMC 8 Perfect Score", "Odle Math Club Coach", "JMO Qualifier"]
    }
  ],
  projects: [
    {
      title: "TOSFairness",
      desc: "A service that reviews the TOS agreements of companies and corporations, giving them a rating representing how fair they are. ",
      github: "",
      instance: "https://www.tosfairness.org/"
    },{
      title: "Breakdiving",
      desc: "The homepage for Break Diving, a 501(c)(3) tax-exempt charity with an international mission: helping individuals worldwide find success in life. ",
      github: "",
      instance: "http://www.breakdiving.org/"
    },{
      title: "LLK/scratch-www",
      desc: "Contributor to Scratch's web client, a website that helps young children learn programming.",
      github: "https://github.com/LLK/scratch-www",
      instance: "https://scratch.mit.edu/"
    }
  ]
};

Object.keys(data.timeline).forEach(key => {
  const { events } = data[key];
  events.forEach(event => (event.date = new Date(event.date).valueOf()));
});

export default data;
