var enrollmentFormURL = "https://goo.gl/forms/EKc3SMTq7mDLAQGv2";

var commonStaticData = {
  "menu": {
    "hierarchical": [
      {
        "parent": {"text": "Enroll", "url": ""}
        ,"children": [
          {"text": "Class schedule", "url": "index.html#classschedule"}
          ,{"text": "Fees and pricing", "url": "index.html#classschedule"}
          ,{"text": "Enroll: Afterschool", "url": enrollmentFormURL, "class": "log_enroll"}
          ,{"text": "Enroll: Weekend classes", "url": enrollmentFormURL, "class": "log_enroll"}
          ,{"text": "Scholarships", "url": "scholarship"}
        ]
      }
      ,{
        "parent": {"text": "Curriculum", "url": ""}
        ,"children": [
          {"text": "Program overview", "url": "index.html#learnmore"}
          ,{"text": "Creative tech: overview", "url": "index.html#creativetech"}
          ,{"text": "Game design: overview", "url": "index.html#gamedesign"}
          ,{"text": "Animation: overview", "url": "index.html#animation"}
          ,{"text": "Lesson plans", "url": "curriculum/"}
        ]
      }
      ,{
        "parent": {"text": "Learn More", "url": ""}
        ,"children": [
          {"text": "Program description", "url": "index.html#learnmore"}
          ,{"text": "Who we are", "url": "index.html#whoweare"}
          ,{"text": "Location", "url": "index.html#location"}
          ,{"text": "Student Work", "url": "studentwork.html"}
          ,{"text": "Testimonials", "url": "index.html#testimonials"}
          ,{"text": "FAQ", "url": "index.html#faq"}
        ]
      }
      ,{
        "parent": {"text": "Extras", "url": ""}
        ,"children": [
          {"text": "T-shirts", "url": "https://gumroad.com/anglesideangle"}
          ,{"text": "Articles", "url": "index.html#articles"}
          ,{"text": "Quick Links", "url": "quicklinks.html"}
        ]
      }
      ,{
        "parent": {"text": "Contact", "url": "index.html#contact"}
        ,"children": [
        ]
      }
    ]
    , "compact": [
      {"text": "Enroll in afterschool classes", "url": enrollmentFormURL, "class": "log_enroll"}
      ,{"text": "Enroll in weekend classes", "url": enrollmentFormURL, "class": "log_enroll"}
      ,{"text": "Classes schedule", "url": "index.html#classschedule"}
      ,{"text": "Fees and pricing", "url": "index.html#classschedule"}
      ,{"text": "About the program", "url": "index.html#learnmore"}
      ,{"text": "Location", "url": "index.html#location"}
      ,{"text": "Creative tech: overview", "url": "index.html#creativetech"}
      ,{"text": "Animation: overview", "url": "index.html#animation"}
      ,{"text": "Game design: overview", "url": "index.html#gamedesign"}
      ,{"text": "Who we are", "url": "index.html#whoweare"}
      ,{"text": "Testimonials", "url": "index.html#testimonials"}
      ,{"text": "Scholarships", "url": "scholarship"}
      ,{"text": "Student Work", "url": "studentwork.html"}
      ,{"text": "Lesson plans", "url": "curriculum/"}
      ,{"text": "Quick Links", "url": "quicklinks.html"}
      ,{"text": "T-shirts", "url": "https://gumroad.com/anglesideangle"}
      ,{"text": "FAQ", "url": "index.html#faq"}
      ,{"text": "Contact", "url": "index.html#contact"}
    ]
  }

  ,"courses": [
    {
    "session": "Spring 2017"
    ,"title": "Intro to creative tech"
    ,"eligible": "all children!"
    ,"ages": "grades K-4"
    ,"times": "Saturdays 10am-11:15am"
    ,"dates": "April 29; May 6, 13, 20; June 3, 10, 17 (7 sessions)"
    ,"teachers": ["Ben Wheeler"]
    ,"location": "Trilok Center, 143 Waverly Ave (at Myrtle)"
    ,"cost": "$280"
    ,"status": "enroll"
    ,"signupurl": enrollmentFormURL
    ,"color": "#396"
    ,"additional": [
      "Class is capped at 6 students",
      "Note: no class on May 27th (Memorial Day weekend)"
      ]
    }
    ,{
    "session": "Spring 2017"
    ,"title": "Intro to creative tech"
    ,"eligible": "all children!"
    ,"ages": "grades 2-3"
    ,"times": "Wednesdays 2pm-3:15pm"
    ,"dates": "April 5, 19, 26; May 3, 10, 17, 24 (7 sessions)"
    ,"teachers": ["Ben Wheeler"]
    ,"location": "Trilok Center, 143 Waverly Ave (at Myrtle)"
    ,"cost": "$280"
    ,"status": "waitlist"
    ,"signupurl": enrollmentFormURL
    ,"color": "#b5f"
    ,"additional": [
      "Class is capped at 8 students",
      "Optional: we will do pickup at Compass Charter School (300 Adelphi) at 1pm, transport students safely, and take care of students until the class starts at 2pm. Cost: $20 per pickup, or $100 if paid in advance for the full 7 classes (in which case the grand total is $380)."
      ]
    }
  ]
  ,"staff": [
    {
      "fullname": "Ben Wheeler"
      ,"nickname": "Ben"
      ,"bio": "Ben is a veteran developer and teacher in Brooklyn. He's taught hundreds of people to program, helped foment a revolution (ask him sometime!), and makes a mean gumbo. His work has been published in the Harvard International Review and The Best of Make Magazine, and he is <span style=\"background-color: yellow\">totally geeking out</span> about the phenomenal talent of the teachers below. You can see even more of his eclectic interests at <a href=\"http://techno-social.com\">techno-social.com</a>."
      ,"nutshell": "founder of Ada & Leo"
    }
    ,{
      "fullname": "Taylor Black"
      ,"nickname": "Taylor"
      ,"bio": "Taylor is a tech educator with a background in technical theatre and 3D design software. She is currently a PhD candidate at NYU Performance Studies, with a research focus in <span style=\"background-color: yellow\">online community building</span>. Taylor's computer course experience includes Achievement First Endeavor Middle School, NYU Magnet game center, and the Arvada Center for the Arts and Humanities.</p> "
      ,"nutshell": "PhD candidate at NYU and veteran tech educator"
    }
  ]
  ,"faquestions": [
    {
      "q": "What makes Ada & Leo different from other programs?"
      ,"aParagraphs": [
        "Our guiding philosophy has been to encourage direct experience with real materials and the real creative process whenever possible, which sometimes means not having as impressive a final product as some other programs might, and also means making kids a little more frustrated than other programs might."
        ,"Everything we do, we try to aim to primarily influence the experience of the students after they finish the class. often that means giving them a fun and rewarding experience with tools inside the class, because play and joy are so crucial to developing creative power. But a class where the teacher did all the work and dazzled the kids would be one I would consider something of a failure, even if the kids felt perfectly happy. whereas a class where kids came out of it and obsessively used even just one single tool they learned in the class to create dozens of their own creations would be one I would consider a huge success."
        ,"The same goes for working through problems. Students often feel frustrated in my class and want me to fix the problem for them. Knowing each kid in their situation and their needs, sometimes I do fix it!  I'm not been absolutist about these things :). But ideally, I will just encourage the student to keep trying to figure it out themselves,  express my support, and give them a tiny push in the right direction. I believe strongly that a problem they solve themselves is worth 10 problems we solve for them, though of course in practice it's often not really that simple!"
      ]
    }
  ]

  ,"testimonials": [
    {
      "quote": "J. is playing hooky from school today, but she does not want to play hooky from her creative tech class!"
      ,"person": "Brian R., parent of 6 year old girl"
    }
    ,{
      "quote": "C. just LOVES Ada & Leo. He refuses to take his \"Dream in Code\" T-Shirt off, because he is so proud to be a part of it.  We cannot thank you enough for all that you've done to make it such a special experience."
      ,"person": "Tom W., parent of 7 year old boy"
    }
    ,{
      "quote": "M. LOVED the first class yesterday. He was so excited about it!"
      ,"person": "Marisa K., parent of 6 year old boy"
    }
    ,{
      "quote": "J. loves the class!"
      ,"person": "Brian R., parent of 8 year old girl"
    }
    ,{
      "quote": "A. *LOVES* the class. I'm excited to find her [Tinkercad project]. And now I know she can play further and do other projects there. We'll check it out more later this week! Thank YOU."
      ,"person": "Jenny D., parent of 6 year old girl"
    }
    ,{
      "quote": "R. is really enjoying his tech classes. He asked us why normal school was not as much fun..."
      ,"person": "Vin S., parent of 6 year old boy"
    }
    ,{
      "quote": "Would totally do it again!"
      ,"person": "Elizabeth G., parent of 7 year old boy"
    }
    ,{
      "quote": "B. and I are endlessly grateful for what you bring into our daughter's life. Your curriculum is visionary and she comes home so joyful every week!"
      ,"person": "Megan P., parent of 8 year old girl"
    }
    ,{
      "quote": "My kid is begging me to take your classes just based on kid referrals!"
      ,"person": "Dawn M., parent of 8 year old girl"
    }
    ,{
      "quote": "A. really loved the class!"
      ,"person": "Cynthia P., parent of 7 year old girl"
    }
    ,{
      "quote": "I just wanted to let you know H. LOVED the class and can't wait to come back next week. Thanks!"
      ,"person": "Rebekah K., parent of 6 year old boy"
    }
    ,{
      "quote": "D keeps stopping mid-stride and asking me to watch how fast she's moving: \"Because the Earth is moving around the sun really fast, Mom! I learned that from Nina's Dad.\""
      ,"person": "Lateefah T., parent of 5 year old girl"
    }
    ,{
      "quote": "E. loved his week with you and learned so much!"
      ,"person": "Doris C., parent of 9 year old boy"
    }
    ,{
      "quote": "My daughter has taken this class twice now, last fall and this past winter. I thought I would have trouble getting her up on Saturday mornings, but I never did. She enjoyed Ben's class so very much and couldn't stop talking about all the things she learned once class was over."
      ,"person": "Marsha-Stephanie B., parent of 7 year old girl"
    }
    ,{
      "quote": "Ben opened my eyes to help me see the fun and excitement that learning can offer!"
      ,"person": "Arian H., former student and now MS-Ed candidate"
    }
    ,{
      "quote": "Ben was infinitely patient and helpful!"
      ,"person": "Anonymous feedback from an adult programming student"
    }
    ,{
      "quote": "We and all of our kids are so lucky to be able to be a part of Ada and Leo!"
      ,"person": "Irwin C., parent of 7 year old boy"
    }
  ]
};
