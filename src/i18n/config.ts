import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About',
        performances: 'Performances',
        services: 'Services',
        gallery: 'Gallery',
        events: 'Events',
        booking: 'Book Us',
        contact: 'Contact',
      },
      hero: {
        title: 'Traditional Dancers & Drummers',
        subtitle: 'Bringing Culture to Life',
        bookNow: 'Book Now',
        watchPerformances: 'Watch Performances',
      },
      performances: {
        title: 'Performances',
      },
      about: {
        title: 'About Us',
        subtitle: 'Celebrating Tradition Through Performance',
        description: 'Sharing our vibration: traditional African dances through vibrant rhythmic drumbeats, our core movements, preserving our cultural heritage. Performing at various local sound in traditional dress at local and international events. Our dedication to authenticity and excellence.',
      },
      services: {
        title: 'Services',
        stagePerformances: 'Stage Performances',
        culturalShowcases: 'Cultural Showcases',
        schoolWorkshops: 'School Workshops',
        weddingsEvents: 'Weddings & Events',
        drummingClasses: 'Drumming Classes',
        costumeDisplays: 'Costume Displays',
      },
      video: {
        title: 'Watch Our Video',
      },
      gallery: {
        title: 'Gallery',
        subtitle: 'Explore our moments captured in performance',
      },
      events: {
        title: 'Events & Activities',
        subtitle: 'Join us at our upcoming performances and cultural celebrations',
        event1: {
          title: 'Cultural Festival 2024',
          date: 'December 15, 2024',
          time: '6:00 PM - 10:00 PM',
          location: 'City Cultural Center',
          description: 'Annual celebration of traditional music and dance',
        },
        event2: {
          title: 'School Workshop Series',
          date: 'January 10-12, 2025',
          time: '9:00 AM - 3:00 PM',
          location: 'Various Schools',
          description: 'Interactive drumming and dance workshops for students',
        },
        event3: {
          title: 'Community Performance',
          date: 'February 20, 2025',
          time: '7:00 PM - 9:00 PM',
          location: 'Community Hall',
          description: 'Traditional performances celebrating our heritage',
        },
      },
      booking: {
        title: 'Book a Performance',
        subtitle: 'Fill out the form below and we\'ll contact you via WhatsApp',
        name: 'Full Name',
        email: 'Email Address',
        phone: 'Phone Number',
        date: 'Event Date',
        eventType: 'Event Type',
        message: 'Additional Details',
        submit: 'Send Booking Request',
      },
    },
  },
  sw: {
    translation: {
      nav: {
        home: 'Nyumbani',
        about: 'Kuhusu',
        performances: 'Maonyesho',
        services: 'Huduma',
        gallery: 'Galeria',
        events: 'Matukio',
        booking: 'Weka Nafasi',
        contact: 'Wasiliana',
      },
      hero: {
        title: 'Wacheza Ngoma na Wapiga Ngoma wa Jadi',
        subtitle: 'Kuleta Utamaduni Kuishi',
        bookNow: 'Weka Nafasi',
        watchPerformances: 'Tazama Maonyesho',
      },
      performances: {
        title: 'Maonyesho',
      },
      about: {
        title: 'Kuhusu Sisi',
        subtitle: 'Kusherehekea Mila Kupitia Maonyesho',
        description: 'Kushiriki mtetemo wetu: michezo ya jadi ya Kiafrika kupitia mapigo ya ngoma yenye nguvu, mielekeo yetu ya msingi, kutunza urithi wetu wa kitamaduni. Kufanya maonyesho katika matukio mbalimbali ya ndani na kimataifa. Kujitolea kwetu kwa uhalisia na ubora.',
      },
      services: {
        title: 'Huduma',
        stagePerformances: 'Maonyesho ya Jukwaani',
        culturalShowcases: 'Maonyesho ya Kitamaduni',
        schoolWorkshops: 'Warsha za Shule',
        weddingsEvents: 'Harusi na Matukio',
        drummingClasses: 'Madarasa ya Ngoma',
        costumeDisplays: 'Maonyesho ya Mavazi',
      },
      video: {
        title: 'Tazama Video Yetu',
      },
      gallery: {
        title: 'Galeria',
        subtitle: 'Chunguza wakati wetu waliochukuliwa kwenye maonyesho',
      },
      events: {
        title: 'Matukio na Shughuli',
        subtitle: 'Jiunge nasi katika maonyesho yetu yanayokuja na sherehe za kitamaduni',
        event1: {
          title: 'Tamasha la Kitamaduni 2024',
          date: 'Desemba 15, 2024',
          time: '6:00 PM - 10:00 PM',
          location: 'Kituo cha Utamaduni cha Jiji',
          description: 'Sherehe ya kila mwaka ya muziki na michezo ya jadi',
        },
        event2: {
          title: 'Warsha za Shule',
          date: 'Januari 10-12, 2025',
          time: '9:00 AM - 3:00 PM',
          location: 'Shule Mbalimbali',
          description: 'Warsha za ngoma na michezo kwa wanafunzi',
        },
        event3: {
          title: 'Maonyesho ya Jamii',
          date: 'Februari 20, 2025',
          time: '7:00 PM - 9:00 PM',
          location: 'Ukumbi wa Jamii',
          description: 'Maonyesho ya jadi yanayosherehekea urithi wetu',
        },
      },
      booking: {
        title: 'Weka Nafasi ya Maonyesho',
        subtitle: 'Jaza fomu hapa chini na tutawasiliana nawe kupitia WhatsApp',
        name: 'Jina Kamili',
        email: 'Barua Pepe',
        phone: 'Nambari ya Simu',
        date: 'Tarehe ya Tukio',
        eventType: 'Aina ya Tukio',
        message: 'Maelezo Zaidi',
        submit: 'Tuma Ombi',
      },
    },
  },
  fr: {
    translation: {
      nav: {
        home: 'Accueil',
        about: 'À propos',
        performances: 'Performances',
        services: 'Services',
        gallery: 'Galerie',
        events: 'Événements',
        booking: 'Réserver',
        contact: 'Contact',
      },
      hero: {
        title: 'Danseurs et Percussionnistes Traditionnels',
        subtitle: 'Donner Vie à la Culture',
        bookNow: 'Réserver',
        watchPerformances: 'Voir les Performances',
      },
      performances: {
        title: 'Performances',
      },
      about: {
        title: 'À Propos de Nous',
        subtitle: 'Célébrer la Tradition par la Performance',
        description: 'Partager notre vibration: danses africaines traditionnelles à travers des rythmes de tambour vibrants, nos mouvements fondamentaux, préservant notre patrimoine culturel. Se produisant lors d\'événements locaux et internationaux. Notre dévouement à l\'authenticité et à l\'excellence.',
      },
      services: {
        title: 'Services',
        stagePerformances: 'Performances Scéniques',
        culturalShowcases: 'Vitrines Culturelles',
        schoolWorkshops: 'Ateliers Scolaires',
        weddingsEvents: 'Mariages et Événements',
        drummingClasses: 'Cours de Percussion',
        costumeDisplays: 'Expositions de Costumes',
      },
      video: {
        title: 'Regarder Notre Vidéo',
      },
      gallery: {
        title: 'Galerie',
        subtitle: 'Explorez nos moments capturés en performance',
      },
      events: {
        title: 'Événements et Activités',
        subtitle: 'Rejoignez-nous lors de nos prochaines performances et célébrations culturelles',
        event1: {
          title: 'Festival Culturel 2024',
          date: '15 décembre 2024',
          time: '18h00 - 22h00',
          location: 'Centre Culturel de la Ville',
          description: 'Célébration annuelle de la musique et de la danse traditionnelles',
        },
        event2: {
          title: 'Série d\'Ateliers Scolaires',
          date: '10-12 janvier 2025',
          time: '9h00 - 15h00',
          location: 'Diverses Écoles',
          description: 'Ateliers interactifs de percussion et de danse pour les élèves',
        },
        event3: {
          title: 'Performance Communautaire',
          date: '20 février 2025',
          time: '19h00 - 21h00',
          location: 'Salle Communautaire',
          description: 'Performances traditionnelles célébrant notre patrimoine',
        },
      },
      booking: {
        title: 'Réserver une Performance',
        subtitle: 'Remplissez le formulaire ci-dessous et nous vous contacterons via WhatsApp',
        name: 'Nom Complet',
        email: 'Adresse Email',
        phone: 'Numéro de Téléphone',
        date: 'Date de l\'Événement',
        eventType: 'Type d\'Événement',
        message: 'Détails Supplémentaires',
        submit: 'Envoyer la Demande',
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
