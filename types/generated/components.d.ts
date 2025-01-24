import type { Schema, Struct } from '@strapi/strapi';

export interface HeroHeroMetaphyser extends Struct.ComponentSchema {
  collectionName: 'components_hero_hero_metaphysers';
  info: {
    displayName: 'HeroMetaphyser';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'hero.hero-metaphyser': HeroHeroMetaphyser;
    }
  }
}
