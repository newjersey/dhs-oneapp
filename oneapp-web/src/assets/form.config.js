/*
import _ from 'lodash';

const ipsum = `Lorem ipsum dolor sit amet consectetur adipiscing elit Quisque odio magna ornare eu tortor sit amet efficitur vestibulum dolor 
Sed id malesuada nibh Vestibulum nec massa in leo dictum finibus Sed molestie eleifend ultrices Sed sodales mollis nisl id pulvinar Etiam nec 
iaculis leo at lacinia velit Vivamus aliquet risus vitae metus accumsan vel cursus erat semper Ut in congue urna ac placerat augue 
Duis a justo ligula Duis molestie nibh in fringilla consectetur arcu ex placerat mi vitae lobortis orci ex id erat Nulla facilisi Nulla 
massa enim hendrerit eu sapien ut faucibus ultricies leo Quisque fringilla risus et lectus efficitur condimentum Suspendisse ac auctor arcu 
sed consectetur justo Donec dignissim pretium augue non dignissim augue rhoncus et Integer scelerisque tincidunt mauris id interdum metus tincidunt quis
Nam et risus eu metus bibendum aliquet vitae vitae eros Quisque volutpat mauris sem in mattis metus aliquam nec Fusce ac massa dui Donec interdum 
pulvinar felis vitae porta Sed finibus metus eget nibh tincidunt convallis Nam eleifend nisi ut nisl pulvinar id scelerisque tortor facilisis 
Vestibulum vehicula sem eros quis gravida enim dignissim sed Morbi eget egestas orci Sed mollis finibus mollis Proin malesuada nibh mattis augue 
tincidunt ac facilisis nisl euismod In efficitur magna eu accumsan aliquet erat enim lacinia libero vitae lobortis turpis urna non est 
Nunc eu odio commodo luctus mi ac facilisis metus Maecenas vulputate mi quis laoreet elementum arcu nisl fringilla odio ac pretium tortor 
massa imperdiet neque Suspendisse eget pretium mi Praesent id libero ac quam dictum cursus Suspendisse a nibh sit amet lorem pharetra hendrerit 
Praesent vitae porta felis quis volutpat ante Mauris quis enim sodales mollis ante vel ultricies arcu Cras enim magna hendrerit a est ut 
vestibulum elementum ipsum Suspendisse tempus nibh ut libero pulvinar id porttitor dui pretium Nam venenatis mi et elit efficitur aliquet 
Nullam ut suscipit felis Vestibulum ullamcorper lorem libero tincidunt gravida dui auctor ut Aliquam et ante accumsan pulvinar ante eu 
egestas turpis Etiam nec risus velit Morbi aliquet odio non consequat elementum Sed eu viverra lacus Nullam tincidunt suscipit orci ac molestie 
Vestibulum tincidunt sed odio vel laoreet Vestibulum sodales blandit eros nec congue lorem accumsan ac Class aptent taciti sociosqu ad litora 
torquent per conubia nostra per inceptos himenaeos Nullam vitae elementum libero Quisque justo magna posuere vitae vehicula vitae auctor et metus 
Suspendisse ut tortor sed ante auctor porta vel nec odio Quisque ut imperdiet nibh Nulla pellentesque odio eu scelerisque semper 
Aliquam egestas nibh nec aliquam suscipit mauris dui ullamcorper erat sed vulputate augue lorem at orci Aenean ac imperdiet neque 
Nam dapibus aliquam eros sed efficitur Integer cursus risus id accumsan accumsan Praesent ornare nulla at molestie luctus libero metus 
accumsan massa eget dignissim erat felis in erat Donec ex velit commodo in ex in lobortis cursus lacus In quis sapien arcu`.split(' ');

const getIpsum = (noWords) => {
    return _.sample(ipsum, noWords).join(' ');
}
*/

module.exports = [
    {
        "id": "5f68fe895db214bb63d98198",
        "order": 0,
        "type": "section",
        "title": "Basic Information",
        "pages": [
            {
                "id": "5f68fe8c5db214bb63d98199",
                "type": "page",
                "title": "We're here to help",
                "order": 0,
                "canSkip": false,
                "buttons": {
                    "next": {
                        "variant": "primary",
                        "_id": "5f7c9329482f7682c859cc0d",
                        "text": "Next",
                        "icon": "fas fa-arrow-circle-left"
                    },
                    "prev": {
                        "variant": "primary",
                        "_id": "5f7c9329482f7682c859cc0e",
                        "text": "Prev",
                        "icon": "fas fa-arrow-circle-right"
                    },
                    "skip": {
                        "variant": "link",
                        "_id": "5f7c9329482f7682c859cc0f",
                        "text": "Skip"
                    },
                    "submit": {
                        "variant": "link",
                        "_id": "5f7c9329482f7682c859cc10",
                        "text": "Next",
                        "icon": "fas fa-arrow-circle-left"
                    }
                },
                "sectionId": "5f68fe895db214bb63d98198",
                "fields": [
                    {
                        "id": "5f7278c55290428480be58d9",
                        "type": "statement",
                        "order": 0,
                        "label": "Opening Statement",
                        "lead": "It should take about 15 minutes to complete this application. If you aren't sure how to answer any questions, please don't worry. Give the best answer you can, and we'll work with you to confirm the details later.",
                        "required": true,
                        "linkedQuestion": null,
                        "options": []
                    }
                ]
            },
            {
                "id": "5f690ed9aeb376bc7403001e",
                "type": "page",
                "title": "Let’s determine which program you’re interested in",
                "order": 1,
                "canSkip": false,
                "buttons": {
                    "next": {
                        "variant": "primary",
                        "_id": "5f7c9329482f7682c859cc11",
                        "text": "Next",
                        "icon": "fas fa-arrow-circle-left"
                    },
                    "prev": {
                        "variant": "primary",
                        "_id": "5f7c9329482f7682c859cc12",
                        "text": "Prev",
                        "icon": "fas fa-arrow-circle-right"
                    },
                    "skip": {
                        "variant": "link",
                        "_id": "5f7c9329482f7682c859cc13",
                        "text": "Skip"
                    },
                    "submit": {
                        "variant": "link",
                        "_id": "5f7c9329482f7682c859cc14",
                        "text": "Next",
                        "icon": "fas fa-arrow-circle-left"
                    }
                },
                "sectionId": "5f68fe895db214bb63d98198",
                "fields": [
                    {
                        "id": "5f776babcb70fb8d1de64f71",
                        "type": "checkbox",
                        "order": 0,
                        "label": "Which programs do you want to apply for today?",
                        "lead": "\nYou can apply for all or just one program. Check all of the benefits you want to apply for.",
                        "required": true,
                        "linkedQuestion": null,
                        "options": [
                            {
                                "value": 1,
                                "label": "NJ Supplemental Nutrition Assistance Program (SNAP)",
                                "description": "Money for food at supermarkets, farmer’s markets, and convenience stores."
                            },
                            {
                                "value": 2,
                                "label": "Temporary Assistance for Needy Families (TANF)",
                                "description": "Money for expenses such as rent, utilities, and transportation for families with children."
                            },
                            {
                                "value": 3,
                                "label": "General Assistance (GA)",
                                "description": "Money for expenses such as rent, utilities, and transportation for single adults and adult couples with no children"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "5f690edbaeb376bc7403001f",
                "type": "page",
                "title": "Tell us about yourself",
                "order": 2,
                "canSkip": false,
                "buttons": {
                    "next": {
                        "variant": "primary",
                        "_id": "5f7c9329482f7682c859cc15",
                        "text": "Next",
                        "icon": "fas fa-arrow-circle-left"
                    },
                    "prev": {
                        "variant": "primary",
                        "_id": "5f7c9329482f7682c859cc16",
                        "text": "Prev",
                        "icon": "fas fa-arrow-circle-right"
                    },
                    "skip": {
                        "variant": "link",
                        "_id": "5f7c9329482f7682c859cc17",
                        "text": "Skip"
                    },
                    "submit": {
                        "variant": "link",
                        "_id": "5f7c9329482f7682c859cc18",
                        "text": "Next",
                        "icon": "fas fa-arrow-circle-left"
                    }
                },
                "sectionId": "5f68fe895db214bb63d98198",
                "fields": [
                    {
                        "id": "5f7b6cab57938f2249c218cf",
                        "type": "text",
                        "order": 0,
                        "label": "What's your first name?",
                        "help": "Legally as it appears on your ID",
                        "required": true,
                        "linkedQuestion": null
                    },
                    {
                        "id": "5f7b6cb057938f2249c218d0",
                        "type": "text",
                        "order": 1,
                        "label": "What’s your middle name?",
                        "help": "This is optional",
                        "required": true,
                        "linkedQuestion": null
                    },
                    {
                        "id": "5f7b724e4254802e64eaec32",
                        "type": "radio",
                        "order": 2,
                        "label": "What’s your current gender identity?",
                        "required": true,
                        "linkedQuestion": null,
                        "options": [
                            {
                                "value": 1,
                                "label": "Male"
                            },
                            {
                                "value": 2,
                                "label": "Female"
                            },
                            {
                                "value": 3,
                                "label": "Transgender"
                            },
                            {
                                "value": 4,
                                "label": "Non-binary"
                            }
                        ]
                    },
                    {
                        "id": "5f7b725ed3f63f2e75907591",
                        "type": "date",
                        "order": 3,
                        "label": "When were you born?",
                        "required": true,
                        "linkedQuestion": null,
                        "options": []
                    },
                    {
                        "id": "5f7b72da5399cc2f068ef36c",
                        "type": "radio",
                        "order": 4,
                        "label": "What sex were you assigned at birth?",
                        "required": true,
                        "linkedQuestion": null,
                        "options": [
                            {
                                "value": 1,
                                "label": "Male"
                            },
                            {
                                "value": 2,
                                "label": "Female"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "5f7b8cbee06e3c3af52df2d5",
                "type": "page",
                "title": "Let’s get your contact info.",
                "order": 3,
                "canSkip": false,
                "buttons": {
                    "next": {
                        "variant": "primary",
                        "_id": "5f7c9329482f7682c859cc1d",
                        "text": "Next",
                        "icon": "fas fa-arrow-circle-left"
                    },
                    "prev": {
                        "variant": "primary",
                        "_id": "5f7c9329482f7682c859cc1e",
                        "text": "Prev",
                        "icon": "fas fa-arrow-circle-right"
                    },
                    "skip": {
                        "variant": "link",
                        "_id": "5f7c9329482f7682c859cc1f",
                        "text": "Skip"
                    },
                    "submit": {
                        "variant": "link",
                        "_id": "5f7c9329482f7682c859cc20",
                        "text": "Next",
                        "icon": "fas fa-arrow-circle-left"
                    }
                },
                "sectionId": "5f68fe895db214bb63d98198",
                "fields": [
                    {
                        "id": "5f7b8ce4e06e3c3af52df2d6",
                        "type": "text",
                        "order": 0,
                        "label": "What’s your phone number?",
                        "help": "We’ll call you to follow up on your application.",
                        "required": true,
                        "linkedQuestion": null
                    },
                    {
                        "id": "5f7b8cede06e3c3af52df2d7",
                        "type": "text",
                        "order": 1,
                        "label": "Field 18",
                        "required": true,
                        "linkedQuestion": null
                    },
                    {
                        "id": "5f7b8cede06e3c3af52df2d8",
                        "type": "email",
                        "order": 2,
                        "label": "What’s your email address?",
                        "help": "This is optional. If you provide your email, we'll use it to send you important updates about the application process.",
                        "required": true,
                        "linkedQuestion": null,
                        "options": []
                    },
                    {
                        "id": "5f7b8ceee06e3c3af52df2d9",
                        "type": "dropdown",
                        "order": 3,
                        "label": "What's your preferred language?",
                        "help": "Your county office will make sure you receive a follow-up call from someone who speaks your preferred language.",
                        "required": true,
                        "linkedQuestion": null,
                        "options": []
                    },
                    {
                        "id": "5f7b8ceee06e3c3af52df2da",
                        "type": "checkbox",
                        "order": 4,
                        "label": "Do you have hearing or vision loss?",
                        "help": "Your county office will provide the accommodations you need.",
                        "required": true,
                        "linkedQuestion": null,
                        "options": [
                            {
                                "value": 1,
                                "label": "Hearing Loss"
                            },
                            {
                                "value": 2,
                                "label": "Vision Loss"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "5f7b8fc6e06e3c3af52df2db",
                "type": "page",
                "title": "Tell us about your living situation.",
                "order": 4,
                "canSkip": false,
                "buttons": {
                    "next": {
                        "variant": "primary",
                        "_id": "5f7c9329482f7682c859cc21",
                        "text": "Next",
                        "icon": "fas fa-arrow-circle-left"
                    },
                    "prev": {
                        "variant": "primary",
                        "_id": "5f7c9329482f7682c859cc22",
                        "text": "Prev",
                        "icon": "fas fa-arrow-circle-right"
                    },
                    "skip": {
                        "variant": "link",
                        "_id": "5f7c9329482f7682c859cc23",
                        "text": "Skip"
                    },
                    "submit": {
                        "variant": "link",
                        "_id": "5f7c9329482f7682c859cc24",
                        "text": "Next",
                        "icon": "fas fa-arrow-circle-left"
                    }
                },
                "sectionId": "5f68fe895db214bb63d98198",
                "fields": [
                    {
                        "id": "5f7b8fd2e06e3c3af52df2dc",
                        "type": "radio",
                        "order": 0,
                        "label": "Are you currently experiencing homelessness?",
                        "required": true,
                        "linkedQuestion": null,
                        "options": [
                            {
                                "value": 1,
                                "label": "Yes"
                            },
                            {
                                "value": 2,
                                "label": "No"
                            }
                        ]
                    },
                    {
                        "id": "5f7b8fd3e06e3c3af52df2dd",
                        "type": "text",
                        "order": 1,
                        "label": "What’s your street address?",
                        "required": true,
                        "linkedQuestion": {
                            "id": "5f7b8fd2e06e3c3af52df2dc",
                            "type": "visible",
                            "answer": "false"
                        }
                    },
                    {
                        "id": "5f7b8fd3e06e3c3af52df2de",
                        "type": "text",
                        "order": 2,
                        "label": "What city do you live in?",
                        "required": true,
                        "linkedQuestion": {
                            "id": "5f7b8fd2e06e3c3af52df2dc",
                            "type": "visible",
                            "answer": "false"
                        }
                    },
                    {
                        "id": "5f7b8fd4e06e3c3af52df2df",
                        "type": "zip",
                        "order": 3,
                        "label": "What’s your ZIP code?",
                        "required": true,
                        "linkedQuestion": {
                            "id": "5f7b8fd2e06e3c3af52df2dc",
                            "type": "visible",
                            "answer": "false"
                        },
                        "options": []
                    },
                    {
                        "id": "5f7b8fd4e06e3c3af52df2e0",
                        "type": "county",
                        "order": 4,
                        "label": "What county do you live in?",
                        "help": "We've selected a county based on your address. If it's not correct, please select a different county.",
                        "required": true,
                        "linkedQuestion": {
                            "id": "5f7b8fd2e06e3c3af52df2dc",
                            "type": "visible",
                            "answer": "false"
                        },
                        "options": []
                    },
                    {
                        "id": "5f7b8fd5e06e3c3af52df2e1",
                        "type": "radio",
                        "order": 5,
                        "label": "Is this the best address for you to receive mail?",
                        "required": true,
                        "linkedQuestion": {
                            "id": "5f7b8fd2e06e3c3af52df2dc",
                            "type": "visible",
                            "answer": "false"
                        },
                        "options": [
                            {
                                "value": 1,
                                "label": "Yes, send mail to this address"
                            },
                            {
                                "value": 2,
                                "label": "No, use a different address for mail"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "5f7b9365e06e3c3af52df2e2",
                "type": "page",
                "title": "Are you the payee?",
                "order": 5,
                "canSkip": false,
                "buttons": {
                    "next": {
                        "variant": "primary",
                        "_id": "5f7c9329482f7682c859cc25",
                        "text": "Next",
                        "icon": "fas fa-arrow-circle-left"
                    },
                    "prev": {
                        "variant": "primary",
                        "_id": "5f7c9329482f7682c859cc26",
                        "text": "Prev",
                        "icon": "fas fa-arrow-circle-right"
                    },
                    "skip": {
                        "variant": "link",
                        "_id": "5f7c9329482f7682c859cc27",
                        "text": "Skip"
                    },
                    "submit": {
                        "variant": "link",
                        "_id": "5f7c9329482f7682c859cc28",
                        "text": "Next",
                        "icon": "fas fa-arrow-circle-left"
                    }
                },
                "sectionId": "5f68fe895db214bb63d98198",
                "fields": [
                    {
                        "id": "5f7b936ee06e3c3af52df2e3",
                        "type": "boolean",
                        "order": 0,
                        "label": "Are you the payee?",
                        "lead": "The payee is the adult household member who will be issued the benefits if you’re deemed eligible for NJ SNAP, TANF, or GA benefits.",
                        "required": true,
                        "linkedQuestion": null,
                        "options": []
                    }
                ]
            },
            {
                "id": "5f7bc13ce06e3c3af52df2e4",
                "type": "page",
                "title": "Let's find out if you may be eligible for expedited SNAP benefits.",
                "order": 6,
                "canSkip": false,
                "buttons": {
                    "next": {
                        "variant": "primary",
                        "_id": "5f7c9329482f7682c859cc29",
                        "text": "Next",
                        "icon": "fas fa-arrow-circle-left"
                    },
                    "prev": {
                        "variant": "primary",
                        "_id": "5f7c9329482f7682c859cc2a",
                        "text": "Prev",
                        "icon": "fas fa-arrow-circle-right"
                    },
                    "skip": {
                        "variant": "link",
                        "_id": "5f7c9329482f7682c859cc2b",
                        "text": "Skip"
                    },
                    "submit": {
                        "variant": "link",
                        "_id": "5f7c9329482f7682c859cc2c",
                        "text": "Next",
                        "icon": "fas fa-arrow-circle-left"
                    }
                },
                "sectionId": "5f68fe895db214bb63d98198",
                "fields": [
                    {
                        "id": "5f7bcfc3a1b7e34d18e15858",
                        "type": "boolean",
                        "order": 0,
                        "label": "Is your household's monthly income less than $150 and your household's total cash and money in the bank $100 or less?",
                        "required": true,
                        "linkedQuestion": null,
                        "options": []
                    },
                    {
                        "id": "5f7bcfc4a1b7e34d18e15859",
                        "type": "boolean",
                        "order": 1,
                        "label": "Is your household’s monthly income and money in the bank less than your monthly housing expenses?",
                        "required": true,
                        "linkedQuestion": null,
                        "options": []
                    },
                    {
                        "id": "5f7bcfc4a1b7e34d18e1585a",
                        "type": "boolean",
                        "order": 2,
                        "label": "Are you or anyone in your household a migrant or seasonal farmworker with $100 or less in the bank?",
                        "required": true,
                        "linkedQuestion": null,
                        "options": []
                    }
                ]
            },
            {
                "id": "5f7bd027a1b7e34d18e1585b",
                "type": "page",
                "title": "You’re allowed to submit an application with only your name and address. However, we strongly encourage you to continue working on the application. ",
                "order": 7,
                "canSkip": false,
                "buttons": {
                    "next": {
                        "variant": "primary",
                        "_id": "5f7c9329482f7682c859cc2d",
                        "text": "Next",
                        "icon": "fas fa-arrow-circle-left"
                    },
                    "prev": {
                        "variant": "primary",
                        "_id": "5f7c9329482f7682c859cc2e",
                        "text": "Prev",
                        "icon": "fas fa-arrow-circle-right"
                    },
                    "skip": {
                        "variant": "link",
                        "_id": "5f7c9329482f7682c859cc2f",
                        "text": "Skip"
                    },
                    "submit": {
                        "variant": "link",
                        "_id": "5f7c9329482f7682c859cc30",
                        "text": "Next",
                        "icon": "fas fa-arrow-circle-left"
                    }
                },
                "sectionId": "5f68fe895db214bb63d98198",
                "fields": []
            }
        ]
    },
    {
        "id": "5f7b8cb8e06e3c3af52df2d4",
        "order": 1,
        "type": "section",
        "title": "Section 2",
        "pages": []
    }
];