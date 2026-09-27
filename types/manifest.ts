export interface TemplateManifestField {
  key: string;
  type: 'text' | 'longtext' | 'image' | 'list' | 'link';
  maxLength?: number;
  description: string;
}

export interface TemplateManifestSection {
  id: string;
  required: boolean;
  fields: TemplateManifestField[];
}

export interface TemplateManifest {
  id: string;
  name: string;
  sections: TemplateManifestSection[];
  styleTokens: {
    colors: Record<string, string>;
    fonts: Record<string, string>;
  };
}
