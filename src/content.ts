export const profile = {
  name: 'Victoria Kerimov',
  firstName: 'Victoria',
  wordmark: 'VK',
  tagline:
    'Computer science student at the University of Maryland, studying machine learning.',
  bio: 'I just started at UMD in College Park, working toward a B.S. in Computer Science with a focus on machine learning. I am also part of the Science and Global Change Scholars program.',
  about: [
    'I grew up in New Jersey and graduated from Fair Lawn High School in 2026, then came to the University of Maryland, College Park for computer science (machine learning), class of 2029.',
    'Most of my recent work has been teaching and leading: tutoring peers for the American Computer Science League, assisting math classes from first grade through Precalculus, and working with kids as a camp counselor.',
    'In my free time, I swim, watch movies, and bake. I also hold the Seal of Biliteracy in Russian and am building up Spanish.',
  ],
  honors:
    'National Honor Society, National Math Honor Society, National Science Honor Society',
  email: 'vkerimov@terpmail.umd.edu',
  github: 'https://github.com/VictoriaKerimov',
  linkedin: 'https://www.linkedin.com/in/victoria-kerimov-4a7975437/',
  resumeHref: '/Victoria-Kerimov-Resume.pdf',
  location: 'College Park, MD',
}

export const skills = ['Java', 'JavaScript', 'Python', 'Visual Basic', 'HTML', 'CSS']

export const languages = [
  'English',
  'Russian — Biliteracy Seal',
  'Spanish — basic',
]

export type Project = {
  title: string
  description: string
  tags: string[]
  github?: string
  demo?: string
}

export const projects: Project[] = [
  {
    title: 'Personal portfolio',
    description:
      'This site: a single-page portfolio built with React and Vite.',
    tags: ['React', 'TypeScript', 'Vite'],
    github: 'https://github.com/VictoriaKerimov/personal-portfolio',
  },
  {
    title: 'ACSL Senior Division',
    description:
      'Student leader for my high school ACSL team. Earned highest school score in the 2025 ACSL finals. Additionally, tutored classmates, recruited new members, and helped out with day-to-day operations.',
    tags: ['Java', 'Contest'],
  },
  {
    title: 'More on the way',
    description:
      'I am still early in my CS degree so there is definitely more to come.',
    tags: ['Python', 'Java'],
    github: 'https://github.com/VictoriaKerimov',
  },
]

export type Experience = {
  role: string
  org: string
  location: string
  dates: string
  points: string[]
}

export const experience: Experience[] = [
  {
    role: 'Student Leader',
    org: 'American Computer Science League — Senior Division',
    location: 'Fair Lawn, NJ',
    dates: 'June 2024 – June 2026',
    points: [
      'Tutored peers in computer science concepts and contest problems.',
      'Promoted ACSL and recruited students at school club fairs.',
      'Earned the highest school score in the 2025 ACSL final competition.',
    ],
  },
  {
    role: 'Volunteer Teacher Assistant',
    org: 'Advanced Math Academy',
    location: 'Saddle Brook, NJ',
    dates: 'November 2021 – November 2025',
    points: [
      'Taught small-group math classes of about 20 students, from 1st grade through Precalculus, plus SAT prep.',
      'Reinforced material with homework, individual feedback, and guided problem-solving.',
      'Helped with registration and day-to-day academy operations.',
    ],
  },
  {
    role: 'Employee',
    org: 'New Territories / Poke Express',
    location: 'Fair Lawn, NJ',
    dates: 'April 2026 – August 2026',
    points: [
      'Worked cashiering, food prep, and order fulfillment in a busy local restaurant.',
      'Trained new hires on store procedures and customer service.',
    ],
  },
  {
    role: 'Camp Counselor',
    org: 'Hillsdale Summer Day Camp / Radburn Camp',
    location: 'Hillsdale / Radburn, NJ',
    dates: 'Summers 2022 – 2026',
    points: [
      'Supervised campers and kept a safe, organized day.',
      'Handled conflicts and coordinated activities with other counselors.',
    ],
  },
]

export const education = {
  school: 'University of Maryland, College Park',
  degree: 'B.S. Computer Science: Machine Learning',
  dates: 'Expected May 2029',
  extra: 'Coursework: CMSC132, MATH240, MATH241',
}
