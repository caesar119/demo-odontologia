import type { SiteConfig } from './site.types';

import heroImg from '../assets/images/hero.jpg';
import equipo1 from '../assets/images/equipo-1.jpg';
import equipo2 from '../assets/images/equipo-2.jpg';
import galeria1 from '../assets/images/galeria-1.jpg';
import galeria2 from '../assets/images/galeria-2.jpg';
import galeria3 from '../assets/images/galeria-3.jpg';

const FONT_STACK = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

export const siteConfig: SiteConfig = {
  meta: {
    lang: 'es',
    siteName: 'Sonrisa Dental',
    tagline: 'Odontología cercana en Rosario',
    description:
      'Sonrisa Dental es un consultorio odontológico en Rosario especializado en odontología general, estética y ortodoncia. Turnos online y atención de urgencias.',
    city: 'Rosario',
    province: 'Santa Fe',
    isDemo: true,
  },
  brand: {
    logoText: 'Sonrisa Dental',
    colors: {
      primary: '#0f766e',
      primaryDark: '#115e59',
      primaryLight: '#ccfbf1',
      accent: '#f97316',
      ink: '#0f172a',
    },
    fontHeading: FONT_STACK,
    fontBody: FONT_STACK,
  },
  nav: [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Equipo', href: '#equipo' },
    { label: 'Galería', href: '#galeria' },
    { label: 'Horarios', href: '#horarios' },
    { label: 'Contacto', href: '#contacto' },
  ],
  hero: {
    eyebrow: 'Odontología general y estética en Rosario',
    title: 'Sonreí con confianza, de verdad',
    subtitle:
      'Atención odontológica cálida y moderna para toda la familia. Turnos la misma semana y seguimiento personalizado en cada tratamiento.',
    ctaLabel: 'Reservar turno',
    ctaHref: '#contacto',
    secondaryLabel: 'Ver servicios',
    secondaryHref: '#servicios',
    image: heroImg,
    imageAlt: 'Consultorio moderno de Sonrisa Dental con sillón odontológico',
  },
  services: {
    heading: 'Nuestros servicios',
    subheading: 'Tratamientos pensados para cada etapa, con tecnología digital y tiempos claros.',
    items: [
      {
        icon: 'tooth',
        title: 'Odontología general',
        description: 'Controles, limpiezas y tratamiento de caries con tecnología digital.',
      },
      {
        icon: 'sparkle',
        title: 'Estética dental',
        description: 'Blanqueamiento y carillas para una sonrisa más luminosa.',
      },
      {
        icon: 'shield',
        title: 'Ortodoncia',
        description: 'Brackets y alineadores para chicos y adultos.',
      },
      {
        icon: 'calendar',
        title: 'Urgencias',
        description: 'Atención prioritaria para dolor o traumatismos dentales.',
      },
      {
        icon: 'heart',
        title: 'Odontopediatría',
        description: 'Primeras visitas y cuidado dental para los más chicos.',
      },
      {
        icon: 'check',
        title: 'Implantes',
        description: 'Reemplazo de piezas dentales con planificación digital 3D.',
      },
    ],
  },
  team: {
    heading: 'Nuestro equipo',
    subheading: 'Profesionales matriculados, con capacitación continua en las técnicas más nuevas.',
    members: [
      {
        name: 'Dra. Laura Medina',
        role: 'Odontóloga — Matrícula Prof. 12345',
        photo: equipo1,
        alt: 'Dra. Laura Medina, odontóloga de Sonrisa Dental',
      },
      {
        name: 'Dr. Martín Aguilar',
        role: 'Odontólogo — Especialista en ortodoncia',
        photo: equipo2,
        alt: 'Dr. Martín Aguilar, odontólogo especialista en ortodoncia',
      },
    ],
  },
  gallery: {
    heading: 'Conocé el consultorio',
    subheading: 'Espacios cómodos y equipamiento al día para una atención tranquila.',
    items: [
      { photo: galeria1, alt: 'Sala de tratamiento con sillón odontológico color coral' },
      { photo: galeria2, alt: 'Dentista revisando una radiografía junto a una paciente' },
      { photo: galeria3, alt: 'Recepción y salas de atención de Sonrisa Dental' },
    ],
  },
  hoursLocation: {
    heading: 'Horarios y ubicación',
    hours: [
      { day: 'Lunes a viernes', hours: '9:00–13:00 y 15:00–20:00' },
      { day: 'Sábados', hours: '9:00–13:00' },
      { day: 'Domingos', hours: 'Cerrado' },
    ],
    address: 'San Juan 1456, Rosario, Santa Fe',
    mapEmbedSrc:
      'https://www.openstreetmap.org/export/embed.html?bbox=-60.6543%2C-32.9568%2C-60.6243%2C-32.9368&layer=mapnik&marker=-32.9468%2C-60.6393',
    phoneDisplay: '+54 341 555-0142',
    phoneHref: '+543415550142',
    whatsappNumber: '5493415550142',
    email: 'turnos@sonrisadental.com.ar',
  },
  contact: {
    heading: 'Pedí tu turno',
    subheading: 'Escribinos y te confirmamos el horario que mejor te quede.',
    whatsappMessageTemplate: 'Hola, soy {nombre} ({telefono}). {mensaje}',
    nameLabel: 'Nombre',
    phoneLabel: 'Teléfono',
    messageLabel: 'Contanos qué necesitás',
    submitLabel: 'Enviar por WhatsApp',
    successMessage: '¡Listo! Te abrimos WhatsApp con tu mensaje.',
  },
  footer: {
    businessName: 'Sonrisa Dental',
    rubroLine: 'Odontología general y estética — Rosario, Santa Fe',
    demoDisclaimer: 'Sitio de demostración. Nombre, dirección e imágenes son ficticios.',
  },
};
