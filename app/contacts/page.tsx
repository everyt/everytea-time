const ContactView = dynamic(() => import('@/components/view/ContactView'), { ssr: false });

import dynamic from 'next/dynamic';

export default function Contacts() {
  return <ContactView />;
}
