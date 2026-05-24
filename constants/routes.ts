export enum AppRoutes {
  Home = '/',
  Contacts = '/contacts',
  Dictionary = '/dictionary',
  Documents = '/documents',
  Join = '/join',
  News = '/news',
  Projects = '/projects',
  Services = '/services',
  Team = '/team',
}

export const SERVICE_ROUTES = {
  Card: '/services/card',
  Calculator: '/services/calculator',
} as const;

export const NAVIGATION_CONFIG = {
  [AppRoutes.Home]: 'Главная',
  [AppRoutes.Documents]: 'Документы',
  [AppRoutes.Dictionary]: 'Справочник',
  [AppRoutes.Projects]: 'Проекты',
  [AppRoutes.Team]: 'Команда',
  [AppRoutes.News]: 'Новости',
  [AppRoutes.Services]: 'Сервисы',
};
