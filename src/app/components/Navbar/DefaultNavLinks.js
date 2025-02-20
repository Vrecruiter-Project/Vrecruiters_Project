export const DefaultNavLinks = [
  {
    label: "About",
    scrollTarget: "features",
  },
  {
    label: "Services",
    scrollTarget: "all_services_section",
    submenu: [
      {
        label: "Recruitment Services",
        menulist: [
          { label: "Employer", route: "/recruitment/employers" },
          { label: "Candidates", route: "/recruitment/candidates" },
        ],
      },
      {
        label: "Development Services",
        menulist: [
          { label: "Web Developer", route: "/developers" },
          { label: "Web Designer", route: "/designers" },
        ],
      },
      {
        label: "Career Councelling",
        route: "/career",
      },
      {
        label: "Interview Preparation",
        route: "/interview",
      },
      {
        label: "Resume Builder",
        route: "/resume",
      },
      {
        label: "Digital Marketing",
        route: "/digitalmarketing",
      },
      {
        label: "Free Consultation",
        route: "/freeconsultation",
      },
    ],
  },
  {
    label: "Community",
    scrollTarget: "community",
  },
  {
    label: "Contact",
    submenu : [
      {label : "Services", route : "/contact"},
      {label : "Candidates", route : "/candidatecontact"},
      {label : "Employer", route : "/companycontact"},
      {label: "Human Resources", route: "/humanresourcescontact"},
      // {label : "Web Developer", route : "/developmentContact"},
      // {label : "Web Designer", route : "/designingcontact"},
      {label : "Client Contact",
        menulist: [
          { label: "Web Developer Cient", route: "/devclientcontact" },
          { label: "Web Designer Client", route: "/desclientcontact" },
        ],
      },
      {label : "Career Councelling", route : "/careercontact"},
      {label : "Resume Writing", route : "/resumecontact"},
      {label : "Interview Preparation", route : "/interviewcontact"},
      {label : "Digital Marketing", route : "/digitalmarketingcontact"},
    ]
  },
  {
    label: "Apply Now",
    route: "/apply",
  },
];
