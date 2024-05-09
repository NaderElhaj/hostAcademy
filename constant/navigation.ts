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
      step  : 0,
      subItems :  [
        {
            href :"/",
            label :"Profile  information",
            step :0
        },
        {
            href :"/photo",
            label :"Profile  photo",
            step :1
        },
        {
            href :"/location",
            label :"Location",
            step :2
        },
        {
            href :"/languages",
            label :"Languages",
            step :3
        },
        {
            href :"/passions",
            label :"Passions",
            step :4
        },
      ]

    },
    {
      href: "/step-2",
      label: "STEP 02: What we're looking for",
      step : 5,
      subItems :  [
        {
            href :"/",
            label :"Overview",
            step :5
        },
        {
            href :"/expertise",
            label :"Expertice",
            step :6
        },
        {
            href :"/access",
            label :"Access",
            step: 7
        },
        {
            href :"/connection",
            label :"Connection",
            step :8
        },
    
      ]

    },
    {
      href: "/step-3",
      label: "STEP 03: Your Idea",
      step :9,
      subItems :  [
        {
            href :"/",
            label :"Your theme",
            step :9
        },
        {
            href :"/title",
            label :"Title",
            step :10
        },
        {
            href :"/what-we-do",
            label :"What we'll do",
            step :11
        },
        {
            href :"/what-i-provide",
            label :"What I'll provide",
            step :12
        },
        {
            href :"/guest",
            label :"Guest Requirements",
            step :13
        },
        {
            href :"/localisation",
            label :"Localisation",
            step :14
        },
        {
            href :"/photos",
            label :"Photos",
            step :15
        },
    
      ]

    },
    {
      href: "/step-4",
      label: "STEP 04: Settings",
      step :16,
      subItems :  [
        {
            href :"/",
            label :"Group size",
            step :16
        },
        {
            href :"/availability",
            label :"Availability",
            step :17
        },
        {
            href :"/pricing",
            label :"Guest Pricing",
            step :18
        },
        {
            href :"/bookings",
            label :"Bookings",
            step :19
        },
        {
            href :"/review",
            label :"Review and Submit",
            step :20
        },
 
    
      ]

    },
    
  ];