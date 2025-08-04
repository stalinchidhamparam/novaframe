export const Navigation = () => {
   const navigation = [
        {
          title: "SERVICES",
          items: [
            {label:"BRANDING", to:"/branding"},
            {label:"MARKETING", to:"/performance-marketing"},
            // {label:"GRAPHIC DESIGN", to:"/graphic-design"},
            {label:"WEBSITES & APPS", to:"/software-development"}
            ]
        },
        {
          title: "ABOUT US",
          items: [
            {label:"OUR TEAM", to:"/team"},
            ]
        },
        {
          title: "WORK",
          items: [
            {label:"PORTFOLIO", to:"/portfolio"},
            {label:"CLIENTS", to:"/clients"},
          ],
        },
        {
          title: "FOR MORE DETAIL",
          items: [
            {label:"PACKAGE", to:"/package"},
            {label:"CONTACT US", to:"/contact"},
          ]
        },
      ];

      return navigation;
}
