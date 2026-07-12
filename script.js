(() => {
      "use strict";

      const SCHOOL_WHATSAPP_NUMBER = "2348032193527";

      const iconLibrary = {
        coding: `
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="m8 9-4 3 4 3"></path>
            <path d="m16 9 4 3-4 3"></path>
            <path d="m14 5-4 14"></path>
          </svg>
        `,

        robotics: `
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <rect x="5" y="7" width="14" height="11" rx="2"></rect>
            <path d="M9 11h.01M15 11h.01"></path>
            <path d="M9 15h6"></path>
            <path d="M12 3v4"></path>
            <path d="M8 21v-3M16 21v-3M2 12h3M19 12h3"></path>
          </svg>
        `,

        drone: `
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M8 12h8"></path>
            <path d="M12 8v8"></path>
            <path d="M9 9 6 6M15 9l3-3M9 15l-3 3M15 15l3 3"></path>
            <circle cx="5" cy="5" r="2.5"></circle>
            <circle cx="19" cy="5" r="2.5"></circle>
            <circle cx="5" cy="19" r="2.5"></circle>
            <circle cx="19" cy="19" r="2.5"></circle>
            <rect x="9" y="9" width="6" height="6" rx="1"></rect>
          </svg>
        `,

        enterprise: `
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M4 9h16v11H4z"></path>
            <path d="M8 9V6h8v3"></path>
            <path d="M4 13h16"></path>
            <path d="M10 13v2h4v-2"></path>
          </svg>
        `,

        leadership: `
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <circle cx="9" cy="8" r="3"></circle>
            <circle cx="17" cy="9" r="2.5"></circle>
            <path d="M3 20c0-4 2.5-6 6-6s6 2 6 6"></path>
            <path d="M15 15c3.5 0 5 1.7 5 5"></path>
          </svg>
        `,

        academics: `
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M4 5.5A3.5 3.5 0 0 1 7.5 2H11v17H7.5A3.5 3.5 0 0 0 4 22z"></path>
            <path d="M20 5.5A3.5 3.5 0 0 0 16.5 2H13v17h3.5A3.5 3.5 0 0 1 20 22z"></path>
          </svg>
        `,

        support: `
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M12 21s-7-4.6-7-11a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 6.4-7 11-7 11z"></path>
            <path d="M9 12h6"></path>
            <path d="M12 9v6"></path>
          </svg>
        `
      };

      const events = {
        summer: {
          key: "summer",
          pageTitle: "Summer Fun 2026 | Greenfields Pinnacle School",
          name: "Summer Fun 2026",
          displayName: "SUMMER FUN 2026",
          announcement:
            'Summer Fun 2026 registration is open — <span>spaces are limited.</span>',
          heroEyebrow: "Greenfields Pinnacle School presents",
          heroTitle: 'Summer Fun <span>2026</span>',
          heroLead:
            "Give your child a holiday filled with coding, robotics, supervised drone piloting and practical projects that build confidence, creativity and problem-solving skills.",
          poster: "assets/summer-fun-2026.jpg",
          posterAlt:
            "Greenfields Pinnacle School Summer Fun 2026 event flyer",
          posterNote:
            "No previous coding or robotics experience is required.",
          heroFacts: [
            {
              title: "10–21 August",
              text: "2026 programme period"
            },
            {
              title: "Monday–Thursday",
              text: "11:00 AM daily"
            },
            {
              title: "₦50,000",
              text: "Per participating child"
            }
          ],
          quickItems: [
            {
              title: "Future-ready skills",
              text: "Coding, engineering and safe drone operations."
            },
            {
              title: "Practical learning",
              text: "Children learn by creating, testing and improving."
            },
            {
              title: "Beginner-friendly",
              text: "No previous technology experience is needed."
            },
            {
              title: "Abuja venue",
              text: "CBN CHOOS Estate, Wumba, Apo-Lokogoma Road."
            }
          ],
          activitiesTitle:
            "Three practical technology experiences in one programme",
          activitiesIntroduction:
            "Every session is designed around guided practice, collaboration and age-appropriate projects that children can understand and enjoy.",
          sessions: [
            {
              name: "Coding",
              icon: "coding",
              description:
                "Children learn programming fundamentals through games, animations and interactive projects built with age-appropriate tools.",
              points: [
                "Programming logic and sequencing",
                "Games, animations and creative projects",
                "Problem-solving through experimentation"
              ]
            },
            {
              name: "Robotics",
              icon: "robotics",
              description:
                "Students design, build and program robots while discovering engineering concepts through structured, hands-on activities.",
              points: [
                "Robot design and assembly",
                "Motors, sensors and movement",
                "Testing, teamwork and improvement"
              ]
            },
            {
              name: "Drone Piloting",
              icon: "drone",
              description:
                "Participants learn about drone technology, safe operations, flight controls and supervised beginner flying techniques.",
              points: [
                "Drone parts and basic technology",
                "Flight controls and safety procedures",
                "Supervised practical flying sessions"
              ]
            }
          ],
          benefitsEyebrow: "Why Summer Fun 2026?",
          benefitsTitle:
            "Less passive screen time. More purposeful discovery.",
          benefitsIntroduction:
            "The programme gives children an engaging introduction to technology while strengthening skills that support learning, communication and personal confidence.",
          benefits: [
            {
              title: "Learn through projects",
              text:
                "Concepts are introduced through activities children can build, test and demonstrate."
            },
            {
              title: "Develop logical thinking",
              text:
                "Learners practise breaking larger challenges into clear, manageable steps."
            },
            {
              title: "Build confidence",
              text:
                "Completing practical tasks helps children trust their ideas and abilities."
            },
            {
              title: "Improve creativity",
              text:
                "Children are encouraged to experiment, design and create original solutions."
            },
            {
              title: "Practise teamwork",
              text:
                "Collaborative challenges help learners communicate and solve problems together."
            },
            {
              title: "Use technology safely",
              text:
                "Facilitators teach responsible handling, safe drone procedures and good digital habits."
            },
            {
              title: "Receive expert guidance",
              text:
                "Experienced instructors support learners throughout each practical activity."
            },
            {
              title: "Celebrate achievement",
              text:
                "Every participant who completes the programme receives a Certificate of Participation."
            }
          ],
          detailsTitle: "Everything parents need to plan ahead",
          details: [
            {
              label: "Programme",
              value: "Greenfields Pinnacle School Summer Fun 2026"
            },
            {
              label: "Programme period",
              value: "10th August – 21st August 2026"
            },
            {
              label: "Class days",
              value: "Monday – Thursday"
            },
            {
              label: "Start time",
              value: "11:00 AM daily"
            },
            {
              label: "Experience level",
              value: "Beginners and experienced learners are welcome"
            },
            {
              label: "Venue",
              value:
                "Greenfields Pinnacle School<br>CBN CHOOS Estate, Wumba<br>Apo-Lokogoma Road, Abuja"
            }
          ],
          fee: "₦50,000",
          feeShort: "₦50,000 per child",
          feeDescription: "Per participating child.",
          included: [
            "Coding classes",
            "Robotics practical sessions",
            "Drone piloting experience",
            "Learning materials",
            "Instructor support",
            "Practical projects",
            "Certificate of Participation"
          ],
          trustEyebrow: "A programme parents can trust",
          trustTitle: "Safe, supportive and focused on every learner",
          trustIntroduction:
            "Greenfields Pinnacle School combines structured instruction with an environment where children can ask questions, practise new skills and learn at an appropriate pace.",
          trustItems: [
            {
              title: "Experienced facilitators",
              text:
                "Children receive clear guidance from instructors who understand practical technology education."
            },
            {
              title: "Child-friendly environment",
              text:
                "Activities are organised around safety, encouragement and age-appropriate participation."
            },
            {
              title: "Small class sizes",
              text:
                "Limited spaces allow facilitators to provide closer attention to each learner."
            },
            {
              title: "Modern learning resources",
              text:
                "Lessons use practical equipment and tools that support active participation."
            },
            {
              title: "Hands-on learning",
              text:
                "Learners spend time building, programming, testing and improving their work."
            },
            {
              title: "Innovation and creativity",
              text:
                "Children are encouraged to explore ideas rather than simply memorising instructions."
            }
          ],
          faqs: [
            {
              question:
                "Does my child need previous coding experience?",
              answer:
                "No. Beginners are welcome. Activities will be introduced in a clear and age-appropriate way, with support from the programme facilitators."
            },
            {
              question: "Do parents need to provide a laptop?",
              answer:
                "Parents will be informed before the programme if a laptop is required. Limited devices may be available for shared practical sessions."
            },
            {
              question: "Will participants receive certificates?",
              answer:
                "Yes. Every participant who completes the programme will receive a Certificate of Participation."
            },
            {
              question: "Are the sessions practical?",
              answer:
                "Yes. The programme includes hands-on coding, robot-building and supervised beginner drone piloting activities."
            },
            {
              question: "How will payment instructions be provided?",
              answer:
                "After the registration details are sent, the admissions team will contact the parent or guardian with payment and confirmation instructions."
            }
          ],
          ageMinimum: null,
          ageMaximum: null,
          ageHelp: "Age is calculated automatically.",
          isFree: false,
          formDescription:
            "Coding, robotics and supervised drone piloting.",
          registrationTitle: "Reserve your child’s Summer Fun place",
          registrationIntroduction:
            "Complete the form below. When submitted, the website will open WhatsApp with the Summer Fun 2026 registration details ready to send to the Greenfields Pinnacle School admissions team.",
          finalCtaTitle:
            "Give your child a holiday that builds useful technology skills",
          finalCtaText:
            "Spaces are limited so every participant can receive practical guidance and individual attention.",
          thankYouIntroduction:
            "Thank you for registering for Greenfields Pinnacle School Summer Fun 2026.",
          thankYouNextStep:
            "The admissions team will contact you shortly to confirm availability and provide payment instructions."
        },

        holiday: {
          key: "holiday",
          pageTitle:
            "Free Holiday Lessons 2026 | Greenfields Pinnacle School",
          name: "Free Holiday Lessons",
          displayName: "FREE HOLIDAY LESSONS",
          announcement:
            'Free Holiday Lessons registration is open — <span>enrol children aged 2–16 years.</span>',
          heroEyebrow: "Greenfields Pinnacle School, Abuja — Diligent Hands",
          heroTitle: 'Free Holiday <span>Lessons</span>',
          heroLead:
            "A free holiday programme combining entrepreneurship, leadership, academic support and special-needs-focused learning for children aged 2 to 16 years.",
          poster: "assets/free-holiday-lessons.jpg",
          posterAlt:
            "Greenfields Pinnacle School Free Holiday Lessons event flyer",
          posterNote:
            "Free enrolment for children aged 2–16 years.",
          heroFacts: [
            {
              title: "3–21 August",
              text: "2026 programme period"
            },
            {
              title: "9:00 AM–12 Noon",
              text: "Daily programme time"
            },
            {
              title: "Free",
              text: "No programme fee"
            }
          ],
          quickItems: [
            {
              title: "Ages 2–16 years",
              text: "Activities and support for different age groups."
            },
            {
              title: "Practical life skills",
              text: "Baking, sewing, art, teamwork and communication."
            },
            {
              title: "Academic support",
              text: "Reading, mathematics and handwriting clinics."
            },
            {
              title: "Abuja venue",
              text: "CBN CHOOS Estate, Wumba, Apo-Lokogoma Road."
            }
          ],
          activitiesTitle:
            "Four learning areas designed to support the whole child",
          activitiesIntroduction:
            "Children can participate in practical, academic, communication and developmental activities within a supportive school environment.",
          sessions: [
            {
              name: "Entrepreneurship",
              icon: "enterprise",
              description:
                "Practical creative activities introduce children to useful skills, responsibility and the satisfaction of making something themselves.",
              points: [
                "Baking: bread, cake and pastries",
                "Sewing activities",
                "Batik, drawing and painting"
              ]
            },
            {
              name: "Leadership",
              icon: "leadership",
              description:
                "Children build communication, confidence and collaboration skills through guided individual and group activities.",
              points: [
                "Public speaking",
                "Teamwork",
                "Time management and communication"
              ]
            },
            {
              name: "Academics",
              icon: "academics",
              description:
                "Focused academic sessions help learners strengthen important foundational skills in a calm and supportive setting.",
              points: [
                "Reading intervention",
                "Maths clinic",
                "Handwriting clinic"
              ]
            },
            {
              name: "Special Needs",
              icon: "support",
              description:
                "Support-focused sessions address selected developmental, communication and daily-living concerns with care and understanding.",
              points: [
                "Picky eating and speech delay",
                "Delay in walking and developmental delays",
                "Stuttering support"
              ]
            }
          ],
          benefitsEyebrow: "Why choose the Free Holiday Lessons?",
          benefitsTitle:
            "Learning support, creativity and practical skills in one programme",
          benefitsIntroduction:
            "The holiday lessons help children remain active, supported and engaged while developing useful academic, social and practical abilities.",
          benefits: [
            {
              title: "Strengthen academic skills",
              text:
                "Reading, mathematics and handwriting support help learners practise important foundational skills."
            },
            {
              title: "Develop practical abilities",
              text:
                "Baking, sewing and creative art activities introduce children to useful hands-on skills."
            },
            {
              title: "Improve communication",
              text:
                "Public speaking and group activities help children express themselves more confidently."
            },
            {
              title: "Encourage teamwork",
              text:
                "Learners practise cooperation, responsibility and positive participation with others."
            },
            {
              title: "Support creativity",
              text:
                "Drawing, painting and batik activities give children space to explore and create."
            },
            {
              title: "Build better habits",
              text:
                "Time-management activities help children understand planning, routine and responsibility."
            },
            {
              title: "Provide additional support",
              text:
                "Selected sessions address communication, developmental and daily-living concerns."
            },
            {
              title: "Accessible to families",
              text:
                "The programme is free, allowing more children to benefit from structured holiday learning."
            }
          ],
          detailsTitle: "Free lessons for children aged 2–16 years",
          details: [
            {
              label: "Programme",
              value: "Greenfields Pinnacle School Free Holiday Lessons"
            },
            {
              label: "Programme period",
              value:
                "Monday, 3rd August – Friday, 21st August 2026"
            },
            {
              label: "Programme time",
              value: "9:00 AM – 12:00 Noon"
            },
            {
              label: "Age range",
              value: "2–16 years"
            },
            {
              label: "Programme fee",
              value: "Free"
            },
            {
              label: "Venue",
              value:
                "Greenfields Pinnacle School<br>CBN CHOOS Estate, Wumba<br>Apo-Lokogoma Road, Abuja"
            }
          ],
          fee: "Free",
          feeShort: "Free for ages 2–16",
          feeDescription: "There is no programme fee.",
          included: [
            "Entrepreneurship activities",
            "Leadership development",
            "Public speaking and teamwork",
            "Reading intervention",
            "Maths and handwriting clinics",
            "Creative arts activities",
            "Selected special needs support"
          ],
          trustEyebrow: "Diligent Hands",
          trustTitle: "A welcoming holiday programme for children and families",
          trustIntroduction:
            "Greenfields Pinnacle School provides a child-friendly environment where learners can receive academic support, practise useful skills and participate in structured activities.",
          trustItems: [
            {
              title: "Wide range of activities",
              text:
                "The programme brings academic, practical, creative and communication activities together."
            },
            {
              title: "Children aged 2–16",
              text:
                "The programme welcomes different age groups and developmental stages."
            },
            {
              title: "Academic intervention",
              text:
                "Focused reading, mathematics and handwriting sessions provide additional practice."
            },
            {
              title: "Practical holiday learning",
              text:
                "Children remain active through baking, sewing, artwork and group challenges."
            },
            {
              title: "Communication development",
              text:
                "Public speaking, teamwork and communication activities help children participate confidently."
            },
            {
              title: "Supportive environment",
              text:
                "Parents can provide relevant developmental, medical or learning information during registration."
            }
          ],
          faqs: [
            {
              question: "Is the Holiday Lessons programme completely free?",
              answer:
                "Yes. There is no programme fee for the Free Holiday Lessons programme."
            },
            {
              question: "What ages can participate?",
              answer:
                "The programme is open to children from 2 to 16 years of age."
            },
            {
              question: "What activities are included?",
              answer:
                "Activities include baking, sewing, batik, drawing, painting, public speaking, teamwork, time management, communication, reading intervention, maths clinic, handwriting clinic and selected special needs support."
            },
            {
              question:
                "Does the programme include special needs support?",
              answer:
                "The listed support areas include picky eating, speech delay, delay in walking, developmental delays and stuttering. Parents should provide relevant information in the registration form so the school can discuss the child's needs."
            },
            {
              question: "When and where will the lessons take place?",
              answer:
                "The programme runs from Monday, 3rd August to Friday, 21st August 2026, from 9:00 AM to 12:00 Noon at Greenfields Pinnacle School, CBN CHOOS Estate, Wumba, Apo-Lokogoma Road, Abuja."
            }
          ],
          ageMinimum: 2,
          ageMaximum: 16,
          ageHelp:
            "Participants in the Free Holiday Lessons must be between 2 and 16 years old.",
          isFree: true,
          formDescription:
            "Entrepreneurship, leadership, academics and special needs support.",
          registrationTitle: "Enrol your child in the Free Holiday Lessons",
          registrationIntroduction:
            "Complete the form below. When submitted, the website will open WhatsApp with the Free Holiday Lessons registration details ready to send to the Greenfields Pinnacle School admissions team.",
          finalCtaTitle:
            "Register today for Greenfields Pinnacle School’s Free Holiday Lessons",
          finalCtaText:
            "Enrol your child for practical activities, academic support, communication development and structured holiday learning.",
          thankYouIntroduction:
            "Thank you for registering for Greenfields Pinnacle School Free Holiday Lessons.",
          thankYouNextStep:
            "The admissions team will contact you shortly to confirm the registration and provide any additional programme information."
        }
      };

      const elements = {
        website: document.getElementById("website"),
        thankYouPage: document.getElementById("thankYouPage"),
        announcement: document.getElementById("announcement"),
        menuButton: document.getElementById("menuButton"),
        mobileNav: document.getElementById("mobileNav"),
        heroEyebrow: document.getElementById("heroEyebrow"),
        heroTitle: document.getElementById("heroTitle"),
        heroLead: document.getElementById("heroLead"),
        heroFacts: document.getElementById("heroFacts"),
        eventPoster: document.getElementById("eventPoster"),
        posterFallback: document.getElementById("posterFallback"),
        posterFallbackTitle:
          document.getElementById("posterFallbackTitle"),
        posterNote: document.getElementById("posterNote"),
        quickStrip: document.getElementById("quickStrip"),
        activitiesTitle: document.getElementById("activitiesTitle"),
        activitiesIntroduction:
          document.getElementById("activitiesIntroduction"),
        sessionsGrid: document.getElementById("sessionsGrid"),
        benefitsEyebrow: document.getElementById("benefitsEyebrow"),
        benefitsTitle: document.getElementById("benefitsTitle"),
        benefitsIntroduction:
          document.getElementById("benefitsIntroduction"),
        benefitsGrid: document.getElementById("benefitsGrid"),
        detailsTitle: document.getElementById("detailsTitle"),
        detailList: document.getElementById("detailList"),
        feeAmount: document.getElementById("feeAmount"),
        feeDescription: document.getElementById("feeDescription"),
        includedList: document.getElementById("includedList"),
        trustEyebrow: document.getElementById("trustEyebrow"),
        trustTitle: document.getElementById("trustTitle"),
        trustIntroduction:
          document.getElementById("trustIntroduction"),
        trustList: document.getElementById("trustList"),
        faqList: document.getElementById("faqList"),
        registrationTitle:
          document.getElementById("registrationTitle"),
        registrationIntroduction:
          document.getElementById("registrationIntroduction"),
        registrationForm:
          document.getElementById("registrationForm"),
        formMessage: document.getElementById("formMessage"),
        formProgrammeName:
          document.getElementById("formProgrammeName"),
        formProgrammeDescription:
          document.getElementById("formProgrammeDescription"),
        programmeInput: document.getElementById("programmeInput"),
        activityChoices:
          document.getElementById("activityChoices"),
        paymentArea: document.getElementById("paymentArea"),
        dateOfBirthInput:
          document.getElementById("dateOfBirth"),
        ageInput: document.getElementById("age"),
        ageHelp: document.getElementById("ageHelp"),
        experienceDetailsField:
          document.getElementById("experienceDetailsField"),
        experienceDetailsInput:
          document.getElementById("experienceDetails"),
        finalCtaTitle:
          document.getElementById("finalCtaTitle"),
        finalCtaText: document.getElementById("finalCtaText"),
        footerProgrammeName:
          document.getElementById("footerProgrammeName"),
        mobileProgrammeName:
          document.getElementById("mobileProgrammeName"),
        mobileProgrammeFee:
          document.getElementById("mobileProgrammeFee"),
        registrationSummary:
          document.getElementById("registrationSummary"),
        thankYouIntroduction:
          document.getElementById("thankYouIntroduction"),
        thankYouNextStep:
          document.getElementById("thankYouNextStep"),
        sendAgainButton:
          document.getElementById("sendAgainButton"),
        backToWebsiteButton:
          document.getElementById("backToWebsiteButton")
      };

      let activeEventKey = "summer";

      document.getElementById("currentYear").textContent =
        new Date().getFullYear();

      function getActiveEvent() {
        return events[activeEventKey];
      }

      function closeMobileMenu() {
        elements.menuButton.setAttribute("aria-expanded", "false");
        elements.menuButton.setAttribute(
          "aria-label",
          "Open navigation menu"
        );

        elements.mobileNav.classList.remove("is-open");
        document.body.classList.remove("menu-open");
      }

      elements.menuButton.addEventListener("click", () => {
        const isOpen =
          elements.menuButton.getAttribute("aria-expanded") === "true";

        elements.menuButton.setAttribute(
          "aria-expanded",
          String(!isOpen)
        );

        elements.menuButton.setAttribute(
          "aria-label",
          isOpen
            ? "Open navigation menu"
            : "Close navigation menu"
        );

        elements.mobileNav.classList.toggle("is-open", !isOpen);
        document.body.classList.toggle("menu-open", !isOpen);
      });

      elements.mobileNav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMobileMenu);
      });

      function updateEventTabs() {
        document.querySelectorAll(".event-tab").forEach((tab) => {
          const isActive = tab.dataset.event === activeEventKey;

          tab.classList.toggle("is-active", isActive);
          tab.setAttribute("aria-pressed", String(isActive));
        });
      }

      function createHeroFacts(eventData) {
        elements.heroFacts.replaceChildren();

        eventData.heroFacts.forEach((fact) => {
          const item = document.createElement("div");
          item.className = "hero-fact";

          const title = document.createElement("strong");
          title.textContent = fact.title;

          const text = document.createElement("span");
          text.textContent = fact.text;

          item.append(title, text);
          elements.heroFacts.append(item);
        });
      }

      function createQuickStrip(eventData) {
        elements.quickStrip.replaceChildren();

        eventData.quickItems.forEach((item, index) => {
          const wrapper = document.createElement("div");
          wrapper.className = "quick-item";

          const number = document.createElement("div");
          number.className = "quick-icon";
          number.setAttribute("aria-hidden", "true");
          number.textContent = String(index + 1).padStart(2, "0");

          const content = document.createElement("div");

          const title = document.createElement("strong");
          title.textContent = item.title;

          const text = document.createElement("span");
          text.textContent = item.text;

          content.append(title, text);
          wrapper.append(number, content);
          elements.quickStrip.append(wrapper);
        });
      }

      function createSessions(eventData) {
        elements.sessionsGrid.replaceChildren();

        eventData.sessions.forEach((session) => {
          const card = document.createElement("article");
          card.className = "session-card";

          const icon = document.createElement("div");
          icon.className = "session-icon";
          icon.innerHTML = iconLibrary[session.icon];

          const title = document.createElement("h3");
          title.textContent = session.name;

          const description = document.createElement("p");
          description.textContent = session.description;

          const list = document.createElement("ul");
          list.className = "session-list";

          session.points.forEach((point) => {
            const item = document.createElement("li");
            item.textContent = point;
            list.append(item);
          });

          const button = document.createElement("button");
          button.className = "button session-register";
          button.type = "button";
          button.dataset.interest = session.name;
          button.textContent = `Register for ${session.name}`;

          button.addEventListener("click", () => {
            const checkbox = Array.from(
              document.querySelectorAll('input[name="interest"]')
            ).find((input) => input.value === session.name);

            if (checkbox) {
              checkbox.checked = true;
            }

            document
              .getElementById("registration")
              .scrollIntoView({
                behavior: "smooth",
                block: "start"
              });

            window.setTimeout(() => {
              document.getElementById("parentName").focus({
                preventScroll: true
              });
            }, 650);
          });

          card.append(icon, title, description, list, button);
          elements.sessionsGrid.append(card);
        });
      }

      function createBenefits(eventData) {
        elements.benefitsGrid.replaceChildren();

        eventData.benefits.forEach((benefit, index) => {
          const card = document.createElement("article");
          card.className = "benefit";

          const number = document.createElement("span");
          number.className = "benefit-number";
          number.textContent = String(index + 1).padStart(2, "0");

          const title = document.createElement("h3");
          title.textContent = benefit.title;

          const text = document.createElement("p");
          text.textContent = benefit.text;

          card.append(number, title, text);
          elements.benefitsGrid.append(card);
        });
      }

      function createDetails(eventData) {
        elements.detailList.replaceChildren();

        eventData.details.forEach((detail) => {
          const row = document.createElement("div");
          row.className = "detail-row";

          const label = document.createElement("dt");
          label.textContent = detail.label;

          const value = document.createElement("dd");
          value.innerHTML = detail.value;

          row.append(label, value);
          elements.detailList.append(row);
        });

        elements.includedList.replaceChildren();

        eventData.included.forEach((includedItem) => {
          const item = document.createElement("li");
          item.textContent = includedItem;
          elements.includedList.append(item);
        });
      }

      function createTrustItems(eventData) {
        elements.trustList.replaceChildren();

        eventData.trustItems.forEach((trustItem) => {
          const card = document.createElement("article");
          card.className = "trust-item";

          const title = document.createElement("strong");
          title.textContent = trustItem.title;

          const text = document.createElement("span");
          text.textContent = trustItem.text;

          card.append(title, text);
          elements.trustList.append(card);
        });
      }

      function createFaqs(eventData) {
        elements.faqList.replaceChildren();

        eventData.faqs.forEach((faq, index) => {
          const article = document.createElement("article");
          article.className = "faq-item";

          const answerId =
            `${eventData.key}-faq-answer-${index + 1}`;

          const question = document.createElement("button");
          question.className = "faq-question";
          question.type = "button";
          question.setAttribute("aria-expanded", "false");
          question.setAttribute("aria-controls", answerId);

          const questionText = document.createElement("span");
          questionText.textContent = faq.question;

          const plus = document.createElement("span");
          plus.className = "faq-plus";
          plus.setAttribute("aria-hidden", "true");

          const answer = document.createElement("div");
          answer.className = "faq-answer";
          answer.id = answerId;
          answer.textContent = faq.answer;

          question.append(questionText, plus);
          article.append(question, answer);
          elements.faqList.append(article);

          question.addEventListener("click", () => {
            const isOpen =
              question.getAttribute("aria-expanded") === "true";

            elements.faqList
              .querySelectorAll(".faq-question")
              .forEach((otherQuestion) => {
                if (otherQuestion !== question) {
                  otherQuestion.setAttribute(
                    "aria-expanded",
                    "false"
                  );

                  const otherAnswerId =
                    otherQuestion.getAttribute("aria-controls");

                  document
                    .getElementById(otherAnswerId)
                    .classList.remove("is-open");
                }
              });

            question.setAttribute(
              "aria-expanded",
              String(!isOpen)
            );

            answer.classList.toggle("is-open", !isOpen);
          });
        });
      }

      function createActivityChoices(eventData) {
        elements.activityChoices.replaceChildren();

        eventData.sessions.forEach((session, index) => {
          const wrapper = document.createElement("div");
          wrapper.className = "choice";

          const input = document.createElement("input");
          input.id = `${eventData.key}-interest-${index}`;
          input.name = "interest";
          input.type = "checkbox";
          input.value = session.name;

          const label = document.createElement("label");
          label.htmlFor = input.id;
          label.textContent = session.name;

          wrapper.append(input, label);
          elements.activityChoices.append(wrapper);
        });
      }

      function createPaymentArea(eventData) {
        elements.paymentArea.replaceChildren();

        if (eventData.isFree) {
          const box = document.createElement("div");
          box.className = "fee-form-box";

          const title = document.createElement("strong");
          title.textContent = "Programme fee: Free";

          const text = document.createElement("span");
          text.textContent =
            "No payment method is required for this programme.";

          const input = document.createElement("input");
          input.type = "hidden";
          input.name = "paymentMethod";
          input.value = "Not applicable — free programme";

          box.append(title, text, input);
          elements.paymentArea.append(box);
          return;
        }

        const label = document.createElement("span");
        label.className = "group-label";
        label.innerHTML =
          'Preferred payment method <span class="required">*</span>';

        const choices = document.createElement("div");
        choices.className = "choice-group";

        const methods = ["Bank Transfer", "Cash"];

        methods.forEach((method, index) => {
          const wrapper = document.createElement("div");
          wrapper.className = "choice";

          const input = document.createElement("input");
          input.id = `payment-method-${index}`;
          input.name = "paymentMethod";
          input.type = "radio";
          input.value = method;
          input.required = true;

          const methodLabel = document.createElement("label");
          methodLabel.htmlFor = input.id;
          methodLabel.textContent = method;

          wrapper.append(input, methodLabel);
          choices.append(wrapper);
        });

        elements.paymentArea.append(label, choices);
      }

      function updateAgeRules(eventData) {
        elements.ageInput.setCustomValidity("");
        elements.ageHelp.textContent = eventData.ageHelp;

        if (eventData.ageMinimum === null) {
          elements.ageInput.removeAttribute("min");
        } else {
          elements.ageInput.min = String(eventData.ageMinimum);
        }

        if (eventData.ageMaximum === null) {
          elements.ageInput.removeAttribute("max");
        } else {
          elements.ageInput.max = String(eventData.ageMaximum);
        }

        validateCalculatedAge();
      }

      function renderEvent(eventKey, options = {}) {
        const {
          updateUrl = true,
          scrollToTop = false
        } = options;

        if (!events[eventKey]) {
          eventKey = "summer";
        }

        activeEventKey = eventKey;
        const eventData = getActiveEvent();

        document.title = eventData.pageTitle;

        elements.announcement.innerHTML = eventData.announcement;
        elements.heroEyebrow.textContent = eventData.heroEyebrow;
        elements.heroTitle.innerHTML = eventData.heroTitle;
        elements.heroLead.textContent = eventData.heroLead;

        elements.eventPoster.hidden = false;
        elements.posterFallback.hidden = true;
        elements.eventPoster.src = eventData.poster;
        elements.eventPoster.alt = eventData.posterAlt;
        elements.posterFallbackTitle.textContent =
          eventData.displayName;
        elements.posterNote.textContent = eventData.posterNote;

        createHeroFacts(eventData);
        createQuickStrip(eventData);

        elements.activitiesTitle.textContent =
          eventData.activitiesTitle;

        elements.activitiesIntroduction.textContent =
          eventData.activitiesIntroduction;

        createSessions(eventData);

        elements.benefitsEyebrow.textContent =
          eventData.benefitsEyebrow;

        elements.benefitsTitle.textContent =
          eventData.benefitsTitle;

        elements.benefitsIntroduction.textContent =
          eventData.benefitsIntroduction;

        createBenefits(eventData);

        elements.detailsTitle.textContent =
          eventData.detailsTitle;

        elements.feeAmount.textContent = eventData.fee;
        elements.feeDescription.textContent =
          eventData.feeDescription;

        createDetails(eventData);

        elements.trustEyebrow.textContent =
          eventData.trustEyebrow;

        elements.trustTitle.textContent =
          eventData.trustTitle;

        elements.trustIntroduction.textContent =
          eventData.trustIntroduction;

        createTrustItems(eventData);
        createFaqs(eventData);

        elements.registrationTitle.textContent =
          eventData.registrationTitle;

        elements.registrationIntroduction.textContent =
          eventData.registrationIntroduction;

        elements.formProgrammeName.textContent =
          eventData.name;

        elements.formProgrammeDescription.textContent =
          eventData.formDescription;

        elements.programmeInput.value = eventData.name;

        createActivityChoices(eventData);
        createPaymentArea(eventData);
        updateAgeRules(eventData);

        elements.finalCtaTitle.textContent =
          eventData.finalCtaTitle;

        elements.finalCtaText.textContent =
          eventData.finalCtaText;

        elements.footerProgrammeName.textContent =
          eventData.name;

        elements.mobileProgrammeName.textContent =
          eventData.name;

        elements.mobileProgrammeFee.textContent =
          eventData.feeShort;

        updateEventTabs();
        closeMobileMenu();

        if (updateUrl) {
          const url = new URL(window.location.href);
          url.searchParams.set("event", eventData.key);
          url.hash = "home";

          history.pushState(
            { event: eventData.key, view: "website" },
            "",
            url
          );
        }

        if (scrollToTop) {
          document
            .getElementById("home")
            .scrollIntoView({
              behavior: "smooth",
              block: "start"
            });
        }
      }

      document.querySelectorAll(".event-tab").forEach((tab) => {
        tab.addEventListener("click", () => {
          renderEvent(tab.dataset.event, {
            updateUrl: true,
            scrollToTop: true
          });
        });
      });

      elements.eventPoster.addEventListener("error", () => {
        elements.eventPoster.hidden = true;
        elements.posterFallback.hidden = false;
      });

      function calculateAge(dateString) {
        if (!dateString) {
          return "";
        }

        const birthDate = new Date(`${dateString}T00:00:00`);
        const today = new Date();

        if (
          Number.isNaN(birthDate.getTime()) ||
          birthDate > today
        ) {
          return "";
        }

        let age =
          today.getFullYear() - birthDate.getFullYear();

        const birthdayHasOccurred =
          today.getMonth() > birthDate.getMonth() ||
          (
            today.getMonth() === birthDate.getMonth() &&
            today.getDate() >= birthDate.getDate()
          );

        if (!birthdayHasOccurred) {
          age -= 1;
        }

        return age;
      }

      function validateCalculatedAge() {
        const eventData = getActiveEvent();
        const age = Number(elements.ageInput.value);

        elements.ageInput.setCustomValidity("");

        if (!elements.ageInput.value) {
          return;
        }

        if (
          eventData.ageMinimum !== null &&
          age < eventData.ageMinimum
        ) {
          elements.ageInput.setCustomValidity(
            `This programme is for children aged ${eventData.ageMinimum} to ${eventData.ageMaximum} years.`
          );

          return;
        }

        if (
          eventData.ageMaximum !== null &&
          age > eventData.ageMaximum
        ) {
          elements.ageInput.setCustomValidity(
            `This programme is for children aged ${eventData.ageMinimum} to ${eventData.ageMaximum} years.`
          );
        }
      }

      elements.dateOfBirthInput.addEventListener("change", () => {
        const age = calculateAge(
          elements.dateOfBirthInput.value
        );

        elements.ageInput.value =
          age === "" ? "" : String(age);

        validateCalculatedAge();
      });

      document
        .querySelectorAll('input[name="hasExperience"]')
        .forEach((radio) => {
          radio.addEventListener("change", () => {
            const hasExperience =
              document.querySelector(
                'input[name="hasExperience"]:checked'
              )?.value === "Yes";

            elements.experienceDetailsField.hidden =
              !hasExperience;

            elements.experienceDetailsInput.required =
              hasExperience;

            if (!hasExperience) {
              elements.experienceDetailsInput.value = "";
            }
          });
        });

      function cleanText(value, fallback = "Not provided") {
        const cleaned = String(value ?? "")
          .replace(/\s+/g, " ")
          .trim();

        return cleaned || fallback;
      }

      function getSelectedValue(formData, fieldName) {
        return cleanText(formData.get(fieldName));
      }

      function buildRegistrationData(formData) {
        const eventData = getActiveEvent();
        const interests = formData.getAll("interest");

        return {
          eventKey: eventData.key,
          parentName:
            getSelectedValue(formData, "parentName"),
          phone:
            getSelectedValue(formData, "phone"),
          whatsapp:
            getSelectedValue(formData, "whatsapp"),
          email:
            getSelectedValue(formData, "email"),
          address:
            getSelectedValue(formData, "address"),

          childName:
            getSelectedValue(formData, "childName"),
          gender:
            getSelectedValue(formData, "gender"),
          dateOfBirth:
            getSelectedValue(formData, "dateOfBirth"),
          age:
            getSelectedValue(formData, "age"),
          currentSchool:
            getSelectedValue(formData, "currentSchool"),
          currentClass:
            getSelectedValue(formData, "currentClass"),

          programme: eventData.name,
          fee: eventData.fee,
          interests:
            interests.length > 0
              ? interests.join(", ")
              : "All programme activities",

          hasExperience:
            getSelectedValue(formData, "hasExperience"),

          experienceDetails:
            getSelectedValue(
              formData,
              "experienceDetails",
              "None"
            ),

          medical:
            getSelectedValue(
              formData,
              "medical",
              "None disclosed"
            ),

          emergencyName:
            getSelectedValue(formData, "emergencyName"),

          emergencyRelationship:
            getSelectedValue(
              formData,
              "emergencyRelationship"
            ),

          emergencyPhone:
            getSelectedValue(formData, "emergencyPhone"),

          paymentMethod:
            getSelectedValue(formData, "paymentMethod"),

          photoPermission:
            formData.has("photoOptOut")
              ? "Parent opted out of promotional photo or video use"
              : "Permission granted unless the parent later notifies the school"
        };
      }

      function buildWhatsAppMessage(data) {
        return [
          "*GREENFIELDS PINNACLE SCHOOL, ABUJA*",
          "*DILIGENT HANDS*",
          `*${data.programme.toUpperCase()} REGISTRATION*`,
          "",
          "*PARENT / GUARDIAN*",
          `Name: ${data.parentName}`,
          `Phone: ${data.phone}`,
          `WhatsApp: ${data.whatsapp}`,
          `Email: ${data.email}`,
          `Address: ${data.address}`,
          "",
          "*CHILD*",
          `Name: ${data.childName}`,
          `Gender: ${data.gender}`,
          `Date of Birth: ${data.dateOfBirth}`,
          `Age: ${data.age}`,
          `Current School: ${data.currentSchool}`,
          `Current Class: ${data.currentClass}`,
          "",
          "*PROGRAMME*",
          `Programme: ${data.programme}`,
          `Programme Fee: ${data.fee}`,
          `Activities of Interest: ${data.interests}`,
          `Previous Experience: ${data.hasExperience}`,
          `Experience Details: ${data.experienceDetails}`,
          "",
          "*HEALTH AND EMERGENCY*",
          `Allergies / Medical / Support Information: ${data.medical}`,
          `Emergency Contact: ${data.emergencyName}`,
          `Relationship: ${data.emergencyRelationship}`,
          `Emergency Phone: ${data.emergencyPhone}`,
          "",
          "*PAYMENT*",
          `Payment Method: ${data.paymentMethod}`,
          "",
          "*PHOTO / VIDEO PREFERENCE*",
          data.photoPermission,
          "",
          "The parent or guardian confirmed that the information is accurate and consented to the child's participation."
        ].join("\n");
      }

      function getWhatsAppUrl(message) {
        return `https://wa.me/${SCHOOL_WHATSAPP_NUMBER}?text=${encodeURIComponent(
          message
        )}`;
      }

      function createSummaryRow(label, value) {
        const row = document.createElement("div");
        row.className = "summary-row";

        const labelElement = document.createElement("span");
        labelElement.textContent = label;

        const valueElement = document.createElement("span");
        valueElement.textContent = value;

        row.append(labelElement, valueElement);
        return row;
      }

      function showThankYou(
        data,
        whatsappUrl,
        updateHistory = true
      ) {
        const eventData =
          events[data.eventKey] || getActiveEvent();

        elements.registrationSummary.replaceChildren(
          createSummaryRow(
            "Parent or guardian",
            data.parentName
          ),
          createSummaryRow("Child", data.childName),
          createSummaryRow("Programme", data.programme),
          createSummaryRow("Activities", data.interests),
          createSummaryRow("Programme fee", data.fee)
        );

        elements.thankYouIntroduction.textContent =
          eventData.thankYouIntroduction;

        elements.thankYouNextStep.textContent =
          eventData.thankYouNextStep;

        elements.sendAgainButton.href = whatsappUrl;

        elements.website.hidden = true;
        elements.thankYouPage.classList.add("is-visible");
        document.body.classList.remove("menu-open");

        document.title =
          `Registration Prepared | ${eventData.name}`;

        if (updateHistory) {
          const url = new URL(window.location.href);
          url.searchParams.set("event", eventData.key);
          url.hash = "thank-you";

          history.pushState(
            {
              event: eventData.key,
              view: "thank-you"
            },
            "",
            url
          );
        }

        window.scrollTo({
          top: 0,
          behavior: "auto"
        });
      }

      function showWebsite(updateHistory = true) {
        const eventData = getActiveEvent();

        elements.website.hidden = false;
        elements.thankYouPage.classList.remove("is-visible");
        document.title = eventData.pageTitle;

        if (updateHistory) {
          const url = new URL(window.location.href);
          url.searchParams.set("event", eventData.key);
          url.hash = "home";

          history.pushState(
            {
              event: eventData.key,
              view: "website"
            },
            "",
            url
          );
        }

        window.scrollTo({
          top: 0,
          behavior: "auto"
        });
      }

      elements.registrationForm.addEventListener(
        "submit",
        (event) => {
          event.preventDefault();

          elements.formMessage.classList.remove(
            "is-visible"
          );

          elements.formMessage.textContent = "";

          validateCalculatedAge();

          if (!elements.registrationForm.checkValidity()) {
            elements.registrationForm.reportValidity();

            elements.formMessage.textContent =
              "Please complete all required fields and check the child's age before submitting.";

            elements.formMessage.classList.add(
              "is-visible"
            );

            elements.formMessage.scrollIntoView({
              behavior: "smooth",
              block: "center"
            });

            return;
          }

          const formData = new FormData(
            elements.registrationForm
          );

          const registrationData =
            buildRegistrationData(formData);

          const message =
            buildWhatsAppMessage(registrationData);

          const whatsappUrl =
            getWhatsAppUrl(message);

          const storedRegistration = {
            data: registrationData,
            whatsappUrl
          };

          sessionStorage.setItem(
            "greenfieldsRegistration",
            JSON.stringify(storedRegistration)
          );

          const whatsappWindow = window.open(
            whatsappUrl,
            "_blank",
            "noopener,noreferrer"
          );

          if (!whatsappWindow) {
            elements.sendAgainButton.href = whatsappUrl;
          }

          showThankYou(
            registrationData,
            whatsappUrl
          );
        }
      );

      elements.backToWebsiteButton.addEventListener(
        "click",
        () => {
          showWebsite();
        }
      );

      window.addEventListener("popstate", () => {
        const url = new URL(window.location.href);
        const requestedEvent =
          events[url.searchParams.get("event")]
            ? url.searchParams.get("event")
            : "summer";

        renderEvent(requestedEvent, {
          updateUrl: false,
          scrollToTop: false
        });

        if (url.hash === "#thank-you") {
          const stored = sessionStorage.getItem(
            "greenfieldsRegistration"
          );

          if (stored) {
            try {
              const parsed = JSON.parse(stored);

              showThankYou(
                parsed.data,
                parsed.whatsappUrl,
                false
              );
            } catch {
              showWebsite(false);
            }
          } else {
            showWebsite(false);
          }
        } else {
          showWebsite(false);
        }
      });

      function initialisePage() {
        const url = new URL(window.location.href);

        const requestedEvent =
          events[url.searchParams.get("event")]
            ? url.searchParams.get("event")
            : "summer";

        renderEvent(requestedEvent, {
          updateUrl: false,
          scrollToTop: false
        });

        if (url.hash === "#thank-you") {
          const stored = sessionStorage.getItem(
            "greenfieldsRegistration"
          );

          if (stored) {
            try {
              const parsed = JSON.parse(stored);

              showThankYou(
                parsed.data,
                parsed.whatsappUrl,
                false
              );
            } catch {
              showWebsite(false);
            }
          }
        }
      }

      initialisePage();
    })();
