import { useState } from 'react';
import '@/styles/scss/main.scss';
import Login from '@/components/Login';
import Register from '@/components/Register';

const pages = {
  // Add more pages here as needed
  login: Login,
  register: Register,
};

type PageKey = keyof typeof pages;

function App() {
  const [currentPage, setCurrentPage] = useState<PageKey>('login');

  const handleNavigation = (page: PageKey) => {
    setCurrentPage(page);
  };

  const CurrentPageComponent = pages[currentPage];

  return (
    <div className="grid grid-cols-[auto_1fr] h-screen">
      <div className="border-r border-gray-300 p-4 bg-gray-100 w-auto">
        <h2 className="font-bold mb-4">Pages</h2>
        {Object.keys(pages).map((page) => (
          <div
            key={page}
            className={`cursor-pointer p-2 hover:bg-gray-200 ${currentPage === page ? 'bg-gray-200 font-bold' : ''}`}
            onClick={() => handleNavigation(page as PageKey)}
          >
            {page.charAt(0).toUpperCase() + page.slice(1)}
          </div>
        ))}
      </div>
      <div className="p-8 text-center">
        <CurrentPageComponent />
      </div>
    </div>
  );
}

export default App;
