export async function getServerSideProps() {
  const result = await fetch("https://jsonplaceholder.typicode.com/photos");
  const data = await result.json();

  return {
    props: {
      albums: data,
    },
  };
}

export default function Ssr({ albums }: { albums: any[] }) {
  return (
    <div className="p-4">
      <div className="grid grid-cols-3 gap-4">
        {albums?.map((album: any) => (
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {album.title}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {album.url}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {album.thumbnailUrl}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
