export const json = {
  "title": "Online Survey Respondent Application",
  "description": "Apply for our UK & European Consumer Finance Surveys project. \nThis is a remote, freelance/project-based opportunity for applicants in India. \nNo prior experience is required. \nVideo training will be provided. \nPayment: ₹30 per successful survey.",
  "logoFit": "none",
  "completedHtml": "<h3>Application Submitted</h3><p>Thank you for applying. If shortlisted, you will receive the training material and project onboarding details via email or WhatsApp.</p>",
  "pages": [
    {
      "name": "personal_information",
      "title": "Personal Information",
      "description": "Please provide accurate contact information.",
      "elements": [
        {
          "type": "text",
          "name": "full_name",
          "title": "Full Name",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "email",
          "title": "Email Address",
          "isRequired": true,
          "validators": [
            {
              "type": "email"
            }
          ],
          "inputType": "email"
        },
        {
          "type": "text",
          "name": "whatsapp_number",
          "title": "WhatsApp Number",
          "isRequired": true,
          "inputType": "tel",
          "placeholder": "+91 XXXXX XXXXX"
        },
        {
          "type": "dropdown",
          "name": "state",
          "title": "State / Union Territory",
          "isRequired": true,
          "choices": [
            "Andaman and Nicobar Islands",
            "Andhra Pradesh",
            "Arunachal Pradesh",
            "Assam",
            "Bihar",
            "Chandigarh",
            "Chhattisgarh",
            "Dadra and Nagar Haveli and Daman and Diu",
            "Delhi",
            "Goa",
            "Gujarat",
            "Haryana",
            "Himachal Pradesh",
            "Jammu and Kashmir",
            "Jharkhand",
            "Karnataka",
            "Kerala",
            "Ladakh",
            "Lakshadweep",
            "Madhya Pradesh",
            "Maharashtra",
            "Manipur",
            "Meghalaya",
            "Mizoram",
            "Nagaland",
            "Odisha",
            "Puducherry",
            "Punjab",
            "Rajasthan",
            "Sikkim",
            "Tamil Nadu",
            "Telangana",
            "Tripura",
            "Uttar Pradesh",
            "Uttarakhand",
            "West Bengal"
          ]
        },
        {
          "type": "text",
          "name": "city",
          "title": "City",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "age",
          "title": "Age",
          "isRequired": true,
          "inputType": "number",
          "min": 18,
          "max": 70
        }
      ]
    },
    {
      "name": "device_internet",
      "title": "Device & Internet",
      "elements": [
        {
          "type": "radiogroup",
          "name": "primary_device",
          "title": "Which device will you primarily use?",
          "isRequired": true,
          "choices": [
            "Laptop",
            "Desktop",
            "Android Phone",
            "iPhone",
            "Tablet"
          ]
        },
        {
          "type": "radiogroup",
          "name": "stable_internet",
          "title": "Do you have a stable internet connection?",
          "isRequired": true,
          "choices": [
            "Yes",
            "No"
          ]
        },
        {
          "type": "radiogroup",
          "name": "can_install_software",
          "title": "Can you install browser extensions or software if required?",
          "isRequired": true,
          "choices": [
            "Yes",
            "No"
          ]
        }
      ]
    },
    {
      "name": "technical_skills",
      "title": "Technical Skills",
      "elements": [
        {
          "type": "radiogroup",
          "name": "vpn_experience",
          "title": "Have you ever used a VPN?",
          "isRequired": true,
          "choices": [
            "Yes",
            "No"
          ]
        },
        {
          "type": "radiogroup",
          "name": "vpn_used",
          "visibleIf": "{vpn_experience} = 'Yes'",
          "title": "Which VPN have you used?",
          "choices": [
            "Proton VPN",
            "NordVPN",
            "Windscribe",
            "Surfshark",
            "Other"
          ],
          "showOtherItem": true
        },
        {
          "type": "radiogroup",
          "name": "follow_instructions",
          "title": "Are you comfortable following written instructions exactly?",
          "isRequired": true,
          "choices": [
            "Yes",
            "Somewhat",
            "No"
          ]
        }
      ]
    },
    {
      "name": "availability",
      "title": "Availability",
      "elements": [
        {
          "type": "radiogroup",
          "name": "daily_survey_capacity",
          "title": "How many surveys can you complete daily?",
          "isRequired": true,
          "choices": [
            "10–25",
            "25–50",
            "50–75",
            "75–100",
            "100+"
          ]
        },
        {
          "type": "radiogroup",
          "name": "daily_hours",
          "title": "How many hours can you work each day?",
          "isRequired": true,
          "choices": [
            "1–2 Hours",
            "2–4 Hours",
            "4–6 Hours",
            "6–8 Hours",
            "8+ Hours"
          ]
        },
        {
          "type": "radiogroup",
          "name": "start_availability",
          "title": "When can you start?",
          "isRequired": true,
          "choices": [
            "Immediately",
            "Tomorrow",
            "Within 3 Days",
            "Within a Week"
          ]
        }
      ]
    },
    {
      "name": "experience",
      "title": "Previous Experience",
      "elements": [
        {
          "type": "radiogroup",
          "name": "prior_experience",
          "title": "Have you worked on survey, data annotation, transcription, AI training, or similar freelance projects before?",
          "isRequired": true,
          "choices": [
            "Yes",
            "No"
          ]
        },
        {
          "type": "comment",
          "name": "experience_description",
          "visibleIf": "{prior_experience} = 'Yes'",
          "title": "Briefly describe your experience.",
          "isRequired": true
        }
      ]
    },
    {
      "name": "training",
      "title": "Training",
      "description": "Watch the video and answer the question",
      "elements": [
        {
          "type": "html",
          "name": "training_video",
          "html": "<div style=\"position:relative;width:100%;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:8px;\"><iframe src=\"https://www.youtube.com/embed/7L-FZZl_-Hg\" title=\"Training Video\" style=\"position:absolute;top:0;left:0;width:100%;height:100%;border:0;\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe></div>"
        },
        {
          "type": "radiogroup",
          "name": "training_video_watched",
          "title": "Have you watched the training video?",
          "isRequired": true,
          "choices": [
            "Yes",
            "No"
          ]
        },
        {
          "type": "comment",
          "name": "survey_process_explanation",
          "title": "Briefly explain the survey process in your own words.",
          "description": "Use your own words to describe your understanding of the process.",
          "isRequired": true,
          "rows": 5
        }
      ]
    },
    {
      "name": "payment_agreement",
      "title": "Payment & Agreement",
      "description": "Please read and accept each condition before submitting your application.",
      "elements": [
        {
          "type": "boolean",
          "name": "agree_payment_rate",
          "title": "I understand the payment is ₹30 per successful survey.",
          "isRequired": true,
          "labelTrue": "I Agree",
          "labelFalse": "I Do Not Agree",
          "valueTrue": true,
          "valueFalse": false
        },
        {
          "type": "boolean",
          "name": "agree_payment_schedule",
          "title": "I understand payments follow the project payment schedule.",
          "isRequired": true,
          "labelTrue": "I Agree",
          "labelFalse": "I Do Not Agree",
          "valueTrue": true,
          "valueFalse": false
        },
        {
          "type": "boolean",
          "name": "agree_quality",
          "title": "I understand survey quality affects approval and payment.",
          "isRequired": true,
          "labelTrue": "I Agree",
          "labelFalse": "I Do Not Agree",
          "valueTrue": true,
          "valueFalse": false
        },
        {
          "type": "boolean",
          "name": "agree_confidentiality",
          "title": "I agree not to share project credentials, answer sheets, or confidential materials.",
          "isRequired": true,
          "labelTrue": "I Agree",
          "labelFalse": "I Do Not Agree",
          "valueTrue": true,
          "valueFalse": false
        }
      ]
    },
    {
      "name": "final_questions",
      "title": "Final Questions",
      "elements": [
        {
          "type": "comment",
          "name": "reason_for_joining",
          "title": "Why do you want to join this project?"
        },
        {
          "type": "radiogroup",
          "name": "referral_source",
          "title": "How did you hear about this opportunity?",
          "choices": [
            "Facebook",
            "LinkedIn",
            "Instagram",
            "WhatsApp",
            "Telegram",
            "Friend",
            "Other"
          ],
          "showOtherItem": true
        }
      ]
    }
  ],
  "calculatedValues": [
    {
      "name": "screening_failed",
      "expression": "iif({stable_internet} = 'No' or {follow_instructions} = 'No', true, false)"
    },
    {
      "name": "high_priority_device",
      "expression": "iif({primary_device} = 'Laptop' or {primary_device} = 'Desktop', true, false)"
    },
    {
      "name": "available_immediately",
      "expression": "iif({start_availability} = 'Immediately', true, false)"
    },
    {
      "name": "experienced_candidate",
      "expression": "iif({prior_experience} = 'Yes', true, false)"
    },
    {
      "name": "training_completed",
      "expression": "iif({training_video_watched} = 'Yes', true, false)"
    }
  ],
  "showQuestionNumbers": "on",
  "showProgressBar": true,
  "checkErrorsMode": "onValueChanged",
  "completeText": "Submit Application."
}