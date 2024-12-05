import React from 'react'

const ImageCard = ({data}) => {
  const {userImageURL, tags, user, likes, views, webformatURL} = data;
  function handleImage(){
    window.open(webformatURL, '_blank');
  }
  return (
    <div>
      <div>
        <figure className='shadow-xl rounded-xl w-72 mx-10 bg-[#FDF7F4] my-10'>
            <img className='rounded-t-xl w-72 h-64 cursor-pointer' src={webformatURL} title={tags} alt={tags} onClick={handleImage} />
            <figcaption className='flex flex-col justify-center items-start gap-4 px-4 py-2'>
                <p className='text-[#82b478] font-bold text-xl line-clamp-1'>Photo by {user}</p>
                <div className='flex justify-center items-center gap-3 mb-2'>
                    <p className='bg-[#685752] font-semibold rounded-full px-4 py-2 text-sm text-[#f7dcd0] cursor-pointer hover:text-[#685752] hover:bg-[#f0b49a]'>❤️ {likes}</p>
                    <p className='bg-[#685752] font-semibold rounded-full px-4 py-2 text-sm text-[#f7dcd0] cursor-pointer hover:text-[#685752] hover:bg-[#f0b49a]'>👀 {views}</p>
                </div>
            </figcaption>
        </figure>
      </div>
    </div>
  )
}

export default ImageCard
