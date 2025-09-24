declare module '@qlik/embed-react' {
  import type { ComponentType } from 'react';

  interface QlikEmbedProps {
    ui: string;
    appId: string;
    objectId?: string;
    hostConfig: { host: string };
    [key: string]: unknown;
  }

  export const QlikEmbed: ComponentType<QlikEmbedProps>;
}
