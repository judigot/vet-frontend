import { useState } from 'react';
import '@/styles/scss/main.scss';
import i18n from 'i18next';
import Title from '@/components/Title';
import Login from '@/components/Login';
import Register from '@/components/Register';
import Appointments from '@/components/Appointments';
import Reminders from '@/components/Reminders';
import OwnerMyPage from '@/components/OwnerMyPage';
import VetMyPage from '@/components/VetMyPage';
import OwnerProfileSetting from '@/components/OwnerProfileSetting';
import PetsProfileSetting from '@/components/PetsProfileSetting';
import { useTranslation } from 'react-i18next';
import {
  useApplicationSettingsStore,
  Languages,
} from '@/useApplicationSettingsStore';
import 'bootstrap/dist/css/bootstrap.min.css';


const pages = {
  title: Title,
  login: Login,
  register: Register,
  appointments: Appointments,
  reminders: Reminders,
  ownermypage: OwnerMyPage,
  vetmypage: VetMyPage,
  ownerprofilesetting: OwnerProfileSetting,
  petsprofilesetting: PetsProfileSetting,
} as const;

type PageKey = keyof typeof pages;

function App() {
  const [currentPage, setCurrentPage] = useState<PageKey>('login');
  const { selectedLanguage, setLanguage } = useApplicationSettingsStore();
  const { t } = useTranslation(); // useTranslation hook from i18next

  const isKeyOf = <T extends object>(
    obj: T,
    key: string,
  ): key is Extract<keyof T, string> => {
    return key in obj;
  };

  const handleNavigation = (page: PageKey) => {
    setCurrentPage(page);
  };

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const selected = event.target.value;
    if (selected === Languages.ENGLISH || selected === Languages.JAPANESE) {
      setLanguage(selected);
      void i18n.changeLanguage(selected);
    }
  };

  const CurrentPageComponent = pages[currentPage];

  return (
    <div className="grid grid-cols-[auto_1fr] h-screen">
      <div className="border-r border-gray-300 p-4 bg-gray-100 w-auto flex flex-col justify-between">
        <div>
          <h2 className="font-bold mb-4">{t('pages')}</h2>{' '}
          {Object.keys(pages).map((page) => {
            if (isKeyOf(pages, page)) {
              return (
                <div
                  key={page}
                  className={`cursor-pointer p-2 hover:bg-gray-200 ${
                    currentPage === page ? 'bg-gray-200 font-bold' : ''
                  }`}
                  onClick={() => {
                    handleNavigation(page);
                  }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={() => null}
                  aria-label={page}
                >
                  {page.charAt(0).toUpperCase() + page.slice(1)}
                </div>
              );
            }
            return null;
          })}
        </div>

        <div className="mt-auto">
          <h3 className="font-bold mb-2">{t('selectLanguage')}</h3>{' '}
          <select
            value={selectedLanguage}
            onChange={handleLanguageChange}
            className="border border-gray-300 p-2 rounded w-full"
          >
            <option value={Languages.ENGLISH}>English</option>
            <option value={Languages.JAPANESE}>Japanese</option>
          </select>
        </div>
      </div>

      <div className="p-8 text-center">
        <CurrentPageComponent />
      </div>
    </div>
  );
}

export default App;
