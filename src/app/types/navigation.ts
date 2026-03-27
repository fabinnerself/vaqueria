export type AppPage = 'landing' | 'login' | 'register';

export type NavigationTarget =
  | AppPage
  | 'home'
  | 'inicio'
  | 'productos'
  | 'contacto'
  | 'faq'
  | 'privacidad'
  | 'terminos';

export interface NavigationItem {
  id: string;
  label: string;
  target: NavigationTarget;
}
