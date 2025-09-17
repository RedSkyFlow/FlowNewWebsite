import Image from 'next/image';

type ImageInfo = {
  src: string;
  alt: string;
};

type ImageCategory = {
  title: string;
  images: ImageInfo[];
};

export default function ImageGalleryPage() {
  // Guessing image paths based on project structure and naming conventions
  const imageCategories: ImageCategory[] = [
    {
      title: "Logos",
      images: [
        { src: '/images/logos/Allxs_logo.png', alt: 'Allxs Logo' },
        { src: '/images/logos/Baron Group Logo Round.webp', alt: 'Baron Group Logo' },
        { src: '/images/logos/CNN HPP logo.webp', alt: 'CNN HPP Logo' },
        { src: '/images/logos/Flow-Logo-Dark.png', alt: 'Flow Logo Dark' },
      ],
    },
    {
      title: "Websites",
      images: [
        { src: '/images/websites/flow-website-preview.png', alt: 'Flow Website Preview' },
        { src: '/images/websites/another-website-preview.png', alt: 'Another Website Preview' },
      ],
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Image Gallery</h1>
      {imageCategories.map((category) => (
        <section key={category.title} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">{category.title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {category.images.map((image) => (
              <div key={image.src} className="relative aspect-square">
                <Image src={image.src} alt={image.alt} layout="fill" objectFit="contain" className="p-2" />
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}