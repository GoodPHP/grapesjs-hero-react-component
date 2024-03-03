import Hero, { Container, HeroImage, Title, Subtitle, Button } from "./Hero";

export default (editor) => {
  editor.Components.addType("email-input", {
    model: {
      defaults: {
        "custom-name": "Email Input",
        tagName: "form",
        attributes: {
          class: "left form my-input-group",
          action: "#",
        },
        components: `<svg data-gjs-selectable="false" data-gjs-highlightable="false" data-gjs-layerable="false" data-gjs-hoverable="false" fill="currentColor" class="bi-envelope" viewBox="0 0 16 16">
          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
        </svg><input type="text" placeholder="Your Email" /><button data-gjs-custom-name="Button" type="submit">Get Started</button>`,
        styles: `.my-input-group {
          color: white;
          position: relative;
        }
        .left .bi-envelope {
          width: 16px;
          height: 16px;
          position: absolute;
          top: 16px;
          left: 16px;
        }
        .left input {
          background-color: rgba(0,0,0,0.25);
          border-radius: 25px;
          padding: 13px;
          padding-left: 35px;
          padding-right: 113px;
          width: 100%;
          height: 50px;
          outline: none;
          border: none;
        }
        .left button {
          border-radius: 20px;
          width: 100px;
          height: 40px;
          position: absolute;
          right: 5px;
          top: 5px;
          outline: none;
          border: none;
        }`,
      },
    },
  });

  editor.Components.addType("Container", {
    extend: "react-component",
    model: {
      defaults: {
        component: Container,
        stylable: true,
        editable: true,
        draggable: true,
        droppable: true,
        attributes: {
          editable: "true",
        },
      },
    },
    isComponent: (el) => el.tagName === "CONTAINER",
  });

  editor.Components.addType("Title", {
    extend: "text-react-component",
    model: {
      defaults: {
        component: Title,
      },
    },
    isComponent: (el) => el.tagName === "TITLE",
  });

  editor.Components.addType("Subtitle", {
    extend: "text-react-component",
    model: {
      defaults: {
        component: Subtitle,
      },
    },
    isComponent: (el) => el.tagName === "SUBTITLE",
  });

  editor.Components.addType("Button", {
    extend: "react-component",
    model: {
      defaults: {
        component: Button,
        stylable: true,
        editable: true,
        draggable: true,
        droppable: false,
        attributes: {
          buttonText: "Get Started",
          editable: "true",
          style: "display: inline-flex;",
          class: "button-primary",
        },
        traits: [
          {
            label: "Button Text",
            name: "buttonText",
          },
        ],
      },
    },
    isComponent: (el) => el.tagName === "BUTTON",
  });

  editor.Components.addType("HeroImage", {
    extend: "image-react-component",
    model: {
      defaults: {
        component: HeroImage,
        attributes: {
          alt: "hero",
          src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+",
          editable: "true",
        },
      },
    },
    isComponent: (el) => el.tagName === "HEROIMAGE",
  });

  editor.Components.addType("Hero", {
    extend: "react-component",
    model: {
      defaults: {
        component: Hero,
        components: [
          {
            type: "Container",
            components: [
              {
                type: "Title",
                content: "Get it done in One Unified workspace",
              },
              {
                type: "Subtitle",
                content:
                  "Manage tasks, write notes, organize projects and collaborate easily. Taskade is the fastest way to get work done",
              },
              { type: "Button" },
            ],
          },
          { type: "HeroImage" },
        ],
        stylable: true,
        editable: true,
        draggable: true,
        droppable: true,
        attributes: {
          editable: "true",
        },
        styles: `.hero {
          text-align: center;
          padding-top: 48px;
          padding-bottom: 88px;
        }
        .container {
          max-width: 1128px;
          width: 100%;
          margin: 0 auto;
        }
        .hero-copy {
            position: relative;
            /* To display elements above hero illustrations */
            z-index: 1;
        }
        .hero-title {
          margin-top: 0;
          margin-bottom: 16px;
          font-size: 38px;
          line-height: 48px;
          letter-spacing: 0px;
          clear: both;
          color: #fff;
          font-weight: 600;
          margin: 0.67em 0;
        }
        .text-grad {
          background: -webkit-linear-gradient(#eee, #333);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero-paragraph {
          margin-top: 0;
          margin-bottom: 24px;
        }
        .hero-image {
          width: 528px;
          height: 396px;
        }
        .main {
          -webkit-box-flex: 1;
          -ms-flex: 1 0 auto;
          flex: 1 0 auto;
          background: #242830;
          color: rgb(196 202 213);;
          font-family: "IBM Plex Sans", sans-serif;
        }
        .button {
          display: -webkit-inline-box;
          display: -ms-inline-flexbox;
          display: inline-flex;
          font-size: 14px;
          letter-spacing: 0px;
          font-weight: 600;
          line-height: 16px;
          text-decoration: none;
          text-transform: uppercase;
          background-color: #fff;
          color: #242830;
          border: none;
          border-radius: 2px;
          cursor: pointer;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          padding: 16px 32px;
          height: 48px;
          text-align: center;
          white-space: nowrap;
        }
        .button-primary {
          background: #d109ea;
          color: #fff;
        }
        @media (min-width: 641px) {
          .hero {
            text-align: left;
            padding-top: 64px;
            padding-bottom: 88px;
          }
        }
        @media (min-width: 481px) {
          .container {
            padding-left: 24px;
            padding-right: 24px;
          }
        }
        @media (min-width: 641px) {
          .hero-inner {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
          }
        }
        @media (min-width: 641px) {
          .hero-copy {
              padding-right: 64px;
              min-width: 552px;
              width: 552px;
          }
        }
        @media (min-width: 641px) {
          .hero-title {
            font-size: 44px;
            line-height: 54px;
            letter-spacing: 0px;
          }
        }
        @media (min-width: 641px) {
          .hero-cta {
            margin: 0;
          }
        }
        @media (min-width: 641px) {
          .hero-cta .button {
            min-width: 170px;
          }
        }
        @media (min-width: 641px) {
          .hero-cta .button:first-child {
            margin-right: 16px;
          }
        }`,
      },
    },
    isComponent: (el) => el.tagName === "HERO",
  });

  editor.BlockManager.add("hero", {
    label: "Hero",
    category: "React Components",
    content: `<Hero></Hero>`,
  });

  editor.BlockManager.add("email-input", {
    label: "Email input",
    category: "React Components",
    content: {
      type: "email-input",
    },
  });
};
