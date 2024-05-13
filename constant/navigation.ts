type Nav = {
    label: string;
    href: string;
    step : number;
  };
  type NavItem = {
    label: string;
    href: string;
    subItems: Nav[];
    step : number;

  };
export const navItems: NavItem[] = [
    {
      href: "/",
      label: "STEP 01: ABOUT YOU",
      step  : 1,
      subItems :  [
        {
            href :"/",
            label :"Profile  information",
            step :1
        },
        {
            href :"/photo",
            label :"Profile  photo",
            step :2
        },
        {
            href :"/location",
            label :"Location",
            step :3
        },
        {
            href :"/languages",
            label :"Languages",
            step :4
        },
        {
            href :"/passions",
            label :"Passions",
            step :5
        },
      ]

    },
    {
      href: "/step-2",
      label: "STEP 02: What we're looking for",
      step : 6,
      subItems :  [
        {
            href :"/",
            label :"Overview",
            step :6
        },
        {
            href :"/expertise",
            label :"Expertice",
            step :7
        },
        {
            href :"/access",
            label :"Access",
            step: 8
        },
        {
            href :"/connection",
            label :"Connection",
            step :9
        },
    
      ]

    },
    {
      href: "/step-3",
      label: "STEP 03: Your Idea",
      step :10,
      subItems :  [
        {
            href :"/",
            label :"Your theme",
            step :10
        },
        {
            href :"/title",
            label :"Title",
            step :11
        },
        {
            href :"/what-we-do",
            label :"What we'll do",
            step :12
        },
        {
            href :"/what-i-provide",
            label :"What I'll provide",
            step :13
        },
        {
            href :"/guest",
            label :"Guest Requirements",
            step :14
        },
        {
            href :"/localisation",
            label :"Localisation",
            step :15
        },
        {
            href :"/photos",
            label :"Photos",
            step :16
        },
    
      ]

    },
    {
      href: "/step-4",
      label: "STEP 04: Settings",
      step :17,
      subItems :  [
        {
            href :"/",
            label :"Group size",
            step :17
        },
        {
            href :"/availability",
            label :"Availability",
            step :18
        },
        {
            href :"/pricing",
            label :"Guest Pricing",
            step :19
        },
        {
            href :"/bookings",
            label :"Bookings",
            step :20
        },
        {
            href :"/review",
            label :"Review and Submit",
            step :21
        },
 
    
      ]

    },
    
  ];