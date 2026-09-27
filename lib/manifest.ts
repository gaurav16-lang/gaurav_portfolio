import type { TemplateManifest } from '@/types/manifest';

export const templateManifest: TemplateManifest = {
  id: 'developer-portfolio',
  name: 'Developer Portfolio',
  sections: [
    {
      id: 'hero',
      required: true,
      fields: [
        {
          key: 'name',
          type: 'text',
          maxLength: 80,
          description: "The person's full name, shown as the page's main heading.",
        },
        {
          key: 'title',
          type: 'text',
          maxLength: 100,
          description: 'Professional title or role, e.g. "Full-Stack Web Developer".',
        },
        {
          key: 'tagline',
          type: 'longtext',
          maxLength: 200,
          description:
            'A punchy one-to-two sentence tagline shown under the title, summarizing what this person does and the value they bring.',
        },
        {
          key: 'avatarUrl',
          type: 'image',
          description: 'URL to a professional headshot or avatar image. Omit if none is available.',
        },
      ],
    },
    {
      id: 'about',
      required: true,
      fields: [
        {
          key: 'bio',
          type: 'longtext',
          maxLength: 1200,
          description:
            'A polished 2-4 paragraph professional biography summarizing background, expertise, and interests. Written in third person or first person consistently.',
        },
        {
          key: 'location',
          type: 'text',
          maxLength: 60,
          description: 'City and region/country the person is based in.',
        },
        {
          key: 'email',
          type: 'text',
          maxLength: 100,
          description: 'Public contact email address to display.',
        },
        {
          key: 'socialLinks',
          type: 'list',
          description:
            'List of social/profile links. Each item is an object: { "label": string (e.g. "GitHub", "LinkedIn"), "url": string }.',
        },
      ],
    },
    {
      id: 'experience',
      required: false,
      fields: [
        {
          key: 'items',
          type: 'list',
          description:
            'Work experience entries, most recent first. Each item is an object: { "company": string, "role": string, "period": string (e.g. "Mar 2022 - Present"), "highlights": string[] (2-5 concise, achievement-focused bullet points) }.',
        },
      ],
    },
    {
      id: 'projects',
      required: true,
      fields: [
        {
          key: 'items',
          type: 'list',
          description:
            'Notable projects. Each item is an object: { "title": string, "description": string (1-3 sentences), "tags": string[] (technologies used), "link": string (optional URL) }.',
        },
      ],
    },
    {
      id: 'skills',
      required: true,
      fields: [
        {
          key: 'items',
          type: 'list',
          description: 'Flat list of skill/technology names, ordered by relevance, e.g. ["React.js", "Node.js", "AWS"].',
        },
      ],
    },
    {
      id: 'education',
      required: false,
      fields: [
        {
          key: 'items',
          type: 'list',
          description:
            'Education history. Each item is an object: { "school": string, "degree": string, "period": string }.',
        },
      ],
    },
    {
      id: 'contact',
      required: true,
      fields: [
        {
          key: 'heading',
          type: 'text',
          maxLength: 100,
          description: 'A short call-to-action heading for the contact section, e.g. "Let\'s work together".',
        },
        {
          key: 'message',
          type: 'longtext',
          maxLength: 300,
          description: 'A brief closing message inviting visitors to get in touch.',
        },
      ],
    },
  ],
  styleTokens: {
    colors: {
      background: '#0a0a0a',
      foreground: '#f5f5f5',
      primary: '#22d3ee',
      muted: '#a1a1aa',
      border: '#27272a',
    },
    fonts: {
      sans: 'Geist Sans',
      mono: 'Geist Mono',
    },
  },
};
