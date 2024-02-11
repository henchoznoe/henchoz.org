export type SkillsItemsType = {
  label: string;
  skills: {
    tooltip: string;
    icon: string;
  }[];
}

export const skillsItems: SkillsItemsType[] = [
  {
    label: 'Design',
    skills: [
      {
        tooltip: 'Figma',
        icon: 'figma'
      },
      {
        tooltip: 'Tailwind',
        icon: 'tailwind'
      }
    ]
  },
  {
    label: 'Frontend',
    skills: [
      {
        tooltip: 'TypeScript',
        icon: 'ts'
      },
      {
        tooltip: 'React',
        icon: 'react'
      },
      {
        tooltip: 'NextJS',
        icon: 'next'
      }
    ]
  },
  {
    label: 'Backend',
    skills: [
      {
        tooltip: 'NodeJS',
        icon: 'nodejs'
      },
      {
        tooltip: 'ExpressJS',
        icon: 'expressjs'
      },
      {
        tooltip: 'PHP',
        icon: 'php'
      },
      {
        tooltip: 'MySQL',
        icon: 'mysql'
      }
    ]
  },
  {
    label: 'Other',
    skills: [
      {
        tooltip: 'Git',
        icon: 'git'
      },
      {
        tooltip: 'Github',
        icon: 'github'
      },
      {
        tooltip: 'Vercel',
        icon: 'vercel'
      }
    ]
  }
];