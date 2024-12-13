import Header from './Header';
import MainContent from './MainContent';

function ProfilePage() {
  return (
    <div className="flex w-full min-w-[375px] flex-col">
      <Header />
      <MainContent />
    </div>
  );
}

export default ProfilePage;
