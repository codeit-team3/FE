interface BookClubDetailPageProps {
  params: {
    id: string;
  };
}

function BookClubDetailPage({ params }: BookClubDetailPageProps) {
  return (
    <div>
      <h1>북클럽 상세 페이지</h1>
      <p>북클럽 ID: {params.id}</p>
    </div>
  );
}

export default BookClubDetailPage;
